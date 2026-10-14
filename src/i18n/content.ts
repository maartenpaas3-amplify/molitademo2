import { Language } from './translations';

export interface ProductText {
  name: string;
  subName: string;
  category: string;
  description: string;
  benefits: string[];
  targetAudience: string;
  dosage: string;
  taste: string;
}

export const productTexts: Record<Language, Record<string, ProductText>> = {
  fr: {},
  de: {
    memoire: {
      name: 'Gedächtnis-Gummies',
      subName: 'Konzentration & kognitiver Fokus',
      category: 'Kognitive Unterstützung',
      description: 'Verbessern Sie Konzentration und geistige Leistung mit unserem massgeschneiderten Gedächtnis-Komplex.',
      benefits: [
        'Unterstützt das Kurz- und Langzeitgedächtnis',
        'Fördert geistige Klarheit und Lerngeschwindigkeit',
        'Reduziert geistige Ermüdung bei intensiver Arbeit',
      ],
      targetAudience: 'Studierende, anspruchsvolle Berufstätige und Senioren, die ihre geistige Schärfe bewahren möchten.',
      dosage: '2 Gummies täglich, am besten morgens zum Frühstück.',
      taste: 'Himbeere & wilde Johannisbeere',
    },
    vitalite: {
      name: 'Vitalitäts-Gummies',
      subName: 'Energie & aktive Abwehr',
      category: 'Tonus & Energie',
      description: 'Steigern Sie Ihre Energie auf natürliche Weise und ohne Nervosität dank der synergetischen Wirkung von Guarana und Vitamin C.',
      benefits: [
        'Natürlicher und anhaltender Energieschub',
        'Stärkung der Immunabwehr',
        'Hilft bei vorübergehender und saisonaler Müdigkeit',
      ],
      targetAudience: 'Alle, die im Alltag mehr Energie und Unterstützung für die Abwehrkräfte suchen.',
      dosage: '2 Gummies morgens oder am frühen Nachmittag.',
      taste: 'Zitrusfrüchte & Passionsfrucht',
    },
    sommeil: {
      name: 'Schlaf-Gummies',
      subName: 'Ruhige Nächte & Einschlafen',
      category: 'Nächtliche Entspannung',
      description: 'Für ruhige Nächte und ein Erwachen ohne Benommenheit dank der Synergie aus beruhigenden Pflanzen und B-Vitaminen.',
      benefits: [
        'Erleichtert ein schnelles und natürliches Einschlafen',
        'Verbessert die Qualität des Tiefschlafs',
        'Ohne Gewöhnungseffekt und ohne Müdigkeit am Morgen',
      ],
      targetAudience: 'Menschen mit Schlafstörungen, nächtlichem Aufwachen oder Jetlag.',
      dosage: '2 Gummies 30 Minuten vor dem Schlafengehen.',
      taste: 'Brombeere & sanfter Eisenkraut',
    },
    'cheveux-peau': {
      name: 'Haar- & Haut-Gummies',
      subName: 'Ausstrahlung, Volumen & Schönheit',
      category: 'Nutrikosmetik',
      description: 'Entdecken Sie strahlende natürliche Schönheit mit einem synergetischen Cocktail für kräftiges Haar und leuchtende Haut.',
      benefits: [
        'Fördert Haarwachstum und Haardichte',
        'Stärkt brüchige Nägel',
        'Spendet Feuchtigkeit und verleiht der Haut Glanz',
      ],
      targetAudience: 'Frauen und Männer, die ihr Haar stärken und ihre Haut von innen verschönern möchten.',
      dosage: '2 Gummies täglich, zu jeder Tageszeit.',
      taste: 'Weinbergpfirsich & grüner Apfel',
    },
    detente: {
      name: 'Entspannungs-Gummies',
      subName: 'Stressbewältigung & Gelassenheit',
      category: 'Anti-Stress & Ausgleich',
      description: 'Reduzieren Sie Stress und fördern Sie innere Ruhe ohne Nachlassen der Wachsamkeit dank wertvoller Adaptogene.',
      benefits: [
        'Hilft dem Körper, sich an emotionalen Stress anzupassen',
        'Fördert die Muskel- und Nervenentspannung',
        'Erhält einen gelassenen Gemütszustand im Tagesverlauf',
      ],
      targetAudience: 'Menschen mit Überlastung, gelegentlicher Anspannung oder in Übergangsphasen.',
      dosage: '2 Gummies täglich, sobald die ersten Anzeichen von Anspannung auftreten.',
      taste: 'Limette & milde Minze',
    },
  },
  it: {
    memoire: {
      name: 'Gummies Memoria',
      subName: 'Concentrazione & Focus cognitivo',
      category: 'Supporto cognitivo',
      description: 'Migliora la concentrazione e la funzione cognitiva con il nostro complesso memoria su misura.',
      benefits: [
        'Sostiene la memoria a breve e a lungo termine',
        'Favorisce la lucidità mentale e la rapidità di apprendimento',
        'Riduce l’affaticamento mentale durante i lavori intensi',
      ],
      targetAudience: 'Studenti, professionisti esigenti e senior che desiderano preservare la prontezza mentale.',
      dosage: '2 gummies al giorno, preferibilmente al mattino a colazione.',
      taste: 'Lampone & Ribes selvatico',
    },
    vitalite: {
      name: 'Gummies Vitalità',
      subName: 'Energia & Immunità attiva',
      category: 'Tono & Energia',
      description: 'Aumenta la tua energia in modo naturale e senza nervosismo grazie alle virtù sinergiche di guaranà e vitamina C.',
      benefits: [
        'Effetto energizzante naturale e duraturo',
        'Rafforzamento delle difese immunitarie',
        'Contrasta la stanchezza passeggera e stagionale',
      ],
      targetAudience: 'Chiunque cerchi più energia ogni giorno e un sostegno al sistema immunitario.',
      dosage: '2 gummies al mattino o a inizio pomeriggio.',
      taste: 'Agrumi & Frutto della passione',
    },
    sommeil: {
      name: 'Gummies Sonno',
      subName: 'Notti serene & Addormentamento',
      category: 'Relax notturno',
      description: 'Per notti tranquille e un risveglio senza torpore grazie a una sinergia di piante calmanti e vitamine del gruppo B.',
      benefits: [
        'Facilita un addormentamento rapido e naturale',
        'Migliora la qualità del sonno profondo',
        'Senza assuefazione né sonnolenza al risveglio',
      ],
      targetAudience: 'Persone soggette a insonnia, risvegli notturni o jet lag.',
      dosage: '2 gummies 30 minuti prima di coricarsi.',
      taste: 'Mora & Verbena dolce',
    },
    'cheveux-peau': {
      name: 'Gummies Capelli e Pelle',
      subName: 'Luminosità, Volume & Bellezza',
      category: 'Nutricosmesi',
      description: 'Svela una bellezza naturale e radiosa con un cocktail sinergico per capelli forti e pelle luminosa.',
      benefits: [
        'Stimola la crescita e la densità dei capelli',
        'Rinforza le unghie fragili',
        'Idrata e illumina la grana della pelle',
      ],
      targetAudience: 'Donne e uomini che desiderano rinforzare i capelli e valorizzare la pelle dall’interno.',
      dosage: '2 gummies al giorno in qualsiasi momento della giornata.',
      taste: 'Pesca di vigna & Mela verde',
    },
    detente: {
      name: 'Gummies Relax',
      subName: 'Gestione dello stress & Serenità',
      category: 'Anti-stress & Equilibrio',
      description: 'Riduci lo stress e favorisci la calma interiore senza cali di vigilanza grazie a preziosi adattogeni.',
      benefits: [
        'Aiuta l’organismo ad adattarsi allo stress emotivo',
        'Favorisce il rilassamento muscolare e nervoso',
        'Mantiene uno stato d’animo sereno per tutta la giornata',
      ],
      targetAudience: 'Persone sottoposte a superlavoro, ansia occasionale o periodi di transizione.',
      dosage: '2 gummies al giorno ai primi segnali di tensione.',
      taste: 'Lime & Menta delicata',
    },
  },
};

