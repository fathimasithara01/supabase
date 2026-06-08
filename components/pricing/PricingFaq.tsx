"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      answer: "We understand. With our default Spend Cap on, your bill is guaranteed never to exceed the base plan price ($25/mo for Pro). Only when you explicitly toggle off the Spend Cap will you pay metered pricing for additional resources.",
    },
    {
      question: "When will I be billed?",
      answer: "Billing is set up on a monthly subscription cycle. The base fee for the Pro or Team plan is billed at the start of your subscription month. Usage overage accumulated during the month will be billed at the end of that cycle.",
    },
    {
      question: "Does Supabase charge sales tax, VAT or GST?",
      answer: "Yes, local sales taxes, VAT, or GST are added at checkout where legally applicable, depending on the billing address and country of residency you enter in your credit card profile.",
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "If you cancel a paid plan, your projects remain active until the end of the current billing cycle. After that, they will be migrated to the Free plan. Ensure database size fits within Free plan limits (500 MB) before cancelling.",
    },
    {
      question: "Do I get a notification if I am approaching my usage limits?",
      answer: "Yes, we send email alerts and dashboard notifications once your project exceeds 80% of any of the included limits. This gives you time to optimize usage or adjust your plan's Spend Cap settings.",
    },
    {
      question: "Can I self-host Supabase for free?",
      answer: "Yes! Supabase is fully open-source and can be self-hosted for free using Docker, Kubernetes, or other systems. You will only be billed if you use our managed Cloud Platform (Supabase Cloud).",
    },
    {
      question: "Can I pause a free project?",
      answer: "Yes, you can pause free projects at any time. Additionally, inactive Free projects are automatically paused after 1 week of inactivity to save resources. Paused projects can be unpaused directly from your dashboard.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="pricing-faq">
      <div className="pricing-faq__inner">
        
        <div className="pricing-faq__header">
          <h2 className="pricing-faq__title">Frequently asked questions</h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="faq-item__trigger"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className="faq-item__icon" />
                </button>

                <div className="faq-item__content">
                  <p className="faq-item__answer">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pricing-faq__footer">
          Can't find the answer to your question?{" "}
          <a
            href="https://supabase.com/dashboard/support/new"
            target="_blank"
            rel="noopener noreferrer"
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