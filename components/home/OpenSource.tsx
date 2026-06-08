"use client";

import Link from "next/link";
import { Star, TrendingUp } from "lucide-react";

export function OpenSource() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-panel-border/60 relative">
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Info */}
          <div className="space-y-6">
            <div className="text-xs font-semibold tracking-wider text-brand uppercase">
              Open Source
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Open source from day one
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              Supabase is built in the open because we believe great developer tools should be transparent, inspectable, and owned by the community. Read, contribute, self-host. You're never locked in, and always in control.
            </p>
            <div className="pt-2">
              <Link
                href="https://github.com/supabase/supabase"
                target="_blank"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-card-border bg-card-bg px-6 text-xs font-bold text-zinc-300 hover:text-white hover:border-panel-border transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Explore our repository</span>
              </Link>
            </div>
          </div>

          {/* GitHub Stars Metrics Card */}
          <div className="rounded-xl border border-panel-border bg-card-bg/40 p-6 flex flex-col justify-between hover:border-card-border transition-all duration-300 relative overflow-hidden group min-h-[200px]">
            {/* Glow background */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/5 blur-[80px] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-panel-border/80 pb-4 mb-4 select-none">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </span>
                <span className="text-xs font-mono font-bold text-zinc-300">
                  @supabase/supabase
                </span>
              </div>
              <div className="flex items-center gap-1 text-brand text-xs font-bold">
                <Star className="h-3.5 w-3.5 fill-brand stroke-none" />
                <span>103,600+ stars</span>
              </div>
            </div>

            {/* Stars Growth SVG Chart */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-end h-20 w-full px-2 mb-4 select-none">
                {/* Visual Chart Bars / Lines representing star growth */}
                <svg className="w-full h-full text-brand/30 group-hover:text-brand/50 transition-colors duration-500" viewBox="0 0 200 60" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="200" y2="10" stroke="#1f1f1f" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="0" y1="30" x2="200" y2="30" stroke="#1f1f1f" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="#1f1f1f" strokeWidth="0.5" strokeDasharray="3 3" />
                  
                  {/* Growth Curve */}
                  <path
                    d="M 0 55 Q 30 52 60 42 T 120 25 T 180 5 L 200 2"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                  />
                  {/* Fill below path */}
                  <path
                    d="M 0 55 Q 30 52 60 42 T 120 25 T 180 5 L 200 2 L 200 60 L 0 60 Z"
                    fill="currentColor"
                    className="opacity-5"
                  />
                </svg>
              </div>

              <div className="flex justify-between text-[9px] font-mono text-zinc-600 select-none">
                <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Star growth history</span>
                <span>2020 - 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
