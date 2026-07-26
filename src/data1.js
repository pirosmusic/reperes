/* ============================================================
   DONNÉES — PARTIE 1 : Big Five (Mini-IPIP), Estime de soi (Rosenberg),
   Anxiété (GAD-7), Humeur (PHQ-9)
   Tous les instruments : libres de droits ou d'usage libre, références citées.
   ============================================================ */

var ECH_ACCORD5 = { labels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Neutre", "Plutôt d'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5] };
var ECH_FREQ4 = { labels: ["Jamais", "Plusieurs jours", "Plus de la moitié des jours", "Presque tous les jours"], valeurs: [0, 1, 2, 3] };

var TESTS_1 = [

/* ---------------- 1. BIG FIVE — Mini-IPIP ---------------- */
{
  id: "bigfive",
  nom: "Personnalité : les Big Five",
  sigle: "Mini-IPIP · 20 items",
  cat: "Personnalité",
  duree: "4-5 min",
  radar: true,
  intro: "Le modèle en cinq facteurs (Big Five) est le modèle de la personnalité le plus solide et le plus répliqué de la psychologie scientifique — à l'opposé des typologies non validées (MBTI, « types » des quizz en ligne). Il décrit cinq grandes dimensions continues, sans « bon » ni « mauvais » profil.",
  consigne: "Indiquez à quel point chaque affirmation vous décrit tel(le) que vous êtes généralement, en vous comparant à des personnes de votre âge.",
  echelle: ECH_ACCORD5,
  items: [
    { t: "Je suis le boute-en-train des soirées", d: "E" },
    { t: "Je compatis aux sentiments des autres", d: "A" },
    { t: "Je fais les tâches ménagères et corvées sans tarder", d: "C" },
    { t: "J'ai de fréquentes sautes d'humeur", d: "N" },
    { t: "J'ai une imagination débordante", d: "O" },
    { t: "Je ne parle pas beaucoup", d: "E", r: true },
    { t: "Les problèmes des autres ne m'intéressent pas", d: "A", r: true },
    { t: "J'oublie souvent de remettre les choses à leur place", d: "C", r: true },
    { t: "Je suis détendu(e) la plupart du temps", d: "N", r: true },
    { t: "Les idées abstraites ne m'intéressent pas", d: "O", r: true },
    { t: "Dans les soirées, je parle avec beaucoup de personnes différentes", d: "E" },
    { t: "Je ressens les émotions des autres", d: "A" },
    { t: "J'aime l'ordre", d: "C" },
    { t: "Je me contrarie facilement", d: "N" },
    { t: "J'ai du mal à comprendre les idées abstraites", d: "O", r: true },
    { t: "Je reste en retrait", d: "E", r: true },
    { t: "Je ne m'intéresse pas vraiment aux autres", d: "A", r: true },
    { t: "Je mets la pagaille", d: "C", r: true },
    { t: "Je me sens rarement cafardeux(se)", d: "N", r: true },
    { t: "Je n'ai pas une bonne imagination", d: "O", r: true }
  ],
  scoringNote: "Score = moyenne des 4 items de chaque dimension (items inversés recodés), de 1 à 5. Il n'existe pas de normes officielles françaises pour le Mini-IPIP : les repères « plutôt bas / moyen / plutôt haut » sont indicatifs (coupures à 2,5 et 3,5).",
  dims: {
    E: {
      nom: "Extraversion", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "Tendance à rechercher la stimulation sociale, à s'exprimer, à ressentir des émotions positives en groupe. Les introvertis ne sont ni timides ni asociaux : ils rechargent leurs batteries autrement.",
      bandes: [
        { max: 2.5, label: "Plutôt introverti(e)", niveau: "neutre", texte: "Vous préférez probablement les échanges en petit comité, la profondeur à la quantité, et vous avez besoin de temps seul(e) pour récupérer. C'est un fonctionnement, pas un défaut." },
        { max: 3.5, label: "Ambiverti(e)", niveau: "neutre", texte: "Vous alternez selon le contexte entre sociabilité et retrait. C'est le profil le plus fréquent en population générale." },
        { max: 5, label: "Plutôt extraverti(e)", niveau: "neutre", texte: "Le contact social vous stimule et vous nourrit. Veillez simplement à préserver des temps de récupération et d'écoute." }
      ],
      amelioration: {
        intro: "L'extraversion n'a pas à « augmenter » : la question utile est de savoir si votre vie sociale actuelle vous convient. La recherche (Roberts et al., 2017) montre qu'on peut infléchir volontairement ses traits, modestement mais durablement.",
        axes: [
          { titre: "Si vous voulez plus d'aisance sociale", texte: "Exposition graduée et régulière : des micro-interactions faciles (saluer, poser une question à un commerçant), puis des situations plus engageantes. La régularité compte plus que l'intensité." },
          { titre: "Si vous êtes très extraverti(e)", texte: "Travaillez l'écoute active (reformuler avant de répondre) et tolérez les silences : c'est ce qui transforme la sociabilité en qualité relationnelle." },
          { titre: "Distinguer introversion et anxiété sociale", texte: "Préférer la solitude est un trait ; éviter les autres par peur du jugement est de l'anxiété, qui se traite très bien (TCC). Si l'évitement vous fait souffrir, voyez le test d'anxiété et un professionnel." }
        ],
        objectif: "Choisissez UN comportement concret (ex. : proposer un café à un collègue par semaine), tenez-le 6 semaines, puis refaites le test. Visez un changement de comportement qui vous convient, pas un score.",
        ressources: [
          "Roberts, B. W. et al. (2017). A systematic review of personality trait change through intervention. Psychological Bulletin, 143(2).",
          "Susan Cain, « La force des discrets » (JC Lattès) — sur la valeur de l'introversion.",
          "Annuaire des thérapeutes TCC : aftcc.org (si anxiété sociale)."
        ]
      }
    },
    A: {
      nom: "Agréabilité", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "Tendance à la coopération, à la confiance, à l'empathie. Un score élevé facilite les relations ; un score bas peut aider à négocier et à dire non — chaque pôle a ses forces et ses angles morts.",
      bandes: [
        { max: 2.5, label: "Plutôt bas", niveau: "neutre", texte: "Vous êtes probablement direct(e), compétitif(ve), peu enclin(e) à vous laisser marcher dessus. Angle mort possible : la dureté perçue par les autres, qui peut coûter cher relationnellement." },
        { max: 3.5, label: "Moyen", niveau: "neutre", texte: "Équilibre entre coopération et affirmation de soi." },
        { max: 5, label: "Plutôt haut", niveau: "neutre", texte: "L'harmonie et l'entraide comptent beaucoup pour vous. Angle mort possible : difficulté à dire non, à défendre vos intérêts, tendance à passer après les autres." }
      ],
      amelioration: {
        axes: [
          { titre: "Si score bas : entraîner l'empathie délibérée", texte: "Avant de répondre dans un désaccord, reformulez la position de l'autre jusqu'à ce qu'il la valide (« steelmanning »). L'empathie est une compétence entraînable, pas un don." },
          { titre: "Si score haut : affirmation de soi", texte: "L'assertivité s'apprend (protocoles TCC bien validés) : exprimer un refus ou une demande de façon claire et non agressive, en commençant par des situations à faible enjeu." },
          { titre: "Attention au lien avec l'estime de soi", texte: "Dire oui à tout pour être apprécié(e) relève souvent de l'estime de soi plus que de la gentillesse. Voyez le test de Rosenberg si c'est votre cas." }
        ],
        objectif: "Score bas : une reformulation empathique par jour pendant 3 semaines. Score haut : un « non » posé et argumenté par semaine. Refaites le test après 6 semaines.",
        ressources: [
          "Fanget, F. « Affirmez-vous ! » (Odile Jacob) — référence francophone de l'assertivité, base TCC.",
          "Christophe André & Patrick Légeron, « La peur des autres » (Odile Jacob)."
        ]
      }
    },
    C: {
      nom: "Conscienciosité", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "Organisation, autodiscipline, fiabilité, orientation vers les buts. C'est le trait le plus prédictif de la réussite professionnelle et de la santé à long terme dans les études longitudinales.",
      bandes: [
        { max: 2.5, label: "Plutôt bas", niveau: "neutre", texte: "Spontanéité et flexibilité, mais probablement des difficultés d'organisation, de procrastination ou de suivi des engagements qui peuvent vous coûter." },
        { max: 3.5, label: "Moyen", niveau: "neutre", texte: "Organisation correcte sans rigidité." },
        { max: 5, label: "Plutôt haut", niveau: "neutre", texte: "Discipline et fiabilité élevées. Angle mort possible : perfectionnisme, rigidité, difficulté à déléguer ou à lâcher prise." }
      ],
      amelioration: {
        intro: "Bonne nouvelle : la conscienciosité est l'un des traits qui répond le mieux aux interventions volontaires, surtout via les habitudes et l'environnement plutôt que la « volonté ».",
        axes: [
          { titre: "Intentions d'implémentation", texte: "La technique la plus validée (Gollwitzer, méta-analyses) : formuler « SI situation X, ALORS je fais Y » (« si je pose mon téléphone sur la table du salon, alors je le mets en charge dans l'entrée »). Double environ le taux de suivi des objectifs." },
          { titre: "Réduire la friction, pas augmenter l'effort", texte: "Préparez l'environnement : sortir les affaires de sport la veille, listes de contrôle, rappels. La discipline des gens « disciplinés » est surtout un bon aménagement de l'environnement." },
          { titre: "Si perfectionnisme", texte: "Fixez des critères de « suffisamment bien » AVANT de commencer une tâche, et un temps maximal. Le perfectionnisme clinique se travaille bien en TCC." }
        ],
        objectif: "Choisissez UNE habitude clé, écrivez son plan « si… alors… », suivez-la sur un calendrier visible. Objectif : 80 % de jours tenus sur 6 semaines, puis refaites le test.",
        ressources: [
          "Gollwitzer, P. & Sheeran, P. (2006). Implementation intentions and goal achievement. Advances in Experimental Social Psychology, 38.",
          "Duhigg, C. « Le pouvoir des habitudes » (Flammarion) — vulgarisation correcte des mécanismes.",
          "Sur la procrastination : Steel, P. (2007). The nature of procrastination. Psychological Bulletin, 133(1)."
        ]
      }
    },
    N: {
      nom: "Névrosisme (instabilité émotionnelle)", format: "moyenne", min: 1, max: 5, valence: false,
      descriptif: "Tendance à ressentir des émotions négatives (inquiétude, irritabilité, humeur changeante). C'est la dimension la plus liée au bien-être — et celle qui se travaille le mieux en psychothérapie.",
      bandes: [
        { max: 2.5, label: "Stabilité émotionnelle élevée", niveau: "ok", texte: "Vous encaissez bien les contrariétés et gardez un moral stable. C'est un facteur protecteur pour la santé mentale et physique." },
        { max: 3.5, label: "Moyen", niveau: "neutre", texte: "Réactivité émotionnelle dans la moyenne : des hauts et des bas normaux, sans vulnérabilité marquée." },
        { max: 5, label: "Réactivité émotionnelle élevée", niveau: "attention", texte: "Vous ressentez les émotions négatives plus fort et plus souvent que la moyenne. Ce n'est pas une maladie, mais c'est un facteur de vulnérabilité au stress, à l'anxiété et à la dépression — et ça se travaille très bien." }
      ],
      amelioration: {
        intro: "Le névrosisme est le trait qui diminue le plus en psychothérapie (Roberts et al., 2017 : effets significatifs en quelques semaines, maintenus des années). C'est l'axe d'amélioration au meilleur rendement de toute la psychologie.",
        axes: [
          { titre: "Thérapies cognitivo-comportementales (TCC)", texte: "Apprendre à repérer et à réévaluer les pensées automatiques catastrophistes. C'est l'approche la plus validée pour réduire la réactivité émotionnelle." },
          { titre: "Activité physique régulière", texte: "L'expertise collective INSERM (2019) confirme un effet anxiolytique et antidépresseur de l'activité d'endurance régulière (30 min, 3-5 fois/semaine, intensité modérée)." },
          { titre: "Méditation de pleine conscience", texte: "Les programmes structurés type MBSR/MBCT (8 semaines) réduisent la réactivité au stress avec un niveau de preuve correct — préférez-les aux applis gadgets." },
          { titre: "Sommeil", texte: "La privation de sommeil amplifie fortement la réactivité émotionnelle. Régularité des horaires d'abord, quantité ensuite (7-9 h)." }
        ],
        objectif: "Complétez les tests GAD-7, PHQ-9 et stress (PSS-10) pour préciser où se loge votre réactivité. Puis : activité physique 3×/semaine + une technique TCC (journal des pensées) pendant 8 semaines, et refaites le test. Si le score reste haut avec une souffrance réelle, consultez — c'est précisément ce que la thérapie sait faire.",
        ressources: [
          "INSERM (2019). Activité physique : prévention et traitement des maladies chroniques (expertise collective).",
          "Dispositif « Mon soutien psy » (ameli.fr) : séances de psychologue remboursées sur adressage.",
          "Annuaire TCC : aftcc.org · Burns, D. « Être bien dans sa peau » (auto-aide TCC validée par essais cliniques)."
        ],
        consulter: "Si vos émotions négatives perturbent sommeil, travail ou relations depuis plus de quelques semaines, parlez-en à votre médecin traitant."
      }
    },
    O: {
      nom: "Ouverture (imagination / intellect)", format: "moyenne", min: 1, max: 5, valence: null,
      descriptif: "Curiosité intellectuelle, goût pour les idées abstraites, l'imagination, l'esthétique et la nouveauté.",
      bandes: [
        { max: 2.5, label: "Plutôt bas", niveau: "neutre", texte: "Vous préférez le concret, le pratique, l'éprouvé. Force : pragmatisme et constance. Angle mort possible : rester dans sa zone de confort intellectuelle." },
        { max: 3.5, label: "Moyen", niveau: "neutre", texte: "Curiosité sélective : ouvert(e) à la nouveauté quand elle a du sens pour vous." },
        { max: 5, label: "Plutôt haut", niveau: "neutre", texte: "Les idées, l'art et la nouveauté vous nourrissent. Angle mort possible : dispersion, difficulté à finir ce qui est commencé." }
      ],
      amelioration: {
        axes: [
          { titre: "Curiosité délibérée", texte: "Un contenu exigeant par semaine hors de vos sujets habituels (essai, documentaire, exposition) — la nouveauté entretient la plasticité cognitive." },
          { titre: "Si dispersion", texte: "Couplage avec la conscienciosité : règle « je finis avant d'ouvrir » ou quota de projets simultanés (max 2-3)." },
          { titre: "Esprit critique", texte: "L'ouverture sans esprit critique expose aux pseudosciences. Complétez avec la page « Méthode » de cette app : les critères d'une information fiable." }
        ],
        objectif: "Pas de score cible : choisissez une pratique (lecture, musée, apprentissage d'une compétence) et tenez-la un mois.",
        ressources: [
          "Universalis et CNRS Le Journal pour nourrir la curiosité avec des sources fiables.",
          "Bronner, G. « Apocalypse cognitive » (PUF) — sur l'économie de l'attention."
        ]
      }
    }
  },
  source: {
    instrument: "Mini-IPIP (20 items), forme courte validée de l'IPIP Big Five",
    statut: "Domaine public — International Personality Item Pool (ipip.ori.org). Traduction française réalisée pour cette application à partir des items originaux.",
    refs: [
      "Donnellan, M. B., Oswald, F. L., Baird, B. M., & Lucas, R. E. (2006). The Mini-IPIP scales: tiny-yet-effective measures of the Big Five. Psychological Assessment, 18(2), 192-203.",
      "Goldberg, L. R. (1999). A broad-bandwidth, public domain, personality inventory (IPIP). ipip.ori.org.",
      "John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy. Handbook of Personality."
    ]
  }
},

/* ---------------- 2. ESTIME DE SOI — ROSENBERG ---------------- */
{
  id: "rosenberg",
  nom: "Estime de soi",
  sigle: "Échelle de Rosenberg · 10 items",
  cat: "Soi",
  duree: "2 min",
  intro: "L'échelle de Rosenberg (1965) est l'outil de mesure de l'estime de soi globale le plus utilisé au monde, traduit et validé en français (Vallières & Vallerand, 1990). Dix items, un score de 10 à 40.",
  consigne: "Indiquez à quel point vous êtes en accord avec chaque affirmation, telle que vous vous sentez en général.",
  echelle: { labels: ["Tout à fait en désaccord", "Plutôt en désaccord", "Plutôt en accord", "Tout à fait en accord"], valeurs: [1, 2, 3, 4] },
  items: [
    { t: "Je pense que je suis une personne de valeur, au moins égale à n'importe qui d'autre", d: "S" },
    { t: "Je pense que je possède un certain nombre de belles qualités", d: "S" },
    { t: "Tout bien considéré, je suis porté(e) à me considérer comme un(e) raté(e)", d: "S", r: true },
    { t: "Je suis capable de faire les choses aussi bien que la majorité des gens", d: "S" },
    { t: "Je sens peu de raisons d'être fier(ère) de moi", d: "S", r: true },
    { t: "J'ai une attitude positive vis-à-vis de moi-même", d: "S" },
    { t: "Dans l'ensemble, je suis satisfait(e) de moi", d: "S" },
    { t: "J'aimerais avoir plus de respect pour moi-même", d: "S", r: true },
    { t: "Parfois, je me sens vraiment inutile", d: "S", r: true },
    { t: "Il m'arrive de penser que je suis un(e) bon(ne) à rien", d: "S", r: true }
  ],
  scoringNote: "Somme des 10 items (items négatifs recodés), de 10 à 40. Repères usuels de la version francophone : < 25 très faible · 25-30 faible · 31-34 moyenne · 35-39 forte · 40 très forte. Ce sont des repères indicatifs, pas des seuils diagnostiques.",
  dims: {
    S: {
      nom: "Estime de soi globale", format: "somme", min: 10, max: 40, valence: true,
      descriptif: "Évaluation globale que vous portez sur votre propre valeur. Elle fluctue avec les événements ; ce score est une photographie, pas une sentence.",
      bandes: [
        { max: 24, label: "Très faible", niveau: "alerte", texte: "Votre regard sur vous-même est durement négatif. Ce n'est ni une fatalité ni une vérité objective : l'estime de soi se reconstruit, et c'est un motif tout à fait légitime de consultation. Une estime très basse accompagne souvent un épisode anxieux ou dépressif — faites aussi les tests GAD-7 et PHQ-9." },
        { max: 30, label: "Faible", niveau: "attention", texte: "Vous doutez de votre valeur plus souvent qu'à votre tour : autocritique forte, difficulté à recevoir les compliments, peur de décevoir. Les axes ci-dessous sont directement actionnables." },
        { max: 34, label: "Dans la moyenne", niveau: "ok", texte: "Estime de soi comparable à la majorité des gens : globalement positive, avec des fluctuations normales selon les succès et les échecs." },
        { max: 39, label: "Forte", niveau: "ok", texte: "Regard sur vous-même solide et bienveillant, bon facteur de protection psychologique." },
        { max: 40, label: "Très forte", niveau: "ok", texte: "Estime de soi très élevée. Si elle s'accompagne d'une forte dépendance au regard des autres ou d'une difficulté à entendre la critique, voyez la nuance entre estime solide et estime fragile dans les axes ci-dessous." }
      ],
      amelioration: {
        intro: "La recherche distingue l'estime de soi SOLIDE (stable, peu dépendante de la validation externe) de l'estime FRAGILE (haute mais réactive). L'objectif n'est pas de « se trouver génial » mais de se traiter comme on traiterait un(e) ami(e).",
        axes: [
          { titre: "Réduire l'autocritique par l'auto-compassion", texte: "L'approche de Kristin Neff (bien étayée par la recherche) : quand vous échouez, notez ce que vous vous dites, puis réécrivez-le comme vous le diriez à un(e) ami(e) proche. Exercice contre-intuitif mais efficace sur l'autocritique chronique." },
          { titre: "Expériences de maîtrise", texte: "L'estime durable vient des actes, pas des affirmations positives devant le miroir (dont l'efficacité n'est pas démontrée, voire inverse chez les personnes à basse estime — Wood et al., 2009). Fixez des défis modestes et réussissables, et tenez un registre écrit de ce que vous avez accompli." },
          { titre: "Agir selon ses valeurs", texte: "Identifiez 2-3 valeurs centrales (honnêteté, soin des autres, création…) et posez chaque semaine une action qui les incarne. L'estime suit la cohérence entre valeurs et actes." },
          { titre: "Hygiène de la comparaison sociale", texte: "Limitez l'exposition aux vitrines de réussite (réseaux sociaux) : la comparaison ascendante permanente est un des facteurs les mieux documentés d'érosion de l'estime de soi." }
        ],
        objectif: "Pendant 6 semaines : registre quotidien de 3 actions accomplies (même minuscules) + 1 exercice d'auto-compassion par situation d'échec. Visez d'abord un passage dans la bande supérieure, puis la zone 31-39. Refaites le test toutes les 4-6 semaines.",
        ressources: [
          "Christophe André & François Lelord, « L'estime de soi : s'aimer pour mieux vivre avec les autres » (Odile Jacob) — LA référence francophone.",
          "Neff, K. « S'aimer : comment se réconcilier avec soi-même » (Belfond).",
          "Fanget, F. « Oser : thérapie de la confiance en soi » (Odile Jacob).",
          "Vallières, E. F., & Vallerand, R. J. (1990). Traduction et validation canadienne-française de l'échelle de l'estime de soi de Rosenberg. International Journal of Psychology, 25, 305-316."
        ],
        consulter: "Si l'estime très basse s'accompagne de tristesse durable, de retrait ou d'idées noires : médecin traitant ou psychologue (dispositif « Mon soutien psy », séances remboursées). L'estime de soi répond bien aux TCC."
      }
    }
  },
  source: {
    instrument: "Rosenberg Self-Esteem Scale (RSE), version francophone",
    statut: "Libre d'utilisation (la famille Rosenberg autorise l'usage sans permission). Version française validée.",
    refs: [
      "Rosenberg, M. (1965). Society and the Adolescent Self-Image. Princeton University Press.",
      "Vallières, E. F., & Vallerand, R. J. (1990). Traduction et validation canadienne-française de l'échelle de l'estime de soi de Rosenberg. International Journal of Psychology, 25, 305-316."
    ]
  }
},

/* ---------------- 3. ANXIÉTÉ — GAD-7 ---------------- */
{
  id: "gad7",
  nom: "Anxiété",
  sigle: "GAD-7 · 7 items",
  cat: "Clinique — repérage",
  duree: "1-2 min",
  badge: "clinique",
  intro: "Le GAD-7 (Spitzer et al., 2006) est le questionnaire de repérage de l'anxiété le plus utilisé en médecine, libre de droits, validé en français. C'est un outil de REPÉRAGE : il indique s'il est pertinent d'en parler à un professionnel, il ne pose pas de diagnostic.",
  consigne: "Au cours des 14 derniers jours, à quelle fréquence avez-vous été gêné(e) par les problèmes suivants ?",
  echelle: ECH_FREQ4,
  items: [
    { t: "Sentiment de nervosité, d'anxiété ou de tension", d: "A" },
    { t: "Incapacité à arrêter de vous inquiéter ou à contrôler vos inquiétudes", d: "A" },
    { t: "Inquiétude excessive à propos de différentes choses", d: "A" },
    { t: "Difficulté à vous détendre", d: "A" },
    { t: "Agitation telle qu'il est difficile de rester tranquille", d: "A" },
    { t: "Tendance à être facilement contrarié(e) ou irritable", d: "A" },
    { t: "Sentiment de peur, comme si quelque chose de terrible risquait de se produire", d: "A" }
  ],
  scoringNote: "Somme des 7 items, de 0 à 21. Seuils publiés (Spitzer et al., 2006) : 0-4 minimale · 5-9 légère · 10-14 modérée · 15-21 sévère. Un score ≥ 10 justifie d'en parler à un professionnel.",
  dims: {
    A: {
      nom: "Anxiété (2 dernières semaines)", format: "somme", min: 0, max: 21, valence: false,
      descriptif: "Intensité des symptômes anxieux sur les 14 derniers jours. L'anxiété est une émotion normale ; elle devient un problème quand elle est excessive, incontrôlable et durable.",
      bandes: [
        { max: 4, label: "Anxiété minimale", niveau: "ok", texte: "Niveau d'anxiété faible sur la période. Rien à signaler de ce côté — entretenez ce qui vous fait du bien (sommeil, activité physique, liens sociaux)." },
        { max: 9, label: "Anxiété légère", niveau: "attention", texte: "Symptômes présents mais limités. Souvent lié à une période de stress : les axes ci-dessous (hygiène de vie + techniques TCC de base) suffisent généralement. Surveillez l'évolution en refaisant le test dans 2-4 semaines." },
        { max: 14, label: "Anxiété modérée", niveau: "alerte", texte: "Score au-dessus du seuil clinique de repérage (≥ 10) : il est recommandé d'en parler à votre médecin traitant ou à un psychologue. Ce niveau d'anxiété se traite très efficacement (TCC en première intention)." },
        { max: 21, label: "Anxiété sévère", niveau: "alerte", texte: "Symptômes anxieux importants. Consultez sans attendre votre médecin traitant ou un psychologue : les prises en charge validées (TCC, parfois traitement médicamenteux) donnent de très bons résultats. Vous n'avez pas à « tenir » comme ça." }
      ],
      amelioration: {
        intro: "L'anxiété est l'un des troubles les mieux traités de toute la médecine. Première intention selon la Haute Autorité de Santé : les thérapies cognitivo-comportementales.",
        axes: [
          { titre: "Restructuration cognitive (TCC)", texte: "Noter l'inquiétude, estimer sa probabilité réelle, chercher les preuves pour/contre, formuler une pensée alternative réaliste. Un journal des pensées 10 min/jour change la relation aux inquiétudes en quelques semaines." },
          { titre: "Temps d'inquiétude programmé", texte: "Technique validée pour l'inquiétude chronique : réserver 20 min/jour à heure fixe pour s'inquiéter « à fond » par écrit, et reporter toute inquiétude surgissant hors créneau. Réduit la rumination diffuse." },
          { titre: "Exposition plutôt qu'évitement", texte: "L'évitement soulage à court terme et aggrave à long terme — c'est le moteur central de l'anxiété. Listez ce que vous évitez, classez du plus facile au plus dur, et ré-affrontez progressivement." },
          { titre: "Corps : respiration lente et activité physique", texte: "Respiration lente (~6 cycles/min, 5-10 min) pour l'apaisement immédiat ; endurance régulière pour le fond anxieux (effet démontré, INSERM 2019). Réduisez aussi caféine et alcool, anxiogènes sous-estimés." }
        ],
        objectif: "Objectif chiffré : repasser sous 5 (anxiété minimale) ou au minimum sous 10. Protocole 8 semaines : journal des pensées quotidien + 3 séances d'activité physique/semaine + réduction caféine, puis re-test toutes les 2 semaines pour suivre la courbe.",
        ressources: [
          "HAS — Troubles anxieux graves : recommandations de prise en charge (has-sante.fr).",
          "Ameli.fr — dossier « Troubles anxieux » et dispositif « Mon soutien psy » (séances de psychologue remboursées).",
          "Christophe André, « Psychologie de la peur : craintes, angoisses et phobies » (Odile Jacob).",
          "Annuaire de thérapeutes TCC : aftcc.org.",
          "Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. Archives of Internal Medicine, 166(10), 1092-1097."
        ],
        consulter: "Score ≥ 10, ou anxiété qui perturbe sommeil/travail/relations, ou attaques de panique : médecin traitant en première ligne. C'est fréquent (environ 1 personne sur 5 au cours de la vie) et ça se soigne."
      }
    }
  },
  source: {
    instrument: "Generalized Anxiety Disorder 7-item scale (GAD-7)",
    statut: "Libre d'utilisation (développé avec Pfizer, aucune permission requise). Version française validée.",
    refs: [
      "Spitzer, R. L., Kroenke, K., Williams, J. B., & Löwe, B. (2006). Archives of Internal Medicine, 166(10), 1092-1097.",
      "Micoulaud-Franchi, J.-A. et al. (2016). Validation française du GAD-7."
    ]
  }
},

/* ---------------- 4. HUMEUR — PHQ-9 ---------------- */
{
  id: "phq9",
  nom: "Humeur dépressive",
  sigle: "PHQ-9 · 9 items",
  cat: "Clinique — repérage",
  duree: "2 min",
  badge: "clinique",
  avertissement: "Outil de repérage utilisé par les médecins, pas un diagnostic. Un score élevé signifie « il est pertinent de consulter », jamais « vous êtes dépressif(ve) ». Si vous traversez un moment difficile, des ressources d'aide figurent en bas des résultats.",
  intro: "Le PHQ-9 (Kroenke, Spitzer & Williams, 2001) est l'auto-questionnaire de repérage de la dépression le plus validé au monde, libre de droits, utilisé quotidiennement en médecine générale. Il balaie les 9 symptômes du diagnostic d'épisode dépressif.",
  consigne: "Au cours des 14 derniers jours, à quelle fréquence avez-vous été gêné(e) par les problèmes suivants ?",
  echelle: ECH_FREQ4,
  items: [
    { t: "Peu d'intérêt ou de plaisir à faire les choses", d: "D" },
    { t: "Sentiment d'être triste, déprimé(e) ou désespéré(e)", d: "D" },
    { t: "Difficultés à vous endormir ou à rester endormi(e), ou au contraire trop dormir", d: "D" },
    { t: "Sentiment de fatigue ou manque d'énergie", d: "D" },
    { t: "Peu d'appétit, ou au contraire trop manger", d: "D" },
    { t: "Mauvaise opinion de vous-même — sentiment d'être nul(le), d'avoir déçu votre famille ou de vous être déçu(e) vous-même", d: "D" },
    { t: "Difficultés à vous concentrer (par exemple pour lire ou regarder un film)", d: "D" },
    { t: "Lenteur inhabituelle pour bouger ou parler, remarquable par les autres — ou au contraire agitation, difficulté à tenir en place", d: "D" },
    { t: "Pensées qu'il vaudrait mieux mourir, ou envie de vous faire du mal d'une manière ou d'une autre", d: "D" }
  ],
  flagCrise: { itemIndex: 8, seuil: 1 },
  scoringNote: "Somme des 9 items, de 0 à 27. Seuils publiés (Kroenke et al., 2001) : 0-4 minimale · 5-9 légère · 10-14 modérée · 15-19 modérément sévère · 20-27 sévère. Un score ≥ 10 justifie une consultation.",
  dims: {
    D: {
      nom: "Symptômes dépressifs (2 dernières semaines)", format: "somme", min: 0, max: 27, valence: false,
      descriptif: "Intensité des symptômes dépressifs sur les 14 derniers jours. La déprime passagère est universelle ; l'épisode dépressif est autre chose : durable, envahissant, et il se soigne.",
      bandes: [
        { max: 4, label: "Symptômes minimaux", niveau: "ok", texte: "Pas de signal dépressif notable sur la période. Entretenez les fondamentaux : sommeil régulier, activité physique, liens sociaux, activités qui ont du sens pour vous." },
        { max: 9, label: "Symptômes légers", niveau: "attention", texte: "Quelques symptômes présents — souvent une période de creux ou de fatigue. Les axes ci-dessous (activation comportementale, hygiène de vie) sont efficaces à ce stade. Refaites le test dans 2 semaines : c'est l'ÉVOLUTION qui compte." },
        { max: 14, label: "Symptômes modérés", niveau: "alerte", texte: "Score au-dessus du seuil de repérage (≥ 10) : parlez-en à votre médecin traitant ou à un psychologue. Ce n'est ni une faiblesse ni un caprice — et les prises en charge validées sont efficaces." },
        { max: 19, label: "Modérément sévères", niveau: "alerte", texte: "Symptômes importants qui méritent une consultation rapide (médecin traitant en première ligne). La dépression se traite : psychothérapie structurée, parfois médicament, souvent les deux." },
        { max: 27, label: "Sévères", niveau: "alerte", texte: "Symptômes majeurs : consultez rapidement — médecin traitant, ou 3114 si des idées suicidaires sont présentes (24h/24, gratuit). Vous n'êtes pas seul(e), et cet état, aussi écrasant soit-il, est une condition qui se soigne, pas une vérité sur vous ou sur l'avenir." }
      ],
      amelioration: {
        intro: "Ce qui a le plus de preuves contre les symptômes dépressifs légers à modérés : l'activation comportementale, l'activité physique et les TCC. Au-delà, l'accompagnement professionnel est la voie efficace — ces axes restent utiles en complément, jamais en remplacement.",
        axes: [
          { titre: "Activation comportementale", texte: "La dépression pousse à tout arrêter, et l'inactivité aggrave la dépression. Le protocole le plus validé consiste à re-planifier des activités (plaisir, maîtrise, lien social) en commençant ridiculement petit : 10 minutes de marche comptent. L'action précède la motivation, pas l'inverse." },
          { titre: "Activité physique", texte: "Effet antidépresseur démontré pour les formes légères à modérées (INSERM 2019, méta-analyses) : viser progressivement 30 min d'endurance modérée, 3-5 fois/semaine. Commencer par ce qui est faisable aujourd'hui." },
          { titre: "Rythme et sommeil", texte: "Lever à heure fixe (même le week-end), lumière du jour le matin, pas d'alcool le soir — la régularité circadienne est un levier antidépresseur sous-estimé." },
          { titre: "Lien social minimal garanti", texte: "Un contact réel par jour (appel, café, message vocal), même bref, même sans envie. L'isolement est à la fois symptôme et carburant de la dépression." }
        ],
        objectif: "Objectif : repasser sous 10, puis sous 5. Protocole : 3 activités planifiées/jour (minuscules au début) + activité physique progressive + re-test tous les 14 jours pour tracer la courbe. Si pas d'amélioration après 4 semaines, ou si score ≥ 15 d'emblée : consultation, sans attendre.",
        ressources: [
          "3114 — numéro national de prévention du suicide, 24h/24, 7j/7, gratuit (3114.fr).",
          "Ameli.fr — dossier « Dépression » et « Mon soutien psy » (séances de psychologue remboursées).",
          "HAS — Épisode dépressif caractérisé de l'adulte : prise en charge (has-sante.fr).",
          "Psycom.org — information fiable et indépendante sur la santé mentale.",
          "Burns, D. « Être bien dans sa peau » (auto-aide TCC dont l'efficacité a été testée en essais cliniques).",
          "Kroenke, K., Spitzer, R. L., & Williams, J. B. (2001). The PHQ-9: validity of a brief depression severity measure. Journal of General Internal Medicine, 16(9), 606-613."
        ],
        consulter: "Score ≥ 10, ou tristesse/perte d'intérêt quasi quotidienne depuis plus de 2 semaines : médecin traitant. Idées suicidaires, même fugaces : 3114, tout de suite — c'est exactement leur rôle, ils écoutent et orientent sans juger."
      }
    }
  },
  source: {
    instrument: "Patient Health Questionnaire 9 (PHQ-9)",
    statut: "Libre d'utilisation (développé avec Pfizer, aucune permission requise). Version française validée, utilisée en médecine générale.",
    refs: [
      "Kroenke, K., Spitzer, R. L., & Williams, J. B. (2001). Journal of General Internal Medicine, 16(9), 606-613.",
      "Arthurs, E. et al. (2012). Validation française du PHQ-9."
    ]
  }
}
];
