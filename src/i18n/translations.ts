export type Language = 'fr' | 'de' | 'it';

export interface Translations {
  header: {
    nav: {
      products: string;
      quiz: string;
      story: string;
    };
    callbackButton: string;
    whatsappButton: string;
    whatsappAria: string;
    mobile: {
      productsCategory: string;
      products: string;
      diagnostic: string;
      story: string;
      callbackButton: string;
      whatsappButton: string;
    };
  };
  hero: {
    primaryCta: string;
    quizCta: string;
    swipeHint: string;
    formulaOfTheMoment: string;
    serviceLink: string;
  };
  trustBanner: {
    title: string;
    items: { title: string; sub: string }[];
  };
  complementary: {
    badge: string;
    title: string;
    subtitle: string;
    discoverButton: string;
    products: {
      id: string;
      name: string;
      category: string;
      subName: string;
      tagline: string;
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    banner: string;
    reviews: {
      name: string;
      city: string;
      rating: number;
      text: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    whatsappLabel: string;
    whatsappCta: string;
    floatingTooltip: string;
    phoneLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      nav: {
        products: 'Nos Produits',
        quiz: 'Quiz Diagnostic',
        story: 'Notre Histoire',
      },
      callbackButton: 'Être rappelé (Suisse 🇨🇭)',
      whatsappButton: 'WhatsApp',
      whatsappAria: 'Contacter sur WhatsApp',
      mobile: {
        productsCategory: 'PRODUITS',
        products: 'Nos 5 Formules Gummies',
        diagnostic: 'Diagnostic sur-mesure',
        story: 'Notre Histoire',
        callbackButton: 'Demander un rappel gratuit 🇨🇭',
        whatsappButton: 'Contacter sur WhatsApp',
      },
    },
    hero: {
      primaryCta: 'Découvrir nos rituels',
      quizCta: 'Trouver mon rituel bien-être (Quiz 1 min)',
      swipeHint: '← Glisser pour voir les 5 formules →',
      formulaOfTheMoment: 'Formule du moment',
      serviceLink: 'Service client Suisse & Conseils : Rappel gratuit',
    },
    trustBanner: {
      title: 'Notre engagement qualité',
      items: [
        { title: 'Fabriqué en Suisse', sub: 'Qualité & Rigueur Scientifique' },
        { title: '100% Végan', sub: 'Pectine de fruit, 0 gélatine' },
        { title: 'Sans Gluten & Allergènes', sub: 'Digestion douce & optimale' },
        { title: 'Arômes Naturels', sub: 'Vrais fruits & extraits végétaux' },
      ],
    },
    complementary: {
      badge: 'GAMME ÉLARGIE',
      title: 'Nos Soins Complémentaires',
      subtitle: 'Une gamme élargie pour prendre soin de vous au quotidien',
      discoverButton: 'Découvrir',
      products: [
        {
          id: 'gelee-royale',
          name: 'Gelée Royale',
          category: 'COMPLÉMENT ALIMENTAIRE',
          subName: 'Défenses & Vitalité',
          tagline: 'Renforcez vos défenses naturelles et votre vitalité grâce aux vertus légendaires de la gelée royale.',
        },
        {
          id: 'omega-3',
          name: 'Omega 3',
          category: 'COMPLÉMENT ALIMENTAIRE',
          subName: 'Cœur & Cerveau',
          tagline: 'Soutenez votre santé cardiovasculaire, votre mémoire et vos articulations avec nos capsules Omega 3.',
        },
        {
          id: 'creme-argan',
          name: 'Crème Argan',
          category: 'SOIN COSMÉTIQUE',
          subName: 'Nutrition & Éclat',
          tagline: 'Une crème riche et nourrissante à l’huile d’argan pour une peau douce, hydratée et éclatante.',
        },
      ],
    },
    testimonials: {
      badge: 'Avis Vérifiés',
      title: 'Ils nous font confiance',
      subtitle: 'Découvrez les retours de nos clients en Suisse',
      banner: "Plus de 2'500 clients satisfaits en Suisse",
      reviews: [
        {
          name: 'Sophie M.',
          city: 'Genève',
          rating: 5,
          text: 'Depuis que je prends les Gummies Sommeil, mes nuits sont bien plus paisibles. Le suivi téléphonique personnalisé fait vraiment la différence.',
        },
        {
          name: 'Marc D.',
          city: 'Lausanne',
          rating: 5,
          text: "Les Gummies Vitalité m'accompagnent chaque matin. Un vrai coup de boost, sans nervosité ni effets secondaires.",
        },
        {
          name: 'Claire B.',
          city: 'Zurich',
          rating: 4,
          text: 'Très satisfaite de la qualité suisse des produits. La conseillère au téléphone a pris le temps de bien m’orienter vers le bon rituel.',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Questions Fréquentes',
      subtitle: 'Tout ce que vous devez savoir avant de commencer',
      items: [
        {
          question: 'Les gummies Molita sont-elles compatibles avec un traitement médical ?',
          answer:
            'Nos formules sont conçues à partir d’ingrédients naturels et bien tolérés. Toutefois, en cas de traitement médical en cours, de grossesse ou d’allaitement, nous recommandons de demander l’avis de votre médecin avant de débuter une cure.',
        },
        {
          question: 'Combien de temps dure une cure ?',
          answer:
            'Nous recommandons une cure de 1 à 3 mois pour ressentir pleinement les bienfaits, avec une prise quotidienne régulière. Nos conseillers peuvent vous orienter sur la durée la plus adaptée à votre objectif lors de l’appel.',
        },
        {
          question: 'Que se passe-t-il si le produit ne me convient pas ?',
          answer:
            'Votre satisfaction est notre priorité. Contactez notre service client par téléphone ou WhatsApp, nos conseillers sont à votre écoute pour trouver la solution la plus adaptée à votre situation.',
        },
        {
          question: 'Comment se déroule la livraison ?',
          answer:
            'Une fois votre rituel bien-être défini avec votre conseiller, votre commande est expédiée directement à votre domicile en Suisse.',
        },
        {
          question: 'Les produits sont-ils vraiment fabriqués en Suisse ?',
          answer:
            'Oui, l’ensemble de nos formules sont conçues, formulées et testées en Suisse, dans le respect des normes de qualité les plus exigeantes.',
        },
        {
          question: 'Puis-je combiner plusieurs formules de gummies ?',
          answer:
            'Tout à fait, de nombreux clients associent plusieurs rituels selon leurs besoins (ex. Sommeil et Détente). Votre conseiller peut vous aider à composer la combinaison la plus adaptée à votre profil.',
        },
      ],
    },
    contact: {
      whatsappLabel: 'WhatsApp :',
      whatsappCta: 'Contacter sur WhatsApp',
      floatingTooltip: 'Une question ? Écrivez-nous sur WhatsApp',
      phoneLabel: 'Suisse :',
    },
  },
  de: {
    header: {
      nav: {
        products: 'Unsere Produkte',
        quiz: 'Diagnose-Quiz',
        story: 'Unsere Geschichte',
      },
      callbackButton: 'Rückruf anfordern (Schweiz 🇨🇭)',
      whatsappButton: 'WhatsApp',
      whatsappAria: 'Auf WhatsApp kontaktieren',
      mobile: {
        productsCategory: 'PRODUKTE',
        products: 'Unsere 5 Gummy-Formeln',
        diagnostic: 'Individuelle Diagnose',
        story: 'Unsere Geschichte',
        callbackButton: 'Kostenlosen Rückruf anfordern 🇨🇭',
        whatsappButton: 'Auf WhatsApp kontaktieren',
      },
    },
    hero: {
      primaryCta: 'Unsere Rituale entdecken',
      quizCta: 'Mein Wohlfühl-Ritual finden (1-Min-Quiz)',
      swipeHint: '← Wischen, um alle 5 Formeln zu sehen →',
      formulaOfTheMoment: 'Formel des Moments',
      serviceLink: 'Schweizer Kundenservice & Beratung: Kostenloser Rückruf',
    },
    trustBanner: {
      title: 'Unser Qualitätsversprechen',
      items: [
        { title: 'Hergestellt in der Schweiz', sub: 'Qualität & wissenschaftliche Präzision' },
        { title: '100% Vegan', sub: 'Fruchtpektin, keine Gelatine' },
        { title: 'Glutenfrei & Allergenfrei', sub: 'Sanfte, optimale Pflege' },
        { title: 'Natürliche Aromen', sub: 'Echte Früchte & Pflanzenextrakte' },
      ],
    },
    complementary: {
      badge: 'ERWEITERTES SORTIMENT',
      title: 'Unsere Ergänzenden Pflegeprodukte',
      subtitle: 'Ein erweitertes Sortiment für Ihr tägliches Wohlbefinden',
      discoverButton: 'Entdecken',
      products: [
        {
          id: 'gelee-royale',
          name: 'Gelée Royale',
          category: 'NAHRUNGSERGÄNZUNGSMITTEL',
          subName: 'Abwehrkräfte & Vitalität',
          tagline: 'Stärken Sie Ihre natürlichen Abwehrkräfte und Ihre Vitalität dank der legendären Kräfte des Gelée Royale.',
        },
        {
          id: 'omega-3',
          name: 'Omega 3',
          category: 'NAHRUNGSERGÄNZUNGSMITTEL',
          subName: 'Herz & Gedächtnis',
          tagline: 'Unterstützen Sie Ihre Herz-Kreislauf-Gesundheit, Ihr Gedächtnis und Ihre Gelenke mit unseren Omega-3-Kapseln.',
        },
        {
          id: 'creme-argan',
          name: 'Argan-Creme',
          category: 'KOSMETISCHE PFLEGE',
          subName: 'Pflege & Ausstrahlung',
          tagline: 'Eine reichhaltige und nährende Creme mit Arganöl für zarte, mit Feuchtigkeit versorgte und strahlende Haut.',
        },
      ],
    },
    testimonials: {
      badge: 'Verifizierte Bewertungen',
      title: 'Sie vertrauen uns',
      subtitle: 'Entdecken Sie das Feedback unserer Kunden in der Schweiz',
      banner: 'Über 2’500 zufriedene Kunden in der Schweiz',
      reviews: [
        {
          name: 'Sophie M.',
          city: 'Genf',
          rating: 5,
          text: 'Seit ich die Schlaf-Gummies nehme, sind meine Nächte viel erholsamer. Die persönliche telefonische Betreuung macht wirklich den Unterschied.',
        },
        {
          name: 'Marc D.',
          city: 'Lausanne',
          rating: 5,
          text: 'Die Vitalitäts-Gummies begleiten mich jeden Morgen. Ein echter Energieschub, ganz ohne Nervosität oder Nebenwirkungen.',
        },
        {
          name: 'Claire B.',
          city: 'Zürich',
          rating: 4,
          text: 'Sehr zufrieden mit der Schweizer Qualität der Produkte. Die Beraterin am Telefon hat sich Zeit genommen, um mich zum passenden Ritual zu führen.',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was Sie vor Beginn wissen müssen',
      items: [
        {
          question: 'Sind Molita Gummies mit einer medizinischen Behandlung vereinbar?',
          answer:
            'Unsere Formeln werden aus natürlichen und gut verträglichen Inhaltsstoffen hergestellt. Bei laufender medizinischer Behandlung, Schwangerschaft oder Stillzeit empfehlen wir jedoch, vor Beginn einer Kur den Rat Ihres Arztes einzuholen.',
        },
        {
          question: 'Wie lange dauert eine Kur?',
          answer:
            'Wir empfehlen eine Kur von 1 bis 3 Monaten bei regelmässiger täglicher Einnahme, um die volle Wirkung zu spüren. Unsere Berater können Sie beim Anruf zur optimalen Dauer passend zu Ihrem Ziel beraten.',
        },
        {
          question: 'Was passiert, wenn das Produkt mir nicht zusagt?',
          answer:
            'Ihre Zufriedenheit steht bei uns an erster Stelle. Kontaktieren Sie unseren Kundenservice per Telefon oder WhatsApp – unsere Berater finden gerne die beste Lösung für Ihre Situation.',
        },
        {
          question: 'Wie läuft die Lieferung ab?',
          answer:
            'Sobald Ihr Wohlfühl-Ritual mit Ihrem Berater abgestimmt ist, wird Ihre Bestellung direkt zu Ihnen nach Hause in die Schweiz geliefert.',
        },
        {
          question: 'Werden die Produkte wirklich in der Schweiz hergestellt?',
          answer:
            'Ja, alle unsere Formeln werden in der Schweiz unter Einhaltung strengster Qualitätsstandards entwickelt, formuliert und geprüft.',
        },
        {
          question: 'Kann ich mehrere Gummy-Formeln kombinieren?',
          answer:
            'Absolut, viele Kundinnen und Kunden kombinieren verschiedene Rituale je nach Bedarf (z. B. Schlaf und Entspannung). Ihr Berater hilft Ihnen gerne dabei, die ideale Kombination für Ihr Profil zusammenzustellen.',
        },
      ],
    },
    contact: {
      whatsappLabel: 'WhatsApp:',
      whatsappCta: 'Auf WhatsApp kontaktieren',
      floatingTooltip: 'Haben Sie Fragen? Schreiben Sie uns auf WhatsApp',
      phoneLabel: 'Schweiz:',
    },
  },
  it: {
    header: {
      nav: {
        products: 'I Nostri Prodotti',
        quiz: 'Quiz Diagnostico',
        story: 'La Nostra Storia',
      },
      callbackButton: 'Richiedi richiamata (Svizzera 🇨🇭)',
      whatsappButton: 'WhatsApp',
      whatsappAria: 'Contatta su WhatsApp',
      mobile: {
        productsCategory: 'PRODUKTE',
        products: 'Le Nostre 5 Formule Gummies',
        diagnostic: 'Diagnosi personalizzata',
        story: 'La Nostra Storia',
        callbackButton: 'Richiedi richiamata gratuita 🇨🇭',
        whatsappButton: 'Contatta su WhatsApp',
      },
    },
    hero: {
      primaryCta: 'Scopri i nostri rituali',
      quizCta: 'Trova il mio rituale benessere (Quiz 1 min)',
      swipeHint: '← Scorri per vedere le 5 formule →',
      formulaOfTheMoment: 'Formula del momento',
      serviceLink: 'Servizio clienti Svizzera & Consulenza: Richiamata gratuita',
    },
    trustBanner: {
      title: 'Il nostro impegno per la qualità',
      items: [
        { title: 'Prodotto in Svizzera', sub: 'Qualità & rigore scientifico' },
        { title: '100% Vegano', sub: 'Pectina di frutta, 0 gelatina' },
        { title: 'Senza Glutine & Allergeni', sub: 'Digestione delicata & ottimale' },
        { title: 'Aromi Naturali', sub: 'Frutta vera & estratti vegetali' },
      ],
    },
    complementary: {
      badge: 'GAMMA AMPLIATA',
      title: 'I Nostri Trattamenti Complementari',
      subtitle: 'Una gamma estesa per prenderti cura di te ogni giorno',
      discoverButton: 'Scopri',
      products: [
        {
          id: 'gelee-royale',
          name: 'Pappa Reale',
          category: 'INTEGRATORE ALIMENTARE',
          subName: 'Difese & Vitalità',
          tagline: 'Rafforza le tue difese naturali e la tua vitalità grazie alle leggendarie proprietà della pappa reale.',
        },
        {
          id: 'omega-3',
          name: 'Omega 3',
          category: 'INTEGRATORE ALIMENTARE',
          subName: 'Cuore & Memoria',
          tagline: 'Sostieni la salute cardiovascolare, la memoria e le articolazioni con le nostre capsule di Omega 3.',
        },
        {
          id: 'creme-argan',
          name: 'Crema all’Argan',
          category: 'TRATTAMENTO COSMETICO',
          subName: 'Nutrizione & Luminosità',
          tagline: 'Una crema ricca e nutriente all’olio di argan per una pelle morbida, idratata e radiosa.',
        },
      ],
    },
    testimonials: {
      badge: 'Recensioni Verificate',
      title: 'Hanno fiducia in noi',
      subtitle: 'Scopri le opinioni dei nostri clienti in Svizzera',
      banner: 'Oltre 2’500 clienti soddisfatti in Svizzera',
      reviews: [
        {
          name: 'Sophie M.',
          city: 'Ginevra',
          rating: 5,
          text: 'Da quando assumo le Gummies Sonno, le mie notti sono molto più tranquille. Il supporto telefonico personalizzato fa davvero la differenza.',
        },
        {
          name: 'Marc D.',
          city: 'Losanna',
          rating: 5,
          text: 'Le Gummies Vitalità mi accompagnano ogni mattina. Una vera carica di energia, senza nervosismo né effetti collaterali.',
        },
        {
          name: 'Claire B.',
          city: 'Zurigo',
          rating: 4,
          text: 'Molto soddisfatta della qualità svizzera dei prodotti. La consulente al telefono si è presa il tempo per guidarmi verso il giusto rituale.',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Domande Frequenti',
      subtitle: 'Tutto quello che c’è da sapere prima di iniziare',
      items: [
        {
          question: 'Le gummies Molita sono compatibili con una terapia medica?',
          answer:
            'Le nostre formule sono create con ingredienti naturali e ben tollerati. Tuttavia, in caso di cure mediche in corso, gravidanza o allattamento, consigliamo di consultare il proprio medico prima di iniziare una routine.',
        },
        {
          question: 'Quanto dura un ciclo di trattamento?',
          answer:
            'Consigliamo un ciclo da 1 a 3 mesi con assunzione quotidiana regolare per beneficiare appieno delle proprietà. I nostri consulenti sapranno indicarti la durata ideale durante la chiamata.',
        },
        {
          question: 'Cosa succede se il prodotto non fa per me?',
          answer:
            'La tua soddisfazione è la nostra priorità. Contatta il nostro servizio clienti via telefono o WhatsApp: i nostri consulenti sono a disposizione per trovare la soluzione più adatta alla tua situazione.',
        },
        {
          question: 'Come avviene la spedizione?',
          answer:
            'Una volta definito il tuo rituale benessere con il consulente, il tuo ordine viene spedito direttamente a casa tua in Svizzera.',
        },
        {
          question: 'I prodotti sono davvero fabbricati in Svizzera?',
          answer:
            'Sì, tutte le nostre formule sono create, formulate e testate in Svizzera, nel rispetto dei più elevati standard qualitativi.',
        },
        {
          question: 'Posso combinare diverse formule di gummies?',
          answer:
            'Certamente, molti clienti abbinano più rituali a seconda delle proprie esigenze (es. Sonno e Relax). Il tuo consulente ti aiuterà a creare la combinazione ideale per il tuo profilo.',
        },
      ],
    },
    contact: {
      whatsappLabel: 'WhatsApp:',
      whatsappCta: 'Contatta su WhatsApp',
      floatingTooltip: 'Domande? Scrivici su WhatsApp',
      phoneLabel: 'Svizzera:',
    },
  },
};
