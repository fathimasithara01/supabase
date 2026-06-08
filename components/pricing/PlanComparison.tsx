"use client";

import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp, Database, Shield, FolderKey, HelpCircle } from "lucide-react";

interface FeatureRow {
  name: string;
  tooltip?: string;
  free: string | boolean;
  pro: string | boolean;
  team: string | boolean;
  enterprise: string | boolean;
}

interface FeatureSection {
  title: string;
  icon: React.ReactNode;
  features: FeatureRow[];
}

export function PlanComparison() {
  const [isExpanded, setIsExpanded] = useState(true);

  const sections: FeatureSection[] = [
    {
      title: "Database",
      icon: <Database className="h-4 w-4 text-brand" />,
      features: [
        { name: "Dedicated Postgres Database", free: true, pro: true, team: true, enterprise: true },
        { name: "Unlimited API requests", free: true, pro: true, team: true, enterprise: true },
        { name: "Database size included", free: "500 MB shared", pro: "8 GB disk", team: "8 GB disk", enterprise: "Custom" },
        { name: "Automatic backups", free: false, pro: "7 days", team: "14 days", enterprise: "Custom" },
        { name: "Point in time recovery (PITR)", free: false, pro: "$100/mo add-on", team: "$100/mo add-on", enterprise: "Custom / SLA" },
        { name: "Pausing", free: "After 1 week inactivity", pro: "Never", team: "Never", enterprise: "Never" },
      ],
    },
    {
      title: "Auth",
      icon: <Shield className="h-4 w-4 text-brand" />,
      features: [
        { name: "Total Users", free: "Unlimited", pro: "Unlimited", team: "Unlimited", enterprise: "Unlimited" },
        { name: "MAUs included", free: "50,000", pro: "100,000", team: "100,000", enterprise: "Custom" },
        { name: "User data ownership", free: true, pro: true, team: true, enterprise: true },
        { name: "Social OAuth providers", free: true, pro: true, team: true, enterprise: true },
        { name: "Basic Multi-Factor Auth (MFA)", free: true, pro: true, team: true, enterprise: true },
        { name: "Advanced MFA (custom flows)", free: false, pro: true, team: true, enterprise: true },
      ],
    },
    {
      title: "Storage",
      icon: <FolderKey className="h-4 w-4 text-brand" />,
      features: [
        { name: "Storage included", free: "1 GB", pro: "100 GB", team: "100 GB", enterprise: "Custom" },
        { name: "Custom access controls", free: true, pro: true, team: true, enterprise: true },
        { name: "Max file upload size", free: "50 MB", pro: "500 MB", team: "500 MB", enterprise: "Custom" },
        { name: "Image Transformations", free: false, pro: true, team: true, enterprise: true },
      ],
    },
    {
      title: "Support",
      icon: <HelpCircle className="h-4 w-4 text-brand" />,
      features: [
        { name: "Community Support", free: true, pro: true, team: true, enterprise: true },
        { name: "Email Support", free: false, pro: true, team: true, enterprise: true },
        { name: "Priority email support SLA", free: false, pro: false, team: true, enterprise: true },
        { name: "Designated Support manager", free: false, pro: false, team: false, enterprise: true },
      ],
    },
  ];

  const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="h-4 w-4 text-brand mx-auto" />
      ) : (
        <X className="h-4 w-4 text-zinc-700 mx-auto" />
      );
    }
    return <span className="text-zinc-300 text-xs font-semibold">{val}</span>;
  };

  return (
    <section id="comparison-table" className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-panel-border scroll-mt-20">
      <div className="mx-auto max-w-5xl">
        
        {/* Header section */}
        <div className="flex justify-between items-center mb-8 border-b border-panel-border pb-4">
          <h2 className="text-2xl font-bold font-sans text-white tracking-tight">
            Complete Plan Comparison
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer font-semibold"
          >
            <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {/* Feature Matrix */}
        {isExpanded && (
          <div className="rounded-xl border border-card-border bg-panel-bg overflow-hidden font-sans">
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                
                {/* Table Head */}
                <thead>
                  <tr className="bg-card-bg text-zinc-400 font-semibold border-b border-card-border text-xs">
                    <th className="p-4 text-left w-2/5">Feature</th>
                    <th className="p-4 w-1/8">Free</th>
                    <th className="p-4 w-1/8">Pro</th>
                    <th className="p-4 w-1/8">Team</th>
                    <th className="p-4 w-1/8">Enterprise</th>
                  </tr>
                </thead>

                <tbody>
                  {sections.map((section, sIdx) => (
                    <tr key={sIdx} className="divide-y divide-panel-border">
                      <td colSpan={5} className="p-0">
                        <table className="w-full">
                          <tbody>
                            {/* Section Header Row */}
                            <tr className="bg-card-bg/80 border-b border-panel-border text-left">
                              <td colSpan={5} className="p-3 font-bold text-white text-xs flex items-center gap-2">
                                {section.icon}
                                <span className="uppercase tracking-wider">{section.title}</span>
                              </td>
                            </tr>
                            
                            {/* Feature Rows */}
                            {section.features.map((feat, fIdx) => (
                              <tr
                                key={fIdx}
                                className="border-b border-panel-border/60 hover:bg-brand-glow transition-colors text-xs text-left"
                              >
                                <td className="p-4 w-2/5 font-medium text-zinc-400">{feat.name}</td>
                                <td className="p-4 w-1/8 text-center">{renderCell(feat.free)}</td>
                                <td className="p-4 w-1/8 text-center">{renderCell(feat.pro)}</td>
                                <td className="p-4 w-1/8 text-center">{renderCell(feat.team)}</td>
                                <td className="p-4 w-1/8 text-center">{renderCell(feat.enterprise)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
