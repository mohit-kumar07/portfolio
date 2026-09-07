"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";

interface PaletteItem {
  id: string;
  title: string;
  category: string;
  url: string;
  external?: boolean;
}

const defaultItems: PaletteItem[] = [
  { id: "sec-name", title: "NAME — Mohit Kumar", category: "Section", url: "/#name" },
  { id: "sec-synopsis", title: "SYNOPSIS — Core Technologies", category: "Section", url: "/#synopsis" },
  { id: "sec-description", title: "DESCRIPTION — Background & Approach", category: "Section", url: "/#description" },
  { id: "sec-experience", title: "EXPERIENCE — Capgemini Technical Trainee", category: "Section", url: "/#experience" },
  { id: "sec-projects", title: "PROJECTS — Portfolio Overview", category: "Section", url: "/#projects" },
  { id: "proj-cloudpulse", title: "CLOUDPULSE(1) — Linux System Monitoring", category: "Project", url: "/projects/cloudpulse" },
  { id: "proj-bhoomi", title: "BHOOMI_AND_BEYOND(1) — D2C E-Commerce Migration", category: "Project", url: "/projects/bhoomi-and-beyond" },
  { id: "sec-skills", title: "SKILLS — Stack & Tooling", category: "Section", url: "/#skills" },
  { id: "sec-education", title: "EDUCATION — JECRC University & RBSE", category: "Section", url: "/#education" },
  { id: "sec-certifications", title: "CERTIFICATIONS — ServiceNow Certified Application Developer", category: "Section", url: "/#certifications" },
  { id: "sec-resume", title: "RESUME — Open resume.pdf", category: "File", url: "/resume.pdf", external: true },
  { id: "sec-contact", title: "CONTACT — Email & LinkedIn", category: "Section", url: "/#contact" },
  { id: "ext-linkedin", title: "LINKEDIN(1) — mohit--k", category: "External", url: "https://www.linkedin.com/in/mohit--k/", external: true },
  { id: "ext-github", title: "GITHUB(1) — mohit-kumar07", category: "External", url: "https://github.com/mohit-kumar07", external: true },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return defaultItems;
    const q = query.toLowerCase();
    return defaultItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  // Keep selected index in range
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  // Keyboard shortcut listener: Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if user is typing in an input
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !isInput && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const selectItem = (item: PaletteItem) => {
    setIsOpen(false);
    if (item.external) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else if (item.url.startsWith("/#")) {
      router.push(item.url);
      const hash = item.url.replace("/#", "");
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(item.url);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    } else if (e.key === "Enter" && filteredItems.length > 0) {
      e.preventDefault();
      selectItem(filteredItems[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-[2px] transition-opacity duration-150"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Command Palette"
    >
      <div
        className="w-full max-w-lg bg-bg-raised border border-border rounded-[4px] shadow-2xl overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-border gap-2">
          <span className="text-text-secondary text-sm font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Type to jump to section or project..."
            className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-secondary focus:outline-none"
          />
          <kbd className="text-[10px] text-text-secondary border border-border px-1.5 py-0.5 rounded-[4px]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <ul
          ref={listRef}
          role="listbox"
          className="max-h-72 overflow-y-auto py-2 divide-y divide-border/20 text-xs"
        >
          {filteredItems.length === 0 ? (
            <li className="px-4 py-3 text-text-secondary">
              No matching sections found.
            </li>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <li
                  key={item.id}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => selectItem(item)}
                  className={`px-4 py-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-bg text-accent font-semibold"
                      : "text-text-primary hover:bg-bg"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span
                      className={`text-[10px] ${
                        isSelected ? "text-accent" : "text-transparent"
                      }`}
                    >
                      &gt;
                    </span>
                    <span className="truncate">{item.title}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-text-secondary shrink-0 ml-2">
                    {item.category}
                  </span>
                </li>
              );
            })
          )}
        </ul>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-border bg-bg/50 text-[10px] text-text-secondary flex justify-between items-center">
          <span>Navigation shortcut</span>
          <div className="flex gap-2">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
        </div>
      </div>
    </div>
  );
}
