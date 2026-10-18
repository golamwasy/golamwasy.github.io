import React from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Cpu, CodeXml, Trophy } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePortfolio } from "@/lib/context";

const iconMap = {
  Cpu: Cpu,
  CodeXml: CodeXml,
  Trophy: Trophy
};

export function About() {
  const { profile: PROFILE } = usePortfolio();
  return (
    <Section id="about" fullHeight={false}>
      <SectionHeading icon={TerminalIcon} title="About.system" />

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <motion.div
          className="relative group lg:col-span-5 flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-15 group-hover:opacity-35 transition duration-500"></div>
          <div className="relative w-full bg-zinc-950 border border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-6 sm:mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-rotate-slow" />
              <div className="absolute -inset-2 rounded-full border border-blue-500/10" />
              <div className="absolute inset-3.5 rounded-full overflow-hidden bg-zinc-950 border border-zinc-800 shadow-inner">
                <img
                  src="/myself.jpg"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-3.5 right-3.5 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-950 animate-pulse" />
            </div>

            <div className="font-mono text-xs sm:text-sm space-y-3">
              <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2.5 gap-4">
                <span className="text-zinc-500 shrink-0">OPERATOR</span>
                <span className="text-blue-500 font-bold tracking-wider uppercase text-right">{PROFILE.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2.5 gap-4">
                <span className="text-zinc-500 shrink-0">ROLE</span>
                <span className="text-blue-400 uppercase text-right">{PROFILE.shortRole}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2.5 gap-4">
                <span className="text-zinc-500 shrink-0">LOCATION</span>
                <span className="text-foreground uppercase text-right">{PROFILE.location}</span>
              </div>
              <div className="flex justify-between items-center pt-0.5 gap-4">
                <span className="text-zinc-500 shrink-0">STATUS</span>
                <span className="bg-success/10 text-success px-2.5 py-0.5 rounded text-xs border border-success/20 font-semibold">{PROFILE.status}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <motion.div
            className="bg-zinc-950 rounded-xl border border-zinc-800 font-mono text-sm shadow-xl overflow-hidden group hover:border-blue-500/30 transition-colors flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-zinc-400 text-xs">user_profile.log</span>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">bash</span>
            </div>
            <div className="p-5 sm:p-6 text-zinc-300 leading-relaxed space-y-4 flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm"><span className="text-blue-400">➜</span> <span className="text-purple-400 font-semibold">whoami</span></p>
                <p className="pl-4 border-l-2 border-blue-500/30 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {PROFILE.bio.whoami}
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <p className="text-xs sm:text-sm"><span className="text-blue-400">➜</span> <span className="text-purple-400 font-semibold">cat</span> mission.txt</p>
                <p className="pl-4 border-l-2 border-zinc-800 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {PROFILE.bio.mission}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {PROFILE.stats.map((stat, i) => {
              const Icon = iconMap[stat.label === "EXPERIENCE" ? "Cpu" : stat.label === "PROJECTS" ? "CodeXml" : "Trophy"];
              return (
                <div key={i} className="bg-zinc-950 p-4 sm:p-5 rounded-xl border border-zinc-800 hover:border-blue-500/30 transition-all group flex sm:flex-col items-center sm:items-start justify-between sm:justify-start">
                  <div className="flex items-center gap-2 sm:mb-2">
                    <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-500">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono tracking-wider">{stat.label}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground font-mono group-hover:text-blue-500 transition-colors">
                    {stat.value} <span className="text-xs text-zinc-500 font-normal">{stat.unit}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
