import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export const TerminalWindow = ({ title, children, className, bodyClassName }: TerminalWindowProps) => {
  return (
    <div className={cn(
      "bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:border-blue-500/30",
      className
    )}>
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800 relative">
        <div className="flex gap-1.5 shrink-0 z-10">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="absolute inset-x-16 text-center text-xs font-mono text-zinc-500 uppercase tracking-widest truncate">
          {title}
        </div>
        <div className="w-10 shrink-0" />
      </div>
      <div className={cn("p-4 md:p-6 font-mono text-sm leading-relaxed", bodyClassName)}>
        {children}
      </div>
    </div>
  );
};
