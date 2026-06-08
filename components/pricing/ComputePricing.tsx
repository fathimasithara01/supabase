"use client";

import { useState } from "react";
import { Plus, Trash2, Cpu, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPUTE_SIZES, BASE_PLANS } from "@/lib/constants/pricing";

interface Project {
  id: string;
  name: string;
  sizeKey: string;
}

export function ComputePricing() {
  const [basePlan, setBasePlan] = useState<"pro" | "team">("pro");
  const [projects, setProjects] = useState<Project[]>([
    { id: "1", name: "Project 1", sizeKey: "micro" },
  ]);
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  const plan = BASE_PLANS[basePlan];
  const computeTotal = projects.reduce((acc, p) => acc + (COMPUTE_SIZES[p.sizeKey]?.price || 0), 0);
  const grandTotal = Math.max(0, plan.price + computeTotal - plan.credits);

  const addProject = () => {
    const nextId = (Math.max(...projects.map(p => parseInt(p.id)), 0) + 1).toString();
    setProjects([...projects, { id: nextId, name: `Project ${nextId}`, sizeKey: "micro" }]);
  };

  const removeProject = (id: string) => {
    if (projects.length === 1) return;
    setProjects(projects.filter(p => p.id !== id));
  };

  const changeProjectSize = (id: string, sizeKey: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, sizeKey } : p));
  };

  return (
    <section className="compute-pricing">
      <div className="compute-pricing__inner">
        
        {/* Headings */}
        <div className="compute-pricing__header">
          <h2 className="compute-pricing__title">How compute pricing works</h2>
          <p className="compute-pricing__subtitle">
            Choose a plan, add projects, and see your total cost.
          </p>
          <a
            href="https://supabase.com/docs/guides/platform/compute"
            target="_blank"
            className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-brand hover:text-brand-hover transition-colors"
          >
            <span>What is "compute"?</span>
            <HelpCircle className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Dynamic Calculator Widget */}
        <div className="compute-calculator">
          
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col justify-between h-full gap-6">
            <div>
              <div className="compute-calculator__label">1. Choose your plan</div>
              <div className="compute-plan-toggle">
                <button
                  onClick={() => setBasePlan("pro")}
                  className={`compute-plan-toggle__btn ${basePlan === "pro" ? "compute-plan-toggle__btn--active" : ""}`}
                >
                  Pro
                </button>
                <button
                  onClick={() => setBasePlan("team")}
                  className={`compute-plan-toggle__btn ${basePlan === "team" ? "compute-plan-toggle__btn--active" : ""}`}
                >
                  Team
                </button>
              </div>

              <div className="mb-4">
                <div className="text-lg font-bold text-white font-sans">{plan.name}</div>
                <div className="text-sm font-semibold text-brand mt-1">${plan.price}/month</div>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{plan.description}</p>
              </div>
            </div>

            <div className="compute-summary">
              <div className="compute-calculator__label">Monthly estimate</div>
              <div className="space-y-2">
                <div className="compute-summary__row">
                  <span className="text-zinc-400">Plan subscription</span>
                  <span className="text-white font-semibold">${plan.price}.00</span>
                </div>
                <div className="compute-summary__row">
                  <span className="text-zinc-400">Total Compute</span>
                  <span className="text-white font-semibold">${computeTotal}.00</span>
                </div>
                <div className="compute-summary__row border-b border-zinc-900 pb-2">
                  <span className="text-zinc-400">Compute Credits</span>
                  <span className="text-brand font-semibold">-${plan.credits}.00</span>
                </div>
                <div className="compute-summary__row compute-summary__total">
                  <span className="text-sm font-bold text-white">Total</span>
                  <span className="text-xl font-bold text-brand">
                    ${grandTotal}.00<span className="text-[10px] font-normal text-zinc-500">/mo</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="compute-calculator__label">2. Configure compute for your projects</div>
            <p className="text-xs text-zinc-500">
              Add projects and adjust compute to estimate your monthly cost.
            </p>

            <div className="compute-projects-list no-scrollbar">
              {projects.map((project) => (
                <div key={project.id} className="compute-project-card">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-brand" />
                      <span className="text-xs font-semibold text-white">{project.name}</span>
                    </div>
                    {projects.length > 1 && (
                      <button
                        onClick={() => removeProject(project.id)}
                        className="text-zinc-500 hover:text-red-400 transition-colors p-1 rounded hover:bg-zinc-900 cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="compute-calculator__label block mb-1">Compute Instance</label>
                      <select
                        value={project.sizeKey}
                        onChange={(e) => changeProjectSize(project.id, e.target.value)}
                        className="compute-project-card__select"
                      >
                        {Object.entries(COMPUTE_SIZES).map(([key, size]) => (
                          <option key={key} value={key}>
                            {size.name} (${size.price}/mo)
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-right">
                      <div className="compute-calculator__label block">Specifications</div>
                      <div className="text-[11px] text-zinc-400 mt-1">
                        {COMPUTE_SIZES[project.sizeKey]?.ram} RAM / {COMPUTE_SIZES[project.sizeKey]?.cpu}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={addProject}
              variant="outline"
              className="mt-2 w-full h-10 border-dashed border-zinc-800 text-zinc-400 bg-transparent hover:border-zinc-700 hover:text-white cursor-pointer"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Project
            </Button>
          </div>
        </div>

        {/* Spec Table */}
        <div className="compute-table-container">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-white">Scale compute up to 64 cores</h3>
            <a href="#" className="text-xs text-zinc-400 hover:text-brand font-medium transition-colors">
              Learn about Compute add-ons
            </a>
          </div>

          <div className="compute-table-wrapper">
            <div className="overflow-x-auto">
              <table className="compute-table">
                <thead>
                  <tr>
                    <th>Compute Size</th>
                    <th>Price USD</th>
                    <th>CPU</th>
                    <th>Dedicated</th>
                    <th>Memory</th>
                    <th>Pooler</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(COMPUTE_SIZES).map(([key, size]) => {
                    const isHidden = ["medium", "large", "xl", "2xl"].includes(key);
                    if (isHidden && !isTableExpanded) return null;
                    return (
                      <tr key={key}>
                        <td className="font-bold text-white">{size.name}</td>
                        <td>${size.price}/mo</td>
                        <td>{size.cpu}</td>
                        <td>{size.dedicated ? <span className="text-brand">Yes</span> : "Shared"}</td>
                        <td>{size.ram}</td>
                        <td>{size.pooler}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setIsTableExpanded(!isTableExpanded)}
              className="compute-table__expand-btn"
            >
              {isTableExpanded ? "Collapse" : "Expand"} Pricing Breakdown
              {isTableExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}