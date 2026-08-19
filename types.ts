import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

/** Days of the week as spelled by schema.org's `dayOfWeek` property. */
export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface BusinessHours {
  /** Internal grouping label (e.g. "Weekdays"). */
  label: string;
  /** Human-readable day range, e.g. "Monday to Friday". */
  days: string;
  /** Human-readable time range, e.g. "8:00 am – 8:00 pm". */
  times: string;
  /** Machine-readable days for schema.org openingHoursSpecification. */
  dayOfWeek: DayOfWeek[];
  /** Opening time in 24-hour "HH:MM" format. */
  opens: string;
  /** Closing time in 24-hour "HH:MM" format. */
  closes: string;
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
  category: 'Diagnosis & Assessment' | 'Cultural & Community Support' | 'Logistics & Rights';
}