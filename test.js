const { chromium } = require("playwright");
const path = require("path");
const URL = "file://" + path.resolve("index.html");
const OUT = "shots";
let failures = [];

function check(name, cond){
  console.log((cond ? "PASS " : "FAIL ") + name);
  if (!cond) failures.push(name);
}

async function runQuiz(page, testId, optIndex, n){
  await page.goto(URL + "#/test/" + testId);
  await page.waitForTimeout(150);
  await page.locator(".btn").first().click(); // Commencer / Refaire
  for (let i = 0; i < n; i++){
    await page.waitForSelector(".opt");
    const idx = typeof optIndex === "function" ? optIndex(i) : optIndex;
    await page.locator(".opt").nth(idx).click();
    await page.waitForTimeout(220);
  }
  await page.waitForTimeout(300);
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 393, height: 851 }, deviceScaleFactor: 2, locale: "fr-FR" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push("pageerror: " + e.message));
  page.on("console", m => { if (m.type() === "error") errors.push("console: " + m.text()); });

  // ---- Accueil
  await page.goto(URL);
  await page.waitForTimeout(300);
  check("Accueil affiche 39 tests", (await page.locator(".card.tap").count()) === 39);
  await page.screenshot({ path: OUT + "/01-accueil.png", fullPage: false });

  // ---- WHO-5 : tout "Tout le temps" => 100
  await runQuiz(page, "who5", 5, 5);
  let body = await page.textContent("body");
  check("WHO-5 score 100", /100\s*\/\s*100/.test(body.replace(/\s+/g, " ")));
  check("WHO-5 bande 'Bien-être élevé'", body.includes("Bien-être élevé"));
  await page.screenshot({ path: OUT + "/03-resultat-who5.png" });

  // ---- WHO-5 seconde passation basse (2 = "Moins de la moitié du temps" -> somme 10 *4 = 40)
  await runQuiz(page, "who5", 2, 5);
  body = await page.textContent("body");
  check("WHO-5 2e mesure = 40", /40\s*\/\s*100/.test(body.replace(/\s+/g, " ")));
  check("WHO-5 delta 'moins bien' affiché", body.includes("moins bien"));
  // historique
  await page.goto(URL + "#/hist/who5"); await page.waitForTimeout(250);
  check("Historique WHO-5 : 2 lignes", (await page.locator("table tr").count()) === 3);
  await page.screenshot({ path: OUT + "/04-historique-who5.png" });

  // ---- GAD-7 : tout "Plusieurs jours" => 7 (légère)
  await runQuiz(page, "gad7", 1, 7);
  body = await page.textContent("body");
  check("GAD-7 score 7", /7\s*\/\s*21/.test(body.replace(/\s+/g, " ")));
  check("GAD-7 bande légère", body.includes("Anxiété légère"));

  // ---- Rosenberg : tout "Tout à fait en accord" => 5x4 + 5x1 = 25 (faible)
  await runQuiz(page, "rosenberg", 3, 10);
  body = await page.textContent("body");
  check("Rosenberg score 25", /25\s*\/\s*40/.test(body.replace(/\s+/g, " ")));
  check("Rosenberg bande Faible", body.includes("Faible"));

  // ---- PHQ-9 : tout "Plusieurs jours" => 9 (léger) + item 9 > 0 => bloc urgence
  await runQuiz(page, "phq9", 1, 9);
  body = await page.textContent("body");
  check("PHQ-9 score 9", /9\s*\/\s*27/.test(body.replace(/\s+/g, " ")));
  check("PHQ-9 bloc d'aide (3114) présent", body.includes("3114") && body.includes("Besoin d'aide maintenant"));
  await page.screenshot({ path: OUT + "/05-resultat-phq9.png" });

  // ---- Big Five : tout "Neutre" => 3,0 partout
  await runQuiz(page, "bigfive", 2, 20);
  body = await page.textContent("body");
  check("Big Five 5 dimensions affichées", (await page.locator(".dimblock").count()) === 5);
  check("Big Five score 3 affiché", body.includes("3"));
  await page.screenshot({ path: OUT + "/06-resultat-bigfive.png" });

  // ---- ECR-12 : anx haut (6="En accord" idx5) / evit items inversés -> réponses idx5 partout
  // 6 anx items => 6 ; 3 evit directs =6, 3 inversés => 8-6=2 ; moyenne evit = (6*3+2*3)/6 = 4
  await runQuiz(page, "ecr12", 5, 12);
  body = await page.textContent("body");
  check("ECR carte des styles affichée", (await page.locator("svg.quad").count()) === 1);
  check("ECR lecture combinée présente", body.includes("Lecture combinée"));
  await page.screenshot({ path: OUT + "/07-resultat-ecr.png" });

  // ---- Langages de l'amour : TOUCH à fond (items 5,10,15,20 -> "Tout à fait vrai"), le reste bas
  await runQuiz(page, "amour", i => (i % 5 === 4 ? 4 : 1), 20);
  body = await page.textContent("body");
  check("Amour : hiérarchie affichée", body.includes("Votre hiérarchie de préférences"));
  check("Amour : toucher en tête", body.includes("Votre canal le plus sensible : le toucher"));
  check("Amour : avertissement pop-psy présent", body.includes("pas un construit scientifiquement validé"));
  check("Amour : TOUCH central 5/5", /5\s*\/\s*5/.test(body.replace(/\s+/g, " ")) && body.includes("Central"));
  await page.screenshot({ path: OUT + "/11-resultat-amour.png", fullPage: true });

  // ---- PPRS : tout au max => moyenne 7, Élevée
  await runQuiz(page, "pprs", 6, 12);
  body = await page.textContent("body");
  check("PPRS moyenne 7 Élevée", /7\s*\/\s*7/.test(body.replace(/\s+/g, " ")) && body.includes("Élevée"));

  // ---- CSI-4 : passation basse (tout à 0) => 0, zone de détresse (seuil 13,5)
  await runQuiz(page, "csi4", 0, 4);
  body = await page.textContent("body");
  check("CSI-4 bas : détresse détectée", body.includes("Zone de détresse relationnelle"));
  // ---- CSI-4 : passation haute (6,5,5,5 => 21) + delta 'mieux'
  await runQuiz(page, "csi4", i => (i === 0 ? 6 : 5), 4);
  body = await page.textContent("body");
  check("CSI-4 score max 21", /21\s*\/\s*21/.test(body.replace(/\s+/g, " ")));
  check("CSI-4 delta 'mieux'", body.includes("(mieux)"));
  await page.screenshot({ path: OUT + "/12-resultat-csi4.png" });

  // ---- Conflits : INEF bas avec inversés (5e et 8e items), DR jamais
  // items 1-8 idx0 (2 inversés -> 5), items 9-14 idx0 => INEF = (6*1+2*5)/8 = 2.0 ; DR = 1.0
  await runQuiz(page, "conflits", 0, 14);
  body = await page.textContent("body");
  check("Conflits INEF 2 constructifs", /2\s*\/\s*5/.test(body.replace(/\s+/g, " ")) && body.includes("plutôt constructifs"));
  check("Conflits DR 1 peu présent", body.includes("Peu présent"));
  check("Conflits ressource 3919 présente", body.includes("3919"));

  // ---- GMSEX : tout au max => 35
  await runQuiz(page, "gmsex", 6, 5);
  body = await page.textContent("body");
  check("GMSEX 35/35 élevée", /35\s*\/\s*35/.test(body.replace(/\s+/g, " ")) && body.includes("Satisfaction élevée"));

  // ---- Big Five complet (IPIP-50) : tout "Neutre" => 3,0 partout, 5 dimensions
  await runQuiz(page, "bigfive50", 2, 50);
  body = await page.textContent("body");
  check("Big Five complet 5 dimensions affichées", (await page.locator(".dimblock").count()) === 5);
  check("Big Five complet score 3 affiché", body.includes("3"));

  // ---- ECR-R complet (36 items) : tout "En accord" (idx5=valeur6)
  // ANX (2 inversés/18) = (16*6 + 2*(1+7-6))/18 = 5,56 ; EVIT (12 inversés/18) = (6*6 + 12*(1+7-6))/18 = 3,33
  await runQuiz(page, "ecrr36", 5, 36);
  body = await page.textContent("body");
  check("ECR-R complet carte des styles affichée", (await page.locator("svg.quad").count()) === 1);
  check("ECR-R complet ANX 5,6", body.includes("5,6"));
  check("ECR-R complet EVIT 3,3", body.includes("3,3"));

  // ---- UCLA-20 : tout "Souvent" (idx3=valeur4) => 9 inversés (1)+11 directs(4) = 53
  await runQuiz(page, "ucla20", 3, 20);
  body = await page.textContent("body");
  check("UCLA-20 score 53/80", /53\s*\/\s*80/.test(body.replace(/\s+/g, " ")));

  // ---- CSI-32 : reponse "la plus satisfaite" sur chaque item (formats de reponse
  // mixtes selon le groupe d'items) => score maximal 161/161
  const csi32MaxIdx = [6,0,0,0,0,5,5,5,5,0,5,5,5,5,0,5,5,5,5,5,5,5,5,5,5,0,5,0,5,0,5,0];
  await runQuiz(page, "csi32", i => csi32MaxIdx[i], 32);
  body = await page.textContent("body");
  check("CSI-32 score 161/161", /161\s*\/\s*161/.test(body.replace(/\s+/g, " ")));
  check("CSI-32 satisfaction bonne à élevée", body.includes("Satisfaction bonne à élevée"));

  // ---- ISI (sommeil) : meilleure reponse partout (idx0) sur toutes les echelles => 0/28
  await runQuiz(page, "isi", 0, 7);
  body = await page.textContent("body");
  check("ISI score 0/28 pas d'insomnie", /0\s*\/\s*28/.test(body.replace(/\s+/g, " ")) && body.includes("Pas d'insomnie significative"));

  // ---- Auto-compassion (SCS-SF) : tout "Tout à fait d'accord" (idx4=valeur5)
  // items inverses (1,4,8,9,11,12) recodes a 1 => moyenne (6*5+6*1)/12 = 3
  await runQuiz(page, "scssf", 4, 12);
  body = await page.textContent("body");
  check("SCS-SF score 3/5", /3\s*\/\s*5/.test(body.replace(/\s+/g, " ")));

  // ---- Résilience (BRS) : tout "Tout à fait d'accord" (idx4=valeur5)
  // items inverses (2,4,6) recodes a 1 => moyenne (3*5+3*1)/6 = 3
  await runQuiz(page, "brs", 4, 6);
  body = await page.textContent("body");
  check("BRS score 3/5 normale", /3\s*\/\s*5/.test(body.replace(/\s+/g, " ")) && body.includes("Résilience normale"));

  // ---- Image corporelle (BAS-2) : tout "Toujours" (idx4=valeur5), aucun item inverse => 5
  await runQuiz(page, "bas2", 4, 10);
  body = await page.textContent("body");
  check("BAS-2 score 5/5 positive", /5\s*\/\s*5/.test(body.replace(/\s+/g, " ")) && body.includes("Image corporelle positive"));

  // ---- Satisfaction de vie (SWLS) : tout "Tout à fait d'accord" (7) => 35
  await runQuiz(page, "swls", 6, 5);
  body = await page.textContent("body");
  check("SWLS score 35/35", /35\s*\/\s*35/.test(body.replace(/\s+/g, " ")));

  // ---- Épanouissement (Flourishing) : tout 7 => 56
  await runQuiz(page, "flourish", 6, 8);
  body = await page.textContent("body");
  check("Flourishing score 56/56", /56\s*\/\s*56/.test(body.replace(/\s+/g, " ")));

  // ---- Gratitude (GQ-6) : tout 7, items 3 et 6 inversés (7->1) => 4*7+2*1 = 30
  await runQuiz(page, "gq6", 6, 6);
  body = await page.textContent("body");
  check("GQ-6 score 30/42 (items inversés)", /30\s*\/\s*42/.test(body.replace(/\s+/g, " ")));

  // ---- Alcool (AUDIT-C) : tout au maximum => 12/12, bande alerte + ressource
  await runQuiz(page, "auditc", 4, 3);
  body = await page.textContent("body");
  check("AUDIT-C score 12/12", /12\s*\/\s*12/.test(body.replace(/\s+/g, " ")));
  check("AUDIT-C ressource Alcool info service", body.includes("Alcool info service"));

  // ---- Page À deux : mode d'emploi + 3 quiz duo + renvoi Couple
  await page.goto(URL + "#/duo"); await page.waitForTimeout(250);
  body = await page.textContent("body");
  check("À deux : page présente", body.includes("Comment ça marche ?"));
  check("À deux : les 3 quiz duo listés", body.includes("partenaire") && body.includes("Confiance") && body.includes("rituels"));
  await page.screenshot({ path: OUT + "/13-a-deux.png", fullPage: true });

  // ---- Quiz duo carte2 : tout au max (idx4 = 5) => 5/5, jamais de niveau alerte
  await runQuiz(page, "carte2", 4, 12);
  body = await page.textContent("body");
  check("Carte2 score 5/5", /5\s*\/\s*5/.test(body.replace(/\s+/g, " ")));
  check("Carte2 étiquetage quiz maison présent", body.toLowerCase().includes("non validé"));

  // ---- passation UI screenshot
  await page.goto(URL + "#/test/sd3"); await page.waitForTimeout(150);
  await page.locator(".btn").first().click();
  await page.waitForSelector(".opt");
  await page.screenshot({ path: OUT + "/02-passation.png" });
  // nav cachée pendant la passation ?
  check("Nav masquée pendant passation", await page.locator("nav").evaluate(n => getComputedStyle(n).display === "none"));
  // quitter en cours de passation déclenche une demande de confirmation (protection contre le retour navigateur)
  let dlgMsg = "";
  page.once("dialog", d => { dlgMsg = d.message(); d.accept(); });
  await page.goto(URL + "#/"); await page.waitForTimeout(200);
  check("Confirmation demandée avant de quitter une passation", dlgMsg.includes("test est en cours"));
  check("Nav réaffichée après passation", await page.locator("nav").evaluate(n => getComputedStyle(n).display !== "none"));

  // ---- Tableau de bord
  await page.goto(URL + "#/bord"); await page.waitForTimeout(300);
  body = await page.textContent("body");
  check("Bord : axes prioritaires présents", body.includes("axes prioritaires"));
  check("Bord : plan de suivi présent", body.includes("Plan de suivi"));
  await page.screenshot({ path: OUT + "/08-tableau-de-bord.png", fullPage: true });

  // ---- Méthode
  await page.goto(URL + "#/methode"); await page.waitForTimeout(250);
  body = await page.textContent("body");
  check("Méthode : effet Barnum mentionné", body.includes("Barnum"));
  check("Méthode : export présent", body.includes("Exporter mes résultats"));
  await page.screenshot({ path: OUT + "/09-methode.png" });

  // ---- Persistance localStorage (reload)
  await page.goto(URL + "#/"); await page.waitForTimeout(200);
  await page.reload(); await page.waitForTimeout(300);
  body = await page.textContent("body");
  check("Persistance après rechargement", body.includes("Fait le"));

  // ---- Mode sombre
  const ctxD = await browser.newContext({ viewport: { width: 393, height: 851 }, deviceScaleFactor: 2, colorScheme: "dark", locale: "fr-FR" });
  const pd = await ctxD.newPage();
  await pd.goto(URL); await pd.waitForTimeout(250);
  await pd.screenshot({ path: OUT + "/10-accueil-sombre.png" });
  await pd.close();

  console.log("\nErreurs JS: " + (errors.length ? "\n" + errors.join("\n") : "aucune"));
  console.log(failures.length ? "\n== " + failures.length + " ÉCHEC(S) ==" : "\n== TOUS LES TESTS PASSENT ==");
  await browser.close();
  process.exit(failures.length || errors.length ? 1 : 0);
})();
