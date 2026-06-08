"use client";

import Link from "next/link";
import { Check, HelpCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          
          {/* FREE */}
          <div className="flex flex-col rounded-xl border border-zinc-800 bg-[#070708] p-6 justify-between transition-all hover:border-zinc-700">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-sans text-white tracking-wide uppercase">Free</h3>
              </div>
              <p className="mt-2 text-zinc-500 text-xs min-h-[40px]">
                Perfect for passion projects & simple websites.
              </p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-zinc-500 text-xs">/ month</span>
              </div>

              <Link href="https://supabase.com/dashboard" className="block mt-6">
                <Button className="w-full h-10 border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 cursor-pointer">
                  Start for Free
                </Button>
              </Link>

              <hr className="my-6 border-zinc-800" />

              <div className="space-y-4">
                <div className="text-xs font-semibold text-zinc-400">Get started with:</div>
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Unlimited API requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>50,000 monthly active users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>500 MB database size <span className="text-[10px] text-zinc-600 font-medium">Shared CPU • 400 MB RAM</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>5 GB egress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>1 GB file storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Community support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-[10px] text-zinc-600">
              Free projects are paused after 1 week of inactivity. Limit of 2 active projects.
            </div>
          </div>

          {/* PRO */}
          <div className="relative flex flex-col rounded-xl border border-emerald-500/50 bg-[#080b09] p-6 justify-between shadow-lg shadow-emerald-950/20 transition-all hover:border-emerald-500">
            {/* "Most Popular" Badge */}
            <span className="absolute -top-3 left-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
              Most Popular
            </span>
            
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-sans text-white tracking-wide uppercase">Pro</h3>
              </div>
              <p className="mt-2 text-zinc-500 text-xs min-h-[40px]">
                For production applications with the power to scale.
              </p>
              
              <div className="mt-6 flex flex-col">
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">From</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$25</span>
                  <span className="text-zinc-500 text-xs">/ month</span>
                </div>
              </div>

              <Link href="https://supabase.com/dashboard" className="block mt-6">
                <Button className="w-full h-10 bg-emerald-500 text-black font-semibold hover:bg-emerald-400 cursor-pointer">
                  Upgrade now
                </Button>
              </Link>

              <hr className="my-6 border-zinc-800" />

              <div className="space-y-4">
                <div className="text-xs font-semibold text-zinc-400">Everything in the Free Plan, plus:</div>
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span>100,000 monthly active users</span>
                      <div className="text-[10px] text-zinc-500">then $0.00325 per MAU</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span>8 GB disk size per project</span>
                      <div className="text-[10px] text-zinc-500">then $0.125 per GB</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span>250 GB egress</span>
                      <div className="text-[10px] text-zinc-500">then $0.09 per GB</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span>250 GB email egress</span>
                      <div className="text-[10px] text-zinc-500">then $0.03 per GB</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span>100 GB file storage</span>
                      <div className="text-[10px] text-zinc-500">then $0.021 per GB</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Daily backups stored for 7 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>7-day log retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span>Add Log Drains</span>
                      <div className="text-[10px] text-zinc-500">additional $25 per drain, per project</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-[10px] text-zinc-600">
              Paid plans include $10/mo in compute credits, enough to cover one Micro instance.
            </div>
          </div>

          {/* TEAM */}
          <div className="flex flex-col rounded-xl border border-zinc-800 bg-[#070708] p-6 justify-between transition-all hover:border-zinc-700">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-sans text-white tracking-wide uppercase">Team</h3>
              </div>
              <p className="mt-2 text-zinc-500 text-xs min-h-[40px]">
                Add features such as SSO, central user backups, and industry certifications.
              </p>
              
              <div className="mt-6 flex flex-col">
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">From</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$599</span>
                  <span className="text-zinc-500 text-xs">/ month</span>
                </div>
              </div>

              <Link href="https://supabase.com/dashboard" className="block mt-6">
                <Button className="w-full h-10 bg-emerald-500 text-black font-semibold hover:bg-emerald-400 cursor-pointer">
                  Upgrade now
                </Button>
              </Link>

              <hr className="my-6 border-zinc-800" />

              <div className="space-y-4">
                <div className="text-xs font-semibold text-zinc-400">Everything in the Pro Plan, plus:</div>
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>SOC2 & ISO 27001</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Project-scoped and read-only access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>HIPAA available as paid add-on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>SSO for Supabase Dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Priority email support & SLAs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Daily backups stored for 14 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>28-day log retention</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-[10px] text-zinc-600 opacity-0 select-none">
              Spacer spacer spacer spacer spacer spacer spacer spacer.
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="flex flex-col rounded-xl border border-zinc-800 bg-[#070708] p-6 justify-between transition-all hover:border-zinc-700">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-sans text-white tracking-wide uppercase">Enterprise</h3>
              </div>
              <p className="mt-2 text-zinc-500 text-xs min-h-[40px]">
                For large-scale applications running internet-scale workloads.
              </p>
              
              <div className="mt-6 flex flex-col">
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider opacity-0">Spacer</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">Custom</span>
                </div>
              </div>

              <Link href="mailto:sales@supabase.io" className="block mt-6">
                <Button className="w-full h-10 border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 cursor-pointer">
                  Contact Us
                </Button>
              </Link>

              <hr className="my-6 border-zinc-800" />

              <div className="space-y-4">
                <div className="text-xs font-semibold text-zinc-400">Custom capabilities:</div>
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Designated Support manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Uptime SLAs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>BYOC Cloud supported</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>24/7/365 premium enterprise support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Private Slack channel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Custom Security Questionnaires</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-[10px] text-zinc-600 opacity-0 select-none">
              Spacer spacer spacer spacer spacer.
            </div>
          </div>

        </div>

        {/* Compare Plans Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToCompare}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
          >
            <span>Compare Plans</span>
            <ArrowDown className="h-3.5 w-3.5 text-emerald-400 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
