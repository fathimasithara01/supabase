"use client";

import { useState } from "react";
import { Check, Plus, Database, Terminal, ShieldAlert, Settings, Home, Search, RefreshCw, Filter, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateTableModal } from "./CreateTableModal";

interface TableData {
  id: string;
  name: string;
  desc: string;
  rls: boolean;
  columns: string[];
  rows: Record<string, any>[];
}

export function DashboardSection() {
  const [activeTab, setActiveTab] = useState<"Table Editor" | "SQL Editor" | "RLS Policies">("Table Editor");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initial tables list
  const [tables, setTables] = useState<TableData[]>([
    {
      id: "1",
      name: "countries",
      desc: "List of countries worldwide",
      rls: true,
      columns: ["id", "name", "code", "continent_id"],
      rows: [
        { id: 1, name: "New Zealand", code: "NZ", continent_id: 1 },
        { id: 2, name: "Sweden", code: "SE", continent_id: 2 },
        { id: 3, name: "Japan", code: "JP", continent_id: 3 },
      ],
    },
    {
      id: "2",
      name: "cities",
      desc: "Cities inside countries",
      rls: true,
      columns: ["id", "name", "country_id"],
      rows: [
        { id: 101, name: "Auckland", country_id: 1 },
        { id: 102, name: "Stockholm", country_id: 2 },
        { id: 103, name: "Tokyo", country_id: 3 },
      ],
    },
  ]);

  const [activeTableId, setActiveTableId] = useState("1");
  const [sqlQuery, setSqlQuery] = useState("SELECT * FROM countries WHERE code = 'NZ';");
  const [sqlResult, setSqlResult] = useState<any[] | null>(null);

  // Save new table to local state
  const handleCreateTable = (name: string, desc: string, rlsEnabled: boolean) => {
    const newTable: TableData = {
      id: Date.now().toString(),
      name,
      desc: desc || "No description provided",
      rls: rlsEnabled,
      columns: ["id", "created_at", "name"],
      rows: [
        { id: 1, created_at: "Just now", name: "Sample item" }
      ],
    };
    setTables((prev) => [...prev, newTable]);
    setActiveTableId(newTable.id);
  };

  const handleRunSQL = () => {
    // Simple mock compiler
    if (sqlQuery.toLowerCase().includes("countries")) {
      setSqlResult(tables[0].rows.filter(r => r.code === "NZ" || !sqlQuery.includes("'NZ'")));
    } else if (sqlQuery.toLowerCase().includes("cities")) {
      setSqlResult(tables[1].rows);
    } else {
      setSqlResult([{ message: "Query compiled successfully. 0 rows returned." }]);
    }
  };

  const activeTable = tables.find((t) => t.id === activeTableId) || tables[0];

  return (
    <section id="dashboard" className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Stay productive and manage your app
            <span className="block text-zinc-500 font-medium">without leaving the dashboard</span>
          </h2>

          {/* Core Feature Checklist */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6">
            {[
              "Full CRUD",
              "Materialized Views",
              "Foreign Tables",
              "Partitioned Tables",
              "Easy as a spreadsheet",
            ].map((f) => (
              <span key={f} className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                <Check className="h-3.5 w-3.5 text-emerald-500 stroke-[3px]" />
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard Tabs Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-zinc-950 p-1 border border-zinc-900">
            {(["Table Editor", "SQL Editor", "RLS Policies"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Supabase Studio Panel Mockup */}
        <div className="rounded-xl border border-zinc-900 bg-[#0c0c0c] shadow-2xl overflow-hidden min-h-[480px] flex flex-col md:flex-row">
          {/* Studio Sidebar */}
          <div className="w-full md:w-56 border-r border-zinc-900/80 bg-[#070707] flex flex-row md:flex-col select-none shrink-0 overflow-auto">
            {/* Quick Icon strip (desktop only) */}
            <div className="hidden md:flex flex-col items-center gap-5 py-6 border-r border-zinc-900/40 w-12 shrink-0">
              <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500"><Database className="h-4 w-4" /></span>
              <span className="text-zinc-600 hover:text-zinc-400 cursor-pointer"><Terminal className="h-4 w-4" /></span>
              <span className="text-zinc-600 hover:text-zinc-400 cursor-pointer"><ShieldAlert className="h-4 w-4" /></span>
              <span className="text-zinc-600 hover:text-zinc-400 cursor-pointer"><Settings className="h-4 w-4" /></span>
            </div>

            {/* List sub-sidebar (schema and tables listing) */}
            <div className="flex-1 p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">public schema</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded p-1 text-emerald-400 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer"
                  title="Create Table"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Table listings (Table Editor specific) */}
              {activeTab === "Table Editor" && (
                <div className="flex flex-col gap-1">
                  {tables.map((table) => (
                    <button
                      key={table.id}
                      onClick={() => setActiveTableId(table.id)}
                      className={`flex items-center justify-between rounded px-2.5 py-1.5 text-xs text-left transition-colors font-mono cursor-pointer ${
                        activeTableId === table.id
                          ? "bg-zinc-900 text-white font-semibold"
                          : "text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300"
                      }`}
                    >
                      <span>{table.name}</span>
                      {table.rls && (
                        <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1 rounded scale-90">RLS</span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {activeTab === "SQL Editor" && (
                <div className="text-[10px] text-zinc-500 font-mono italic">
                  Run SQL scripts directly on Postgres database.
                </div>
              )}

              {activeTab === "RLS Policies" && (
                <div className="text-[10px] text-zinc-500 font-mono">
                  Configure access control variables.
                </div>
              )}
            </div>
          </div>

          {/* Main Dashboard Workspace */}
          <div className="flex-1 flex flex-col bg-[#0c0c0c] overflow-x-auto">
            {/* Table Editor Workspace */}
            {activeTab === "Table Editor" && (
              <div className="flex-1 flex flex-col h-full min-w-[500px]">
                {/* Workspace Header */}
                <div className="flex items-center justify-between border-b border-zinc-900/80 px-6 py-3 bg-[#0a0a0a]">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-bold text-white font-mono">{activeTable.name}</h4>
                    <span className="text-[10px] text-zinc-500">{activeTable.rows.length} rows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-950 px-2 py-1 text-[10px] font-semibold text-zinc-400 hover:text-white cursor-pointer">
                      <Filter className="h-3 w-3" />
                      Filter
                    </button>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-1.5 rounded bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-black hover:bg-emerald-400 cursor-pointer"
                    >
                      <Plus className="h-3 w-3" />
                      New Table
                    </button>
                  </div>
                </div>

                {/* Workspace Table Grid */}
                <div className="flex-1 p-6">
                  <div className="w-full overflow-hidden rounded-lg border border-zinc-900 bg-black/40">
                    <table className="w-full border-collapse text-left text-xs text-zinc-400 font-mono">
                      <thead className="bg-[#090909] text-[10px] text-zinc-500 border-b border-zinc-900 font-bold uppercase tracking-wider">
                        <tr>
                          {activeTable.columns.map((col) => (
                            <th key={col} className="px-4 py-2.5 border-r border-zinc-900 last:border-r-0">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-900">
                        {activeTable.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-zinc-900/30 transition-colors">
                            {activeTable.columns.map((col) => (
                              <td key={col} className="px-4 py-2 border-r border-zinc-900 last:border-r-0 text-zinc-300">
                                {String(row[col] ?? "")}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* SQL Editor Workspace */}
            {activeTab === "SQL Editor" && (
              <div className="flex-1 flex flex-col p-6 min-w-[500px] h-full justify-between gap-4">
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-900 pb-2">
                    <span>SQL Query Console</span>
                    <Code className="h-3.5 w-3.5" />
                  </div>
                  <textarea
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    className="w-full flex-1 min-h-[160px] rounded-lg border border-zinc-900 bg-black/80 p-4 font-mono text-xs text-emerald-400 focus:outline-none focus:border-emerald-500/40 resize-none"
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={handleRunSQL}
                      className="flex items-center gap-1.5 rounded bg-emerald-500 px-4 py-2 text-xs font-bold text-black hover:bg-emerald-400 cursor-pointer shadow-lg shadow-emerald-500/10"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Run SQL Query
                    </button>
                  </div>
                </div>

                {/* Query Result Grid Console */}
                {sqlResult && (
                  <div className="rounded-lg border border-zinc-900 bg-black/90 p-4 font-mono text-xs max-h-[160px] overflow-auto">
                    <div className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider mb-2">Result Panel</div>
                    <pre className="text-zinc-300 text-[10px]">
                      {JSON.stringify(sqlResult, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* RLS Policies Workspace */}
            {activeTab === "RLS Policies" && (
              <div className="flex-1 p-6 min-w-[500px]">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-900 pb-2 mb-4">
                  Row Level Security Policies
                </div>
                <div className="space-y-4">
                  {tables.map((table) => (
                    <div
                      key={table.id}
                      className="rounded-lg border border-zinc-900 bg-[#070707] p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white font-mono">{table.name}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[9px] font-semibold ${
                              table.rls ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                            }`}
                          >
                            {table.rls ? "RLS Enabled" : "RLS Disabled"}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1">{table.desc}</p>
                      </div>

                      <button className="rounded border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer">
                        Manage Policies
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Table Creation Dialog */}
      <CreateTableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleCreateTable}
      />
    </section>
  );
}
