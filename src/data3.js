/* ============================================================
   DONNÉES — PARTIE 3 : Régulation émotionnelle (ERQ),
   Épuisement (CBI), Solitude (UCLA-3) + contenus transverses
   ============================================================ */

var TESTS_3 = [

/* ---------------- 9. RÉGULATION ÉMOTIONNELLE — ERQ ---------------- */
{
  id: "erq",
  nom: "Régulation des émotions",
  sigle: "ERQ · 10 items",
  cat: "Émotions",
  duree: "2-3 min",
  intro: "L'Emotion Regulation Questionnaire (Gross & John, 2003 ; validation française : Christophe et al., 2009) mesure vos deux grandes stratégies face aux émotions : la RÉÉVALUATION (changer sa lecture de la situation) et la SUPPRESSION (masquer ce qu'on ressent). La recherche est nette : la première est globalement bénéfique, la seconde coûte cher à long terme.",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation sur votre manière habituelle de gérer vos émotions.",
  echelle: ECH_ACCORD7,
  items: [
    { t: "Quand je veux ressentir plus d'émotions positives (joie, amusement), je modifie ce à quoi je pense", d: "R" },
    { t: "Je garde mes émotions pour moi", d: "S" },
    { t: "Quand je veux ressentir moins d'émotions négatives (tristesse, colère), je modifie ce à quoi je pense", d: "R" },
    { t: "Quand je ressens des émotions positives, je fais attention à ne pas les exprimer", d: "S" },
    { t: "Face à une situation stressante, je m'efforce de la voir sous un angle qui m'aide à rester calme", d: "R" },
    { t: "Je contrôle mes émotions en ne les exprimant pas", d: "S" },
    { t: "Quand je veux ressentir plus d'émotions positives, je change ma façon de voir la situation", d: "R" },
    { t: "Je contrôle mes émotions en changeant ma façon de penser à la situation dans laquelle je me trouve", d: "R" },
    { t: "Quand je ressens des émotions négatives, je fais en sorte de ne pas les exprimer", d: "S" },
    { t: "Quand je veux ressentir moins d'émotions négatives, je change ma façon de voir la situation", d: "R" }
  ],
  scoringNote: "Moyenne de 1 à 7 par stratégie (réévaluation : 6 items ; suppression : 4 items). Moyennes indicatives des échantillons adultes : réévaluation ≈ 4,5 · suppression ≈ 3,3. Il s'agit de repères, pas de seuils.",
  dims: {
    R: {
      nom: "Réévaluation cognitive", format: "moyenne", min: 1, max: 7, valence: true,
      descriptif: "Capacité à changer la lecture d'une situation pour en changer l'impact émotionnel (« ce retard est agaçant » → « c'est 20 minutes pour souffler »). Associée à plus de bien-être, de meilleures relations et moins de symptômes anxio-dépressifs.",
      bandes: [
        { max: 3.5, label: "Peu utilisée", niveau: "attention", texte: "Vous utilisez peu la réévaluation : les situations « imposent » leur charge émotionnelle sans que vous puissiez la moduler. Bonne nouvelle : c'est LA compétence émotionnelle la plus entraînable — c'est le cœur des TCC." },
        { max: 5, label: "Usage moyen", niveau: "ok", texte: "Vous savez recadrer les situations, au moins parfois. Les axes ci-dessous permettent d'en faire un réflexe plus systématique." },
        { max: 7, label: "Usage fréquent", niveau: "ok", texte: "La réévaluation est un réflexe chez vous — un des meilleurs prédicteurs de stabilité émotionnelle. Vigilance : recadrer ne doit pas devenir nier (certaines situations méritent colère ou tristesse, et une action)." }
      ],
      amelioration: {
        intro: "La réévaluation est une compétence qui s'entraîne comme un muscle : les exercices ci-dessous en sont les gammes.",
        axes: [
          { titre: "La question des trois lectures", texte: "Face à une contrariété, s'imposer d'écrire 3 interprétations différentes de la situation, dont une neutre et une charitable. Puis choisir la plus PLAUSIBLE (pas la plus rose). C'est l'exercice de base de la restructuration cognitive." },
          { titre: "Recadrage temporel", texte: "« Qu'est-ce que j'en penserai dans une semaine ? dans un an ? » — le zoom arrière temporel est une des formes de réévaluation les plus efficaces et les plus simples." },
          { titre: "Distanciation linguistique", texte: "Se parler à la 2e ou 3e personne en vous appelant par votre prénom (« [Prénom], qu'est-ce qui se joue là ? ») crée une distance psychologique mesurable (travaux d'Ethan Kross) et facilite le recadrage." }
        ],
        objectif: "3 semaines d'exercice « trois lectures » sur chaque contrariété notable (1-2 par jour max), puis en réflexe mental sans écrire. Re-test à 6 semaines : viser un gain de 0,5 à 1 point.",
        ressources: [
          "Gross, J. J., & John, O. P. (2003). Individual differences in two emotion regulation processes. Journal of Personality and Social Psychology, 85(2), 348-362.",
          "Kross, E. « À l'écoute de ma voix » (trad. fr. de Chatter, Le Livre de Poche, 2022) — sur la distanciation.",
          "Christophe, V. et al. (2009). Adaptation française de l'ERQ. Revue Européenne de Psychologie Appliquée, 59(1)."
        ]
      }
    },
    S: {
      nom: "Suppression expressive", format: "moyenne", min: 1, max: 7, valence: false,
      descriptif: "Tendance à masquer l'expression de ses émotions (visage neutre, « ça va très bien »). Utile ponctuellement (réunion, négociation), mais son usage CHRONIQUE est associé à moins de bien-être, des relations plus pauvres et paradoxalement plus d'activation physiologique.",
      bandes: [
        { max: 3, label: "Faible", niveau: "ok", texte: "Vous laissez vos émotions s'exprimer la plupart du temps. C'est associé à des relations plus authentiques et à un meilleur bien-être." },
        { max: 4.5, label: "Modérée", niveau: "neutre", texte: "Usage sélectif du masquage émotionnel — probablement contextuel (travail, par exemple). Sain tant que des espaces d'expression authentique existent par ailleurs." },
        { max: 7, label: "Élevée", niveau: "attention", texte: "Vous masquez systématiquement ce que vous ressentez. Coût documenté : les autres se sentent tenus à distance, le lien s'appauvrit, et l'émotion non exprimée continue de tourner à l'intérieur (la suppression ne DIMINUE pas l'émotion ressentie, elle en cache juste la surface)." }
      ],
      amelioration: {
        intro: "L'objectif n'est pas de tout exprimer partout, mais de retrouver le choix : pouvoir montrer ce que vous ressentez quand le contexte s'y prête.",
        axes: [
          { titre: "Étiqueter avant tout", texte: "Mettre des mots précis sur l'émotion (« je suis déçu et un peu vexé », pas juste « ça va ») réduit son intensité (affect labeling, travaux de Lieberman). C'est l'étape zéro, faisable même sans rien montrer aux autres." },
          { titre: "Zones d'expression choisies", texte: "Inutile de tout dire à tout le monde : choisissez 1-2 personnes « sûres » avec qui pratiquer l'expression honnête (« la journée a été rude, je suis à cran »). L'objectif est la flexibilité : pouvoir choisir d'exprimer ou non." },
          { titre: "Remplacer la suppression par la réévaluation", texte: "La suppression intervient APRÈS coup (l'émotion est déjà là) ; la réévaluation intervient AVANT (elle change l'émotion). Chaque fois que vous vous surprenez à masquer, demandez-vous : « quelle autre lecture de la situation aurait changé ce que je ressens ? »" }
        ],
        objectif: "6 semaines : un étiquetage émotionnel précis par jour (à l'écrit ou à voix haute) + une expression authentique par semaine auprès d'une personne de confiance. Viser un score qui redescend sous 4.",
        ressources: [
          "Gross, J. J. (2015). Emotion regulation: current status and future prospects. Psychological Inquiry, 26(1).",
          "Lieberman, M. D. et al. (2007). Putting feelings into words. Psychological Science, 18(5).",
          "David, S. « L'agilité émotionnelle » (J'ai Lu, 2018) — vulgarisation sérieuse (Harvard) sur la flexibilité émotionnelle."
        ]
      }
    }
  },
  source: {
    instrument: "Emotion Regulation Questionnaire (ERQ)",
    statut: "Libre pour usage non commercial (Stanford, J. Gross). Version française validée.",
    refs: [
      "Gross, J. J., & John, O. P. (2003). Journal of Personality and Social Psychology, 85(2), 348-362.",
      "Christophe, V., Antoine, P., Leroy, T., & Delelis, G. (2009). Évaluation de deux stratégies de régulation émotionnelle : la suppression expressive et la réévaluation cognitive. Revue Européenne de Psychologie Appliquée, 59(1), 59-67."
    ]
  }
},

/* ---------------- 10. ÉPUISEMENT — CBI ---------------- */
{
  id: "cbi",
  nom: "Épuisement (burnout personnel)",
  sigle: "CBI · 6 items",
  cat: "Stress & énergie",
  duree: "1 min",
  intro: "Le Copenhagen Burnout Inventory (Kristensen et al., 2005) est une alternative scientifique libre au MBI (payant). Cette échelle « épuisement personnel » mesure la fatigue physique et psychologique globale, que la cause soit professionnelle ou non.",
  consigne: "Répondez d'après ce que vous ressentez ces dernières semaines.",
  echelle: { labels: ["Jamais ou presque", "Rarement", "Parfois", "Souvent", "Toujours"], valeurs: [0, 25, 50, 75, 100] },
  items: [
    { t: "Vous sentez-vous fatigué(e) ?", d: "F" },
    { t: "Êtes-vous physiquement épuisé(e) ?", d: "F" },
    { t: "Êtes-vous émotionnellement épuisé(e) ?", d: "F" },
    { t: "Vous arrive-t-il de penser « je n'en peux plus » ?", d: "F" },
    { t: "Vous sentez-vous vidé(e) ?", d: "F" },
    { t: "Vous sentez-vous affaibli(e) et vulnérable aux maladies ?", d: "F" }
  ],
  scoringNote: "Moyenne des 6 items sur une échelle 0-100. Convention d'usage (l'article d'origine ne fixe pas de seuils officiels) : ≥ 50 = épuisement notable ; ≥ 75 = élevé à sévère.",
  dims: {
    F: {
      nom: "Épuisement personnel", format: "moyenne", min: 0, max: 100, valence: false,
      descriptif: "Fatigue globale, physique et émotionnelle. L'épuisement durable n'est pas une preuve de courage ni une fatalité de la vie moderne : c'est un signal physiologique à traiter comme tel.",
      bandes: [
        { max: 24, label: "Énergie préservée", niveau: "ok", texte: "Fatigue faible. Continuez à protéger ce qui vous régénère : sommeil, coupures réelles, activité physique." },
        { max: 49, label: "Fatigue notable", niveau: "attention", texte: "Fatigue régulière mais pas encore installée. C'est LE bon moment pour agir : à ce stade, récupération et réglages de charge suffisent souvent. Re-testez toutes les 2-3 semaines pour surveiller la pente." },
        { max: 74, label: "Épuisement élevé", niveau: "alerte", texte: "Épuisement au-dessus du seuil notable (≥ 50). Prenez-le au sérieux : identifiez la source principale (travail ? charge familiale ? santé ? sommeil ?) et si c'est professionnel, sachez que le médecin du travail peut être saisi à votre initiative, confidentiellement. Faites aussi le PHQ-9 : épuisement et dépression se recouvrent en partie." },
        { max: 100, label: "Épuisement très élevé", niveau: "alerte", texte: "Niveau d'épuisement majeur. Consultez votre médecin traitant rapidement — pour objectiver (bilan), protéger (arrêt si nécessaire) et traiter. Le burnout sévère ne se règle pas à la volonté : il se soigne avec du repos réel, un accompagnement, et un changement des conditions qui l'ont produit." }
      ],
      amelioration: {
        intro: "La récupération d'un épuisement suit toujours le même ordre : d'abord restaurer (sommeil, coupure), ensuite comprendre (qu'est-ce qui épuise ?), enfin renégocier (charge, limites, sens).",
        axes: [
          { titre: "Restaurer le sommeil en priorité absolue", texte: "Tant que le sommeil est dégradé, rien d'autre ne tiendra. Horaires réguliers, pas d'écran au lit, pas d'alcool comme somnifère. Si insomnie installée : la TCC de l'insomnie est le traitement de référence (plus efficace que les somnifères à moyen terme)." },
          { titre: "Coupures réelles et récupération active", texte: "La récupération exige un désengagement psychologique du travail (recherche de Sabine Sonnentag) : des activités qui absorbent l'attention (sport, artisanat, nature) récupèrent mieux que le canapé-écran, qui ne « décroche » pas la tête." },
          { titre: "Réduire la charge, pas seulement mieux la porter", texte: "Listez ce qui épuise le plus, et pour chaque item : supprimer / déléguer / renégocier / accepter. Un épuisement qui vient de conditions objectives (surcharge chronique) ne se règle pas par la méditation." },
          { titre: "Vérifier le versant médical", texte: "Fatigue persistante = aussi un motif de bilan médical simple (thyroïde, fer, apnée du sommeil…). Ne psychologisez pas trop vite une fatigue qui peut être somatique." }
        ],
        objectif: "Objectif : repasser sous 50 en 4-6 semaines, puis sous 25. Protocole : sommeil régularisé + une coupure « absorbante » par jour + une renégociation de charge concrète. Re-test toutes les 2 semaines ; si la courbe ne descend pas, consultez.",
        ressources: [
          "Kristensen, T. S., Borritz, M., Villadsen, E., & Christensen, K. B. (2005). The Copenhagen Burnout Inventory. Work & Stress, 19(3), 192-207.",
          "HAS (2017). Repérage et prise en charge cliniques du syndrome d'épuisement professionnel (has-sante.fr).",
          "INRS — dossier « Épuisement professionnel » (inrs.fr).",
          "Sonnentag, S., & Fritz, C. (2015). Recovery from job stress: The stressor-detachment model as an integrative framework. Journal of Organizational Behavior, 36(S1), S72-S103."
        ],
        consulter: "Score ≥ 50 durable, ou ≥ 75, ou signes associés (troubles du sommeil, cynisme envers le travail, erreurs inhabituelles, idées noires) : médecin traitant et/ou médecin du travail."
      }
    }
  },
  source: {
    instrument: "Copenhagen Burnout Inventory (CBI) — échelle « épuisement personnel »",
    statut: "Libre d'utilisation (explicitement mis à disposition par les auteurs). Traduction française réalisée pour cette application ; des adaptations francophones existent.",
    refs: [
      "Kristensen, T. S. et al. (2005). The Copenhagen Burnout Inventory: a new tool for the assessment of burnout. Work & Stress, 19(3), 192-207."
    ]
  }
},

/* ---------------- 11. SOLITUDE — UCLA-3 ---------------- */
{
  id: "ucla3",
  nom: "Solitude ressentie",
  sigle: "UCLA-3 · 3 items",
  cat: "Relations",
  duree: "30 s",
  intro: "La version à 3 items de l'échelle de solitude UCLA (Hughes et al., 2004) est l'outil standard des grandes enquêtes internationales. La solitude RESSENTIE (être mal accompagné, même entouré) est distincte de l'isolement objectif — et c'est elle qui pèse sur la santé. Une version complète (UCLA-20) est disponible plus bas dans la liste pour une mesure plus fine.",
  consigne: "En général, à quelle fréquence…",
  echelle: { labels: ["Presque jamais", "Parfois", "Souvent"], valeurs: [1, 2, 3] },
  items: [
    { t: "…vous sentez-vous en manque de compagnie ?", d: "L" },
    { t: "…vous sentez-vous laissé(e) de côté, exclu(e) ?", d: "L" },
    { t: "…vous sentez-vous isolé(e) des autres ?", d: "L" }
  ],
  scoringNote: "Somme des 3 items, de 3 à 9. Convention de recherche : 3-5 = solitude faible · 6-9 = solitude marquée.",
  dims: {
    L: {
      nom: "Solitude ressentie", format: "somme", min: 3, max: 9, valence: false,
      descriptif: "Écart ressenti entre les relations que vous avez et celles dont vous auriez besoin. La solitude chronique est un facteur de risque sanitaire sérieux et documenté — et elle se combat efficacement.",
      bandes: [
        { max: 5, label: "Solitude faible", niveau: "ok", texte: "Votre vie relationnelle couvre l'essentiel de vos besoins. Les moments de solitude ponctuels sont normaux — et la solitude choisie peut être précieuse." },
        { max: 7, label: "Solitude marquée", niveau: "attention", texte: "Le sentiment d'être seul(e) ou à l'écart se fait sentir régulièrement. Deux choses à savoir : c'est très répandu (ce n'est pas une anomalie honteuse), et c'est le bon moment pour agir — pas en « rencontrant plus de monde » au hasard, mais en construisant de la régularité et de la profondeur (axes ci-dessous)." },
        { max: 9, label: "Solitude importante", niveau: "alerte", texte: "Le sentiment d'être seul(e) ou à l'écart pèse fortement sur votre quotidien. Prenez-le au sérieux : la solitude chronique à ce niveau est un facteur de risque documenté pour la santé physique et mentale — et elle se traite, pas en « rencontrant plus de monde » au hasard, mais en construisant de la régularité et de la profondeur (axes ci-dessous)." }
      ],
      amelioration: {
        intro: "La recherche (méta-analyses sur les interventions contre la solitude) montre que le levier le plus efficace n'est pas de multiplier les contacts, mais de changer ce qu'on attend et perçoit des autres, et d'installer des liens RÉGULIERS.",
        axes: [
          { titre: "Régularité avant quantité", texte: "Les liens se créent par exposition répétée dans la durée : activité HEBDOMADAIRE fixe avec les mêmes personnes (club sportif, chorale, association, cours). Un an de mardis soirs bat cent soirées ponctuelles." },
          { titre: "Raviver les liens dormants", texte: "Recontacter d'anciens amis est étonnamment efficace et bien accueilli (la recherche montre qu'on sous-estime systématiquement le plaisir que notre message fera). Un message concret : « j'ai repensé à toi, on se fait un café ? »" },
          { titre: "Corriger la lecture anxieuse", texte: "La solitude chronique biaise la perception (« je vais déranger », « ils ne m'apprécient pas vraiment ») et pousse au retrait qui aggrave la solitude. C'est le cercle que les TCC ciblent en priorité." },
          { titre: "Donner pour se relier", texte: "Le bénévolat régulier crée du lien avec un prétexte intégré (on fait ensemble, pas face à face) : francebenevolat.org ou jeveuxaider.gouv.fr pour trouver une mission près de chez vous." }
        ],
        objectif: "8 semaines : une activité collective régulière + un lien dormant ravivé + un contact réel par jour. Re-testez ensuite ; visez le passage sous 6, puis vers 3-4. Si l'anxiété sociale bloque le premier pas, c'est elle qu'il faut traiter d'abord (TCC — très efficace).",
        ressources: [
          "Hughes, M. E., Waite, L. J., Hawkley, L. C., & Cacioppo, J. T. (2004). A short scale for measuring loneliness in large surveys. Research on Aging, 26(6), 655-672.",
          "Masi, C. M. et al. (2011). A meta-analysis of interventions to reduce loneliness. Personality and Social Psychology Review, 15(3).",
          "Fondation de France — baromètre des solitudes (données françaises).",
          "jeveuxaider.gouv.fr — plateforme publique du bénévolat."
        ],
        consulter: "Si le retrait s'accompagne d'une humeur durablement basse (faites le test d'humeur PHQ-9) ou dure depuis des mois, parlez-en à votre médecin traitant."
      }
    }
  },
  source: {
    instrument: "UCLA Loneliness Scale — version courte à 3 items",
    statut: "Version courte librement utilisée dans les enquêtes internationales (SHARE, HRS…). Traduction française réalisée pour cette application.",
    refs: [
      "Hughes, M. E. et al. (2004). Research on Aging, 26(6), 655-672.",
      "Russell, D. W. (1996). UCLA Loneliness Scale (Version 3). Journal of Personality Assessment, 66(1)."
    ]
  }
},

/* ---------------- 12. LANGAGES DE L'AMOUR (pop-psychologie assumée) ---------------- */
{
  id: "amour",
  nom: "Langages de l'amour",
  sigle: "Profil de préférences · 20 items",
  cat: "Couple",
  duree: "3 min",
  special: "amour",
  avertissement: "Étiquette honnête — ce test est différent des autres de cette app : les « 5 langages de l'amour » (Chapman, 1992) sont un concept populaire, pas un construit scientifiquement validé. La recherche récente (Impett et al., 2024) ne confirme ni l'existence de 5 langages distincts, ni le fait d'avoir « un » langage principal, ni l'idée que l'appariement des langages prédit la satisfaction du couple. Utilisez ce profil comme un support de conversation à deux — pas comme une vérité sur vous.",
  intro: "Le concept des « langages de l'amour » est partout — et il faut être clair : c'est de la pop-psychologie, sans validation solide. Il reste pourtant un bon prétexte de dialogue : ce questionnaire (items originaux, le quiz officiel étant propriétaire) dresse votre profil de préférences sur les cinq canaux classiques. La partie réellement étayée par la recherche — dire ce qui vous touche, découvrir ce qui touche l'autre, y répondre — est dans les résultats.",
  consigne: "Chaque affirmation complète la phrase : « Je me sens particulièrement aimé(e) quand… ». Indiquez à quel point c'est vrai pour vous. Si vous n'êtes pas en couple, répondez d'après vos relations passées.",
  echelle: { labels: ["Pas du tout vrai pour moi", "Un peu vrai", "Moyennement vrai", "Très vrai", "Tout à fait vrai"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "…mon/ma partenaire me dit explicitement ce qu'il/elle apprécie chez moi", d: "PAR" },
    { t: "…nous passons un moment ensemble sans téléphone ni distraction", d: "TEMPS" },
    { t: "…il/elle me décharge d'une tâche sans que j'aie besoin de le demander", d: "SERV" },
    { t: "…il/elle m'offre quelque chose qui montre qu'il/elle a pensé à moi", d: "CAD" },
    { t: "…il/elle me prend dans ses bras", d: "TOUCH" },
    { t: "…je reçois un mot doux, un message ou un compliment inattendu", d: "PAR" },
    { t: "…il/elle me consacre du temps rien qu'à nous deux", d: "TEMPS" },
    { t: "…il/elle fait quelque chose de concret pour me faciliter la vie", d: "SERV" },
    { t: "…je reçois un petit cadeau sans occasion particulière", d: "CAD" },
    { t: "…nous nous tenons la main ou restons physiquement proches", d: "TOUCH" },
    { t: "…il/elle me dit qu'il/elle est fier(ère) de moi", d: "PAR" },
    { t: "…nous avons une vraie conversation où il/elle m'écoute pleinement", d: "TEMPS" },
    { t: "…il/elle prend en charge une corvée que je redoute", d: "SERV" },
    { t: "…il/elle me rapporte un petit quelque chose qui prouve qu'il/elle me connaît vraiment", d: "CAD" },
    { t: "…il/elle me touche affectueusement en passant (main sur l'épaule, dans le dos…)", d: "TOUCH" },
    { t: "…il/elle m'encourage avec des mots quand je doute de moi", d: "PAR" },
    { t: "…il/elle organise une activité juste pour qu'on soit ensemble", d: "TEMPS" },
    { t: "…il/elle remarque ce qui doit être fait et le fait, sans commentaire", d: "SERV" },
    { t: "…un cadeau choisi avec soin me touche durablement", d: "CAD" },
    { t: "…nous nous câlinons sans que ça doive forcément mener à autre chose", d: "TOUCH" }
  ],
  scoringNote: "Moyenne de 1 à 5 par canal (4 items chacun). Il n'existe aucune norme scientifique : comparez vos cinq scores ENTRE EUX (votre hiérarchie personnelle), pas à ceux d'autres personnes. Les cinq canaux ne sont pas étanches — la plupart des gens valorisent plusieurs canaux à la fois, ce que la recherche confirme d'ailleurs contre la théorie d'origine.",
  dims: {
    PAR: {
      nom: "Paroles valorisantes", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "Compliments, encouragements, mots d'amour explicites — être DIT aimé(e), pas seulement le déduire. C'est le canal le plus simple à activer au quotidien, et souvent le premier que l'usure du couple fait disparaître.",
      bandes: [
        { max: 2.5, label: "Secondaire", niveau: "neutre", texte: "Les mots comptent moins pour vous : leur rareté ne vous blesse probablement pas beaucoup." },
        { max: 3.5, label: "Apprécié", niveau: "neutre", texte: "Les mots font plaisir sans être votre canal le plus sensible." },
        { max: 5, label: "Central", niveau: "neutre", texte: "Canal majeur pour vous : sans mots explicites, le sentiment d'être aimé(e) s'érode, même si tout le reste est là. Dites-le à votre partenaire — beaucoup de gens pensent que « ça se voit » et ne le disent jamais." }
      ],
      amelioration: {
        axes: [
          { titre: "Le demander sans honte", texte: "Demander « dis-moi ce que tu apprécies chez moi » n'enlève rien à la valeur de la réponse. Attendre que l'autre devine est la recette documentée de la frustration — personne ne lit dans les pensées." },
          { titre: "Le donner avec précision", texte: "Si c'est le canal de votre partenaire : des mots SPÉCIFIQUES (« j'ai adoré ta façon de gérer la soirée ») touchent bien plus que des génériques (« t'es super »). La recherche sur la gratitude exprimée en couple le confirme." },
          { titre: "La pudeur n'est pas de l'indifférence", texte: "Beaucoup de gens n'expriment pas verbalement par habitude familiale ou pudeur, pas par manque d'amour. Si vous recevez peu de mots, creusez avant de conclure à un désintérêt — la retenue peut coexister avec un attachement fort." }
        ],
        objectif: "Montrez votre hiérarchie à votre partenaire, découvrez la sienne, et testez pendant un mois une attention par semaine dans le canal préféré de l'autre. L'indicateur, c'est ce que ça change dans la relation — pas le score.",
        ressources: [
          "Impett, E. A., Park, H. G., & Muise, A. (2024). Evaluating love languages and the case for perceived partner responsiveness. Current Directions in Psychological Science, 33(2).",
          "Algoe, S. B. (2012). Find, remind, and bind: the functions of gratitude in everyday relationships. Social and Personality Psychology Compass, 6(6)."
        ]
      }
    },
    TEMPS: {
      nom: "Temps de qualité", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "Attention pleine et non partagée : moments à deux, vraies conversations, présence sans écran. Le canal le plus sensible à l'érosion progressive du quotidien (enfants, travail, fatigue), souvent sans qu'on s'en rende compte.",
      bandes: [
        { max: 2.5, label: "Secondaire", niveau: "neutre", texte: "Vous pouvez vous sentir aimé(e) sans beaucoup de temps dédié en tête-à-tête." },
        { max: 3.5, label: "Apprécié", niveau: "neutre", texte: "Les moments à deux nourrissent le lien sans être votre baromètre principal." },
        { max: 5, label: "Central", niveau: "neutre", texte: "C'est la présence attentive qui vous fait vous sentir aimé(e) — et la distraction (téléphone, télé permanente) qui vous blesse le plus. À nommer clairement plutôt qu'à reprocher." }
      ],
      amelioration: {
        axes: [
          { titre: "Ritualiser plutôt qu'espérer", texte: "Un créneau récurrent protégé (marche du dimanche, dîner sans téléphone) vaut mieux que d'attendre du temps « spontané » qui ne vient jamais dans des vies chargées." },
          { titre: "Qualité = attention, pas durée", texte: "15 minutes de conversation avec attention complète comptent plus qu'une soirée côte à côte sur deux écrans. Le mécanisme réellement documenté derrière ce canal : la réactivité perçue — l'autre remarque, comprend et répond à ce que je vis." },
          { titre: "Distinguer présence et coprésence", texte: "Être physiquement dans la même pièce sans attention réelle (chacun sur son écran) ne nourrit pas ce canal — c'est l'attention portée à l'autre, pas la simple coprésence, qui compte pour vous." }
        ],
        objectif: "Un rituel hebdomadaire protégé pendant un mois, téléphones ailleurs. Puis demandez-vous à deux : qu'est-ce que ça a changé ?",
        ressources: [
          "Reis, H. T., & Clark, M. S. (2013). Responsiveness. The Oxford Handbook of Close Relationships.",
          "Impett, E. A., Park, H. G., & Muise, A. (2024). Current Directions in Psychological Science, 33(2)."
        ]
      }
    },
    SERV: {
      nom: "Services rendus", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "L'amour prouvé par les actes concrets : alléger la charge de l'autre, remarquer ce qui doit être fait, le faire. Un canal particulièrement exposé au ressentiment silencieux quand l'effort n'est pas vu ni reconnu.",
      bandes: [
        { max: 2.5, label: "Secondaire", niveau: "neutre", texte: "Les coups de main comptent moins pour vous que d'autres formes d'attention." },
        { max: 3.5, label: "Apprécié", niveau: "neutre", texte: "L'aide concrète vous touche, parmi d'autres canaux." },
        { max: 5, label: "Central", niveau: "neutre", texte: "Pour vous, aimer c'est agir : un lave-vaisselle vidé spontanément parle plus qu'un bouquet. Attention au piège documenté de ce canal : la comptabilité silencieuse de la charge mentale — mieux vaut la rendre explicite et la négocier." }
      ],
      amelioration: {
        axes: [
          { titre: "Expliciter la charge invisible", texte: "Si vous attendez de l'aide « sans avoir à demander », listez ensemble qui porte quoi (la charge mentale se discute mieux sur une liste que dans un reproche). C'est un vrai sujet de recherche, pas un caprice." },
          { titre: "Remercier les actes, pas seulement les faire", texte: "Dans ce canal, on donne souvent ce qu'on aimerait recevoir puis on s'épuise en silence. Nommer ce que l'autre fait déjà change la dynamique documentée du ressentiment." },
          { titre: "Ne pas glisser vers le contrôle", texte: "Faire À LA PLACE de l'autre sans son accord (refaire une tâche « mieux », décider seul(e) de ce qui doit être fait) peut être vécu comme une critique déguisée de sa façon de faire, même avec de bonnes intentions." }
        ],
        objectif: "Une négociation explicite de la répartition des tâches + une attention hebdomadaire dans le canal de l'autre, pendant un mois.",
        ressources: [
          "Impett, E. A., Park, H. G., & Muise, A. (2024). Current Directions in Psychological Science, 33(2).",
          "Haicault, M. (1984). La gestion ordinaire de la vie en deux — le concept d'origine de la charge mentale (Sociologie du travail, 26(3))."
        ]
      }
    },
    CAD: {
      nom: "Cadeaux & attentions matérielles", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "L'objet comme preuve de pensée : « il/elle a pensé à moi en mon absence ». La valeur symbolique, pas le prix — un post-it ou une fleur cueillie compte autant qu'un cadeau coûteux si l'attention est réelle.",
      bandes: [
        { max: 2.5, label: "Secondaire", niveau: "neutre", texte: "Les objets vous touchent peu — d'autres canaux portent le sentiment d'être aimé(e)." },
        { max: 3.5, label: "Apprécié", niveau: "neutre", texte: "Les attentions matérielles font plaisir sans être votre langage dominant." },
        { max: 5, label: "Central", niveau: "neutre", texte: "Le petit objet qui prouve « j'ai pensé à toi » vous touche profondément — et son absence aux moments symboliques (anniversaires) blesse durablement. Ce n'est pas du matérialisme : c'est la trace tangible de la pensée de l'autre." }
      ],
      amelioration: {
        axes: [
          { titre: "Dédramatiser la demande", texte: "Dire « les petites attentions comptent énormément pour moi » évite à l'autre des années de cadeaux à côté et à vous des déceptions rituelles. La précision n'est pas de l'ingratitude." },
          { titre: "Si c'est le canal de l'autre", texte: "Tenez une note des choses qu'il/elle mentionne aimer au fil de l'année — le cadeau juste est une preuve d'écoute, c'est exactement pour ça qu'il touche." },
          { titre: "Séparer fréquence et budget", texte: "Un petit geste régulier (un mot ramassé en rentrant, un fruit préféré rapporté) fonctionne au moins aussi bien qu'un cadeau rare et cher — c'est la régularité de l'attention qui nourrit ce canal, pas la dépense." }
        ],
        objectif: "Même protocole que les autres canaux : hiérarchies échangées, une attention par semaine dans le canal de l'autre pendant un mois, bilan à deux.",
        ressources: [
          "Impett, E. A., Park, H. G., & Muise, A. (2024). Current Directions in Psychological Science, 33(2).",
          "Galak, J., Givi, J., & Williams, E. F. (2016). Why certain gifts are great to give but not to get. Current Directions in Psychological Science, 25(6), 380-385."
        ]
      }
    },
    TOUCH: {
      nom: "Le toucher", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "Contact physique affectueux au quotidien — câlins, mains tenues, proximité — comme canal principal de connexion. Son besoin varie naturellement avec la fatigue, le stress ou le contexte de vie.",
      bandes: [
        { max: 2.5, label: "Secondaire", niveau: "neutre", texte: "Le contact physique fréquent n'est pas votre canal principal — ce qui mérite d'être dit si votre partenaire, lui/elle, en a besoin." },
        { max: 3.5, label: "Apprécié", niveau: "neutre", texte: "Le contact affectueux nourrit le lien parmi d'autres canaux." },
        { max: 5, label: "Central", niveau: "neutre", texte: "Le contact physique est votre baromètre du lien : sa raréfaction vous insécurise plus que tout discours ne rassure. À noter : le toucher affectif quotidien est l'un des rares éléments de cette typologie avec un vrai soutien empirique (lien documenté avec la satisfaction relationnelle et la réduction du stress)." }
      ],
      amelioration: {
        axes: [
          { titre: "Découpler tendresse et sexualité", texte: "Beaucoup de couples perdent le toucher affectueux quand il devient implicitement une demande sexuelle. Restaurer du contact « gratuit » (câlin, main, épaule) détend précisément cette pression — et c'est souvent ce qui manque le plus." },
          { titre: "Respecter les différences", texte: "Si l'un a ce canal central et l'autre pas, la solution n'est ni de forcer ni de se priver : nommer la différence, trouver les formes de contact confortables pour les deux, et compenser par les canaux de l'autre." },
          { titre: "Ne pas confondre baisse temporaire et retrait", texte: "Une période de fatigue, de maladie ou de stress intense (jeunes enfants, deuil, surcharge) réduit souvent le contact physique sans que ce soit un désinvestissement affectif — nommer la cause évite les malentendus les plus douloureux." }
        ],
        objectif: "Un mois de contact affectueux quotidien « sans agenda », puis bilan à deux sur ce que ça a changé.",
        ressources: [
          "Jakubiak, B. K., & Feeney, B. C. (2017). Affectionate touch to promote relational, psychological, and physical well-being in adulthood. Personality and Social Psychology Review, 21(3).",
          "Impett, E. A., Park, H. G., & Muise, A. (2024). Current Directions in Psychological Science, 33(2)."
        ]
      }
    }
  },
  source: {
    instrument: "Profil de préférences relationnelles inspiré de la typologie des « 5 langages de l'amour »",
    statut: "Typologie populaire NON validée scientifiquement (voir Impett et al., 2024) — incluse ici avec cette étiquette explicite, comme outil de dialogue. Items originaux rédigés pour cette application (le questionnaire officiel de Chapman est propriétaire). Aucune norme n'existe : seule votre hiérarchie interne est interprétable.",
    refs: [
      "Chapman, G. (1992). The Five Love Languages. Northfield Publishing (trad. fr. « Les langages de l'amour », Farel/Leduc).",
      "Impett, E. A., Park, H. G., & Muise, A. (2024). Popular psychology through a scientific lens: Evaluating love languages and the case for perceived partner responsiveness. Current Directions in Psychological Science, 33(2), 87-92.",
      "Bunt, S., & Hazelwood, Z. J. (2017). Walking the walk, talking the talk: Love languages, self-regulation, and relationship satisfaction. Journal of Social and Personal Relationships, 34(2), 280-297."
    ]
  }
}
];

