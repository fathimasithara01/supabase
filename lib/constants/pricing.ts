export interface PricingTierFeature {
  text: string;
  subtext?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  btnText: string;
  btnLink: string;
  isPopular?: boolean;
  featuresHeader: string;
  features: PricingTierFeature[];
  footerNote: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/ month",
    description: "Perfect for passion projects & simple websites.",
    btnText: "Start for Free",
    btnLink: "https://supabase.com/dashboard",
    featuresHeader: "Get started with:",
    features: [
      { text: "Unlimited API requests" },
      { text: "50,000 monthly active users" },
      { text: "500 MB database size", subtext: "Shared CPU • 400 MB RAM" },
      { text: "5 GB egress" },
      { text: "1 GB file storage" },
      { text: "Community support" }
    ],
    footerNote: "Free projects are paused after 1 week of inactivity. Limit of 2 active projects."
  },
  {
    id: "pro",
    name: "Pro",
    price: "$25",
    period: "/ month",
    description: "For production applications with the power to scale.",
    btnText: "Upgrade now",
    btnLink: "https://supabase.com/dashboard",
    isPopular: true,
    featuresHeader: "Everything in the Free Plan, plus:",
    features: [
      { text: "100,000 monthly active users", subtext: "then $0.00325 per MAU" },
      { text: "8 GB disk size per project", subtext: "then $0.125 per GB" },
      { text: "250 GB egress", subtext: "then $0.09 per GB" },
      { text: "250 GB email egress", subtext: "then $0.03 per GB" },
      { text: "100 GB file storage", subtext: "then $0.021 per GB" },
      { text: "Email support" },
      { text: "Daily backups stored for 7 days" },
      { text: "7-day log retention" },
      { text: "Add Log Drains", subtext: "additional $25 per drain, per project" }
    ],
    footerNote: "Paid plans include $10/mo in compute credits, enough to cover one Micro instance."
  },
  {
    id: "team",
    name: "Team",
    price: "$599",
    period: "/ month",
    description: "Add features such as SSO, central user backups, and industry certifications.",
    btnText: "Upgrade now",
    btnLink: "https://supabase.com/dashboard",
    featuresHeader: "Everything in the Pro Plan, plus:",
    features: [
      { text: "SOC2 & ISO 27001" },
      { text: "Project-scoped and read-only access" },
      { text: "HIPAA available as paid add-on" },
      { text: "SSO for Supabase Dashboard" },
      { text: "Priority email support & SLAs" },
      { text: "Daily backups stored for 14 days" },
      { text: "28-day log retention" }
    ],
    footerNote: "Spacer spacer spacer spacer spacer spacer spacer spacer."
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale applications running internet-scale workloads.",
    btnText: "Contact Us",
    btnLink: "mailto:sales@supabase.io",
    featuresHeader: "Custom capabilities:",
    features: [
      { text: "Designated Support manager" },
      { text: "Uptime SLAs" },
      { text: "BYOC Cloud supported" },
      { text: "24/7/365 premium enterprise support" },
      { text: "Private Slack channel" },
      { text: "Custom Security Questionnaires" }
    ],
    footerNote: "Spacer spacer spacer spacer spacer."
  }
];

export interface ComputeSize {
  name: string;
  price: number;
  cpu: string;
  ram: string;
  direct: number;
  pooler: number;
  dedicated: boolean;
  dedicatedLabel?: string;
}

export const COMPUTE_SIZES: Record<string, ComputeSize> = {
  micro: { name: "Micro", price: 10, cpu: "2-core ARM (Shared)", ram: "1 GB", direct: 60, pooler: 200, dedicated: false, dedicatedLabel: "Shared (First instance is free on paid plans)" },
  small: { name: "Small", price: 15, cpu: "2-core ARM", ram: "2 GB", direct: 90, pooler: 400, dedicated: true },
  medium: { name: "Medium", price: 60, cpu: "2-core ARM", ram: "4 GB", direct: 120, pooler: 800, dedicated: true },
  large: { name: "Large", price: 120, cpu: "4-core ARM", ram: "8 GB", direct: 200, pooler: 1600, dedicated: true },
  xl: { name: "XL", price: 240, cpu: "8-core ARM", ram: "16 GB", direct: 400, pooler: 3200, dedicated: true },
  "2xl": { name: "2XL", price: 480, cpu: "16-core ARM", ram: "32 GB", direct: 800, pooler: 6400, dedicated: true }
};

