
import React from 'react';
import { Smartphone, Battery, ShieldAlert, Zap, Cpu, MousePointer2 } from 'lucide-react';
import { Service, Product, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Screen Repair',
    description: 'Cracked or non-responsive displays replaced with OEM-grade parts.',
    icon: 'Smartphone',
    priceRange: '$79 - $299',
    category: 'Display'
  },
  {
    id: '2',
    title: 'Battery Replacement',
    description: 'Restore your phone battery life to 100% capacity.',
    icon: 'Battery',
    priceRange: '$49 - $99',
    category: 'Power'
  },
  {
    id: '3',
    title: 'Water Damage',
    description: 'Professional cleaning and component-level circuit repair.',
    icon: 'ShieldAlert',
    priceRange: 'Estimate Required',
    category: 'Emergency'
  },
  {
    id: '4',
    title: 'Charging Port',
    description: 'Fix loose connections or failed charging interfaces.',
    icon: 'Zap',
    priceRange: '$59 - $89',
    category: 'Power'
  },
  {
    id: '5',
    title: 'Software Issues',
    description: 'Operating system recovery, data backup, and unlocking.',
    icon: 'Cpu',
    priceRange: '$39 - $120',
    category: 'System'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'MagSafe Silicone Case',
    price: 39.99,
    category: 'Case',
    deviceType: 'iPhone',
    image: 'https://picsum.photos/seed/case1/400/400',
    inStock: true
  },
  {
    id: 'p2',
    name: '20W USB-C Fast Charger',
    price: 24.99,
    category: 'Charger',
    deviceType: 'Universal',
    image: 'https://picsum.photos/seed/charger1/400/400',
    inStock: true
  },
  {
    id: 'p3',
    name: '9H Tempered Glass',
    price: 19.99,
    category: 'Protector',
    deviceType: 'Samsung',
    image: 'https://picsum.photos/seed/glass1/400/400',
    inStock: true
  },
  {
    id: 'p4',
    name: 'True Wireless Earbuds',
    price: 89.99,
    category: 'Audio',
    deviceType: 'Universal',
    image: 'https://picsum.photos/seed/audio1/400/400',
    inStock: true
  },
  {
    id: 'p5',
    name: 'Rugged Hybrid Case',
    price: 34.99,
    category: 'Case',
    deviceType: 'Pixel',
    image: 'https://picsum.photos/seed/case2/400/400',
    inStock: true
  },
  {
    id: 'p6',
    name: 'Fast Wireless Pad',
    price: 45.00,
    category: 'Charger',
    deviceType: 'Universal',
    image: 'https://picsum.photos/seed/wireless1/400/400',
    inStock: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    rating: 5,
    comment: 'Repaired my iPhone 13 screen in under 45 minutes. It looks brand new! Highly recommend the express service.',
    date: '2 days ago'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'Great selection of cases and very knowledgeable staff. They even helped me migrate my data for free.',
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'Emma Watson',
    rating: 4,
    comment: 'Very professional. I thought my phone was dead from water damage, but they brought it back to life.',
    date: '3 weeks ago'
  }
];
