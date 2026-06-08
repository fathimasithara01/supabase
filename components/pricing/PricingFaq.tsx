"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Can I cap my usage so my bill doesn't run over?",
      answer: "Yes, by default, all Pro plan projects are created with the Spend Cap enabled. This ensures that you will never be charged for usage beyond the included plan quotas. If you reach your limits, services will degrade slightly (e.g. read-only database) instead of charging you overages. You can disable the Spend Cap in your dashboard if you require seamless scaling.",
    },
    {
      question: "I'm worried I could end up with a huge bill at the end of the month.",
      answer: "We understand. With our default Spend Cap on, your bill is guaranteed never to exceed the base plan price ($25/mo for Pro). Only when you explicitly toggle off the Spend Cap will you pay metered pricing for additional resources. We also send automated alerts when you reach 80% and 100% of your plan's included limits.",
    },
    {
      question: "When will I be billed?",
      answer: "Billing is set up on a monthly subscription cycle. The base fee for the Pro or Team plan is billed at the start of your subscription month. If you have the spend cap disabled, any usage overage accumulated during the month will be billed at the end of that cycle.",
    },
    {
      question: "Does Supabase charge sales tax, VAT or GST?",
      answer: "Yes, local sales taxes, VAT, or GST are added at checkout where legally applicable, depending on the billing address and country of residency you enter in your credit card profile.",
    },
    {
      question: "Are you going to change your pricing in the future?",
      answer: "We strive to keep our pricing simple, stable, and highly developer-friendly. While we may add new tiers or options as our products evolve, any updates to existing plans will always be communicated well in advance, with grandfathering options where possible.",
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "If you cancel a paid plan, your projects will remain active until the end of the current billing cycle. After that, they will be migrated to the Free plan. Please make sure your database size fits within the Free plan limits (500 MB) before cancelling to prevent service disruption.",
    },
    {
      question: "Do I get a notification if I am approaching my usage limits?",
      answer: "Yes, we send email alerts and dashboard notifications once your project exceeds 80% of any of the included limits. This gives you plenty of time to optimize usage or adjust your plan's Spend Cap settings.",
    },
    {
      question: "What if I need one project for development and one for production?",
      answer: "We support multiple projects on the same account. The Free plan is limited to 2 active projects. For professional environments, we recommend having separate projects (e.g. staging and production) both on a paid tier to guarantee dedicated CPU and compute stability.",
    },
    {
      question: "Can I self-host Supabase for free?",
      answer: "Yes! Supabase is fully open-source and can be self-hosted for free using Docker, Kubernetes, or other systems. You will only be billed if you use our managed Cloud Platform (Supabase Cloud).",
    },
    {
      question: "Can I pause a free project?",
      answer: "Yes, you can pause free projects at any time. Additionally, inactive Free projects (no database queries or API traffic) are automatically paused after 1 week of inactivity to save resources. Paused projects can be unpaused directly from your dashboard.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8 border-b border-panel-border">
      <div className="mx-auto max-w-3xl">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-white tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-card-border bg-card-bg overflow-hidden transition-all hover:border-panel-border"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-white cursor-pointer select-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand" : ""
                    }`}
                  />
                </button>

                {/* Answer Area */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-card-border" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs text-zinc-400 leading-relaxed bg-panel-bg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support ticket info */}
        <div className="text-center mt-12 text-xs text-zinc-500">
          Can't find the answer to your question?{" "}
          <a
            href="https://supabase.com/dashboard/support/new"
            target="_blank"
            className="text-brand hover:text-brand-hover transition-colors font-semibold"
          >
            Open a support ticket
          </a>{" "}
          to receive help from our team.
        </div>

      </div>
    </section>
  );
}
