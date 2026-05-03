import React from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Cpu, CodeXml, Coffee } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROFILE } from "@/lib/data";

const iconMap = {
  Cpu: Cpu,
  CodeXml: CodeXml,
  Coffee: Coffee
};

export function About() {
  return (
    <Section id="about">
      <SectionHeading icon={TerminalIcon} title="About.system" />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#1e1e1e] border border-blue-500/30 rounded-2xl p-6 lg:p-10 overflow-hidden">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-rotate-slow" />
              <div className="absolute -inset-2 rounded-full border border-blue-500/10" />
              <div className="absolute inset-4 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 shadow-inner">
                <img
                  src="/myself.jpg"
                  alt="System Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1e1e1e] animate-pulse" />
            </div>

            <div className="font-mono text-sm space-y-3">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-zinc-500">OPERATOR</span>
                <span className="text-blue-500 font-bold tracking-widest uppercase">{PROFILE.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-zinc-500">ROLE</span>
                <span className="text-blue-400 uppercase">{PROFILE.shortRole}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-zinc-500">LOCATION</span>
                <span className="text-white uppercase">{PROFILE.location}</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-zinc-500">STATUS</span>
                <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-xs border border-green-500/20">{PROFILE.status}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="bg-[#1e1e1e] rounded-lg border border-zinc-800 font-mono text-sm shadow-xl overflow-hidden group hover:border-blue-500/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
              <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-400 text-xs">user_profile.log</span>
            </div>
            <div className="p-6 text-zinc-300 leading-relaxed space-y-4">
              <p><span className="text-blue-400">➜</span> <span className="text-purple-400">whoami</span></p>
              <p className="pl-4 border-l-2 border-white/10">
                {PROFILE.bio.whoami}
              </p>
              <p><span className="text-blue-400">➜</span> <span className="text-purple-400">cat</span> mission.txt</p>
              <p className="pl-4 border-l-2 border-white/10 text-zinc-400">
                {PROFILE.bio.mission}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {PROFILE.stats.map((stat, i) => {
              const Icon = iconMap[stat.label === "EXPERIENCE" ? "Cpu" : stat.label === "PROJECTS" ? "CodeXml" : "Coffee"];
              return (
                <div key={i} className="bg-[#1e1e1e] p-4 rounded-lg border border-zinc-800 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-blue-500" />
                    <span className="text-[10px] text-zinc-500 font-mono">{stat.label}</span>
                  </div>
                  <div className="text-xl font-bold text-white font-mono group-hover:text-blue-500 transition-colors">{stat.value} <span className="text-[10px] text-zinc-600">{stat.unit}</span></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