export interface UiStrings {
  story: {
    photoAlt: string; quote: string; team: string; place: string; knowHow: string; knowHowText: string;
    philosophy: string; title: string; p1: string; p2: string; q1: string; q1t: string; q2: string; q2t: string;
  };
  products: { badge: string; title: string; subtitle: string; ritual: string; details: string; discover: string; };
  detail: {
    close: string; aroma: string; format: string; formatValue: (n: number) => string; swiss: string;
    benefits: string; forWhom: string; ritualTitle: string; ritualText: string; certified: string;
    footerLabel: string; footerTitle: string; advise: (name: string) => string; dosage: string;
  };
  quiz: {
    badge: string; title: string; subtitle: string; steps: [string, string, string];
    goals: Record<string, string>; q2: string; times: [string, string, string];
    resultTitle: string; resultSub: string; main: string; duo: string; more: string; discover: string;
    cta: string; retry: string;
  };
  callback: {
    close: string; eyebrow: string; title: string; sub: string; okTitle: string;
    okText: (name: string, time: string, phone: string) => string; okClose: string;
    product: string; groupGummies: string; groupCare: string; name: string; namePh: string; phone: string;
    canton: string; other: string; time: string; times: [string, string, string]; lang: string; submit: string;
  };
  hero: { headlineStart: string; brand: string; tooltip: string; headlineEnd: string; text: string; scroll: string; };
  footer: {
    about: string; memoire: string; vitalite: string; sommeil: string; peau: string; detente: string;
    story: string; quiz: string; reviews: string; faq: string; advisor: string; rights: string;
  };
  verified: string;
  misc: { eyebrow: string; range: string; company: string; offices: string; swissLabel: string; swissQuality: string; faqQ: string; faqSub: string; faqCall: string; menu: string; closeTip: string; country: string; advisors: string; follow: string; legal: string; privacy: string; short: Record<string,string>; };
  groupLabel: string;
  complementaryNames: Record<string, { name: string; subName: string; category: string }>;
}

