"use client";

import { useState } from "react";
import { Link2, Code } from "lucide-react";

interface ApiRoute {
  path: string;
  response: any;
}

export function ApiCard() {
  const routes: ApiRoute[] = [
    {
      path: "/v1/countries",
      response: [
        { id: 1, name: "New Zealand", code: "NZ" },
        { id: 2, name: "Sweden", code: "SE" },
      ],
    },
    {
      path: "/v1/cities",
      response: [
        { id: 101, name: "Auckland", country_id: 1 },
        { id: 102, name: "Stockholm", country_id: 2 },
      ],
    },
    {
      path: "/v1/continents",
      response: [
        { id: 1, name: "Oceania" },
        { id: 2, name: "Europe" },
      ],
    },
  ];

  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  return (
    <div
      id="api"
      className="group relative overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 min-h-[380px]"
    >
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none" />

      {/* Info Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
            <Link2 className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">Data APIs</h3>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
          Instant, auto-generated, and ready-to-use <span className="text-white font-semibold">RESTful APIs</span>.
        </p>
      </div>

      {/* Interactive Selector and JSON output */}
      <div className="flex-1 flex flex-col gap-3 justify-center select-none">
        {/* Route selector list */}
        <div className="flex flex-col gap-1.5">
          {routes.map((route, idx) => (
            <button
              key={idx}
              onClick={() => setActiveRouteIndex(idx)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg border text-left font-mono text-[9px] transition-all cursor-pointer ${
                activeRouteIndex === idx
                  ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-bold"
                  : "border-zinc-900 bg-black/60 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300"
              }`}
            >
              <span>GET {route.path}</span>
              <span className="text-[8px] opacity-60">200 OK</span>
            </button>
          ))}
        </div>

        {/* JSON Code block console */}
        <div className="rounded-lg border border-zinc-900 bg-black/90 p-3 font-mono text-[9px] text-zinc-400 min-h-[100px] overflow-auto max-h-[120px] no-scrollbar">
          <div className="flex items-center justify-between text-zinc-600 border-b border-zinc-900 pb-1.5 mb-2 uppercase text-[7px] font-bold">
            <span>JSON Output</span>
            <Code className="h-3 w-3" />
          </div>
          <pre className="text-zinc-300">
            {JSON.stringify(routes[activeRouteIndex].response, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
