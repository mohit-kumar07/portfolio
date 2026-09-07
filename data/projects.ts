export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  source: string | null;
  demo: string | null;
  challenges?: string[];
  learnings?: string[];
  architecture?: string[];
}

export const projects: Project[] = [
  {
    slug: "cloudpulse",
    name: "CloudPulse",
    tagline: "Linux system monitoring tool",
    description:
      "A system monitoring tool for Linux that tracks host metrics and surfaces them for operational visibility, built end-to-end including data storage and a service-management integration.",
    stack: ["C++", "MariaDB", "ServiceNow"],
    features: [
      "Linux host metric collection daemon tracking system resource utilization",
      "Persistent metric telemetry and operational logging backed by MariaDB",
      "Operational alerting and incident integration with ServiceNow",
    ],
    source: "https://github.com/mohit-kumar07/cloudpulse",
    demo: null,
  },
  {
    slug: "bhoomi-and-beyond",
    name: "Bhoomi & Beyond",
    tagline: "D2C e-commerce platform — WordPress development & Next.js migration",
    description:
      "Developed and maintained a live D2C e-commerce platform (dehydrated fruits, snacks, and health powders) originally built on WordPress/WooCommerce on AWS EC2, and subsequently collaborated on migrating the architecture to a modern Next.js frontend deployed on Vercel with a Supabase backend.",
    stack: ["Next.js", "Supabase (PostgreSQL, RLS, Auth, Storage, Edge Functions)", "WordPress", "AWS EC2", "Vercel", "Razorpay"],
    features: [
      "Developed and managed the initial WordPress/WooCommerce platform hosted on AWS EC2, including DNS (GoDaddy) and SSL (Certbot/Let's Encrypt)",
      "Collaborated on re-architecting and migrating the store to a high-performance Next.js + Vercel frontend",
      "Designed PostgreSQL schema and row-level security policies on Supabase",
      "Integrated Razorpay payments and Titan Mail SMTP via Supabase Edge Functions",
    ],
    source: null,
    demo: "https://bhoomiandbeyond.com",
  },
];
