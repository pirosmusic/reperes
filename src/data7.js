/* ============================================================
   DONNÉES — PARTIE 7 : rubrique « À deux »
   Quiz maison créés pour cette application, à faire EN COUPLE
   (chacun son tour sur le même téléphone, ou chacun sur son
   appareil, puis on compare). NON validés scientifiquement —
   et c'est assumé (avertissement sur chaque quiz, comme le test
   « amour »). Les concepts sous-jacents, eux, viennent de la
   recherche citée dans source.refs.
   ============================================================ */

var TESTS_7 = [

/* ---------------- CARTES D'AMOUR — connaissez-vous votre partenaire ? ---------------- */
{
  id: "carte2",
  nom: "Connaissez-vous votre partenaire ?",
  sigle: "Quiz duo · 12 items",
  cat: "À deux",
  duree: "3-4 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un jeu sérieux : un support de dialogue, pas un verdict sur votre couple. Le concept sous-jacent, lui, vient de la recherche : les « cartes d'amour » (love maps) de John Gottman — la connaissance détaillée du monde intérieur de l'autre, l'un des marqueurs des couples qui durent (Gottman & Silver, « Les couples heureux ont leurs secrets »).",
  intro: "À quel point connaissez-vous le monde intérieur de votre partenaire — pas son plat préféré d'il y a dix ans, mais ses rêves DU MOMENT, ses soucis de cette semaine, ce qui le/la fait rire à coup sûr aujourd'hui ? Gottman appelle ça les « cartes d'amour » : la carte mentale, régulièrement mise à jour, du monde de l'autre. Ce quiz est un jeu à deux : chacun estime sa certitude, puis — et c'est là que ça devient intéressant — on vérifie auprès de l'autre. Les surprises sont le but du jeu, pas un échec.",
  consigne: "Pour chaque question, évaluez honnêtement votre degré de certitude : sauriez-vous répondre, là, maintenant ? Répondez chacun votre tour (même téléphone) ou chacun sur son appareil. Puis VÉRIFIEZ vos réponses auprès de l'autre — c'est la vérification qui crée la conversation, pas le score.",
  echelle: { labels: ["Aucune idée", "Je devinerais au hasard", "J'ai une intuition", "Je suis presque sûr(e)", "Sûr(e) de moi — et je peux le prouver"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Le rêve ou le projet qui occupe votre partenaire en ce moment", d: "CARTE" },
    { t: "Son souci principal de ces dernières semaines", d: "CARTE" },
    { t: "Son plat réconfort — celui qu'il lui faut un soir de journée pourrie", d: "CARTE" },
    { t: "La personne qui l'agace le plus au travail (ou dans son quotidien) en ce moment", d: "CARTE" },
    { t: "Ce qui le/la fait rire à coup sûr, même de mauvaise humeur", d: "CARTE" },
    { t: "Le film, la série ou le livre qui l'a marqué(e) récemment", d: "CARTE" },
    { t: "Ce qui le/la stresse le plus dans les mois qui viennent", d: "CARTE" },
    { t: "Sa journée idéale, s'il/elle pouvait la composer librement demain", d: "CARTE" },
    { t: "La chose qu'il/elle aimerait apprendre ou essayer un jour", d: "CARTE" },
    { t: "Son ami(e) le/la plus proche en ce moment — et pourquoi", d: "CARTE" },
    { t: "Le compliment qui lui fait le plus plaisir (et celui qui tombe à plat)", d: "CARTE" },
    { t: "Ce dont il/elle est le plus fier(ère) cette année", d: "CARTE" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 12 questions. Aucune norme n'existe (quiz maison) : le score reflète votre certitude déclarée, pas la justesse réelle de vos réponses — c'est la vérification à deux qui dira ce qu'il en est. Comparez plutôt vos deux scores et, surtout, vos réponses.",
  dims: {
    CARTE: {
      nom: "Carte d'amour", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Votre connaissance déclarée du monde intérieur actuel de votre partenaire : rêves, soucis, plaisirs, agacements du moment. Une carte qui se périme vite — la tenir à jour est une habitude, pas un acquis.",
      bandes: [
        { max: 2.5, label: "Carte à redessiner", niveau: "attention", texte: "Belle marge de progression : beaucoup de cases « aucune idée » ou « au hasard » — ce qui arrive à tous les couples dont le quotidien est chargé, et qui se rattrape vite. Bonne nouvelle : vous avez devant vous des dizaines de conversations passionnantes à avoir. Commencez ce soir par une seule question du quiz, posée pour de vrai." },
        { max: 3.8, label: "Carte vivante", niveau: "neutre", texte: "Vous connaissez bien des choses, avec quelques zones d'ombre — c'est le profil le plus courant, et les zones d'ombre sont exactement les meilleures questions à poser. Vérifiez vos intuitions auprès de l'autre : les surprises, dans un sens comme dans l'autre, sont le sel du jeu." },
        { max: 5, label: "Carte détaillée", niveau: "ok", texte: "Vous suivez le monde intérieur de votre partenaire de près — c'est précisément ce que Gottman observe chez les couples solides. Maintenant, l'épreuve de vérité : vérifiez auprès de l'autre. Et si tout est juste, célébrez-le ensemble — puis demandez-lui ce que VOUS ne savez pas encore." }
      ],
      amelioration: {
        intro: "La carte d'amour ne se remplit pas d'un coup : elle se met à jour par petites touches, en posant de vraies questions et en écoutant vraiment les réponses. Trois jeux à essayer à deux.",
        axes: [
          { titre: "Le quiz inversé", texte: "Chacun écrit 3 questions sur son propre monde intérieur (« quel est mon rêve du moment ? ») et l'autre tente de répondre. On compte les points si on veut, on rit sûrement, et on découvre toujours quelque chose. À rejouer tous les deux ou trois mois : les bonnes réponses se périment." },
          { titre: "La question du dîner", texte: "Défi de la semaine : une vraie question ouverte par jour, posée à un moment calme — « qu'est-ce qui t'a occupé la tête aujourd'hui ? », « c'est quoi ton envie du moment ? ». La règle : écouter la réponse jusqu'au bout avant de parler de soi." },
          { titre: "Vérifier plutôt que supposer", texte: "Repérez une question du quiz où vous étiez « presque sûr(e) » et vérifiez ce soir. Se tromper n'est pas un échec : c'est le signe que l'autre a bougé — et c'est plutôt bon signe que votre partenaire soit encore capable de vous surprendre." }
        ],
        objectif: "Défi de couple : refaites ce quiz dans trois mois, chacun de votre côté, et comparez avec aujourd'hui. Entre-temps, une vraie question par jour. L'objectif n'est pas le score parfait — c'est de ne plus jamais laisser la carte se périmer en silence.",
        ressources: [
          "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès).",
          "The Gottman Institute — « Love Maps » : articles et jeux de cartes de questions (gottman.com, en anglais)."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Connaissez-vous votre partenaire ?",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure. Le concept sous-jacent (les « cartes d'amour » : la connaissance mise à jour du monde intérieur du partenaire comme fondation du couple) vient des travaux d'observation de John Gottman.",
    refs: [
      "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès).",
      "Gottman, J. M., & Levenson, R. W. (1992). Marital processes predictive of later dissolution: Behavior, physiology, and health. Journal of Personality and Social Psychology, 63(2), 221-233."
    ]
  }
},

/* ---------------- CONFIANCE & SÉCURITÉ À DEUX ---------------- */
{
  id: "confiance2",
  nom: "Confiance & sécurité à deux",
  sigle: "Quiz duo · 10 items",
  cat: "À deux",
  duree: "2-3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Utilisez-le comme un support de dialogue à deux, pas comme un diagnostic de votre relation. Les concepts sous-jacents, eux, sont solidement documentés : le partenaire comme « base de sécurité » et « havre de paix » vient de la théorie de l'attachement (Feeney & Collins, 2015).",
  intro: "Pouvoir compter sur l'autre, être pleinement soi-même sans crainte, se confier sans se censurer, se sentir soutenu(e) en public comme en privé, réparer après un accroc : c'est le socle silencieux d'un couple — celui qu'on ne remarque que quand il manque. La recherche sur l'attachement appelle ça la « base de sécurité » : la certitude tranquille que l'autre sera là. Ce quiz maison vous propose d'en faire le tour à deux : répondez chacun, comparez, et parlez de vos écarts — ce sont eux qui contiennent les vraies conversations.",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation, en pensant à votre relation telle qu'elle est aujourd'hui. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, sans regarder les réponses de l'autre — la comparaison vient après, et c'est elle qui compte.",
  echelle: { labels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Mitigé(e)", "Plutôt d'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Quand quelque chose me tracasse, je peux le dire à mon/ma partenaire sans tourner autour du pot", d: "SECU" },
    { t: "Je peux être pleinement moi-même avec lui/elle — y compris mes côtés moins glorieux", d: "SECU" },
    { t: "Si j'ai un coup dur, c'est vers lui/elle que je me tourne en premier", d: "SECU" },
    { t: "En public, je sais qu'il/elle est de mon côté", d: "SECU" },
    { t: "Quand je me lance dans un projet qui me tient à cœur, il/elle m'encourage plutôt qu'il/elle ne freine", d: "SECU" },
    { t: "Après une dispute, nous arrivons à revenir l'un vers l'autre et à réparer", d: "SECU" },
    { t: "Je peux lui confier une peur ou une honte sans craindre que ce soit utilisé contre moi plus tard", d: "SECU" },
    { t: "Ses promesses, même petites (« je m'en occupe », « je t'appelle »), sont généralement tenues", d: "SECU" },
    { t: "Quand je doute de moi, sa présence me redonne de l'assurance plutôt qu'elle n'en rajoute", d: "SECU" },
    { t: "Je peux dire « non » ou « pas d'accord » sans craindre que ça devienne une crise", d: "SECU" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 10 affirmations. Aucune norme n'existe (quiz maison) : la valeur du résultat est dans la comparaison de vos deux scores et, item par item, de vos réponses — un écart de plus d'un point sur une affirmation est une conversation toute trouvée.",
  dims: {
    SECU: {
      nom: "Sécurité ressentie", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Le sentiment de pouvoir compter sur l'autre : se confier, être soutenu(e), rester soi-même, réparer après un accroc. Ce que la recherche sur l'attachement appelle la base de sécurité — un havre où revenir, un tremplin d'où partir.",
      bandes: [
        { max: 2.5, label: "Socle à consolider", niveau: "attention", texte: "Belle marge de progression : plusieurs situations où vous ne vous sentez pas pleinement en sécurité — et le fait de pouvoir le nommer est déjà un premier pas solide. La confiance se reconstruit par petites preuves répétées, pas par grandes déclarations. Choisissez ensemble UN item où vos réponses divergent le plus et parlez-en calmement : qu'est-ce qui, concrètement, ferait monter cette réponse d'un cran ?" },
        { max: 3.8, label: "Socle présent, à entretenir", niveau: "neutre", texte: "La confiance est là sur l'essentiel, avec des zones plus fragiles — c'est très fréquent, et ces zones sont des invitations, pas des accusations. Comparez vos réponses item par item : les endroits où vous ne cochez pas la même chose sont exactement les conversations qui font grandir un couple." },
        { max: 5, label: "Base solide", niveau: "ok", texte: "Vous décrivez une vraie base de sécurité : on se confie, on se soutient, on répare. C'est précieux et ça s'entretient — dites-vous mutuellement UNE chose que l'autre fait qui nourrit cette confiance (soyez précis !), puis demandez-vous : y a-t-il un domaine où l'on pourrait se sentir encore plus libres l'un avec l'autre ?" }
      ],
      amelioration: {
        intro: "La sécurité à deux se construit par gestes concrets et répétés — la recherche est claire là-dessus : c'est la fiabilité au quotidien, pas les grandes preuves, qui fait la confiance. Trois pistes à essayer ensemble.",
        axes: [
          { titre: "Le jeu des petites promesses", texte: "Défi de la semaine : chacun fait une seule petite promesse par jour (« je t'appelle à midi », « je m'occupe du dîner ») — et la tient. La confiance se tricote avec ces fils-là. Au bilan du dimanche : qu'est-ce que ça a changé ?" },
          { titre: "La question du soutien", texte: "Posez-vous mutuellement : « quand je traverse un moment difficile, qu'est-ce qui t'aide vraiment de ma part — et qu'est-ce qui, en croyant aider, tombe à côté ? ». Les réponses surprennent presque toujours, et elles valent de l'or : soutenir l'autre COMME IL/ELLE en a besoin, c'est le cœur du havre de paix." },
          { titre: "Réparer vite, réparer petit", texte: "Après le prochain accroc, tentez la réparation express : dans les 24 h, l'un des deux tend une perche (un mot, un geste, une tasse de thé) et l'autre la saisit. Pas besoin de résoudre le fond tout de suite — juste de se redire « on est ensemble ». Le fond se discute mieux une fois la connexion rétablie." }
        ],
        objectif: "Défi de couple : un mois de petites promesses tenues et une perche saisie après chaque accroc. Puis refaites le quiz chacun de votre côté et comparez avec aujourd'hui — c'est l'évolution de vos DEUX courbes qui raconte l'histoire.",
        ressources: [
          "Feeney, B. C., & Collins, N. L. (2015). A new look at social support: A theoretical perspective on thriving through relationships. Personality and Social Psychology Review, 19(2), 113-147.",
          "Johnson, S. (2008). Hold Me Tight. Little, Brown (trad. fr. « Serre-moi fort », Marabout).",
          "Gottman, J. (2011). The Science of Trust. W. W. Norton."
        ],
        consulter: "Si la confiance a été durablement abîmée (trahison, conflits qui ne se réparent plus, peur persistante de l'autre), un quiz ne suffit évidemment pas — et ce n'est la faute de personne : une thérapie de couple offre un cadre qui aide vraiment à reconstruire, pas seulement à « sauver les meubles ». Les tests de la rubrique « Couple » de cette app peuvent aussi vous aider à préciser ce qui se joue."
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Confiance & sécurité à deux",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure. Les concepts sous-jacents (base de sécurité et havre de paix : le partenaire comme refuge dans l'adversité et tremplin pour explorer) viennent de la théorie de l'attachement adulte.",
    refs: [
      "Feeney, B. C., & Collins, N. L. (2015). A new look at social support: A theoretical perspective on thriving through relationships. Personality and Social Psychology Review, 19(2), 113-147.",
      "Bowlby, J. (1988). A Secure Base. Basic Books (trad. fr. « Une base de sécurité », PUF)."
    ]
  }
},

/* ---------------- RITUELS DE CONNEXION ---------------- */
{
  id: "rituels2",
  nom: "Vos rituels de connexion",
  sigle: "Quiz duo · 11 items",
  cat: "À deux",
  duree: "2-3 min",
  avertissement: "Étiquette honnête — ceci est un quiz maison créé pour cette application, pas un instrument validé scientifiquement. Prenez-le comme un inventaire joyeux à faire à deux, pas comme une note de couple. Les concepts sous-jacents, eux, viennent de la recherche : les rituels de connexion (Gottman) et la « capitalisation » — répondre activement aux bonnes nouvelles de l'autre (Gable et al., 2004).",
  intro: "Les couples ne tiennent pas (que) par les grandes déclarations : ils tiennent par les petites habitudes — se dire bonjour pour de vrai, se raconter sa journée, fêter les bonnes nouvelles de l'autre, un rituel rien qu'à vous. La recherche le confirme : la façon dont on accueille les BONNES nouvelles de l'autre prédit la solidité du lien au moins autant que la gestion des disputes. Ce quiz maison vous propose de faire l'inventaire de vos rituels — pour célébrer ceux qui existent et repérer, sans aucune culpabilité, ceux qui ne demandent qu'à naître.",
  consigne: "Pour chaque petite habitude, indiquez sa fréquence réelle dans votre couple aujourd'hui — pas celle que vous aimeriez afficher. Répondez chacun votre tour (même téléphone) ou chacun sur son appareil, puis comparez : les écarts de perception sont souvent la partie la plus drôle et la plus instructive.",
  echelle: { labels: ["Jamais ou presque", "Rarement", "De temps en temps", "Souvent", "C'est sacré chez nous"], valeurs: [1, 2, 3, 4, 5] },
  items: [
    { t: "Nous nous disons bonjour et au revoir pour de vrai (un regard, un baiser — pas un grognement depuis l'autre pièce)", d: "RIT" },
    { t: "Quand on se retrouve le soir, on prend un moment pour se raconter sa journée", d: "RIT" },
    { t: "Nous avons un moment régulier sans aucun écran, rien que nous deux", d: "RIT" },
    { t: "Quand l'un de nous a une bonne nouvelle, l'autre la fête vraiment (questions, enthousiasme — pas juste « ah super »)", d: "RIT" },
    { t: "Nous avons un rituel rien qu'à nous (expression fétiche, café du dimanche, chanson, blague récurrente…)", d: "RIT" },
    { t: "Nous mangeons ensemble, à la même table, sans télé ni téléphone", d: "RIT" },
    { t: "Nous nous couchons en même temps, ou nous avons un vrai rituel du soir", d: "RIT" },
    { t: "Nous célébrons les dates qui comptent pour nous (à notre façon, même minuscule)", d: "RIT" },
    { t: "Dans la journée, il nous arrive de nous envoyer un signe juste pour dire « je pense à toi »", d: "RIT" },
    { t: "Nous avons un moment récurrent pour faire des projets ou rêver à deux", d: "RIT" },
    { t: "Quand l'un rentre après une absence, les retrouvailles sont un vrai moment (pas un simple retour logistique)", d: "RIT" }
  ],
  scoringNote: "Moyenne de 1 à 5 sur les 11 habitudes. Aucune norme n'existe (quiz maison) : un couple heureux avec trois rituels sacrés vaut largement un couple qui coche tout mollement. Regardez surtout les items où vos deux réponses divergent — et ceux qui vous font dire « tiens, ça, ça nous plairait »." ,
  dims: {
    RIT: {
      nom: "Rituels de connexion", format: "moyenne", min: 1, max: 5, valence: true,
      descriptif: "Les petites habitudes récurrentes qui entretiennent le lien au quotidien : retrouvailles, conversations, moments protégés, célébrations. De petits gestes, un grand effet cumulé — c'est leur régularité qui fait leur force.",
      bandes: [
        { max: 2.5, label: "Terrain à planter", niveau: "attention", texte: "Belle marge de progression : peu de rituels installés pour l'instant — ce qui arrive naturellement quand la vie accélère, et qui n'enlève rien à ce que vous êtes l'un pour l'autre. La bonne nouvelle : les rituels sont la chose la plus facile du monde à créer. Choisissez-en UN seul dans la liste (le plus tentant, pas le plus « utile ») et essayez-le une semaine. Un seul." },
        { max: 3.8, label: "Rituels en place", niveau: "neutre", texte: "Vous avez de vraies habitudes qui tiennent le lien, et d'autres en pointillé — profil très courant. Comparez vos réponses : là où vous ne cochez pas pareil, quelqu'un vit peut-être un rituel que l'autre ne voit même plus. Et repérez ensemble l'item le plus bas qui vous fait envie à tous les deux : c'est votre prochain rituel." },
        { max: 5, label: "Couple ritualisé", niveau: "ok", texte: "Vos journées sont cousues de petits rendez-vous — exactement ce que la recherche observe chez les couples qui durent. Célébrez-le : dites-vous mutuellement quel rituel vous manquerait le plus s'il disparaissait. Puis, pour le plaisir : en inventer un nouveau, juste parce que vous pouvez." }
      ],
      amelioration: {
        intro: "Un rituel ne se décrète pas « pour toujours » : il s'essaie une semaine, et on garde ce qui rend joyeux. Trois défis à tester à deux — l'échec est autorisé, le fou rire aussi.",
        axes: [
          { titre: "Le défi des retrouvailles", texte: "Une semaine : chaque retrouvaille (le soir, après une course) commence par 30 secondes de vraie attention — un baiser, une question, un regard — AVANT toute logistique (« t'as pensé au pain ? » attendra 30 secondes, promis). Bilan au bout de sept jours : on garde ?" },
          { titre: "Fêter les bonnes nouvelles comme il faut", texte: "La prochaine fois que l'autre raconte une bonne nouvelle, même petite, jouez la « réponse active » : posez deux questions, montrez que ça vous fait quelque chose. C'est le geste le mieux documenté de ce quiz (la « capitalisation » de Gable et al.) : bien accueillir les joies de l'autre nourrit le couple au moins autant que bien gérer les peines." },
          { titre: "Inventer LE rituel rien qu'à vous", texte: "Un rituel qui n'existe dans aucun autre couple : la question absurde du dimanche, le concours de la pire anecdote de la semaine, la chanson des courses… Le critère n'est pas d'être raisonnable, c'est d'être à vous. Les rituels un peu ridicules sont souvent ceux qui tiennent le plus longtemps." }
        ],
        objectif: "Défi de couple : UN nouveau rituel testé par quinzaine pendant deux mois — on garde ceux qui rendent joyeux, on jette les autres sans regret. Puis refaites le quiz et comparez : votre score aura peut-être bougé, mais surtout, vous saurez lesquels sont devenus sacrés.",
        ressources: [
          "Gable, S. L., Reis, H. T., Impett, E. A., & Asher, E. R. (2004). What do you do when things go right? The intrapersonal and interpersonal benefits of sharing positive events. Journal of Personality and Social Psychology, 87(2), 228-245.",
          "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès).",
          "Doherty, W. J. (1997). The Intentional Family: Simple Rituals to Strengthen Family Ties. Avon Books."
        ]
      }
    }
  },
  source: {
    instrument: "Quiz maison Iris — Vos rituels de connexion",
    statut: "Quiz créé pour cette application, non validé scientifiquement — conçu comme un support de dialogue à deux, pas comme une mesure. Les concepts sous-jacents (rituels de connexion comme entretien du lien ; « capitalisation » : la réponse active-constructive aux bonnes nouvelles du partenaire, associée à la satisfaction et à la stabilité du couple) viennent de la recherche citée.",
    refs: [
      "Gable, S. L., Reis, H. T., Impett, E. A., & Asher, E. R. (2004). What do you do when things go right? The intrapersonal and interpersonal benefits of sharing positive events. Journal of Personality and Social Psychology, 87(2), 228-245.",
      "Gottman, J., & Silver, N. (1999). The Seven Principles for Making Marriage Work. Harmony Books (trad. fr. « Les couples heureux ont leurs secrets », JC Lattès)."
    ]
  }
}

];

TESTS = TESTS.concat(TESTS_7);
