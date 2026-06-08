"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const PARTNERS = [
  { name: "LangChain", logo: "🦜 LangChain" },
  { name: "Resend", logo: "✉️ Resend" },
  { name: "Loops", logo: "🌀 Loops" },
  { name: "Mobbin", logo: "📱 Mobbin" },
  { name: "Pebblely", logo: "🪨 Pebblely" },
  { name: "Quivr", logo: "🧠 Quivr" },
  { name: "1Password", logo: "🔑 1Password" },
  { name: "Maergo", logo: "✈️ Maergo" },
];

const COPY = {
  badge: "Supabase Vector is now GA",
  heading: ["Build in a weekend", "Scale to millions"],
  subtitle:
    "Supabase is the Postgres development platform. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
  cta: { primary: "Start your project", secondary: "Request a demo" },
  marqueeLabel: "Trusted by fast-growing companies worldwide",
};

export function Hero() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="hero-section">
      {/* Background layers */}
      <div className="hero-section__grid bg-grid-pattern" />
      <div className="hero-section__glow" />

      <div className="hero-section__container">
        {/* Badge */}
        <div className="hero-badge animate-float-slow">
          <span className="hero-badge__dot animate-pulse" />
          {COPY.badge}
        </div>

        {/* Heading */}
        <h1 className="hero-heading">
          {COPY.heading[0]}
          <span className="block mt-2">{COPY.heading[1]}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">{COPY.subtitle}</p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <Link href="#dashboard">
            <Button className="hero-cta hero-cta--primary">
              {COPY.cta.primary}
            </Button>
          </Link>
          <Link href="#request-demo">
            <Button variant="outline" className="hero-cta hero-cta--secondary">
              {COPY.cta.secondary}
            </Button>
          </Link>
        </div>

        {/* Marquee */}
        <div className="w-full max-w-5xl overflow-hidden mt-8 select-none">
          <p className="hero-marquee__label">{COPY.marqueeLabel}</p>
          <div className="hero-marquee">
            <div className="animate-marquee flex gap-12 whitespace-nowrap">
              {doubled.map((partner, idx) => (
                <div key={idx} className="hero-marquee__item">
                  <span>{partner.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}