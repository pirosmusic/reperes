/* ============================================================
   VUES & NAVIGATION
   ============================================================ */
"use strict";

var $app = document.getElementById("app");
var RUN = null;
var CADENCE = { gad7:"2 semaines", phq9:"2 semaines", who5:"2 semaines", pss10:"2 à 3 semaines", cbi:"2 semaines", rosenberg:"4 à 6 semaines", erq:"6 semaines", ecr12:"6 à 8 semaines", ucla3:"4 semaines", bigfive:"3 à 6 mois", sd3:"3 à 6 mois", amour:"3 à 6 mois", pprs:"6 semaines", csi4:"4 à 6 semaines", conflits:"6 semaines", gmsex:"6 semaines", bigfive50:"3 à 6 mois", ecrr36:"6 à 8 semaines", csi32:"4 à 6 semaines", ucla20:"4 semaines", isi:"2 à 4 semaines", scssf:"6 semaines", brs:"2 à 3 mois", bas2:"6 semaines" };
var ORDRE_CATS = ["Clinique — repérage", "Stress & énergie", "Soi", "Émotions", "Couple", "Relations", "Personnalité"];

function go(h){ location.hash = h; }
function cardKey(ev){
  if (ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); ev.currentTarget.click(); }
}
function setNav(which){
  ["home","bord","meth"].forEach(function(k){
    var b = document.getElementById("nav-" + k);
    if (!b) return;
    b.className = (k === which) ? "on" : "";
    if (k === which) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
  });
}
function showNav(){ var nv = document.querySelector("nav"); if (nv) nv.style.display = ""; }
function persistBanner(){
  if (Store.isPersistent()) return "";
  return '<div class="notice">Le stockage local n\'est pas disponible ici : vos résultats ne survivront pas à la fermeture de la page. Pensez à exporter (menu Méthode → Vos données).</div>';
}
function chipHTML(band){
  return '<span class="chip"><span class="dot ' + band.niveau + '"></span>' + esc(band.label) + '</span>';
}
function urgenceHTML(){
  var lis = URGENCES.liste.map(function(u){ return "<li><b>" + esc(u.nom) + "</b> — " + esc(u.detail) + "</li>"; }).join("");
  return '<div class="urgence"><h3>' + esc(URGENCES.titre) + "</h3><p class=\"small\">" + esc(URGENCES.texte) + '</p><ul style="padding-left:18px;margin:6px 0">' + lis + "</ul></div>";
}
function footHTML(){
  return '<div class="foot"><p>Auto-évaluation ≠ diagnostic. En cas de doute, parlez-en à un professionnel de santé.<br>Un moment très difficile ? <b>3114</b> (gratuit, 24h/24) — <a href="#/methode">Méthode &amp; ressources</a></p></div>';
}

/* ---------------- ACCUEIL ---------------- */
function vHome(){
  setNav("home");
  var cats = {};
  TESTS.forEach(function(t){ (cats[t.cat] = cats[t.cat] || []).push(t); });
  var nSerieux = TESTS.filter(function(t){ return t.id !== "amour"; }).length;
  var html = persistBanner() +
    '<div class="hdr"><div class="brand">Iris <small>· auto-évaluations sérieuses</small></div></div>' +
    "<h1>Des questionnaires validés par la recherche, pas des quiz de réseaux sociaux.</h1>" +
    '<p class="small ink2">' + nSerieux + ' instruments issus de la recherche publiée + 1 classique de la pop-psychologie clairement étiqueté comme tel, avec les vrais barèmes, des axes d\'amélioration fondés sur des preuves, et un suivi dans le temps. Vos réponses restent sur votre appareil. <a href="#/methode">Pourquoi cette application →</a></p>';
  var nDone = TESTS.filter(function(t){ return Store.latest(t.id); }).length;
  if (nDone) html += '<button class="btn" onclick="go(\'#/bord\')">Voir mon tableau de bord (' + nDone + " test" + (nDone>1?"s":"") + " fait" + (nDone>1?"s":"") + ")</button>";
  ORDRE_CATS.forEach(function(cat){
    if (!cats[cat]) return;
    html += '<div class="catlabel">' + esc(cat) + "</div>";
    cats[cat].forEach(function(t){
      var last = Store.latest(t.id);
      var status = last ? '<span class="done">Fait le ' + esc(fmtDate(last.date)) + "</span>" : '<span class="muted small">Pas encore fait</span>';
      html += '<div class="card tap" onclick="go(\'#/test/' + t.id + '\')" onkeydown="cardKey(event)" role="button" tabindex="0">' +
        "<b>" + esc(t.nom) + "</b>" +
        '<div class="testmeta">' + esc(t.sigle) + " · " + esc(t.duree) + "</div>" +
        '<div style="margin-top:4px">' + status + "</div></div>";
    });
  });
  html += footHTML();
  $app.innerHTML = html;
  window.scrollTo(0, 0);
}

