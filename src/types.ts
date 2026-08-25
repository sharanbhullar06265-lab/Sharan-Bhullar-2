export interface Project {
  id: string;
  title: string;
  clientType: string;
  category: 'business' | 'ecommerce' | 'local' | 'creative';
  year: string;
  tags: string[];
  shortDesc: string;
  fullDesc: string;
  featured?: boolean;
  accentColor: string;
  liveUrl?: string;
  mockupType: 'browser' | 'mobile' | 'dual';
  previewImage: string;
  previewDetails: {
    heroTitle: string;
    heroSubtitle: string;
    metrics?: { label: string; value: string }[];
    colors: string[];
    fonts: string;
    deliverables: string[];
    overview: string;
    challenges: string;
    solution: string;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  timeline: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  idealFor: string;
  tag: string;
  badge?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}
