export interface NavSubItem {
  name: string;
  description: string;
  link: string;
  iconName: string;
}

export interface NavItem {
  name: string;
  link?: string;
  subItems?: NavSubItem[] | string[];
}

export const PRODUCT_NAV_ITEMS: NavSubItem[] = [
  {
    name: "Database",
    description: "Fully managed Postgres Database.",
    link: "/#database",
    iconName: "database"
  },
  {
    name: "Authentication",
    description: "User management and RLS.",
    link: "/#auth",
    iconName: "key"
  },
  {
    name: "Storage",
    description: "Store and serve large media assets.",
    link: "/#storage",
    iconName: "folderHeart"
  },
  {
    name: "Edge Functions",
    description: "Serverless custom TypeScript code.",
    link: "/#functions",
    iconName: "cpu"
  }
];

export const DEVELOPER_NAV_ITEMS = [
  { name: "Documentation", link: "#" },
  { name: "Guides & Tutorials", link: "#" },
  { name: "GitHub Repository", link: "#" },
  { name: "System Status", link: "#" }
];

export const SOLUTIONS_NAV_ITEMS = [
  { name: "AI & Vector Search", link: "#" },
  { name: "Mobile Development", link: "#" },
  { name: "Next.js Web Apps", link: "#" },
  { name: "SaaS Applications", link: "#" }
];

export const SIMPLE_NAV_LINKS = [
  { name: "Pricing", link: "/pricing" },
  { name: "Docs", link: "#" },
  { name: "Blog", link: "#" }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/supabase/supabase",
  twitter: "https://twitter.com/supabase",
  youtube: "https://youtube.com/c/supabase"
};

export const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { name: "Database", link: "/#database" },
      { name: "Auth", link: "/#auth" },
      { name: "Storage", link: "/#storage" },
      { name: "Edge Functions", link: "/#functions" },
      { name: "Realtime", link: "/#realtime" },
      { name: "Vector", link: "/#vector" },
      { name: "Pricing", link: "/pricing" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", link: "#" },
      { name: "Changelog", link: "#" },
      { name: "System Status", link: "#" },
      { name: "Support", link: "#" },
      { name: "Security", link: "#" },
      { name: "Privacy Policy", link: "#" }
    ]
  },
  {
    title: "Developers",
    links: [
      { name: "GitHub", link: "https://github.com/supabase/supabase" },
      { name: "Discord", link: "#" },
      { name: "Twitter", link: "https://twitter.com/supabase" },
      { name: "Dev.to", link: "#" },
      { name: "YouTube", link: "https://youtube.com/c/supabase" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "Blog", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Customers", link: "#" },
      { name: "Open Source", link: "#" },
      { name: "Brand Assets", link: "#" }
    ]
  }
];

export const COPYRIGHT_TEXT = "© 2026 Supabase Inc. All rights reserved. Clone created for educational demonstration.";
export const BRAND_TAGLINE = "Build in a weekend. Scale to millions. The open source Firebase alternative.";
