"use client";

import { useState, useEffect } from "react";
import { Cpu, Terminal, Play, CheckCircle } from "lucide-react";

export function FunctionsCard() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "Ready to deploy.",
  ]);
  const [isDeploying, setIsDeploying] = useState(false);

  const startDeployment = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setTerminalLines(["$ supabase functions deploy hello-world"]);

    const steps = [
      "Compiling TypeScript source...",
      "Bundling dependencies using Deno...",
      "Uploading bundle (2.4 KB)...",
      "Deploying to 29 edge regions...",
      "✓ Deployed successfully!",
      "URL: https://project.supabase.co/functions/v1/hello-world",
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsDeploying(false);
        }
      }, (index + 1) * 800);
    });
  };

  return (
    <div
      id="functions"
      className="group relative overflow-hidden rounded-xl border border-panel-border bg-card-bg/40 p-6 flex flex-col justify-between hover:border-card-border transition-all duration-300 min-h-[380px]"
    >
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/5 blur-[80px] pointer-events-none" />

      {/* Info Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-brand/10 text-brand">
            <Cpu className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">Edge Functions</h3>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
          Easily write custom code <span className="text-white font-semibold">without deploying or scaling servers</span>.
        </p>
      </div>

      {/* Terminal and Globe side-by-side */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Terminal Window Mockup */}
        <div className="rounded-lg border border-panel-border bg-black/80 font-mono text-[9px] text-zinc-400 p-3 shadow-inner flex-1 flex flex-col justify-between min-h-[120px]">
          <div className="flex items-center justify-between border-b border-panel-border pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <span className="h-2 w-2 rounded-full bg-green-500/60" />
            </div>
            <button
              onClick={startDeployment}
              disabled={isDeploying}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-card-border bg-card-bg hover:bg-panel-bg hover:text-white transition-colors text-[8px] cursor-pointer disabled:opacity-50"
            >
              <Play className="h-2 w-2 text-brand" />
              <span>Deploy</span>
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-1 justify-start">
            {terminalLines.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.startsWith("✓")
                    ? "text-brand font-bold"
                    : line.startsWith("$")
                    ? "text-white"
                    : "text-zinc-500"
                }
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Rotating Network Globe Graphic */}
        <div className="relative h-20 flex justify-center items-center overflow-hidden">
          <svg
            className="w-16 h-16 text-zinc-800 animate-spin-slow group-hover:text-brand/30 transition-colors duration-500 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          >
            {/* Earth circles */}
            <circle cx="50" cy="50" r="45" />
            <ellipse cx="50" cy="50" rx="45" ry="15" />
            <ellipse cx="50" cy="50" rx="15" ry="45" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="50" y1="5" x2="50" y2="95" />

            {/* Glowing Edge nodes */}
            <circle cx="50" cy="5" r="2.5" fill="currentColor" className="text-brand" />
            <circle cx="50" cy="95" r="2.5" fill="currentColor" className="text-brand" />
            <circle cx="5" cy="50" r="2.5" fill="currentColor" className="text-brand" />
            <circle cx="95" cy="50" r="2.5" fill="currentColor" className="text-brand" />
            <circle cx="20" cy="20" r="2" fill="currentColor" className="text-brand/60" />
            <circle cx="80" cy="80" r="2" fill="currentColor" className="text-brand/60" />
          </svg>
          <span className="absolute text-[8px] font-mono font-semibold text-zinc-600 bg-card-bg px-1 border border-panel-border rounded select-none">
            29 Regions
          </span>
        </div>
      </div>
    </div>
  );
}
