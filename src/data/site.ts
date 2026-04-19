import { NavItem, PricingTier, Project, Service, TeamMember, Testimonial } from "@/types";

export const siteConfig = {
  name: "Crazy Coderz Technologies",
  shortName: "Crazy Coderz",
  tagline: "We Build Scalable Apps, Websites & AI Solutions",
  description:
    "Crazy Coderz Technologies helps startups and businesses launch scalable mobile apps, modern websites, admin panels, and AI-powered experiences.",
  email: "crazycoderztechnologies@gmail.com",
  phone: "+91 8816803474",
  whatsapp: "918816803474",
  address: "Gurgaon, Haryana, 122016"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Meeting", href: "/book-meeting" }
];

export const services: Service[] = [
  {
    title: "Android App Development",
    description: "Custom Android apps built with Kotlin and Jetpack Compose for speed, scale, and great UX.",
    bullets: ["Native performance", "Compose-first UI architecture", "Play Store-ready releases"]
  },
  {
    title: "iOS App Development",
    description: "Elegant Swift-based iPhone and iPad applications tailored to your business goals.",
    bullets: ["Swift and SwiftUI workflows", "Apple ecosystem integrations", "Reliable QA and release support"]
  },
  {
    title: "Flutter Development",
    description: "Cross-platform apps with one codebase, efficient delivery timelines, and polished interfaces.",
    bullets: ["Android and iOS from one team", "Rapid iteration cycles", "Consistent brand experience"]
  },
  {
    title: "Web Development",
    description: "Fast websites, dashboards, and admin panels designed to convert and support business growth.",
    bullets: ["Responsive frontend builds", "Custom CMS and admin panels", "SEO and performance optimization"]
  },
  {
    title: "AI Integration",
    description: "Practical AI features including chatbots, workflow automation, and smart assistants.",
    bullets: ["Lead qualification bots", "Internal productivity automations", "AI-powered search and support"]
  },
  {
    title: "Bug Fixing & Maintenance",
    description: "Stabilize, improve, and extend existing products with a reliable delivery partner.",
    bullets: ["Urgent issue resolution", "Codebase cleanup", "Long-term support retainers"]
  }
];

export const whyChooseUs = [
  "End-to-end delivery from strategy to launch",
  "Product-minded development focused on ROI",
  "Transparent communication and milestone planning",
  "Modern engineering standards for scalability and maintainability"
];

export const testimonials: Testimonial[] = [
  {
    name: "Ritika Malhotra",
    role: "Founder",
    company: "Finloop Labs",
    quote:
      "Crazy Coderz shipped our MVP faster than expected and handled product decisions like a true technology partner."
  },
  {
    name: "Aditya Khanna",
    role: "Operations Head",
    company: "UrbanNest Realty",
    quote:
      "Their admin panel and automation work removed hours of manual effort from our team every single week."
  },
  {
    name: "Sarah Thomas",
    role: "Product Manager",
    company: "ScaleBridge",
    quote:
      "Great execution, thoughtful communication, and a modern engineering approach. We trusted them with both web and mobile."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Aarav Sharma",
    role: "Founder & Technical Director",
    bio: "Leads product architecture, client strategy, and delivery quality across mobile, web, and AI initiatives."
  },
  {
    name: "Neha Verma",
    role: "Lead UI/UX Designer",
    bio: "Designs conversion-focused product experiences with clean interfaces, strong visual systems, and accessible flows."
  },
  {
    name: "Karan Mehta",
    role: "Full Stack Engineer",
    bio: "Builds production-ready dashboards, APIs, and frontend systems that scale with growing client teams."
  }
];

export const pricingTiers: PricingTier[] = [
  {
    title: "Basic App",
    price: "₹15,000+",
    description: "Best for idea validation and simple launch-ready mobile experiences.",
    features: ["Core screens and flows", "Responsive UI", "Deployment guidance"]
  },
  {
    title: "Advanced App",
    price: "₹40,000+",
    description: "For more complex apps with custom logic, APIs, and scalable architecture.",
    features: ["Advanced feature set", "Backend integrations", "Performance and QA support"]
  },
  {
    title: "Website Development",
    price: "₹10,000+",
    description: "High-converting websites, landing pages, and company sites with modern UX.",
    features: ["Multi-page website", "SEO-ready structure", "Contact and lead capture"]
  },
  {
    title: "Bug Fixing",
    price: "₹2,000+",
    description: "Targeted fixes, audits, performance tuning, and maintenance support.",
    features: ["Issue diagnosis", "Fix implementation", "Testing and validation"]
  }
];

export const portfolioProjects: Project[] = [
  {
    title: "Daily Checks",
    category: "Android App",
    summary: "A production Android app now live on the Play Store for structured daily task tracking and routine check workflows.",
    stack: ["Kotlin", "Jetpack Compose", "Room DB"],
    results: "Published on Google Play as a real client-ready Android product with a clean native experience and offline-friendly local data storage.",
    link: "https://play.google.com/store/apps/details?id=com.crazycoderz.dailychecks",
    linkLabel: "View on Play Store"
  },
  {
    title: "FitSprint Coach",
    category: "Mobile App",
    summary: "A fitness coaching app with progress tracking, subscriptions, and habit reminders.",
    stack: ["Flutter", "Firebase", "Razorpay"],
    results: "Helped the client launch in 7 weeks with 30% faster onboarding completion."
  },
  {
    title: "VendorFlow Admin",
    category: "Web Platform",
    summary: "A vendor management dashboard with role-based access, analytics, and workflow approvals.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    results: "Reduced manual reporting work for the operations team by 60%."
  },
  {
    title: "SupportAI Assistant",
    category: "AI Automation",
    summary: "A support chatbot integrated with FAQs, lead capture, and internal escalation workflows.",
    stack: ["OpenAI API", "Firebase", "React"],
    results: "Improved first-response speed and captured qualified leads around the clock."
  },
  {
    title: "MediTrack Patient App",
    category: "Android App",
    summary: "An Android app for appointment scheduling, reminders, and secure health profile access.",
    stack: ["Kotlin", "Jetpack Compose", "REST APIs"],
    results: "Delivered a smoother mobile booking journey and increased repeat appointments."
  },
  {
    title: "SwiftCart iOS",
    category: "iOS App",
    summary: "A modern e-commerce iOS experience with product discovery, checkout, and order tracking.",
    stack: ["Swift", "SwiftUI", "Stripe"],
    results: "Enabled a premium native iOS experience aligned with the brand's high-value audience."
  }
];
