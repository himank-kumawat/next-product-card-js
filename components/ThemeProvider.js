"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextTheme = prefersDark ? "dark" : "light";
      setTheme(nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="w-full">
      <header className="flex items-center justify-between max-w-4xl mx-auto py-4">
        <h1 className="text-lg font-semibold tracking-tight">Product Card Demo</h1>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border px-3 py-1 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </header>
      <main className="flex-1 flex items-center justify-center">{children}</main>
    </div>
  );
}