/* ---------------- INTRO D'UN TEST ---------------- */
function vTestIntro(id){
  setNav("home");
  var t = byId(id); if (!t) return vHome();
  var last = Store.latest(t.id);
  var html = '<p class="small"><a href="#/">← Tous les tests</a></p>' +
    '<span class="pill">' + esc(t.cat) + "</span>" +
    "<h1>" + esc(t.nom) + "</h1>" +
    '<p class="small muted">' + esc(t.sigle) + " · " + esc(t.duree) + "</p>" +
    "<p>" + esc(t.intro) + "</p>";
  if (t.avertissement) html += '<div class="avert"><b>À savoir avant de commencer.</b> ' + esc(t.avertissement) + "</div>";
  html += '<div class="card"><b>Consigne.</b> <span class="ink2">' + esc(t.consigne) + "</span></div>" +
    '<button class="btn" onclick="startTest(\'' + t.id + '\')">' + (last ? "Refaire le test" : "Commencer") + "</button>";
  if (last) html += '<button class="btn ghost" onclick="go(\'#/res/' + t.id + '\')">Voir mon dernier résultat (' + esc(fmtDate(last.date)) + ")</button>";
  html += sourceDetails(t) + footHTML();
  $app.innerHTML = html;
  window.scrollTo(0, 0);
}
function sourceDetails(t){
  var refs = t.source.refs.map(function(r){ return "<li>" + esc(r) + "</li>"; }).join("");
  return "<details><summary>Instrument &amp; références</summary>" +
    "<p class=\"small\"><b>" + esc(t.source.instrument) + "</b></p>" +
    '<p class="small ink2">' + esc(t.source.statut) + "</p>" +
    '<ul class="reslist">' + refs + "</ul></details>";
}

