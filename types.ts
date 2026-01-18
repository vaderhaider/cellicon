
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Case' | 'Charger' | 'Protector' | 'Audio' | 'Other';
  deviceType: 'iPhone' | 'Samsung' | 'Pixel' | 'Universal';
  image: string;
  inStock: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export enum BookingStep {
  DeviceSelect,
  IssueSelect,
  DateTime,
  ContactInfo,
  Confirmation
}