const frUi: UiStrings = {
  story: {
    photoAlt: 'Équipe Fondatrice Molita',
    quote: 'Nous avons créé Molita avec une conviction simple : prendre soin de soi ne doit plus jamais être une contrainte médicale, mais une parenthèse gourmande et hautement efficace.',
    team: 'Équipe Fondatrice Molita', place: 'Genève, Suisse', knowHow: 'Savoir-faire Suisse',
    knowHowText: 'Formulations développées en Suisse, testées en laboratoires indépendants pour garantir la biodisponibilité maximale de chaque vitamine.',
    philosophy: 'Notre Philosophie', title: 'L’Alliance de la Science Suisse et du Végétal',
    p1: 'Chez Molita, nous réinventons le rituel beauté et bien-être au quotidien. Fini les routines contraignantes et austères.',
    p2: 'Nos gummies nutricosmétiques et de bien-être sont élaborées à partir de pectine de fruits 100% végétale (sans gélatine animale), enrichies en extraits botaniques titrés (Ginkgo Biloba, Guarana, Rhodiola, Aubépine) et en actifs synergiques hautement assimilables.',
    q1: 'Qualité Sans Concession', q1t: 'Sans gluten, sans arômes synthétiques, sans OGM.',
    q2: 'Écoute & Relation Humaine', q2t: 'Un suivi téléphonique personnalisé avant et après votre cure.',
  },
  products: {
    badge: 'La Gamme Molita', title: 'Nos Formules Gummies',
    subtitle: 'Chaque rituel Molita associe des actifs cosmétiques et des extraits naturels de plantes. Découvrez la formule adaptée à votre quotidien.',
    ritual: 'Soin Rituel', details: 'Voir les détails', discover: 'Découvrir',
  },
  detail: {
    close: 'Fermer', aroma: 'Arôme', format: 'Format', formatValue: (n) => `${n} gummies (Rituel 30 jours)`,
    swiss: 'Qualité & Formulation Suisse', benefits: 'Bénéfices Principaux', forWhom: 'Pour qui ?',
    ritualTitle: 'Rituel Nutricosmétique & Bien-être',
    ritualText: 'Intégrez cette formule douce et végétale dans votre routine quotidienne pour des résultats visibles et durables.',
    certified: 'Soin nutricosmétique et bien-être certifié conforme aux normes suisses. Échange personnalisé avec nos experts sur demande.',
    footerLabel: 'Rituel Personnalisé Suisse', footerTitle: 'Conseil & Accompagnement Dédié',
    advise: (n) => `Être conseillé pour ${n}`, dosage: 'Posologie',
  },
  quiz: {
    badge: 'Diagnostic Express (1 Minute)', title: 'Trouvez votre duo de gummies idéal',
    subtitle: 'Répondez à 2 questions pour recevoir une recommandation sur-mesure élaborée par nos spécialistes suisses.',
    steps: ['1. Objectif', '2. Moment', '3. Recommandation'],
    goals: {
      memoire: 'Améliorer ma concentration & mémoire', vitalite: 'Retrouver de l’énergie & vitalité',
      sommeil: 'Retrouver un sommeil réparateur', 'cheveux-peau': 'Sublimer cheveux, peau & ongles',
      detente: 'Réduire le stress & l’anxiété',
    },
    q2: 'Quand ressentez-vous le plus le besoin d’un soutien ?',
    times: ['Le matin pour bien démarrer', 'Pendant la journée de travail', 'En fin de journée / Avant le coucher'],
    resultTitle: 'Votre Combinaison Sur-Mesure Molita',
    resultSub: 'Basé sur vos réponses, nous vous recommandons cette formule synergique :',
    main: 'Rituel Recommandé', duo: 'Duo Complémentaire', more: 'En savoir plus →', discover: 'Découvrir',
    cta: 'Échanger avec un conseiller bien-être (Gratuit)', retry: 'Recommencer le test',
  },
  callback: {
    close: 'Fermer', eyebrow: 'Service Client Suisse', title: 'Demander un rappel gratuit',
    sub: 'Un conseiller Molita dédié vous recontacte à l’horaire de votre choix pour vous guider.',
    okTitle: 'Demande transmise avec succès !',
    okText: (n, t, p) => `Merci ${n}. Un conseiller vous rappellera à la plage horaire ${t} au ${p}.`,
    okClose: 'Fermer la fenêtre', product: 'Produit de votre choix', groupGummies: 'Nos Formules Gummies',
    groupCare: 'Nos Soins Complémentaires', name: 'Nom & Prénom *', namePh: 'ex. Marc Dubois',
    phone: 'Numéro de Téléphone *', canton: 'Canton / Région (Suisse)', other: 'Autre canton',
    time: 'Créneau de rappel souhaité', times: ['Matin (09h - 12h)', 'Après-midi (14h - 17h)', 'Soir (17h - 19h)'],
    lang: 'Langue parlée pour l’appel', submit: 'Confirmer ma demande de rappel',
  },
  hero: {
    headlineStart: 'Le bien-être,', brand: 'Molita Suisse •', tooltip: 'Cliquer pour découvrir le produit →', headlineEnd: 'en un geste quotidien',
    text: 'Des formules hautement concentrées, enrichies en actifs nutricosmétiques et extraits botaniques. Conçues avec précision suisse pour sublimer votre éclat et votre bien-être au quotidien.',
    scroll: 'Défiler vers le bas',
  },
  footer: {
    about: 'Molita est la marque suisse spécialisée dans les gummies nutricosmétiques et de bien-être de haute concentration. Conçu et formulé selon les normes de qualité les plus exigeantes.',
    memoire: 'Gummies Mémoire (Rose)', vitalite: 'Gummies Vitalité (Orange)', sommeil: 'Gummies Sommeil (Bleu)',
    peau: 'Gummies Cheveux & Peau (Vert)', detente: 'Gummies Détente (Cyan)',
    story: 'Notre Histoire', quiz: 'Diagnostic Personnalisé', reviews: 'Avis Clients Suisse',
    faq: 'Questions Fréquentes (FAQ)', advisor: 'Conseiller Téléphonique Suisse',
    rights: '© 2026 Molita S.A. — Tous droits réservés. Qualité Suisse Certifiée.',
  },
  verified: 'Vérifié',
  misc: { eyebrow: 'Nutricosmétique & Bien-être', range: 'Gamme de Produits', company: 'Molita & Co', offices: 'Bureaux & Contact', swissLabel: 'Suisse :', swissQuality: 'Qualité Suisse', faqQ: 'Vous avez une autre question spécifique ?', faqSub: 'Nos conseillers en Suisse vous répondent avec bienveillance.', faqCall: 'Être rappelé', menu: 'Ouvrir le menu', closeTip: 'Fermer l’info-bulle', country: 'Suisse', advisors: 'Nos conseillers vous accompagnent pour associer vos formules gummies et soins complémentaires.', follow: 'Suivez Molita', legal: 'Mentions Légales', privacy: 'Politique de Confidentialité', short: { memoire: 'Mémoire', vitalite: 'Vitalité', sommeil: 'Sommeil', 'cheveux-peau': 'Cheveux et Peau', detente: 'Détente' } },
  groupLabel: 'Formules Gummies',
  complementaryNames: {},
};