/* ============================================================
   CONTENUS TRANSVERSES
   ============================================================ */

var URGENCES = {
  titre: "Besoin d'aide maintenant ?",
  texte: "Si vous traversez un moment très difficile ou avez des idées suicidaires, n'attendez pas les résultats d'un questionnaire :",
  liste: [
    { nom: "3114", detail: "Numéro national de prévention du suicide — gratuit, 24h/24, 7j/7 (3114.fr)" },
    { nom: "15", detail: "SAMU, en cas d'urgence vitale" },
    { nom: "SOS Amitié", detail: "09 72 39 40 50 — écoute 24h/24" },
    { nom: "3919", detail: "Violences Femmes Info — violences conjugales et familiales, gratuit, anonyme, 24h/24 (n'apparaît pas sur les factures ; ouvert aussi aux hommes victimes et aux proches)" },
    { nom: "116 006", detail: "France Victimes — aide aux victimes, 7j/7" },
    { nom: "Votre médecin traitant", detail: "Première ligne pour toute souffrance psychique" },
    { nom: "« Mon soutien psy »", detail: "Jusqu'à 12 séances de psychologue par an prises en charge, accès direct sans ordonnance (monsoutienpsy.ameli.fr)" }
  ]
};

var METHODE = {
  intro: "Cette application a été construite en réaction aux « tests psychologiques » qui pullulent sur les réseaux sociaux. Elle n'utilise que des instruments issus de la recherche publiée, avec leurs règles de calcul et leurs seuils d'origine — à deux exceptions près, explicitement étiquetées dans l'app : le profil « Langages de l'amour » (concept populaire non validé scientifiquement, inclus comme support de dialogue) et l'ISI (instrument protégé par le droit d'auteur, utilisé ici dans un cadre strictement personnel et non commercial).",
  sections: [
    {
      t: "Pourquoi les quiz des réseaux sociaux sont du vent",
      p: [
        "Aucune validation : un test sérieux doit démontrer sa fidélité (mesure stable) et sa validité (mesure bien ce qu'il prétend), sur des échantillons documentés, dans des publications vérifiables. Les quiz publicitaires (« Narcissism Test », « quel est votre trauma pattern ») n'ont rien de tout cela — ce sont des tunnels marketing conçus pour vendre un abonnement.",
        "L'effet Barnum : depuis l'expérience de Forer (1949), on sait que des descriptions vagues et flatteuses (« vous avez un grand potentiel inexploité… ») sont perçues comme étonnamment justes par presque tout le monde. C'est le moteur des horoscopes comme de ces quiz.",
        "Des concepts déformés : « fight/flight/freeze/fawn » comme typologie de personnalité, « 98 % narcissique toxique »… Ces contenus recyclent du vocabulaire clinique hors de tout cadre scientifique. Le concept de « fawn response », par exemple, vient d'un livre grand public et n'est pas un construit validé de la littérature — contrairement à l'attachement adulte, mesuré ici avec l'ECR.",
        "Le danger réel : s'auto-étiqueter (« je suis un empath victime d'un narcissique ») fige des situations complexes, culpabilise, et retarde parfois une vraie prise en charge."
      ]
    },
    {
      t: "Ce que cette app est — et n'est pas",
      p: [
        "EST : un ensemble d'auto-questionnaires validés, avec les vrais barèmes publiés, pour vous situer, suivre votre évolution dans le temps et identifier des axes de travail étayés par la recherche.",
        "N'EST PAS : un outil de diagnostic. Aucun questionnaire auto-administré ne diagnostique quoi que ce soit — pas même le PHQ-9 utilisé par les médecins. Un diagnostic est un acte clinique qui prend en compte contexte, durée, retentissement et diagnostic différentiel.",
        "Limites à garder en tête : l'auto-évaluation est biaisée (désirabilité sociale, humeur du moment, connaissance de soi imparfaite). Un score n'est pas une identité ; c'est une mesure bruitée, à un instant donné. D'où l'intérêt de re-tester à quelques semaines d'intervalle plutôt que de sur-interpréter une mesure unique."
      ]
    },
    {
      t: "Comment progresser vraiment",
      p: [
        "1. Mesurer : faites les tests qui correspondent à vos questions du moment. 2. Prioriser : le tableau de bord met en avant les zones d'alerte (les scores cliniques passent avant les traits de personnalité). 3. Agir : chaque résultat propose des axes fondés sur des preuves — TCC, activation comportementale, activité physique, pleine conscience structurée, affirmation de soi. 4. Re-mesurer : refaites le test après 2 à 6 semaines selon l'échelle ; c'est la COURBE qui informe, pas le point.",
        "Le meilleur rapport efficacité/coût de toute la littérature : activité physique régulière, sommeil régulier, liens sociaux réguliers, et TCC quand un score clinique s'allume. Méfiez-vous par principe de tout ce qui promet une transformation rapide, secrète ou sans effort."
      ]
    },
    {
      t: "Vie privée",
      p: [
        "Vos réponses ne quittent jamais votre appareil : aucune connexion, aucun compte, aucune donnée transmise à qui que ce soit, aucun cookie tiers, aucun outil de mesure d'audience. Tout est stocké localement, dans votre navigateur, et n'est lisible que depuis celui-ci.",
        "La contrepartie pratique de ce choix : vos données sont propres à chaque appareil (le téléphone et l'ordinateur ne partagent rien), et elles disparaissent si vous effacez les données de navigation ou si vous utilisez la navigation privée. Pensez donc à exporter régulièrement une sauvegarde (menu Historique) si vous tenez à votre historique — c'est le seul filet de sécurité.",
        "Ce n'est pas une promesse à croire sur parole : cette page est un fichier statique qui n'effectue aucun appel réseau après son chargement. Vous pouvez le vérifier vous-même dans les outils de développement de votre navigateur (onglet « Réseau »)."
      ]
    }
  ],
  refsGlobales: [
    "Forer, B. R. (1949). The fallacy of personal validation. Journal of Abnormal and Social Psychology, 44(1), 118-123.",
    "Lilienfeld, S. O. et al. (2010). 50 Great Myths of Popular Psychology. Wiley-Blackwell.",
    "Roberts, B. W. et al. (2017). A systematic review of personality trait change through intervention. Psychological Bulletin, 143(2), 117-141.",
    "INSERM (2019). Activité physique : prévention et traitement des maladies chroniques. Expertise collective.",
    "Haute Autorité de Santé — has-sante.fr (recommandations troubles anxieux, dépression, burnout).",
    "Psycom.org — information de référence, publique et indépendante, sur la santé mentale."
  ]
};

