"use client";

import { Box } from "lucide-react";

export function VectorCard() {
  return (
    <div
      id="vector"
      className="group relative overflow-hidden rounded-xl border border-panel-border bg-card-bg/40 p-6 flex flex-col justify-between hover:border-card-border transition-all duration-300 min-h-[380px]"
    >
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/5 blur-[80px] pointer-events-none" />

      {/* Info Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-brand/10 text-brand">
            <Box className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">Vector</h3>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
          Integrate your favorite ML-models to <span className="text-white font-semibold">store, index and search vector embeddings</span>.
        </p>
      </div>

      {/* Visual Rotating 3D Cube with floating coordinate particles */}
      <div className="relative flex-1 flex flex-col items-center justify-center min-h-[160px] select-none overflow-hidden">
        {/* 3D Container */}
        <div className="perspective-1000 w-24 h-24 flex items-center justify-center">
          <div className="transform-style-3d w-20 h-20 relative animate-cube-rotate">
            {/* Front Face */}
            <div className="absolute inset-0 border border-card-border/80 bg-brand/5 group-hover:border-brand/30 transition-colors duration-300 transform translate-z-[40px] flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            </div>
            {/* Back Face */}
            <div className="absolute inset-0 border border-card-border/80 bg-brand/5 group-hover:border-brand/30 transition-colors duration-300 transform rotate-y-180 translate-z-[40px]" />
            {/* Top Face */}
            <div className="absolute inset-0 border border-card-border/80 bg-brand/5 group-hover:border-brand/30 transition-colors duration-300 transform rotate-x-90 translate-z-[40px]" />
            {/* Bottom Face */}
            <div className="absolute inset-0 border border-card-border/80 bg-brand/5 group-hover:border-brand/30 transition-colors duration-300 transform rotate-x-270 translate-z-[40px]" />
            {/* Left Face */}
            <div className="absolute inset-0 border border-card-border/80 bg-brand/5 group-hover:border-brand/30 transition-colors duration-300 transform rotate-y-270 translate-z-[40px]" />
            {/* Right Face */}
            <div className="absolute inset-0 border border-card-border/80 bg-brand/5 group-hover:border-brand/30 transition-colors duration-300 transform rotate-y-90 translate-z-[40px]" />
          </div>
        </div>

        {/* Floating coordinates dots outside the cube */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 h-1 w-1 bg-brand rounded-full animate-ping opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 h-1.5 w-1.5 bg-brand rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/3 h-1 w-1 bg-brand/40 rounded-full" />
        </div>
      </div>

      {/* Integration Logos (OpenAI, Hugging Face) */}
      <div className="pt-4 border-t border-panel-border/60 flex items-center justify-center gap-4 text-zinc-500 text-[10px] select-none font-semibold">
        <span className="flex items-center gap-1 hover:text-white transition-colors">
          🤖 OpenAI
        </span>
        <span className="h-3 w-px bg-zinc-800" />
        <span className="flex items-center gap-1 hover:text-white transition-colors">
          🤗 Hugging Face
        </span>
      </div>
    </div>
  );
}