const deUi: UiStrings = {
  story: {
    photoAlt: 'Gründerteam von Molita',
    quote: 'Wir haben Molita mit einer einfachen Überzeugung gegründet: Sich um sich selbst zu kümmern, soll nie wieder eine medizinische Pflicht sein, sondern eine genussvolle und hochwirksame Auszeit.',
    team: 'Gründerteam von Molita', place: 'Genf, Schweiz', knowHow: 'Schweizer Know-how',
    knowHowText: 'In der Schweiz entwickelte Rezepturen, in unabhängigen Labors getestet, um die maximale Bioverfügbarkeit jedes Vitamins zu gewährleisten.',
    philosophy: 'Unsere Philosophie', title: 'Die Verbindung von Schweizer Wissenschaft und Pflanzenkraft',
    p1: 'Bei Molita erfinden wir das tägliche Schönheits- und Wellness-Ritual neu. Schluss mit lästigen und freudlosen Routinen.',
    p2: 'Unsere nutrikosmetischen Wellness-Gummies werden aus 100% pflanzlichem Fruchtpektin (ohne tierische Gelatine) hergestellt und mit standardisierten Pflanzenextrakten (Ginkgo biloba, Guarana, Rhodiola, Weissdorn) sowie hochgradig bioverfügbaren, synergetischen Wirkstoffen angereichert.',
    q1: 'Qualität ohne Kompromisse', q1t: 'Glutenfrei, ohne synthetische Aromen, ohne GVO.',
    q2: 'Zuhören & persönlicher Kontakt', q2t: 'Eine persönliche telefonische Betreuung vor und nach Ihrer Kur.',
  },
  products: {
    badge: 'Das Molita-Sortiment', title: 'Unsere Gummy-Formeln',
    subtitle: 'Jedes Molita-Ritual verbindet kosmetische Wirkstoffe mit natürlichen Pflanzenextrakten. Entdecken Sie die Formel, die zu Ihrem Alltag passt.',
    ritual: 'Pflege-Ritual', details: 'Details ansehen', discover: 'Entdecken',
  },
  detail: {
    close: 'Schliessen', aroma: 'Geschmack', format: 'Packung', formatValue: (n) => `${n} Gummies (30-Tage-Ritual)`,
    swiss: 'Schweizer Qualität & Rezeptur', benefits: 'Hauptvorteile', forWhom: 'Für wen?',
    ritualTitle: 'Nutrikosmetisches Wellness-Ritual',
    ritualText: 'Integrieren Sie diese sanfte, pflanzliche Formel in Ihre tägliche Routine für sichtbare und nachhaltige Ergebnisse.',
    certified: 'Nutrikosmetische Wellness-Pflege gemäss Schweizer Standards. Persönliche Beratung durch unsere Experten auf Anfrage.',
    footerLabel: 'Persönliches Schweizer Ritual', footerTitle: 'Beratung & persönliche Begleitung',
    advise: (n) => `Beratung zu ${n} erhalten`, dosage: 'Dosierung',
  },
  quiz: {
    badge: 'Express-Diagnose (1 Minute)', title: 'Finden Sie Ihr ideales Gummy-Duo',
    subtitle: 'Beantworten Sie 2 Fragen und erhalten Sie eine massgeschneiderte Empfehlung unserer Schweizer Spezialisten.',
    steps: ['1. Ziel', '2. Zeitpunkt', '3. Empfehlung'],
    goals: {
      memoire: 'Konzentration & Gedächtnis verbessern', vitalite: 'Neue Energie & Vitalität finden',
      sommeil: 'Erholsamen Schlaf finden', 'cheveux-peau': 'Haare, Haut & Nägel verschönern',
      detente: 'Stress & Anspannung reduzieren',
    },
    q2: 'Wann brauchen Sie am meisten Unterstützung?',
    times: ['Morgens für einen guten Start', 'Während des Arbeitstags', 'Am Abend / Vor dem Schlafengehen'],
    resultTitle: 'Ihre massgeschneiderte Molita-Kombination',
    resultSub: 'Basierend auf Ihren Antworten empfehlen wir Ihnen diese synergetische Formel:',
    main: 'Empfohlenes Ritual', duo: 'Passende Ergänzung', more: 'Mehr erfahren →', discover: 'Entdecken',
    cta: 'Mit einem Wellness-Berater sprechen (kostenlos)', retry: 'Test wiederholen',
  },
  callback: {
    close: 'Schliessen', eyebrow: 'Schweizer Kundenservice', title: 'Kostenlosen Rückruf anfordern',
    sub: 'Ein persönlicher Molita-Berater ruft Sie zur gewünschten Zeit zurück und begleitet Sie.',
    okTitle: 'Anfrage erfolgreich übermittelt!',
    okText: (n, t, p) => `Vielen Dank ${n}. Ein Berater ruft Sie im Zeitfenster ${t} unter ${p} zurück.`,
    okClose: 'Fenster schliessen', product: 'Ihr gewünschtes Produkt', groupGummies: 'Unsere Gummy-Formeln',
    groupCare: 'Unsere ergänzenden Pflegeprodukte', name: 'Vor- & Nachname *', namePh: 'z. B. Marc Dubois',
    phone: 'Telefonnummer *', canton: 'Kanton / Region (Schweiz)', other: 'Anderer Kanton',
    time: 'Gewünschtes Rückruf-Zeitfenster', times: ['Morgens (09–12 Uhr)', 'Nachmittags (14–17 Uhr)', 'Abends (17–19 Uhr)'],
    lang: 'Sprache für das Telefonat', submit: 'Rückruf-Anfrage bestätigen',
  },
  hero: {
    headlineStart: 'Wohlbefinden,', brand: 'Molita Schweiz •', tooltip: 'Klicken, um das Produkt zu entdecken →', headlineEnd: 'in einer täglichen Geste',
    text: 'Hochkonzentrierte Formeln, angereichert mit nutrikosmetischen Wirkstoffen und Pflanzenextrakten. Mit Schweizer Präzision entwickelt, damit Sie täglich strahlen und sich wohlfühlen.',
    scroll: 'Nach unten scrollen',
  },
  footer: {
    about: 'Molita ist die Schweizer Marke für hochkonzentrierte nutrikosmetische Wellness-Gummies. Entwickelt und formuliert nach höchsten Qualitätsstandards.',
    memoire: 'Gedächtnis-Gummies (Rosa)', vitalite: 'Vitalitäts-Gummies (Orange)', sommeil: 'Schlaf-Gummies (Blau)',
    peau: 'Haar- & Haut-Gummies (Grün)', detente: 'Entspannungs-Gummies (Cyan)',
    story: 'Unsere Geschichte', quiz: 'Persönliche Diagnose', reviews: 'Kundenbewertungen Schweiz',
    faq: 'Häufige Fragen (FAQ)', advisor: 'Telefonberatung Schweiz',
    rights: '© 2026 Molita S.A. — Alle Rechte vorbehalten. Zertifizierte Schweizer Qualität.',
  },
  verified: 'Verifiziert',
  misc: { eyebrow: 'Nutrikosmetik & Wellness', range: 'Produktsortiment', company: 'Molita & Co', offices: 'Büro & Kontakt', swissLabel: 'Schweiz:', swissQuality: 'Schweizer Qualität', faqQ: 'Haben Sie eine andere spezielle Frage?', faqSub: 'Unsere Berater in der Schweiz antworten Ihnen gerne persönlich.', faqCall: 'Rückruf anfordern', menu: 'Menü öffnen', closeTip: 'Hinweis schliessen', country: 'Schweiz', advisors: 'Unsere Berater helfen Ihnen, Ihre Gummy-Formeln und ergänzenden Pflegeprodukte optimal zu kombinieren.', follow: 'Folgen Sie Molita', legal: 'Impressum', privacy: 'Datenschutzerklärung', short: { memoire: 'Gedächtnis', vitalite: 'Vitalität', sommeil: 'Schlaf', 'cheveux-peau': 'Haar & Haut', detente: 'Entspannung' } },
  groupLabel: 'Gummy-Formeln',
  complementaryNames: {},
};

