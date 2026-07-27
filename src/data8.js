/* ============================================================
   DONNÉES — PARTIE 8 : rubrique « À deux » (suite)
   Quiz maison créés pour cette application, à faire EN COUPLE
   (chacun son tour sur le même téléphone, ou chacun sur son
   appareil, puis on compare). NON validés scientifiquement —
   et c'est assumé (avertissement sur chaque quiz, comme en
   data7). Les concepts sous-jacents, eux, viennent de la
   recherche citée dans source.refs.
   ============================================================ */

var TESTS_8 = [

/* ---------------- LE JEU DES SOUVENIRS ---------------- */
{
  id: "souvenirs2",
  nom: "Le jeu des souvenirs",
  sigle: "Quiz duo · 12 items",
  cat: "À deux",
  duree: "3-4 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un jeu de mémoire à deux, pas comme une note sur votre passé. Les concepts sous-jacents, eux, viennent de la recherche : la façon dont un couple raconte son histoire prédit sa trajectoire (Buehlman, Gottman & Katz, 1992), et la nostalgie partagée nourrit le lien (Evans et al., 2022).",
  intro: "Vous souvenez-vous du premier regard, de la première maladresse, du fou rire fondateur ? Les chercheurs qui ont écouté des couples raconter leur histoire ont découvert quelque chose d'étonnant : la FAÇON de raconter — avec tendresse, avec détails, avec fierté — en dit plus long sur l'avenir du couple que le contenu lui-même. Et la nostalgie à deux n'est pas un repli passéiste : c'est un carburant. Ce quiz est un jeu de mémoire heureuse : chaque question est une invitation à replonger — et la règle du jeu vous y oblige.",
  consigne: "Pour chaque phrase, demandez-vous : est-ce que ça nous ressemble ? Répondez chacun votre tour (même téléphone) ou chacun sur son appareil. RÈGLE DU JEU non négociable : à chaque question où vous comparez vos réponses, l'un des deux raconte UN souvenir précis qui va avec — pas un résumé, une vraie scène, avec les détails.",
  echelle: { labels: ["Pas du tout nous", "Pas vraiment nous", "Un peu nous", "Plutôt nous", "Complètement nous"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Nous pouvons raconter notre première rencontre dans le détail — le lieu, la lumière, qui a parlé en premier", d: "SOUV" },
    { t: "Nous avons des anecdotes qui nous font encore rire à la dixième redite", d: "SOUV" },
    { t: "Il nous arrive de nous dire « tu te souviens quand… ? » juste pour le plaisir", d: "SOUV" },
    { t: "Nous re-regardons parfois de vieilles photos ou vidéos de nous deux", d: "SOUV" },
    { t: "Nous avons des objets fétiches qui racontent notre histoire (billet, caillou, ticket de concert…)", d: "SOUV" },
    { t: "Quand nous racontons nos débuts à d'autres, on se coupe la parole pour ajouter des détails", d: "SOUV" },
    { t: "Nous nous rappelons nos galères passées comme des aventures plutôt que comme des mauvais moments", d: "SOUV" },
    { t: "Chacun de nous connaît le moment où l'autre s'est dit « c'est lui/c'est elle »", d: "SOUV" },
    { t: "Certains lieux sont « à nous » — y repasser nous fait toujours quelque chose", d: "SOUV" },
    { t: "Nous avons une chanson, un film ou un plat qui nous ramène instantanément à une époque de nous deux", d: "SOUV" },
    { t: "Nous continuons à fabriquer des souvenirs racontables (pas juste des semaines qui se ressemblent)", d: "SOUV" },
    { t: "Repenser à nos débuts nous donne plutôt envie de sourire que de soupirer", d: "SOUV" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 12 phrases. Aucune norme n'existe (quiz maison) : ce score dit seulement à quel point votre mémoire de couple est vivante et sollicitée. Comparez vos deux scores — et surtout, appliquez la règle du jeu : un souvenir raconté par question comparée.",
  dims: {
    SOUV: {
      nom: "Mémoire heureuse du couple", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "La vitalité de votre histoire commune : les anecdotes qu'on redit, les photos qu'on ressort, les lieux et objets qui racontent « nous ». Une mémoire qui se cultive — chaque redite la rend plus vivante.",
      bandes: [
        { max: 2.5, label: "Album à rouvrir", niveau: "attention", texte: "Belle marge de progression : votre mémoire de couple est en sommeil — ce qui arrive à tous les couples happés par le présent, et qui n'efface rien de ce que vous avez vécu. La bonne nouvelle : les souvenirs sont toujours là, il suffit de rouvrir l'album. Ce soir, une seule question : « c'est quoi ton tout premier souvenir de nous deux ? » — et laissez la conversation faire le reste." },
        { max: 3.8, label: "Album feuilleté", niveau: "neutre", texte: "Votre histoire est vivante par endroits, en jachère ailleurs — c'est le profil le plus courant. Comparez vos réponses : les items où vous divergez révèlent souvent que l'un garde des trésors que l'autre a oubliés. Échangez-les : un souvenir raconté par l'un réveille presque toujours un souvenir chez l'autre." },
        { max: 5, label: "Album vivant", niveau: "ok", texte: "Votre histoire est un feu qu'on entretient : anecdotes qui resservent, lieux fétiches, fous rires d'archive — exactement ce que les chercheurs entendent chez les couples qui durent. Célébrez-le : ce soir, chacun raconte à l'autre UN souvenir que vous n'avez jamais re-raconté. Et continuez d'en fabriquer : le plus beau chapitre est celui qu'on n'a pas encore vécu." }
      ],
      amelioration: {
        intro: "La mémoire de couple s'entretient comme un feu : par petites bûches régulières. Trois jeux à essayer cette semaine — le rire est non seulement autorisé, il est probable.",
        axes: [
          { titre: "La soirée archives", texte: "Défi de la semaine : une soirée (ou juste vingt minutes) à ressortir photos, vidéos ou messages de vos débuts. Règle du jeu : chacun choisit UNE image et raconte ce que l'autre ne sait pas — ce qu'il/elle pensait vraiment à ce moment-là. Les révélations tardives sont les meilleures." },
          { titre: "Le concours de la meilleure anecdote", texte: "Chacun raconte SA version d'un même souvenir (la rencontre, le pire voyage, la gaffe mémorable) — sans corriger l'autre pendant qu'il/elle parle. Les différences entre vos deux versions ne sont pas des erreurs : c'est là que se cache le meilleur du jeu." },
          { titre: "Fabriquer du racontable", texte: "Un souvenir, ça se prépare : planifiez dans la semaine UNE micro-aventure inédite — un lieu où vous n'êtes jamais allés, un plat jamais tenté, un chemin jamais pris. Le critère : que ce soit racontable dans un an. Les couples qui durent ne font pas que relire leur album, ils ajoutent des pages." }
        ],
        objectif: "Défi de couple : d'ici la fin du mois, une soirée archives, un concours d'anecdotes, et UNE page neuve ajoutée à l'album (photo à l'appui). Puis refaites le quiz dans trois mois : la mémoire, ça se muscle.",
        ressources: [
          "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès) — chapitre sur la tendresse et l'admiration, nourries par l'histoire partagée.",
          "Buehlman, K. T., Gottman, J. M., & Katz, L. F. (1992). How a couple views their past predicts their future: Predicting divorce from an oral history interview. Journal of Family Psychology, 5(3-4), 295-318.",
          "Evans, N. D., Juhl, J., Hepper, E. G., Wildschut, T., Sedikides, C., & Fetterman, A. K. (2022). Romantic nostalgia as a resource for healthy relationships. Journal of Social and Personal Relationships, 39(7), 2181-2206."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Le jeu des souvenirs",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un jeu de mémoire à deux et un support de dialogue, pas comme une mesure. Les concepts sous-jacents (la manière dont un couple raconte son passé comme prédicteur de sa trajectoire ; la nostalgie romantique comme ressource du lien) viennent de la recherche citée.",
    refs: [
      "Buehlman, K. T., Gottman, J. M., & Katz, L. F. (1992). How a couple views their past predicts their future: Predicting divorce from an oral history interview. Journal of Family Psychology, 5(3-4), 295-318.",
      "Evans, N. D., Juhl, J., Hepper, E. G., Wildschut, T., Sedikides, C., & Fetterman, A. K. (2022). Romantic nostalgia as a resource for healthy relationships. Journal of Social and Personal Relationships, 39(7), 2181-2206."
    ]
  }
},

/* ---------------- RÊVES & PROJETS À DEUX ---------------- */
{
  id: "projets2",
  nom: "Rêves & projets à deux",
  sigle: "Quiz duo · 11 items",
  cat: "À deux",
  duree: "3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Utilisez-le comme un support de dialogue à deux, pas comme un audit de votre couple. Les concepts sous-jacents, eux, viennent de la recherche : le « système de sens partagé » de Gottman & Silver, et l'auto-expansion — faire du neuf ensemble nourrit la relation (Aron et al., 2000).",
  intro: "Un couple, ce n'est pas seulement deux personnes qui s'aiment : c'est aussi une petite entreprise de rêves — un « nous » qui veut des choses que ni l'un ni l'autre ne voudrait seul. Du potager au tour du monde, de la tradition du réveillon au projet fou dont on ne parle qu'à voix basse : la recherche montre que les couples qui construisent un sens partagé — et qui font du NEUF ensemble — nourrissent leur lien bien plus qu'ils ne le croient. Ce quiz vous propose de faire le point sur votre atelier à rêves. Attention : il donne envie de faire des projets.",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation, en pensant à votre couple tel qu'il est aujourd'hui — pas tel qu'il était ni tel qu'il devrait être. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, sans vous concerter. Puis comparez : chaque écart est un projet de conversation — et peut-être un projet tout court.",
  echelle: { labels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Mitigé(e)", "Plutôt d'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Je sais ce dont mon/ma partenaire rêve pour dans cinq ans", d: "PROJ" },
    { t: "Nous avons au moins un projet rien qu'à nous en cours (du potager au tour du monde, la taille ne compte pas)", d: "PROJ" },
    { t: "Il nous arrive de rêver tout haut ensemble, même à des choses irréalistes", d: "PROJ" },
    { t: "Les grandes décisions (logement, travail, famille) se prennent vraiment à deux chez nous", d: "PROJ" },
    { t: "Nous avons des traditions à nous — ou nous sommes en train d'en inventer", d: "PROJ" },
    { t: "Nous essayons régulièrement des choses nouvelles ensemble (lieu, activité, cuisine…)", d: "PROJ" },
    { t: "Je connais le rêve que mon/ma partenaire n'a pas encore osé mettre en route", d: "PROJ" },
    { t: "Quand l'un de nous a une envie folle, l'autre commence par dire « raconte » plutôt que « ça coûte combien ? »", d: "PROJ" },
    { t: "Nous avons une idée de l'endroit (ou du genre de vie) où nous nous voyons plus tard", d: "PROJ" },
    { t: "Nos projets individuels ont leur place : chacun soutient les rêves de l'autre, même ceux qui ne le concernent pas", d: "PROJ" },
    { t: "Si on nous offrait un week-end surprise à organiser à deux, nous saurions tout de suite quoi en faire", d: "PROJ" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 11 affirmations. Aucune norme n'existe (quiz maison) : le score photographie l'état de votre atelier à rêves aujourd'hui. Le plus instructif est ailleurs : comparez vos réponses item par item — un écart d'au moins un point signale un rêve dont vous n'avez pas encore assez parlé.",
  dims: {
    PROJ: {
      nom: "Sens & projets partagés", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Votre capacité à rêver et construire à deux : connaître les rêves de l'autre, avoir des projets communs, décider ensemble, inventer vos traditions. Le « nous » comme aventure en cours, pas comme acquis.",
      bandes: [
        { max: 2.5, label: "Atelier à rouvrir", niveau: "attention", texte: "Belle marge de progression : les rêves à deux sont en veilleuse — ce qui arrive dès que le quotidien prend toute la place, et qui ne dit rien de votre attachement. La bonne nouvelle : rêver ne coûte rien et peut commencer ce soir. Une seule question pour rallumer l'atelier : « si on avait une année libre et sans contrainte, on en ferait quoi ? ». Interdiction de parler budget pendant dix minutes." },
        { max: 3.8, label: "Atelier ouvert", niveau: "neutre", texte: "Vous rêvez et construisez ensemble par endroits, avec des zones en friche — profil très répandu. Comparez vos réponses : là où vous divergez, l'un des deux porte peut-être un rêve en silence. Et choisissez ensemble l'item le plus bas qui vous tente le plus : c'est votre prochain chantier — le plus petit projet mis en route vaut mieux que le plus beau projet remis à plus tard." },
        { max: 5, label: "Atelier en pleine production", niveau: "ok", texte: "Vous êtes une vraie fabrique à projets : rêves connus, décisions à deux, traditions en cours d'invention — exactement ce que Gottman appelle un système de sens partagé. Célébrez-le en vous offrant un cran de plus : chacun révèle à l'autre UN rêve jamais dit à voix haute. Même les couples qui rêvent beaucoup gardent des tiroirs fermés — c'est le moment d'en ouvrir un." }
      ],
      amelioration: {
        intro: "Les rêves à deux ne demandent ni budget ni permission : ils demandent un moment protégé et deux imaginations. Trois défis joyeux pour la semaine.",
        axes: [
          { titre: "La soirée des cinq ans", texte: "Défi de la semaine : vingt minutes, deux feuilles, un minuteur. Chacun écrit sa vie rêvée dans cinq ans (lieu, rythme, projets — sans se censurer), puis on échange les feuilles. Règle d'or : on commence par ce qui se ressemble dans les deux copies, pas par ce qui coince. Les convergences d'abord, toujours." },
          { titre: "Le projet à 10 euros", texte: "Lancez cette semaine un micro-projet commun qui coûte moins de 10 euros et se termine en un mois : trois plants de tomates, apprendre une chanson à deux voix, un album photo du mois. L'effet « on a fait ça ensemble » ne dépend pas de la taille du projet — c'est la recherche sur l'auto-expansion qui le dit : c'est la nouveauté partagée qui nourrit, pas le budget." },
          { titre: "Inventer une tradition", texte: "Choisissez une date (même anodine : le premier dimanche du mois, le jour des crêpes) et décrétez-la vôtre, avec un rituel à vous. Une tradition ne se juge pas à sa solennité mais à sa fidélité — et les plus absurdes sont souvent celles qu'on défend le plus férocement dans dix ans." }
        ],
        objectif: "Défi de couple : d'ici un mois — une soirée des cinq ans, un projet à 10 euros lancé, une tradition décrétée. Puis refaites le quiz chacun de votre côté et comparez : ce sont vos DEUX courbes qui racontent où va le « nous ».",
        ressources: [
          "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès) — septième principe : créer un sens partagé.",
          "Aron, A., Norman, C. C., Aron, E. N., McKenna, C., & Heyman, R. E. (2000). Couples' shared participation in novel and arousing activities and experienced relationship quality. Journal of Personality and Social Psychology, 78(2), 273-284.",
          "Greater Good in Action (Berkeley) — fiche pratique « Exciting Activities for Couples » (ggia.berkeley.edu, en anglais)."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Rêves & projets à deux",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure. Les concepts sous-jacents (le « système de sens partagé » : rêves, rôles et rituels construits à deux ; l'auto-expansion : les activités nouvelles partagées comme nourriture du lien) viennent de la recherche citée.",
    refs: [
      "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès).",
      "Aron, A., Norman, C. C., Aron, E. N., McKenna, C., & Heyman, R. E. (2000). Couples' shared participation in novel and arousing activities and experienced relationship quality. Journal of Personality and Social Psychology, 78(2), 273-284."
    ]
  }
},

/* ---------------- RIRE & COMPLICITÉ ---------------- */
{
  id: "rires2",
  nom: "Rire & complicité",
  sigle: "Quiz duo · 11 items",
  cat: "À deux",
  duree: "2-3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un inventaire joyeux, pas comme un examen d'humour. Le concept sous-jacent, lui, est documenté : le rire PARTAGÉ (rire ensemble, en même temps) est un marqueur observable de la qualité du lien (Kurtz & Algoe, 2015).",
  intro: "Des chercheurs ont filmé des couples en train de raconter leur rencontre, puis ont chronométré quelque chose d'inattendu : le temps passé à rire EN MÊME TEMPS. Résultat : ce rire simultané — pas le rire poli, pas le rire de l'un pendant que l'autre soupire — va de pair avec des couples plus proches, plus satisfaits, plus soutenants. Private jokes, surnoms secrets, imitations interdites en public : votre patrimoine comique est un vrai capital de couple. Ce quiz vous propose d'en faire l'inventaire — essayez de le finir sans sourire, pour voir.",
  consigne: "Pour chaque situation, indiquez sa fréquence réelle dans votre couple — pas celle du couple idéal des publicités. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, puis comparez. Si un item vous fait rire tous les deux au moment d'y répondre, comptez-le d'office comme « Tout le temps ».",
  echelle: { labels: ["Presque jamais", "Rarement", "De temps en temps", "Souvent", "Tout le temps"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Nous avons des private jokes que personne d'autre ne peut comprendre", d: "RIRE" },
    { t: "Il nous arrive de rire ensemble jusqu'à en avoir mal aux joues", d: "RIRE" },
    { t: "Un seul mot ou un seul regard peut nous faire pouffer dans une situation sérieuse", d: "RIRE" },
    { t: "Nous avons des surnoms (avouables ou non) qui ne sortent jamais de la maison", d: "RIRE" },
    { t: "L'un de nous sait dérider l'autre un jour de grisaille", d: "RIRE" },
    { t: "Nous rions ENSEMBLE — pas l'un DE l'autre (la nuance fait toute la différence)", d: "RIRE" },
    { t: "Nous avons des imitations maison (l'autre, le voisin, le chat…) qui font mouche à tous les coups", d: "RIRE" },
    { t: "Une mésaventure (train raté, plat carbonisé) finit chez nous en fou rire plutôt qu'en procès", d: "RIRE" },
    { t: "Nous nous envoyons des bêtises juste pour faire rire l'autre à distance", d: "RIRE" },
    { t: "Même pendant une dispute, il arrive qu'une bêtise nous désarme tous les deux", d: "RIRE" },
    { t: "Nous avons des répliques cultes (de films, de proches, de nous-mêmes) qui resservent depuis des années", d: "RIRE" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 11 situations. Aucune norme n'existe (quiz maison) : certains couples très unis rient discrètement, d'autres en fanfare — c'est le PARTAGE du rire qui compte, pas son volume. Comparez vos deux scores et, surtout, vos réponses : un écart signale souvent un rire que l'un croit partagé et que l'autre subit poliment.",
  dims: {
    RIRE: {
      nom: "Rire partagé", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Votre patrimoine comique commun : private jokes, surnoms, imitations, fous rires — et la capacité à rire ensemble, y compris des jours où rien ne s'y prête. Un ciment discret mais mesurable du lien.",
      bandes: [
        { max: 2.5, label: "Rires en réserve", niveau: "attention", texte: "Belle marge de progression : le rire à deux s'est fait discret — ce qui arrive quand la charge mentale monte, et qui ne dit rien de votre humour ni de votre amour. La bonne nouvelle : le rire partagé revient vite dès qu'on lui rouvre la porte. Ce soir, mission simple : retrouver ensemble UNE private joke d'avant, ou en fabriquer une neuve. Une seule suffit pour relancer la machine." },
        { max: 3.8, label: "Rires au rendez-vous", niveau: "neutre", texte: "Vous riez ensemble, avec des hauts et des creux — profil très courant. Comparez vos réponses : les écarts sont souvent hilarants en eux-mêmes (« comment ça, tu n'aimes pas mon imitation ?! »). Repérez l'item le plus bas qui vous tente : c'est votre prochain terrain de jeu — et rappelez-vous la nuance qui compte : rire ENSEMBLE, jamais l'un de l'autre." },
        { max: 5, label: "Duo comique confirmé", niveau: "ok", texte: "Votre couple est une scène ouverte permanente : private jokes, répliques cultes, fous rires en pleine dispute — exactement le rire simultané que les chercheurs observent chez les couples les plus proches. Célébrez ce trésor : élisez ensemble votre private joke de l'année, et racontez-vous l'histoire de sa naissance. Puis demandez-vous : quelle sera la prochaine ?" }
      ],
      amelioration: {
        intro: "Le rire partagé ne se force pas, mais il se cultive : il suffit de multiplier les occasions et de les laisser prendre. Trois défis à tenter dans la semaine — échec autorisé, fou rire probable.",
        axes: [
          { titre: "Le musée des private jokes", texte: "Défi de la semaine : listez ensemble vos private jokes, surnoms et répliques cultes — par écrit, comme un vrai inventaire de musée. Deux effets garantis : vous allez rire en le faisant, et vous allez en redécouvrir que vous aviez oubliées. Bonus : chacun raconte l'origine de sa préférée." },
          { titre: "La minute de bêtise quotidienne", texte: "Une fois par jour, l'un des deux tente de faire rire l'autre — message absurde, imitation, grimace à contretemps. Pas besoin de réussir à tous les coups : c'est la tentative qui compte, et les fours mémorables deviennent eux-mêmes des private jokes. Le rire appelle le rire." },
          { titre: "Rire ensemble, jamais contre", texte: "Cette semaine, un micro-audit à deux : y a-t-il une taquinerie récurrente qui fait rire l'un et grincer l'autre ? Posez la question franchement — et si oui, remplacez-la par une cible extérieure au couple (le mode d'emploi du meuble suédois est une victime toute désignée). Le rire qui unit vise toujours vers le dehors, pas vers l'autre." }
        ],
        objectif: "Défi de couple : une semaine de minute de bêtise quotidienne + le musée des private jokes complété. Puis refaites le quiz chacun de votre côté dans un mois : si votre score n'a pas bougé mais que vous avez ri en le refaisant, c'est gagné quand même.",
        ressources: [
          "Kurtz, L. E., & Algoe, S. B. (2015). Putting laughter in context: Shared laughter as behavioral indicator of relationship well-being. Personal Relationships, 22(4), 573-590.",
          "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès) — sur l'humour comme outil d'apaisement dans le conflit."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Rire & complicité",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un inventaire joyeux à deux et un support de dialogue, pas comme une mesure. Le concept sous-jacent (le rire partagé — simultané — comme indicateur comportemental de la qualité de la relation) vient de la recherche citée.",
    refs: [
      "Kurtz, L. E., & Algoe, S. B. (2015). Putting laughter in context: Shared laughter as behavioral indicator of relationship well-being. Personal Relationships, 22(4), 573-590."
    ]
  }
},

/* ---------------- CE QUE J'ADMIRE CHEZ TOI ---------------- */
{
  id: "admiration2",
  nom: "Ce que j'admire chez toi",
  sigle: "Quiz duo · 11 items",
  cat: "À deux",
  duree: "3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un exercice de regard à deux, pas comme une note d'admiration. Les concepts sous-jacents, eux, viennent de la recherche : le système « tendresse et admiration » de Gottman, et la gratitude exprimée comme « piqûre de rappel » du lien (Algoe, Gable & Maisel, 2010).",
  intro: "Tomber amoureux, c'est facile : on ne voit que les qualités. Rester amoureux, c'est un sport : il faut continuer à VOIR ces qualités sous la pile de linge et les agacements du quotidien — et, surtout, le DIRE. La recherche est frappante là-dessus : la gratitude exprimée pour les petites choses agit comme une piqûre de rappel du lien, et l'admiration entretenue est l'un des meilleurs antidotes au mépris, le pire poison des couples selon Gottman. Ce quiz vous propose de mesurer votre regard positif — et il se termine par un gage. Un beau gage.",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation, en pensant aux dernières semaines. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, puis comparez. RÈGLE DU JEU non négociable : à la fin, chacun dit à l'autre, à voix haute et en le regardant, UNE chose qu'il/elle admire chez lui/elle. Pas « merci pour tout » — une vraie chose, précise.",
  echelle: { labels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Mitigé(e)", "Plutôt d'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Je peux citer, là, tout de suite, trois qualités de mon/ma partenaire qui m'épatent", d: "ADMI" },
    { t: "Je le/la complimente à voix haute — pas seulement dans ma tête", d: "ADMI" },
    { t: "Je remarque ses efforts invisibles (les trucs faits sans bruit que personne ne félicite jamais)", d: "ADMI" },
    { t: "En public, je parle de lui/d'elle avec fierté — jamais en le/la rabaissant « pour rire »", d: "ADMI" },
    { t: "Je lui dis merci pour des choses précises, pas juste un « merci » automatique", d: "ADMI" },
    { t: "Quand il/elle réussit quelque chose, je suis son premier supporter — avant même qu'il/elle y croie", d: "ADMI" },
    { t: "Je sais ce qui est difficile pour lui/elle dans son quotidien, et je le reconnais à voix haute", d: "ADMI" },
    { t: "Il m'arrive encore de le/la regarder faire quelque chose et de me dire « quand même, chapeau »", d: "ADMI" },
    { t: "Quand on me demande ce que je lui trouve, la réponse vient vite et longue", d: "ADMI" },
    { t: "Je remarque plus souvent ce qu'il/elle fait bien que ce qu'il/elle oublie", d: "ADMI" },
    { t: "Mon/ma partenaire pourrait citer le dernier compliment précis que je lui ai fait (parce qu'il est récent)", d: "ADMI" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 11 affirmations. Aucune norme n'existe (quiz maison) : le score reflète votre regard positif déclaré — la vraie mesure, c'est ce que l'autre en perçoit. D'où l'intérêt de comparer : si vous vous donnez 4,5 et que l'autre n'a rien remarqué, il y a un tuyau d'expression à déboucher quelque part.",
  dims: {
    ADMI: {
      nom: "Regard positif exprimé", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Votre capacité à voir les qualités et les efforts de l'autre — et surtout à le lui dire : compliments précis, mercis ciblés, fierté affichée. L'admiration qui reste dans la tête ne compte qu'à moitié.",
      bandes: [
        { max: 2.5, label: "Regard à raviver", niveau: "attention", texte: "Belle marge de progression : le regard positif s'est un peu voilé — ce qui arrive dans tous les couples où le quotidien use, et qui se ravive étonnamment vite. La recherche le montre : un seul merci précis par jour change déjà la météo d'une relation. Commencez ce soir par le gage du quiz : UNE chose que vous admirez, dite en face. Vous verrez sa tête — ça vaut le détour." },
        { max: 3.8, label: "Regard présent", niveau: "neutre", texte: "Vous voyez les qualités de l'autre et vous le dites — parfois. Le gisement inexploité est souvent là : l'admiration ressentie mais non dite. Comparez vos réponses : les écarts entre ce que l'un croit exprimer et ce que l'autre reçoit sont la partie la plus instructive du jeu. Et n'oubliez pas le gage final — c'est lui, le vrai quiz." },
        { max: 5, label: "Supporter officiel", niveau: "ok", texte: "Compliments précis, mercis ciblés, fierté publique : vous êtes le supporter officiel de votre partenaire — exactement ce que Gottman décrit comme l'antidote au mépris, et ce que la recherche sur la gratitude associe aux couples qui se renforcent jour après jour. Célébrez : faites le gage final en version longue — pas une chose admirée, mais trois. Et demandez à l'autre laquelle lui fait le plus d'effet : la réponse surprend souvent." }
      ],
      amelioration: {
        intro: "L'admiration est un muscle qui travaille en deux temps : voir, puis dire. Trois défis pour la semaine — le deuxième temps est le plus important, et le plus négligé.",
        axes: [
          { titre: "Le merci ciblé quotidien", texte: "Défi de la semaine : un merci PRÉCIS par jour — pas « merci pour tout » mais « merci d'avoir géré le rendez-vous du petit, je sais que tu détestes téléphoner ». C'est exactement le geste que la recherche d'Algoe et ses collègues associe à plus de connexion dès le lendemain. Sept jours, sept mercis, et observez ce que ça change — chez l'autre et chez vous." },
          { titre: "La chasse aux efforts invisibles", texte: "Pendant trois jours, jouez au détective : repérez tout ce que l'autre fait sans bruit et sans médaille (la lessive pliée, le plein d'essence, l'appel aux parents). Puis restituez votre butin à voix haute. Effet garanti : être VU dans ses efforts invisibles est l'un des plus beaux cadeaux du quotidien — et il est gratuit." },
          { titre: "Le compliment en public", texte: "Cette semaine, une fois, dites du bien de votre partenaire devant d'autres — en sa présence, sans ironie, sans « mais ». Un vrai : « c'est elle qui a eu l'idée », « il est incroyable pour ça ». Le compliment public compte double : il dit « je t'admire » ET « je veux que ça se sache »." }
        ],
        objectif: "Défi de couple : sept mercis ciblés, une chasse aux efforts invisibles restituée, un compliment public — en une semaine. Puis refaites le quiz chacun de votre côté dans un mois, et posez-vous LA question : l'autre a-t-il/elle senti la différence ? C'est sa réponse, votre vrai score.",
        ressources: [
          "Algoe, S. B., Gable, S. L., & Maisel, N. C. (2010). It's the little things: Everyday gratitude as a booster shot for romantic relationships. Personal Relationships, 17(2), 217-233.",
          "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès) — deuxième principe : cultiver la tendresse et l'admiration.",
          "Le test « Gratitude (GQ-6) » de la rubrique « Vie & sens » de cette app, pour explorer votre gratitude en général (celui-là est validé)."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Ce que j'admire chez toi",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un exercice de regard à deux et un support de dialogue, pas comme une mesure. Les concepts sous-jacents (le système « tendresse et admiration » comme antidote au mépris ; la gratitude exprimée pour les petites attentions comme renfort quotidien du lien) viennent de la recherche citée.",
    refs: [
      "Algoe, S. B., Gable, S. L., & Maisel, N. C. (2010). It's the little things: Everyday gratitude as a booster shot for romantic relationships. Personal Relationships, 17(2), 217-233.",
      "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès)."
    ]
  }
}

];

TESTS = TESTS.concat(TESTS_8);
