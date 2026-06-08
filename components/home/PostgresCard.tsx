"use client";

import { Check } from "lucide-react";

export function PostgresCard() {
  return (
    <div
      id="database"
      className="group relative overflow-hidden rounded-xl border border-panel-border bg-card-bg/40 p-6 lg:p-8 flex flex-col justify-between hover:border-card-border transition-all duration-300 min-h-[380px]"
    >
      {/* Glow Effect */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/5 blur-[80px] group-hover:bg-brand/10 transition-all duration-300 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        {/* Text Area */}
        <div className="flex flex-col justify-between h-full py-2">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-1.5 rounded-md bg-brand/10 text-brand">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">Postgres Database</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Every project is a <span className="text-white font-semibold">full Postgres database</span>, the world's most trusted relational database.
            </p>
          </div>

          <ul className="space-y-3">
            {[
              "100% portable",
              "Built-in Auth with RLS",
              "Easy to extend",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <Check className="h-4 w-4 text-brand shrink-0 stroke-[3px]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Elephant Wireframe Area */}
        <div className="relative flex justify-center items-center h-full min-h-[180px]">
          <svg
            className="w-48 h-48 text-zinc-800 group-hover:text-brand/40 transition-colors duration-500 ease-in-out select-none"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            {/* Draw a beautiful stylized elephant wireframe using geometric paths */}
            {/* Head Outline */}
            <path d="M100 40 C60 40 40 60 40 100 C40 120 50 140 65 145 C75 148 90 140 100 145 C110 140 125 148 135 145 C150 140 160 120 160 100 C160 60 140 40 100 40 Z" />
            
            {/* Ear Left */}
            <path d="M55 45 C20 45 15 90 35 115 C45 125 55 120 60 100" strokeDasharray="4 2" />
            
            {/* Ear Right */}
            <path d="M145 45 C180 45 185 90 165 115 C155 125 145 120 140 100" strokeDasharray="4 2" />

            {/* Trunk */}
            <path d="M100 145 C100 170 85 180 80 180 C75 180 72 175 75 170 C78 165 92 155 90 145" />

            {/* Tusks */}
            <path d="M82 145 C80 152 72 154 70 150" />
            <path d="M118 145 C120 152 128 154 130 150" />

            {/* Eyes */}
            <circle cx="80" cy="95" r="3" fill="currentColor" className="text-zinc-700 group-hover:text-brand group-hover:fill-brand transition-colors duration-500" />
            <circle cx="120" cy="95" r="3" fill="currentColor" className="text-zinc-700 group-hover:text-brand group-hover:fill-brand transition-colors duration-500" />

            {/* Grid coordinates lines to give design look */}
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" className="opacity-40" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" className="opacity-40" />
            <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-30" />
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 15" className="opacity-20" />
            
            {/* Tiny accent coordinates */}
            <rect x="97" y="37" width="6" height="6" stroke="currentColor" strokeWidth="0.8" fill="black" />
            <rect x="97" y="142" width="6" height="6" stroke="currentColor" strokeWidth="0.8" fill="black" />
            <rect x="37" y="97" width="6" height="6" stroke="currentColor" strokeWidth="0.8" fill="black" />
            <rect x="157" y="97" width="6" height="6" stroke="currentColor" strokeWidth="0.8" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}
