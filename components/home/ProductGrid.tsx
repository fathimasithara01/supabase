"use client";

import { PostgresCard } from "./PostgresCard";
import { AuthCard } from "./AuthCard";
import { FunctionsCard } from "./FunctionsCard";
import { StorageCard } from "./StorageCard";
import { RealtimeCard } from "./RealtimeCard";
import { VectorCard } from "./VectorCard";
import { ApiCard } from "./ApiCard";

export function ProductGrid() {
  return (
    <section className="relative bg-[#030303] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Column 1 & 2 Span - Postgres Database (Wide) */}
          <div className="md:col-span-2">
            <PostgresCard />
          </div>

          {/* Column 3 - Authentication */}
          <div className="md:col-span-1">
            <AuthCard />
          </div>

          {/* Column 4 - Edge Functions */}
          <div className="md:col-span-1">
            <FunctionsCard />
          </div>

          {/* Column 1 - Storage (sitting under Postgres) */}
          <div className="md:col-span-1">
            <StorageCard />
          </div>

          {/* Column 2 - Realtime (sitting under Postgres / next to Storage) */}
          <div className="md:col-span-1">
            <RealtimeCard />
          </div>

          {/* Column 3 - Vector (sitting under Auth) */}
          <div className="md:col-span-1">
            <VectorCard />
          </div>

          {/* Column 4 - Data APIs (sitting under Edge Functions) */}
          <div className="md:col-span-1">
            <ApiCard />
          </div>
        </div>

        {/* Section Pre-footer message */}
        <div className="text-center mt-12 border-t border-zinc-900/60 pt-10">
          <p className="text-base sm:text-lg text-zinc-400">
            <span className="text-white font-bold">Use one or all.</span> Best of breed products. Integrated as a platform.
          </p>
        </div>
      </div>
    </section>
  );
}
