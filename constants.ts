import { Heart, MessageCircle, Puzzle, Users, Brain, MapPin } from 'lucide-react';
import { NavItem, Service, TeamMember, Testimonial, Resource } from './types';
import { ROUTES } from './config/routes';

// Site Configuration
export const SITE_CONFIG = {
  name: "LaJoie Autism Center",
  shortname: "LaJoie",
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
  // { label: 'Home', path: ROUTES.HOME },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Resources', path: ROUTES.RESOURCES },
  { label: 'About', path: ROUTES.ABOUT },
  // { label: 'Team', path: ROUTES.TEAM },
  { label: 'Contact', path: ROUTES.CONTACT },
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Resources', path: ROUTES.RESOURCES },
  { label: 'Contact', path: ROUTES.CONTACT },
];

export const SERVICES: Service[] = [
  {
    id: 'eidbi',
    title: 'EIDBI Services',
    description: 'Early Intensive Developmental and Behavioral Intervention (EIDBI) is a Minnesota Health Care Program benefit for people under age 21.',
    icon: Heart,
    benefits: ['Medically necessary treatment', 'Covered by Medical Assistance', 'Culturally responsive'],
    image: '/eidbi-services.jpeg'
  },
  {
    id: 'aba',
    title: 'Adaptive Behavior Treatment',
    description: 'Individualized, evidence-based ABA therapy focused on skill acquisition, communication, and reducing challenging behaviors.',
    icon: Puzzle,
    benefits: ['1:1 Direct Intervention', 'Customized Learning Plans', 'Skill Building'],
    image: '/success-high-five.jpeg'
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
    image: '/observation-direction.jpeg'
  },
  {
    id: 'family',
    title: 'Family & Caregiver Training',
    description: 'Empowering parents with strategies to support their child’s development at home and navigate the system.',
    icon: MessageCircle,
    benefits: ['Home Strategies', 'Advocacy Support', 'Family Harmony'],
    image: '/family-collaboration.jpeg'
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
  // Diagnosis & Assessment (The "Front Door")
  {
    id: 'r2',
    title: "Ramsey County – Disability Services Intake",
    description: "The first step to accessing county services and waivers. Call 651-266-3613 to request a MnCHOICES assessment for your child.",
    link: "https://www.ramseycounty.us",
    category: "Diagnosis & Assessment",
  },
  {
    id: 'r3',
    title: "Hennepin County – Disability Services Intake",
    description: "Residents of Hennepin County can request a MnCHOICES assessment by calling the Front Door intake line at 612-348-4111.",
    link: "https://www.hennepin.us",
    category: "Diagnosis & Assessment",
  },
  
  // Cultural & Community Support
  {
    id: 'r4',
    title: "Somali Parents Autism Network (SPAN)",
    description: "Support, advocacy, and education specifically for Somali families navigating autism services in Minnesota.",
    link: "https://somaliparentsautism.org",
    category: "Cultural & Community Support",
  },
  {
    id: 'r5',
    title: "Multicultural Autism Action Network (MAAN)",
    description: "A network dedicated to supporting multicultural families with resources, navigation, and community events.",
    link: "https://maanmn.org",
    category: "Cultural & Community Support",
  },
  {
    id: 'r6',
    title: "Hmong American Partnership (HAP)",
    description: "Comprehensive social services and family support for the Hmong community, including healthcare navigation and transportation.",
    link: "https://hmong.org",
    category: "Cultural & Community Support",
  },
  {
    id: 'r7',
    title: "CLUES (Comunidades Latinas Unidas En Servicio)",
    description: "Mental health, family support, and disability resources for Latino families, with services available in Spanish.",
    link: "https://clues.org",
    category: "Cultural & Community Support",
  },
  
  // Logistics & Rights
  {
    id: 'r8',
    title: "MN Medical Assistance Transportation",
    description: "If you have Medical Assistance (MA), you may be eligible for free transportation to and from our center. Blue Plus (BlueRide): 651-662-8648 | HealthPartners (RideCare): 952-883-7400 | Straight MA (MNET): 651-645-9254",
    link: "#transportation",
    category: "Logistics & Rights",
  },
  {
    id: 'r9',
    title: "PACER Center",
    description: "Champions for children with disabilities. Contact PACER for free help with Individualized Education Programs (IEPs) and school advocacy.",
    link: "https://pacer.org",
    category: "Logistics & Rights",
  },
  {
    id: 'r10',
    title: "MN Autism Resource Portal (Multi-Language)",
    description: "The state's official guide to autism resources, including translated documents in Somali, Hmong, Spanish, and Karen.",
    link: "https://mn.gov/autism/",
    category: "Logistics & Rights",
  },
];