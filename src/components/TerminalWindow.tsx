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
      "bg-black border border-zinc-800 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:border-blue-500/30",
      className
    )}>
      <div className="bg-zinc-900 px-4 py-2 flex items-center border-bottom border-zinc-800 relative">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          {title}
        </div>
      </div>
      <div className={cn("p-4 md:p-6 font-mono text-sm leading-relaxed", bodyClassName)}>
        {children}
      </div>
    </div>
  );
};
