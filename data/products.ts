import { Product } from '../types';
import memoireImg from '../assets/images/gummies_memoire_1786632874806.jpg';
import vitaliteImg from '../assets/images/gummies_vitalite_1786632887064.jpg';
import sommeilImg from '../assets/images/gummies_sommeil_1786632899601.jpg';
import peauCheveuxImg from '../assets/images/gummies_peau_cheveux_1786632911609.jpg';
import detenteImg from '../assets/images/gummies_detente_1786632921886.jpg';

export const MOLITA_PRODUCTS: Product[] = [
  {
    id: 'memoire',
    name: 'Gummies Mémoire',
    subName: 'Concentration & Focus Cognitif',
    category: 'Soutien Cognitif',
    colorName: 'Magenta / Rose',
    accentHex: '#ec4899',
    gradientFromTo: 'from-pink-500 to-rose-600',
    bgLight: 'bg-pink-50/80',
    borderColor: 'border-pink-200',
    textColor: 'text-pink-600',
    badgeBg: 'bg-pink-100 text-pink-700',
    vitamins: ['Vitamine B5', 'Vitamine B3', 'Vitamine B6', 'Vitamine B12', 'Vitamine D', 'Vitamine B2'],
    keyIngredients: ['Extrait de Ginkgo Biloba', 'Zinc Bio-assimilable', 'Vitamines du Complexe B'],
    description: 'Améliorez votre concentration et votre fonction cognitive avec notre complexe mémoire sur-mesure.',
    benefits: [
      'Soutient la mémoire à court et long terme',
      'Favorise la clarté mentale et la vitesse d’apprentissage',
      'Réduit la fatigue intellectuelle lors de travaux intenses'
    ],
    targetAudience: 'Étudiants, professionnels exigeants et seniors souhaitant préserver leur acuité mentale.',
    dosage: '2 gummies par jour, de préférence le matin au petit-déjeuner.',
    taste: 'Framboise & Cassis Sauvage',
    countPerBottle: 60,
    priceCHF: 39,
    flyerCircleClass: 'bg-gradient-to-tr from-pink-500 via-rose-500 to-fuchsia-400',
    imageUrl: memoireImg
  },
  {
    id: 'vitalite',
    name: 'Gummies Vitalité',
    subName: 'Énergie & Immunité Active',
    category: 'Tonicité & Tonus',
    colorName: 'Orange Tonique',
    accentHex: '#f97316',
    gradientFromTo: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50/80',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    badgeBg: 'bg-orange-100 text-orange-700',
    vitamins: ['Vitamine C', 'Vitamine D', 'Vitamine B6', 'Vitamine B12', 'Vitamine E'],
    keyIngredients: ['Guarana Naturel', 'Curcuma Bio', 'Extrait d’Acérola'],
    description: 'Boostez votre énergie naturellement sans effet de nervosité grâce aux vertus synergiques du guarana et de la vitamine C.',
    benefits: [
      'Effet coup de fouet naturel et durable',
      'Renforcement des défenses immunitaires',
      'Lutte contre la fatigue passagère et saisonnière'
    ],
    targetAudience: 'Toute personne recherchant un regain d’énergie au quotidien et un soutien immunitaire.',
    dosage: '2 gummies le matin ou au début de l’après-midi.',
    taste: 'Agrumes & Fruit de la Passion',
    countPerBottle: 60,
    priceCHF: 39,
    flyerCircleClass: 'bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-400',
    imageUrl: vitaliteImg
  },
  {
    id: 'sommeil',
    name: 'Gummies Sommeil',
    subName: 'Nuits Paisibles & Endormissement',
    category: 'Relaxation Nocturne',
    colorName: 'Bleu Nuit',
    accentHex: '#3b82f6',
    gradientFromTo: 'from-blue-600 to-indigo-700',
    bgLight: 'bg-blue-50/80',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    badgeBg: 'bg-blue-100 text-blue-700',
    vitamins: ['Vitamine B6', 'Vitamine B1'],
    keyIngredients: ['Pétales de Coquelicot', 'Camomille Matricaire', 'Sommités d’Aubépine'],
    description: 'Pour des nuits tranquilles et un réveil sans torpeur grâce à une synergie de plantes apaisantes et vitamines B.',
    benefits: [
      'Facilite un endormissement rapide et naturel',
      'Améliore la qualité du sommeil profond',
      'Sans accoutumance ni somnolence au réveil'
    ],
    targetAudience: 'Personnes sujettes aux insomnies, au réveil nocturne ou au décalage horaire.',
    dosage: '2 gummies 30 minutes avant le coucher.',
    taste: 'Mûre & Verveine Douce',
    countPerBottle: 60,
    priceCHF: 39,
    flyerCircleClass: 'bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400',
    imageUrl: sommeilImg
  },
  {
    id: 'cheveux-peau',
    name: 'Gummies Cheveux et Peau',
    subName: 'Éclat, Volume & Sublimation',
    category: 'Nutricosmétique',
    colorName: 'Vert Botanique',
    accentHex: '#10b981',
    gradientFromTo: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50/80',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    vitamins: ['Vitamine E', 'Vitamine B2', 'Vitamine D', 'Vitamine B6', 'Vitamine B8 (Biotine)'],
    keyIngredients: ['Biotine Haute Dose', 'Zinc', 'Huile de Pépins de Raisin'],
    description: 'Révélez une beauté naturelle éclatante avec un cocktail synergique favorisant des cheveux forts et une peau lumineuse.',
    benefits: [
      'Stimule la pousse et la densité des cheveux',
      'Fortifie les ongles cassants',
      'Hydrate et illumine le grain de peau'
    ],
    targetAudience: 'Femmes et hommes désireux de renforcer leur chevelure et sublimer leur peau de l’intérieur.',
    dosage: '2 gummies par jour à tout moment de la journée.',
    taste: 'Pêche de Vigne & Pomme Verte',
    countPerBottle: 60,
    priceCHF: 39,
    flyerCircleClass: 'bg-gradient-to-tr from-emerald-500 via-teal-500 to-lime-400',
    imageUrl: peauCheveuxImg
  },
  {
    id: 'detente',
    name: 'Gummies Détente',
    subName: 'Gestion du Stress & Sérénité',
    category: 'Anti-Stress & Équilibre',
    colorName: 'Cyaan / Bleu Lagon',
    accentHex: '#06b6d4',
    gradientFromTo: 'from-cyan-500 to-blue-500',
    bgLight: 'bg-cyan-50/80',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-600',
    badgeBg: 'bg-cyan-100 text-cyan-800',
    vitamins: ['Vitamine B6', 'Vitamine B12'],
    keyIngredients: ['Bacopa Monnieri', 'Rhodiola Rosea (Adaptogène)', 'Magnésium Citrate'],
    description: 'Réduisez le stress et favorisez le calme intérieur sans baisse de vigilance grâce aux adaptogènes précieux.',
    benefits: [
      'Aide l’organisme à s’adapter au stress émotionnel',
      'Favorise la détente musculaire et nerveuse',
      'Maintient un état d’esprit serein tout au long de la journée'
    ],
    targetAudience: 'Personnes soumises au surmenage, à l’anxiété ponctuelle ou à des périodes de transition.',
    dosage: '2 gummies par jour dès les premiers signes de tension.',
    taste: 'Citron Vert & Menthe Douce',
    countPerBottle: 60,
    priceCHF: 39,
    flyerCircleClass: 'bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-400',
    imageUrl: detenteImg
  }
];

