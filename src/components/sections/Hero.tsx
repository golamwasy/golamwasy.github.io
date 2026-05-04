import React from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { TypingCode } from "@/components/TypingCode";
import { usePortfolio } from "@/lib/context";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Hero() {
  const { profile: PROFILE } = usePortfolio();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden snap-start snap-always">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-[-12vh]">
        <motion.div className="flex-1 space-y-6" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="absolute -top-12 -right-4 hidden lg:block opacity-20 font-mono text-[10px] text-zinc-400">
            {"<System.Init />"}
          </div>

          <div className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-4 py-1.5 rounded-md">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">System.Kernel :: v2.5.0 Online</span>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-foreground tracking-tight">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 tracking-tighter leading-[1.1] whitespace-nowrap">
              {PROFILE.name}
            </h1>
          </div>

          <p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-blue-500">{`<${PROFILE.role} />`}</span> {PROFILE.roleLine}
          </p>

          <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
            <div className="flex-1 min-w-[280px] glass-panel rounded-xl p-3 border-blue-500/20 flex items-center gap-4">
              <TerminalIcon className="w-5 h-5 text-blue-500" />
              <div className="flex-1 space-y-1.5">
                <div className="flex justify-between text-[8px] font-mono uppercase text-zinc-500">
                  <span>Initialize OS</span>
                  <span>loading...</span>
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 animate-progress" />
                </div>
                <div className="text-[8px] font-mono text-zinc-600 truncate">
                  {">"} sudo boot_gui --user arn0b
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 justify-center lg:justify-start">
            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Loaded_Modules:</span>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {PROFILE.modules.map(mod => (
                <span key={mod} className="text-[8px] font-mono px-2 py-0.5 bg-zinc-900/50 border border-zinc-800 text-blue-500/70 rounded uppercase">{mod}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="flex-1 w-full max-w-lg lg:max-w-xl" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <TerminalWindow title="portfolio.tsx" className="terminal-shadow border-blue-500/20 scale-90 lg:scale-95 origin-center lg:origin-right">
            <TypingCode />
          </TerminalWindow>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-blue-500 cursor-pointer z-50 flex flex-col items-center gap-2"
        onClick={() => scrollTo('about')}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">Scroll</span>
        <ChevronRight className="rotate-90 w-10 h-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      </motion.div>
    </section>
  );
}
