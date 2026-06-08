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
    <section className="pricing-section">
      <div className="pricing-section__inner">
        
        {/* Tier Cards Grid */}
        <div className="pricing-grid">
          {PRICING_TIERS.map((tier) => {
            const isPro = tier.id === "pro";
            const isEnterprise = tier.id === "enterprise";
            const isPrimaryBtn = isPro || tier.id === "team";

            return (
              <div
                key={tier.id}
                className={`tier-card ${isPro ? "tier-card--pro" : ""}`}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <span className="tier-card__popular">Most Popular</span>
                )}

                <div>
                  <h3 className="tier-card__name">{tier.name}</h3>
                  <p className="tier-card__desc">{tier.description}</p>

                  <div className="tier-card__price-wrap">
                    {!isEnterprise && tier.id !== "free" && (
                      <div className="compute-calculator__label mb-1">From</div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="tier-card__price">{tier.price}</span>
                      {tier.period && (
                        <span className="tier-card__period">{tier.period}</span>
                      )}
                    </div>
                  </div>

                  <Link href={tier.btnLink} className="block mt-6">
                    <Button
                      className={`w-full h-10 font-semibold cursor-pointer ${
                        isPrimaryBtn
                          ? "bg-brand text-black hover:bg-brand-hover"
                          : "border border-card-border bg-card-bg text-zinc-300 hover:border-white hover:text-white"
                      }`}
                    >
                      {tier.btnText}
                    </Button>
                  </Link>

                  <hr className="tier-card__hr" />

                  <div className="space-y-4">
                    <div className="tier-card__features-header">{tier.featuresHeader}</div>
                    <ul className="tier-card__features-list">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="tier-card__feature-item">
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
                  className={`tier-card__footer ${
                    tier.id === "team" || isEnterprise ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  {tier.footerNote}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compare Plans Trigger */}
        <div className="compare-plans">
          <button onClick={scrollToCompare} className="compare-plans__btn">
            <span>Compare Plans</span>
            <ArrowDown className="h-3.5 w-3.5 text-brand animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}