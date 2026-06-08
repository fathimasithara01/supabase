"use client";

import Link from "next/link";
import { ShieldAlert, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingCta() {
  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-panel-border text-center relative overflow-hidden">
      {/* Glow asset */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-4xl space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
          Build in a weekend,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
            scale to millions
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link href="https://supabase.com/dashboard">
            <Button className="h-10 px-6 bg-brand text-black font-semibold hover:bg-brand-hover cursor-pointer">
              Start your project
            </Button>
          </Link>
          <Link href="https://supabase.com/contact/sales">
            <Button variant="outline" className="h-10 px-6 border-card-border bg-card-bg text-zinc-300 hover:border-panel-border hover:bg-panel-bg cursor-pointer">
              Request a demo
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-panel-border/60 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-[11px] text-zinc-500 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="h-3.5 w-3.5 text-brand" />
            <span>We protect your data.</span>
            <a href="https://supabase.com/security" className="text-zinc-400 hover:text-white transition-colors underline">
              More on Security
            </a>
          </div>
          
          <span className="hidden sm:inline text-zinc-800">•</span>
          
          <div className="flex items-center gap-1.5">
            <BadgeCheck className="h-3.5 w-3.5 text-brand" />
            <span>SOC2 Type II Certified</span>
          </div>

          <span className="hidden sm:inline text-zinc-800">•</span>

          <div className="flex items-center gap-1.5">
            <BadgeCheck className="h-3.5 w-3.5 text-brand" />
            <span>HIPAA Compliant</span>
          </div>

          <span className="hidden sm:inline text-zinc-800">•</span>

          <div className="flex items-center gap-1.5">
            <BadgeCheck className="h-3.5 w-3.5 text-brand" />
            <span>ISO 27001 Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
