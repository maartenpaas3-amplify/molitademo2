export interface Product {
  id: string;
  name: string;
  subName: string;
  category: string;
  colorName: string;
  accentHex: string;
  gradientFromTo: string;
  bgLight: string;
  borderColor: string;
  textColor: string;
  badgeBg: string;
  vitamins: string[];
  keyIngredients: string[];
  description: string;
  benefits: string[];
  targetAudience: string;
  dosage: string;
  taste: string;
  countPerBottle: number;
  priceCHF: number;
  flyerCircleClass: string;
  imageUrl: string;
}

export interface CallbackRequest {
  fullName: string;
  phone: string;
  canton: string;
  preferredTime: string;
  selectedProductId?: string;
  language: 'fr' | 'de' | 'it';
}

export interface JobApplication {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  languages: string[];
  experienceYears: string;
  message: string;
}

export interface QuizAnswer {
  goal: string;
  lifestyle: string;
  timeOfDay: string;
}
