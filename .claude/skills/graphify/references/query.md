## For /graphify query

Two traversal modes - choose based on the question:

| Mode | Flag | Best for |
|------|------|----------|
| BFS (default) | _(none)_ | "What is X connected to?" - broad context, nearest neighbors first |
| DFS | `--dfs` | "How does X reach Y?" - trace a specific chain or dependency path |

First check the graph exists:
```bash
node -e "
const fs = require('fs');
if (!fs.existsSync('.graphify/graph.json')) {
    console.log('ERROR: No graph found. Run /graphify <path> first to build the graph.');
    process.exit(1);
}
"
```
If it fails, stop and tell the user to run `/graphify <path>` first.

### Step 0 - Constrained query expansion (before traversal)

`graphify query` matches nodes by case-folded substring + IDF - **no stemming, no synonyms, no cross-language match**. When the question uses different vocabulary than the graph labels (user says "обработчик" / graph says "handler"; "authentication" / "Guardian"), the literal matcher returns 0 hits. Expand the query against the **actual graph vocabulary** first - never invent tokens:

```bash
node -e "
const fs = require('fs');
const g = JSON.parse(fs.readFileSync('.graphify/graph.json','utf-8'));
const vocab = new Set();
for (const n of (g.nodes || [])) {
  for (const c of String(n.label || '').match(/[^\W\d_]+/gu) || []) {
    for (const p of (c.match(/[A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+|[A-Z]+/g) || [c])) {
      if (p.length > 1) vocab.add(p.toLowerCase());
    }
  }
}
fs.writeFileSync('.graphify/.vocab.txt', [...vocab].sort().join('\n'));
console.log('vocab: ' + vocab.size + ' tokens');
"
```

Read `.graphify/.vocab.txt`, then pick **up to 12 tokens from that exact list** that match the query intent. Hard constraints:
- Use only tokens present in `.vocab.txt` - do **not** invent tokens.
- A concept with no plausible vocab token: skip it, no near-synonym from memory.
- No vocab token matches at all: output an empty list and tell the user the corpus has no relevant vocabulary; do not fabricate a search.
- Cross-language: e.g. Russian "аутентификация" - look for `auth`, `credential`, `token`, `security` **iff present** in the vocab.

Print the selection before querying (`Query expanded to (from graph vocab, N tokens): [...]`), then run `graphify query` with the joined expanded tokens (keep the original question only for `save-result`).

Before deep traversal, run the compact first-hop summary and use it to choose the right graph action:

```bash
graphify summary --graph .graphify/graph.json
graphify recommend-commits --files src/auth.ts,src/session.ts --graph .graphify/graph.json
graphify review-analysis --files src/auth.ts --graph .graphify/graph.json
graphify review-eval --cases .graphify/review-cases.json --graph .graphify/graph.json
```

Load `.graphify/graph.json`, then:

1. Find the 1-3 nodes whose label best matches key terms in the question.
2. Run the appropriate traversal from each starting node.
3. Read the subgraph - node labels, edge relations, confidence tags, source locations.
4. Answer using **only** what the graph contains. Quote `source_location` when citing a specific fact.
5. If the graph lacks enough information, say so - do not hallucinate edges.