const itUi: UiStrings = {
  story: {
    photoAlt: 'Team fondatore di Molita',
    quote: 'Abbiamo creato Molita con una convinzione semplice: prendersi cura di sé non deve più essere un obbligo medico, ma una pausa golosa e altamente efficace.',
    team: 'Team fondatore di Molita', place: 'Ginevra, Svizzera', knowHow: 'Know-how svizzero',
    knowHowText: 'Formulazioni sviluppate in Svizzera e testate in laboratori indipendenti per garantire la massima biodisponibilità di ogni vitamina.',
    philosophy: 'La nostra filosofia', title: 'L’alleanza tra scienza svizzera e mondo vegetale',
    p1: 'Da Molita reinventiamo il rituale quotidiano di bellezza e benessere. Basta con routine rigide e austere.',
    p2: 'Le nostre gummies nutricosmetiche e per il benessere sono realizzate con pectina di frutta 100% vegetale (senza gelatina animale), arricchite con estratti botanici titolati (Ginkgo biloba, Guaranà, Rhodiola, Biancospino) e principi attivi sinergici altamente assimilabili.',
    q1: 'Qualità senza compromessi', q1t: 'Senza glutine, senza aromi sintetici, senza OGM.',
    q2: 'Ascolto & rapporto umano', q2t: 'Un accompagnamento telefonico personalizzato prima e dopo il tuo ciclo.',
  },
  products: {
    badge: 'La gamma Molita', title: 'Le nostre formule Gummies',
    subtitle: 'Ogni rituale Molita unisce principi attivi cosmetici ed estratti naturali di piante. Scopri la formula adatta alla tua quotidianità.',
    ritual: 'Rituale di cura', details: 'Vedi i dettagli', discover: 'Scopri',
  },
  detail: {
    close: 'Chiudi', aroma: 'Aroma', format: 'Formato', formatValue: (n) => `${n} gummies (rituale di 30 giorni)`,
    swiss: 'Qualità & formulazione svizzera', benefits: 'Benefici principali', forWhom: 'Per chi?',
    ritualTitle: 'Rituale nutricosmetico & benessere',
    ritualText: 'Integra questa formula delicata e vegetale nella tua routine quotidiana per risultati visibili e duraturi.',
    certified: 'Trattamento nutricosmetico e di benessere conforme agli standard svizzeri. Consulenza personalizzata con i nostri esperti su richiesta.',
    footerLabel: 'Rituale personalizzato svizzero', footerTitle: 'Consulenza & accompagnamento dedicato',
    advise: (n) => `Fatti consigliare su ${n}`, dosage: 'Posologia',
  },
  quiz: {
    badge: 'Diagnosi express (1 minuto)', title: 'Trova il tuo duo di gummies ideale',
    subtitle: 'Rispondi a 2 domande per ricevere una raccomandazione su misura elaborata dai nostri specialisti svizzeri.',
    steps: ['1. Obiettivo', '2. Momento', '3. Raccomandazione'],
    goals: {
      memoire: 'Migliorare concentrazione & memoria', vitalite: 'Ritrovare energia & vitalità',
      sommeil: 'Ritrovare un sonno ristoratore', 'cheveux-peau': 'Valorizzare capelli, pelle & unghie',
      detente: 'Ridurre stress & ansia',
    },
    q2: 'Quando senti maggiormente il bisogno di un sostegno?',
    times: ['Al mattino per iniziare bene', 'Durante la giornata di lavoro', 'A fine giornata / Prima di dormire'],
    resultTitle: 'La tua combinazione su misura Molita',
    resultSub: 'In base alle tue risposte, ti consigliamo questa formula sinergica:',
    main: 'Rituale consigliato', duo: 'Duo complementare', more: 'Scopri di più →', discover: 'Scopri',
    cta: 'Parla con un consulente benessere (gratuito)', retry: 'Ricomincia il test',
  },
  callback: {
    close: 'Chiudi', eyebrow: 'Servizio clienti Svizzera', title: 'Richiedi una richiamata gratuita',
    sub: 'Un consulente Molita dedicato ti ricontatta all’orario che preferisci per guidarti.',
    okTitle: 'Richiesta inviata con successo!',
    okText: (n, t, p) => `Grazie ${n}. Un consulente ti richiamerà nella fascia oraria ${t} al numero ${p}.`,
    okClose: 'Chiudi la finestra', product: 'Prodotto di tuo interesse', groupGummies: 'Le nostre formule Gummies',
    groupCare: 'I nostri trattamenti complementari', name: 'Nome & Cognome *', namePh: 'es. Marco Dubois',
    phone: 'Numero di telefono *', canton: 'Cantone / Regione (Svizzera)', other: 'Altro cantone',
    time: 'Fascia oraria per la richiamata', times: ['Mattina (09–12)', 'Pomeriggio (14–17)', 'Sera (17–19)'],
    lang: 'Lingua della telefonata', submit: 'Conferma la richiesta di richiamata',
  },
  hero: {
    headlineStart: 'Il benessere,', brand: 'Molita Svizzera •', tooltip: 'Clicca per scoprire il prodotto →', headlineEnd: 'in un gesto quotidiano',
    text: 'Formule altamente concentrate, arricchite con principi attivi nutricosmetici ed estratti botanici. Create con precisione svizzera per valorizzare la tua luminosità e il tuo benessere ogni giorno.',
    scroll: 'Scorri verso il basso',
  },
  footer: {
    about: 'Molita è il marchio svizzero specializzato in gummies nutricosmetiche e per il benessere ad alta concentrazione. Ideate e formulate secondo i più elevati standard di qualità.',
    memoire: 'Gummies Memoria (Rosa)', vitalite: 'Gummies Vitalità (Arancio)', sommeil: 'Gummies Sonno (Blu)',
    peau: 'Gummies Capelli e Pelle (Verde)', detente: 'Gummies Relax (Ciano)',
    story: 'La nostra storia', quiz: 'Diagnosi personalizzata', reviews: 'Recensioni clienti Svizzera',
    faq: 'Domande frequenti (FAQ)', advisor: 'Consulente telefonico Svizzera',
    rights: '© 2026 Molita S.A. — Tutti i diritti riservati. Qualità svizzera certificata.',
  },
  verified: 'Verificato',
  misc: { eyebrow: 'Nutricosmesi & Benessere', range: 'Gamma di prodotti', company: 'Molita & Co', offices: 'Uffici & Contatti', swissLabel: 'Svizzera:', swissQuality: 'Qualità svizzera', faqQ: 'Hai un’altra domanda specifica?', faqSub: 'I nostri consulenti in Svizzera ti rispondono con cura e attenzione.', faqCall: 'Richiedi richiamata', menu: 'Apri il menu', closeTip: 'Chiudi il suggerimento', country: 'Svizzera', advisors: 'I nostri consulenti ti aiutano ad abbinare le formule gummies e i trattamenti complementari.', follow: 'Segui Molita', legal: 'Note legali', privacy: 'Informativa sulla privacy', short: { memoire: 'Memoria', vitalite: 'Vitalità', sommeil: 'Sonno', 'cheveux-peau': 'Capelli e Pelle', detente: 'Relax' } },
  groupLabel: 'Formule Gummies',
  complementaryNames: {},
};

