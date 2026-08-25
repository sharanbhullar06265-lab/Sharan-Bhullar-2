import { ServiceItem, CapabilityItem, ProcessStep } from '../types';

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Website Design',
    description: 'Modern, professional website designs created around your business and customers to build instant trust.',
    iconName: 'Layout',
    deliverables: [
      'Bespoke Figma / Web Layouts',
      'Brand Identity Integration',
      'Clear Conversion Wireframing',
      'Interactive UI Prototypes'
    ],
    timeline: '1–2 weeks'
  },
  {
    number: '02',
    title: 'Website Development',
    description: 'Responsive and functional websites built for desktop, tablet and mobile with sub-second speed.',
    iconName: 'Code2',
    deliverables: [
      'Clean Semantic Code',
      '100% Mobile Responsive',
      'SEO & OpenGraph Setup',
      'Fast Cloud Hosting & Domain Setup'
    ],
    timeline: '1–3 weeks'
  },
  {
    number: '03',
    title: 'E-Commerce',
    description: 'Online stores designed to showcase products, highlight customer reviews, and make buying frictionless.',
    iconName: 'ShoppingBag',
    deliverables: [
      'Shopify / Custom Storefront',
      'Secure Payment Gateways',
      'Inventory & Cart Upsells',
      'Order Notification Setup'
    ],
    timeline: '2–4 weeks'
  },
  {
    number: '04',
    title: 'Website Redesign',
    description: 'Transform an outdated website into a modern digital experience that looks sharp and converts visitors.',
    iconName: 'Sparkles',
    deliverables: [
      'UI/UX Audit & Modernization',
      'Mobile Experience Overhaul',
      'Speed & Performance Boost',
      'Content & Asset Refresh'
    ],
    timeline: '1–2 weeks'
  }
];

export const capabilitiesData: CapabilityItem[] = [
  {
    id: 'biz',
    title: 'Business Websites',
    description: 'Professional multi-page web presence for companies, consultants, and agencies.',
    idealFor: 'Corporate & Services',
    tag: 'B2B & B2C',
    badge: 'Popular'
  },
  {
    id: 'landing',
    title: 'High-Converting Landing Pages',
    description: 'Laser-focused single-page sites built to capture leads, launch products, or run ads.',
    idealFor: 'Launches & Campaigns',
    tag: 'Lead Gen',
    badge: 'Fast Delivery'
  },
  {
    id: 'portfolio',
    title: 'Portfolio & Creator Websites',
    description: 'Stunning editorial showcases for architects, interior designers, photographers, and studios.',
    idealFor: 'Creatives & Studios',
    tag: 'Editorial'
  },
  {
    id: 'ecom',
    title: 'E-Commerce & Shopify Stores',
    description: 'Custom digital storefronts engineered for smooth checkout, high AOV, and customer trust.',
    idealFor: 'Brands & Retailers',
    tag: 'Online Shop',
    badge: 'High Conversion'
  },
  {
    id: 'food',
    title: 'Restaurant & Dining Websites',
    description: 'Atmospheric food photography, digital interactive menus, and table reservation systems.',
    idealFor: 'Cafes, Bars & Bistros',
    tag: 'Hospitality'
  },
  {
    id: 'local',
    title: 'Local Business Websites',
    description: 'SEO-optimized websites for local clinics, gyms, salons, contractors, and retail shops.',
    idealFor: 'Local Service Providers',
    tag: 'Local SEO'
  },
  {
    id: 'kids',
    title: 'Kids & Activity Centre Sites',
    description: 'Warm, colorful, parent-friendly portals for family entertainment, daycare, and workshops.',
    idealFor: 'Play Hubs & Academies',
    tag: 'Family & Events'
  },
  {
    id: 'custom',
    title: 'Custom Website Solutions',
    description: 'Tailored web experiences, booking calculators, interactive forms, and custom integrations.',
    idealFor: 'Unique Requirements',
    tag: 'Custom Code'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your business, target customers, brand goals, and specific website requirements.',
    details: ['30-min discovery call', 'Competitor & audience analysis', 'Site structure & content outline'],
    duration: 'Days 1–3'
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create the visual direction, typography pairing, and bespoke page layouts for your review.',
    details: ['Interactive UI prototype', 'Custom visual mockups', 'Feedback & collaborative refinement'],
    duration: 'Days 4–8'
  },
  {
    number: '03',
    title: 'Build',
    description: 'We turn the approved design into a fast, responsive, SEO-ready website that works across all devices.',
    details: ['Mobile & tablet responsiveness', 'Interactive micro-animations', 'Performance & security testing'],
    duration: 'Days 9–14'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We test everything thoroughly, connect your custom domain, and hand over your brand new website.',
    details: ['Final cross-browser QA', 'Domain & SSL activation', '14-day post-launch support & walkthrough'],
    duration: 'Day 15+'
  }
];

export const whyWorkWithMe = [
  {
    number: '01',
    title: 'Modern Design',
    description: 'Clean, professional visual design crafted uniquely for your brand. No clunky templates or cookie-cutter layouts.',
    highlight: 'Clean & Premium Aesthetic'
  },
  {
    number: '02',
    title: 'Mobile First',
    description: 'Over 75% of your customers visit from phones. Every website is meticulously tuned for smooth mobile touch interaction.',
    highlight: 'Flawless on Every Screen'
  },
  {
    number: '03',
    title: 'Business Focused',
    description: 'A great website is an investment. Designed around clear calls-to-action that convert visitors into paying clients.',
    highlight: 'Built for Real ROI'
  },
  {
    number: '04',
    title: 'Built to Grow',
    description: 'Flexible, scalable foundations that easily expand as you add new services, products, or team members.',
    highlight: 'Future-Proof Codebase'
  }
];
