"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Database, Key, FolderHeart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PRODUCT_NAV_ITEMS,
  DEVELOPER_NAV_ITEMS,
  SOLUTIONS_NAV_ITEMS,
  SIMPLE_NAV_LINKS,
  SOCIAL_LINKS
} from "@/lib/constants/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [stars] = useState("103.6k");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const IconMap: Record<string, React.ReactNode> = {
    database: <Database className="h-5 w-5 text-brand mt-0.5" />,
    key: <Key className="h-5 w-5 text-brand mt-0.5" />,
    folderHeart: <FolderHeart className="h-5 w-5 text-brand mt-0.5" />,
    cpu: <Cpu className="h-5 w-5 text-brand mt-0.5" />
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="navbar__logo">
            <svg className="h-6 w-6 text-brand" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.35 2.22a.75.75 0 0 0-1.16-.08L4.25 10.58a.75.75 0 0 0 .54 1.25h6.63v9.95a.75.75 0 0 0 1.16.08l7.94-8.44a.75.75 0 0 0-.54-1.25h-6.63V2.22Z" />
            </svg>
            <span className="navbar__logo-text">supabase</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__nav">
            {/* Product Dropdown */}
            <div className="navbar__dropdown">
              <button className="navbar__dropdown-trigger">
                Product <ChevronDown />
              </button>
              <div className="navbar__dropdown-menu w-80">
                <div className="grid gap-2">
                  {PRODUCT_NAV_ITEMS.map((item, idx) => (
                    <Link key={idx} href={item.link} className="navbar__dropdown-item">
                      {IconMap[item.iconName]}
                      <div>
                        <div className="navbar__dropdown-item-title">{item.name}</div>
                        <div className="navbar__dropdown-item-desc">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Simple Links */}
            {SIMPLE_NAV_LINKS.map((item, idx) => (
              <Link key={idx} href={item.link} className="navbar__dropdown-trigger">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section Actions */}
        <div className="navbar__actions">
          <Link href={SOCIAL_LINKS.github} target="_blank" className="navbar__gh-star">
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
               <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Star us</span>
            <span className="navbar__gh-count">{stars}</span>
          </Link>

          <Link href="#dashboard">
            <Button variant="outline" className="h-8 border-brand/30 bg-brand/10 text-xs text-brand hover:bg-brand/20">
              Dashboard
            </Button>
          </Link>

          <button className="navbar__user-btn">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar__mobile-toggle">
          <Button variant="outline" size="sm" className="h-8 border-brand/30 bg-brand/10 text-xs text-brand">
            Dashboard
          </Button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          <nav className="flex flex-col gap-4">
             {/* List mobile items here using similar button/link pattern */}
          </nav>
        </div>
      )}
    </header>
  );
}