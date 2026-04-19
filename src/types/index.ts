export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  results: string;
  link?: string;
  linkLabel?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type PricingTier = {
  title: string;
  price: string;
  description: string;
  features: string[];
};