/* ---------------- PASSATION ---------------- */
function startTest(id){
  var t = byId(id); if (!t) return;
  RUN = { test: t, answers: new Array(t.items.length), i: 0, backHash: location.hash, locked: false };
  renderRun();
}
function renderRun(){
  var nv = document.querySelector("nav"); if (nv) nv.style.display = "none";
  RUN.locked = false;
  var t = RUN.test, i = RUN.i, n = t.items.length;
  var it = t.items[i];
  var ech = itemScale(t, it);
  var opts = ech.labels.map(function(lab, k){
    var v = ech.valeurs[k];
    var sel = RUN.answers[i] === v;
    return '<button class="opt' + (sel ? " sel" : "") + '" aria-pressed="' + (sel ? "true" : "false") + '" onclick="answer(' + v + ')">' + esc(lab) + "</button>";
  }).join("");
  $app.innerHTML =
    '<div class="hdr"><b>' + esc(t.nom) + '</b><button class="linkbtn" onclick="quitRun()">Abandonner</button></div>' +
    '<div class="progress" aria-hidden="true"><i style="width:' + Math.round(i/n*100) + '%"></i></div>' +
    '<div class="qcount" aria-live="polite">Question ' + (i+1) + " sur " + n + "</div>" +
    '<div class="consigne">' + esc(t.consigne) + "</div>" +
    '<div class="qtext" tabindex="-1">' + esc(it.t) + "</div>" + opts +
    '<div class="runnav">' + (i > 0 ? '<button class="linkbtn" onclick="prevQ()">← Question précédente</button>' : "<span></span>") + "</div>";
  window.scrollTo(0, 0);
  var q = $app.querySelector(".qtext");
  if (q && q.focus) try { q.focus({ preventScroll: true }); } catch(e){ q.focus(); }
}
function answer(v){
  if (!RUN || RUN.locked) return;
  RUN.locked = true;
  RUN.answers[RUN.i] = v;
  if (RUN.i < RUN.test.items.length - 1){
    RUN.i++;
    setTimeout(renderRun, 120);
  } else {
    finalizeRun();
  }
}
function prevQ(){ if (RUN && RUN.i > 0){ RUN.i--; renderRun(); } }
function quitRun(){
  if (confirm("Abandonner ce test ? Vos réponses en cours seront perdues.")){
    RUN = null;
    showNav();
    if (location.hash === "#/") vHome(); else go("#/");
  }
}
function finalizeRun(){
  var t = RUN.test;
  var res = computeScores(t, RUN.answers);
  Store.add(t.id, { date: new Date().toISOString(), scores: res.scores, flags: res.flags });
  RUN = null;
  showNav();
  if (location.hash === "#/res/" + t.id) vRes(t.id); else go("#/res/" + t.id);
}

