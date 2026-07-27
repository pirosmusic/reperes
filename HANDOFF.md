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
src/data6.js    → TESTS_6 : rubrique « Vie & sens » (SWLS satisfaction de vie, Flourishing Scale, GQ-6 gratitude) + AUDIT-C (alcool, Clinique — repérage) ; réassigne TESTS = TESTS.concat(TESTS_6)
src/data7.js    → TESTS_7 : rubrique « À deux » (carte2, confiance2, rituels2) — quiz MAISON à faire en couple, non validés et étiquetés comme tels (même logique éditoriale que « amour »), ton ludique-bienveillant, jamais de niveau « alerte » ; réassigne TESTS = TESTS.concat(TESTS_7)
src/data8.js    → TESTS_8 : suite « À deux » (souvenirs2, projets2, rires2, admiration2) — mêmes règles que data7 ; réassigne TESTS = TESTS.concat(TESTS_8)
src/data9.js    → TESTS_9 : suite « À deux » (curiosite2, equipe2, tendresse2, aventure2) — mêmes règles que data7 ; réassigne TESTS = TESTS.concat(TESTS_9)
src/core.js     → moteur : Store (localStorage), scoring, gaugeSVG, lineChartSVG, sparkSVG, ecrMapSVG, deltaHTML
src/views.js    → toutes les vues (accueil, intro test, passation, résultats, historique, tableau de bord, méthode), routeur, handlers
src/tail.html   → fermeture </script></body></html>
```

**Commande de build** (aucun outil requis, juste `cat`) :

```bash
cd src && cat head.html data1.js data2.js data3.js data4.js data5.js data6.js data7.js data8.js data9.js core.js views.js tail.html > ../index.html
```

(ou directement `bash build.sh` depuis la racine du dépôt, qui fait exactement ça.)

Toujours vérifier la syntaxe JS avant de reconstruire :
```bash
cat data1.js data2.js data3.js data4.js data5.js data6.js data7.js data8.js data9.js core.js views.js > /tmp/all.js && node --check /tmp/all.js
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

## Navigation (juillet 2026)

4 onglets : **Tests** (accueil : accroche, bloc « Par où commencer » tant que rien n'est fait, sommaire de rubriques cliquable `.catnav`, sections par catégorie avec sous-titre `CAT_TAG`), **À deux** (`#/duo` : mode d'emploi du jeu en couple + quiz maison cat « À deux » + renvoi vers les tests « Couple »), **Suivi** (`#/bord`), **Aide** (`#/methode`, ex-« Méthode »). La constante `QUIZ_MAISON` dans views.js liste les contenus non validés (amour + les 11 quiz « À deux ») pour le compteur d'accueil — à maintenir si on en ajoute.

## Les 39 tests actuellement inclus

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
| bigfive50 | Personnalité : les Big Five, version complète (IPIP-50) | Personnalité |
| ecrr36 | Attachement dans les relations, version complète (ECR-R) | Couple |
| csi32 | Satisfaction de couple, version complète (CSI-32) | Couple |
| ucla20 | Solitude ressentie, version complète (UCLA-20) | Relations |
| isi | Qualité du sommeil (ISI) | Stress & énergie *(seul instrument non libre de droits, usage perso assumé)* |
| scssf | Auto-compassion (SCS-SF) | Soi |
| brs | Résilience (BRS) | Stress & énergie |
| bas2 | Image corporelle (BAS-2) | Soi |
| swls | Satisfaction de vie (SWLS) | Vie & sens |
| flourish | Épanouissement (Flourishing Scale) | Vie & sens |
| gq6 | Gratitude (GQ-6) | Vie & sens |
| auditc | Consommation d'alcool (AUDIT-C) | Clinique — repérage |
| carte2 | Connaissez-vous votre partenaire ? | À deux *(quiz maison, étiqueté)* |
| confiance2 | Confiance & sécurité à deux | À deux *(quiz maison, étiqueté)* |
| rituels2 | Vos rituels de connexion | À deux *(quiz maison, étiqueté)* |
| souvenirs2 | Le jeu des souvenirs | À deux *(quiz maison, étiqueté)* |
| projets2 | Rêves & projets à deux | À deux *(quiz maison, étiqueté)* |
| rires2 | Rire & complicité | À deux *(quiz maison, étiqueté)* |
| admiration2 | Ce que j'admire chez toi | À deux *(quiz maison, étiqueté)* |
| curiosite2 | Toujours curieux l'un de l'autre ? | À deux *(quiz maison, étiqueté)* |
| equipe2 | Votre esprit d'équipe | À deux *(quiz maison, étiqueté)* |
| tendresse2 | Tendresse au quotidien | À deux *(quiz maison, étiqueté)* |
| aventure2 | Nouveauté & aventure | À deux *(quiz maison, étiqueté)* |

