/* ============================================================
   DONNÉES — PARTIE 2 : Stress perçu (PSS-10), Bien-être (WHO-5),
   Attachement (ECR-12), Triade sombre (SD3)
   ============================================================ */

var ECH_ACCORD7 = { labels: ["Fortement en désaccord", "En désaccord", "Plutôt en désaccord", "Neutre / partagé(e)", "Plutôt en accord", "En accord", "Fortement en accord"], valeurs: [1, 2, 3, 4, 5, 6, 7] };

var TESTS_2 = [

/* ---------------- 5. STRESS PERÇU — PSS-10 ---------------- */
{
  id: "pss10",
  nom: "Stress perçu",
  sigle: "PSS-10 · 10 items",
  cat: "Stress & énergie",
  duree: "2-3 min",
  intro: "L'échelle de stress perçu de Cohen (PSS-10, 1988) mesure à quel point votre vie vous a semblé imprévisible, incontrôlable et surchargée durant le dernier mois. C'est l'instrument de référence international sur le stress, validé en français (Bellinghausen et al., 2009 ; Lesage et al., 2012).",
  consigne: "Au cours du DERNIER MOIS, à quelle fréquence…",
  echelle: { labels: ["Jamais", "Presque jamais", "Parfois", "Assez souvent", "Très souvent"], valeurs: [0, 1, 2, 3, 4] },
  items: [
    { t: "…avez-vous été dérangé(e) par un événement inattendu ?", d: "P" },
    { t: "…vous a-t-il semblé difficile de contrôler les choses importantes de votre vie ?", d: "P" },
    { t: "…vous êtes-vous senti(e) nerveux(se) ou stressé(e) ?", d: "P" },
    { t: "…vous êtes-vous senti(e) confiant(e) dans votre capacité à prendre en main vos problèmes personnels ?", d: "P", r: true },
    { t: "…avez-vous senti que les choses allaient comme vous le vouliez ?", d: "P", r: true },
    { t: "…avez-vous pensé que vous ne pouviez pas assumer toutes les choses que vous deviez faire ?", d: "P" },
    { t: "…avez-vous été capable de maîtriser votre énervement ?", d: "P", r: true },
    { t: "…avez-vous senti que vous dominiez la situation ?", d: "P", r: true },
    { t: "…vous êtes-vous senti(e) irrité(e) parce que les événements échappaient à votre contrôle ?", d: "P" },
    { t: "…avez-vous trouvé que les difficultés s'accumulaient à un point tel que vous ne pouviez pas les surmonter ?", d: "P" }
  ],
  scoringNote: "Somme des 10 items (4 items positifs recodés), de 0 à 40. Il n'existe pas de seuil clinique officiel ; repères usuels de la littérature : < 14 stress faible · 14-26 modéré · > 26 élevé.",
  dims: {
    P: {
      nom: "Stress perçu (dernier mois)", format: "somme", min: 0, max: 40, valence: false,
      descriptif: "Le stress perçu dépend moins des événements eux-mêmes que du rapport entre les exigences que vous percevez et les ressources que vous vous reconnaissez. C'est précisément pour ça qu'il est modifiable.",
      bandes: [
        { max: 13, label: "Stress faible", niveau: "ok", texte: "Vous percevez votre vie comme globalement prévisible et gérable. Bon signe — le stress ponctuel et récupérable est normal et même utile." },
        { max: 26, label: "Stress modéré", niveau: "attention", texte: "Niveau de stress notable, le plus fréquent en population active. À surveiller si ça dure : le stress chronique use (sommeil, immunité, humeur). Les axes ci-dessous ont un bon rendement à ce niveau." },
        { max: 40, label: "Stress élevé", niveau: "alerte", texte: "Vous vivez une période de surcharge où beaucoup semble échapper à votre contrôle. Le stress chronique élevé est un facteur de risque sérieux (anxiété, dépression, épuisement, santé cardiovasculaire) : agissez maintenant, et pas seul(e) si c'est lié au travail (médecin du travail, médecin traitant)." }
      ],
      amelioration: {
        intro: "Deux leviers complémentaires : réduire la charge réelle (stresseurs) et renforcer la récupération et le sentiment de contrôle. Les deux se travaillent.",
        axes: [
          { titre: "Cartographier ses stresseurs", texte: "Listez ce qui vous stresse, classez en 3 colonnes : je peux agir / je peux influencer / je ne contrôle pas. Un plan d'action pour la colonne 1, une acceptation active pour la colonne 3 — la rumination sur l'incontrôlable est le carburant du stress perçu." },
          { titre: "Récupération quotidienne non négociable", texte: "Le stress se gère comme l'entraînement sportif : par la récupération. Un créneau quotidien réellement déconnecté (marche, sport, lecture, respiration lente 5-10 min) — sans écran, car le défilement d'actualités et de notifications maintient l'activation physiologique." },
          { titre: "Pleine conscience structurée", texte: "Les programmes MBSR (8 semaines) réduisent le stress perçu avec un niveau de preuve correct — c'est d'ailleurs sur le PSS que beaucoup d'essais le mesurent. Préférez un programme structuré à une appli utilisée 3 minutes de temps en temps." },
          { titre: "Charge de travail : dire non et déléguer", texte: "Si la source est professionnelle : négocier les priorités par écrit avec votre hiérarchie (« qu'est-ce qui passe après ? »), et documenter la surcharge. L'INRS fournit des repères sérieux sur les risques psychosociaux." }
        ],
        objectif: "Objectif : redescendre sous 14, ou perdre au moins 5 points en 6 semaines. Protocole : plan d'action sur 2 stresseurs « actionnables » + récupération quotidienne 20 min + re-test toutes les 3 semaines. Complétez avec le test d'épuisement (CBI) si la fatigue domine.",
        ressources: [
          "Cohen, S., & Williamson, G. (1988). Perceived stress in a probability sample of the United States. The Social Psychology of Health.",
          "Bellinghausen, L. et al. (2009). Validation factorielle de l'échelle française de stress perçu en milieu professionnel. Santé Publique, 21(4).",
          "INRS — Risques psychosociaux (inrs.fr) : références sur le stress au travail.",
          "Kabat-Zinn, J. « Au cœur de la tourmente, la pleine conscience » (De Boeck) — le manuel du MBSR.",
          "INSERM (2019). Expertise collective sur l'activité physique."
        ],
        consulter: "Stress élevé durable malgré vos efforts, sommeil durablement dégradé, ou signes d'épuisement : médecin traitant, et médecin du travail si la source est professionnelle (consultation possible à votre initiative, confidentielle)."
      }
    }
  },
  source: {
    instrument: "Perceived Stress Scale (PSS-10)",
    statut: "Utilisation libre pour usage non commercial (S. Cohen). Version française validée.",
    refs: [
      "Cohen, S., Kamarck, T., & Mermelstein, R. (1983). A global measure of perceived stress. Journal of Health and Social Behavior, 24, 385-396.",
      "Lesage, F.-X., Berjot, S., & Deschamps, F. (2012). Psychometric properties of the French versions of the Perceived Stress Scale. International Journal of Occupational Medicine and Environmental Health, 25(2)."
    ]
  }
},

/* ---------------- 6. BIEN-ÊTRE — WHO-5 ---------------- */
{
  id: "who5",
  nom: "Bien-être",
  sigle: "WHO-5 (OMS) · 5 items",
  cat: "Stress & énergie",
  duree: "1 min",
  intro: "L'indice de bien-être de l'Organisation Mondiale de la Santé (WHO-5, 1998) : 5 questions, un score sur 100. C'est l'un des questionnaires les plus utilisés au monde (plus de 5000 études, revue : Topp et al., 2015), libre d'utilisation. Idéal pour un suivi régulier, comme un « thermomètre » du moral.",
  consigne: "Au cours des DEUX DERNIÈRES SEMAINES…",
  echelle: { labels: ["Jamais", "De temps en temps", "Moins de la moitié du temps", "Plus de la moitié du temps", "La plupart du temps", "Tout le temps"], valeurs: [0, 1, 2, 3, 4, 5] },
  items: [
    { t: "…je me suis senti(e) bien et de bonne humeur", d: "B" },
    { t: "…je me suis senti(e) calme et tranquille", d: "B" },
    { t: "…je me suis senti(e) plein(e) d'énergie et vigoureux(se)", d: "B" },
    { t: "…je me suis réveillé(e) en me sentant frais(fraîche) et dispos(e)", d: "B" },
    { t: "…ma vie quotidienne a été remplie de choses intéressantes", d: "B" }
  ],
  scoringNote: "Somme des 5 items (0-25) multipliée par 4 → score de 0 à 100. Repère OMS : un score ≤ 50 signale un bien-être dégradé ; ≤ 28, un risque dépressif justifiant un repérage (Topp et al., 2015).",
  dims: {
    B: {
      nom: "Bien-être subjectif (2 dernières semaines)", format: "pct25", min: 0, max: 100, valence: true,
      descriptif: "Le WHO-5 mesure le versant POSITIF du moral : humeur, calme, énergie, récupération, intérêt. Sa force : détecter tôt une dégradation, avant les symptômes.",
      bandes: [
        { max: 28, label: "Bien-être très dégradé", niveau: "alerte", texte: "Score dans la zone où l'OMS recommande un repérage de la dépression. Faites le test PHQ-9 de cette app et parlez-en à votre médecin traitant. Ce niveau d'épuisement du moral n'est pas un état à endurer : il se prend en charge." },
        { max: 50, label: "Bien-être dégradé", niveau: "attention", texte: "Moral, énergie ou intérêt en berne sur la quinzaine. Signal à prendre au sérieux sans dramatiser : regardez ce qui s'est dégradé (sommeil ? charge ? isolement ?) et appliquez les axes ci-dessous. Re-testez dans 2 semaines." },
        { max: 75, label: "Bien-être correct", niveau: "ok", texte: "Niveau de bien-être dans la moyenne. Les axes ci-dessous restent utiles pour consolider — le bien-être s'entretient comme une condition physique." },
        { max: 100, label: "Bien-être élevé", niveau: "ok", texte: "Excellent niveau d'humeur, d'énergie et d'intérêt. Notez ce qui le nourrit en ce moment : c'est votre meilleure assurance pour les périodes plus rudes." }
      ],
      amelioration: {
        intro: "Le bien-être durable repose sur des piliers prosaïques et bien documentés : sommeil, mouvement, liens, sens. Les « astuces bonheur » spectaculaires ont des effets modestes ; les fondamentaux ont des effets solides.",
        axes: [
          { titre: "Relations sociales de qualité", texte: "Le prédicteur le plus robuste du bien-être à long terme (notamment l'étude longitudinale de Harvard, 80+ ans de suivi). Investissez dans quelques liens profonds : rituels réguliers (repas hebdomadaire, appel fixe) plutôt que contacts diffus." },
          { titre: "Sommeil et lumière", texte: "Horaires réguliers, exposition à la lumière du jour le matin (30 min dehors), écrans coupés avant le coucher. Les 2 premiers items du WHO-5 (humeur, calme) réagissent fortement au sommeil." },
          { titre: "Activités à valeur et engagement", texte: "Planifiez chaque semaine des activités qui ont du SENS pour vous (créer, aider, apprendre, transmettre) et pas seulement du plaisir passif. Le bénévolat a un effet mesurable sur le bien-être." },
          { titre: "Mouvement quotidien", texte: "Même la marche compte : la relation dose-réponse entre activité physique et bien-être est l'une des mieux établies (INSERM 2019)." },
          { titre: "Gratitude — avec les bonnes attentes", texte: "Noter 3 choses positives du jour a un effet réel mais MODESTE dans les méta-analyses. Utile en complément, insuffisant seul — méfiez-vous de quiconque le vend comme une solution miracle." }
        ],
        objectif: "Le WHO-5 est fait pour le suivi : re-testez toutes les 2 semaines. Objectif : rester durablement au-dessus de 50, idéalement vers 60-75. Une chute de plus de 10 points d'une mesure à l'autre = signal à explorer (que s'est-il passé ?).",
        ressources: [
          "Topp, C. W. et al. (2015). The WHO-5 Well-Being Index: a systematic review of the literature. Psychotherapy and Psychosomatics, 84(3), 167-176.",
          "Waldinger, R. & Schulz, M. « Une vie heureuse » (Les Arènes) — par les directeurs de l'étude de Harvard.",
          "INSERM (2019). Activité physique : prévention et traitement des maladies chroniques.",
          "Psycom.org — rubrique « prendre soin de sa santé mentale »."
        ]
      }
    }
  },
  source: {
    instrument: "WHO-5 Well-Being Index (Organisation Mondiale de la Santé, 1998)",
    statut: "Libre d'utilisation avec citation. Version française officielle disponible auprès de l'OMS.",
    refs: [
      "WHO Regional Office for Europe (1998). Wellbeing measures in primary health care — the DepCare Project.",
      "Topp, C. W., Østergaard, S. D., Søndergaard, S., & Bech, P. (2015). Psychotherapy and Psychosomatics, 84(3), 167-176."
    ]
  }
},

/* ---------------- 7. ATTACHEMENT — ECR-12 ---------------- */
{
  id: "ecr12",
  nom: "Attachement dans les relations",
  sigle: "ECR-12 (adaptation) · 12 items",
  cat: "Couple",
  duree: "3 min",
  radar: false,
  special: "ecr",
  intro: "Voici la version SÉRIEUSE des quizz « trauma patterns » : la théorie de l'attachement adulte, un des domaines les plus solides de la psychologie relationnelle (Bowlby, Ainsworth, puis Brennan et al., 1998). Deux dimensions continues — anxiété d'abandon et évitement de l'intimité — décrivent votre manière d'être en couple. Si vous n'êtes pas en couple, répondez d'après vos relations importantes passées.",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation concernant ce que vous vivez généralement dans vos relations de couple.",
  echelle: ECH_ACCORD7,
  items: [
    { t: "J'ai peur d'être abandonné(e)", d: "ANX" },
    { t: "Je m'inquiète beaucoup au sujet de mes relations", d: "ANX" },
    { t: "Je crains que mon/ma partenaire ne tienne pas autant à moi que je tiens à lui/elle", d: "ANX" },
    { t: "J'ai besoin que mon/ma partenaire me rassure souvent sur ses sentiments", d: "ANX" },
    { t: "Je trouve que mon/ma partenaire ne souhaite pas être aussi proche de moi que je le voudrais", d: "ANX" },
    { t: "Je suis frustré(e) quand mon/ma partenaire n'est pas disponible alors que j'ai besoin de lui/d'elle", d: "ANX" },
    { t: "Je veux me rapprocher de mon/ma partenaire, mais quelque chose me retient toujours", d: "EVIT" },
    { t: "Je deviens mal à l'aise lorsque mon/ma partenaire se rapproche trop de moi", d: "EVIT" },
    { t: "J'essaie d'éviter de devenir trop proche de mon/ma partenaire", d: "EVIT" },
    { t: "En général, je discute de mes problèmes et de mes préoccupations avec mon/ma partenaire", d: "EVIT", r: true },
    { t: "Cela m'aide de me tourner vers mon/ma partenaire dans les moments difficiles", d: "EVIT", r: true },
    { t: "Je me tourne vers mon/ma partenaire pour beaucoup de choses, notamment pour être réconforté(e) et rassuré(e)", d: "EVIT", r: true }
  ],
  scoringNote: "Moyenne de 1 à 7 sur chaque dimension (items inversés recodés). Il n'y a pas de « cases » : les styles (sécure, préoccupé, détaché, craintif) sont des repères de lecture aux croisements des deux dimensions, la réalité est continue. Repère indicatif : au-dessus de 4 = dimension marquée.",
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
          "Guédeney, N. & A. « L'attachement : approche théorique et clinique » (Elsevier Masson) — référence francophone.",
          "Brennan, K. A., Clark, C. L., & Shaver, P. R. (1998). Self-report measurement of adult attachment: An integrative overview. In J. A. Simpson & W. S. Rholes (Eds.), Attachment Theory and Close Relationships (pp. 46-76). Guilford Press."
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
          "Johnson, S. « Serre-moi fort » — exercices de conversation à deux, utilisables sans thérapeute.",
          "Lafontaine, M.-F. et al. (2016). Selecting the best items for a short-form ECR. European Journal of Psychological Assessment, 32(2)."
        ]
      }
    }
  },
  source: {
    instrument: "Experiences in Close Relationships — forme courte à 12 items (ECR-12)",
    statut: "Instrument de recherche librement utilisé dans la littérature. Adaptation française réalisée pour cette application d'après les items originaux ; une version francophone validée existe (Lafontaine et al., 2016).",
    refs: [
      "Brennan, K. A., Clark, C. L., & Shaver, P. R. (1998). Self-report measurement of adult attachment: An integrative overview. In J. A. Simpson & W. S. Rholes (Eds.), Attachment Theory and Close Relationships (pp. 46-76). Guilford Press.",
      "Lafontaine, M.-F., Brassard, A., Lussier, Y., Valois, P., Shaver, P. R., & Johnson, S. M. (2016). Selecting the best items for a short-form ECR. European Journal of Psychological Assessment, 32(2), 140-154.",
      "Fraley, R. C. — yourpersonality.net : ressources scientifiques sur l'attachement adulte."
    ]
  }
},

