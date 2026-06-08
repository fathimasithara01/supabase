"use client";

import { useState } from "react";
import { ShieldCheck, History, Globe2, HelpCircle } from "lucide-react";
import { ADDONS } from "@/lib/constants/pricing";

export function CostControl() {
  const [spendCapOn, setSpendCapOn] = useState(true);

  return (
    <section className="cost-control">
      <div className="cost-control__inner">
        
        {/* Headings */}
        <div className="compute-pricing__header">
          <h2 className="compute-pricing__title">Fine-tune your project</h2>
          <p className="compute-pricing__subtitle">
            Go beyond your Plan limits and level up your Supabase experience
          </p>
        </div>

        {/* Cost Control Toggle Card */}
        <div className="cost-control__card">
          <div className="cost-control__grid">
            
            {/* Visual Column */}
            <div className="cost-control__visual">
              <div className="cost-toggle">
                <span className="compute-calculator__label mb-0">Spend Cap Status</span>
                <button
                  onClick={() => setSpendCapOn(!spendCapOn)}
                  className={`cost-toggle__switch ${spendCapOn ? "cost-toggle__switch--on" : "cost-toggle__switch--off"}`}
                >
                  <span className={`cost-toggle__thumb ${spendCapOn ? "translate-x-6" : "translate-x-1"}`} />
                </button>
              </div>

              {/* Chart Visual */}
              <div className="cost-chart">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="text-zinc-500">Usage Scale</span>
                  <span className={spendCapOn ? "text-brand" : "text-amber-400"}>
                    {spendCapOn ? "Capped at $25" : "Pay As You Go"}
                  </span>
                </div>
                
                <div className="cost-chart__bars">
                  <div className="cost-chart__bar-item h-[30%]" />
                  <div className="cost-chart__bar-item h-[45%]" />
                  <div className="cost-chart__bar-item h-[65%]" />
                  
                  {/* Dynamic Bars */}
                  {[85, 95].map((h, i) => (
                    <div key={i} className={`cost-chart__bar-container h-[${h}%]`}>
                      <div
                        className="cost-chart__bar-item absolute bottom-0 w-full"
                        style={{ height: spendCapOn ? "70%" : "100%" }}
                      />
                      {spendCapOn && <div className="cost-chart__cap-line" />}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-[8px] text-zinc-600 font-mono mt-1">
                  {["Proj A", "Proj B", "Proj C", "Proj D", "Proj E"].map(label => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="hero-badge mb-0 px-2.5 py-0.5 text-[9px]">Available on Pro Plan</span>
              <h3 className="text-xl font-bold text-white">Cost Control</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The Pro Plan has a spend cap enabled by default to keep costs under control. Switch it off to scale beyond included quotas and pay for additional resources.
              </p>

              <div className="compute-summary bg-black/40 border-card-border p-3 flex gap-3">
                <ShieldCheck className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <div className="text-xs leading-snug">
                  <span className="font-semibold text-white">Current status: </span>
                  <span className={spendCapOn ? "text-brand font-semibold" : "text-amber-400 font-semibold"}>
                    {spendCapOn 
                      ? "Spend Cap is ON. You will never be billed for usage overages; services will degrade if limits are exceeded." 
                      : "Spend Cap is OFF. You pay for what you use. Infinitely scalable with standard metered pricing."
                    }
                  </span>
                </div>
              </div>

              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                Learn about Cost Control <HelpCircle className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Add-ons Grid */}
        <div className="addon-grid">
          {ADDONS.map((addon) => (
            <div key={addon.id} className="addon-card">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="addon-card__icon">
                    {addon.iconName === "globe" ? <Globe2 className="h-5 w-5" /> : <History className="h-5 w-5" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{addon.title}</h4>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{addon.subtitle}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-brand">${addon.price}</span>
                  <span className="text-[10px] text-zinc-500 block">{addon.period}</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{addon.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}