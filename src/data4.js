/* ============================================================
   DONNÉES — PARTIE 4 : Vie de couple
   Réactivité perçue (PPRS), Satisfaction (CSI-4),
   Conflits (IAI + exigence-retrait), Satisfaction intime (GMSEX)
   ============================================================ */

var TESTS_4 = [

/* ---------------- 13. RÉACTIVITÉ PERÇUE DU PARTENAIRE ---------------- */
{
  id: "pprs",
  nom: "Réactivité de votre partenaire",
  sigle: "PPRS (adaptation) · 12 items",
  cat: "Couple",
  duree: "2-3 min",
  intro: "Voici le concept VALIDÉ qui se cache derrière l'intuition des « langages de l'amour » : la réactivité perçue du partenaire (Reis & Clark, 2013) — sentir que l'autre me comprend, me valide et prend soin de ce qui compte pour moi. C'est l'un des prédicteurs les plus robustes de la satisfaction et de la longévité du couple dans la littérature, précisément ce que la recherche recommande de cultiver à la place de l'appariement des « langages » (Impett et al., 2024).",
  consigne: "Pour les personnes actuellement en couple. Chaque affirmation complète la phrase « Mon/ma partenaire… ». Indiquez à quel point c'est vrai en ce moment.",
  echelle: { labels: ["Pas du tout vrai", "Très peu vrai", "Plutôt pas vrai", "Moyennement vrai", "Plutôt vrai", "Largement vrai", "Tout à fait vrai"], valeurs: [1, 2, 3, 4, 5, 6, 7] },
  items: [
    { t: "…voit qui je suis vraiment", d: "RP" },
    { t: "…me connaît bien", d: "RP" },
    { t: "…m'estime, défauts compris", d: "RP" },
    { t: "…comprend généralement ce que je ressens", d: "RP" },
    { t: "…m'écoute vraiment quand je parle", d: "RP" },
    { t: "…s'intéresse à ce que je pense et à ce que je ressens", d: "RP" },
    { t: "…valorise mes capacités et mes opinions", d: "RP" },
    { t: "…me soutient et m'encourage", d: "RP" },
    { t: "…est là quand j'ai besoin de lui/d'elle", d: "RP" },
    { t: "…répond à mes besoins", d: "RP" },
    { t: "…me montre concrètement qu'il/elle tient à moi", d: "RP" },
    { t: "…respecte l'ensemble de ce que je suis", d: "RP" }
  ],
  scoringNote: "Moyenne des 12 items, de 1 à 7. Pas de seuil clinique officiel ; dans les échantillons de couples, les moyennes observées sont élevées (souvent supérieures à 5,5) : un score moyen n'a rien d'alarmant — les repères ci-dessous sont indicatifs. Important : ce score mesure votre PERCEPTION, qui dépend aussi de votre humeur, de votre filtre du moment et de ce que vous exprimez (ou non) de vos besoins.",
  dims: {
    RP: {
      nom: "Réactivité perçue (compréhension, validation, soin)", format: "moyenne", min: 1, max: 7, valence: true,
      descriptif: "Sentiment que l'autre me comprend (il/elle sait qui je suis), me valide (il/elle respecte ce que je suis) et prend soin de moi (il/elle agit pour mon bien). C'est le mécanisme central de l'intimité dans le modèle de Reis & Shaver.",
      bandes: [
        { max: 3.9, label: "Faible", niveau: "attention", texte: "Vous vous sentez peu vu(e), compris(e) ou soutenu(e) en ce moment. Deux lectures possibles, souvent mêlées : un déficit réel de réactivité de l'autre, et/ou des besoins peu exprimés qui ne peuvent donc pas recevoir de réponse. Les axes ci-dessous travaillent les deux — et ce score mérite une vraie conversation à deux." },
        { max: 5.5, label: "Moyenne", niveau: "ok", texte: "Votre partenaire vous semble globalement présent(e) et compréhensif(ve), avec des zones perfectibles. C'est le niveau typique des couples établis — et il monte avec des gestes précis, pas avec de grands principes." },
        { max: 7, label: "Élevée", niveau: "ok", texte: "Vous vous sentez profondément compris(e) et soutenu(e) : c'est le meilleur prédicteur simple de la solidité d'un couple. Entretenez-le activement — la réactivité s'érode en silence quand on cesse de la pratiquer." }
      ],
      amelioration: {
        intro: "Bonne nouvelle : la réactivité est un ensemble de comportements précis et entraînables, documentés par la recherche — pas un don.",
        axes: [
          { titre: "Valider avant de résoudre", texte: "Quand l'autre se confie, la séquence qui marche : reformuler ce qu'il/elle vit et le légitimer (« c'est normal que ça te pèse ») AVANT tout conseil. La solution donnée trop vite est vécue comme une non-écoute — c'est l'erreur n°1 documentée." },
          { titre: "Répondre aux tentatives de connexion", texte: "Les micro-sollicitations du quotidien (« regarde ça », un soupir, une anecdote) sont des tests discrets du lien. Les recherches observationnelles montrent que le fait d'y répondre — même brièvement — distingue fortement les couples stables des couples qui se délitent." },
          { titre: "Capitaliser sur les bonnes nouvelles", texte: "Réagir avec enthousiasme et questions quand l'autre partage une BONNE nouvelle (réponse « active-constructive », Gable et al., 2004) prédit la qualité du lien au moins autant que le soutien dans les coups durs. C'est le levier le plus simple de toute cette application." },
          { titre: "Rendre vos besoins lisibles", texte: "La réactivité perçue dépend aussi de vous : un besoin jamais formulé ne peut pas être satisfait, puis devient un reproche. Une demande précise par semaine (« j'aimerais que tu me demandes comment s'est passé mon rendez-vous ») change la boucle." }
        ],
        objectif: "Pendant un mois : une validation sans conseil par jour, une réponse enthousiaste à chaque bonne nouvelle de l'autre, une demande précise par semaine. Refaites le test à 6 semaines — idéalement chacun de votre côté, puis comparez vos perceptions.",
        ressources: [
          "Reis, H. T., & Clark, M. S. (2013). Responsiveness. The Oxford Handbook of Close Relationships.",
          "Crasta, D., Rogge, R. D., Maniaci, M. R., & Reis, H. T. (2021). Toward an optimized measure of perceived partner responsiveness. Psychological Assessment, 33(4).",
          "Gable, S. L., Reis, H. T., Impett, E. A., & Asher, E. R. (2004). What do you do when things go right? Journal of Personality and Social Psychology, 87(2).",
          "Gottman, J. & Silver, N. « Les couples heureux ont leurs secrets » (JC Lattès)."
        ],
        consulter: "Si vous êtes seul(e) à porter le lien depuis longtemps malgré des demandes claires, une thérapie de couple permet d'aborder le déséquilibre avec un tiers — c'est un motif de consultation très classique."
      }
    }
  },
  source: {
    instrument: "Perceived Partner Responsiveness Scale (Reis et al.)",
    statut: "Instrument de recherche librement utilisé dans la littérature. Adaptation française réalisée pour cette application d'après les items publiés ; échelle originale en 9 points ramenée à 7 points pour l'homogénéité de l'application, repères d'interprétation ajustés en conséquence (indicatifs).",
    refs: [
      "Reis, H. T., & Shaver, P. (1988). Intimacy as an interpersonal process. Handbook of Personal Relationships.",
      "Crasta, D., Rogge, R. D., Maniaci, M. R., & Reis, H. T. (2021). Toward an optimized measure of perceived partner responsiveness. Psychological Assessment, 33(4), 338-355.",
      "Impett, E. A., Park, H. G., & Muise, A. (2024). Current Directions in Psychological Science, 33(2)."
    ]
  }
},

/* ---------------- 14. SATISFACTION DE COUPLE — CSI-4 ---------------- */
{
  id: "csi4",
  nom: "Satisfaction de couple",
  sigle: "CSI-4 (traduction) · 4 items",
  cat: "Couple",
  duree: "1 min",
  intro: "Le Couples Satisfaction Index (Funk & Rogge, 2007, université de Rochester) est l'instrument moderne de référence pour mesurer la satisfaction conjugale — développé par théorie de réponse à l'item pour être plus précis que les anciennes échelles, libre d'utilisation, avec un seuil de détresse publié. Sa version à 4 questions est idéale pour un suivi régulier.",
  consigne: "Pour les personnes actuellement en couple. Répondez d'après votre relation telle qu'elle est ces derniers temps.",
  echelle: { labels: ["Extrêmement malheureuse", "Assez malheureuse", "Un peu malheureuse", "Heureuse", "Très heureuse", "Extrêmement heureuse", "Parfaite"], valeurs: [0, 1, 2, 3, 4, 5, 6] },
  echelles: [
    { labels: ["Extrêmement malheureuse", "Assez malheureuse", "Un peu malheureuse", "Heureuse", "Très heureuse", "Extrêmement heureuse", "Parfaite"], valeurs: [0, 1, 2, 3, 4, 5, 6] },
    { labels: ["Pas du tout", "Un peu", "Moyennement", "Beaucoup", "Presque complètement", "Complètement"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Pas du tout vrai", "Un peu vrai", "Moyennement vrai", "Largement vrai", "Presque tout à fait vrai", "Tout à fait vrai"], valeurs: [0, 1, 2, 3, 4, 5] }
  ],
  items: [
    { t: "Tout bien considéré, comment décririez-vous votre relation ?", d: "SAT", e: 0 },
    { t: "J'ai une relation chaleureuse et réconfortante avec mon/ma partenaire", d: "SAT", e: 2 },
    { t: "À quel point votre relation avec votre partenaire est-elle gratifiante ?", d: "SAT", e: 1 },
    { t: "De manière générale, à quel point êtes-vous satisfait(e) de votre relation ?", d: "SAT", e: 1 }
  ],
  scoringNote: "Somme des 4 items, de 0 à 21. Seuil publié (Funk & Rogge, 2007) : un score inférieur à 13,5 signale une détresse relationnelle probable. Au-dessus du seuil, les repères sont indicatifs.",
  dims: {
    SAT: {
      nom: "Satisfaction conjugale", format: "somme", min: 0, max: 21, valence: true,
      descriptif: "Évaluation globale de votre relation. La satisfaction fluctue naturellement (stress, enfants en bas âge, charge de travail) : une mesure basse isolée est une photo, pas un verdict — d'où l'intérêt du suivi.",
      bandes: [
        { max: 13, label: "Zone de détresse relationnelle", niveau: "alerte", texte: "Score sous le seuil publié (13,5) : votre insatisfaction est comparable à celle des couples qui consultent. Ce n'est pas une condamnation — c'est le signal qu'il faut agir méthodiquement : passez les tests « Réactivité de votre partenaire » et « Conflits dans le couple » pour localiser ce qui pèse, appliquez les axes, et sachez que la thérapie de couple a une efficacité démontrée, d'autant plus grande qu'elle est entreprise tôt." },
        { max: 16, label: "Au-dessus du seuil, zone basse", niveau: "attention", texte: "Pas de détresse caractérisée, mais une marge nette de progression. C'est la zone où les efforts rapportent le plus : les axes ci-dessous, appliqués quelques semaines, déplacent réellement ce score." },
        { max: 21, label: "Satisfaction bonne à élevée", niveau: "ok", texte: "Votre relation est une ressource. Les couples durablement heureux ne sont pas ceux qui n'ont pas de problèmes, mais ceux qui entretiennent activement le positif — continuez les rituels qui vous font du bien." }
      ],
      amelioration: {
        intro: "La satisfaction conjugale est une des variables les mieux étudiées de la psychologie. Ce qui la déplace vraiment : la réactivité au quotidien, la façon de se disputer, et la dose d'expériences positives partagées.",
        axes: [
          { titre: "Localiser avant de réparer", texte: "« Ça ne va pas » est trop vague pour agir. Passez les tests « Réactivité de votre partenaire » et « Conflits dans le couple » de cette application : ils pointent les deux mécanismes qui expliquent l'essentiel des variations de satisfaction." },
          { titre: "Remonter la dose de positif", texte: "Dans les couples qui s'usent, le positif disparaît avant que le négatif n'explose. Réinstallez des rituels courts et réguliers : vraie question du soir (« quoi de mieux aujourd'hui ? »), appréciation exprimée par jour, sortie à deux protégée dans l'agenda." },
          { titre: "Faire du nouveau ensemble", texte: "Les activités nouvelles et un peu stimulantes partagées à deux augmentent la satisfaction dans des essais contrôlés (Aron et al., 2000) — l'habituation est un facteur d'érosion silencieux. Une nouveauté par mois (lieu, activité, projet) est un objectif réaliste." },
          { titre: "Consulter tôt, pas en dernier recours", texte: "Les couples attendent en moyenne des années avant de consulter — quand les schémas sont incrustés. Les thérapies de couple structurées (EFT, approches comportementales intégratives) ont une efficacité démontrée par essais contrôlés." }
        ],
        objectif: "Objectif chiffré : rester ou revenir durablement au-dessus de 13,5, puis viser 17+. Protocole 6 semaines : rituels positifs quotidiens + une nouveauté partagée + travail du conflit si le test « Conflits dans le couple » est haut. Refaites le test toutes les 4 à 6 semaines, idéalement chacun de son côté.",
        ressources: [
          "Funk, J. L., & Rogge, R. D. (2007). Testing the ruler with item response theory: the Couples Satisfaction Index. Journal of Family Psychology, 21(4), 572-583.",
          "Aron, A., Norman, C., Aron, E., McKenna, C., & Heyman, R. (2000). Couples' shared participation in novel and arousing activities. Journal of Personality and Social Psychology, 78(2).",
          "Johnson, S. « Serre-moi fort » (Les Éditions de l'Homme) · Gottman, J. & Silver, N. « Les couples heureux ont leurs secrets » (JC Lattès)."
        ],
        consulter: "Score < 13,5 persistant sur deux mesures, ou envie de partir/indifférence installée : thérapie de couple (annuaires : EFT francophone, thérapeutes familiaux). Si la relation comporte peur, contrôle ou violence, ce n'est plus une question de « satisfaction » : 3919 (anonyme et gratuit) ou arretonslesviolences.gouv.fr."
      }
    }
  },
  source: {
    instrument: "Couples Satisfaction Index — version 4 items (CSI-4)",
    statut: "Libre d'utilisation (Funk & Rogge, université de Rochester). Traduction française réalisée pour cette application.",
    refs: [
      "Funk, J. L., & Rogge, R. D. (2007). Journal of Family Psychology, 21(4), 572-583.",
      "Page officielle de diffusion de l'instrument : couples.rochester.edu (université de Rochester)."
    ]
  }
},

/* ---------------- 15. CONFLITS & COMMUNICATION ---------------- */
{
  id: "conflits",
  nom: "Conflits dans le couple",
  sigle: "IAI + CPQ (adaptations) · 14 items",
  cat: "Couple",
  duree: "3 min",
  intro: "Ce n'est pas la présence de conflits qui prédit la rupture — tous les couples se disputent — mais leur FORME. Ce test combine deux mesures issues de la recherche : l'efficacité de vos disputes (d'après l'Ineffective Arguing Inventory de Kurdek) et le schéma « exigence-retrait » (l'un pousse la discussion, l'autre se ferme — d'après le Communication Patterns Questionnaire de Christensen), l'un des schémas les plus destructeurs documentés.",
  consigne: "Pour les personnes actuellement en couple. Répondez d'après vos désaccords et disputes des derniers mois.",
  echelle: { labels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Ni d'accord ni en désaccord", "Plutôt d'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5] },
  echelles: [
    { labels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Ni d'accord ni en désaccord", "Plutôt d'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5] },
    { labels: ["Jamais", "Rarement", "Parfois", "Souvent", "Très souvent"], valeurs: [1, 2, 3, 4, 5] }
  ],
  items: [
    { t: "Nos disputes restent en suspens, sans vraie conclusion", d: "INEF", e: 0 },
    { t: "Nous pouvons passer des jours sans régler un différend", d: "INEF", e: 0 },
    { t: "Nos disputes se terminent souvent en impasse frustrante", d: "INEF", e: 0 },
    { t: "Nous ressassons les mêmes sujets de dispute, encore et encore", d: "INEF", e: 0 },
    { t: "Nos désaccords sont brefs et vite dépassés", d: "INEF", e: 0, r: true },
    { t: "Quand nous nous disputons, nous dérivons loin du sujet initial", d: "INEF", e: 0 },
    { t: "Nous devons sérieusement améliorer notre façon de régler nos désaccords", d: "INEF", e: 0 },
    { t: "Après une dispute, nous savons nous réconcilier vraiment", d: "INEF", e: 0, r: true },
    { t: "Quand un problème surgit, l'un de nous insiste pour en parler pendant que l'autre se ferme", d: "DR", e: 1 },
    { t: "Je fais des reproches ou des demandes pendant que mon/ma partenaire se met en retrait", d: "DR", e: 1 },
    { t: "Mon/ma partenaire fait des reproches ou des demandes pendant que je me mets en retrait", d: "DR", e: 1 },
    { t: "Plus l'un de nous pousse la discussion, plus l'autre s'éloigne", d: "DR", e: 1 },
    { t: "Nous évitons tous les deux d'aborder les sujets qui fâchent", d: "DR", e: 1 },
    { t: "Le silence de l'un finit par faire exploser l'autre", d: "DR", e: 1 }
  ],
  scoringNote: "Deux scores en moyenne de 1 à 5 : « disputes inefficaces » (8 items, 2 inversés) et « exigence-retrait » (6 items). Pas de seuils cliniques officiels : repères indicatifs à 2,5 et 3,5. C'est surtout l'évolution et le contraste entre les deux scores qui informent.",
  dims: {
    INEF: {
      nom: "Disputes inefficaces", format: "moyenne", min: 1, max: 5, valence: false,
      descriptif: "Des conflits qui tournent en rond, dérivent, ne se concluent pas et reviennent — l'inverse de la dispute « utile » qui aboutit à une compréhension ou une décision.",
      bandes: [
        { max: 2.49, label: "Conflits plutôt constructifs", niveau: "ok", texte: "Vos désaccords se règlent et ne laissent pas de résidu durable. C'est l'un des meilleurs indicateurs de santé d'un couple — plus que la rareté des disputes." },
        { max: 3.5, label: "Efficacité moyenne", niveau: "attention", texte: "Certaines disputes aboutissent, d'autres s'enkystent. Repérez ce qui distingue les deux (sujet ? fatigue ? manière de commencer ?) et appliquez les axes ci-dessous — le démarrage de la dispute est le levier n°1." },
        { max: 5, label: "Schéma conflictuel installé", niveau: "alerte", texte: "Vos disputes tournent en boucle sans résolution : frustration, sujets récurrents, réconciliations incomplètes. Ce schéma prédit l'érosion de la satisfaction — mais il se désinstalle avec de la méthode, et vite quand les deux s'y mettent." }
      ],
      amelioration: {
        intro: "La recherche observationnelle (notamment les travaux de Gottman) montre que l'issue d'une dispute se joue en grande partie dans ses trois premières minutes et dans la capacité à réparer en cours de route.",
        axes: [
          { titre: "Démarrage en douceur", texte: "Commencer par « je » + un fait + un besoin (« je me suis senti seul samedi, j'aimerais qu'on garde le samedi soir pour nous ») au lieu d'un jugement global (« tu ne penses qu'à toi »). Le ton des 3 premières minutes prédit l'issue de la conversation dans les études d'observation." },
          { titre: "Pause physiologique avec heure de reprise", texte: "Au-delà d'un certain niveau d'activation (cœur qui s'emballe, envie de fuir ou d'attaquer), plus rien de constructif ne sort — c'est physiologique. Convenez d'un signal de pause de 20-30 minutes AVEC heure de reprise obligatoire : la pause sans reprise devient de l'évitement." },
          { titre: "Un sujet à la fois, une décision à la fin", texte: "Interdisez-vous l'archéologie (« et puis d'ailleurs, en 2022… »). Terminez chaque discussion par une micro-décision écrite ou reformulée à deux — c'est ce qui empêche le sujet de revenir intact." },
          { titre: "Accepter les problèmes perpétuels", texte: "Une grande partie des désaccords de couple sont PERPÉTUELS (valeurs, tempéraments) : l'objectif réaliste n'est pas de les résoudre mais d'en dialoguer sans blessure. Renoncer à « gagner » ces sujets-là est un soulagement, pas une défaite." }
        ],
        objectif: "Sur 6 semaines : appliquer démarrage en douceur + pause avec reprise sur chaque désaccord notable, et clôturer par une micro-décision. Refaites le test ensuite ; visez le passage sous 2,5. Si rien ne bouge alors que vous essayez réellement à deux, un(e) thérapeute de couple accélère considérablement les choses.",
        ressources: [
          "Kurdek, L. A. (1994). Ineffective Arguing Inventory. Journal of Marriage and the Family, 56.",
          "Gottman, J., & Silver, N. « Les couples heureux ont leurs secrets » (JC Lattès) — vulgarisation par le chercheur lui-même.",
          "Christensen, A., & Jacobson, N. « Reconcilable Differences » (Guilford) — l'approche par l'acceptation."
        ],
        consulter: "Si le schéma persiste malgré de réels efforts à deux, une thérapie de couple structurée est le cadre adapté — c'est un motif de consultation classique et efficace. Attention également : des disputes qui dégénèrent systématiquement (peur de l'autre, humiliations, violence) peuvent masquer un contexte de violence conjugale — 3919 (anonyme et gratuit, 24h/24), arretonslesviolences.gouv.fr."
      }
    },
    DR: {
      nom: "Schéma exigence-retrait", format: "moyenne", min: 1, max: 5, valence: false,
      descriptif: "L'un poursuit (demandes, reproches, insistance), l'autre se dérobe (silence, fuite, fermeture) — et chacun renforce l'autre : plus je pousse, plus tu fuis ; plus tu fuis, plus je pousse. La méta-analyse de Schrodt (2014, 74 études) le lie fortement à l'insatisfaction des deux partenaires. L'échelle inclut aussi une facette d'évitement mutuel (les deux partenaires esquivent les sujets sensibles), proche cousine du schéma exigence-retrait.",
      bandes: [
        { max: 2.49, label: "Peu présent", niveau: "ok", texte: "Vous parvenez généralement à aborder les problèmes à deux, sans poursuite ni fuite systématiques. Gardez cet équilibre précieux." },
        { max: 3.5, label: "Présent par moments", niveau: "attention", texte: "Le cycle poursuite-fuite s'invite dans certains conflits. Bon moment pour le nommer ensemble, à froid — une fois repéré, il perd une grande partie de son pouvoir." },
        { max: 5, label: "Cycle installé", niveau: "alerte", texte: "Le schéma exigence-retrait structure vos conflits. Point crucial : AUCUN des deux rôles n'est le « coupable » — c'est le cycle qui est le problème, et chacun y réagit à la menace à sa façon (protestation ou protection). C'est exactement ce que les thérapies de couple fondées sur l'attachement savent défaire." }
      ],
      amelioration: {
        intro: "Le levier central, validé par les approches de couple les plus efficaces : faire du CYCLE l'ennemi commun, plutôt que l'un de l'autre.",
        axes: [
          { titre: "Nommer le cycle à froid", texte: "Hors conflit, décrivez-le ensemble sans accusation : « quand je sens X, je pousse ; quand tu sens Y, tu te fermes ; et ça s'auto-alimente ». Donnez-lui un nom. Au prochain épisode, dire « on est dans notre cycle » change immédiatement la dynamique." },
          { titre: "Si vous poursuivez", texte: "Une demande précise et une seule, formulée doucement, puis accepter un délai de réponse. La poursuite vient souvent d'une peur légitime (ne pas compter) — dites la peur plutôt que le reproche : « quand tu te tais, j'ai l'impression de ne pas exister pour toi »." },
          { titre: "Si vous vous retirez", texte: "Remplacer le silence par un retrait ANNONCÉ : « j'ai besoin de 30 minutes pour me poser, on reprend à 21h — promis ». Le retrait vient souvent d'une saturation réelle ; c'est le silence non annoncé qui affole l'autre, pas la pause." },
          { titre: "Créneau hebdomadaire de régulation", texte: "Une « réunion de couple » de 30 minutes par semaine (ce qui va, ce qui coince, la logistique) évite l'accumulation qui nourrit la poursuite ET l'évitement. Ritualisée, elle désamorce la plupart des explosions du quotidien." }
        ],
        objectif: "Sur 6 semaines : cycle nommé ensemble + retraits annoncés avec reprise + une réunion hebdomadaire. Refaites le test ensuite, idéalement à deux. Cycle toujours installé malgré de vrais efforts → thérapie de couple (EFT notamment, conçue exactement pour ça).",
        ressources: [
          "Schrodt, P., Witt, P. L., & Shimkowski, J. R. (2014). A meta-analytical review of the demand/withdraw pattern. Communication Monographs, 81(1).",
          "Christensen, A., & Sullaway, M. (1984). Communication Patterns Questionnaire. UCLA.",
          "Johnson, S. « Serre-moi fort » (Les Éditions de l'Homme) — le protocole EFT pour sortir des cycles, avec exercices."
        ],
        consulter: "Attention : si les conflits comportent peur de l'autre, contrôle (argent, sorties, téléphone), humiliations ou violence physique, ce n'est plus un « problème de communication » et la thérapie de couple n'est pas le cadre adapté. 3919 (Violences Femmes Info, anonyme et gratuit, 24h/24), arretonslesviolences.gouv.fr, 17 en cas de danger immédiat. Les hommes victimes peuvent aussi appeler le 3919 ou le 116 006 (aide aux victimes)."
      }
    }
  },
  source: {
    instrument: "Ineffective Arguing Inventory (Kurdek, 1994) + sous-échelle exigence-retrait d'après le Communication Patterns Questionnaire (Christensen & Sullaway, 1984)",
    statut: "Instruments de recherche librement utilisés dans la littérature. Adaptations françaises réalisées pour cette application d'après les items publiés.",
    refs: [
      "Kurdek, L. A. (1994). Journal of Marriage and the Family, 56(3), 705-722.",
      "Christensen, A., & Heavey, C. L. (1990). Gender and social structure in the demand/withdraw pattern. Journal of Personality and Social Psychology, 59(1).",
      "Schrodt, P. et al. (2014). Communication Monographs, 81(1), 28-58."
    ]
  }
},

/* ---------------- 16. SATISFACTION INTIME — GMSEX ---------------- */
{
  id: "gmsex",
  nom: "Satisfaction intime",
  sigle: "GMSEX (adaptation) · 5 items",
  cat: "Couple",
  duree: "1 min",
  avertissement: "Test optionnel et intime — comme tout le reste, vos réponses ne quittent pas votre appareil. Il concerne les personnes ayant une vie intime de couple ; passez-le si le sujet est pertinent pour vous en ce moment.",
  intro: "La Global Measure of Sexual Satisfaction (Lawrance & Byers, 1995) est l'échelle brève de référence de la recherche sur la satisfaction sexuelle : cinq facettes de votre vie intime, évaluées globalement. La sexualité est un pilier documenté de la satisfaction conjugale — et l'un des sujets les moins abordés dans les couples, alors que la communication est précisément son levier le plus puissant.",
  consigne: "Pour les personnes actuellement en couple. Les 5 questions se ressemblent volontairement : chacune évalue une facette différente de votre vie intime, ces derniers mois.",
  echelle: { labels: ["Très mauvaise", "Mauvaise", "Plutôt mauvaise", "Ni bonne ni mauvaise", "Plutôt bonne", "Bonne", "Très bonne"], valeurs: [1, 2, 3, 4, 5, 6, 7] },
  echelles: [
    { labels: ["Très mauvaise", "Mauvaise", "Plutôt mauvaise", "Ni bonne ni mauvaise", "Plutôt bonne", "Bonne", "Très bonne"], valeurs: [1, 2, 3, 4, 5, 6, 7] },
    { labels: ["Très désagréables", "Désagréables", "Plutôt désagréables", "Neutres", "Plutôt agréables", "Agréables", "Très agréables"], valeurs: [1, 2, 3, 4, 5, 6, 7] },
    { labels: ["Très négatif", "Négatif", "Plutôt négatif", "Neutre", "Plutôt positif", "Positif", "Très positif"], valeurs: [1, 2, 3, 4, 5, 6, 7] },
    { labels: ["Très insatisfaisante", "Insatisfaisante", "Plutôt insatisfaisante", "Neutre", "Plutôt satisfaisante", "Satisfaisante", "Très satisfaisante"], valeurs: [1, 2, 3, 4, 5, 6, 7] },
    { labels: ["Sans valeur à mes yeux", "Peu précieuse", "Plutôt peu précieuse", "Ni l'un ni l'autre", "Plutôt précieuse", "Précieuse", "Très précieuse"], valeurs: [1, 2, 3, 4, 5, 6, 7] }
  ],
  items: [
    { t: "Globalement, ma vie intime de couple est…", d: "SX", e: 0 },
    { t: "Les moments intimes avec mon/ma partenaire sont…", d: "SX", e: 1 },
    { t: "Ce que je ressens vis-à-vis de notre vie intime est…", d: "SX", e: 2 },
    { t: "Sur le plan de la satisfaction, notre vie intime est…", d: "SX", e: 3 },
    { t: "Notre vie intime, pour moi, est…", d: "SX", e: 4 }
  ],
  scoringNote: "Somme des 5 items, de 5 à 35. Pas de seuil clinique officiel ; dans les études de couples, les moyennes se situent autour de 28-30 (Byers, 2005). Repères indicatifs : ≤ 17 insatisfaction marquée · 18-27 zone moyenne · 28-35 satisfaction élevée.",
  dims: {
    SX: {
      nom: "Satisfaction intime", format: "somme", min: 5, max: 35, valence: true,
      descriptif: "Évaluation globale de votre vie intime de couple. À lire avec bienveillance : elle fluctue naturellement avec le stress, la fatigue, la santé, les saisons de la vie (jeunes enfants, charge de travail) — et elle se travaille, à deux.",
      bandes: [
        { max: 17, label: "Insatisfaction marquée", niveau: "attention", texte: "Votre vie intime est une source de frustration ou de tristesse en ce moment. Deux messages importants : c'est l'un des motifs de consultation les plus fréquents (vous êtes très loin d'être seul(e)), et c'est aussi l'un de ceux qui évoluent le mieux quand on ose en parler — à deux d'abord, avec un professionnel si besoin." },
        { max: 27, label: "Zone moyenne", niveau: "ok", texte: "Vie intime correcte avec une marge d'amélioration. Le levier documenté n°1 est simple à énoncer et difficile à faire : en parler explicitement (voir les axes). La bonne nouvelle : les gains sont rapides quand le dialogue s'ouvre." },
        { max: 35, label: "Satisfaction élevée", niveau: "ok", texte: "Votre vie intime nourrit votre couple. Entretenez le canal de communication qui va avec — c'est lui qui permet de traverser les inévitables variations sans les transformer en crise." }
      ],
      amelioration: {
        intro: "La méta-analyse de référence (Mallory et al., 2019, 48 études) est sans ambiguïté : la communication sexuelle est le corrélat le plus fort de la satisfaction sexuelle — devant la fréquence. Le tabou est le vrai problème.",
        axes: [
          { titre: "Ouvrir le dialogue, hors chambre", texte: "Une conversation à froid, dans un moment détendu, en parlant de ce qui MARCHE d'abord (« j'aime quand… ») avant ce qui manque. Les demandes formulées comme des envies (« j'aimerais essayer… ») passent infiniment mieux que comme des bilans (« on ne… jamais »)." },
          { titre: "Comprendre le désir réactif", texte: "Chez beaucoup de personnes, le désir ne précède pas l'intimité : il naît EN réponse au contexte et au contact (désir « réactif », bien décrit par la recherche — Basson, 2000). Attendre l'envie spontanée revient alors à attendre indéfiniment — créer le contexte n'est pas de l'artifice, c'est le mode d'emploi." },
          { titre: "Écart de désir : négocier sans pression", texte: "Un écart de désir entre partenaires est la norme, pas une anomalie. Ce qui abîme : la pression d'un côté, la culpabilité de l'autre. Ce qui marche : en parler comme un problème COMMUN, protéger la tendresse non sexuelle (voir le test « Langages de l'amour »), et définir ensemble un rythme acceptable pour les deux." },
          { titre: "Vérifier le versant médical", texte: "Douleur pendant les rapports (jamais « normale », chez la femme comme chez l'homme), troubles de l'érection, chute de libido sous médicament (antidépresseurs notamment) ou après un accouchement : autant de motifs de consultation médicale simples, fréquents et pris en charge — médecin traitant, gynécologue, ou médecin sexologue." }
        ],
        objectif: "Sur 6 semaines : une conversation intime « à froid » par quinzaine + protection de moments de tendresse sans agenda + consultation si un frein médical est suspecté. Refaites le test ensuite — les scores bougent vite quand le dialogue s'installe.",
        ressources: [
          "Mallory, A. B., Stanton, A. M., & Handy, A. B. (2019). Couples' sexual communication and dimensions of sexual function: a meta-analysis. Journal of Sex Research, 56(7), 882-898.",
          "Lawrance, K., & Byers, E. S. (1995). Sexual satisfaction in long-term heterosexual relationships. Personal Relationships, 2(4), 267-285.",
          "Basson, R. (2000). The female sexual response: A different model. Journal of Sex & Marital Therapy, 26(1), 51-65.",
          "Nagoski, E. « Come As You Are » (2015 ; trad. fr. « Jouissez comme vous êtes ») — synthèse grand public de la recherche, notamment sur le désir réactif.",
          "Numéro national « Sexualités, contraception, IVG » : 0 800 08 11 11 (gratuit, anonyme) — questionsexualite.fr (site public officiel)."
        ],
        consulter: "Douleur, trouble persistant, ou détresse liée à la sexualité : médecin traitant ou consultation de sexologie (médecins sexologues, souvent en CHU). C'est une médecine comme une autre, sans jugement."
      }
    }
  },
  source: {
    instrument: "Global Measure of Sexual Satisfaction (GMSEX)",
    statut: "Instrument de recherche librement utilisé dans la littérature. Adaptation française réalisée pour cette application (échelle sémantique différentielle adaptée en libellés).",
    refs: [
      "Lawrance, K., & Byers, E. S. (1995). Personal Relationships, 2(4), 267-285.",
      "Byers, E. S. (2005). Relationship satisfaction and sexual satisfaction: a longitudinal study. Journal of Sex Research, 42(2)."
    ]
  }
}
];

TESTS = TESTS_1.concat(TESTS_2).concat(TESTS_3).concat(TESTS_4);