Tous les instruments sont libres de droits ou d'usage libre, **à une exception près et assumée** : l'ISI (sommeil) est protégé par le droit d'auteur (Morin / Mapi Research Trust) et utilisé ici dans un cadre strictement personnel non commercial — voir `source.statut` du test `isi` dans `data5.js`, et ne jamais présenter cet instrument comme « libre de droits » comme les autres. Les items français sont soit des traductions validées existantes (Rosenberg via Vallières & Vallerand, ERQ via Christophe et al.), soit des adaptations réalisées pour cette app à partir des items originaux publiés (référencées dans `source.refs` de chaque test).

## Validation structurelle (`tools/validate-data.js`)

Script Node pur (aucun navigateur, aucune dépendance) qui vérifie les données elles-mêmes plutôt que le rendu : bornes min/max des dimensions recalculées à partir des items réels, monotonie et couverture complète des bandes, catégories toutes présentes dans `ORDRE_CATS` (sinon un test devient invisible sur l'accueil sans aucune erreur visible), `CADENCE` complète, sources non vides, aucune chaîne provisoire oubliée. À lancer après toute modification de `src/data*.js`, avant même de reconstruire `index.html` :
```bash
node tools/validate-data.js
```
Sortie 0 = rien à signaler, sortie 1 = problèmes listés.

## Suite de tests (`test.js`)

Tests end-to-end avec Playwright (Chromium). Vérifie :
- rendu de l'accueil (24 cartes de test)
- calcul de score exact pour de nombreux tests, y compris les versions longues et les formats de réponse mixtes du CSI-32 (réponses connues → score attendu, avec la formule officielle)
- bandes d'interprétation correctes
- delta « mieux/moins bien » entre deux passations
- historique (table + courbe SVG)
- carte 2D attachement (courte et longue), hiérarchie langages de l'amour
- bloc urgence PHQ-9 (item suicidaire) et ressource 3919 (conflits)
- masquage de la nav pendant la passation
- tableau de bord (axes prioritaires, plan de suivi)
- persistance localStorage après reload
- mode sombre

Lancer (nécessite `npm install playwright` au préalable, jamais commité — voir `.gitignore`) :
```bash
mkdir -p shots
node test.js
```
48 vérifications passent actuellement (dont la confirmation avant de quitter une passation en cours) (`PASS`/`FAIL` dans stdout + `shots/*.png` pour inspection visuelle).

**⚠️ WebKit non testé** faute de binaire WebKit dans les environnements utilisés jusqu'ici — à ajouter en complément de Chromium si disponible un jour, pour confirmer le rendu iOS.

## Déploiement — état actuel

- Dépôt GitHub : **`pirosmusic/reperes`** (public, requis pour GitHub Pages gratuit).
- App renommée **Iris** (ex-Repères) — titre, en-tête, clé `localStorage` (`iris.v1`) et nom du fichier de sauvegarde exportée reflètent ce nom ; le mot commun « repères » reste utilisé tel quel dans les textes de scoring, ça n'a rien à voir avec le nom de l'app.
- **Domaine personnalisé actif : `https://iris.rosely.fr/`** — GitHub Pages avec domaine personnalisé configuré (`CNAME` committé automatiquement par GitHub), DNS chez Cloudflare (zone `rosely.fr`, enregistrement `iris` en CNAME vers `pirosmusic.github.io`, **DNS only**, sans conflit avec les enregistrements mail existants du domaine). **Enforce HTTPS activé.**
- `git push` fonctionne de façon autonome depuis ce dépôt local (`D:\Claude\Projects\Reperes_clone`) via `gh auth login` déjà configuré sur la machine de Fabien — pas de token à ressaisir.
- L'ancienne URL `https://pirosmusic.github.io/reperes/` reste techniquement valide mais n'est plus l'adresse à communiquer (`<link rel="canonical">` pointe vers le domaine officiel).
- **Fichiers statiques à la racine** (en plus de `index.html`) : `og-image.png` (aperçu de partage WhatsApp/réseaux, référencé par les balises `og:*`), `apple-touch-icon.png` (icône « ajouter à l'écran d'accueil » iOS), `manifest.webmanifest` (PWA). Ils ne violent pas la règle « zéro appel réseau » : ce sont des fichiers same-origin chargés uniquement par les crawlers de partage ou à l'installation, jamais par l'app en fonctionnement. Le favicon, lui, est un SVG inline en data-URI dans `head.html`.

## Prochaines pistes possibles (non demandées explicitement, à confirmer avec Fabien avant de coder)

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
