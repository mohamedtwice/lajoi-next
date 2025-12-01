import { Heart, MessageCircle, Puzzle, Users, Brain, MapPin } from 'lucide-react';
import { NavItem, Service, TeamMember, Testimonial, Resource } from './types';

// Site Configuration
export const SITE_CONFIG = {
  name: "LaJoie Autism Center",
  tagline: "Culturally competent, community-focused care for the Twin Cities.",
  contact: {
    phone: "(651) 555-0199",
    email: "info@lajoieautism.com",
    // Primary listing for display logic, but detailed locations are below
    address: "Roseville & NE Minneapolis", 
    locations: [
      {
        name: "Roseville Clinical Hub",
        address: "1935 County Rd B2 W, Unit 350, Roseville, MN 55113",
        note: "Located in the Medical Professional Building"
      },
      {
        name: "NE Minneapolis Community Hub",
        address: "2300 University Ave NE, Minneapolis, MN 55418",
        note: "Accessible via Transit"
      }
    ],
    hours: "Mon-Fri: 8am - 6pm",
  },
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'eidbi',
    title: 'EIDBI Services',
    description: 'Early Intensive Developmental and Behavioral Intervention (EIDBI) is a Minnesota Health Care Program benefit for people under age 21.',
    icon: Heart,
    benefits: ['Medically necessary treatment', 'Covered by Medical Assistance', 'Culturally responsive'],
    image: 'https://images.unsplash.com/photo-1596464716127-f9a804e0693e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aba',
    title: 'Adaptive Behavior Treatment',
    description: 'Individualized, evidence-based ABA therapy focused on skill acquisition, communication, and reducing challenging behaviors.',
    icon: Puzzle,
    benefits: ['1:1 Direct Intervention', 'Customized Learning Plans', 'Skill Building'],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'social',
    title: 'Social Skills Groups',
    description: 'Facilitated groups for various ages (Pre-K through High School) to practice peer interaction in a safe environment.',
    icon: Users,
    benefits: ['Peer Interaction', 'Emotional Regulation', 'Turn-Taking'],
    image: 'https://images.unsplash.com/photo-1503919545874-0763d9316531?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'observation',
    title: 'Observation & Direction',
    description: 'Ongoing supervision by Qualified Supervising Professionals (QSP) to ensure treatment fidelity and progress.',
    icon: Brain,
    benefits: ['Clinical Oversight', 'Plan Adjustment', 'Quality Assurance'],
    image: 'https://images.unsplash.com/photo-1632053001099-0e44299b6623?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'family',
    title: 'Family & Caregiver Training',
    description: 'Empowering parents with strategies to support their child’s development at home and navigate the system.',
    icon: MessageCircle,
    benefits: ['Home Strategies', 'Advocacy Support', 'Family Harmony'],
    image: 'https://images.unsplash.com/photo-1543666277-c9de754d922a?auto=format&fit=crop&q=80&w=800'
  },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: "Dr. Sarah Jenkins",
    role: "Clinical Director (QSP)",
    bio: "Leading our clinical operations with a focus on regulatory excellence and compassionate care standards.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: '2',
    name: "Ahmed Hassan",
    role: "Senior Behavioral Therapist",
    bio: "Specializing in culturally agile care and community outreach for East African families.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: '3',
    name: "Elena Rodriguez",
    role: "Lead EIDBI Provider",
    bio: "Creating bilingual, sensory-rich environments that help children build confidence in their skills.",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: '4',
    name: "David Vang",
    role: "Program Coordinator",
    bio: "Ensuring families have the resources and transportation support they need to access consistent care.",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: "LaJoie understands our culture and our values. I don't have to explain everything; they just get it. My son is finally excited to go to therapy.",
    author: "Amina H.",
    role: "Parent of 5-year-old",
  },
  {
    id: 't2',
    text: "Transportation was always a barrier for us until we found this center. Their NE Minneapolis location is so accessible, and the staff is incredibly warm.",
    author: "Mai L.",
    role: "Parent of 8-year-old",
  },
  {
    id: 't3',
    text: "We were on waitlists for the big hospitals for months. LaJoie got us in quickly and treated us like family, not just a number.",
    author: "Roberto G.",
    role: "Parent of 4-year-old",
  },
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: "MN Help Me Connect",
    description: "A navigator for connecting pregnant individuals and families with young children to local services.",
    link: "https://helpmeconnect.web.health.state.mn.us/HelpMeConnect/",
    category: "External",
  },
  {
    id: 'r2',
    title: "Understanding EIDBI",
    description: "Information about the Early Intensive Developmental and Behavioral Intervention benefit.",
    link: "#",
    category: "Guide",
  },
  {
    id: 'r3',
    title: "Autism Society of Minnesota",
    description: "Resources, education, and advocacy for the Minnesota autism community.",
    link: "https://ausm.org/",
    category: "External",
  },
];