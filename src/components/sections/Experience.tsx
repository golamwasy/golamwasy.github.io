import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Search, GitBranch } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/TerminalWindow";
import { EXPERIENCES, Experience as ExperienceType } from "@/lib/data";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function ExperienceItem({ exp, index }: { exp: ExperienceType; index: number }) {
  return (
    <motion.div
      className={cn(
        "flex w-full items-center gap-12",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
        "flex-col"
      )}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex-1 w-full">
        <TerminalWindow title={`${exp.hash} HEAD -> ${exp.branch}`} className="bg-[#0b0b0d] border-zinc-800">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.role} <span className="text-zinc-600 font-normal">@ {exp.company}</span></h3>
            </div>
          </div>
          <p className="text-sm text-zinc-400 mb-6 border-l-2 border-zinc-800 pl-4 py-2 italic leading-relaxed">
            {exp.desc}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {exp.tech.map(t => (
              <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 text-blue-400 rounded">{t}</span>
            ))}
          </div>
          <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase">
            <div className="flex gap-4">
              <span>11 files changed</span>
              <span className="text-green-500">+100 insertions</span>
              <span className="text-red-500">-10 deletions</span>
            </div>
          </div>
        </TerminalWindow>
      </div>

      <div className="relative z-10 hidden md:block">
        <div className="w-4 h-4 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_15px_#3b82f6]" />
        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 glass-panel px-3 py-1 rounded-full border-zinc-800 text-[10px] font-mono text-zinc-400 whitespace-nowrap flex items-center gap-2",
          index % 2 === 0 ? "left-8" : "right-8"
        )}>
          <Search className="w-3 h-3" />
          {exp.period}
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function Experience() {
  return (
    <Section id="experience" fullHeight={false} className="py-12 md:py-20">
      <SectionHeading icon={Briefcase} title="cat ~/career/experience.log" prefix="$" />

      <div className="relative space-y-8 md:space-y-6">
        <div className="exp-line hidden md:block" />
        {EXPERIENCES.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} index={i} />
        ))}
      </div>

      {/* Initial Commit Milestone */}
      <motion.div
        className="flex flex-col items-center pt-8 relative mt-8 md:mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 h-8 left-1/2 w-px bg-zinc-800 hidden md:block" />
        <div className="relative z-10 flex items-center justify-center gap-4 bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full terminal-shadow">
          <GitBranch className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-mono text-zinc-400 tracking-wider">Initial Commit (Hello World)</span>
        </div>
      </motion.div>
    </Section>
  );
}