export const BASE_PLANS = {
  pro: { name: "Pro", price: 25, credits: 10, description: "Everything in the Free Plan, plus 100K MAU, 8 GB disk space, 250 GB bandwidth, 7-day backups, and email support." },
  team: { name: "Team", price: 599, credits: 10, description: "SSO support, read-only dashboard access, 14-day backups, HIPAA support option, and priority response SLAs." }
};

export interface DiskOption {
  name: string;
  description: string;
  maxSize: string;
  sizeCost: { main: string; note: string };
  iopsCost: { main: string; note: string };
  throughputCost: { main: string; note?: string; italic?: string };
  durability: string;
}

export const DISK_OPTIONS: DiskOption[] = [
  {
    name: "General Purpose",
    description: "Balance between price and performance.",
    maxSize: "16 TB",
    sizeCost: { main: "8 GB included", note: "then $0.125 per GB" },
    iopsCost: { main: "3,000 IOPS included", note: "then $0.036 per IOPS" },
    throughputCost: { main: "125 MB/s included", note: "then $0.062 per MB/s" },
    durability: "99.9%"
  },
  {
    name: "High Performance",
    description: "For mission-critical applications.",
    maxSize: "60 TB",
    sizeCost: { main: "$0.125 per GB", note: "from first GB" },
    iopsCost: { main: "$0.103 per IOPS", note: "from first IOPS" },
    throughputCost: { main: "", italic: "Scales automatically with IOPS" },
    durability: "99.999%"
  }
];

export interface Addon {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  period: string;
  description: string;
  iconName: string;
}

export const ADDONS: Addon[] = [
  {
    id: "custom-domain",
    title: "Custom Domain",
    subtitle: "custom.domain.com",
    price: 10,
    period: "/mo",
    description: "Use your own domain for your Supabase project to present a branded experience to your users.",
    iconName: "globe"
  },
  {
    id: "pitr",
    title: "Point in Time Recovery",
    subtitle: "Database back-ups",
    price: 100,
    period: "/mo",
    description: "Roll back your database to any specific point in time, down to the second, for peace of mind.",
    iconName: "history"
  }
];

export interface FeatureRow {
  name: string;
  free: string | boolean;
  pro: string | boolean;
  team: string | boolean;
  enterprise: string | boolean;
}

export interface ComparisonSection {
  title: string;
  iconName: string;
  features: FeatureRow[];
}

