"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Sync theme on load
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.remove("dark");
      setTheme("light");
    } else {
      root.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <footer className="w-full border-t border-zinc-900 bg-[#030303] text-zinc-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand info */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.35 2.22a.75.75 0 0 0-1.16-.08L4.25 10.58a.75.75 0 0 0 .54 1.25h6.63v9.95a.75.75 0 0 0 1.16.08l7.94-8.44a.75.75 0 0 0-.54-1.25h-6.63V2.22Z" />
              </svg>
              <span className="font-bold text-white tracking-tight text-xl font-sans">
                supabase
              </span>
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
              Build in a weekend. Scale to millions. The open source Firebase alternative.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com/supabase/supabase" className="hover:text-white transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </Link>
              <Link href="https://twitter.com/supabase" className="hover:text-white transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://youtube.com/c/supabase" className="hover:text-white transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.53 3.545 12 3.545 12 3.545s-7.53 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.017 0 12 0 12s0 3.982.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.858.508 9.388.508 9.388.508s7.53 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.982 24 12 24 12s0-3.982-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/#database" className="hover:text-white transition-colors">Database</Link></li>
              <li><Link href="/#auth" className="hover:text-white transition-colors">Auth</Link></li>
              <li><Link href="/#storage" className="hover:text-white transition-colors">Storage</Link></li>
              <li><Link href="/#functions" className="hover:text-white transition-colors">Edge Functions</Link></li>
              <li><Link href="/#realtime" className="hover:text-white transition-colors">Realtime</Link></li>
              <li><Link href="/#vector" className="hover:text-white transition-colors">Vector</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">System Status</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Developers links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Developers</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Dev.to</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">YouTube</Link></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Open Source</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Brand Assets</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] text-zinc-600">
            © 2026 Supabase Inc. All rights reserved. Clone created for educational demonstration.
          </span>

          {/* Premium Theme Selector switch */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 font-medium">Theme</span>
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-6 w-11 items-center rounded-full border border-zinc-800 bg-zinc-950 transition-colors focus:outline-none hover:border-zinc-700 cursor-pointer"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-emerald-500 transition-transform duration-200 flex items-center justify-center ${
                  theme === "dark" ? "translate-x-6" : "translate-x-1"
                }`}
              >
                {theme === "dark" ? (
                  <Moon className="h-2.5 w-2.5 text-black stroke-[3px]" />
                ) : (
                  <Sun className="h-2.5 w-2.5 text-black stroke-[3px]" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