export const TRUST_BADGES = [
  { icon: 'ShieldCheck', title: 'Fabriqué en Suisse', desc: 'Standards de qualité stricts' },
  { icon: 'Leaf', title: '100% Végan & Naturel', desc: 'Pectine de fruit, sans gélatine' },
  { icon: 'Sparkles', title: 'Sans Gluten & Allergènes', desc: 'Formule saine et digeste' },
  { icon: 'Sun', title: 'Sans Arômes Artificiels', desc: 'Extraits de vrais fruits' },
  { icon: 'Award', title: 'Conseil Personnalisé', desc: 'Téléconseillers suisses dédiés' },
];

export interface ProductOption {
  id: string;
  name: string;
  subName: string;
  category: string;
}

export const COMPLEMENTARY_PRODUCTS_DATA: ProductOption[] = [
  {
    id: 'gelee-royale',
    name: 'Gelée Royale',
    subName: 'Défenses & Vitalité',
    category: 'Complément Alimentaire',
  },
  {
    id: 'omega-3',
    name: 'Omega 3',
    subName: 'Cœur & Cerveau',
    category: 'Complément Alimentaire',
  },
  {
    id: 'creme-argan',
    name: 'Crème Argan',
    subName: 'Nutrition & Éclat',
    category: 'Soin Cosmétique',
  },
];

export const ALL_PRODUCTS_OPTIONS: ProductOption[] = [
  ...MOLITA_PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    subName: p.subName,
    category: 'Formules Gummies',
  })),
  ...COMPLEMENTARY_PRODUCTS_DATA,
];

export function resolveProductId(
  input?: Product | { id?: string; name?: string } | string | null
): string {
  if (!input) return 'vitalite';

  if (typeof input === 'object') {
    if (input.id) {
      const match = ALL_PRODUCTS_OPTIONS.find((p) => p.id === input.id);
      if (match) return match.id;
    }
    if (input.name) {
      const normalizedName = input.name.toLowerCase().trim();
      const match = ALL_PRODUCTS_OPTIONS.find(
        (p) =>
          p.name.toLowerCase().trim() === normalizedName ||
          normalizedName.includes(p.name.toLowerCase().trim()) ||
          p.name.toLowerCase().trim().includes(normalizedName)
      );
      if (match) return match.id;
    }
    return input.id || 'vitalite';
  }

  if (typeof input === 'string') {
    const raw = input.toLowerCase().trim();
    // 1. Check exact ID
    const byId = ALL_PRODUCTS_OPTIONS.find((p) => p.id.toLowerCase() === raw);
    if (byId) return byId.id;
    // 2. Check Name match
    const byName = ALL_PRODUCTS_OPTIONS.find(
      (p) =>
        p.name.toLowerCase() === raw ||
        raw.includes(p.name.toLowerCase()) ||
        p.name.toLowerCase().includes(raw)
    );
    if (byName) return byName.id;
  }

  return 'vitalite';
}

