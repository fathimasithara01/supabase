"use client";

import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp, Database, Shield, FolderKey, HelpCircle } from "lucide-react";

interface FeatureRow {
  name: string;
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
    return <span className="plan-matrix__cell-text">{val}</span>;
  };

  return (
    <section id="comparison-table" className="plan-comparison">
      <div className="plan-comparison__inner">
        
        <div className="plan-comparison__header">
          <h2 className="plan-comparison__title">Complete Plan Comparison</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="plan-matrix__expand-btn"
          >
            <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {isExpanded && (
          <div className="plan-matrix">
            <div className="overflow-x-auto">
              <table className="plan-matrix__table">
                <thead className="plan-matrix__thead">
                  <tr>
                    <th className="plan-matrix__th text-left">Feature</th>
                    <th className="plan-matrix__th">Free</th>
                    <th className="plan-matrix__th">Pro</th>
                    <th className="plan-matrix__th">Team</th>
                    <th className="plan-matrix__th">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section, sIdx) => (
                    <tr key={sIdx}>
                      <td colSpan={5} className="p-0">
                        <table className="w-full">
                          <tbody>
                            <tr className="plan-matrix__section-row">
                              <td colSpan={5} className="plan-matrix__section-title">
                                {section.icon}
                                <span>{section.title}</span>
                              </td>
                            </tr>
                            {section.features.map((feat, fIdx) => (
                              <tr key={fIdx} className="plan-matrix__feature-row">
                                <td className="plan-matrix__feature-name">{feat.name}</td>
                                <td className="plan-matrix__cell">{renderCell(feat.free)}</td>
                                <td className="plan-matrix__cell">{renderCell(feat.pro)}</td>
                                <td className="plan-matrix__cell">{renderCell(feat.team)}</td>
                                <td className="plan-matrix__cell">{renderCell(feat.enterprise)}</td>
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