import React from "react";

export function StatusBadge() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] pointer-events-none">
      <div className="glass-panel px-4 py-1.5 rounded-full border-zinc-800 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping absolute" />
          <div className="w-2 h-2 rounded-full bg-red-600 relative" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-300">
            Development in progress
          </span>
        </div>
      </div>
    </div>
  );
}
