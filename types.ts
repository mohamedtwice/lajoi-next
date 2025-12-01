import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  image: string; // Added image property
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string; // e.g., "Parent of 5-year-old"
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  category: 'Article' | 'Guide' | 'External';
}