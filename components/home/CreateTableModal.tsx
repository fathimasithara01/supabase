"use client";

import { useState } from "react";
import { Info, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreateTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, desc: string, rls: boolean) => void;
}

export function CreateTableModal({ isOpen, onClose, onSave }: CreateTableModalProps) {
  const [name, setName] = useState("users");
  const [desc, setDesc] = useState("");
  const [rlsEnabled, setRlsEnabled] = useState(true);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave(name, desc, rlsEnabled);
    setName("users");
    setDesc("");
    setRlsEnabled(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      {/* Modal Wrapper */}
      <div
        className="w-full max-w-xl rounded-lg border border-zinc-800 bg-[#0c0c0c] text-white shadow-2xl overflow-hidden animate-float-slow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 px-6 py-4">
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-white">Create a new table</h3>
            <span className="text-[10px] text-zinc-500 font-mono">under public schema</span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSave} className="p-6 space-y-5">
          {/* Table Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
              Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-zinc-800 bg-black/60 px-3 py-2 text-xs font-mono text-white placeholder-zinc-700 focus:border-emerald-500/50 focus:outline-none transition-colors"
              placeholder="table_name"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
              Description
              <span className="text-zinc-600 text-[10px] font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full rounded-md border border-zinc-800 bg-black/60 px-3 py-2 text-xs text-white placeholder-zinc-700 focus:border-emerald-500/50 focus:outline-none transition-colors"
              placeholder="Describe your table"
            />
          </div>

          {/* RLS Switch checkbox */}
          <div className="rounded-lg border border-zinc-900 bg-black/40 p-4 space-y-2.5">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rlsEnabled}
                onChange={(e) => setRlsEnabled(e.target.checked)}
                className="mt-1 h-3.5 w-3.5 accent-emerald-500 cursor-pointer"
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  Enable Row Level Security (RLS)
                  <span className="rounded bg-emerald-500/10 px-1 py-0.5 text-[8px] font-semibold text-emerald-400">
                    Recommended
                  </span>
                </span>
                <span className="text-[10px] text-zinc-500 mt-0.5 leading-relaxed">
                  Restrict access to your table by enabling RLS and writing Postgres policies.
                </span>
              </div>
            </label>

            {/* Info warning */}
            {rlsEnabled && (
              <div className="flex gap-2.5 rounded border border-yellow-500/10 bg-yellow-500/5 p-3 text-[10px] text-yellow-500/80 leading-normal">
                <Info className="h-4 w-4 shrink-0 text-yellow-500" />
                <div className="space-y-1">
                  <p>
                    <span className="font-semibold text-yellow-400">Policies are required to query data.</span> Without a policy, query operations on this table from the client libraries will return an empty array of results.
                  </p>
                  <a href="#" className="underline text-yellow-400 hover:text-white transition-colors block">
                    RLS Documentation
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-900/60">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-8 border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-xs text-zinc-400 hover:text-white cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-8 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs px-4 rounded shadow-md cursor-pointer"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
