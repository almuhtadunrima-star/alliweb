export interface ProjectItem {
  id: string;
  title: string;
  category: 'Leadership' | 'MC & Speaking' | 'Event Management' | 'Community';
  year: string;
  role: string;
  tagline: string;
  description: string;
  challenge: string;
  whatIDid: string[];
  result: string;
  impactMetrics?: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface ExperienceItem {
  year: string;
  period?: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  highlights: string[];
  type: 'Leadership' | 'Public Speaking' | 'Community';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface PhilosophyItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  isPlaceholder?: boolean;
}