```bash
node -e "
const fs = require('fs');
const Graph = require('graphology');

const data = JSON.parse(fs.readFileSync('.graphify/graph.json', 'utf-8'));
const G = new Graph({type: 'undirected'});
for (const n of data.nodes) { const {id, ...a} = n; G.mergeNode(id, a); }
for (const l of data.links) { const {source, target, ...a} = l; if (G.hasNode(source) && G.hasNode(target)) try { G.mergeEdge(source, target, a); } catch {} }

const question = 'QUESTION';
const mode = 'MODE';  // 'bfs' or 'dfs'
const terms = question.split(/\s+/).filter(t => t.length > 3).map(t => t.toLowerCase());

// Find best-matching start nodes
const scored = [];
G.forEachNode((nid, ndata) => {
    const label = (ndata.label || '').toLowerCase();
    const score = terms.filter(t => label.includes(t)).length;
    if (score > 0) scored.push([score, nid]);
});
scored.sort((a, b) => b[0] - a[0]);
const startNodes = scored.slice(0, 3).map(s => s[1]);

if (!startNodes.length) {
    console.log('No matching nodes found for query terms:', terms);
    process.exit(0);
}

const subgraphNodes = new Set();
const subgraphEdges = [];

if (mode === 'dfs') {
    const visited = new Set();
    const stack = [...startNodes].reverse().map(n => [n, 0]);
    while (stack.length) {
        const [node, depth] = stack.pop();
        if (visited.has(node) || depth > 6) continue;
        visited.add(node);
        subgraphNodes.add(node);
        G.forEachNeighbor(node, neighbor => {
            if (!visited.has(neighbor)) {
                stack.push([neighbor, depth + 1]);
                subgraphEdges.push([node, neighbor]);
            }
        });
    }
} else {
    let frontier = new Set(startNodes);
    startNodes.forEach(n => subgraphNodes.add(n));
    for (let i = 0; i < 3; i++) {
        const nextFrontier = new Set();
        for (const n of frontier) {
            G.forEachNeighbor(n, neighbor => {
                if (!subgraphNodes.has(neighbor)) {
                    nextFrontier.add(neighbor);
                    subgraphEdges.push([n, neighbor]);
                }
            });
        }
        nextFrontier.forEach(n => subgraphNodes.add(n));
        frontier = nextFrontier;
    }
}

const tokenBudget = BUDGET;  // default 2000
const charBudget = tokenBudget * 4;

const relevance = nid => {
    const label = (G.getNodeAttributes(nid).label || '').toLowerCase();
    return terms.filter(t => label.includes(t)).length;
};

const rankedNodes = [...subgraphNodes].sort((a, b) => relevance(b) - relevance(a));

const lines = [\`Traversal: \${mode.toUpperCase()} | Start: \${JSON.stringify(startNodes.map(n => G.getNodeAttribute(n, 'label') || n))} | \${subgraphNodes.size} nodes\`];
for (const nid of rankedNodes) {
    const d = G.getNodeAttributes(nid);
    lines.push(\`  NODE \${d.label || nid} [src=\${d.source_file || ''} loc=\${d.source_location || ''}]\`);
}
for (const [u, v] of subgraphEdges) {
    if (subgraphNodes.has(u) && subgraphNodes.has(v)) {
        const edge = G.hasEdge(u, v) ? G.getEdgeAttributes(G.edge(u, v)) : {};
        lines.push(\`  EDGE \${G.getNodeAttribute(u, 'label') || u} --\${edge.relation || ''} [\${edge.confidence || ''}]--> \${G.getNodeAttribute(v, 'label') || v}\`);
    }
}

let output = lines.join('\n');
if (output.length > charBudget) {
    output = output.slice(0, charBudget) + \`\n... (truncated at ~\${tokenBudget} token budget - use --budget N for more)\`;
}
console.log(output);
"
```

Replace `QUESTION` with the user's actual question, `MODE` with `bfs` or `dfs`, and `BUDGET` with the token budget (default `2000`, or whatever `--budget N` specifies). Then answer based on the subgraph output above.

After writing the answer, save it back into the graph so it improves future queries:

```bash
node -e "
const { saveQueryResult } = require('@sentropic/graphify');
saveQueryResult({
    question: 'QUESTION',
    answer: 'ANSWER',
    memoryDir: '.graphify/memory',
    queryType: 'query',
    sourceNodes: SOURCE_NODES,  // list of node labels cited, or []
});
console.log('Query result saved to .graphify/memory/');
"
```

Replace `QUESTION` with the question, `ANSWER` with your full answer text, `SOURCE_NODES` with the list of node labels you cited. This closes the feedback loop: the next `--update` will extract this Q&A as a node in the graph.

---

## For /graphify path

Find the shortest path between two named concepts in the graph.

First check the graph exists:
```bash
node -e "
const fs = require('fs');
if (!fs.existsSync('.graphify/graph.json')) {
    console.log('ERROR: No graph found. Run /graphify <path> first to build the graph.');
    process.exit(1);
}
"
```
If it fails, stop and tell the user to run `/graphify <path>` first.

