"use client";

import { useEffect, useState } from "react";
import { ThemeProviderContext, useTheme } from "./theme-context"; // 👈 importa daqui, não de si mesmo!

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "app-theme" }) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const appliedTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;

    root.classList.add(appliedTheme);
    document.body.setAttribute("data-theme", appliedTheme);
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = { theme, setTheme };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
