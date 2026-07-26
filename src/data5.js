/* ============================================================
   DONNÉES — PARTIE 5 : versions longues (Big Five, ECR, CSI, UCLA)
   Ajoutées en complément des versions courtes déjà présentes dans
   data1-4.js — jamais en remplacement. Réutilisent le même moteur
   de scoring (voir core.js), aucune modification du moteur requise.
   ============================================================ */

var TESTS_5 = [

/* ---------------- 17. BIG FIVE COMPLET — IPIP-50 ---------------- */
{
  id: "bigfive50",
  nom: "Personnalité : les Big Five (version complète)",
  sigle: "IPIP-50 · 50 items",
  cat: "Personnalité",
  duree: "10-12 min",
  intro: "Version approfondie du test Big Five rapide (Mini-IPIP) : dix items par trait au lieu de quatre, pour un score plus précis et plus stable dans le temps. Mêmes cinq dimensions, même absence de « bon » ou « mauvais » profil — juste plus de nuance. Si vous avez peu de temps, la version rapide suffit ; celle-ci est utile si vous voulez affiner un résultat ou suivre l'évolution d'un trait avec plus de précision.",
  consigne: "Indiquez à quel point chaque affirmation vous décrit tel(le) que vous êtes généralement, en vous comparant à des personnes de votre âge.",
  echelle: ECH_ACCORD5,
  items: [
    { t: "Je suis le boute-en-train des soirées", d: "E" },
    { t: "Je me soucie peu des autres", d: "A", r: true },
    { t: "Je suis toujours bien préparé(e)", d: "C" },
    { t: "Je stresse facilement", d: "N" },
    { t: "J'ai un vocabulaire riche", d: "O" },
    { t: "Je ne parle pas beaucoup", d: "E", r: true },
    { t: "Je m'intéresse aux gens", d: "A" },
    { t: "Je laisse traîner mes affaires", d: "C", r: true },
    { t: "Je suis détendu(e) la plupart du temps", d: "N", r: true },
    { t: "Les idées abstraites ne m'intéressent pas", d: "O", r: true },
    { t: "Je me sens à l'aise avec les gens", d: "E" },
    { t: "J'insulte les gens", d: "A", r: true },
    { t: "Je suis attentif(ve) aux détails", d: "C" },
    { t: "Je me fais du souci", d: "N" },
    { t: "J'ai une imagination débordante", d: "O" },
    { t: "Je reste en retrait", d: "E", r: true },
    { t: "Je compatis aux sentiments des autres", d: "A" },
    { t: "Je mets la pagaille", d: "C", r: true },
    { t: "Je me sens rarement cafardeux(se)", d: "N", r: true },
    { t: "Les idées abstraites, ça ne m'intéresse pas vraiment", d: "O", r: true },
    { t: "Dans les soirées, je parle avec beaucoup de personnes différentes", d: "E" },
    { t: "Les problèmes des autres ne m'intéressent pas", d: "A", r: true },
    { t: "Je fais les tâches ménagères et corvées sans tarder", d: "C" },
    { t: "Je suis facilement perturbé(e)", d: "N" },
    { t: "J'ai d'excellentes idées", d: "O" },
    { t: "Je n'ai pas grand-chose à dire", d: "E", r: true },
    { t: "J'ai bon cœur", d: "A" },
    { t: "J'oublie souvent de remettre les choses à leur place", d: "C", r: true },
    { t: "Je me contrarie facilement", d: "N" },
    { t: "J'ai du mal à comprendre les idées abstraites", d: "O", r: true },
    { t: "Je ne m'intéresse pas vraiment aux autres", d: "A", r: true },
    { t: "J'aime l'ordre", d: "C" },
    { t: "Mon humeur change souvent", d: "N" },
    { t: "Je comprends vite les choses", d: "O" },
    { t: "Je n'aime pas attirer l'attention sur moi", d: "E", r: true },
    { t: "Je prends le temps de m'occuper des autres", d: "A" },
    { t: "Je me dérobe à mes obligations", d: "C", r: true },
    { t: "J'ai de fréquentes sautes d'humeur", d: "N" },
    { t: "J'utilise un vocabulaire recherché", d: "O" },
    { t: "Ça ne me dérange pas d'être le centre de l'attention", d: "E" },
    { t: "Je ressens les émotions des autres", d: "A" },
    { t: "Je respecte un planning", d: "C" },
    { t: "Je m'irrite facilement", d: "N" },
    { t: "Je prends le temps de réfléchir aux choses", d: "O" },
    { t: "Je suis réservé(e) avec les inconnus", d: "E", r: true },
    { t: "Je mets les gens à l'aise", d: "A" },
    { t: "Je suis exigeant(e) dans mon travail", d: "C" },
    { t: "Je me sens souvent cafardeux(se)", d: "N" },
    { t: "Je n'ai pas une bonne imagination", d: "O", r: true },
    { t: "Je déborde d'idées", d: "O" }
  ],
  scoringNote: "Score = moyenne des 10 items de chaque dimension (items inversés recodés), de 1 à 5 — identique à la version rapide, simplement calculé sur deux fois et demie plus d'items par trait. Mini-IPIP et IPIP-50 utilisent en partie les mêmes items (les 20 items de la version rapide sont un sous-ensemble des 50 ici) : c'est la même échelle, en plus précis.",
  dims: {
    E: { nom: "Extraversion", format: "moyenne", min: 1, max: 5, valence: null,
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
    A: { nom: "Agréabilité", format: "moyenne", min: 1, max: 5, valence: null,
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
    C: { nom: "Conscienciosité", format: "moyenne", min: 1, max: 5, valence: null,
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
    N: { nom: "Névrosisme (instabilité émotionnelle)", format: "moyenne", min: 1, max: 5, valence: false,
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
    O: { nom: "Ouverture (imagination / intellect)", format: "moyenne", min: 1, max: 5, valence: null,
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
    instrument: "IPIP Big Five Factor Markers (50 items), Goldberg (1992)",
    statut: "Domaine public — International Personality Item Pool (ipip.ori.org), qui autorise explicitement la traduction et l'adaptation sans permission. Traduction française réalisée pour cette application à partir des items originaux ; les 20 items de la version rapide (Mini-IPIP) en sont un sous-ensemble exact.",
    refs: [
      "Goldberg, L. R. (1992). The development of markers for the Big-Five factor structure. Psychological Assessment, 4(1), 26-42.",
      "Goldberg, L. R. (1999). A broad-bandwidth, public domain, personality inventory (IPIP). ipip.ori.org.",
      "International Personality Item Pool. ipip.ori.org/new_ipip-50-item-scale.htm."
    ]
  }
},

/* ---------------- 18. ATTACHEMENT COMPLET — ECR-R (36 items) ---------------- */
{
  id: "ecrr36",
  nom: "Attachement dans les relations (version complète)",
  sigle: "ECR-R · 36 items",
  cat: "Couple",
  duree: "8-10 min",
  special: "ecr",
  intro: "Version approfondie du test d'attachement rapide (ECR-12) : 36 items au lieu de 12, pour une mesure beaucoup plus précise des deux dimensions de l'attachement adulte (Fraley, Waller & Brennan, 2000). Mêmes deux dimensions continues — anxiété d'abandon et évitement de l'intimité. Si vous n'êtes pas en couple, répondez d'après vos relations importantes passées.",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation concernant ce que vous vivez généralement dans vos relations de couple.",
  echelle: ECH_ACCORD7,
  items: [
    { t: "J'ai peur de perdre l'amour de mon/ma partenaire", d: "ANX" },
    { t: "Je crains souvent que mon/ma partenaire ne veuille pas rester avec moi", d: "ANX" },
    { t: "Je m'inquiète souvent que mon/ma partenaire ne m'aime pas vraiment", d: "ANX" },
    { t: "Je crains que mes partenaires amoureux(ses) ne tiennent pas à moi autant que j'y tiens", d: "ANX" },
    { t: "Je souhaiterais souvent que les sentiments de mon/ma partenaire pour moi soient aussi forts que les miens pour lui/elle", d: "ANX" },
    { t: "Je m'inquiète beaucoup au sujet de mes relations", d: "ANX" },
    { t: "Quand mon/ma partenaire n'est pas avec moi, je crains qu'il/elle s'intéresse à quelqu'un d'autre", d: "ANX" },
    { t: "Quand je montre mes sentiments à mon/ma partenaire, j'ai peur qu'il/elle ne ressente pas la même chose pour moi", d: "ANX" },
    { t: "Je m'inquiète rarement que mon/ma partenaire me quitte", d: "ANX", r: true },
    { t: "Mon/ma partenaire me fait douter de moi-même", d: "ANX" },
    { t: "Je ne m'inquiète pas souvent d'être abandonné(e)", d: "ANX", r: true },
    { t: "Je trouve que mon/ma partenaire ne veut pas être aussi proche que je le voudrais", d: "ANX" },
    { t: "Parfois, mes partenaires changent de sentiments à mon égard sans raison apparente", d: "ANX" },
    { t: "Mon désir d'être très proche fait parfois fuir les gens", d: "ANX" },
    { t: "J'ai peur qu'une fois qu'un(e) partenaire me connaisse vraiment, il/elle n'aime pas qui je suis réellement", d: "ANX" },
    { t: "Ça m'énerve de ne pas recevoir l'affection et le soutien dont j'ai besoin de la part de mon/ma partenaire", d: "ANX" },
    { t: "Je crains de ne pas être à la hauteur des autres", d: "ANX" },
    { t: "Mon/ma partenaire semble seulement me remarquer quand je suis en colère", d: "ANX" },
    { t: "Je préfère ne pas montrer à mon/ma partenaire ce que je ressens vraiment au fond de moi", d: "EVIT" },
    { t: "Je me sens à l'aise de partager mes pensées et sentiments intimes avec mon/ma partenaire", d: "EVIT", r: true },
    { t: "J'ai du mal à me permettre de dépendre de mes partenaires amoureux(ses)", d: "EVIT" },
    { t: "Je suis très à l'aise d'être proche de mes partenaires amoureux(ses)", d: "EVIT", r: true },
    { t: "Je ne me sens pas à l'aise de m'ouvrir à mes partenaires", d: "EVIT" },
    { t: "Je préfère ne pas être trop proche de mes partenaires", d: "EVIT" },
    { t: "Je me sens mal à l'aise quand un(e) partenaire veut être très proche", d: "EVIT" },
    { t: "Je trouve relativement facile de me rapprocher de mon/ma partenaire", d: "EVIT", r: true },
    { t: "Ce n'est pas difficile pour moi de me rapprocher de mon/ma partenaire", d: "EVIT", r: true },
    { t: "En général, je discute de mes problèmes et de mes préoccupations avec mon/ma partenaire", d: "EVIT", r: true },
    { t: "Ça m'aide de me tourner vers mon/ma partenaire dans les moments difficiles", d: "EVIT", r: true },
    { t: "Je dis presque tout à mon/ma partenaire", d: "EVIT", r: true },
    { t: "Je parle de tout avec mon/ma partenaire", d: "EVIT", r: true },
    { t: "Je suis nerveux(se) quand mes partenaires deviennent trop proches de moi", d: "EVIT" },
    { t: "Je me sens à l'aise de dépendre de mes partenaires amoureux(ses)", d: "EVIT", r: true },
    { t: "Je trouve facile de dépendre de mes partenaires amoureux(ses)", d: "EVIT", r: true },
    { t: "Il m'est facile d'être affectueux(se) avec mon/ma partenaire", d: "EVIT", r: true },
    { t: "Mon/ma partenaire me comprend vraiment, moi et mes besoins", d: "EVIT", r: true }
  ],
  scoringNote: "Moyenne de 1 à 7 sur chaque dimension (18 items par dimension, items inversés recodés) — même principe que l'ECR-12, avec trois fois plus d'items par dimension pour une mesure plus précise et plus stable. Repère indicatif : au-dessus de 4 = dimension marquée.",
  dims: {
    ANX: {
      nom: "Anxiété d'abandon", format: "moyenne", min: 1, max: 7, valence: false,
      descriptif: "Peur du rejet et de l'abandon, besoin de réassurance, hypervigilance aux signes de distance. Élevée, elle pousse à la protestation (reproches, contrôle, vérifications) qui produit souvent… la distance redoutée.",
      bandes: [
        { max: 4, label: "Faible à modérée", niveau: "ok", texte: "La peur de l'abandon ne domine pas votre vie relationnelle. Les inquiétudes ponctuelles en début de relation ou après un conflit sont normales." },
        { max: 7, label: "Marquée", niveau: "attention", texte: "La peur de perdre l'autre occupe beaucoup d'espace : besoin fréquent de réassurance, ruminations sur la relation, réactions fortes à la distance. C'est un schéma appris — donc modifiable — pas un défaut de fabrication." }
      ],
      amelioration: {
        intro: "La recherche sur la « sécurité gagnée » (earned security) montre qu'on peut évoluer vers un attachement plus sécure, notamment via des relations correctrices et la thérapie. Les schémas d'attachement ne sont PAS une condamnation de l'enfance.",
        axes: [
          { titre: "Nommer le schéma au lieu de le jouer", texte: "Quand l'alarme s'active (message sans réponse, ton distant), notez : « mon système d'attachement s'active » — puis attendez 30-60 min avant d'agir. L'étiquetage émotionnel réduit mesurablement l'intensité de la réaction." },
          { titre: "Demander directement plutôt que protester", texte: "Remplacer les stratégies indirectes (reproches, froideur punitive, tests) par une demande claire : « quand tu ne réponds pas de la journée, je m'inquiète ; un simple message me suffit ». C'est le cœur des thérapies de couple fondées sur l'attachement (EFT, bien validée)." },
          { titre: "Auto-apaisement", texte: "Construire 2-3 stratégies qui ne dépendent pas du/de la partenaire : respiration lente, marche, appeler un(e) ami(e), écrire. Objectif : que la réassurance de l'autre devienne un plus, pas une perfusion." },
          { titre: "Vérifier les faits", texte: "Technique TCC : lister les preuves concrètes d'engagement de l'autre vs l'interprétation anxieuse du moment. L'anxiété d'abandon lit l'ambiguïté comme un rejet — corriger cette lecture s'entraîne." }
        ],
        objectif: "Sur 8 semaines : à chaque activation, pause + étiquetage + une demande directe formulée calmement. Re-testez ensuite. Si les relations restent une source majeure de souffrance : thérapie individuelle ou de couple (EFT / TCC) — c'est un motif de consultation très classique et qui répond bien.",
        ressources: [
          "Mikulincer, M., & Shaver, P. R. (2016). Attachment in Adulthood (2e éd.) — la somme scientifique de référence.",
          "Johnson, S. « Serre-moi fort » (édition française) — application de la théorie de l'attachement au couple (EFT).",
          "Guédeney, N. & A. « L'attachement : approche théorique et clinique » (Elsevier Masson) — référence francophone."
        ]
      }
    },
    EVIT: {
      nom: "Évitement de l'intimité", format: "moyenne", min: 1, max: 7, valence: false,
      descriptif: "Inconfort avec la proximité et la dépendance : garder ses problèmes pour soi, se sentir envahi(e), préférer l'autonomie. Élevé, il protège de la vulnérabilité au prix de la profondeur du lien.",
      bandes: [
        { max: 4, label: "Faible à modéré", niveau: "ok", texte: "La proximité émotionnelle vous est accessible : vous pouvez vous appuyer sur l'autre et le/la laisser s'appuyer sur vous. Le besoin ponctuel de solitude est normal et sain." },
        { max: 7, label: "Marqué", niveau: "attention", texte: "Se confier, dépendre de quelqu'un ou laisser l'autre s'approcher vous coûte. Souvent une stratégie apprise là où la vulnérabilité était risquée ou inutile. Modifiable — à condition d'y aller progressivement, comme une exposition." }
      ],
      amelioration: {
        axes: [
          { titre: "Auto-dévoilement gradué", texte: "L'intimité se construit par paliers de dévoilement réciproque (mécanisme le mieux documenté de la formation des liens). Commencez petit : partager UNE difficulté réelle par semaine avec une personne de confiance, sans minimiser." },
          { titre: "Repérer la désactivation", texte: "L'évitement opère par « désactivation » : focalisation sur les défauts de l'autre, nostalgie d'ex idéalisés, fuite dans le travail quand la relation s'approfondit. Nommer ces manœuvres au moment où elles surviennent leur enlève une grande partie de leur pouvoir." },
          { titre: "Demander de l'aide une fois", texte: "Exercice cible : demander concrètement de l'aide ou du réconfort une fois par semaine — précisément ce que l'évitement interdit. L'objectif est d'apprendre par l'expérience que dépendre ponctuellement de quelqu'un n'est pas dangereux." },
          { titre: "Ne pas confondre autonomie et évitement", texte: "Aimer la solitude est un goût ; être INCAPABLE de se confier même quand ça va mal est une contrainte. C'est la liberté de choisir qui fait la différence — visez la flexibilité, pas la transformation en « fusionnel(le) »." }
        ],
        objectif: "8 semaines : un auto-dévoilement authentique + une demande d'aide par semaine, et notez ce qui se passe réellement (vs ce que vous craigniez). Re-testez ensuite — c'est l'une des dimensions qui bouge le plus lentement, la régularité prime.",
        ressources: [
          "Mikulincer, M., & Shaver, P. R. (2016). Attachment in Adulthood (2e éd.).",
          "Johnson, S. « Serre-moi fort » — exercices de conversation à deux, utilisables sans thérapeute."
        ]
      }
    }
  },
  source: {
    instrument: "Experiences in Close Relationships — Revised (ECR-R), 36 items",
    statut: "Libre pour usage non commercial (Fraley) — la version française des 20 items déjà présents dans l'ECR-12 est reprise à l'identique ; les 16 items supplémentaires sont traduits pour cette application.",
    refs: [
      "Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000). An item response theory analysis of self-report measures of adult attachment. Journal of Personality and Social Psychology, 78(2), 350-365.",
      "Brennan, K. A., Clark, C. L., & Shaver, P. R. (1998). Self-report measurement of adult attachment: An integrative overview. In J. A. Simpson & W. S. Rholes (Eds.), Attachment Theory and Close Relationships (pp. 46-76). Guilford Press.",
      "Fraley, R. C. — labs.psychology.illinois.edu/~rcfraley/measures/ : items et clé de correction complets."
    ]
  }
},

/* ---------------- 19. SOLITUDE COMPLÈTE — UCLA-20 ---------------- */
{
  id: "ucla20",
  nom: "Solitude ressentie (version complète)",
  sigle: "UCLA-20 · 20 items",
  cat: "Relations",
  duree: "5 min",
  intro: "Version complète et officielle de l'échelle de solitude UCLA (Russell, 1996), l'échelle de solitude la plus citée au monde — la version à 3 items déjà présente dans cette app en est un condensé pour les enquêtes rapides. Vingt items pour une mesure beaucoup plus fine.",
  consigne: "En général, à quelle fréquence…",
  echelle: { labels: ["Jamais", "Rarement", "Parfois", "Souvent"], valeurs: [1, 2, 3, 4] },
  items: [
    { t: "…vous sentez-vous « en phase » avec les gens autour de vous ?", d: "L", r: true },
    { t: "…vous sentez-vous en manque de compagnie ?", d: "L" },
    { t: "…sentez-vous qu'il n'y a personne vers qui vous tourner ?", d: "L" },
    { t: "…vous sentez-vous seul(e) ?", d: "L" },
    { t: "…vous sentez-vous membre d'un groupe d'ami(e)s ?", d: "L", r: true },
    { t: "…sentez-vous que vous avez beaucoup en commun avec les gens autour de vous ?", d: "L", r: true },
    { t: "…sentez-vous que vous n'êtes plus proche de personne ?", d: "L" },
    { t: "…sentez-vous que vos idées et vos centres d'intérêt ne sont pas partagés par votre entourage ?", d: "L" },
    { t: "…vous sentez-vous sociable et chaleureux(se) ?", d: "L", r: true },
    { t: "…vous sentez-vous proche des gens ?", d: "L", r: true },
    { t: "…vous sentez-vous mis(e) à l'écart ?", d: "L" },
    { t: "…sentez-vous que vos relations avec les autres manquent de profondeur ?", d: "L" },
    { t: "…sentez-vous que personne ne vous connaît vraiment bien ?", d: "L" },
    { t: "…vous sentez-vous isolé(e) des autres ?", d: "L" },
    { t: "…sentez-vous que vous pouvez trouver de la compagnie quand vous le souhaitez ?", d: "L", r: true },
    { t: "…sentez-vous qu'il y a des gens qui vous comprennent vraiment ?", d: "L", r: true },
    { t: "…vous sentez-vous timide ?", d: "L" },
    { t: "…sentez-vous que les gens sont autour de vous mais pas avec vous ?", d: "L" },
    { t: "…sentez-vous qu'il y a des gens à qui vous pouvez parler ?", d: "L", r: true },
    { t: "…sentez-vous qu'il y a des gens vers qui vous tourner ?", d: "L", r: true }
  ],
  scoringNote: "Somme des 20 items, de 20 à 80 (items inversés recodés). Pas de seuil clinique officiel — repères indicatifs ci-dessous, construits autour du milieu de l'échelle. C'est l'évolution du score qui informe le plus, bien davantage qu'une mesure isolée.",
  dims: {
    L: {
      nom: "Solitude ressentie", format: "somme", min: 20, max: 80, valence: false,
      descriptif: "Écart ressenti entre les relations que vous avez et celles dont vous auriez besoin. La solitude chronique est un facteur de risque sanitaire sérieux et documenté — et elle se combat efficacement.",
      bandes: [
        { max: 35, label: "Solitude faible", niveau: "ok", texte: "Votre vie relationnelle couvre l'essentiel de vos besoins. Les moments de solitude ponctuels sont normaux — et la solitude choisie peut être précieuse." },
        { max: 55, label: "Solitude modérée", niveau: "neutre", texte: "Un ressenti de solitude présent mais pas envahissant. Les axes ci-dessous peuvent aider à muscler le lien social avant que ça ne s'installe." },
        { max: 80, label: "Solitude marquée", niveau: "alerte", texte: "Le sentiment d'être seul(e) ou à l'écart pèse sur votre quotidien. Deux choses à savoir : c'est très répandu (ce n'est pas une anomalie honteuse), et ça se traite — pas en « rencontrant plus de monde » au hasard, mais en construisant de la régularité et de la profondeur (axes ci-dessous)." }
      ],
      amelioration: {
        intro: "La recherche (méta-analyses sur les interventions contre la solitude) montre que le levier le plus efficace n'est pas de multiplier les contacts, mais de changer ce qu'on attend et perçoit des autres, et d'installer des liens RÉGULIERS.",
        axes: [
          { titre: "Régularité avant quantité", texte: "Les liens se créent par exposition répétée dans la durée : activité HEBDOMADAIRE fixe avec les mêmes personnes (club sportif, chorale, association, cours). Un an de mardis soirs bat cent soirées ponctuelles." },
          { titre: "Raviver les liens dormants", texte: "Recontacter d'anciens amis est étonnamment efficace et bien accueilli (la recherche montre qu'on sous-estime systématiquement le plaisir que notre message fera). Un message concret : « j'ai repensé à toi, on se fait un café ? »" },
          { titre: "Corriger la lecture anxieuse", texte: "La solitude chronique biaise la perception (« je vais déranger », « ils ne m'apprécient pas vraiment ») et pousse au retrait qui aggrave la solitude. C'est le cercle que les TCC ciblent en priorité — et la partie la plus efficace des interventions." },
          { titre: "Donner pour se relier", texte: "Le bénévolat régulier crée du lien avec un prétexte intégré (on fait ensemble, pas face à face) : francebenevolat.org ou jeveuxaider.gouv.fr pour trouver une mission près de chez vous." }
        ],
        objectif: "8 semaines : une activité collective régulière + un lien dormant ravivé + un contact réel par jour. Re-testez ensuite.",
        ressources: [
          "Masi, C. M. et al. (2011). A meta-analysis of interventions to reduce loneliness. Personality and Social Psychology Review, 15(3).",
          "Fondation de France — baromètre des solitudes (données françaises).",
          "jeveuxaider.gouv.fr — plateforme publique du bénévolat."
        ]
      }
    }
  },
  source: {
    instrument: "UCLA Loneliness Scale, Version 3 (20 items)",
    statut: "Librement utilisée dans la recherche et la clinique, sans frais ni permission requise. Traduction française réalisée pour cette application à partir des items originaux.",
    refs: [
      "Russell, D. W. (1996). UCLA Loneliness Scale (Version 3): reliability, validity, and factor structure. Journal of Personality Assessment, 66(1), 20-40.",
      "Hughes, M. E., Waite, L. J., Hawkley, L. C., & Cacioppo, J. T. (2004). A short scale for measuring loneliness in large surveys. Research on Aging, 26(6), 655-672."
    ]
  }
},

/* ---------------- 20. SATISFACTION DE COUPLE COMPLÈTE — CSI-32 ---------------- */
{
  id: "csi32",
  nom: "Satisfaction de couple (version complète)",
  sigle: "CSI-32 · 32 items",
  cat: "Couple",
  duree: "10-12 min",
  intro: "Version complète du Couples Satisfaction Index (Funk & Rogge, 2007) — la version à 4 items déjà présente dans cette app en est le condensé le plus rapide. Trente-deux items, avec plusieurs types de questions (accord/désaccord, fréquence, adjectifs opposés), pour une mesure nettement plus précise, en particulier utile si votre score au CSI-4 est proche du seuil de détresse et que vous voulez affiner.",
  consigne: "Pour les personnes actuellement en couple. Répondez d'après votre relation telle qu'elle est ces derniers temps ; le type de réponse change d'une question à l'autre, lisez bien chaque question.",
  echelle: { labels: ["Extrêmement malheureuse", "Plutôt malheureuse", "Un peu malheureuse", "Heureuse", "Très heureuse", "Extrêmement heureuse", "Parfaite"], valeurs: [0, 1, 2, 3, 4, 5, 6] },
  echelles: [
    { labels: ["Extrêmement malheureuse", "Plutôt malheureuse", "Un peu malheureuse", "Heureuse", "Très heureuse", "Extrêmement heureuse", "Parfaite"], valeurs: [0, 1, 2, 3, 4, 5, 6] },
    { labels: ["Toujours d'accord", "Presque toujours d'accord", "Parfois en désaccord", "Souvent en désaccord", "Presque toujours en désaccord", "Toujours en désaccord"], valeurs: [5, 4, 3, 2, 1, 0] },
    { labels: ["Tout le temps", "La plupart du temps", "Plus souvent qu'autrement", "Occasionnellement", "Rarement", "Jamais"], valeurs: [5, 4, 3, 2, 1, 0] },
    { labels: ["Pas vrai du tout", "Un peu vrai", "Plutôt vrai", "Assez vrai", "Presque complètement vrai", "Complètement vrai"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Pas du tout", "Un peu", "Plutôt", "Beaucoup", "Presque complètement", "Complètement"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Bien pire que la plupart", "Pire que la plupart", "Un peu moins bien que la plupart", "Un peu mieux que la plupart", "Mieux que la plupart", "Bien mieux que la plupart"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Jamais", "Moins d'une fois par mois", "Une ou deux fois par mois", "Une ou deux fois par semaine", "Une fois par jour", "Plus souvent encore"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Intéressante", "Plutôt intéressante", "Un peu intéressante", "Un peu ennuyeuse", "Plutôt ennuyeuse", "Ennuyeuse"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Mauvaise", "Plutôt mauvaise", "Un peu mauvaise", "Un peu bonne", "Plutôt bonne", "Bonne"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Pleine", "Plutôt pleine", "Un peu pleine", "Un peu vide", "Plutôt vide", "Vide"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Solitaire", "Plutôt solitaire", "Un peu solitaire", "Un peu chaleureuse", "Plutôt chaleureuse", "Chaleureuse"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Solide", "Plutôt solide", "Un peu solide", "Un peu fragile", "Plutôt fragile", "Fragile"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Décourageante", "Plutôt décourageante", "Un peu décourageante", "Un peu porteuse d'espoir", "Plutôt porteuse d'espoir", "Porteuse d'espoir"], valeurs: [0, 1, 2, 3, 4, 5] },
    { labels: ["Agréable", "Plutôt agréable", "Un peu agréable", "Un peu pénible", "Plutôt pénible", "Pénible"], valeurs: [0, 1, 2, 3, 4, 5] }
  ],
  items: [
    { t: "Tout bien considéré, quel est le degré de bonheur de votre relation ?", d: "SAT", e: 0 },
    { t: "Le temps que vous passez ensemble : accord ou désaccord avec votre partenaire ?", d: "SAT", e: 1 },
    { t: "La façon de prendre les décisions importantes : accord ou désaccord avec votre partenaire ?", d: "SAT", e: 1 },
    { t: "Les démonstrations d'affection : accord ou désaccord avec votre partenaire ?", d: "SAT", e: 1 },
    { t: "En général, à quelle fréquence pensez-vous que les choses vont bien entre vous et votre partenaire ?", d: "SAT", e: 2 },
    { t: "À quelle fréquence souhaiteriez-vous ne pas vous être engagé(e) dans cette relation ?", d: "SAT", e: 2, r: true },
    { t: "Je ressens encore un lien fort avec mon/ma partenaire", d: "SAT", e: 3 },
    { t: "Si je devais revivre ma vie, je choisirais à nouveau la même personne", d: "SAT", e: 3 },
    { t: "Notre relation est solide", d: "SAT", e: 3 },
    { t: "Je me demande parfois s'il y a quelqu'un d'autre qui me conviendrait mieux", d: "SAT", e: 3, r: true },
    { t: "Ma relation avec mon/ma partenaire me rend heureux(se)", d: "SAT", e: 3 },
    { t: "J'ai une relation chaleureuse et confortable avec mon/ma partenaire", d: "SAT", e: 3 },
    { t: "Je ne peux pas imaginer mettre fin à ma relation avec mon/ma partenaire", d: "SAT", e: 3 },
    { t: "Je sens que je peux me confier à mon/ma partenaire à peu près sur tout", d: "SAT", e: 3 },
    { t: "J'ai eu des doutes sur cette relation récemment", d: "SAT", e: 3, r: true },
    { t: "Pour moi, mon/ma partenaire est le/la partenaire idéal(e)", d: "SAT", e: 3 },
    { t: "Je me sens vraiment comme faisant équipe avec mon/ma partenaire", d: "SAT", e: 3 },
    { t: "Je n'imagine pas qu'une autre personne puisse me rendre aussi heureux(se) que mon/ma partenaire", d: "SAT", e: 3 },
    { t: "À quel point votre relation avec votre partenaire est-elle gratifiante ?", d: "SAT", e: 4 },
    { t: "À quel point votre partenaire répond-il/elle à vos besoins ?", d: "SAT", e: 4 },
    { t: "Dans quelle mesure votre relation a-t-elle répondu à vos attentes initiales ?", d: "SAT", e: 4 },
    { t: "En général, à quel point êtes-vous satisfait(e) de votre relation ?", d: "SAT", e: 4 },
    { t: "Comment est votre relation comparée à la plupart des autres ?", d: "SAT", e: 5 },
    { t: "Appréciez-vous la compagnie de votre partenaire ?", d: "SAT", e: 6 },
    { t: "À quelle fréquence vous amusez-vous ensemble, votre partenaire et vous ?", d: "SAT", e: 6 },
    { t: "Votre relation : intéressante ou ennuyeuse ?", d: "SAT", e: 7, r: true },
    { t: "Votre relation : mauvaise ou bonne ?", d: "SAT", e: 8 },
    { t: "Votre relation : pleine ou vide ?", d: "SAT", e: 9, r: true },
    { t: "Votre relation : solitaire ou chaleureuse ?", d: "SAT", e: 10 },
    { t: "Votre relation : solide ou fragile ?", d: "SAT", e: 11, r: true },
    { t: "Votre relation : décourageante ou porteuse d'espoir ?", d: "SAT", e: 12 },
    { t: "Votre relation : agréable ou pénible ?", d: "SAT", e: 13, r: true }
  ],
  scoringNote: "Somme des 32 items, de 0 à 161 (items inversés recodés). Le score « officiel » de l'instrument utilise une conversion par théorie de réponse à l'item (tables propriétaires non reproduites ici) ; cette app utilise l'approximation par somme brute, documentée et largement utilisée en pratique. Seuil publié : un score inférieur à 104,5 signale une détresse relationnelle probable — même logique que le CSI-4, en beaucoup plus précis.",
  dims: {
    SAT: {
      nom: "Satisfaction conjugale", format: "somme", min: 0, max: 161, valence: true,
      descriptif: "Évaluation globale de votre relation, mesurée sous plusieurs angles (bonheur global, accord sur des sujets concrets, fréquence des bons moments, adjectifs ressentis). La satisfaction fluctue naturellement : une mesure basse isolée est une photo, pas un verdict.",
      bandes: [
        { max: 104, label: "Zone de détresse relationnelle", niveau: "alerte", texte: "Score sous le seuil publié (104,5) : votre insatisfaction est comparable à celle des couples qui consultent. Ce n'est pas une condamnation — c'est le signal qu'il faut agir méthodiquement : passez les tests « Réactivité » et « Conflits » pour localiser ce qui pèse, appliquez les axes, et sachez que la thérapie de couple a une efficacité démontrée, d'autant plus qu'elle est entreprise tôt." },
        { max: 123, label: "Au-dessus du seuil, zone basse", niveau: "attention", texte: "Pas de détresse caractérisée, mais une marge nette de progression. C'est la zone où les efforts rapportent le plus." },
        { max: 161, label: "Satisfaction bonne à élevée", niveau: "ok", texte: "Votre relation est une ressource. Les couples durablement heureux ne sont pas ceux qui n'ont pas de problèmes, mais ceux qui entretiennent activement le positif." }
      ],
      amelioration: {
        intro: "La satisfaction conjugale est une des variables les mieux étudiées de la psychologie. Ce qui la déplace vraiment : la réactivité au quotidien, la façon de se disputer, et la dose d'expériences positives partagées.",
        axes: [
          { titre: "Localiser avant de réparer", texte: "« Ça ne va pas » est trop vague pour agir. Passez les tests « Réactivité de votre partenaire » et « Conflits » de cette app : ils pointent les deux mécanismes qui expliquent l'essentiel des variations de satisfaction." },
          { titre: "Remonter la dose de positif", texte: "Dans les couples qui s'usent, le positif disparaît avant que le négatif n'explose. Réinstallez des rituels courts et réguliers : vraie question du soir (« quoi de mieux aujourd'hui ? »), appréciation exprimée par jour, sortie à deux protégée dans l'agenda." },
          { titre: "Faire du nouveau ensemble", texte: "Les activités nouvelles et un peu stimulantes partagées à deux augmentent la satisfaction dans des essais contrôlés (Aron et al., 2000) — l'habituation est un érodeur silencieux." },
          { titre: "Consulter tôt, pas en dernier recours", texte: "Les couples attendent en moyenne des années avant de consulter — quand les schémas sont incrustés. Les thérapies de couple structurées (EFT, approches comportementales intégratives) ont une efficacité démontrée par essais contrôlés." }
        ],
        objectif: "Objectif : rester ou revenir durablement au-dessus de 104,5, puis viser 130+. Protocole 6 semaines : rituels positifs quotidiens + une nouveauté partagée + travail du conflit si le test « Conflits » est haut. Re-test toutes les 4 à 6 semaines.",
        ressources: [
          "Funk, J. L., & Rogge, R. D. (2007). Testing the ruler with item response theory: the Couples Satisfaction Index. Journal of Family Psychology, 21(4), 572-583.",
          "Aron, A., Norman, C., Aron, E., McKenna, C., & Heyman, R. (2000). Couples' shared participation in novel and arousing activities. Journal of Personality and Social Psychology, 78(2).",
          "Johnson, S. « Serre-moi fort » (EFT) · Gottman, J. & Silver, N. « Les couples heureux ont leurs secrets »."
        ],
        consulter: "Score < 104,5 persistant sur deux mesures, ou envie de partir/indifférence installée : thérapie de couple. Si la relation comporte peur, contrôle ou violence, ce n'est plus une question de « satisfaction » : 3919 (anonyme et gratuit) ou arretonslesviolences.gouv.fr."
      }
    }
  },
  source: {
    instrument: "Couples Satisfaction Index (CSI-32), 32 items",
    statut: "Copyright Funk & Rogge, mais libre d'utilisation en pratique clinique et personnelle sans frais ni permission (couples-research.com). Score officiel calibré par IRT non reproduit ; approximation par somme brute documentée ci-dessus. Traduction française réalisée pour cette application.",
    refs: [
      "Funk, J. L., & Rogge, R. D. (2007). Testing the ruler with item response theory: increasing precision of measurement for relationship satisfaction with the Couples Satisfaction Index. Journal of Family Psychology, 21(4), 572-583."
    ]
  }
}

];

TESTS = TESTS.concat(TESTS_5);
