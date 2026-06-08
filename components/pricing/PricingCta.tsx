"use client";

import Link from "next/link";
import { ShieldAlert, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingCta() {
  return (
    <section className="pricing-cta">
      {/* Decorative background glow */}
      <div className="pricing-cta__glow" />

      <div className="pricing-cta__inner">
        <h2 className="pricing-cta__title">
          Build in a weekend,{" "}
          <span className="pricing-cta__highlight">
            scale to millions
          </span>
        </h2>

        {/* Buttons */}
        <div className="pricing-cta__actions">
          <Link href="https://supabase.com/dashboard">
            <Button className="h-10 px-6 bg-brand text-black font-semibold hover:bg-brand-hover cursor-pointer">
              Start your project
            </Button>
          </Link>
          <Link href="https://supabase.com/contact/sales">
            <Button 
              variant="outline" 
              className="h-10 px-6 border-card-border bg-card-bg text-zinc-300 hover:border-panel-border hover:bg-panel-bg cursor-pointer"
            >
              Request a demo
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pricing-cta__trust">
          <div className="pricing-cta__badge">
            <ShieldAlert className="h-3.5 w-3.5 text-brand" />
            <span>We protect your data.</span>
            <a 
              href="https://supabase.com/security" 
              className="text-zinc-400 hover:text-white transition-colors underline decoration-zinc-800"
            >
              Security
            </a>
          </div>
          
          <span className="pricing-cta__separator">•</span>
          
          <div className="pricing-cta__badge">
            <BadgeCheck className="h-3.5 w-3.5 text-brand" />
            <span>SOC2 Type II Certified</span>
          </div>

          <span className="pricing-cta__separator">•</span>

          <div className="pricing-cta__badge">
            <BadgeCheck className="h-3.5 w-3.5 text-brand" />
            <span>HIPAA Compliant</span>
          </div>

          <span className="pricing-cta__separator">•</span>

          <div className="pricing-cta__badge">
            <BadgeCheck className="h-3.5 w-3.5 text-brand" />
            <span>ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}