import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
  prefix?: string;
}

export function SectionHeading({ icon: Icon, title, prefix = "#" }: SectionHeadingProps) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Icon className="w-6 h-6 text-blue-500" />
      <h2 className="font-mono text-2xl lg:text-3xl font-bold text-white">
        <span className="text-zinc-500">{prefix}</span> {title}
      </h2>
    </motion.div>
  );
}
