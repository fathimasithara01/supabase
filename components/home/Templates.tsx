"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

interface TemplateItem {
  title: string;
  desc: string;
  tech: string[];
  githubUrl: string;
}

export function Templates() {
  const templates: TemplateItem[] = [
    {
      title: "Stripe Subscriptions Starter",
      desc: "The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Next.js, and Vercel.",
      tech: ["▲ Next.js", "💳 Stripe", "⚡ Supabase"],
      githubUrl: "#",
    },
    {
      title: "Next.js Starter",
      desc: "A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.",
      tech: ["▲ Next.js", "⚡ Supabase", "💅 Tailwind"],
      githubUrl: "#",
    },
    {
      title: "AI Chatbot",
      desc: "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase vector store.",
      tech: ["▲ Next.js", "🤖 OpenAI", "⚡ Supabase"],
      githubUrl: "#",
    },
    {
      title: "LangChain + Next.js Starter",
      desc: "Starter template and example use cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
      tech: ["🦜 LangChain", "▲ Next.js", "⚡ Supabase"],
      githubUrl: "#",
    },
    {
      title: "Flutter User Management",
      desc: "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
      tech: ["🐦 Flutter", "📱 Dart", "⚡ Supabase"],
      githubUrl: "#",
    },
    {
      title: "Expo React Native Starter",
      desc: "An extended version of create-expo-app implementing authentication on both the web and mobile applications.",
      tech: ["📱 Expo", "⚛️ React Native", "⚡ Supabase"],
      githubUrl: "#",
    },
  ];

  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8 border-t border-panel-border/60 relative">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Start building in seconds
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
            Kickstart your next project with templates built by us and our community.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md border border-card-border bg-card-bg px-4 text-xs font-semibold text-zinc-300 hover:text-white hover:border-panel-border transition-colors"
            >
              View all examples
            </Link>
            <Link
              href="https://github.com/supabase/supabase"
              target="_blank"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-card-border bg-card-bg px-4 text-xs font-semibold text-zinc-300 hover:text-white hover:border-panel-border transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Official GitHub Library</span>
            </Link>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-panel-border bg-card-bg/20 p-6 hover:border-card-border hover:bg-card-bg/60 transition-all duration-300"
            >
              <div>
                {/* Tech Logos */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tpl.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-panel-border bg-black px-2.5 py-0.5 text-[8.5px] font-mono font-bold text-zinc-400 group-hover:text-zinc-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-bold text-white tracking-tight mb-2 group-hover:text-brand transition-colors">
                  {tpl.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {tpl.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-panel-border/60 flex items-center justify-between text-[10px] text-zinc-500">
                <Link
                  href={tpl.githubUrl}
                  className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>View Template</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
