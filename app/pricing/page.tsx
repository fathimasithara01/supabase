import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ComputePricing } from "@/components/pricing/ComputePricing";
import { DiskConfigurations } from "@/components/pricing/DiskConfigurations";
import { CostControl } from "@/components/pricing/CostControl";
import { PlanComparison } from "@/components/pricing/PlanComparison";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { PricingCta } from "@/components/pricing/PricingCta";

export const metadata: Metadata = {
  title: "Pricing & Plans | Supabase",
  description: "Predictable pricing, designed to scale. Choose the right plan for your project. Start building for free, collaborate with your team, or scale to millions of users.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <PricingHero />

        {/* Pricing tier cards */}
        <PricingCards />

        {/* How compute pricing works & calculator */}
        <ComputePricing />

        {/* Advanced disk configurations */}
        <DiskConfigurations />

        {/* Cost Control & Add-ons */}
        <CostControl />

        {/* Complete Plan Comparison Grid */}
        <PlanComparison />

        {/* FAQ Accordions */}
        <PricingFaq />

        {/* Pre-footer Call to Action */}
        <PricingCta />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
