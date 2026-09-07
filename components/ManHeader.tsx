"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface ManHeaderProps {
  manualTitle?: string;
  manualSection?: string;
}

export default function ManHeader({
  manualTitle = "MOHIT(1)",
  manualSection = "USER COMMANDS",
}: ManHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "name", label: "NAME" },
    { id: "synopsis", label: "SYNOPSIS" },
    { id: "description", label: "DESCRIPTION" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
    { id: "see-also", label: "SEE ALSO" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-150 bg-bg/95 backdrop-blur-sm border-b border-border`}
    >
      <div className="max-w-page mx-auto px-6 md:px-12 py-3">
        <div className="flex items-center justify-between font-mono text-sm tracking-wide">
          {/* Left: Manual Page Title */}
          <div className="font-semibold text-text-primary flex items-center gap-2">
            <a href="#top" className="hover:text-accent transition-colors">
              {manualTitle}
            </a>
          </div>

          {/* Center: Category / Command section */}
          <div
            className={`hidden md:block text-xs uppercase tracking-widest text-text-secondary transition-opacity ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {manualSection}
          </div>

          {/* Right: Controls & Header Title */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Table of Contents Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-xs text-text-secondary hover:text-text-primary px-1.5 py-0.5 border border-border rounded-[4px]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? "[ close ]" : "[ menu ]"}
            </button>

            <span className="hidden sm:inline font-semibold text-text-primary">
              {manualTitle}
            </span>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile table of contents"
            className="lg:hidden mt-3 pt-3 border-t border-border flex flex-col gap-2 pb-2 text-xs"
          >
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-accent transition-colors py-1 px-1"
              >
                &gt; {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border text-text-secondary flex justify-between">
              <span className="text-[11px]">press Ctrl+K for search</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
