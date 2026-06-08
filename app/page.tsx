import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Frameworks } from "@/components/home/Frameworks";
import { Templates } from "@/components/home/Templates";
import { DashboardSection } from "@/components/home/DashboardSection";
import { Community } from "@/components/home/Community";
import { OpenSource } from "@/components/home/OpenSource";
import { FooterBanner } from "@/components/home/FooterBanner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section & Partner Marquee */}
        <Hero />

        {/* 7-Card Interactive Products Grid */}
        <ProductGrid />

        {/* Framework Integrations & Innovative Company Wall */}
        <Frameworks />

        {/* Templates and Starters Section */}
        <Templates />

        {/* Interactive Studio Dashboard & Table Creation dialog */}
        <DashboardSection />

        {/* Community Twitter Wall testimonials */}
        <Community />

        {/* Open Source Philosophy and GitHub Star Metric Chart */}
        <OpenSource />

        {/* Pre-footer Call to Action banner */}
        <FooterBanner />
      </main>

      {/* Footer link indexes and site-wide theme toggler */}
      <Footer />
    </div>
  );
}

