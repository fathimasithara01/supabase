"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";

export function DiskConfigurations() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
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
        <div className="rounded-xl border border-zinc-800 bg-[#070708] overflow-hidden">
          <div className="overflow-x-auto font-sans">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0b0b0c] text-zinc-400 font-semibold border-b border-zinc-800">
                <tr>
                  <th className="p-4 w-1/4">Storage Option</th>
                  <th className="p-4 text-center">Max Size</th>
                  <th className="p-4">Size Cost</th>
                  <th className="p-4">IOPS Cost</th>
                  <th className="p-4">Throughput Cost</th>
                  <th className="p-4 text-center">Durability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                
                {/* General Purpose */}
                <tr className="hover:bg-zinc-950/40 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-white text-sm">General Purpose</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">
                      Balance between price and performance.
                    </div>
                  </td>
                  <td className="p-4 text-center font-semibold text-white">16 TB</td>
                  <td className="p-4">
                    <span className="text-white font-medium">8 GB included</span>
                    <div className="text-[10px] text-zinc-500 mt-0.5">then $0.125 per GB</div>
                  </td>
                  <td className="p-4">
                    <span className="text-white font-medium">3,000 IOPS included</span>
                    <div className="text-[10px] text-zinc-500 mt-0.5">then $0.036 per IOPS</div>
                  </td>
                  <td className="p-4">
                    <span className="text-white font-medium">125 MB/s included</span>
                    <div className="text-[10px] text-zinc-500 mt-0.5">then $0.062 per MB/s</div>
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-semibold">99.9%</td>
                </tr>

                {/* High Performance */}
                <tr className="hover:bg-zinc-950/40 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-white text-sm">High Performance</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">
                      For mission-critical applications.
                    </div>
                  </td>
                  <td className="p-4 text-center font-semibold text-white">60 TB</td>
                  <td className="p-4">
                    <span className="text-white font-medium">$0.125 per GB</span>
                    <div className="text-[10px] text-zinc-500 mt-0.5">from first GB</div>
                  </td>
                  <td className="p-4">
                    <span className="text-white font-medium">$0.103 per IOPS</span>
                    <div className="text-[10px] text-zinc-500 mt-0.5">from first IOPS</div>
                  </td>
                  <td className="p-4">
                    <span className="text-zinc-400 italic">Scales automatically with IOPS</span>
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-semibold">99.999%</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* CTA link */}
        <div className="text-center mt-8">
          <a
            href="https://supabase.com/docs/guides/platform/database-size"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors cursor-pointer"
          >
            <span>Learn about advanced disk config</span>
            <AlertCircle className="h-3.5 w-3.5 text-emerald-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
