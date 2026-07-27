/* ============================================================
   DONNÉES — PARTIE 6 : Vie & sens (SWLS, Flourishing, GQ-6)
   + repérage alcool (AUDIT-C)
   Réutilisent le moteur de scoring de core.js, aucune
   modification du moteur requise.
   ============================================================ */

var ECH_ACCORD7_D6 = { labels: ["Pas du tout d'accord", "Pas d'accord", "Plutôt pas d'accord", "Ni d'accord ni en désaccord", "Plutôt d'accord", "D'accord", "Tout à fait d'accord"], valeurs: [1, 2, 3, 4, 5, 6, 7] };

var TESTS_6 = [

/* ---------------- 25. SATISFACTION DE VIE — SWLS ---------------- */
{
  id: "swls",
  nom: "Satisfaction de vie",
  sigle: "SWLS · 5 items",
  cat: "Vie & sens",
  duree: "1 min",
  intro: "L'Échelle de satisfaction de vie (SWLS, Diener et al., 1985) est l'instrument le plus utilisé au monde pour mesurer le jugement global que vous portez sur votre vie — pas votre humeur du moment, mais votre bilan quand vous prenez du recul. C'est de la psychologie positive au sens sérieux du terme : mesurer ce qui va bien avec la même rigueur que ce qui va mal, pas de la pensée magique. Une traduction canadienne-française validée existe (Blais et al., 1989) ; les items ci-dessous s'en inspirent. Instrument du domaine public.",
  consigne: "Indiquez votre degré d'accord avec chacun des énoncés suivants. Répondez d'après votre vie telle qu'elle est, pas telle qu'elle devrait être.",
  echelle: ECH_ACCORD7_D6,
  items: [
    { t: "En général, ma vie correspond de près à mes idéaux", d: "S" },
    { t: "Mes conditions de vie sont excellentes", d: "S" },
    { t: "Je suis satisfait(e) de ma vie", d: "S" },
    { t: "Jusqu'à maintenant, j'ai obtenu les choses importantes que je voulais de la vie", d: "S" },
    { t: "Si je pouvais recommencer ma vie, je n'y changerais presque rien", d: "S" }
  ],
  scoringNote: "Somme des 5 items (1 à 7 chacun), de 5 à 35. Repères officiels publiés par Diener : 5-9 très insatisfait(e) · 10-14 insatisfait(e) · 15-19 plutôt insatisfait(e) · 20-24 zone moyenne · 25-29 satisfait(e) · 30-35 très satisfait(e). La plupart des adultes des pays occidentaux se situent entre 20 et 24. Aucun seuil clinique : c'est un jugement global, pas un dépistage.",
  dims: {
    S: {
      nom: "Satisfaction de vie globale", format: "somme", min: 5, max: 35, valence: true,
      descriptif: "La satisfaction de vie est la composante « cognitive » du bien-être : le jugement que vous portez sur votre vie dans son ensemble, selon vos propres critères. Elle est distincte de l'humeur (mesurée par le WHO-5) et évolue plus lentement — mais elle évolue.",
      bandes: [
        { max: 9, label: "Très insatisfait(e)", niveau: "alerte", texte: "Score dans la zone la plus basse des repères de Diener : votre bilan de vie est très négatif sur presque tous les plans. Ce niveau accompagne souvent une période de crise (rupture, deuil, perte d'emploi) ou une dépression installée. Passez le PHQ-9 de cette app pour vérifier le versant dépressif, et n'affrontez pas ça seul(e) : parlez-en à votre médecin traitant." },
        { max: 14, label: "Insatisfait(e)", niveau: "alerte", texte: "Votre vie telle qu'elle est s'écarte nettement de ce que vous en attendez, dans plusieurs domaines. Identifiez lesquels pèsent le plus (travail, relations, santé, finances) : la satisfaction de vie globale se redresse rarement d'un bloc, mais domaine par domaine. Si ce score s'accompagne d'un moral durablement bas, faites aussi le WHO-5 et le PHQ-9." },
        { max: 19, label: "Plutôt insatisfait(e)", niveau: "attention", texte: "Un peu en dessous de la zone moyenne : des domaines de votre vie fonctionnent, d'autres clochent de façon persistante. C'est souvent le score de personnes objectivement « installées » mais dont un ou deux domaines importants stagnent. C'est la zone où un travail ciblé (voir les axes ci-dessous) a le meilleur rendement." },
        { max: 24, label: "Zone moyenne", niveau: "neutre", texte: "Score dans la zone moyenne des populations occidentales : globalement satisfait(e), avec des domaines à améliorer — la situation de la majorité des gens. Ni un problème, ni un plafond : les axes ci-dessous restent pertinents si vous visez mieux." },
        { max: 29, label: "Satisfait(e)", niveau: "ok", texte: "Votre bilan de vie est nettement positif : les domaines majeurs (relations, travail, santé, développement personnel) fonctionnent bien pour vous. Les points restants sont des ajustements, pas des chantiers. Notez ce qui nourrit ce score — c'est utile pour les périodes plus rudes." },
        { max: 35, label: "Très satisfait(e)", niveau: "ok", texte: "Zone la plus haute des repères de Diener : vous jugez votre vie très proche de vos idéaux. Ce n'est pas de la complaisance — c'est aussi le score de personnes qui ont traversé des épreuves et en ont tiré une hiérarchie de priorités claire. Le suivi longitudinal reste utile : une baisse marquée d'une mesure à l'autre est un signal précoce." }
      ],
      amelioration: {
        intro: "La satisfaction de vie ne se « pense » pas directement à la hausse : elle suit les changements réels dans les domaines qui comptent pour vous, plus quelques biais d'évaluation corrigeables. Les leviers sérieux sont prosaïques.",
        axes: [
          { titre: "Faire le bilan domaine par domaine", texte: "Notez de 1 à 10 votre satisfaction dans chaque domaine : relations proches, couple, travail, santé, finances, temps libre, sens. Choisissez LE domaine au score le plus bas parmi ceux qui comptent vraiment pour vous, et fixez-y un changement concret à 3 mois. La recherche sur le bien-être montre que la satisfaction globale suit les domaines, pas l'inverse." },
          { titre: "Investir dans les liens", texte: "Le prédicteur le plus robuste de la satisfaction de vie à long terme est la qualité des relations proches (étude longitudinale de Harvard, 80+ ans de suivi). Rituels réguliers avec quelques personnes qui comptent — repas fixe, appel hebdomadaire — plutôt que du contact diffus." },
          { titre: "Vérifier l'écart idéaux/réalité dans les deux sens", texte: "L'item « ma vie correspond à mes idéaux » se travaille par les deux bouts : changer la réalité, mais aussi examiner des idéaux hérités (statut, comparaison sociale, réseaux) qui ne sont peut-être pas les vôtres. La comparaison sociale ascendante permanente est un des rares facteurs documentés qui dégradent la satisfaction sans rien changer à la vie réelle." },
          { titre: "Ne pas confondre satisfaction et humeur", texte: "Si votre humeur est basse (WHO-5 dégradé), traitez l'humeur d'abord : sommeil, mouvement, lumière, et repérage de la dépression si besoin. Juger sa vie à travers une dépression donne un bilan artificiellement noir — ce n'est pas le moment de prendre de grandes décisions de vie." }
        ],
        objectif: "Re-testez tous les 3 mois — la satisfaction de vie bouge lentement, un re-test mensuel ne capte que du bruit. Objectif réaliste : gagner 2 à 4 points en 6 mois via un chantier de domaine, ou simplement rester stable en période difficile.",
        ressources: [
          "Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. Journal of Personality Assessment, 49(1), 71-75.",
          "Blais, M. R., Vallerand, R. J., Pelletier, L. G., & Brière, N. M. (1989). L'échelle de satisfaction de vie : validation canadienne-française du « Satisfaction with Life Scale ». Canadian Journal of Behavioural Science, 21(2), 210-223.",
          "Pavot, W., & Diener, E. (2008). The Satisfaction With Life Scale and the emerging construct of life satisfaction. The Journal of Positive Psychology, 3(2), 137-152.",
          "Waldinger, R., & Schulz, M. « Une vie heureuse » (Les Arènes) — synthèse de l'étude longitudinale de Harvard."
        ],
        consulter: "Score ≤ 14 durable, ou bilan de vie très noir accompagné d'un moral effondré : parlez-en à votre médecin traitant et passez le PHQ-9 — une dépression non traitée fausse le jugement sur toute la vie."
      }
    }
  },
  source: {
    instrument: "Satisfaction With Life Scale (SWLS), 5 items",
    statut: "Domaine public (E. Diener), utilisation libre. Items français appuyés sur la validation canadienne-française de Blais et al. (1989).",
    refs: [
      "Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. Journal of Personality Assessment, 49(1), 71-75.",
      "Blais, M. R., Vallerand, R. J., Pelletier, L. G., & Brière, N. M. (1989). L'échelle de satisfaction de vie : validation canadienne-française du « Satisfaction with Life Scale ». Canadian Journal of Behavioural Science, 21(2), 210-223.",
      "Pavot, W., & Diener, E. (1993). Review of the Satisfaction With Life Scale. Psychological Assessment, 5(2), 164-172."
    ]
  }
},

/* ---------------- 26. ÉPANOUISSEMENT — FLOURISHING SCALE ---------------- */
{
  id: "flourish",
  nom: "Épanouissement",
  sigle: "Flourishing Scale · 8 items",
  cat: "Vie & sens",
  duree: "1-2 min",
  intro: "La Flourishing Scale (Diener et al., 2010) mesure en 8 items votre fonctionnement psychologique et social : sens, relations, engagement, compétence, optimisme, contribution aux autres. Là où la SWLS mesure un jugement global de satisfaction, celle-ci mesure les INGRÉDIENTS d'une vie qui fonctionne — c'est le versant sérieux de la psychologie positive : évaluer ce qui va bien, avec des instruments validés, pas des slogans. Validée en français (Villieux et al., 2016).",
  consigne: "Indiquez votre degré d'accord avec chacun des énoncés suivants, en pensant à votre vie telle qu'elle est ces derniers temps.",
  echelle: ECH_ACCORD7_D6,
  items: [
    { t: "Je mène une vie qui a du sens et un but", d: "F" },
    { t: "Mes relations sociales m'apportent du soutien et sont gratifiantes", d: "F" },
    { t: "Je suis engagé(e) et intéressé(e) par mes activités quotidiennes", d: "F" },
    { t: "Je contribue activement au bonheur et au bien-être des autres", d: "F" },
    { t: "Je suis compétent(e) et capable dans les activités qui sont importantes pour moi", d: "F" },
    { t: "Je suis quelqu'un de bien et je vis une belle vie", d: "F" },
    { t: "Je suis optimiste quant à mon avenir", d: "F" },
    { t: "Les gens me respectent", d: "F" }
  ],
  scoringNote: "Somme des 8 items (1 à 7 chacun, aucun item inversé), de 8 à 56. Diener et al. (2010) ne publient pas de seuils cliniques : les repères ci-dessous sont des zones de lecture pragmatiques (l'échelle est conçue pour donner un score unique de fonctionnement psychosocial et pour le suivi). Dans les échantillons étudiants publiés, la moyenne tourne autour de 44-45.",
  dims: {
    F: {
      nom: "Épanouissement psychosocial", format: "somme", min: 8, max: 56, valence: true,
      descriptif: "L'épanouissement (« flourishing ») recouvre huit ingrédients d'une vie qui fonctionne : sens, relations, engagement, contribution, compétence, estime, optimisme, respect. L'absence de mal-être ne suffit pas à l'épanouissement — et inversement, on peut être épanoui(e) en traversant des difficultés.",
      bandes: [
        { max: 23, label: "Fonctionnement en berne", niveau: "alerte", texte: "Vous êtes en désaccord avec la plupart des énoncés : sens, relations et engagement font défaut en ce moment. Ce niveau accompagne souvent une dépression, un isolement marqué ou une crise de vie profonde. Passez le PHQ-9 et le test de solitude (UCLA) de cette app pour préciser, et parlez-en à votre médecin traitant : ce n'est pas un état à endurer seul(e)." },
        { max: 35, label: "Fonctionnement fragile", niveau: "attention", texte: "Plusieurs ingrédients de l'épanouissement manquent : regardez vos réponses item par item — sens, relations, engagement, contribution ? Chacun se travaille séparément, et les axes ci-dessous sont classés par niveau de preuve. Si l'humeur est aussi en berne (WHO-5), commencez par elle." },
        { max: 45, label: "Fonctionnement correct", niveau: "ok", texte: "Score dans la zone des moyennes publiées : l'essentiel fonctionne, avec des ingrédients moins nourris que d'autres. Repérez le ou les deux items où vous avez répondu le plus bas — c'est là que l'investissement rapporte le plus." },
        { max: 56, label: "Épanouissement élevé", niveau: "ok", texte: "Vous approuvez la quasi-totalité des énoncés : sens, liens, engagement et sentiment de contribution sont au rendez-vous. C'est le meilleur facteur de protection documenté face aux coups durs. Le suivi reste utile : une chute sur un item précis (relations, engagement) est un signal précoce et actionnable." }
      ],
      amelioration: {
        intro: "L'épanouissement ne s'obtient pas en « pensant positif » : il suit l'investissement réel dans le sens, les liens et l'engagement. Trois leviers ont un niveau de preuve correct ; aucun n'est spectaculaire, tous sont cumulatifs.",
        axes: [
          { titre: "Relations : profondeur avant quantité", texte: "L'item « relations gratifiantes » est le plus prédictif du bien-être à long terme. Investissez dans 2-3 liens profonds avec des rituels réguliers, et pratiquez l'auto-dévoilement réciproque (partager du réel, pas seulement de l'actualité). Si la solitude domine, faites le test UCLA de cette app." },
          { titre: "Engagement : activités à valeur, pas seulement à plaisir", texte: "Planifiez chaque semaine au moins une activité qui a du SENS pour vous — créer, apprendre, transmettre, aider — distincte du divertissement passif. L'activation comportementale (planifier des activités de valeur) est un des mécanismes les mieux validés de la psychologie clinique, et il fonctionne aussi en prévention." },
          { titre: "Contribution : aider concrètement", texte: "Le bénévolat et l'aide concrète aux autres ont un effet mesurable et répliqué sur le bien-être de celui qui aide — à condition d'être choisi, pas subi. Une heure régulière vaut mieux qu'un engagement héroïque abandonné au bout d'un mois." },
          { titre: "Sens : expliciter ses valeurs", texte: "Exercice issu des thérapies d'acceptation et d'engagement (ACT, bien validées) : listez vos 3-5 valeurs centrales, puis vérifiez combien d'heures de votre semaine réelle les servent. L'écart entre valeurs et emploi du temps est souvent la source précise du sentiment de vide — et il se corrige par l'agenda, pas par l'introspection seule." }
        ],
        objectif: "Choisissez UN ingrédient faible (votre item le plus bas) et travaillez-le 8 semaines avec une action hebdomadaire concrète, puis re-testez. Objectif : remonter cet item de 1 à 2 points — le score global suivra.",
        ressources: [
          "Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R. (2010). New well-being measures: Short scales to assess flourishing and positive and negative feelings. Social Indicators Research, 97(2), 143-156.",
          "Villieux, A., Sovet, L., Jung, S.-C., & Guilbert, L. (2016). Psychological flourishing: Validation of the French version of the Flourishing Scale and exploration of its relationships with personality traits. Personality and Individual Differences, 88, 1-5.",
          "Harris, R. « Le piège du bonheur » (Les Éditions de l'Homme) — introduction grand public à l'ACT, valeurs et engagement.",
          "Waldinger, R., & Schulz, M. « Une vie heureuse » (Les Arènes) — l'étude de Harvard sur ce qui fait une vie qui fonctionne."
        ],
        consulter: "Score très bas durable, perte de sens accompagnée d'un moral effondré ou d'un retrait social marqué : médecin traitant, et passez le PHQ-9 — la perte d'intérêt et de sens est un symptôme dépressif central."
      }
    }
  },
  source: {
    instrument: "Flourishing Scale (FS), 8 items",
    statut: "Copyright E. Diener et R. Biswas-Diener, utilisation libre autorisée par les auteurs (recherche et usage non commercial). Items français appuyés sur la validation de Villieux et al. (2016).",
    refs: [
      "Diener, E., Wirtz, D., Tov, W., Kim-Prieto, C., Choi, D., Oishi, S., & Biswas-Diener, R. (2010). New well-being measures: Short scales to assess flourishing and positive and negative feelings. Social Indicators Research, 97(2), 143-156.",
      "Villieux, A., Sovet, L., Jung, S.-C., & Guilbert, L. (2016). Psychological flourishing: Validation of the French version of the Flourishing Scale and exploration of its relationships with personality traits. Personality and Individual Differences, 88, 1-5."
    ]
  }
},

/* ---------------- 27. GRATITUDE — GQ-6 ---------------- */
{
  id: "gq6",
  nom: "Gratitude",
  sigle: "GQ-6 · 6 items",
  cat: "Vie & sens",
  duree: "1 min",
  intro: "Le Gratitude Questionnaire (GQ-6, McCullough, Emmons & Tsang, 2002) mesure votre disposition à la gratitude : la tendance à remarquer ce que vous recevez et à en éprouver de la reconnaissance — comme trait, pas comme exercice. À ne pas confondre avec l'industrie du « journal de gratitude miracle » : la disposition à la gratitude est un trait réel et bien mesuré, mais les interventions pour l'augmenter ont des effets réels et MODESTES dans les méta-analyses. On mesure ici ce qui va bien, honnêtement — sans le survendre.",
  consigne: "Indiquez votre degré d'accord avec chacun des énoncés suivants. Répondez d'après ce que vous ressentez habituellement, pas d'après ce qu'il faudrait ressentir.",
  echelle: ECH_ACCORD7_D6,
  items: [
    { t: "J'ai tellement de choses dans la vie pour lesquelles être reconnaissant(e)", d: "G" },
    { t: "Si je devais faire la liste de tout ce pour quoi je me sens reconnaissant(e), elle serait très longue", d: "G" },
    { t: "Quand je regarde le monde, je ne vois pas grand-chose qui mérite de la gratitude", d: "G", r: true },
    { t: "Je suis reconnaissant(e) envers un grand nombre de personnes", d: "G" },
    { t: "En vieillissant, je me sens plus capable d'apprécier les personnes, les événements et les situations qui ont fait partie de mon histoire", d: "G" },
    { t: "De longues périodes peuvent s'écouler avant que je ressente de la gratitude envers quelque chose ou quelqu'un", d: "G", r: true }
  ],
  scoringNote: "Somme des 6 items (1 à 7 chacun, items 3 et 6 recodés), de 6 à 42. Pas de seuil clinique : dans les échantillons adultes publiés, les scores sont très élevés (moyenne autour de 35-36, la plupart des adultes entre 30 et 42) — un score « moyen » sur cette échelle est donc déjà haut dans l'absolu, et les repères ci-dessous en tiennent compte.",
  dims: {
    G: {
      nom: "Disposition à la gratitude", format: "somme", min: 6, max: 42, valence: true,
      descriptif: "La disposition à la gratitude — remarquer ce qu'on reçoit et à qui on le doit — est corrélée au bien-être, à la qualité des relations et à une moindre dépression dans de nombreuses études. La corrélation est robuste ; la manipuler artificiellement l'est beaucoup moins.",
      bandes: [
        { max: 20, label: "Gratitude faible", niveau: "attention", texte: "Vous éprouvez rarement de la reconnaissance, et le monde vous semble en offrir peu d'occasions. Ce score très en dessous des moyennes publiées accompagne souvent une humeur dégradée (la dépression éteint littéralement la capacité à percevoir le positif) ou une période d'épuisement. Vérifiez le versant humeur (WHO-5, PHQ-9) avant de conclure à un trait." },
        { max: 29, label: "Gratitude modérée", niveau: "neutre", texte: "En dessous des moyennes adultes publiées (autour de 35), sans être bas dans l'absolu : la reconnaissance vous est accessible mais elle n'est pas votre pente naturelle. Ni un défaut, ni une urgence — les axes ci-dessous peuvent l'entretenir, avec des attentes réalistes." },
        { max: 36, label: "Gratitude élevée", niveau: "ok", texte: "Score dans la zone des moyennes adultes : vous remarquez régulièrement ce que vous recevez et à qui vous le devez. C'est associé à des relations plus solides — la gratitude EXPRIMÉE, en particulier, renforce mesurablement les liens." },
        { max: 42, label: "Gratitude très élevée", niveau: "ok", texte: "La reconnaissance est un trait saillant chez vous : vous percevez spontanément ce que la vie et les autres vous apportent. Un point de vigilance honnête : la gratitude ne doit pas servir à s'interdire les plaintes légitimes — être reconnaissant(e) ET vouloir que les choses changent ne sont pas contradictoires." }
      ],
      amelioration: {
        intro: "Transparence d'abord : les interventions de gratitude ont un effet réel mais MODESTE — la méta-analyse de Davis et al. (2016) trouve des effets faibles, surtout comparés à des activités placebo. Utile en complément d'hygiène mentale, insuffisant comme traitement de quoi que ce soit. Voici ce qui tient la route.",
        axes: [
          { titre: "Exprimer plutôt qu'énumérer", texte: "L'effet le plus intéressant n'est pas dans le carnet mais dans l'expression : dire ou écrire concrètement à quelqu'un ce qu'il/elle vous a apporté (la « lettre de gratitude » est l'exercice au meilleur signal dans la littérature). Bénéfice double : sur vous, et sur la relation — la gratitude exprimée est un des comportements qui renforcent le plus les liens." },
          { titre: "Trois choses précises — si ça vous convient", texte: "Noter 3 événements positifs du jour ET leur cause fonctionne mieux que des généralités (« ma santé »). Effet modeste, coût quasi nul : à tester 2-3 semaines. Si ça devient une corvée, arrêtez sans culpabiliser — l'effet disparaît quand l'exercice est subi." },
          { titre: "Traiter la cause si le score est bas", texte: "Un score bas est plus souvent un SYMPTÔME (humeur dégradée, épuisement, comparaison sociale permanente) qu'une cause. Dans ce cas, le levier n'est pas un exercice de gratitude mais le traitement du problème sous-jacent : sommeil, dépression, charge. Un journal de gratitude ne soigne pas une dépression." },
          { titre: "Limiter la comparaison sociale ascendante", texte: "La gratitude et la comparaison permanente aux vies mises en scène des autres sont difficilement compatibles. Réduire l'exposition aux flux qui déclenchent l'envie (réseaux sociaux en défilement passif) est un levier indirect mais documenté." }
        ],
        objectif: "Si vous testez un exercice : 3 semaines, puis re-testez à 2-3 mois. Attente réaliste : quelques points, pas une transformation. L'indicateur le plus parlant n'est pas le score mais ce que devient la qualité de vos relations quand vous exprimez la reconnaissance.",
        ressources: [
          "McCullough, M. E., Emmons, R. A., & Tsang, J.-A. (2002). The grateful disposition: A conceptual and empirical topography. Journal of Personality and Social Psychology, 82(1), 112-127.",
          "Davis, D. E., Choe, E., Meyers, J., et al. (2016). Thankful for the little things: A meta-analysis of gratitude interventions. Journal of Counseling Psychology, 63(1), 20-31 — la lecture honnête des effets.",
          "Wood, A. M., Froh, J. J., & Geraghty, A. W. A. (2010). Gratitude and well-being: A review and theoretical integration. Clinical Psychology Review, 30(7), 890-905.",
          "Psycom.org — rubrique « prendre soin de sa santé mentale » : information indépendante, sans promesse miracle."
        ],
        consulter: "Un score bas n'est pas un motif de consultation en soi. Mais s'il s'accompagne d'une incapacité durable à ressentir du plaisir ou de l'intérêt (anhédonie), passez le PHQ-9 et parlez-en à votre médecin : c'est un symptôme dépressif classique, qui se traite."
      }
    }
  },
  source: {
    instrument: "Gratitude Questionnaire — Six Item Form (GQ-6)",
    statut: "Instrument de recherche librement utilisable à des fins non commerciales. Adaptation française réalisée pour cette application d'après les items originaux.",
    refs: [
      "McCullough, M. E., Emmons, R. A., & Tsang, J.-A. (2002). The grateful disposition: A conceptual and empirical topography. Journal of Personality and Social Psychology, 82(1), 112-127.",
      "Davis, D. E., Choe, E., Meyers, J., Wade, N., Varjas, K., Gifford, A., Quinn, A., Hook, J. N., Van Tongeren, D. R., Griffin, B. J., & Worthington, E. L., Jr. (2016). Thankful for the little things: A meta-analysis of gratitude interventions. Journal of Counseling Psychology, 63(1), 20-31."
    ]
  }
},

/* ---------------- 28. CONSOMMATION D'ALCOOL — AUDIT-C ---------------- */
{
  id: "auditc",
  nom: "Consommation d'alcool",
  sigle: "AUDIT-C · 3 items",
  cat: "Clinique — repérage",
  duree: "1 min",
  avertissement: "Ce questionnaire n'a de valeur que si vous répondez honnêtement — personne d'autre que vous ne voit vos réponses. Un « verre » désigne un verre standard (~10 g d'alcool pur) : un demi de bière (25 cl à 5°), un verre de vin (10 cl à 12°), une dose de spiritueux (3 cl à 40°) — un verre servi à la maison en contient souvent le double. Ce test est un outil de repérage, pas un diagnostic : seul un professionnel de santé peut évaluer votre situation.",
  intro: "L'AUDIT-C (Bush et al., 1998) est la version courte à 3 questions de l'AUDIT, le questionnaire de repérage des consommations d'alcool à risque développé par l'Organisation Mondiale de la Santé. C'est l'outil utilisé en médecine générale dans de nombreux pays, validé en français (Gache et al., 2005). Il ne mesure pas une dépendance : il repère les consommations qui exposent à un risque pour la santé, souvent bien avant tout problème visible.",
  consigne: "Répondez d'après votre consommation réelle des 12 derniers mois. Un « verre » = un verre standard (voir l'encadré ci-dessus).",
  echelle: { labels: ["Jamais", "1 fois par mois ou moins", "2 à 4 fois par mois", "2 à 3 fois par semaine", "4 fois par semaine ou plus"], valeurs: [0, 1, 2, 3, 4] },
  echelles: [
    { labels: ["Jamais", "1 fois par mois ou moins", "2 à 4 fois par mois", "2 à 3 fois par semaine", "4 fois par semaine ou plus"], valeurs: [0, 1, 2, 3, 4] },
    { labels: ["1 ou 2", "3 ou 4", "5 ou 6", "7 à 9", "10 ou plus"], valeurs: [0, 1, 2, 3, 4] },
    { labels: ["Jamais", "Moins d'une fois par mois", "Une fois par mois", "Une fois par semaine", "Tous les jours ou presque"], valeurs: [0, 1, 2, 3, 4] }
  ],
  items: [
    { t: "À quelle fréquence consommez-vous des boissons contenant de l'alcool ?", d: "A", e: 0 },
    { t: "Combien de verres standard buvez-vous un jour typique où vous buvez de l'alcool ?", d: "A", e: 1 },
    { t: "À quelle fréquence buvez-vous six verres ou plus en une même occasion ?", d: "A", e: 2 }
  ],
  scoringNote: "Somme des 3 items, de 0 à 12. Les seuils de repérage validés diffèrent selon le sexe : un score ≥ 3 chez les femmes ou ≥ 4 chez les hommes signale une consommation à risque justifiant d'en parler à un professionnel (Bush et al., 1998 ; Bradley et al., 2003). Cette application ne connaissant pas votre sexe, les bandes ci-dessous présentent les deux seuils — appliquez celui qui vous concerne. Si vous ne buvez jamais d'alcool, votre score est 0 : tout va bien, ce test ne vous concerne pas.",
  dims: {
    A: {
      nom: "Consommation d'alcool (12 derniers mois)", format: "somme", min: 0, max: 12, valence: false,
      descriptif: "L'AUDIT-C combine fréquence, quantité typique et épisodes de consommation massive (6 verres ou plus). Il repère les consommations à risque pour la santé — ce qui inclut beaucoup de consommations socialement banales : les repères de Santé publique France sont de maximum 10 verres par semaine, maximum 2 par jour, et des jours sans.",
      bandes: [
        { max: 2, label: "Consommation à faible risque", niveau: "ok", texte: "Votre consommation déclarée est en dessous des seuils de repérage, quel que soit votre sexe. Rappel utile : « faible risque » ne veut pas dire « sans risque » — il n'existe pas de seuil de consommation d'alcool sans aucun effet sur la santé, mais à ce niveau le risque ajouté est faible." },
        { max: 4, label: "Au seuil de repérage", niveau: "attention", texte: "Vous êtes au niveau des seuils de repérage validés : 3 pour les femmes, 4 pour les hommes. Si votre score atteint ou dépasse le seuil qui vous concerne, votre consommation expose à un risque pour la santé, même sans aucune sensation de perte de contrôle. C'est le bon moment pour en parler à votre médecin traitant — le repérage précoce est précisément fait pour agir avant les problèmes." },
        { max: 7, label: "Repérage positif", niveau: "alerte", texte: "Score au-dessus des seuils de repérage quel que soit le sexe : votre consommation est à risque pour votre santé (sommeil, tension, foie, cancers, humeur — l'alcool est dépressogène). Ce n'est ni un jugement moral ni un diagnostic de dépendance, mais c'est un signal sérieux : parlez-en à votre médecin traitant, ou appelez Alcool info service (0 980 980 930) — anonyme et sans jugement." },
        { max: 12, label: "Consommation à risque élevé", niveau: "alerte", texte: "Score dans la zone haute de l'échelle : consommation fréquente, importante ou avec des épisodes massifs répétés. À ce niveau, une évaluation par un professionnel est nettement indiquée — d'autant qu'un arrêt brutal sans accompagnement peut être dangereux en cas de dépendance physique installée. Médecin traitant, ou consultation d'addictologie (CSAPA, gratuites et confidentielles) : ces situations se prennent en charge, sans morale et avec de bons résultats." }
      ],
      amelioration: {
        intro: "Réduire une consommation d'alcool est un objectif de santé ordinaire et atteignable — la grande majorité des personnes qui réduisent le font sans dépendance et sans drame. Les stratégies ci-dessous sont celles des recommandations de santé publique et des interventions brèves validées en médecine générale.",
        axes: [
          { titre: "Compter réellement", texte: "Tenez le compte exact de vos verres standard pendant 2 semaines (carnet ou application) : la sous-estimation spontanée est quasi universelle, notamment à cause des verres servis à la maison, plus grands que les doses standard. Le simple fait de compter réduit déjà la consommation dans les études sur les interventions brèves." },
          { titre: "Des jours sans, planifiés", texte: "Le repère de Santé publique France inclut des jours sans alcool chaque semaine. Fixez-les à l'avance (par exemple lundi-jeudi) plutôt que de décider au jour le jour — la décision anticipée coûte moins de volonté que la résistance répétée. Le mois sans alcool (« Dry January / Défi de janvier ») est aussi un test utile : si l'idée même vous paraît impossible, c'est une information importante." },
          { titre: "Réduire les déclencheurs situationnels", texte: "L'essentiel de la consommation est situationnel : identifiez vos contextes à risque (fin de journée, repas sociaux, stress) et modifiez le contexte plutôt que de compter sur la volonté — pas d'alcool stocké à domicile, premier verre sans alcool, verre d'eau systématique entre deux. Si vous buvez pour gérer stress ou anxiété, traitez la cause : passez le PSS-10 ou le GAD-7 de cette app." },
          { titre: "En parler tôt, sans dramatiser", texte: "Une consultation ne débouche pas sur une injonction d'abstinence : les interventions brèves en médecine générale visent la réduction, et fonctionnent. Alcool info service (0 980 980 930, 7j/7 de 8 h à 2 h, anonyme et non surtaxé) permet d'en parler sans aucun engagement ; alcool-info-service.fr propose aussi un chat et des annuaires de consultations." }
        ],
        objectif: "Objectif concret : repasser sous les repères de Santé publique France (10 verres/semaine maximum, 2/jour maximum, des jours sans) et sous le seuil de repérage qui vous concerne. Re-testez à 3 mois. Si vous n'arrivez pas à réduire malgré des tentatives répétées, c'est le signal qu'un accompagnement est nécessaire — pas un échec de volonté.",
        ressources: [
          "Alcool info service : 0 980 980 930 (7j/7, 8 h - 2 h, anonyme, appel non surtaxé) et alcool-info-service.fr (chat, auto-évaluation, annuaire des consultations).",
          "Santé publique France — repères de consommation à moindre risque (sante.gouv.fr / alcool-info-service.fr).",
          "Bush, K., Kivlahan, D. R., McDonell, M. B., Fihn, S. D., & Bradley, K. A. (1998). The AUDIT alcohol consumption questions (AUDIT-C). Archives of Internal Medicine, 158(16), 1789-1795.",
          "CSAPA (Centres de Soin, d'Accompagnement et de Prévention en Addictologie) — consultations gratuites et confidentielles, annuaire sur alcool-info-service.fr."
        ],
        consulter: "Score au-dessus du seuil qui vous concerne (3 femmes / 4 hommes) : parlez-en à votre médecin traitant. Score ≥ 8, impossibilité de réduire malgré des tentatives, symptômes au réveil (tremblements, sueurs) ou consommation dès le matin : consultation d'addictologie sans attendre (CSAPA, gratuit) — et ne tentez pas un arrêt brutal seul(e) en cas de consommation quotidienne importante."
      }
    }
  },
  source: {
    instrument: "AUDIT-C (Alcohol Use Disorders Identification Test — Consumption), 3 items",
    statut: "Extrait de l'AUDIT, développé pour l'Organisation Mondiale de la Santé, libre d'utilisation. Items français appuyés sur la version française validée de l'AUDIT (Gache et al., 2005).",
    refs: [
      "Bush, K., Kivlahan, D. R., McDonell, M. B., Fihn, S. D., & Bradley, K. A. (1998). The AUDIT alcohol consumption questions (AUDIT-C): An effective brief screening test for problem drinking. Archives of Internal Medicine, 158(16), 1789-1795.",
      "Gache, P., Michaud, P., Landry, U., Accietto, C., Arfaoui, S., Wenger, O., & Daeppen, J.-B. (2005). The Alcohol Use Disorders Identification Test (AUDIT) as a screening tool for excessive drinking in primary care: Reliability and validity of a French version. Alcoholism: Clinical and Experimental Research, 29(11), 2001-2007.",
      "Saunders, J. B., Aasland, O. G., Babor, T. F., de la Fuente, J. R., & Grant, M. (1993). Development of the Alcohol Use Disorders Identification Test (AUDIT). Addiction, 88(6), 791-804."
    ]
  }
}

];

TESTS = TESTS.concat(TESTS_6);
