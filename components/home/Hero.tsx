"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const partners = [
    { name: "LangChain", logo: "🦜 LangChain" },
    { name: "Resend", logo: "✉️ Resend" },
    { name: "Loops", logo: "🌀 Loops" },
    { name: "Mobbin", logo: "📱 Mobbin" },
    { name: "Pebblely", logo: "🪨 Pebblely" },
    { name: "Quivr", logo: "🧠 Quivr" },
    { name: "1Password", logo: "🔑 1Password" },
    { name: "Maergo", logo: "✈️ Maergo" },
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient">
      {/* Background grid overlays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge Alert */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-semibold text-emerald-400 mb-6 backdrop-blur-sm animate-float-slow">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Supabase Vector is now GA
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl font-sans leading-[1.15] mb-6">
          Build in a weekend
          <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            Scale to millions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl leading-relaxed mb-10 text-balance">
          Supabase is the Postgres development platform. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <Link href="#dashboard">
            <Button className="h-12 px-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm rounded-md shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all duration-200 cursor-pointer">
              Start your project
            </Button>
          </Link>
          <Link href="#request-demo">
            <Button
              variant="outline"
              className="h-12 px-8 border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium text-sm rounded-md cursor-pointer"
            >
              Request a demo
            </Button>
          </Link>
        </div>

        {/* Partner Integrations Marquee */}
        <div className="w-full max-w-5xl overflow-hidden mt-8 select-none">
          <p className="text-[11px] font-semibold tracking-wider text-zinc-600 uppercase mb-6">
            Trusted by fast-growing companies worldwide
          </p>

          <div className="relative w-full flex items-center justify-center mask-image-gradient py-4 bg-gradient-to-r from-transparent via-zinc-950/50 to-transparent">
            <div className="flex overflow-hidden w-full">
              <div className="animate-marquee flex gap-12 whitespace-nowrap">
                {partners.concat(partners).map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 font-mono text-sm font-semibold tracking-wider transition-colors duration-300"
                  >
                    <span>{partner.logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
