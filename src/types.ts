export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Sofas' | 'Beds' | 'Living Room' | 'Tables' | 'Cabinets' | 'Upholstery' | 'Custom Projects';
  subtitle: string;
  description: string;
  image: string;
  featured?: boolean;
  dimensions?: string;
  material?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface MaterialSwatch {
  name: string;
  category: 'wood' | 'fabric' | 'cushion' | 'hardware';
  tone: string;
  description: string;
  image?: string;
  colorCode?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  serviceType: string;
  furnitureType: string;
  preferredStyle: string;
  budget: string;
  message: string;
  referenceFileName?: string;
}