/* ============================================================
   BOÎTE À OUTILS TCC — techniques concrètes, transverses aux tests.
   Affichée sur #/tcc, reliée depuis l'Aide et les résultats des
   tests où la TCC est pertinente (TCC_IDS dans views.js).
   ============================================================ */
var TCC_OUTILS = {
  titre: "Boîte à outils TCC",
  intro: "Partout dans cette application, on vous dit que « ça se travaille en TCC ». Voici concrètement comment. Les thérapies cognitivo-comportementales reposent sur des techniques précises, documentées, que l'on peut commencer à pratiquer seul(e) — c'est même l'une des rares approches dont les versions d'auto-aide ont été testées en essais cliniques. Chaque outil ci-dessous se pratique en quelques minutes par jour, pendant plusieurs semaines : c'est la répétition qui produit l'effet, pas la compréhension intellectuelle.",
  avert: "Ces outils sont un excellent début et un bon complément — pas un substitut à une prise en charge quand un score clinique s'allume (anxiété ou humeur au-dessus des seuils, idées noires). Dans ce cas : médecin traitant, « Mon soutien psy » (accès direct, séances remboursées) ou un(e) thérapeute TCC (annuaire aftcc.org). Un(e) professionnel(le) fait exactement ce qui suit, mais calibré pour vous, avec un regard extérieur.",
  outils: [
    {
      nom: "Le journal des pensées (restructuration cognitive)",
      quand: "Anxiété, ruminations, autocritique, réactivité émotionnelle, jalousie ou lecture anxieuse des relations.",
      etapes: [
        "Quand une émotion forte monte, notez la SITUATION en une phrase factuelle (« mon message est resté sans réponse 4 heures »), sans interprétation.",
        "Notez l'ÉMOTION et son intensité de 0 à 100 (« inquiétude 70 »).",
        "Notez la PENSÉE AUTOMATIQUE, mot pour mot, telle qu'elle vous est venue (« il/elle se détache de moi »).",
        "Cherchez les PREUVES : qu'est-ce qui soutient concrètement cette pensée ? Qu'est-ce qui la contredit ? Que diriez-vous à un(e) ami(e) qui aurait cette pensée ?",
        "Formulez une PENSÉE ALTERNATIVE réaliste — pas de la pensée positive forcée, juste la lecture la plus honnête des faits (« il/elle est probablement en réunion ; rien d'autre n'indique un problème »).",
        "Ré-évaluez l'intensité de l'émotion. Elle baisse rarement à zéro — une baisse de 20-30 points est déjà le mécanisme qui, répété, change tout."
      ],
      astuce: "10 minutes par jour pendant 4 à 8 semaines. Sur papier ou dans les notes du téléphone — l'écrit est nettement plus efficace que « dans la tête », car il ralentit et met à distance."
    },
    {
      nom: "L'exposition graduée",
      quand: "Évitements qui rétrécissent la vie : anxiété sociale, peur de déranger, évitement de l'intimité, situations fuies depuis longtemps.",
      etapes: [
        "Listez les situations évitées, puis classez-les de 0 à 100 selon l'anxiété qu'elles déclenchent (votre « hiérarchie d'exposition »).",
        "Commencez par une marche à 30-40 (inconfortable mais faisable) — jamais par le sommet.",
        "Restez dans la situation JUSQU'À CE QUE l'anxiété redescende d'elle-même (elle le fait toujours, en général en 20-40 minutes) — partir au pic renforce la peur, rester l'éteint.",
        "Répétez la même marche plusieurs fois dans la semaine, jusqu'à ce qu'elle devienne banale. Puis montez d'une marche.",
        "Traquez les « évitements subtils » qui annulent l'effet : y aller mais accompagné(e), téléphone en main, en préparant sa sortie…"
      ],
      astuce: "L'exposition est LE traitement le plus efficace des troubles anxieux — et le plus contre-intuitif. Le principe tient en une phrase : l'anxiété diminue quand on lui prouve, par l'expérience répétée, qu'elle se trompe."
    },
    {
      nom: "L'activation comportementale",
      quand: "Humeur basse, perte d'élan et d'intérêt, retrait progressif, épuisement qui pousse à tout annuler.",
      etapes: [
        "Le piège de l'humeur basse : attendre l'envie pour agir. Or l'envie revient APRÈS l'action, pas avant — c'est le cœur du mécanisme.",
        "Listez ce qui vous faisait du bien avant : activités de PLAISIR (musique, marche, ami…) et de MAÎTRISE (cuisiner, réparer, ranger, finir quelque chose).",
        "Planifiez-en une ou deux par jour, à heure fixe, en version minuscule (10 minutes de marche, pas « me remettre au sport »). Notez-les dans l'agenda comme des rendez-vous.",
        "Faites-les MÊME SANS ENVIE — surtout sans envie : c'est précisément là que ça agit. Cochez après coup et notez l'humeur avant/après (0-10).",
        "Augmentez très progressivement. Les jours ratés ne comptent pas : on reprend le lendemain, sans procès."
      ],
      astuce: "Contre les symptômes dépressifs légers à modérés, l'activation comportementale seule fait aussi bien que des protocoles bien plus lourds dans les essais. Simple ne veut pas dire faible."
    },
    {
      nom: "Le temps d'inquiétude programmé",
      quand: "Inquiétudes en boucle, ruminations du soir, esprit qui « mouline » sans arrêt.",
      etapes: [
        "Fixez un rendez-vous quotidien de 15-20 minutes avec vos inquiétudes (par ex. 18 h, jamais au lit).",
        "Dans la journée, quand une inquiétude surgit : notez-la en trois mots sur une liste, et dites-vous « rendez-vous à 18 h ». Ne l'interdisez pas — reportez-la.",
        "Au rendez-vous, prenez la liste. Pour chaque inquiétude : est-elle ACTIONNABLE ? Si oui → décidez la première petite action concrète et quand vous la ferez. Si non (hypothétique, hors de votre contrôle) → journal des pensées, ou constat simple qu'elle ne dépend pas de vous.",
        "Beaucoup d'inquiétudes notées le matin semblent éteintes le soir : c'est le résultat attendu, pas un hasard."
      ],
      astuce: "On ne peut pas « arrêter de penser » sur commande — mais on peut apprendre au cerveau que les inquiétudes ont un lieu et une heure. En quelques semaines, elles interrompent beaucoup moins la journée."
    },
    {
      nom: "L'apaisement physiologique",
      quand: "Montées d'anxiété ou de colère, tension physique, avant une situation redoutée, disputes qui s'emballent.",
      etapes: [
        "Respiration lente : inspirez 4-5 secondes par le nez, expirez 5-6 secondes par la bouche (l'expiration LONGUE est ce qui freine le système d'alarme). 5 minutes, 2 à 3 fois par jour — pas seulement en crise.",
        "Relaxation musculaire progressive : contractez fort un groupe musculaire 5 secondes (poings, épaules, mâchoire…), relâchez d'un coup 15 secondes, sentez la différence. Parcourez le corps en 10 minutes.",
        "En cas de colère qui monte : quittez la pièce AVANT le point de non-retour (annoncez que vous revenez), 20 minutes minimum — c'est le temps physiologique réel de redescente — puis revenez traiter le sujet.",
        "Ancrage d'urgence « 5-4-3-2-1 » : nommez 5 choses que vous voyez, 4 que vous touchez, 3 que vous entendez, 2 que vous sentez, 1 que vous goûtez. Ramène au présent en une minute."
      ],
      astuce: "Ces techniques ne « résolvent » rien — elles rendent le cerveau réfléchi de nouveau disponible. C'est l'étape 1 obligée : on ne restructure pas une pensée à 90 d'intensité émotionnelle."
    },
    {
      nom: "La résolution de problème structurée",
      quand: "Stress lié à de vrais problèmes concrets (argent, travail, logistique, conflit précis) — quand l'inquiétude EST actionnable.",
      etapes: [
        "Définissez LE problème en une phrase précise et neutre (« le découvert revient chaque fin de mois », pas « je suis nul(le) avec l'argent »).",
        "Brainstorm sans censure : listez toutes les solutions possibles, même mauvaises — la censure tue la recherche.",
        "Évaluez rapidement chaque option (efficacité probable / coût réel), choisissez-en UNE — pas la parfaite, la raisonnable.",
        "Découpez-la en première action de moins de 15 minutes, planifiée à un moment précis.",
        "Après coup, évaluez : résolu ? Partiellement ? On ajuste et on recommence. Un problème traité en 5 étapes cesse d'être une rumination."
      ],
      astuce: "La rumination tourne en rond parce qu'elle mélange 50 problèmes à moitié formulés. La résolution structurée n'en traite qu'un — mais jusqu'au bout."
    },
    {
      nom: "L'affirmation de soi (méthode DESC)",
      quand: "Difficulté à dire non, à formuler une demande ou un désaccord — au travail, en couple, en famille.",
      etapes: [
        "D — Décrivez les FAITS, sans jugement (« la réunion a été déplacée trois fois cette semaine »).",
        "E — Exprimez votre ressenti en « je » (« je me retrouve à réorganiser mes journées et ça me pèse »).",
        "S — Spécifiez votre demande, concrète et précise (« j'aimerais qu'on fixe un créneau stable le mardi »).",
        "C — Conséquences positives si accord (« comme ça je peux garantir d'être disponible et préparé(e) »).",
        "Entraînez-vous d'abord sur des situations à faible enjeu (renvoyer un plat, refuser un démarchage), puis montez. Formulez à voix haute avant, seul(e) : la phrase prête change tout."
      ],
      astuce: "Ni paillasson ni hérisson : l'assertivité est la troisième voie, et c'est une compétence motrice — elle vient en pratiquant, pas en lisant."
    },
    {
      nom: "Les bases comportementales du sommeil (TCC de l'insomnie)",
      quand: "Endormissement difficile, réveils nocturnes, lit devenu « lieu de bataille ».",
      etapes: [
        "Lever à HEURE FIXE tous les jours, week-end compris — c'est le levier n°1, avant l'heure du coucher.",
        "Le lit ne sert qu'à dormir (et à l'intimité) : pas d'écrans, pas de travail, pas de ruminations organisées au lit.",
        "Si vous ne dormez pas au bout de ~20 minutes : levez-vous, activité calme en lumière faible, retour au lit quand le sommeil revient. Rester à « essayer de dormir » entraîne le cerveau à associer lit et éveil.",
        "Pas de sieste après 15 h, pas d'alcool comme somnifère (il fragmente le sommeil), écrans en baisse la dernière heure.",
        "Tenez un agenda du sommeil une semaine avant de juger : on dort souvent plus qu'on ne le croit, et l'anxiété de performance (« il FAUT que je dorme ») est elle-même un insomniant."
      ],
      astuce: "La TCC de l'insomnie fait mieux que les somnifères à moyen terme dans les essais — c'est le traitement de référence recommandé en première intention. Le test « Qualité du sommeil (ISI) » de l'app permet de suivre l'effet."
    }
  ],
  sources: [
    "Beck, J. S. « Cognitive Behavior Therapy: Basics and Beyond » (Guilford Press) — le manuel de référence des techniques ci-dessus.",
    "Cuijpers, P., et al. (2016). How effective are cognitive behavior therapies for major depression and anxiety disorders? A meta-analytic update of the evidence. World Psychiatry, 15(3), 245-258.",
    "Trauer, J. M., et al. (2015). Cognitive behavioral therapy for chronic insomnia: A systematic review and meta-analysis. Annals of Internal Medicine, 163(3), 191-204.",
    "Burns, D. « Être bien dans sa peau » — auto-aide TCC dont l'efficacité a été testée en essais cliniques.",
    "Fanget, F. « Affirmez-vous ! » (Odile Jacob) — référence francophone de l'affirmation de soi.",
    "Annuaire des thérapeutes TCC : aftcc.org · « Mon soutien psy » : monsoutienpsy.ameli.fr (accès direct, sans ordonnance)."
  ]
};

var TESTS = TESTS_1.concat(TESTS_2).concat(TESTS_3);
