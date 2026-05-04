"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-[60] p-3 rounded-xl glass-panel opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 z-[60] p-3 rounded-xl glass-panel transition-all duration-500",
        "hover:scale-110 active:scale-95 group",
        "shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-blue-500/20"
      )}
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={cn(
            "w-6 h-6 text-amber-500 transition-all duration-700 absolute",
            theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
        {/* Moon Icon */}
        <Moon
          className={cn(
            "w-5 h-5 text-blue-400 transition-all duration-700 absolute",
            theme === "light" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
      </div>
      
      {/* Decorative Glow */}
      <div className={cn(
        "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500",
        theme === "dark" ? "bg-blue-500" : "bg-amber-500"
      )} />
    </button>
  );
};
