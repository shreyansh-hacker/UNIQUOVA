export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
  platforms: string[];
  timeframe: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  markets: string[];
  coreFocus: string[];
  accentColor: string;
  accentBg: string;
  glowColor: string;
  logoSvg: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  brandName: string;
  category: string;
  marketplace: string;
  timeframe: string;
  challenge: string;
  strategy: string;
  workDelivered: string[];
  outcome: string;
  statusNote: string;
}

export interface ProcessStepItem {
  step: string;
  name: string;
  label: string;
  summary: string;
  details: string;
}

export interface AuditFormData {
  fullName: string;
  brandName: string;
  email: string;
  phone: string;
  marketplace: string;
  storeUrl: string;
  monthlySales: string;
  primaryGoal: string;
  message: string;
  honeypot?: string;
}
