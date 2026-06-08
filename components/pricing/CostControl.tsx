"use client";

import { useState } from "react";
import { ShieldCheck, History, Globe2, HelpCircle } from "lucide-react";
import { ADDONS } from "@/lib/constants/pricing";

export function CostControl() {
  const [spendCapOn, setSpendCapOn] = useState(true);

  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
      <div className="mx-auto max-w-5xl">
        
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-white tracking-tight">
            Fine-tune your project
          </h2>
          <p className="mt-3 text-zinc-400 text-sm max-w-xl mx-auto">
            Go beyond your Plan limits and level up your Supabase experience
          </p>
        </div>

        {/* Cost Control Toggle Card */}
        <div className="rounded-xl border border-zinc-800 bg-panel-bg p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 rounded-lg border border-card-border bg-card-bg p-6 flex flex-col items-center">
              
              {/* Spend Cap Toggle */}
              <div className="flex items-center justify-between w-full border-b border-zinc-900 pb-4 mb-6">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Spend Cap Status
                </span>
                
                <button
                  onClick={() => setSpendCapOn(!spendCapOn)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors outline-none cursor-pointer ${
                    spendCapOn ? "bg-brand" : "bg-zinc-850 border border-zinc-800"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      spendCapOn ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Dynamic Chart Visual */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between text-[10px] text-zinc-500 font-bold uppercase">
                  <span>Usage Scale</span>
                  <span className={spendCapOn ? "text-brand" : "text-amber-400"}>
                    {spendCapOn ? "Capped at $25" : "Pay As You Go"}
                  </span>
                </div>
                
                {/* Bar indicators */}
                <div className="h-24 w-full flex items-end justify-between gap-2 border-b border-zinc-855 pb-1 mt-2">
                  <div className="w-full bg-brand h-[30%] rounded-t transition-all duration-300" />
                  <div className="w-full bg-brand h-[45%] rounded-t transition-all duration-300" />
                  <div className="w-full bg-brand h-[65%] rounded-t transition-all duration-300" />
                  <div className="w-full h-[85%] rounded-t transition-all duration-500 overflow-hidden bg-zinc-900 relative">
                    <div
                      className={`absolute bottom-0 w-full rounded-t transition-all duration-500 ${
                        spendCapOn ? "bg-brand h-[70%]" : "bg-brand h-[100%]"
                      }`}
                    />
                    {spendCapOn && (
                      <div className="absolute top-[30%] left-0 w-full border-t border-dashed border-red-500/80 z-10" />
                    )}
                  </div>
                  <div className="w-full h-[95%] rounded-t transition-all duration-500 overflow-hidden bg-zinc-900 relative">
                    <div
                      className={`absolute bottom-0 w-full rounded-t transition-all duration-500 ${
                        spendCapOn ? "bg-brand h-[70%]" : "bg-brand h-[100%]"
                      }`}
                    />
                    {spendCapOn && (
                      <div className="absolute top-[30%] left-0 w-full border-t border-dashed border-red-500/80 z-10" />
                    )}
                  </div>
                </div>

                <div className="flex justify-between text-[8px] text-zinc-600 font-mono mt-1">
                  <span>Proj A</span>
                  <span>Proj B</span>
                  <span>Proj C</span>
                  <span>Proj D</span>
                  <span>Proj E</span>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block rounded-full bg-brand-muted border border-brand/30 px-2.5 py-0.5 text-[9px] font-bold text-brand uppercase tracking-wide">
                Available on Pro Plan
              </span>
              
              <h3 className="text-xl font-bold font-sans text-white">Cost Control</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The Pro Plan has a spend cap enabled by default to keep costs under control. If you want to scale beyond the plan's included quotas, simply switch off the spend cap to pay for additional resources.
              </p>

              <div className="rounded border border-card-border bg-zinc-950/40 p-3 text-xs flex gap-2">
                <ShieldCheck className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Current status: </span>
                  <span className={spendCapOn ? "text-brand font-semibold" : "text-amber-400 font-semibold"}>
                    {spendCapOn 
                      ? "Spend Cap is ON. You will never be billed for usage overages; services will degrade if limits are exceeded." 
                      : "Spend Cap is OFF. You pay for what you use. Infinitely scalable with standard metered pricing."
                    }
                  </span>
                </div>
              </div>

              <a
                href="https://supabase.com/docs/guides/platform/spend-cap"
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover transition-colors"
              >
                <span>Learn about Cost Control</span>
                <HelpCircle className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Small Add-ons grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADDONS.map((addon) => (
            <div
              key={addon.id}
              className="rounded-xl border border-card-border bg-panel-bg p-6 hover:border-panel-border transition-all flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-card-bg border border-card-border">
                    {addon.iconName === "globe" && <Globe2 className="h-5 w-5 text-brand" />}
                    {addon.iconName === "history" && <History className="h-5 w-5 text-brand" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{addon.title}</h4>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{addon.subtitle}</div>
                  </div>
                </div>
                <div className="text-right">
                  {addon.id === "pitr" && (
                    <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider block">From</span>
                  )}
                  <span className="text-sm font-bold text-brand">${addon.price}</span>
                  <span className="text-[10px] text-zinc-500">{addon.period}</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {addon.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