export const ui: Record<Language, UiStrings> = { fr: frUi, de: deUi, it: itUi };

export const cantons: Record<Language, Record<string, string>> = {
  fr: { Genève: 'Genève (GE)', Vaud: 'Vaud (VD)', Valais: 'Valais (VS)', Neuchâtel: 'Neuchâtel (NE)', Fribourg: 'Fribourg (FR)', Jura: 'Jura (JU)', Zürich: 'Zürich (ZH)', Ticino: 'Ticino (TI)' },
  de: { Genève: 'Genf (GE)', Vaud: 'Waadt (VD)', Valais: 'Wallis (VS)', Neuchâtel: 'Neuenburg (NE)', Fribourg: 'Freiburg (FR)', Jura: 'Jura (JU)', Zürich: 'Zürich (ZH)', Ticino: 'Tessin (TI)' },
  it: { Genève: 'Ginevra (GE)', Vaud: 'Vaud (VD)', Valais: 'Vallese (VS)', Neuchâtel: 'Neuchâtel (NE)', Fribourg: 'Friburgo (FR)', Jura: 'Giura (JU)', Zürich: 'Zurigo (ZH)', Ticino: 'Ticino (TI)' },
};

/** Returns a product with its texts localized (FR = original data). */
export function localizeProduct<T extends { id: string }>(product: T, lang: Language): T {
  const tr = productTexts[lang][product.id];
  return tr ? { ...product, ...tr } : product;
}
