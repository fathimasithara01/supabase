"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Database, Key, Globe, FolderHeart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState("103.6k");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-900 bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              className="h-6 w-6 text-emerald-500 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.35 2.22a.75.75 0 0 0-1.16-.08L4.25 10.58a.75.75 0 0 0 .54 1.25h6.63v9.95a.75.75 0 0 0 1.16.08l7.94-8.44a.75.75 0 0 0-.54-1.25h-6.63V2.22Z" />
            </svg>
            <span className="font-bold text-white tracking-tight text-xl font-sans">
              supabase
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Product Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2 cursor-pointer">
                Product <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-1 w-80 origin-top-left rounded-lg border border-zinc-800 bg-[#0c0c0c] p-3 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="grid gap-2">
                  <Link href="/#database" className="flex items-start gap-3 rounded-md p-2 hover:bg-zinc-900 transition-colors">
                    <Database className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Database</div>
                      <div className="text-[10px] text-zinc-500">Fully managed Postgres Database.</div>
                    </div>
                  </Link>
                  <Link href="/#auth" className="flex items-start gap-3 rounded-md p-2 hover:bg-zinc-900 transition-colors">
                    <Key className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Authentication</div>
                      <div className="text-[10px] text-zinc-500">User management and RLS.</div>
                    </div>
                  </Link>
                  <Link href="/#storage" className="flex items-start gap-3 rounded-md p-2 hover:bg-zinc-900 transition-colors">
                    <FolderHeart className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Storage</div>
                      <div className="text-[10px] text-zinc-500">Store and serve large media assets.</div>
                    </div>
                  </Link>
                  <Link href="/#functions" className="flex items-start gap-3 rounded-md p-2 hover:bg-zinc-900 transition-colors">
                    <Cpu className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">Edge Functions</div>
                      <div className="text-[10px] text-zinc-500">Serverless custom TypeScript code.</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Developers Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2 cursor-pointer">
                Developers <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-1 w-64 origin-top-left rounded-lg border border-zinc-800 bg-[#0c0c0c] p-3 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="grid gap-1">
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">Documentation</Link>
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">Guides & Tutorials</Link>
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">GitHub Repository</Link>
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">System Status</Link>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2 cursor-pointer">
                Solutions <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-1 w-64 origin-top-left rounded-lg border border-zinc-800 bg-[#0c0c0c] p-3 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="grid gap-1">
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">AI & Vector Search</Link>
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">Mobile Development</Link>
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">Next.js Web Apps</Link>
                  <Link href="#" className="rounded-md p-2 text-xs font-semibold text-white hover:bg-zinc-900 block transition-colors">SaaS SaaS Applications</Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
              Docs
            </Link>
            <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">
              Blog
            </Link>
          </nav>
        </div>

        {/* Right Section Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* GitHub Star Count */}
          <Link
            href="https://github.com/supabase/supabase"
            target="_blank"
            className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Star us</span>
            <span className="h-4 w-px bg-zinc-800 my-0.5 mx-1" />
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
              {stars}
            </span>
          </Link>

          <Link href="#dashboard">
            <Button
              variant="outline"
              className="h-8 border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 cursor-pointer"
            >
              Dashboard
            </Button>
          </Link>

          {/* User Icon */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors cursor-pointer">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Link href="#dashboard">
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-emerald-500/30 bg-emerald-500/10 text-xs text-emerald-400"
            >
              Dashboard
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-900 bg-black/95 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col gap-4">
            <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Product</div>
            <Link href="/#database" onClick={() => setIsOpen(false)} className="text-white hover:text-emerald-400 pl-2 text-sm">Database</Link>
            <Link href="/#auth" onClick={() => setIsOpen(false)} className="text-white hover:text-emerald-400 pl-2 text-sm">Authentication</Link>
            <Link href="/#storage" onClick={() => setIsOpen(false)} className="text-white hover:text-emerald-400 pl-2 text-sm">Storage</Link>
            <Link href="/#functions" onClick={() => setIsOpen(false)} className="text-white hover:text-emerald-400 pl-2 text-sm">Edge Functions</Link>

            <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider pt-2">Resources</div>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-white hover:text-emerald-400 pl-2 text-sm">Pricing</Link>
            <Link href="#" className="text-white hover:text-emerald-400 pl-2 text-sm">Docs</Link>
            <Link href="#" className="text-white hover:text-emerald-400 pl-2 text-sm">Blog</Link>
          </nav>
          <div className="pt-4 border-t border-zinc-900">
            <Link
              href="https://github.com/supabase/supabase"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 p-2.5 text-sm font-medium text-zinc-300 hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Star us on GitHub ({stars})</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
