"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CustomerStory {
  company: string;
  desc: string;
  tags: string[];
}

export function Frameworks() {
  const frameworks = [
    { name: "React", logo: "⚛️" },
    { name: "Next.js", logo: "▲" },
    { name: "Nuxt", logo: "🟢" },
    { name: "Flutter", logo: "🐦" },
    { name: "Kotlin", logo: "🔶" },
    { name: "Svelte", logo: "🧡" },
    { name: "Solid", logo: "🔷" },
    { name: "Vue", logo: "💚" },
    { name: "Angular", logo: "❤️" },
  ];

  const stories: CustomerStory[] = [
    {
      company: "Mobbin",
      desc: "Mobbin uses Supabase Auth, Database and Storage to scale to millions of users.",
      tags: ["Auth", "Database", "Storage"],
    },
    {
      company: "Pebblely",
      desc: "Pebblely generated 10M+ images in 6 months using Supabase database and vector solutions.",
      tags: ["Vector", "Database"],
    },
    {
      company: "Quivr",
      desc: "Quivr uses Supabase to build personal brain assistants with vector search.",
      tags: ["Vector", "Edge Functions"],
    },
    {
      company: "1Password",
      desc: "1Password secures enterprise credential vaults using Row Level Security policies.",
      tags: ["Auth", "RLS Policies"],
    },
    {
      company: "Maergo",
      desc: "Maergo Express Delivery manages real-time logistical shipping routes on Postgres.",
      tags: ["Realtime", "Database"],
    },
    {
      company: "Mozilla",
      desc: "Mozilla manages secure user telemetry settings using managed Postgres database.",
      tags: ["Database", "RLS"],
    },
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-panel-border/60 relative">
      <div className="mx-auto max-w-7xl">
        {/* Framework Integrations */}
        <div className="text-center mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            Use Supabase with <span className="text-zinc-500 font-medium">any framework</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
            {frameworks.map((fw, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-14 w-14 rounded-xl border border-panel-border bg-card-bg/80 hover:border-brand/30 hover:bg-brand/5 hover:scale-115 transition-all duration-300 shadow-lg group cursor-pointer"
                title={fw.name}
              >
                <span className="text-xl group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  {fw.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Stories Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold tracking-wider text-brand uppercase mb-3">
            Customer Stories
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Trusted by the world’s <span className="block sm:inline bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">most innovative companies.</span>
              </h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl">
                See how Supabase empowers companies of all sizes to accelerate their growth and streamline their work.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 rounded-md border border-card-border bg-card-bg px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:border-panel-border transition-colors"
              >
                <span>View all stories</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Customer Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-panel-border bg-card-bg/40 p-6 flex flex-col justify-between hover:border-card-border hover:bg-card-bg/60 transition-all duration-300 min-h-[180px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-brand transition-colors">
                    {story.company}
                  </span>
                  <div className="flex gap-1.5">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-zinc-900 px-1.5 py-0.5 text-[8px] font-semibold text-zinc-500 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {story.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-panel-border/60 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  Read case study →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
