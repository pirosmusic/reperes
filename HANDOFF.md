# Repères — dossier de passation pour Claude Code

## Ce que c'est

**Repères** est une web-app d'auto-évaluation psychologique en français, conçue comme l'anti-thèse des « quizz » sponsorisés qu'on voit sur les réseaux sociaux (narcissism test, trauma pattern quiz, etc.). Elle ne contient que des instruments issus de la recherche publiée (échelles validées, libres de droits), avec leurs vrais barèmes, des axes d'amélioration fondés sur des preuves, un suivi longitudinal, et un étiquetage honnête quand un concept populaire (ex. les « langages de l'amour ») n'a pas de validation scientifique solide.

**Public** : un utilisateur individuel (Fabien) et son entourage — usage personnel, pas un produit commercial.

**Format** : une seule page HTML autonome, aucune dépendance externe, aucun serveur, aucune donnée transmise nulle part. Tout tourne dans le navigateur.

## Architecture technique

- **Zéro framework.** HTML + CSS + JavaScript vanilla (ES5-ish, pas de build step, pas de bundler).
- **Stockage** : `localStorage` du navigateur uniquement. Pas de backend, pas de compte, pas d'authentification. Chaque appareil a ses propres données, cloisonnées.
- **Routeur** : hash-based (`#/`, `#/test/:id`, `#/res/:id`, `#/hist/:id`, `#/bord`, `#/methode`).
- **Graphiques** : SVG générés à la main (jauges à bandes, courbes d'évolution, sparklines, carte 2D pour l'attachement), construits en suivant le skill `dataviz` du repo Claude (palette validée color-blind-safe, voir `references/palette.md` de ce skill si besoin de le refaire).
- **Mode sombre** : `prefers-color-scheme`, variables CSS.
- **Responsive** : mobile-first, testé à 393×851 (iPhone/Android standard).

## Structure des fichiers (dans `src/`)

Le fichier final `reperes.html` est un **assemblage** de plusieurs fichiers sources concaténés dans cet ordre :

```
src/head.html   → <!DOCTYPE>, <head>, tout le CSS inline, ouverture <body>, nav, <script>
src/data1.js    → TESTS_1 : Big Five (Mini-IPIP), Rosenberg, GAD-7, PHQ-9
src/data2.js    → TESTS_2 : PSS-10, WHO-5, ECR-12, SD3 (triade sombre)
src/data3.js    → TESTS_3 : ERQ, CBI, UCLA-3, Langages de l'amour (+ contenus transverses : URGENCES, METHODE) ; construit TESTS = concat(1,2,3)
src/data4.js    → TESTS_4 : PPRS (réactivité perçue), CSI-4 (satisfaction couple), Conflits (IAI + exigence-retrait), GMSEX (satisfaction intime) ; réassigne TESTS = concat(1,2,3,4)
src/data5.js    → TESTS_5 : versions longues en complément des courtes (Big Five IPIP-50, ECR-R 36 items, CSI-32, UCLA-20) + nouveaux thèmes (sommeil, auto-compassion, résilience, image corporelle) ; réassigne TESTS = TESTS.concat(TESTS_5)
src/core.js     → moteur : Store (localStorage), scoring, gaugeSVG, lineChartSVG, sparkSVG, ecrMapSVG, deltaHTML
src/views.js    → toutes les vues (accueil, intro test, passation, résultats, historique, tableau de bord, méthode), routeur, handlers
src/tail.html   → fermeture </script></body></html>
```

**Commande de build** (aucun outil requis, juste `cat`) :

```bash
cd src && cat head.html data1.js data2.js data3.js data4.js data5.js core.js views.js tail.html > ../index.html
```

(ou directement `bash build.sh` depuis la racine du dépôt, qui fait exactement ça.)

Toujours vérifier la syntaxe JS avant de reconstruire :
```bash
cat data1.js data2.js data3.js data4.js data5.js core.js views.js > /tmp/all.js && node --check /tmp/all.js
```

## Modèle de données d'un test

Chaque test dans `TESTS` a la forme :

```js
{
  id: "gad7",                    // identifiant unique, utilisé dans l'URL et le Store
  nom: "Anxiété",
  sigle: "GAD-7 · 7 items",
  cat: "Clinique — repérage",    // catégorie d'affichage sur l'accueil
  duree: "1-2 min",
  intro: "...",                  // texte avant de commencer
  avertissement: "...",          // optionnel : bandeau d'avertissement (ex. PHQ-9, SD3, langages de l'amour)
  consigne: "...",
  echelle: { labels: [...], valeurs: [...] },  // échelle par défaut (peut être surchargée par item, voir echelles[])
  echelles: [ {labels,valeurs}, ... ],          // optionnel : plusieurs échelles (CSI-4, GMSEX, conflits utilisent ça)
  items: [ { t: "texte", d: "CLE_DIMENSION", r: true, e: 0 }, ... ],  // r = item inversé, e = index dans echelles[]
  flagCrise: { itemIndex: 8, seuil: 1 },  // optionnel (PHQ-9) : déclenche le bloc urgence si réponse >= seuil
  scoringNote: "...",            // explication du calcul, affichée en detail repliable
  dims: {
    CLE: {
      nom, format: "moyenne"|"somme"|"pct25", min, max,
      valence: true|false|null,  // true = plus haut est mieux, false = l'inverse, null = ni bon ni mauvais (traits)
      descriptif: "...",
      bandes: [ { max: X, label, niveau: "ok"|"attention"|"alerte"|"neutre", texte } , ... ],
      amelioration: { intro, axes: [{titre,texte}], objectif, ressources: [...], consulter }
    }
  },
  special: "ecr" | "amour",      // optionnel : déclenche un rendu combiné spécifique dans vRes()
  source: { instrument, statut, refs: [...] }
}
```

Le moteur (`computeScores` dans `core.js`) gère automatiquement les items inversés et les échelles multiples par item. Rien à coder côté scoring pour ajouter un test standard — juste remplir cette structure.

## Les 16 tests actuellement inclus

| id | Nom | Catégorie |
|---|---|---|
| gad7 | Anxiété (GAD-7) | Clinique — repérage |
| phq9 | Humeur dépressive (PHQ-9) | Clinique — repérage |
| pss10 | Stress perçu (PSS-10) | Stress & énergie |
| who5 | Bien-être (WHO-5, OMS) | Stress & énergie |
| cbi | Épuisement / burnout (CBI) | Stress & énergie |
| rosenberg | Estime de soi (Rosenberg) | Soi |
| erq | Régulation des émotions (ERQ) | Émotions |
| ecr12 | Attachement dans les relations (ECR-12) | Couple |
| amour | Langages de l'amour | Couple *(pop-psychologie, étiqueté comme tel)* |
| pprs | Réactivité de votre partenaire (PPRS) | Couple |
| csi4 | Satisfaction de couple (CSI-4) | Couple |
| conflits | Conflits dans le couple (IAI + exigence-retrait) | Couple |
| gmsex | Satisfaction intime (GMSEX) | Couple |
| ucla3 | Solitude ressentie (UCLA-3) | Relations |
| bigfive | Personnalité : les Big Five (Mini-IPIP) | Personnalité |
| sd3 | Triade sombre (SD3) | Personnalité |

Tous les instruments sont libres de droits ou d'usage libre en recherche ; les items français sont soit des traductions validées existantes (Rosenberg via Vallières & Vallerand, ERQ via Christophe et al.), soit des adaptations réalisées pour cette app à partir des items originaux publiés (référencées dans `source.refs` de chaque test).

## Suite de tests (`test.js`)

Tests end-to-end avec Playwright (Chromium, déjà installé dans l'environnement à `/opt/pw-browsers`). Vérifie :
- rendu de l'accueil (16 cartes de test)
- calcul de score exact pour plusieurs tests (réponses connues → score attendu, avec la formule officielle)
- bandes d'interprétation correctes
- delta « mieux/moins bien » entre deux passations
- historique (table + courbe SVG)
- carte 2D attachement, hiérarchie langages de l'amour
- bloc urgence PHQ-9 (item suicidaire) et ressource 3919 (conflits)
- masquage de la nav pendant la passation
- tableau de bord (axes prioritaires, plan de suivi)
- persistance localStorage après reload
- mode sombre

Lancer :
```bash
mkdir -p shots
node test.js
```
35 vérifications passent actuellement (`PASS`/`FAIL` dans stdout + `shots/*.png` pour inspection visuelle).

**⚠️ Si WebKit est disponible dans le futur environnement**, il serait utile d'ajouter une passe Safari/WebKit en plus de Chromium, pour confirmer le rendu iOS (non testé jusqu'ici faute de binaire WebKit dans ce sandbox — voir section Déploiement).

## Déploiement — état actuel

- Dépôt GitHub : **`pirosmusic/reperes`** (public, requis pour GitHub Pages gratuit).
- Le contenu de `reperes.html` a été poussé en tant que `index.html` sur la branche `main` via `git push` (auth par Personal Access Token fine-grained, scope Contents:read/write sur ce seul dépôt — le token n'est plus utilisé/stocké nulle part après le push, et Fabien a été invité à le révoquer).
- **Reste à faire côté utilisateur** (impossible depuis ce sandbox : l'API `api.github.com` y est bloquée par un proxy réseau Anthropic, y compris en lecture authentifiée sur `/pages`) : activer GitHub Pages dans `github.com/pirosmusic/reperes/settings/pages` → Build and deployment → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
- URL finale attendue : **`https://pirosmusic.github.io/reperes/`**.
- **À vérifier** dès que Pages est actif : que le site se charge bien (fetch simple), et idéalement un test Playwright pointé sur l'URL publique plutôt que sur `file://`.

## Prochaines pistes possibles (non demandées explicitement, à confirmer avec Fabien avant de coder)

- Mettre en place un flux de mise à jour propre : garder `src/` comme source de vérité, un script `build.sh` qui régénère `index.html`/`reperes.html`, et un commit/push vers `main` à chaque évolution.
- Éventuellement un `README.md` public sur le dépôt (actuellement absent) expliquant le projet, avec le même ton « anti-bullshit, sources sérieuses » que l'app elle-même.
- Icône / manifest PWA (`manifest.json`, meta tags `apple-mobile-web-app-*`) pour une meilleure expérience « ajouter à l'écran d'accueil » sur iOS, vu que c'est le mode d'usage principal évoqué (partage WhatsApp).
- Vérification WebKit réelle (Safari iOS) dès qu'un environnement avec le binaire est disponible.
- Fabien a mentionné vouloir potentiellement un projet Android natif (Kotlin) compilable en APK plus tard — non commencé, à ressortir seulement s'il le redemande.

## Points de vigilance produit (à préserver dans toute évolution)

- **Zéro tracking, zéro backend.** C'est un argument de vente explicite de l'app (page Méthode) — ne jamais introduire de télémétrie, d'analytics, ou d'appel réseau quelconque.
- **Étiquetage honnête de la pop-psychologie.** Le test « Langages de l'amour » assume ouvertement son manque de validation scientifique (voir `avertissement` dans `data3.js`) — c'est un choix éditorial délibéré à ne pas retirer, même si on ajoute d'autres tests du même genre.
- **Ressources d'urgence toujours présentes et à jour** : 3114 (suicide), 3919 (violences conjugales), 15 (SAMU), 116 006. Le PHQ-9 déclenche automatiquement le bloc urgence si l'item 9 (idées suicidaires) est coché — ne pas casser `flagCrise` en modifiant l'ordre des items de ce test.
- **Toute nouvelle échelle doit citer ses sources** (`source.refs`) avec de vraies références académiques vérifiables, pas des sources inventées.

## Contact / contexte utilisateur

Fabien (fabien.rosely@gmail.com) — usage personnel et pour son couple/entourage. Ton des échanges : direct, exigeant sur le sérieux du contenu, à l'aise avec le code mais pas développeur lui-même (a besoin d'instructions pas-à-pas pour les actions GitHub/mobile).
