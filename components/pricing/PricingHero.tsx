"use client";

export function PricingHero() {
  return (
    <section className="pricing-hero">
      {/* Decorative Glows & Grid Backgrounds */}
      <div className="pricing-hero__bg-grid bg-grid-pattern" />
      <div className="pricing-hero__bg-radial bg-radial-glow" />
      <div className="pricing-hero__glow" />

      <div className="pricing-hero__inner">
        <h1 className="pricing-hero__title">
          Predictable pricing,{" "}
          <span className="pricing-cta__highlight">
            designed to scale
          </span>
        </h1>
        <p className="pricing-hero__subtitle">
          Start building for free, collaborate with your team, then scale to millions of users.
        </p>
      </div>
    </section>
  );
}