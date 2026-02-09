export interface Concept {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string[];
  cardImage: string;
  heroImage: string;
  heroTitle?: string;
  menuItems?: string[];
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  eventType: string;
  budget: string;
  concept: string;
  message: string;
}