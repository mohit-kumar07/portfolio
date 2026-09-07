"use client";

import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
}

const defaultSections: TocItem[] = [
  { id: "name", label: "NAME" },
  { id: "synopsis", label: "SYNOPSIS" },
  { id: "description", label: "DESCRIPTION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "education", label: "EDUCATION" },
  { id: "resume", label: "RESUME" },
  { id: "contact", label: "CONTACT" },
  { id: "see-also", label: "SEE ALSO" },
];

export default function TableOfContents({ sections = defaultSections }: { sections?: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("name");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0% -60% 0%",
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside
      aria-label="Table of contents"
      className="hidden lg:block w-48 shrink-0 sticky top-20 self-start text-xs font-mono select-none"
    >
      <div className="text-text-secondary uppercase tracking-wider mb-3 pb-1 border-b border-border text-[11px] font-bold">
        SECTIONS
      </div>
      <nav className="flex flex-col space-y-1.5">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors py-0.5 text-left flex items-center gap-1.5 ${
                isActive
                  ? "text-accent font-semibold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span
                className={`text-[10px] ${
                  isActive ? "text-accent" : "opacity-0"
                }`}
              >
                &gt;
              </span>
              <span>{label}</span>
            </a>
          );
        })}
      </nav>

      <div className="mt-8 pt-4 border-t border-border text-[11px] text-text-secondary">
        <div>
          <kbd className="px-1 py-0.5 border border-border rounded-[4px] bg-bg-raised text-[10px]">
            Ctrl+K
          </kbd>{" "}
          palette
        </div>
      </div>
    </aside>
  );
}
