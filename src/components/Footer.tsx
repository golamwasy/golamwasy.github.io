import React from "react";
import { Terminal as TerminalIcon, Heart } from "lucide-react";
import { usePortfolio } from "@/lib/context";
import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  const { profile: PROFILE } = usePortfolio();
  return (
    <footer className={cn("py-12 border-t border-zinc-900 text-center space-y-6", className)}>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-12 bg-zinc-800" />
        <TerminalIcon className="w-6 h-6 text-blue-500" />
        <div className="h-px w-12 bg-zinc-800" />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-1">
          <h4 className="font-bold text-zinc-300 text-lg">
            {PROFILE.name} | <span className="text-blue-500 font-mono text-sm">{PROFILE.role}</span>
          </h4>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center justify-center gap-2">
            Built with <Heart className="w-3 h-3 text-red-500/60" /> using Next.js, TypeScript {"&"} Tailwind
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
            © 2026 <span className="text-zinc-300">{PROFILE.name}</span>. All rights reserved. // System.Exit(0)
          </p>
        </div>
      </div>
    </footer>
  );
}
