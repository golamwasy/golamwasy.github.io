import React from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ChevronRight, FolderGit2, Send } from "lucide-react";
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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-24 lg:py-0">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 lg:pr-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 lg:-mt-8">
        <motion.div className="flex-1 space-y-6 w-full" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3 bg-zinc-900/70 border border-zinc-800 px-3.5 py-1.5 rounded-md">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">System.Kernel :: v2.5.0 Online</span>
            </div>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Hello, I&apos;m</h2>
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 tracking-tighter leading-[1.1] whitespace-nowrap">
              {PROFILE.name}
            </h1>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-blue-500 font-semibold">{`<${PROFILE.role} />`}</span> {PROFILE.roleLine}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo('projects')}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4" />
              ./view_projects.sh
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-blue-500/40 text-zinc-300 hover:text-foreground font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-blue-500" />
              ./contact.exe
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-1 justify-center lg:justify-start">
            <div className="w-full max-w-md glass-panel rounded-xl p-3 border-blue-500/20 flex items-center gap-4">
              <TerminalIcon className="w-5 h-5 text-blue-500 shrink-0" />
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex justify-between text-[9px] font-mono uppercase text-zinc-500">
                  <span>Initialize OS</span>
                  <span>ready</span>
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 animate-progress" />
                </div>
                <div className="text-[9px] font-mono text-zinc-500 truncate">
                  {">"} sudo boot_gui --user arn0b
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2 justify-center lg:justify-start">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Loaded_Modules:</span>
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {PROFILE.modules.map(mod => (
                <span key={mod} className="text-[10px] font-mono px-2.5 py-0.5 bg-zinc-900/80 border border-zinc-800 text-blue-400 rounded uppercase">{mod}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="flex-1 w-full max-w-lg lg:max-w-xl" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <TerminalWindow title="portfolio.tsx" className="terminal-shadow border-blue-500/20 w-full">
            <TypingCode />
          </TerminalWindow>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-500 cursor-pointer z-30 flex-col items-center gap-1.5"
        onClick={() => scrollTo('about')}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60">Scroll</span>
        <ChevronRight className="rotate-90 w-7 h-7 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      </motion.div>
    </section>
  );
}
