"use client";

import { AlertCircle } from "lucide-react";
import { DISK_OPTIONS } from "@/lib/constants/pricing";

export function DiskConfigurations() {
  return (
    <section className="disk-config">
      <div className="disk-config__inner">
        
        {/* Headings */}
        <div className="disk-config__header">
          <h2 className="disk-config__title">Advanced disk configurations</h2>
          <p className="disk-config__subtitle">
            Scale database storage up to 60 TB and 80,000 IOPS.
          </p>
        </div>

        {/* Disk configurations Table */}
        <div className="disk-table-card">
          <div className="overflow-x-auto">
            <table className="disk-table">
              <thead>
                <tr>
                  <th className="w-1/4">Storage Option</th>
                  <th className="text-center">Max Size</th>
                  <th>Size Cost</th>
                  <th>IOPS Cost</th>
                  <th>Throughput Cost</th>
                  <th className="text-center">Durability</th>
                </tr>
              </thead>
              <tbody>
                {DISK_OPTIONS.map((opt, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="disk-table__option-name">{opt.name}</div>
                      <div className="disk-table__option-desc">{opt.description}</div>
                    </td>
                    <td className="text-center font-semibold text-white">
                      {opt.maxSize}
                    </td>
                    <td>
                      <span className="disk-table__price-main">{opt.sizeCost.main}</span>
                      <div className="disk-table__price-note">{opt.sizeCost.note}</div>
                    </td>
                    <td>
                      <span className="disk-table__price-main">{opt.iopsCost.main}</span>
                      <div className="disk-table__price-note">{opt.iopsCost.note}</div>
                    </td>
                    <td>
                      {opt.throughputCost.main ? (
                        <>
                          <span className="disk-table__price-main">{opt.throughputCost.main}</span>
                          {opt.throughputCost.note && (
                            <div className="disk-table__price-note">{opt.throughputCost.note}</div>
                          )}
                        </>
                      ) : (
                        <span className="text-zinc-400 italic">{opt.throughputCost.italic}</span>
                      )}
                    </td>
                    <td className="text-center text-brand font-semibold">
                      {opt.durability}
                    </td>
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
            className="disk-cta"
          >
            <span>Learn about advanced disk config</span>
            <AlertCircle className="h-3.5 w-3.5 text-brand" />
          </a>
        </div>

      </div>
    </section>
  );
}