```bash
node -e "
const fs = require('fs');
const Graph = require('graphology');
const { bidirectional } = require('graphology-shortest-path/unweighted');

const data = JSON.parse(fs.readFileSync('.graphify/graph.json', 'utf-8'));
const G = new Graph({type: 'undirected'});
for (const n of data.nodes) { const {id, ...a} = n; G.mergeNode(id, a); }
for (const l of data.links) { const {source, target, ...a} = l; if (G.hasNode(source) && G.hasNode(target)) try { G.mergeEdge(source, target, a); } catch {} }

const aTerm = 'NODE_A';
const bTerm = 'NODE_B';

function findNode(term) {
    term = term.toLowerCase();
    const scored = [];
    G.forEachNode((n, a) => {
        const label = (a.label || '').toLowerCase();
        const score = term.split(/\s+/).filter(w => label.includes(w)).length;
        if (score > 0) scored.push([score, n]);
    });
    scored.sort((a, b) => b[0] - a[0]);
    return scored.length && scored[0][0] > 0 ? scored[0][1] : null;
}

const src = findNode(aTerm);
const tgt = findNode(bTerm);

if (!src || !tgt) {
    console.log(\`Could not find nodes matching: '\${aTerm}' or '\${bTerm}'\`);
    process.exit(0);
}

const path = bidirectional(G, src, tgt);
if (!path) {
    console.log(\`No path found between '\${aTerm}' and '\${bTerm}'\`);
} else {
    console.log(\`Shortest path (\${path.length - 1} hops):\`);
    for (let i = 0; i < path.length; i++) {
        const nid = path[i];
        const label = G.getNodeAttribute(nid, 'label') || nid;
        if (i < path.length - 1) {
            const edgeKey = G.edge(nid, path[i + 1]);
            const edge = edgeKey ? G.getEdgeAttributes(edgeKey) : {};
            console.log(\`  \${label} --\${edge.relation || ''}--> [\${edge.confidence || ''}]\`);
        } else {
            console.log(\`  \${label}\`);
        }
    }
}
"
```

Replace `NODE_A` and `NODE_B` with the actual concept names from the user. Then explain the path in plain language - what each hop means, why it's significant.

After writing the explanation, save it back:

```bash
node -e "
const { saveQueryResult } = require('@sentropic/graphify');
saveQueryResult({
    question: 'Path from NODE_A to NODE_B',
    answer: 'ANSWER',
    memoryDir: '.graphify/memory',
    queryType: 'path_query',
    sourceNodes: PATH_NODES,  // list of node labels on the path
});
console.log('Path result saved to .graphify/memory/');
"
```

---

## For /graphify explain

Give a plain-language explanation of a single node - everything connected to it.

First check the graph exists:
```bash
node -e "
const fs = require('fs');
if (!fs.existsSync('.graphify/graph.json')) {
    console.log('ERROR: No graph found. Run /graphify <path> first to build the graph.');
    process.exit(1);
}
"
```
If it fails, stop and tell the user to run `/graphify <path>` first.

```bash
node -e "
const fs = require('fs');
const Graph = require('graphology');

const data = JSON.parse(fs.readFileSync('.graphify/graph.json', 'utf-8'));
const G = new Graph({type: 'undirected'});
for (const n of data.nodes) { const {id, ...a} = n; G.mergeNode(id, a); }
for (const l of data.links) { const {source, target, ...a} = l; if (G.hasNode(source) && G.hasNode(target)) try { G.mergeEdge(source, target, a); } catch {} }

const term = 'NODE_NAME';
const termLower = term.toLowerCase();

const scored = [];
G.forEachNode((n, a) => {
    const label = (a.label || '').toLowerCase();
    const score = termLower.split(/\s+/).filter(w => label.includes(w)).length;
    if (score > 0) scored.push([score, n]);
});
scored.sort((a, b) => b[0] - a[0]);
if (!scored.length || scored[0][0] === 0) {
    console.log(\`No node matching '\${term}'\`);
    process.exit(0);
}

const nid = scored[0][1];
const dataN = G.getNodeAttributes(nid);
console.log(\`NODE: \${dataN.label || nid}\`);
console.log(\`  source: \${dataN.source_file || 'unknown'}\`);
console.log(\`  type: \${dataN.file_type || 'unknown'}\`);
console.log(\`  degree: \${G.degree(nid)}\`);
console.log();
console.log('CONNECTIONS:');
G.forEachNeighbor(nid, (neighbor) => {
    const edgeKey = G.edge(nid, neighbor);
    const edge = edgeKey ? G.getEdgeAttributes(edgeKey) : {};
    const nlabel = G.getNodeAttribute(neighbor, 'label') || neighbor;
    console.log(\`  --\${edge.relation || ''}--> \${nlabel} [\${edge.confidence || ''}] (\${G.getNodeAttribute(neighbor, 'source_file') || ''})\`);
});
"
```

Replace `NODE_NAME` with the concept the user asked about. Then write a 3-5 sentence explanation of what this node is, what it connects to, and why those connections are significant. Use the source locations as citations.

After writing the explanation, save it back:

```bash
node -e "
const { saveQueryResult } = require('@sentropic/graphify');
saveQueryResult({
    question: 'Explain NODE_NAME',
    answer: 'ANSWER',
    memoryDir: '.graphify/memory',
    queryType: 'explain',
    sourceNodes: ['NODE_NAME'],
});
console.log('Explanation saved to .graphify/memory/');
"
```

---

