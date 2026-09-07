"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "dark"; // Default is dark
      setTheme(initial);
      document.documentElement.dataset.theme = initial;
    }
  }, []);

  const switchTheme = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 text-xs text-text-secondary select-none">
        <span>[ dark ]</span>
        <span>[ light ]</span>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Color theme switcher"
      className="flex items-center gap-1 text-xs select-none"
    >
      <button
        type="button"
        onClick={() => switchTheme("dark")}
        className={`px-1 py-0.5 rounded-[4px] transition-colors focus-visible:ring-1 ${
          theme === "dark"
            ? "text-text-primary underline decoration-accent decoration-2 underline-offset-4 font-bold"
            : "text-text-secondary hover:text-text-primary"
        }`}
        aria-pressed={theme === "dark"}
      >
        [ dark ]
      </button>
      <span className="text-border" aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => switchTheme("light")}
        className={`px-1 py-0.5 rounded-[4px] transition-colors focus-visible:ring-1 ${
          theme === "light"
            ? "text-text-primary underline decoration-accent decoration-2 underline-offset-4 font-bold"
            : "text-text-secondary hover:text-text-primary"
        }`}
        aria-pressed={theme === "light"}
      >
        [ light ]
      </button>
    </div>
  );
}
