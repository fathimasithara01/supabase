"use client";

import Link from "next/link";
import { Check, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants/pricing";

export function PricingCards() {
  const scrollToCompare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("comparison-table");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPro = tier.id === "pro";
            const isEnterprise = tier.id === "enterprise";
            return (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-xl p-6 justify-between transition-all ${
                  isPro
                    ? "border border-brand/50 bg-brand-glow shadow-lg shadow-brand/10 hover:border-brand"
                    : "border border-card-border bg-panel-bg hover:border-panel-border"
                }`}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand-muted border border-brand/30 px-3 py-0.5 text-[10px] font-semibold text-brand uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-sans text-white tracking-wide uppercase">{tier.name}</h3>
                  </div>
                  <p className="mt-2 text-zinc-500 text-xs min-h-[40px]">
                    {tier.description}
                  </p>
                  
                  <div className="mt-6 flex flex-col justify-end min-h-[48px]">
                    {!isEnterprise && tier.id !== "free" && (
                      <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">From</div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                      {tier.period && (
                        <span className="text-zinc-500 text-xs">{tier.period}</span>
                      )}
                    </div>
                  </div>

                  <Link href={tier.btnLink} className="block mt-6">
                    <Button
                      className={`w-full h-10 cursor-pointer font-semibold ${
                        isPro || tier.id === "team"
                          ? "bg-brand text-black hover:bg-brand-hover"
                          : "border border-card-border bg-card-bg text-zinc-300 hover:border-panel-border hover:bg-panel-bg"
                      }`}
                    >
                      {tier.btnText}
                    </Button>
                  </Link>

                  <hr className="my-6 border-card-border" />

                  <div className="space-y-4">
                    <div className="text-xs font-semibold text-zinc-400">{tier.featuresHeader}</div>
                    <ul className="space-y-2.5 text-xs text-zinc-400">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                          <div>
                            <span>{feat.text}</span>
                            {feat.subtext && (
                              <div className="text-[10px] text-zinc-500">{feat.subtext}</div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div
                  className={`mt-8 text-[10px] text-zinc-600 ${
                    tier.id === "team" || isEnterprise ? "opacity-0 select-none" : ""
                  }`}
                >
                  {tier.footerNote}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compare Plans Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToCompare}
            className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card-bg px-4 py-2 text-xs font-medium text-zinc-300 hover:border-panel-border hover:text-white transition-all cursor-pointer"
          >
            <span>Compare Plans</span>
            <ArrowDown className="h-3.5 w-3.5 text-brand animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
