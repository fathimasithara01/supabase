export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: "LangChain", logo: "🦜 LangChain" },
  { name: "Resend", logo: "✉️ Resend" },
  { name: "Loops", logo: "🌀 Loops" },
  { name: "Mobbin", logo: "📱 Mobbin" },
  { name: "Pebblely", logo: "🪨 Pebblely" },
  { name: "Quivr", logo: "🧠 Quivr" },
  { name: "1Password", logo: "🔑 1Password" },
  { name: "Maergo", logo: "✈️ Maergo" }
];

export const HERO_CONTENT = {
  badgeText: "Supabase Vector is now GA",
  titleLine1: "Build in a weekend",
  titleLine2: "Scale to millions",
  description: "Supabase is the Postgres development platform. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
  primaryBtnText: "Start your project",
  primaryBtnLink: "#dashboard",
  secondaryBtnText: "Request a demo",
  secondaryBtnLink: "#request-demo",
  marqueeTitle: "Trusted by fast-growing companies worldwide"
};

export interface MockUser {
  email: string;
  username: string;
  status: "active" | "invited" | "pending";
  lastSignIn: string;
}

export const AUTH_MOCK_USERS: MockUser[] = [
  { email: "alex160198@gmail.com", username: "alex160198", status: "active", lastSignIn: "2 mins ago" },
  { email: "x234567@gmail.com", username: "mememaster000", status: "active", lastSignIn: "10 mins ago" },
  { email: "sarah_k@dev.io", username: "sarah_k", status: "invited", lastSignIn: "Never" }
];

export interface MockFile {
  id: string;
  name: string;
  type: "image" | "document" | "video" | "audio";
  size: string;
}

export const STORAGE_MOCK_FILES: MockFile[] = [
  { id: "1", name: "avatar.png", type: "image", size: "244 KB" },
  { id: "2", name: "invoice.pdf", type: "document", size: "1.2 MB" },
  { id: "3", name: "promo.mp4", type: "video", size: "28.4 MB" },
  { id: "4", name: "intro.mp3", type: "audio", size: "4.5 MB" }
];

export interface MockMessage {
  id: string;
  event: string;
  payload: string;
}

export const REALTIME_MOCK_MESSAGES: MockMessage[] = [
  { id: "1", event: "INSERT", payload: '{"id": 4, "name": "Task D", "status": "pending"}' },
  { id: "2", event: "UPDATE", payload: '{"id": 2, "name": "Task B", "status": "completed"}' },
  { id: "3", event: "DELETE", payload: '{"id": 1}' }
];

export interface MockEdgeFunction {
  id: string;
  name: string;
  method: "POST" | "GET" | "DELETE";
  url: string;
}

export const EDGE_FUNCTIONS_MOCK: MockEdgeFunction[] = [
  { id: "1", name: "send-welcome-email", method: "POST", url: "https://api.supabase.co/functions/v1/send-welcome-email" },
  { id: "2", name: "stripe-webhook", method: "POST", url: "https://api.supabase.co/functions/v1/stripe-webhook" },
  { id: "3", name: "get-github-stars", method: "GET", url: "https://api.supabase.co/functions/v1/get-github-stars" }
];

export const POSTGRES_CARD_FEATURES = [
  "PostgreSQL database",
  "Schema Visualizer & SQL Editor",
  "Full Database Access (super user)",
  "Extensions (PostGIS, pgvector, etc.)"
];

export interface TemplateItem {
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  stars: string;
}

export const TEMPLATES: TemplateItem[] = [
  {
    title: "Next.js Stripe Subscriptions Starter",
    description: "The complete starter kit for high-performance SaaS applications, with Stripe Billing integration.",
    category: "Next.js",
    tags: ["Auth", "Database", "Stripe"],
    author: "Supabase",
    stars: "1.2k"
  },
  {
    title: "SvelteKit Auth Starter",
    description: "A simple SvelteKit application showing how to set up user login, signup, and protected pages.",
    category: "SvelteKit",
    tags: ["Auth", "Database"],
    author: "Supabase",
    stars: "482"
  },
  {
    title: "Flutter Todo List App",
    description: "A mobile application built with Flutter showcasing offline-first sync and realtime updates.",
    category: "Flutter",
    tags: ["Realtime", "Database", "Storage"],
    author: "supabase-community",
    stars: "349"
  },
  {
    title: "Expo Push Notifications Demo",
    description: "React Native starter demonstrating how to send push notifications using Supabase Edge Functions.",
    category: "Expo",
    tags: ["Functions", "Auth"],
    author: "supabase-community",
    stars: "215"
  }
];

export interface FrameworkItem {
  name: string;
  logo: string;
  link: string;
}

export const FRAMEWORKS: FrameworkItem[] = [
  { name: "Next.js", logo: "⚡ Next.js", link: "#" },
  { name: "React", logo: "⚛️ React", link: "#" },
  { name: "Svelte", logo: "🔥 Svelte", link: "#" },
  { name: "Vue", logo: "🟢 Vue", link: "#" },
  { name: "Flutter", logo: "📱 Flutter", link: "#" },
  { name: "iOS", logo: "🍏 iOS", link: "#" },
  { name: "Android", logo: "🤖 Android", link: "#" },
  { name: "Angular", logo: "🔴 Angular", link: "#" }
];

export const COMMUNITY_CONTENT = {
  header: "Join the community",
  subheader: "Discover developers, ask questions, and share projects built with Supabase.",
  discordLink: "https://discord.gg/supabase",
  githubLink: "https://github.com/supabase/supabase",
  stats: [
    { label: "GitHub Stars", value: "68,000+" },
    { label: "Discord Members", value: "15,000+" },
    { label: "Sponsors on GitHub", value: "300+" }
  ],
  channels: [
    { title: "GitHub Discussions", link: "#", description: "Ask questions, share updates, and search questions." },
    { title: "Discord Server", link: "#", description: "Chat in realtime with other community members." },
    { title: "Twitter Channel", link: "#", description: "Get the latest news and features from the core team." }
  ]
};

export const OPEN_SOURCE_CONTENT = {
  category: "Open Source",
  title: "Built in public, open source at core",
  description: "Supabase is built by developers, for developers. All our core components are fully open source, from our auth service to our realtime synchronization servers. Self-host it on your own server or run it in the cloud.",
  btnText: "Learn about Open Source",
  btnLink: "#",
  starBtnText: "Star us on GitHub",
  starLink: "https://github.com/supabase/supabase"
};
