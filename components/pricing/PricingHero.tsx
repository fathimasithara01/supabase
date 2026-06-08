"use client";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
      {/* Decorative Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-5xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans text-white tracking-tight leading-tight">
          Predictable pricing,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400">
            designed to scale
          </span>
        </h1>
        <p className="mt-6 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Start building for free, collaborate with your team, then scale to millions of users.
        </p>
      </div>
    </section>
  );
}
