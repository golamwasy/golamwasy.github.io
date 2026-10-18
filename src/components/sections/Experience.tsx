import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GitBranch, GitCommit } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalWindow } from "@/components/TerminalWindow";
import { usePortfolio } from "@/lib/context";
import { Experience as ExperienceType } from "@/lib/data";
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
        "relative flex w-full items-start md:items-center gap-6 md:gap-12 pl-6 md:pl-0",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
        "flex-col"
      )}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Mobile Timeline Node */}
      <div className="absolute left-0 top-6 -translate-x-1/2 z-20 md:hidden">
        <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-blue-500 shadow-[0_0_12px_#3b82f6]" />
      </div>

      <div className="flex-1 w-full">
        <TerminalWindow title={`${exp.hash} HEAD -> ${exp.branch}`} className="bg-zinc-950 border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
            <div>
              <h3 className="text-base sm:text-xl font-bold text-foreground leading-snug">
                {exp.role}{" "}
                <span className="text-blue-400/90 font-normal block sm:inline">@ {exp.company}</span>
              </h3>
            </div>
            {/* Mobile / Tablet Period Badge */}
            <div className="inline-flex md:hidden items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 w-fit shrink-0">
              <Calendar className="w-3 h-3 text-blue-500" />
              {exp.period}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 mb-6 border-l-2 border-blue-500/30 pl-4 py-1 leading-relaxed">
            {exp.desc}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
            {exp.tech.map(t => (
              <span key={t} className="text-[10px] font-mono px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-link rounded">{t}</span>
            ))}
          </div>

          <div className="pt-3.5 border-t border-zinc-900 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-1"><GitCommit className="w-3 h-3 text-blue-500" /> {exp.tech.length} modules</span>
              <span className="text-success">+100 insertions</span>
              <span className="text-error">-10 deletions</span>
            </div>
          </div>
        </TerminalWindow>
      </div>

      {/* Desktop Timeline Center Node & Date Pill */}
      <div className="relative z-20 hidden md:block">
        <div className="w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 shadow-[0_0_15px_#3b82f6]" />
        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 glass-panel px-3.5 py-1.5 rounded-full border-zinc-800 text-[11px] font-mono text-zinc-300 whitespace-nowrap flex items-center gap-2",
          index % 2 === 0 ? "left-8" : "right-8"
        )}>
          <Calendar className="w-3 h-3 text-blue-500" />
          {exp.period}
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export function Experience() {
  const { experiences: EXPERIENCES } = usePortfolio();
  return (
    <Section id="experience" fullHeight={false}>
      <SectionHeading icon={Briefcase} title="cat ~/career/experience.log" prefix="$" />

      <div className="relative pt-4 md:pt-8 ml-2 md:ml-0">
        {/* Desktop Center Line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-12 w-[2px] hidden md:block z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--zinc-800) 100px, var(--zinc-800))'
          }}
        />
        {/* Mobile Left Line */}
        <div
          className="absolute left-0 -translate-x-1/2 top-0 bottom-12 w-[2px] md:hidden z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--zinc-800) 40px, var(--zinc-800))'
          }}
        />

        <div className="space-y-8 md:space-y-10 relative z-10">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} index={i} />
          ))}
        </div>

        {/* Initial Commit Milestone */}
        <motion.div
          className="flex flex-col items-start md:items-center pt-12 md:pt-16 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-full terminal-shadow">
            <GitBranch className="w-4 h-4 text-blue-500" />
            <span className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wider">Initial Commit (Hello World)</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
