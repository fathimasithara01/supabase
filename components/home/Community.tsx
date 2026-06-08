"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  text: string;
}

export function Community() {
  const testimonials: Testimonial[] = [
    {
      name: "Orlando Begovic",
      handle: "@orlandobegovic_",
      avatar: "OB",
      text: "Love @supabase custom domains, makes the auth so much better. Highly recommend!",
    },
    {
      name: "Mikael Hessen",
      handle: "@mikael_hessen",
      avatar: "MH",
      text: "Love supabase edge functions. Cursor + Supabase + MCP + Docker desktop is all I need to build anything now.",
    },
    {
      name: "Sitharaman Vijayan",
      handle: "@sitharamanvijayan",
      avatar: "SV",
      text: "Lately been using Supabase over AWS/GCP for products to save on costs and rapid builds. Great solution overall.",
    },
    {
      name: "Hugo Wood",
      handle: "@codewithhugo",
      avatar: "HW",
      text: "Loving #Supabase database replication. Claude Code plans my schema, runs migration script, and syncs instantly.",
    },
    {
      name: "Gabriel L.J.",
      handle: "@gabreil_lj",
      avatar: "GL",
      text: "First time running @supabase locally. It just works. Very good DX, setup is incredibly clean and fast.",
    },
    {
      name: "Paul H.",
      handle: "@paulhensch",
      avatar: "PH",
      text: "I have everything about Supabase running in production now. Database, functions, auth, storage. Exceptional stability.",
    },
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 relative">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Join the community
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
            Discover what our community has to say about their Supabase experience.
          </p>

          <Link
            href="https://discord.gg/supabase"
            target="_blank"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#5865F2] hover:bg-[#4752C4] px-6 text-xs font-bold text-white shadow-lg transition-colors cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>Join us on Discord</span>
          </Link>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-zinc-400">
                      {t.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{t.name}</span>
                      <span className="text-[10px] text-zinc-500 font-mono">{t.handle}</span>
                    </div>
                  </div>
                  <svg className="h-3.5 w-3.5 text-zinc-600 group-hover:text-sky-400 fill-current transition-colors" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
