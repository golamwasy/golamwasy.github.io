import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: React.ReactNode;
  prefix?: string;
}

export function SectionHeading({ icon: Icon, title, prefix = "#" }: SectionHeadingProps) {
  return (
    <motion.div
      className="flex items-center gap-3 sm:gap-4 mb-10 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
      </div>
      <h2 className="font-mono text-lg sm:text-2xl lg:text-3xl font-bold text-foreground tracking-tight break-words">
        <span className="text-blue-500/70 select-none mr-1.5">{prefix}</span>
        {title}
      </h2>
      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent ml-4" />
    </motion.div>
  );
}
