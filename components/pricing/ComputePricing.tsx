"use client";

import { useState } from "react";
import { Plus, Trash2, Cpu, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  name: string;
  sizeKey: "micro" | "small" | "medium" | "large" | "xl";
}

const COMPUTE_SIZES = {
  micro: { name: "Micro", price: 10, cpu: "2-core ARM (Shared)", ram: "1 GB", direct: 60, pooler: 200, dedicated: false },
  small: { name: "Small", price: 15, cpu: "2-core ARM", ram: "2 GB", direct: 90, pooler: 400, dedicated: true },
  medium: { name: "Medium", price: 60, cpu: "2-core ARM", ram: "4 GB", direct: 120, pooler: 800, dedicated: true },
  large: { name: "Large", price: 120, cpu: "4-core ARM", ram: "8 GB", direct: 200, pooler: 1600, dedicated: true },
  xl: { name: "XL", price: 240, cpu: "8-core ARM", ram: "16 GB", direct: 400, pooler: 3200, dedicated: true },
};

export function ComputePricing() {
  const [basePlan, setBasePlan] = useState<"pro" | "team">("pro");
  const [projects, setProjects] = useState<Project[]>([
    { id: "1", name: "Project 1", sizeKey: "micro" },
  ]);
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  const planPrice = basePlan === "pro" ? 25 : 599;
  const creditAmount = basePlan === "pro" ? 10 : 10; // Pro/Team get $10/mo compute credits

  // Add project
  const addProject = () => {
    const nextId = (Math.max(...projects.map(p => parseInt(p.id)), 0) + 1).toString();
    setProjects([
      ...projects,
      { id: nextId, name: `Project ${nextId}`, sizeKey: "micro" },
    ]);
  };

  // Remove project
  const removeProject = (id: string) => {
    if (projects.length === 1) return;
    setProjects(projects.filter(p => p.id !== id));
  };

  // Change project size
  const changeProjectSize = (id: string, sizeKey: "micro" | "small" | "medium" | "large" | "xl") => {
    setProjects(projects.map(p => p.id === id ? { ...p, sizeKey } : p));
  };

  // Calculate compute total
  const computeTotal = projects.reduce((acc, p) => acc + COMPUTE_SIZES[p.sizeKey].price, 0);

  // Grand Total calculation
  const grandTotal = Math.max(0, planPrice + computeTotal - creditAmount);

  return (
    <section className="bg-[#030303] py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
      <div className="mx-auto max-w-5xl">
        
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-white tracking-tight">
            How compute pricing works
          </h2>
          <p className="mt-3 text-zinc-400 text-sm max-w-xl mx-auto">
            Choose a plan, add projects, and see your total cost.
          </p>
          <a
            href="https://supabase.com/docs/guides/platform/compute"
            target="_blank"
            className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>What is "compute"?</span>
            <HelpCircle className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Dynamic Calculator Widget */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start rounded-xl border border-zinc-800 bg-[#070708] p-6 sm:p-8">
          
          {/* Left Column: Plan selection & total estimate */}
          <div className="md:col-span-5 flex flex-col justify-between h-full gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                1. Choose your plan
              </div>
              
              {/* Pro / Team Toggle buttons */}
              <div className="flex gap-1 rounded-lg bg-zinc-950 p-1 border border-zinc-900 mb-6">
                <button
                  onClick={() => setBasePlan("pro")}
                  className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-all ${
                    basePlan === "pro"
                      ? "bg-zinc-900 text-white border border-zinc-800 shadow"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Pro
                </button>
                <button
                  onClick={() => setBasePlan("team")}
                  className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition-all ${
                    basePlan === "team"
                      ? "bg-zinc-900 text-white border border-zinc-800 shadow"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Team
                </button>
              </div>

              {/* Plan description */}
              <div className="mb-4">
                <div className="text-lg font-bold text-white font-sans">{basePlan === "pro" ? "Pro" : "Team"}</div>
                <div className="text-sm font-semibold text-emerald-400 mt-1">${planPrice}/month</div>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  {basePlan === "pro"
                    ? "Everything in the Free Plan, plus 100K MAU, 8 GB disk space, 250 GB bandwidth, 7-day backups, and email support."
                    : "SSO support, read-only dashboard access, 14-day backups, HIPAA support option, and priority response SLAs."}
                </p>
              </div>
            </div>

            {/* Total Cost Summary Card */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                Monthly estimate
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Plan subscription</span>
                  <span className="text-white font-semibold">${planPrice}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Compute</span>
                  <span className="text-white font-semibold">${computeTotal}.00</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-400">Compute Credits</span>
                  <span className="text-emerald-500 font-semibold">-${creditAmount}.00</span>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-sm font-bold text-white">Total</span>
                  <span className="text-xl font-bold text-emerald-400">${grandTotal}.00<span className="text-[10px] font-normal text-zinc-500">/mo</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project configuration */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              2. Configure compute for your projects
            </div>
            <p className="text-xs text-zinc-500">
              Add projects and adjust compute to estimate your monthly cost.
            </p>

            <div className="space-y-4 max-h-[350px] overflow-y-auto no-scrollbar pr-1">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="rounded-lg border border-zinc-850 bg-zinc-950 p-4 transition-all hover:border-zinc-800"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs font-semibold text-white">{project.name}</span>
                    </div>
                    {projects.length > 1 && (
                      <button
                        onClick={() => removeProject(project.id)}
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1 rounded hover:bg-zinc-900"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="text-[10px] text-zinc-500 font-bold uppercase block mb-1">
                        Compute Instance
                      </label>
                      <select
                        value={project.sizeKey}
                        onChange={(e) => changeProjectSize(project.id, e.target.value as any)}
                        className="w-full bg-[#0a0a0b] border border-zinc-850 rounded px-2 py-1 text-xs text-zinc-300 font-semibold outline-none focus:border-zinc-700"
                      >
                        {Object.entries(COMPUTE_SIZES).map(([key, size]) => (
                          <option key={key} value={key}>
                            {size.name} (${size.price}/mo)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-zinc-500 font-bold uppercase block">
                        Specifications
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-1">
                        {COMPUTE_SIZES[project.sizeKey].ram} RAM / {COMPUTE_SIZES[project.sizeKey].cpu}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Project button */}
            <Button
              onClick={addProject}
              variant="outline"
              className="mt-2 w-full h-10 border-dashed border-zinc-800 text-zinc-400 bg-transparent hover:border-zinc-700 hover:text-white cursor-pointer flex items-center justify-center gap-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Project</span>
            </Button>
          </div>

        </div>

        {/* Compute Instance Spec Table */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-white">
              Scale compute up to 64 cores and 256 GB RAM
            </h3>
            <a
              href="https://supabase.com/docs/guides/platform/compute"
              target="_blank"
              className="text-xs text-zinc-400 hover:text-emerald-400 font-medium transition-colors"
            >
              Learn about Compute add-ons
            </a>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#070708] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0b0b0c] text-zinc-400 font-semibold border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Compute Size</th>
                    <th className="p-4">Price USD</th>
                    <th className="p-4">CPU</th>
                    <th className="p-4">Dedicated</th>
                    <th className="p-4">Memory</th>
                    <th className="p-4">Connections Direct</th>
                    <th className="p-4">Connections Pooler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900 text-zinc-300">
                  <tr className="hover:bg-zinc-950/40 transition-colors">
                    <td className="p-4 font-bold text-white">Micro</td>
                    <td className="p-4">$10/mo</td>
                    <td className="p-4">2-core ARM</td>
                    <td className="p-4 text-zinc-500">Shared (First instance is free on paid plans)</td>
                    <td className="p-4">1 GB</td>
                    <td className="p-4">60</td>
                    <td className="p-4">200</td>
                  </tr>
                  <tr className="hover:bg-zinc-950/40 transition-colors">
                    <td className="p-4 font-bold text-white">Small</td>
                    <td className="p-4">$15/mo</td>
                    <td className="p-4">2-core ARM</td>
                    <td className="p-4 text-emerald-400">Yes</td>
                    <td className="p-4">2 GB</td>
                    <td className="p-4">90</td>
                    <td className="p-4">400</td>
                  </tr>

                  {/* Expanded Rows */}
                  {isTableExpanded && (
                    <>
                      <tr className="hover:bg-zinc-950/40 transition-colors">
                        <td className="p-4 font-bold text-white">Medium</td>
                        <td className="p-4">$60/mo</td>
                        <td className="p-4">2-core ARM</td>
                        <td className="p-4 text-emerald-400">Yes</td>
                        <td className="p-4">4 GB</td>
                        <td className="p-4">120</td>
                        <td className="p-4">800</td>
                      </tr>
                      <tr className="hover:bg-zinc-950/40 transition-colors">
                        <td className="p-4 font-bold text-white">Large</td>
                        <td className="p-4">$120/mo</td>
                        <td className="p-4">4-core ARM</td>
                        <td className="p-4 text-emerald-400">Yes</td>
                        <td className="p-4">8 GB</td>
                        <td className="p-4">200</td>
                        <td className="p-4">1600</td>
                      </tr>
                      <tr className="hover:bg-zinc-950/40 transition-colors">
                        <td className="p-4 font-bold text-white">XL</td>
                        <td className="p-4">$240/mo</td>
                        <td className="p-4">8-core ARM</td>
                        <td className="p-4 text-emerald-400">Yes</td>
                        <td className="p-4">16 GB</td>
                        <td className="p-4">400</td>
                        <td className="p-4">3200</td>
                      </tr>
                      <tr className="hover:bg-zinc-950/40 transition-colors">
                        <td className="p-4 font-bold text-white">2XL</td>
                        <td className="p-4">$480/mo</td>
                        <td className="p-4">16-core ARM</td>
                        <td className="p-4 text-emerald-400">Yes</td>
                        <td className="p-4">32 GB</td>
                        <td className="p-4">800</td>
                        <td className="p-4">6400</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>

            {/* Expand Pricing Breakdown button */}
            <div className="bg-[#0b0b0c] text-center border-t border-zinc-800">
              <button
                onClick={() => setIsTableExpanded(!isTableExpanded)}
                className="w-full py-3 text-xs text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-medium"
              >
                <span>{isTableExpanded ? "Collapse Pricing Breakdown" : "Expand Pricing Breakdown"}</span>
                {isTableExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
