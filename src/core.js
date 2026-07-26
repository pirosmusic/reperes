/* ============================================================
   NOYAU : stockage, scoring, graphiques SVG
   ============================================================ */
"use strict";

function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function byId(id){ return TESTS.find(function(t){ return t.id === id; }); }
function fmtDate(iso){
  try { return new Intl.DateTimeFormat("fr-FR", {day:"numeric", month:"short", year:"numeric"}).format(new Date(iso)); }
  catch(e){ return iso.slice(0,10); }
}
function fmtDateH(iso){
  try { return new Intl.DateTimeFormat("fr-FR", {day:"numeric", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit"}).format(new Date(iso)); }
  catch(e){ return iso.slice(0,16).replace("T"," "); }
}

/* ---------- Stockage (localStorage si disponible, sinon mémoire) ---------- */
var Store = (function(){
  var KEY = "iris.v1";
  var mem = null;
  var persistent = true;
  function blank(){ return { v: 1, results: {} }; }
  function load(){
    if (mem) return mem;
    try {
      var raw = window.localStorage.getItem(KEY);
      mem = raw ? JSON.parse(raw) : blank();
      if (!mem || typeof mem !== "object" || !mem.results) mem = blank();
    } catch(e){ persistent = false; mem = blank(); }
    return mem;
  }
  function save(){
    try { window.localStorage.setItem(KEY, JSON.stringify(mem)); persistent = true; }
    catch(e){ persistent = false; }
  }
  return {
    data: load,
    isPersistent: function(){ load(); return persistent; },
    add: function(testId, rec){
      var d = load();
      if (!d.results[testId]) d.results[testId] = [];
      d.results[testId].push(rec);
      save();
    },
    hist: function(testId){ var d = load(); return (d.results[testId] || []).slice().sort(function(a,b){ return a.date < b.date ? -1 : (a.date > b.date ? 1 : 0); }); },
    latest: function(testId){ var h = this.hist(testId); return h.length ? h[h.length-1] : null; },
    previous: function(testId){ var h = this.hist(testId); return h.length > 1 ? h[h.length-2] : null; },
    exportJSON: function(){ return JSON.stringify(load(), null, 2); },
    importJSON: function(text){
      var inc = JSON.parse(text);
      if (!inc || !inc.results) throw new Error("format");
      var d = load(); var n = 0;
      Object.keys(inc.results).forEach(function(tid){
        if (!d.results[tid]) d.results[tid] = [];
        (inc.results[tid] || []).forEach(function(rec){
          if (rec && rec.date && !d.results[tid].some(function(r){ return r.date === rec.date; })){ d.results[tid].push(rec); n++; }
        });
      });
      save(); return n;
    },
    reset: function(){ mem = blank(); save(); }
  };
})();

/* ---------- Scoring ---------- */
function itemScale(test, it){
  if (it && it.e !== undefined && test.echelles) return test.echelles[it.e];
  return test.echelle;
}
function computeScores(test, answers){
  var acc = {};
  test.items.forEach(function(it, i){
    var raw = answers[i];
    var v = itemScale(test, it).valeurs;
    var mn = Math.min.apply(null, v), mx = Math.max.apply(null, v);
    var val = it.r ? (mn + mx - raw) : raw;
    if (!acc[it.d]) acc[it.d] = [];
    acc[it.d].push(val);
  });
  var scores = {};
  Object.keys(test.dims).forEach(function(k){
    var vals = acc[k] || [];
    var sum = vals.reduce(function(a,b){ return a+b; }, 0);
    var f = test.dims[k].format;
    if (f === "moyenne") scores[k] = Math.round((sum / vals.length) * 100) / 100;
    else if (f === "pct25") scores[k] = sum * 4;
    else scores[k] = sum; /* somme */
  });
  var flags = {};
  if (test.flagCrise && answers[test.flagCrise.itemIndex] >= test.flagCrise.seuil) flags.crise = true;
  return { scores: scores, flags: flags };
}
function bandOf(dim, score){
  for (var i = 0; i < dim.bandes.length; i++){
    if (score <= dim.bandes[i].max + 1e-9) return dim.bandes[i];
  }
  return dim.bandes[dim.bandes.length - 1];
}
function fmtScore(dim, v){
  if (dim.format === "moyenne" && dim.max <= 7) return String(Math.round(v*10)/10).replace(".", ",");
  return String(Math.round(v));
}
function fmtOutOf(dim, v){
  return '<span class="scorebig">' + fmtScore(dim, v) + '<small> / ' + dim.max + '</small></span>';
}

/* ---------- Jauge à bandes (SVG) ---------- */
function gaugeSVG(dim, score){
  var W = 340, H = 58, x0 = 8, x1 = W - 8, ty = 20, th = 13;
  var span = dim.max - dim.min;
  function X(v){ return x0 + (v - dim.min) / span * (x1 - x0); }
  var cur = bandOf(dim, score);
  var parts = [];
  var prev = dim.min;
  dim.bandes.forEach(function(b, i){
    var xa = X(prev), xb = X(Math.min(b.max, dim.max));
    var gap = i === 0 ? 0 : 1;               /* espace 2px entre segments */
    var isCur = (b === cur);
    var rx = 4;
    parts.push('<rect class="seg ' + b.niveau + (isCur ? ' cur' : '') + '" x="' + (xa + gap) + '" y="' + ty + '" width="' + Math.max(1, xb - xa - gap*2) + '" height="' + th + '" rx="' + rx + '"/>');
    prev = b.max;
  });
  /* graduations : bornes de bandes + extrémités */
  var seen = {};
  var ticks = [dim.min].concat(dim.bandes.map(function(b){ return b.max; }));
  ticks.forEach(function(v){
    if (v > dim.max) v = dim.max;
    var key = String(Math.round(v*10));
    if (seen[key]) return; seen[key] = 1;
    var anchor = v <= dim.min ? "start" : (v >= dim.max ? "end" : "middle");
    var label = (dim.format === "moyenne" && dim.max <= 7) ? String(v).replace(".", ",") : String(Math.round(v));
    parts.push('<text class="tick" x="' + X(v) + '" y="' + (ty + th + 15) + '" text-anchor="' + anchor + '">' + label + '</text>');
  });
  /* marqueur */
  parts.push('<circle class="mark" cx="' + X(Math.max(dim.min, Math.min(dim.max, score))) + '" cy="' + (ty + th/2) + '" r="7"/>');
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Score ' + esc(fmtScore(dim, score)) + ' sur une échelle de ' + dim.min + ' à ' + dim.max + '">' + parts.join("") + '</svg>';
}

/* ---------- Courbe d'évolution (SVG) ---------- */
function lineChartSVG(dim, entries){
  var W = 340, H = 180, l = 34, r = 14, t = 14, b = 28;
  var span = dim.max - dim.min;
  function Y(v){ return t + (1 - (v - dim.min) / span) * (H - t - b); }
  var n = entries.length;
  function Xi(i){ return n === 1 ? (l + (W - l - r)/2) : l + i / (n - 1) * (W - l - r); }
  var parts = [];
  /* fond : bandes (repères de zones) */
  var prev = dim.min;
  dim.bandes.forEach(function(bd){
    var ya = Y(Math.min(bd.max, dim.max)), yb = Y(prev);
    parts.push('<rect class="seg ' + bd.niveau + '" opacity="0.55" x="' + l + '" y="' + ya + '" width="' + (W - l - r) + '" height="' + Math.max(0, yb - ya) + '"/>');
    prev = bd.max;
  });
  /* grille horizontale : bornes de bandes, libellés à gauche */
  var seen = {};
  [dim.min].concat(dim.bandes.map(function(bd){ return Math.min(bd.max, dim.max); })).forEach(function(v){
    var key = String(Math.round(v*10)); if (seen[key]) return; seen[key] = 1;
    parts.push('<line class="gridln" x1="' + l + '" y1="' + Y(v) + '" x2="' + (W - r) + '" y2="' + Y(v) + '"/>');
    var label = (dim.format === "moyenne" && dim.max <= 7) ? String(v).replace(".", ",") : String(Math.round(v));
    parts.push('<text class="tick" x="' + (l - 5) + '" y="' + (Y(v) + 3.5) + '" text-anchor="end">' + label + '</text>');
  });
  parts.push('<line class="axisln" x1="' + l + '" y1="' + (H - b) + '" x2="' + (W - r) + '" y2="' + (H - b) + '"/>');
  /* ligne + points */
  if (n > 1){
    var d = entries.map(function(e, i){ return (i ? "L" : "M") + Xi(i) + " " + Y(e.v); }).join(" ");
    parts.push('<path class="ln" d="' + d + '"/>');
  }
  entries.forEach(function(e, i){
    parts.push('<circle class="pt" cx="' + Xi(i) + '" cy="' + Y(e.v) + '" r="4.5"><title>' + esc(fmtDate(e.date)) + " : " + esc(fmtScore(dim, e.v)) + '</title></circle>');
  });
  /* étiquette directe : dernier point uniquement */
  var last = entries[n-1];
  var ly = Y(last.v) - 9; if (ly < t + 8) ly = Y(last.v) + 17;
  parts.push('<text class="lbl" x="' + Math.min(Xi(n-1), W - r - 4) + '" y="' + ly + '" text-anchor="end">' + fmtScore(dim, last.v) + '</text>');
  /* dates première / dernière */
  parts.push('<text class="lblm" x="' + l + '" y="' + (H - 8) + '">' + esc(fmtDate(entries[0].date)) + '</text>');
  if (n > 1) parts.push('<text class="lblm" x="' + (W - r) + '" y="' + (H - 8) + '" text-anchor="end">' + esc(fmtDate(last.date)) + '</text>');
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Évolution du score">' + parts.join("") + '</svg>';
}

/* ---------- Sparkline ---------- */
function sparkSVG(dim, entries){
  var W = 92, H = 30, p = 4;
  if (entries.length < 2) return "";
  var span = dim.max - dim.min;
  function Y(v){ return p + (1 - (v - dim.min) / span) * (H - 2*p); }
  function X(i){ return p + i / (entries.length - 1) * (W - 2*p); }
  var d = entries.map(function(e, i){ return (i ? "L" : "M") + X(i) + " " + Y(e.v); }).join(" ");
  var lastX = X(entries.length-1), lastY = Y(entries[entries.length-1].v);
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" aria-hidden="true">' +
    '<path class="ln" style="stroke-width:1.5" d="' + d + '"/>' +
    '<circle class="pt" cx="' + lastX + '" cy="' + lastY + '" r="3"/></svg>';
}

/* ---------- Carte attachement (2 dimensions) ---------- */
function ecrMapSVG(anx, evit){
  var S = 240, p = 30;
  function C(v){ return p + (v - 1) / 6 * (S - 2*p); }
  var mid = C(4);
  var parts = [];
  parts.push('<rect x="' + p + '" y="' + p + '" width="' + (S-2*p) + '" height="' + (S-2*p) + '" fill="none" class="gridln" stroke-width="1"/>');
  parts.push('<line class="axisln" x1="' + mid + '" y1="' + p + '" x2="' + mid + '" y2="' + (S-p) + '"/>');
  parts.push('<line class="axisln" x1="' + p + '" y1="' + mid + '" x2="' + (S-p) + '" y2="' + mid + '"/>');
  var lbl = function(x, y, txt, anchor){ return '<text class="lblm" x="' + x + '" y="' + y + '" text-anchor="' + (anchor||"middle") + '">' + txt + '</text>'; };
  parts.push(lbl((p+mid)/2, p - 8, "Détaché-évitant"));
  parts.push(lbl((mid+S-p)/2, p - 8, "Craintif-évitant"));
  parts.push(lbl((p+mid)/2, S - p + 16, "Plutôt sécure"));
  parts.push(lbl((mid+S-p)/2, S - p + 16, "Préoccupé"));
  parts.push('<text class="lblm" transform="rotate(-90 12 ' + (S/2) + ')" x="12" y="' + (S/2) + '" text-anchor="middle">Évitement ↑</text>');
  parts.push(lbl(S/2, S - 2, "Anxiété d'abandon →"));
  parts.push('<circle class="pt" cx="' + C(anx) + '" cy="' + (S - C(evit)) + '" r="7"><title>Anxiété ' + String(Math.round(anx*10)/10).replace(".", ",") + " · Évitement " + String(Math.round(evit*10)/10).replace(".", ",") + '</title></circle>');
  return '<svg class="quad" viewBox="0 0 ' + S + ' ' + S + '" width="240" style="max-width:100%;margin:0 auto" role="img" aria-label="Position sur les deux dimensions de l\'attachement">' + parts.join("") + '</svg>';
}

/* ---------- Delta sémantique ---------- */
function deltaHTML(dim, now, before){
  if (before === null || before === undefined) return "";
  var d = Math.round((now - before) * 10) / 10;
  if (Math.abs(d) < 1e-9) return '<span class="delta-neu">→ stable</span>';
  var up = d > 0;
  var txt = (up ? "+" : "−") + String(Math.abs(d)).replace(".", ",");
  if (dim.valence === null || dim.valence === undefined) return '<span class="delta-neu">' + (up ? "▲" : "▼") + " " + txt + "</span>";
  var good = (dim.valence === true && up) || (dim.valence === false && !up);
  return '<span class="' + (good ? "delta-good" : "delta-bad") + '">' + (up ? "▲" : "▼") + " " + txt + " " + (good ? "(mieux)" : "(moins bien)") + "</span>";
}