/* ---------------- RÉSULTATS ---------------- */
function ameliorationHTML(dim){
  var a = dim.amelioration; if (!a) return "";
  var axes = (a.axes || []).map(function(x){ return '<div class="axe"><b>' + esc(x.titre) + "</b><p>" + esc(x.texte) + "</p></div>"; }).join("");
  var html = "<details><summary>Axes d'amélioration &amp; comment y arriver</summary>";
  if (a.intro) html += '<p class="small ink2">' + esc(a.intro) + "</p>";
  html += axes;
  if (a.objectif) html += '<div class="objectif"><b>Votre plan.</b> ' + esc(a.objectif) + "</div>";
  if (a.consulter) html += '<div class="consult"><b>Quand consulter ?</b> ' + esc(a.consulter) + "</div>";
  html += "</details>";
  if (a.ressources && a.ressources.length){
    html += "<details><summary>Ressources sérieuses</summary><ul class=\"reslist\">" +
      a.ressources.map(function(r){ return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></details>";
  }
  return html;
}
function ecrStyle(anx, evit){
  var a = anx > 4, e = evit > 4;
  if (!a && !e) return { nom: "plutôt sécure", txt: "Vos deux dimensions sont dans la zone basse : la proximité vous est accessible sans peur excessive de l'abandon. C'est le profil associé aux relations les plus stables — à entretenir, pas à tenir pour acquis." };
  if (a && !e) return { nom: "plutôt préoccupé", txt: "Anxiété d'abandon marquée avec un évitement bas : vous recherchez la proximité mais la peur de la perdre génère inquiétude et besoin de réassurance. Axe prioritaire : les stratégies d'auto-apaisement et la demande directe (voir « Anxiété d'abandon »)." };
  if (!a && e) return { nom: "plutôt détaché-évitant", txt: "Évitement marqué avec une anxiété basse : l'autonomie prime et la proximité émotionnelle vous coûte. Axe prioritaire : l'auto-dévoilement gradué (voir « Évitement de l'intimité »)." };
  return { nom: "plutôt craintif-évitant", txt: "Les deux dimensions sont élevées : désir de lien ET peur du lien coexistent, ce qui est inconfortable et souvent épuisant. C'est le profil qui bénéficie le plus d'un accompagnement (thérapie individuelle ou de couple) — et il évolue réellement avec le travail." };
}
function vRes(id){
  setNav("home");
  var t = byId(id); if (!t) return vHome();
  var rec = Store.latest(id);
  if (!rec) return vTestIntro(id);
  var prev = Store.previous(id);
  var html = '<p class="small"><a href="#/">← Tous les tests</a></p><h1>' + esc(t.nom) + "</h1>" +
    '<p class="small muted">Fait le ' + esc(fmtDateH(rec.date)) + (prev ? " · précédent : " + esc(fmtDate(prev.date)) : "") + "</p>";
  if (rec.flags && rec.flags.crise) html += urgenceHTML();
  if (t.avertissement) html += '<div class="avert">' + esc(t.avertissement) + "</div>";
  Object.keys(t.dims).forEach(function(k){
    var dim = t.dims[k];
    var v = rec.scores[k];
    var band = bandOf(dim, v);
    var d = prev ? deltaHTML(dim, v, prev.scores[k]) : "";
    html += '<div class="card dimblock"><h3 style="margin-top:0">' + esc(dim.nom) + "</h3>" +
      '<div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap">' + fmtOutOf(dim, v) + chipHTML(band) + (d ? '<span class="small">' + d + "</span>" : "") + "</div>" +
      gaugeSVG(dim, v) +
      "<p>" + esc(band.texte) + "</p>" +
      '<p class="small muted">' + esc(dim.descriptif) + "</p>" +
      ameliorationHTML(dim) + "</div>";
  });
  if (t.special === "amour"){
    var ranked = Object.keys(t.dims).map(function(k){ return { k: k, dim: t.dims[k], v: rec.scores[k] }; })
      .sort(function(a, b){ return b.v - a.v; });
    var lis = ranked.map(function(r, i){
      var band = bandOf(r.dim, r.v);
      return '<p style="margin:6px 0"><b>' + (i+1) + ". " + esc(r.dim.nom) + "</b> — " + fmtScore(r.dim, r.v) + "/5 <span class=\"muted small\">(" + esc(band.label) + ")</span></p>";
    }).join("");
    var tete = ranked[0], second = ranked[1];
    var phrase = "Votre canal le plus sensible : <b>" + esc(tete.dim.nom.toLowerCase()) + "</b>";
    if (second && (tete.v - second.v) <= 0.3) phrase += ", avec « " + esc(second.dim.nom.toLowerCase()) + " » quasiment au même niveau";
    phrase += ".";
    html += '<div class="card"><h3 style="margin-top:0">Votre hiérarchie de préférences</h3>' + lis +
      "<p>" + phrase + '</p><p class="small ink2">La partie utile — et réellement étayée : montrez ce classement à votre partenaire, demandez le sien, puis pratiquez la <b>réactivité perçue</b> : remarquer, comprendre et répondre à ce qui compte pour l\'autre. C\'est elle qui prédit la satisfaction du couple dans la recherche — pas l\'appariement des « langages » (Impett et al., 2024).</p></div>';
  }
  if (t.special === "ecr"){
    var st = ecrStyle(rec.scores.ANX, rec.scores.EVIT);
    html += '<div class="card"><h3 style="margin-top:0">Lecture combinée : style ' + esc(st.nom) + "</h3>" +
      ecrMapSVG(rec.scores.ANX, rec.scores.EVIT) +
      "<p>" + esc(st.txt) + '</p><p class="small muted">Les « styles » sont des repères de lecture aux croisements de deux dimensions continues — pas des cases définitives. Ils évoluent avec les expériences relationnelles et le travail personnel (« sécurité gagnée »).</p></div>';
  }
  var cad = CADENCE[t.id];
  if (cad) html += '<div class="notice">Suivi : refaites ce test dans <b>' + cad + "</b> — c'est l'évolution de la courbe qui est informative, pas une mesure isolée.</div>";
  html += '<button class="btn ghost" onclick="startTest(\'' + t.id + '\')">Refaire le test</button>' +
    '<button class="btn ghost" onclick="go(\'#/hist/' + t.id + '\')">Historique &amp; évolution</button>' +
    '<button class="btn" onclick="go(\'#/bord\')">Tableau de bord</button>' +
    "<details><summary>Comment ce score est calculé</summary><p class=\"small ink2\">" + esc(t.scoringNote) + "</p></details>" +
    sourceDetails(t) + footHTML();
  $app.innerHTML = html;
  window.scrollTo(0, 0);
}

/* ---------------- HISTORIQUE ---------------- */
function vHist(id){
  setNav("home");
  var t = byId(id); if (!t) return vHome();
  var hist = Store.hist(id);
  if (!hist.length) return vTestIntro(id);
  var html = '<p class="small"><a href="#/res/' + t.id + '">← Dernier résultat</a></p><h1>' + esc(t.nom) + " — évolution</h1>";
  Object.keys(t.dims).forEach(function(k){
    var dim = t.dims[k];
    var entries = hist.map(function(r){ return { date: r.date, v: r.scores[k] }; });
    html += '<div class="card"><h3 style="margin-top:0">' + esc(dim.nom) + "</h3>" + lineChartSVG(dim, entries) + "</div>";
  });
  var keys = Object.keys(t.dims);
  var headCells = keys.map(function(k){ return '<th scope="col">' + esc(keys.length > 1 ? t.dims[k].nom : "Score") + "</th>"; }).join("");
  var rows = hist.slice().reverse().map(function(r){
    var cells = keys.map(function(k){
      var dim = t.dims[k], v = r.scores[k], band = bandOf(dim, v);
      return "<td>" + fmtScore(dim, v) + ' <span class="muted small">(' + esc(band.label) + ")</span></td>";
    }).join("");
    return "<tr><td>" + esc(fmtDate(r.date)) + "</td>" + cells + "</tr>";
  }).join("");
  html += '<div class="card"><h3 style="margin-top:0">Toutes les mesures</h3><div style="overflow-x:auto"><table><thead><tr><th scope="col">Date</th>' + headCells + "</tr></thead><tbody>" + rows + "</tbody></table></div></div>";
  html += '<button class="btn ghost" onclick="startTest(\'' + t.id + '\')">Refaire le test</button>' + footHTML();
  $app.innerHTML = html;
  window.scrollTo(0, 0);
}

/* ---------------- TABLEAU DE BORD ---------------- */
function vBord(){
  setNav("bord");
  var taken = TESTS.map(function(t){ return { t: t, rec: Store.latest(t.id) }; }).filter(function(x){ return x.rec; });
  var html = persistBanner() + "<h1>Tableau de bord</h1>";
  if (!taken.length){
    html += '<p class="ink2">Aucun test encore fait. Pour un premier état des lieux en 5 minutes, enchaînez ces trois-là :</p>' +
      '<div class="card tap" onclick="go(\'#/test/who5\')" onkeydown="cardKey(event)" role="button" tabindex="0"><b>Bien-être (WHO-5)</b><div class="testmeta">1 min — le thermomètre du moral</div></div>' +
      '<div class="card tap" onclick="go(\'#/test/gad7\')" onkeydown="cardKey(event)" role="button" tabindex="0"><b>Anxiété (GAD-7)</b><div class="testmeta">1-2 min — repérage validé</div></div>' +
      '<div class="card tap" onclick="go(\'#/test/rosenberg\')" onkeydown="cardKey(event)" role="button" tabindex="0"><b>Estime de soi (Rosenberg)</b><div class="testmeta">2 min — le classique</div></div>' + footHTML();
    $app.innerHTML = html; window.scrollTo(0,0); return;
  }
  /* priorités */
  var prios = [];
  taken.forEach(function(x){
    Object.keys(x.t.dims).forEach(function(k){
      var dim = x.t.dims[k], v = x.rec.scores[k], band = bandOf(dim, v);
      if (band.niveau === "alerte" || band.niveau === "attention"){
        prios.push({ t: x.t, dim: dim, k: k, v: v, band: band,
          poids: (band.niveau === "alerte" ? 0 : 10) + (x.t.cat === "Clinique — repérage" ? 0 : 1) });
      }
    });
  });
  prios.sort(function(a, b){ return a.poids - b.poids; });
  html += '<div class="card"><h3 style="margin-top:0">Vos axes prioritaires</h3>';
  if (!prios.length){
    html += '<p class="ink2">Aucune zone d\'alerte dans vos derniers résultats. Continuez le suivi régulier — et si un domaine vous questionne, son test vous attend.</p>';
  } else {
    prios.slice(0, 6).forEach(function(p){
      var axe1 = p.dim.amelioration && p.dim.amelioration.axes && p.dim.amelioration.axes.length ? p.dim.amelioration.axes[0].titre : "";
      html += '<div class="prio"><span class="dot ' + p.band.niveau + '"></span><div>' +
        "<b>" + esc(p.dim.nom) + "</b> — " + esc(p.band.label) + " (" + fmtScore(p.dim, p.v) + "/" + p.dim.max + ")" +
        (axe1 ? '<div class="small ink2">Première action : ' + esc(axe1) + "</div>" : "") +
        '<div class="small"><a href="#/res/' + p.t.id + '">Voir les axes détaillés →</a></div></div></div>';
    });
    if (prios.length > 6){
      var reste6 = prios.length - 6;
      html += '<p class="small muted">+ ' + reste6 + (reste6 > 1 ? " autres points" : " autre point") + " d'attention — voir les résultats détaillés.</p>";
    }
  }
  html += "</div>";
  /* plan de suivi */
  html += '<div class="card"><h3 style="margin-top:0">Plan de suivi</h3><p class="small ink2">Refaites régulièrement les tests pour transformer des points en courbes — c\'est le seul moyen fiable de mesurer une progression :</p>';
  taken.forEach(function(x){
    var cad = CADENCE[x.t.id] || "quelques semaines";
    html += '<p class="small" style="margin:4px 0">· <b>' + esc(x.t.nom) + "</b> : tous les " + esc(cad) + " <span class=\"muted\">(dernier : " + esc(fmtDate(x.rec.date)) + ")</span></p>";
  });
  html += "</div>";
  /* cartes par test */
  taken.forEach(function(x){
    var hist = Store.hist(x.t.id);
    var prev = Store.previous(x.t.id);
    var inner = "";
    Object.keys(x.t.dims).forEach(function(k){
      var dim = x.t.dims[k], v = x.rec.scores[k], band = bandOf(dim, v);
      var entries = hist.map(function(r){ return { date: r.date, v: r.scores[k] }; });
      inner += '<div class="sparkwrap">' + chipHTML(band) +
        "<b>" + fmtScore(dim, v) + "</b>" +
        (prev ? '<span class="small">' + deltaHTML(dim, v, prev.scores[k]) + "</span>" : "") +
        '<span class="small muted">' + esc(dim.nom) + "</span>" +
        '<span class="right">' + sparkSVG(dim, entries) + "</span></div>";
    });
    html += '<div class="card tap" onclick="go(\'#/res/' + x.t.id + '\')" onkeydown="cardKey(event)" role="button" tabindex="0"><b>' + esc(x.t.nom) + '</b> <span class="small muted">· ' + esc(fmtDate(x.rec.date)) + "</span>" + inner + "</div>";
  });
  var reste = TESTS.filter(function(t){ return !Store.latest(t.id); });
  if (reste.length){
    html += '<div class="catlabel">À explorer</div><p class="small ink2">' +
      reste.map(function(t){ return '<a href="#/test/' + t.id + '">' + esc(t.nom) + "</a>"; }).join(" · ") + "</p>";
  }
  html += footHTML();
  $app.innerHTML = html;
  window.scrollTo(0, 0);
}

/* ---------------- MÉTHODE & DONNÉES ---------------- */
function vMethode(){
  setNav("meth");
  var html = persistBanner() + "<h1>Méthode, références &amp; aide</h1><p class=\"ink2\">" + esc(METHODE.intro) + "</p>";
  METHODE.sections.forEach(function(s){
    html += "<h2>" + esc(s.t) + "</h2>" + s.p.map(function(p){ return "<p>" + esc(p) + "</p>"; }).join("");
  });
  html += urgenceHTML();
  html += "<h2>Références générales</h2><ul class=\"reslist\">" + METHODE.refsGlobales.map(function(r){ return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>";
  html += '<h2>Vos données</h2><div class="card">' +
    '<p class="small ink2">Tout est stocké localement sur cet appareil. Exportez régulièrement une sauvegarde (fichier JSON) que vous pourrez réimporter ici, par exemple après un changement de téléphone.</p>' +
    '<button class="btn ghost slim" onclick="exportData()">Exporter mes résultats</button> ' +
    '<button class="btn ghost slim" onclick="document.getElementById(\'impfile\').click()">Importer une sauvegarde</button> ' +
    '<button class="btn ghost slim" onclick="resetData()">Tout effacer</button>' +
    '<input type="file" id="impfile" accept=".json,application/json" style="display:none" onchange="importData(this)">' +
    '<div id="dataMsg" class="small" style="margin-top:8px"></div></div>';
  html += footHTML();
  $app.innerHTML = html;
  window.scrollTo(0, 0);
}
function exportData(){
  var txt = Store.exportJSON();
  var msg = document.getElementById("dataMsg");
  try {
    var blob = new Blob([txt], { type: "application/json" });
    var a = document.createElement("a");
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = "iris-sauvegarde-" + new Date().toISOString().slice(0,10) + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
    if (msg) msg.textContent = "Sauvegarde téléchargée.";
  } catch(e){
    if (msg) msg.textContent = "Téléchargement impossible ici — copiez le contenu ci-dessous :";
    var ta = document.getElementById("expTa");
    if (!ta){
      ta = document.createElement("textarea");
      ta.id = "expTa"; ta.style.width = "100%"; ta.style.height = "120px";
      msg.parentNode.appendChild(ta);
    }
    ta.value = txt; ta.select();
  }
}
function importData(input){
  var f = input.files && input.files[0]; if (!f) return;
  var reader = new FileReader();
  reader.onload = function(){
    var msg = document.getElementById("dataMsg");
    try {
      var n = Store.importJSON(String(reader.result));
      if (msg) msg.textContent = n ? (n + (n > 1 ? " nouvelles mesures importées." : " nouvelle mesure importée.")) : "Sauvegarde déjà à jour : aucune nouvelle mesure à importer.";
    } catch(e){ if (msg) msg.textContent = "Fichier non reconnu — choisissez une sauvegarde exportée d'ici (iris-sauvegarde-….json)."; }
  };
  reader.readAsText(f);
  input.value = "";
}
function resetData(){
  if (confirm("Effacer TOUS vos résultats de cet appareil ?") && confirm("Vraiment tout effacer ? Cette action est définitive (pensez à exporter avant).")){
    Store.reset();
    var msg = document.getElementById("dataMsg");
    if (msg) msg.textContent = "Données effacées.";
  }
}

/* ---------------- ROUTEUR ---------------- */
var RESTORE_HASH = false;
function render(){
  if (RESTORE_HASH){ RESTORE_HASH = false; return; }
  if (RUN){
    /* retour navigateur pendant une passation : ne pas jeter les réponses sans confirmation */
    if (!confirm("Un test est en cours. Quitter et perdre vos réponses ?")){
      if (location.hash !== RUN.backHash){
        RESTORE_HASH = true;
        location.hash = RUN.backHash;
      }
      renderRun();
      return;
    }
    RUN = null;
  }
  showNav();
  var h = location.hash || "#/";
  var m;
  if (h === "#/" || h === "") return vHome();
  if (h === "#/bord") return vBord();
  if (h === "#/methode") return vMethode();
  if ((m = h.match(/^#\/test\/([a-z0-9]+)$/))) return vTestIntro(m[1]);
  if ((m = h.match(/^#\/res\/([a-z0-9]+)$/))) return vRes(m[1]);
  if ((m = h.match(/^#\/hist\/([a-z0-9]+)$/))) return vHist(m[1]);
  vHome();
}
window.addEventListener("hashchange", render);
render();
