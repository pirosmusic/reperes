/* ============================================================
   DONNÉES — PARTIE 9 : rubrique « À deux » (suite)
   Quiz maison créés pour cette application, à faire EN COUPLE
   (chacun son tour sur le même téléphone, ou chacun sur son
   appareil, puis on compare). NON validés scientifiquement —
   et c'est assumé (avertissement sur chaque quiz, comme le test
   « amour »). Les concepts sous-jacents, eux, viennent de la
   recherche citée dans source.refs.
   ============================================================ */

var TESTS_9 = [

/* ---------------- CURIOSITÉ — toujours curieux l'un de l'autre ? ---------------- */
{
  id: "curiosite2",
  nom: "Toujours curieux l'un de l'autre ?",
  sigle: "Quiz duo · 11 items",
  cat: "À deux",
  duree: "2-3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un jeu à deux, pas comme une note de couple. Les concepts sous-jacents, eux, viennent de la recherche : les questions qui créent de la proximité (les fameuses « 36 questions » d'Aron et al., 1997) et l'écoute réactive — se sentir vraiment écouté et compris (Reis et al.).",
  intro: "Au début, on se posait mille questions. Et maintenant ? Un couple qui dure n'est pas un couple qui sait tout de l'autre — c'est un couple qui continue de demander. La recherche a même montré qu'on peut créer de la proximité entre deux inconnus en 45 minutes de vraies questions (Aron et al., 1997) ; imaginez ce que ça donne entre deux personnes qui s'aiment déjà. Ce quiz fait l'inventaire de votre curiosité l'un pour l'autre : posez-vous encore de vraies questions, écoutez-vous les réponses jusqu'au bout, vous laissez-vous encore surprendre ?",
  consigne: "Pour chaque situation, indiquez sa fréquence réelle dans votre couple aujourd'hui — pas celle du début, pas celle qu'on aimerait. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, puis comparez. Et pour finir en beauté, le jeu : chacun pose à l'autre UNE question qu'il ne lui a JAMAIS posée. Oui, il en reste — c'est promis.",
  echelle: { labels: ["Jamais ou presque", "Rarement", "De temps en temps", "Souvent", "Très souvent"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Je pose à mon/ma partenaire une vraie question sur ce qu'il/elle pense ou ressent (pas « t'as pris le pain ? »)", d: "CURIO" },
    { t: "Quand il/elle me répond, j'écoute jusqu'au bout avant de parler de moi", d: "CURIO" },
    { t: "Je lui demande son avis avant de prendre une décision qui nous concerne", d: "CURIO" },
    { t: "J'apprends encore des choses sur lui/elle que je ne savais pas", d: "CURIO" },
    { t: "Je lui demande des nouvelles de ce qui compte pour lui/elle (son projet, sa famille, son tracas du moment)", d: "CURIO" },
    { t: "Quand il/elle raconte quelque chose, je pose une question de plus au lieu de passer à autre chose", d: "CURIO" },
    { t: "Je m'intéresse sincèrement à une de ses passions, même quand ce n'est pas la mienne", d: "CURIO" },
    { t: "Il m'arrive de lui demander « et toi, tu en penses quoi, au fond ? » sur un sujet sérieux", d: "CURIO" },
    { t: "Je remarque quand quelque chose a changé chez lui/elle (humeur, envie, opinion) et je lui en parle", d: "CURIO" },
    { t: "Nos conversations partent parfois dans des sujets inattendus, juste pour le plaisir", d: "CURIO" },
    { t: "Il/elle me surprend encore — et ça me plaît", d: "CURIO" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 11 situations. Aucune norme n'existe (quiz maison) : le score compte moins que la comparaison de vos deux résultats — et que la question inédite que vous allez vous poser juste après. C'est elle, le vrai résultat du quiz.",
  dims: {
    CURIO: {
      nom: "Curiosité l'un pour l'autre", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "La curiosité qui reste vivante : poser de vraies questions, écouter les réponses jusqu'au bout, demander l'avis de l'autre, se laisser surprendre. L'autre change tout le temps — la curiosité, c'est refuser de le/la ranger dans un dossier « déjà lu ».",
      bandes: [
        { max: 2.5, label: "Curiosité en veilleuse", niveau: "attention", texte: "Belle marge de progression : la curiosité s'est mise en veilleuse — ce qui arrive à tous les couples dont le quotidien tourne à plein régime, et qui se rallume étonnamment vite. La bonne nouvelle : votre partenaire est plein(e) de choses que vous ne savez pas encore, et la recherche montre que quelques vraies questions suffisent à raviver la proximité. Commencez ce soir : une question jamais posée, une vraie écoute. Une seule." },
        { max: 3.8, label: "Curiosité vivante", niveau: "neutre", texte: "Vous vous posez encore de vraies questions, avec des moments plus mécaniques — c'est le profil le plus courant. Comparez vos réponses : là où vous ne cochez pas pareil, l'un de vous a peut-être soif de plus de questions que l'autre ne le croit. Et jouez le jeu de la question inédite : c'est souvent là que la conversation décolle." },
        { max: 5, label: "Explorateurs l'un de l'autre", niveau: "ok", texte: "Vous continuez de vous explorer — questions, écoute, surprises : exactement ce que la recherche associe à la proximité qui dure. Célébrez-le, puis relevez le défi quand même : la question jamais posée. Si vous n'en trouvez pas, demandez « quelle question aimerais-tu que je te pose plus souvent ? » — celle-là marche à tous les coups." }
      ],
      amelioration: {
        intro: "La curiosité est un muscle, pas un trait : elle revient dès qu'on la sollicite. Trois jeux à essayer à deux cette semaine.",
        axes: [
          { titre: "La question jamais posée", texte: "Défi du soir : chacun pose à l'autre une question qu'il ne lui a jamais posée. Besoin d'inspiration ? Piochez dans l'esprit des « 36 questions » d'Aron : « pour quoi aimerais-tu être connu(e) ? », « c'est quoi, ton souvenir le plus précieux ? », « qu'est-ce que tu n'as jamais osé essayer ? ». À rejouer chaque semaine : le stock est inépuisable." },
          { titre: "L'écoute qui va au bout", texte: "Une semaine, une règle : quand l'autre raconte quelque chose, poser UNE question de plus avant de parler de soi ou de passer à autre chose. « Et ça t'a fait quoi ? » suffit. C'est le cœur de l'écoute réactive : ce qui crée la proximité, ce n'est pas de tout savoir, c'est que l'autre se sente vraiment écouté." },
          { titre: "L'interview croisée", texte: "Un soir, jouez au journaliste : dix minutes chacun pour interviewer l'autre sur UN sujet (son enfance, son travail rêvé, son année idéale) — l'interviewé a le droit de passer, l'intervieweur n'a pas le droit de parler de lui. Puis on échange les rôles. Fous rires et découvertes garantis." }
        ],
        objectif: "Défi de couple : une question inédite par semaine pendant un mois, chacun son tour. Puis refaites le quiz chacun de votre côté et comparez avec aujourd'hui — le but n'est pas le score, c'est de ne plus jamais se croire « déjà lu » l'un l'autre.",
        ressources: [
          "Aron, A., Melinat, E., Aron, E. N., Vallone, R. D., & Bator, R. J. (1997). The experimental generation of interpersonal closeness: A procedure and some preliminary findings. Personality and Social Psychology Bulletin, 23(4), 363-377.",
          "Reis, H. T., Clark, M. S., & Holmes, J. G. (2004). Perceived partner responsiveness as an organizing construct in the study of intimacy and closeness. In D. Mashek & A. Aron (Eds.), Handbook of Closeness and Intimacy (pp. 201-225). Lawrence Erlbaum.",
          "Les « 36 questions » originales sont en libre accès dans l'annexe de l'article d'Aron et al. (1997) — et largement reprises en français en ligne."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Toujours curieux l'un de l'autre ?",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure. Les concepts sous-jacents (le questionnement mutuel progressif comme générateur de proximité ; l'écoute réactive — se sentir écouté, compris et valorisé — comme organisateur de l'intimité) viennent de la recherche citée.",
    refs: [
      "Aron, A., Melinat, E., Aron, E. N., Vallone, R. D., & Bator, R. J. (1997). The experimental generation of interpersonal closeness: A procedure and some preliminary findings. Personality and Social Psychology Bulletin, 23(4), 363-377.",
      "Reis, H. T., Clark, M. S., & Holmes, J. G. (2004). Perceived partner responsiveness as an organizing construct in the study of intimacy and closeness. In D. Mashek & A. Aron (Eds.), Handbook of Closeness and Intimacy (pp. 201-225). Lawrence Erlbaum."
    ]
  }
},

/* ---------------- ESPRIT D'ÉQUIPE ---------------- */
{
  id: "equipe2",
  nom: "Votre esprit d'équipe",
  sigle: "Quiz duo · 11 items",
  cat: "À deux",
  duree: "2-3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Utilisez-le comme un support de dialogue à deux, pas comme un audit de votre couple. Les concepts sous-jacents, eux, viennent de la recherche : la charge mentale et l'équité perçue dans le couple (Haicault, 1984) et le « nous » dans la façon de parler, associé au bon fonctionnement des couples (Karan et al., 2019).",
  intro: "Un couple, c'est aussi une équipe : deux personnes qui gèrent ensemble une maison, des décisions, des imprévus, parfois des enfants — et qui se couvrent mutuellement quand l'un flanche. La recherche montre d'ailleurs que les couples qui disent « nous » plus souvent que « je » vont mieux, et que ce qui compte n'est pas un partage à 50/50 exact, mais le sentiment que c'est JUSTE. Ce quiz fait le tour de votre esprit d'équipe : répartition, décisions, débriefs, solidarité dans la tempête. Répondez chacun, comparez — les écarts de perception sont souvent la découverte la plus utile.",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation, en pensant à votre couple tel qu'il fonctionne aujourd'hui. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, sans vous concerter — c'est justement la comparaison de vos deux visions de l'équipe qui fait tout l'intérêt du jeu.",
  echelle: { labels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Mitigé(e)", "Plutôt d'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "La répartition des tâches chez nous me semble juste — pas forcément 50/50, mais juste", d: "EQUIPE" },
    { t: "Penser à ce qu'il faut faire (rendez-vous, courses, papiers) ne repose pas toujours sur la même tête", d: "EQUIPE" },
    { t: "Les décisions qui nous concernent tous les deux, nous les prenons vraiment à deux", d: "EQUIPE" },
    { t: "Quand l'un de nous flanche (maladie, coup de mou, semaine noire), l'autre assure le relais sans faire payer l'addition", d: "EQUIPE" },
    { t: "En racontant notre vie, je dis spontanément « nous » plutôt que « moi de mon côté »", d: "EQUIPE" },
    { t: "Après une galère (imprévu, dispute logistique, week-end raté), nous débriefons pour faire mieux la prochaine fois", d: "EQUIPE" },
    { t: "Chacun de nous peut dire « je suis débordé(e), aide-moi » sans que ce soit un aveu de faiblesse", d: "EQUIPE" },
    { t: "Devant les autres (famille, amis, enfants), nous faisons front commun", d: "EQUIPE" },
    { t: "Ce que fait l'autre pour l'équipe est vu et remercié — pas considéré comme un dû invisible", d: "EQUIPE" },
    { t: "Quand un problème surgit, notre réflexe est « comment ON règle ça » plutôt que « à qui la faute »", d: "EQUIPE" },
    { t: "Nous célébrons nos victoires d'équipe, même petites (déménagement survécu, mois compliqué bouclé)", d: "EQUIPE" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 11 affirmations. Aucune norme n'existe (quiz maison) : la valeur du résultat est dans la comparaison de vos deux scores — et surtout, item par item, dans les endroits où l'un coche « tout à fait d'accord » et l'autre « mitigé(e) ». Chacun de ces écarts est une réunion d'équipe toute trouvée.",
  dims: {
    EQUIPE: {
      nom: "Esprit d'équipe", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Le couple comme équipe : une répartition ressentie comme juste, des décisions prises à deux, un relais quand l'un flanche, un « nous » qui vient naturellement, des débriefs après les galères. Ce n'est pas la comptabilité qui compte — c'est le sentiment d'être deux sur le même bateau.",
      bandes: [
        { max: 2.5, label: "Équipe à souder", niveau: "attention", texte: "Belle marge de progression : l'équipe joue parfois en solo — ce qui arrive très naturellement quand chacun pare au plus pressé, et qui se rééquilibre dès qu'on en parle. Le fait de faire ce quiz à deux est déjà un acte d'équipe. Commencez petit : choisissez ensemble UN item où vos réponses divergent le plus et demandez-vous « qu'est-ce qui ferait monter ça d'un cran ? ». Pas tout réorganiser — un cran." },
        { max: 3.8, label: "Équipe qui tourne", niveau: "neutre", texte: "L'équipe fonctionne sur l'essentiel, avec des postes moins bien couverts — profil très courant. Comparez vos réponses item par item : la charge invisible (penser aux choses, pas seulement les faire) est souvent l'endroit où les perceptions divergent le plus, et c'est une conversation qui vaut de l'or quand on la prend comme un réglage d'équipe, pas comme un procès. Quel est votre prochain petit réglage ?" },
        { max: 5, label: "Équipe soudée", niveau: "ok", texte: "Vous décrivez une vraie équipe : répartition ressentie comme juste, décisions à deux, relais quand ça tangue — et un « nous » qui vient tout seul, ce que la recherche associe aux couples qui fonctionnent bien. Célébrez-le comme une victoire d'équipe, justement. Puis posez-vous la question des champions : quel est le poste où l'on pourrait encore mieux se couvrir l'un l'autre ?" }
      ],
      amelioration: {
        intro: "Une équipe ne se décrète pas : elle se règle par petites réunions et petits gestes. Trois défis à tenter ensemble cette semaine — dans la bonne humeur, c'est la règle.",
        axes: [
          { titre: "La réunion d'équipe de 15 minutes", texte: "Défi de la semaine : un rendez-vous de 15 minutes, boisson chaude obligatoire, pour passer en revue la semaine qui vient — qui fait quoi, qui pense à quoi, qui risque d'être débordé quand. Le critère de réussite n'est pas un tableau Excel : c'est que chacun reparte en se sentant moins seul avec sa liste." },
          { titre: "Rendre visible l'invisible", texte: "Un soir, chacun liste tout ce qu'il « gère de tête » pour le foyer (penser aux cadeaux, surveiller le frigo, anticiper les rendez-vous…). Puis on compare les listes. L'objectif n'est pas de compter les points : c'est que la charge invisible devienne visible — c'est exactement ça, la charge mentale, et on ne peut rééquilibrer que ce qu'on voit." },
          { titre: "Le débrief d'après-galère", texte: "Après la prochaine galère, offrez-vous un débrief de 5 minutes, comme une équipe sportive : qu'est-ce qui a bien marché ? Qu'est-ce qu'on fait autrement la prochaine fois ? Interdiction de chercher un coupable — on cherche un réglage. Et on termine par ce qui a bien marché, toujours." }
        ],
        objectif: "Défi de couple : un mois de réunions d'équipe hebdomadaires de 15 minutes. Puis refaites le quiz chacun de votre côté et comparez avec aujourd'hui — si vos deux visions de l'équipe se sont rapprochées, c'est gagné, quel que soit le score.",
        ressources: [
          "Haicault, M. (1984). La gestion ordinaire de la vie en deux. Sociologie du travail, 26(3), 268-277 — l'article fondateur de la notion de charge mentale, en libre accès sur Persée.",
          "Karan, A., Rosenthal, R., & Robbins, M. L. (2019). Meta-analytic evidence that we-talk predicts relationship and personal functioning in romantic couples. Journal of Social and Personal Relationships, 36(9), 2624-2651.",
          "La BD « Fallait demander » d'Emma (2017) — la vulgarisation de la charge mentale la plus efficace pour lancer la conversation, en libre accès en ligne."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Votre esprit d'équipe",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure. Les concepts sous-jacents (la charge mentale — penser aux tâches, pas seulement les faire — et l'équité perçue plutôt que l'égalité comptable ; le « nous » dans le langage comme marqueur d'interdépendance associé au bon fonctionnement du couple) viennent de la recherche citée.",
    refs: [
      "Haicault, M. (1984). La gestion ordinaire de la vie en deux. Sociologie du travail, 26(3), 268-277.",
      "Karan, A., Rosenthal, R., & Robbins, M. L. (2019). Meta-analytic evidence that we-talk predicts relationship and personal functioning in romantic couples. Journal of Social and Personal Relationships, 36(9), 2624-2651."
    ]
  }
},

/* ---------------- TENDRESSE AU QUOTIDIEN ---------------- */
{
  id: "tendresse2",
  nom: "Tendresse au quotidien",
  sigle: "Quiz duo · 10 items",
  cat: "À deux",
  duree: "2-3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un inventaire tendre à faire à deux, pas comme une norme à atteindre : le besoin de contact varie légitimement d'une personne à l'autre, et aucun niveau n'est « le bon ». Le concept sous-jacent, lui, est solidement documenté : le toucher affectif et ses bénéfices relationnels et physiologiques (Jakubiak & Feeney, 2017).",
  intro: "Une main prise dans la rue, un vrai câlin en rentrant, une épaule frôlée en passant dans la cuisine : le toucher affectif est un langage à part entière — et la recherche montre qu'il apaise le stress, renforce le sentiment de sécurité et nourrit le lien, indépendamment de la sexualité. Ce quiz fait l'inventaire de la tendresse physique dans votre quotidien. Important : il n'y a pas de « bonne dose » universelle — certains sont très tactiles, d'autres moins, et les deux vont très bien. Ce qui compte, c'est de trouver VOTRE accordage à deux.",
  consigne: "Pour chaque geste, indiquez sa fréquence réelle dans votre couple aujourd'hui, sans tricher ni dans un sens ni dans l'autre. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, puis comparez — l'écart entre vos deux perceptions, et entre vos deux envies, est le vrai sujet de conversation.",
  echelle: { labels: ["Jamais ou presque", "Rarement", "De temps en temps", "Souvent", "Tous les jours ou presque"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Nous nous prenons la main (dans la rue, sur le canapé, en voiture)", d: "TENDRE" },
    { t: "Nous nous faisons un vrai câlin — celui où on prend le temps, pas l'accolade express", d: "TENDRE" },
    { t: "En passant l'un près de l'autre à la maison, il y a un geste — une main sur l'épaule, une caresse au passage", d: "TENDRE" },
    { t: "Nous nous embrassons pour de vrai, pas seulement par réflexe de départ ou d'arrivée", d: "TENDRE" },
    { t: "Nous nous endormons ou traînons au lit proches l'un de l'autre (blottis, jambes mêlées, main posée)", d: "TENDRE" },
    { t: "L'un de nous masse ou caresse l'autre (épaules, tête, dos) sans qu'on ait eu besoin de le demander", d: "TENDRE" },
    { t: "Devant un film ou dans le canapé, nous sommes en contact (tête sur l'épaule, pieds sur les genoux…)", d: "TENDRE" },
    { t: "Quand l'un de nous est stressé ou triste, l'autre le prend dans ses bras", d: "TENDRE" },
    { t: "Il nous arrive des gestes tendres en public (main dans le dos, baiser volé) — à notre façon et dans notre style", d: "TENDRE" },
    { t: "Après une tension, un geste physique nous aide à nous retrouver (une main tendue, un câlin de réconciliation)", d: "TENDRE" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 10 gestes. Aucune norme n'existe (quiz maison) — et pour ce sujet-là, encore moins qu'ailleurs : le bon niveau de tendresse physique est celui qui convient à VOUS DEUX. Comparez vos scores et, surtout, demandez-vous chacun : est-ce que ce niveau me va ? C'est la seule question qui compte.",
  dims: {
    TENDRE: {
      nom: "Tendresse physique", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Le toucher affectif hors sexualité : mains prises, câlins, gestes au passage, proximité du soir. Un langage du lien à part entière — dont la « bonne dose » n'existe pas dans l'absolu : elle se règle à deux, entre vos deux besoins, qui peuvent légitimement différer.",
      bandes: [
        { max: 2.5, label: "Tendresse discrète", niveau: "attention", texte: "Belle marge de progression — si et seulement si l'un de vous en a envie : certains couples sont peu tactiles et parfaitement heureux ainsi, et ce quiz n'est pas là pour vous normer. La vraie question à vous poser chacun : « est-ce que ce niveau me convient, à moi ? ». Si l'un de vous répond non, la bonne nouvelle est que la tendresse revient par gestes minuscules — un seul geste de plus par jour, celui qui vous tente le plus dans la liste, et on voit ce que ça fait." },
        { max: 3.8, label: "Tendresse présente", niveau: "neutre", texte: "La tendresse est là, plus dense à certains endroits qu'à d'autres — profil très courant. Comparez vos réponses : les écarts de perception (« mais si, je te touche tout le temps ! » — « ah bon ? ») sont fréquents et instructifs, car un geste donné n'est pas toujours un geste reçu. Demandez-vous chacun quel geste de la liste vous ferait le plus plaisir en plus — les réponses ne coïncident pas toujours, et c'est exactement ça, l'accordage." },
        { max: 5, label: "Couple tactile", niveau: "ok", texte: "Le toucher fait pleinement partie de votre langage — et la recherche associe ce contact affectif régulier à moins de stress et plus de sécurité ressentie. Si ce niveau convient à vos deux tempéraments, célébrez-le : dites-vous mutuellement le geste qui vous fait le plus de bien (les réponses surprennent parfois). Et vérifiez à l'occasion que chacun y trouve son compte — l'accordage n'est jamais acquis une fois pour toutes." }
      ],
      amelioration: {
        intro: "La tendresse ne s'impose pas, elle s'invite — et chacun a le droit d'en vouloir plus, ou moins, ou autrement. Trois expériences douces à tenter à deux, sans obligation de résultat.",
        axes: [
          { titre: "Le câlin de six secondes", texte: "Défi de la semaine : un vrai câlin par jour, d'au moins six secondes — assez long pour qu'on arrête de penser à la suite de la journée. Au moment des retrouvailles du soir, c'est le plus facile à installer. Bilan à sept jours : on garde, on adapte, ou on invente autre chose ?" },
          { titre: "La carte des gestes", texte: "Un soir, chacun dit à l'autre : le geste que j'adore, le geste qui me laisse indifférent(e), le geste que j'aimerais recevoir plus souvent. Sans jugement et sans obligation — connaître la carte de l'autre évite de donner avec amour un geste qui ne lui fait rien, et révèle parfois des trésors simples." },
          { titre: "Le geste au passage", texte: "Une semaine : chaque fois que vous croisez l'autre à la maison, un micro-geste — main sur l'épaule, caresse dans le dos, rien de plus. Trois secondes, zéro organisation. Ces micro-contacts sont exactement ce que la recherche décrit : de petits signaux répétés qui disent « je te vois, on est ensemble »." }
        ],
        objectif: "Défi de couple : deux semaines de câlin quotidien de six secondes et de gestes au passage — puis un mini-bilan à deux : qu'est-ce que ça a changé, qu'est-ce qu'on garde ? Refaites ensuite le quiz chacun de votre côté : ce sont vos deux ressentis qui diront si l'accordage est le bon, pas le score.",
        ressources: [
          "Jakubiak, B. K., & Feeney, B. C. (2017). Affectionate touch to promote relational, psychological, and physical well-being in adulthood: A theoretical model and review of the research. Personality and Social Psychology Review, 21(3), 228-252.",
          "Jakubiak, B. K., & Feeney, B. C. (2019). Hand-in-hand combat: Affectionate touch promotes relational well-being and buffers stress during conflict. Personality and Social Psychology Bulletin, 45(3), 431-446.",
          "Le quiz « Langages de l'amour » de cette app (rubrique Couple) — pour situer le toucher parmi vos autres façons de donner et recevoir de l'affection."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Tendresse au quotidien",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure, et surtout pas comme une norme : le besoin de toucher varie légitimement d'une personne et d'un couple à l'autre. Le concept sous-jacent (le toucher affectif comme promoteur de bien-être relationnel, psychologique et physique, et comme tampon du stress) vient de la recherche citée.",
    refs: [
      "Jakubiak, B. K., & Feeney, B. C. (2017). Affectionate touch to promote relational, psychological, and physical well-being in adulthood: A theoretical model and review of the research. Personality and Social Psychology Review, 21(3), 228-252.",
      "Jakubiak, B. K., & Feeney, B. C. (2019). Hand-in-hand combat: Affectionate touch promotes relational well-being and buffers stress during conflict. Personality and Social Psychology Bulletin, 45(3), 431-446."
    ]
  }
},

/* ---------------- NOUVEAUTÉ & AVENTURE ---------------- */
{
  id: "aventure2",
  nom: "Nouveauté & aventure",
  sigle: "Quiz duo · 11 items",
  cat: "À deux",
  duree: "2-3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un jeu à deux, pas comme un verdict sur votre couple — aimer ses habitudes n'est pas un défaut. Le concept sous-jacent, lui, vient de la recherche : les activités nouvelles et stimulantes partagées améliorent la qualité ressentie de la relation, notamment en faisant reculer l'ennui (Aron et al., 2000 — la théorie de l'auto-expansion).",
  intro: "Le samedi soir se ressemble ? C'est normal : les couples fabriquent des routines parce qu'elles sont confortables — et elles le sont. Mais la recherche a montré quelque chose de réjouissant : quand un couple fait ensemble des choses nouvelles et un peu stimulantes, même sept minutes d'activité inhabituelle en laboratoire, la qualité ressentie de la relation remonte — l'effet passe par le recul de l'ennui. Autrement dit : pas besoin de sauter en parachute, il suffit de sortir des rails de temps en temps, à deux. Ce quiz mesure votre dose actuelle de nouveauté partagée — et prépare le terrain pour la prochaine micro-aventure.",
  consigne: "Pour chaque situation, indiquez sa fréquence réelle dans votre couple ces derniers mois. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, puis comparez — et terminez par le jeu : choisissez ensemble, séance tenante, votre prochaine micro-aventure (une vraie, avec une date).",
  echelle: { labels: ["Jamais ou presque", "Rarement", "De temps en temps", "Souvent", "Très souvent"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Nous essayons ensemble une activité que nous n'avons jamais faite", d: "AVENT" },
    { t: "Nous testons un restaurant, un plat ou une cuisine inconnus au lieu de nos valeurs sûres", d: "AVENT" },
    { t: "Nos week-ends sortent du scénario habituel", d: "AVENT" },
    { t: "L'un de nous surprend l'autre (sortie improvisée, plan inattendu, cadeau sans occasion)", d: "AVENT" },
    { t: "Nous explorons un endroit où nous n'étions jamais allés — même à vingt minutes de chez nous", d: "AVENT" },
    { t: "Nous apprenons quelque chose ensemble (jeu, danse, langue, recette au-dessus de notre niveau)", d: "AVENT" },
    { t: "Nous dormons ailleurs que chez nous, juste pour changer d'air", d: "AVENT" },
    { t: "Quand une occasion inattendue se présente, nous disons « allez, on y va » plutôt que « une autre fois »", d: "AVENT" },
    { t: "Nous faisons des projets qui nous font un peu peur — du genre excitant", d: "AVENT" },
    { t: "Nous cassons volontairement une petite routine (autre itinéraire, autre café, dîner par terre au salon)", d: "AVENT" },
    { t: "Nous nous racontons « tu te souviens quand on a osé… » — et l'envie de recommencer nous prend", d: "AVENT" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 11 situations. Aucune norme n'existe (quiz maison) : un couple casanier et heureux n'a rien à prouver. Le score sert surtout de point de départ à la vraie question : est-ce qu'on se manque un peu d'aventure — et laquelle on se programme, là, maintenant ?",
  dims: {
    AVENT: {
      nom: "Nouveauté partagée", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "La dose de nouveauté que vous vivez à deux : activités jamais testées, lieux inconnus, surprises, routines volontairement bousculées. Selon la théorie de l'auto-expansion, ces expériences partagées élargissent chacun des deux — et le couple avec.",
      bandes: [
        { max: 2.5, label: "Confort bien installé", niveau: "attention", texte: "Belle marge de progression : la routine a pris ses aises — ce qu'elle fait chez tous les couples, parce qu'elle est confortable et efficace, et ce n'est pas une faute. La très bonne nouvelle : c'est le levier le plus facile et le plus amusant à actionner de toute cette app. La recherche montre qu'une seule activité nouvelle partagée fait déjà bouger le ressenti. Choisissez ensemble UNE micro-aventure (petite, ridicule, peu importe) et mettez une date dessus avant de fermer ce quiz." },
        { max: 3.8, label: "Aventuriers du dimanche", niveau: "neutre", texte: "De la nouveauté de temps en temps, du confort le reste du temps — c'est le profil le plus courant, et un bon équilibre pour beaucoup de couples. Comparez vos réponses : l'un de vous a peut-être plus faim d'inédit que l'autre ne le pense. Repérez ensemble l'item le plus bas qui vous tente le plus tous les deux : c'est votre prochaine sortie de route — programmez-la avant que la semaine ne la mange." },
        { max: 5, label: "Duo d'explorateurs", niveau: "ok", texte: "Vous cultivez la nouveauté à deux — exactement ce que la recherche associe à un couple qui continue de grandir et s'ennuie peu. Célébrez-le : racontez-vous votre meilleure aventure commune, celle que vous ressortez à chaque dîner. Puis visez un cran au-dessus, pour le sport : la chose que vous n'avez encore jamais osée ensemble — c'est quoi, et on la tente quand ?" }
      ],
      amelioration: {
        intro: "La nouveauté à deux n'exige ni budget ni billet d'avion : elle exige juste de sortir des rails, un peu, ensemble. Trois défis joyeux pour la semaine — le ridicule est non seulement autorisé, il est recommandé.",
        axes: [
          { titre: "Le resto (ou le plat) au hasard", texte: "Cette semaine : un dîner choisi par le hasard — un restaurant jamais testé tiré au sort, ou une recette d'un pays dont vous ne savez rien, cuisinée à deux. La règle d'or de l'auto-expansion : c'est l'inédit qui compte, pas la réussite. Si c'est raté, c'est une anecdote — et les anecdotes sont le trésor de guerre des couples." },
          { titre: "La micro-aventure à moins de 30 minutes", texte: "Ce week-end : un endroit où aucun de vous n'a jamais mis les pieds, à moins de 30 minutes de chez vous — village, sentier, quartier, musée bizarre. Interdiction de dire « on verra ». L'exotisme commence beaucoup plus près qu'on ne croit, et l'effet « on a exploré ensemble » marche même en covoiturage du dimanche." },
          { titre: "La boîte à oser", texte: "Chacun écrit sur des papiers 3 choses jamais faites à deux qui le tentent (des minuscules et des folles). On plie, on mélange dans une boîte, et chaque mois on en tire une — qu'on fait vraiment. La boîte transforme « il faudrait qu'on… » en rendez-vous, et le tirage au sort évite de négocier pendant trois heures." }
        ],
        objectif: "Défi de couple : une nouveauté partagée par quinzaine pendant deux mois — de la taille que vous voulez, du moment qu'aucun de vous ne l'a jamais faite. Puis refaites le quiz et comparez avec aujourd'hui : le score aura peut-être bougé, mais surtout, vous aurez quatre nouvelles anecdotes à votre trésor de guerre.",
        ressources: [
          "Aron, A., Norman, C. C., Aron, E. N., McKenna, C., & Heyman, R. E. (2000). Couples' shared participation in novel and arousing activities and experienced relationship quality. Journal of Personality and Social Psychology, 78(2), 273-284.",
          "Harasymchuk, C., Cloutier, A., Peetz, J., & Lebreton, J. (2017). Spicing up the relationship? The effects of relational boredom on shared activities. Journal of Social and Personal Relationships, 34(6), 833-854.",
          "Greater Good in Action (Université de Berkeley) — fiche pratique « Exciting Activities for Couples », fondée sur les travaux d'Aron (ggia.berkeley.edu, en anglais)."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Nouveauté & aventure",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure. Le concept sous-jacent (l'auto-expansion : les activités nouvelles et stimulantes partagées améliorent la qualité ressentie de la relation, en partie en faisant reculer l'ennui relationnel) vient de la recherche citée.",
    refs: [
      "Aron, A., Norman, C. C., Aron, E. N., McKenna, C., & Heyman, R. E. (2000). Couples' shared participation in novel and arousing activities and experienced relationship quality. Journal of Personality and Social Psychology, 78(2), 273-284.",
      "Harasymchuk, C., Cloutier, A., Peetz, J., & Lebreton, J. (2017). Spicing up the relationship? The effects of relational boredom on shared activities. Journal of Social and Personal Relationships, 34(6), 833-854."
    ]
  }
}

];

TESTS = TESTS.concat(TESTS_9);