/* ---------------- 8. TRIADE SOMBRE — SD3 ---------------- */
{
  id: "sd3",
  nom: "Triade sombre",
  sigle: "SD3 (adaptation) · 27 items",
  cat: "Personnalité",
  duree: "5 min",
  radar: true,
  avertissement: "Contrairement aux « tests de narcissisme » des réseaux sociaux, cet instrument mesure des TRAITS présents chez tout le monde à des degrés divers. Un score élevé ne signifie en aucun cas un trouble de la personnalité — seul un clinicien peut évaluer cela, en entretien.",
  intro: "Le Short Dark Triad (Jones & Paulhus, 2014) mesure trois traits de personnalité dits « sombres » : machiavélisme (stratégie, cynisme), narcissisme (grandiosité, besoin d'admiration) et psychopathie subclinique (impulsivité, insensibilité). C'est l'instrument court de référence de la recherche — la réponse sérieuse aux quizz « êtes-vous un narcissique toxique à 98 % ».",
  consigne: "Indiquez votre degré d'accord avec chaque affirmation. Répondez spontanément et honnêtement — personne d'autre que vous ne voit ces réponses.",
  echelle: ECH_ACCORD5,
  items: [
    { t: "Il n'est pas prudent de confier ses secrets", d: "M" },
    { t: "J'aime utiliser une manipulation habile pour arriver à mes fins", d: "M" },
    { t: "Quoi qu'il en coûte, il faut mettre les personnes influentes de son côté", d: "M" },
    { t: "Il faut éviter les conflits directs avec les autres : ils pourraient être utiles plus tard", d: "M" },
    { t: "Il est avisé de garder les informations qu'on pourra utiliser contre les gens plus tard", d: "M" },
    { t: "Il faut savoir attendre le bon moment pour prendre sa revanche", d: "M" },
    { t: "Il y a des choses qu'il vaut mieux cacher aux autres : ils n'ont pas besoin de savoir", d: "M" },
    { t: "Il faut s'assurer que ses projets profitent à soi-même, pas aux autres", d: "M" },
    { t: "La plupart des gens peuvent être manipulés", d: "M" },
    { t: "Les gens me voient comme un(e) leader né(e)", d: "N" },
    { t: "Je déteste être le centre de l'attention", d: "N", r: true },
    { t: "Beaucoup d'activités de groupe seraient ennuyeuses sans moi", d: "N" },
    { t: "Je sais que je suis quelqu'un de spécial, car tout le monde me le répète", d: "N" },
    { t: "J'aime fréquenter des personnes importantes", d: "N" },
    { t: "Je me sens gêné(e) quand on me complimente", d: "N", r: true },
    { t: "On m'a déjà comparé(e) à des personnes célèbres", d: "N" },
    { t: "Je suis quelqu'un d'ordinaire", d: "N", r: true },
    { t: "J'insiste pour obtenir le respect qui m'est dû", d: "N" },
    { t: "J'aime me venger des figures d'autorité", d: "PS" },
    { t: "J'évite les situations dangereuses", d: "PS", r: true },
    { t: "Quand on me nuit, la revanche doit être rapide et cinglante", d: "PS" },
    { t: "Les gens disent souvent que je suis incontrôlable", d: "PS" },
    { t: "C'est vrai que je peux être dur(e) et méchant(e) avec les autres", d: "PS" },
    { t: "Ceux qui s'en prennent à moi le regrettent toujours", d: "PS" },
    { t: "Je n'ai jamais eu d'ennuis avec la justice", d: "PS", r: true },
    { t: "J'aime les aventures intimes sans lendemain avec des personnes que je connais à peine", d: "PS" },
    { t: "Je suis prêt(e) à dire n'importe quoi pour obtenir ce que je veux", d: "PS" }
  ],
  scoringNote: "Moyenne de 1 à 5 par sous-échelle (9 items chacune, items inversés recodés). Repères issus des échantillons de recherche (Jones & Paulhus, 2014, moyennes approximatives) : machiavélisme ≈ 3,1 · narcissisme ≈ 2,8 · psychopathie ≈ 2,1. Ce sont des repères de comparaison, pas des seuils cliniques.",
  dims: {
    M: {
      nom: "Machiavélisme", format: "moyenne", min: 1, max: 5, valence: false,
      descriptif: "Vision stratégique et cynique des relations : calcul, prudence, manipulation instrumentale. Distinct de l'intelligence sociale : c'est l'usage des autres comme moyens.",
      bandes: [
        { max: 2.5, label: "Bas", niveau: "ok", texte: "Vous abordez les relations avec peu de calcul. Revers possible : une certaine naïveté face aux personnes réellement stratèges." },
        { max: 3.5, label: "Dans la moyenne", niveau: "neutre", texte: "Niveau proche de la moyenne des échantillons de recherche (≈ 3,1) : une prudence stratégique ordinaire, sans cynisme systématique." },
        { max: 5, label: "Élevé", niveau: "attention", texte: "Vision très stratégique et défiante des relations. Efficace à court terme, mais la recherche montre un coût à long terme : confiance érodée, relations superficielles, réputation. La question utile : ce cynisme est-il un choix ou une armure ?" }
      ],
      amelioration: {
        intro: "Si votre score vous questionne, l'enjeu n'est pas de devenir « gentil(le) » mais d'évaluer le rapport coût/bénéfice réel du fonctionnement stratégique — et ce qu'il protège.",
        axes: [
          { titre: "Tester la coopération", texte: "La littérature sur la confiance (économie comportementale) est claire : la coopération conditionnelle bat le cynisme systématique à long terme. Expérimentez : accordez une confiance par défaut, retirable, sur des enjeux limités, et mesurez ce qui se passe réellement." },
          { titre: "Examiner l'origine de la défiance", texte: "Le cynisme relationnel est souvent une généralisation d'expériences où la confiance a coûté cher. Question à creuser (seul(e) ou en thérapie) : « qu'est-ce que je crains qu'il arrive si je joue franc ? »" },
          { titre: "Mesurer le coût caché", texte: "Listez honnêtement : relations profondes actuelles, personnes qui vous appelleraient en cas de coup dur. Le machiavélisme élevé prédit un réseau large mais peu de liens solides — vérifiez si c'est votre cas et si ça vous convient." }
        ],
        objectif: "Pas de score cible : l'objectif est un choix éclairé. Si le fonctionnement stratégique nuit à vos relations ou vous isole, un travail psychothérapeutique sur la confiance est la voie efficace.",
        ressources: [
          "Jones, D. N., & Paulhus, D. L. (2014). Introducing the Short Dark Triad (SD3). Assessment, 21(1), 28-41.",
          "Axelrod, R. « Donnant donnant : théorie du comportement coopératif » (Odile Jacob) — pourquoi la coopération gagne."
        ]
      }
    },
    N: {
      nom: "Narcissisme (trait)", format: "moyenne", min: 1, max: 5, valence: false,
      descriptif: "Grandiosité, besoin d'admiration, sentiment d'être spécial. ATTENTION : le narcissisme-trait mesuré ici n'est pas le trouble narcissique de la personnalité, et un certain narcissisme est banal — voire adaptatif (confiance, leadership).",
      bandes: [
        { max: 2.5, label: "Bas", niveau: "neutre", texte: "Peu de besoin d'admiration ou de sentiment de spécialité. Si cela s'accompagne d'auto-dévalorisation, c'est l'estime de soi qu'il faut regarder (test de Rosenberg), pas le narcissisme." },
        { max: 3.5, label: "Dans la moyenne", niveau: "neutre", texte: "Niveau proche de la moyenne de recherche (≈ 2,8) : une dose ordinaire de fierté, d'ambition et de plaisir à être reconnu(e). Banal et plutôt fonctionnel." },
        { max: 5, label: "Élevé", niveau: "attention", texte: "Fort besoin de reconnaissance et sentiment marqué d'être exceptionnel(le). Ni un diagnostic, ni une insulte : le point de vigilance documenté est le coût relationnel (difficulté à entendre la critique, à s'excuser, à laisser de la place). Le signal qui compte : est-ce que vos proches souffrent de la relation ?" }
      ],
      amelioration: {
        intro: "Le narcissisme-trait élevé se travaille rarement « de face » : le levier efficace est l'empathie et la qualité des relations, où les bénéfices sont directs.",
        axes: [
          { titre: "Empathie délibérée", texte: "Entraînement concret : dans chaque conversation importante, poser 2 questions sur l'autre avant de parler de soi, et reformuler ce qu'il/elle ressent. La prise de perspective est entraînable et améliore mesurablement les relations." },
          { titre: "Chercher activement le feedback critique", texte: "Demander régulièrement à 2-3 personnes de confiance « qu'est-ce que je devrais faire différemment ? » — et se contenter de remercier, sans se justifier. C'est l'antidote comportemental à la bulle d'auto-confirmation." },
          { titre: "S'excuser proprement", texte: "Exercice cible s'il vous est difficile : des excuses complètes (reconnaître le fait + l'impact + réparer), sans « mais ». La recherche sur les relations montre un rendement énorme de cette compétence." },
          { titre: "Si vous êtes plutôt DE L'AUTRE CÔTÉ", texte: "Si vous avez fait ce test parce qu'un proche vous fait douter de vous (culpabilisation permanente, manipulation, dévalorisation), la ressource pertinente n'est pas ce score : parlez-en à un professionnel. En cas de violence psychologique au sein du couple : 3919 (Violences Femmes Info, gratuit) ou votre médecin." }
        ],
        objectif: "Sur 6 semaines : 1 demande de feedback critique par semaine + pratique d'empathie quotidienne. L'indicateur de réussite n'est pas le score, mais ce que disent vos proches de la relation.",
        ressources: [
          "Jones, D. N., & Paulhus, D. L. (2014). Assessment, 21(1), 28-41.",
          "Campbell, W. K., & Miller, J. D. (2011). The Handbook of Narcissism and Narcissistic Personality Disorder — l'état de la science.",
          "Sur le vrai trouble narcissique : seul un entretien clinique est valide — psychiatre ou psychologue clinicien."
        ]
      }
    },
    PS: {
      nom: "Psychopathie subclinique", format: "moyenne", min: 1, max: 5, valence: false,
      descriptif: "Impulsivité, recherche de sensations, faible empathie, insensibilité aux conséquences. « Subclinique » = un trait dimensionnel banal à faible dose, pas la figure du criminel des séries télé.",
      bandes: [
        { max: 2, label: "Bas", niveau: "ok", texte: "Niveau proche ou en dessous de la moyenne de recherche (≈ 2,1) : contrôle des impulsions correct et sensibilité aux autres préservée." },
        { max: 3, label: "Modéré", niveau: "neutre", texte: "Un peu au-dessus de la moyenne : goût du risque et franc-parler, sans nécessairement de coût majeur. Vigilance sur l'impulsivité dans les conflits." },
        { max: 5, label: "Élevé", niveau: "attention", texte: "Impulsivité et dureté relationnelles marquées. Les coûts documentés : conflits à répétition, décisions regrettées, prises de risque. Si vos colères ou impulsions vous ont déjà causé de vrais ennuis (travail, couple, justice), c'est un motif de consultation utile — la gestion de l'impulsivité se travaille (TCC, entraînement à la gestion de la colère)." }
      ],
      amelioration: {
        axes: [
          { titre: "Allonger le délai entre impulsion et action", texte: "Règle des 24 h pour tout message ou décision sous colère ; sortir physiquement de la situation quand la tension monte. L'impulsivité se joue dans les secondes — gagnez-en." },
          { titre: "Gestion de la colère structurée", texte: "Les protocoles TCC de gestion de la colère (repérage des déclencheurs, restructuration, techniques d'apaisement corporel) ont un bon niveau de preuve. En groupe ou en individuel." },
          { titre: "Canaliser la recherche de sensations", texte: "Le besoin de stimulation ne disparaît pas : donnez-lui des exutoires à coût contrôlé (sport intense, compétition, projets ambitieux) plutôt que des prises de risque relationnelles ou financières." }
        ],
        objectif: "Indicateur concret : zéro décision importante prise à chaud pendant 8 semaines. Si l'impulsivité ou la froideur émotionnelle pèsent sur votre vie, consultez — ces dimensions répondent au travail thérapeutique, contrairement au cliché.",
        ressources: [
          "Jones, D. N., & Paulhus, D. L. (2014). Assessment, 21(1), 28-41.",
          "AFTCC (aftcc.org) — thérapeutes formés à la gestion de la colère et de l'impulsivité."
        ]
      }
    }
  },
  source: {
    instrument: "Short Dark Triad (SD3), 27 items",
    statut: "Instrument de recherche librement utilisable à des fins non commerciales. Adaptation française réalisée pour cette application d'après les items originaux.",
    refs: [
      "Jones, D. N., & Paulhus, D. L. (2014). Introducing the Short Dark Triad (SD3): a brief measure of dark personality traits. Assessment, 21(1), 28-41.",
      "Paulhus, D. L., & Williams, K. M. (2002). The Dark Triad of personality. Journal of Research in Personality, 36(6), 556-563.",
      "Savard, C. et al. — validation canadienne-française du SD3."
    ]
  }
}
];
