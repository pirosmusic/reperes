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
  check("Accueil affiche 20 tests", (await page.locator(".card.tap").count()) === 20);
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

  // ---- passation UI screenshot
  await page.goto(URL + "#/test/sd3"); await page.waitForTimeout(150);
  await page.locator(".btn").first().click();
  await page.waitForSelector(".opt");
  await page.screenshot({ path: OUT + "/02-passation.png" });
  // nav cachée pendant la passation ?
  check("Nav masquée pendant passation", await page.locator("nav").evaluate(n => getComputedStyle(n).display === "none"));
  await page.goto(URL + "#/"); await page.waitForTimeout(200);
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
