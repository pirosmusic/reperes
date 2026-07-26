#!/usr/bin/env node
/* ============================================================
   Validation structurelle des tests (src/data*.js), sans navigateur.
   Complète la suite Playwright (test.js) qui vérifie le comportement
   affiché ; ce script vérifie les données elles-mêmes :
     - bornes min/max des dimensions recalculées à partir des items réels
     - monotonie et couverture complète des bandes
     - catégories toutes présentes dans ORDRE_CATS (sinon un test devient
       invisible sur l'accueil, sans aucune erreur visible)
     - toutes les entrées CADENCE présentes
     - sources non vides (instrument, statut, refs)
     - aucune chaîne de texte provisoire ("à confirmer", "TBD", etc.)
   Usage : node tools/validate-data.js
   ============================================================ */
"use strict";
var fs = require("fs");
var vm = require("vm");
var path = require("path");

var SRC = path.join(__dirname, "..", "src");
var DATA_FILES = ["data1.js", "data2.js", "data3.js", "data4.js", "data5.js"];

var code = DATA_FILES.map(function(f){ return fs.readFileSync(path.join(SRC, f), "utf8"); }).join("\n");
var sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

var TESTS = sandbox.TESTS;

// ORDRE_CATS et CADENCE vivent dans views.js ; on les extrait par une
// petite regex plutôt que d'exécuter tout views.js (qui touche le DOM).
var viewsSrc = fs.readFileSync(path.join(SRC, "views.js"), "utf8");
function extractArrayLiteral(varName){
  var m = viewsSrc.match(new RegExp(varName + "\\s*=\\s*(\\[[^\\]]*\\])"));
  if (!m) throw new Error("Impossible de trouver " + varName + " dans views.js");
  return JSON.parse(m[1].replace(/'/g, '"'));
}
function extractCadenceKeys(){
  var m = viewsSrc.match(/CADENCE\s*=\s*\{([^}]*)\}/);
  if (!m) throw new Error("Impossible de trouver CADENCE dans views.js");
  var keys = [];
  var re = /([a-z0-9]+)\s*:/g, mm;
  while ((mm = re.exec(m[1]))) keys.push(mm[1]);
  return keys;
}

var ORDRE_CATS = extractArrayLiteral("ORDRE_CATS");
var CADENCE_KEYS = extractCadenceKeys();

var problems = [];
function P(msg){ problems.push(msg); }

console.log("Nombre de tests :", TESTS.length);

// 1. IDs uniques
var ids = {};
TESTS.forEach(function(t){
  if (ids[t.id]) P("ID dupliqué : " + t.id);
  ids[t.id] = true;
});

// 2. Catégories : présentes dans ORDRE_CATS (sinon invisible sur l'accueil)
var catsSeen = {};
TESTS.forEach(function(t){ catsSeen[t.cat] = (catsSeen[t.cat] || 0) + 1; });
Object.keys(catsSeen).forEach(function(c){
  if (ORDRE_CATS.indexOf(c) === -1) {
    P("Catégorie absente de ORDRE_CATS (n'apparaîtra JAMAIS sur l'accueil) : \"" + c + "\" (" +
      TESTS.filter(function(t){ return t.cat === c; }).map(function(t){ return t.id; }).join(",") + ")");
  }
});

// 3. CADENCE complète
TESTS.forEach(function(t){
  if (CADENCE_KEYS.indexOf(t.id) === -1) P("Test sans entrée CADENCE (views.js) : " + t.id);
});

// 4. Dimensions : bornes réelles vs déclarées, bandes monotones et complètes
TESTS.forEach(function(t){
  if (!t.dims) { P(t.id + " : pas de dims"); return; }
  var dimKeys = Object.keys(t.dims);
  var acc = {};
  (t.items || []).forEach(function(it, i){
    if (!it.d) { P(t.id + " item " + i + " : pas de dimension (d)"); return; }
    if (dimKeys.indexOf(it.d) === -1) P(t.id + " item " + i + " : dimension inconnue \"" + it.d + "\"");
    var ech = (it.e !== undefined) ? (t.echelles && t.echelles[it.e]) : t.echelle;
    if (!ech) { P(t.id + " item " + i + " : échelle introuvable (e=" + it.e + ")"); return; }
    var vmin = Math.min.apply(null, ech.valeurs), vmax = Math.max.apply(null, ech.valeurs);
    if (ech.labels.length !== ech.valeurs.length) P(t.id + " item " + i + " : labels/valeurs longueur différente");
    if (!acc[it.d]) acc[it.d] = { min: 0, max: 0, n: 0 };
    acc[it.d].min += vmin; acc[it.d].max += vmax; acc[it.d].n++;
  });
  dimKeys.forEach(function(k){
    var dim = t.dims[k];
    var a = acc[k];
    if (!a) { P(t.id + "." + k + " : aucun item ne référence cette dimension"); return; }
    var expMin, expMax;
    if (dim.format === "moyenne") { expMin = a.min / a.n; expMax = a.max / a.n; }
    else if (dim.format === "pct25") { expMin = a.min * 4; expMax = a.max * 4; }
    else { expMin = a.min; expMax = a.max; }
    if (Math.abs(expMin - dim.min) > 0.011) P(t.id + "." + k + " : min déclaré=" + dim.min + " mais min réel=" + expMin + " (format " + dim.format + ", " + a.n + " items)");
    if (Math.abs(expMax - dim.max) > 0.011) P(t.id + "." + k + " : max déclaré=" + dim.max + " mais max réel=" + expMax + " (format " + dim.format + ", " + a.n + " items)");
    if (!dim.bandes || !dim.bandes.length) { P(t.id + "." + k + " : pas de bandes"); return; }
    var prevMax = -Infinity;
    dim.bandes.forEach(function(b, bi){
      if (b.max < prevMax) P(t.id + "." + k + " : bandes non croissantes à l'index " + bi + " (max=" + b.max + " après " + prevMax + ")");
      prevMax = b.max;
      if (["ok", "attention", "alerte", "neutre"].indexOf(b.niveau) === -1) P(t.id + "." + k + " : niveau de bande inconnu \"" + b.niveau + "\"");
    });
    var lastMax = dim.bandes[dim.bandes.length - 1].max;
    if (lastMax < dim.max - 0.011) P(t.id + "." + k + " : dernière bande (max=" + lastMax + ") ne couvre pas le score max déclaré (" + dim.max + ")");
    if (dim.valence !== true && dim.valence !== false && dim.valence !== null) P(t.id + "." + k + " : valence invalide (" + dim.valence + ")");
  });
});

// 5. flagCrise dans les bornes
TESTS.forEach(function(t){
  if (t.flagCrise && (t.flagCrise.itemIndex < 0 || t.flagCrise.itemIndex >= (t.items || []).length)) {
    P(t.id + " : flagCrise.itemIndex hors bornes");
  }
});

// 6. Sources complètes
TESTS.forEach(function(t){
  if (!t.source || !t.source.instrument || !t.source.statut || !t.source.refs || !t.source.refs.length) {
    P(t.id + " : source incomplète");
  }
});

// 7. Chaînes provisoires interdites — uniquement dans les VALEURS TEXTE
// (on ne stringify pas tout l'objet : ça ferait remonter "valence: null",
// qui est une valeur légitime, pas un placeholder oublié)
var forbidden = /(à confirmer|TBC|TBD|\[À COMPLÉTER\]|undefined)/i;
function walkStrings(node, cb){
  if (typeof node === "string") { cb(node); return; }
  if (Array.isArray(node)) { node.forEach(function(n){ walkStrings(n, cb); }); return; }
  if (node && typeof node === "object") { Object.keys(node).forEach(function(k){ walkStrings(node[k], cb); }); }
}
TESTS.forEach(function(t){
  walkStrings(t, function(s){
    var m = s.match(forbidden);
    if (m) P(t.id + " : chaîne suspecte trouvée : \"" + m[0] + "\"");
  });
});

// 8. echelles[] utilisé uniquement si au moins un item y fait référence
TESTS.forEach(function(t){
  if (t.echelles && !t.items.some(function(it){ return it.e !== undefined; })) {
    P(t.id + " : echelles[] défini mais aucun item n'a de champ e");
  }
});

console.log("\n=== PROBLEMES (" + problems.length + ") ===");
problems.forEach(function(p){ console.log("- " + p); });
process.exit(problems.length ? 1 : 0);
