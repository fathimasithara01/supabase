"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import { DISK_OPTIONS } from "@/lib/constants/pricing";

export function DiskConfigurations() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-panel-border">
      <div className="mx-auto max-w-5xl">
        
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-white tracking-tight">
            Advanced disk configurations
          </h2>
          <p className="mt-3 text-zinc-400 text-sm max-w-xl mx-auto">
            Scale database storage up to 60 TB and 80,000 IOPS.
          </p>
        </div>

        {/* Disk configurations Table */}
        <div className="rounded-xl border border-card-border bg-panel-bg overflow-hidden">
          <div className="overflow-x-auto font-sans">
            <table className="w-full text-left text-xs">
              <thead className="bg-card-bg text-zinc-400 font-semibold border-b border-card-border">
                <tr>
                  <th className="p-4 w-1/4">Storage Option</th>
                  <th className="p-4 text-center">Max Size</th>
                  <th className="p-4">Size Cost</th>
                  <th className="p-4">IOPS Cost</th>
                  <th className="p-4">Throughput Cost</th>
                  <th className="p-4 text-center">Durability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-border text-zinc-300">
                {DISK_OPTIONS.map((opt, idx) => (
                  <tr key={idx} className="hover:bg-brand-glow transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{opt.name}</div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">
                        {opt.description}
                      </div>
                    </td>
                    <td className="p-4 text-center font-semibold text-white">{opt.maxSize}</td>
                    <td className="p-4">
                      <span className="text-white font-medium">{opt.sizeCost.main}</span>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{opt.sizeCost.note}</div>
                    </td>
                    <td className="p-4">
                      <span className="text-white font-medium">{opt.iopsCost.main}</span>
                      <div className="text-[10px] text-zinc-500 mt-0.5">{opt.iopsCost.note}</div>
                    </td>
                    <td className="p-4">
                      {opt.throughputCost.main ? (
                        <>
                          <span className="text-white font-medium">{opt.throughputCost.main}</span>
                          {opt.throughputCost.note && (
                            <div className="text-[10px] text-zinc-500 mt-0.5">{opt.throughputCost.note}</div>
                          )}
                        </>
                      ) : (
                        <span className="text-zinc-400 italic">{opt.throughputCost.italic}</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-brand font-semibold">{opt.durability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA link */}
        <div className="text-center mt-8">
          <a
            href="https://supabase.com/docs/guides/platform/database-size"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg border border-card-border bg-card-bg px-4 py-2 text-xs font-semibold text-zinc-400 hover:border-panel-border hover:text-white transition-colors cursor-pointer"
          >
            <span>Learn about advanced disk config</span>
            <AlertCircle className="h-3.5 w-3.5 text-brand" />
          </a>
        </div>

      </div>
    </section>
  );
}
