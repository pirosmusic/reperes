# CLAUDE.md — Reperes

## Agent skills

### Issue tracker

Fichiers markdown locaux sous `.scratch/`, même si ce dépôt a un remote GitHub (`pirosmusic/reperes`) — suivi solo, pas via GitHub Issues. Voir `docs/agents/issue-tracker.md`.

### Triage labels

Labels canoniques par défaut (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). Voir `docs/agents/triage-labels.md`.

### Domain docs

Contexte unique (`CONTEXT.md` + `docs/adr/` à la racine, créés à la demande). Voir `docs/agents/domain.md`.

## graphify

Graphe à `.graphify/graph.json`. Pour une question de code/architecture : `graphify query
"<question>"` d'abord (plus petit que `GRAPH_REPORT.md` ou un grep brut). Détail complet des
commandes et cas limites : `.claude/skills/graphify/SKILL.md`.