export const COMPARISON_SECTIONS: ComparisonSection[] = [
  {
    title: "Database",
    iconName: "database",
    features: [
      { name: "Dedicated Postgres Database", free: true, pro: true, team: true, enterprise: true },
      { name: "Unlimited API requests", free: true, pro: true, team: true, enterprise: true },
      { name: "Database size included", free: "500 MB shared", pro: "8 GB disk", team: "8 GB disk", enterprise: "Custom" },
      { name: "Automatic backups", free: false, pro: "7 days", team: "14 days", enterprise: "Custom" },
      { name: "Point in time recovery (PITR)", free: false, pro: "$100/mo add-on", team: "$100/mo add-on", enterprise: "Custom / SLA" },
      { name: "Pausing", free: "After 1 week inactivity", pro: "Never", team: "Never", enterprise: "Never" }
    ]
  },
  {
    title: "Auth",
    iconName: "shield",
    features: [
      { name: "Total Users", free: "Unlimited", pro: "Unlimited", team: "Unlimited", enterprise: "Unlimited" },
      { name: "MAUs included", free: "50,000", pro: "100,000", team: "100,000", enterprise: "Custom" },
      { name: "User data ownership", free: true, pro: true, team: true, enterprise: true },
      { name: "Social OAuth providers", free: true, pro: true, team: true, enterprise: true },
      { name: "Basic Multi-Factor Auth (MFA)", free: true, pro: true, team: true, enterprise: true },
      { name: "Advanced MFA (custom flows)", free: false, pro: true, team: true, enterprise: true }
    ]
  },
  {
    title: "Storage",
    iconName: "folderKey",
    features: [
      { name: "Storage included", free: "1 GB", pro: "100 GB", team: "100 GB", enterprise: "Custom" },
      { name: "Custom access controls", free: true, pro: true, team: true, enterprise: true },
      { name: "Max file upload size", free: "50 MB", pro: "500 MB", team: "500 MB", enterprise: "Custom" },
      { name: "Image Transformations", free: false, pro: true, team: true, enterprise: true }
    ]
  },
  {
    title: "Support",
    iconName: "helpCircle",
    features: [
      { name: "Community Support", free: true, pro: true, team: true, enterprise: true },
      { name: "Email Support", free: false, pro: true, team: true, enterprise: true },
      { name: "Priority email support SLA", free: false, pro: false, team: true, enterprise: true },
      { name: "Designated Support manager", free: false, pro: false, team: false, enterprise: true }
    ]
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const PRICING_FAQS: FaqItem[] = [
  {
    question: "Can I cap my usage so my bill doesn't run over?",
    answer: "Yes, by default, all Pro plan projects are created with the Spend Cap enabled. This ensures that you will never be charged for usage overages beyond the included plan quotas. If you reach your limits, services will degrade slightly (e.g. read-only database) instead of charging you overages. You can disable the Spend Cap in your dashboard if you require seamless scaling."
  },
  {
    question: "I'm worried I could end up with a huge bill at the end of the month.",
    answer: "We understand. With our default Spend Cap on, your bill is guaranteed never to exceed the base plan price ($25/mo for Pro). Only when you explicitly toggle off the Spend Cap will you pay metered pricing for additional resources. We also send automated alerts when you reach 80% and 100% of your plan's included limits."
  },
  {
    question: "When will I be billed?",
    answer: "Billing is set up on a monthly subscription cycle. The base fee for the Pro or Team plan is billed at the start of your subscription month. If you have the spend cap disabled, any usage overage accumulated during the month will be billed at the end of that cycle."
  },
  {
    question: "Does Supabase charge sales tax, VAT or GST?",
    answer: "Yes, local sales taxes, VAT, or GST are added at checkout where legally applicable, depending on the billing address and country of residency you enter in your credit card profile."
  },
  {
    question: "Are you going to change your pricing in the future?",
    answer: "We strive to keep our pricing simple, stable, and highly developer-friendly. While we may add new tiers or options as our products evolve, any updates to existing plans will always be communicated well in advance, with grandfathering options where possible."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "If you cancel a paid plan, your projects will remain active until the end of the current billing cycle. After that, they will be migrated to the Free plan. Please make sure your database size fits within the Free plan limits (500 MB) before cancelling to prevent service disruption."
  },
  {
    question: "Do I get a notification if I am approaching my usage limits?",
    answer: "Yes, we send email alerts and dashboard notifications once your project exceeds 80% of any of the included limits. This gives you plenty of time to optimize usage or adjust your plan's Spend Cap settings."
  },
  {
    question: "What if I need one project for development and one for production?",
    answer: "We support multiple projects on the same account. The Free plan is limited to 2 active projects. For professional environments, we recommend having separate projects (e.g. staging and production) both on a paid tier to guarantee dedicated CPU and compute stability."
  },
  {
    question: "Can I self-host Supabase for free?",
    answer: "Yes! Supabase is fully open-source and can be self-hosted for free using Docker, Kubernetes, or other systems. You will only be billed if you use our managed Cloud Platform (Supabase Cloud)."
  },
  {
    question: "Can I pause a free project?",
    answer: "Yes, you can pause free projects at any time. Additionally, inactive Free projects (no database queries or API traffic) are automatically paused after 1 week of inactivity to save resources. Paused projects can be unpaused directly from your dashboard."
  }
];

export const PRICING_CTA = {
  title: "Build in a weekend, ",
  gradientText: "scale to millions",
  primaryBtnText: "Start your project",
  primaryBtnLink: "https://supabase.com/dashboard",
  secondaryBtnText: "Request a demo",
  secondaryBtnLink: "https://supabase.com/contact/sales",
  securityLink: "https://supabase.com/security",
  badges: [
    { text: "We protect your data.", iconName: "shieldAlert", isLink: true },
    { text: "SOC2 Type II Certified", iconName: "badgeCheck" },
    { text: "HIPAA Compliant", iconName: "badgeCheck" },
    { text: "ISO 27001 Certified", iconName: "badgeCheck" }
  ]
};
