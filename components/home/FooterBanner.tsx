"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FooterBanner() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-panel-border/60 relative overflow-hidden">
      {/* Background grid overlays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl text-center flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
          Build in a weekend
          <span className="block text-brand mt-1">Scale to millions</span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="#dashboard">
            <Button className="h-11 px-8 bg-brand hover:bg-brand-hover text-black font-semibold text-xs rounded shadow-lg shadow-brand/10 hover:shadow-brand/20 transition-all cursor-pointer">
              Start your project
            </Button>
          </Link>
          <Link href="#request-demo">
            <Button
              variant="outline"
              className="h-11 px-8 border-card-border bg-card-bg/80 hover:bg-panel-bg text-zinc-300 hover:text-white font-medium text-xs rounded cursor-pointer"
            >
              Request a demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
