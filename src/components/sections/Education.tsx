import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, FileCode, MapPin, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePortfolio } from "@/lib/context";
import { Education as EducationType } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function EducationItem({ item }: { item: EducationType }) {
  return (
    <motion.div
      className="bg-zinc-950 border border-zinc-800 hover:border-blue-500/30 rounded-xl p-6 transition-all group"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex items-center gap-3 mb-4">
        <FileCode className="w-5 h-5 text-blue-500" />
        <h3 className="font-bold text-foreground group-hover:text-blue-400 transition-colors">{item.title}</h3>
        <span className="text-[10px] ml-auto border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-500 font-mono uppercase">Certified</span>
      </div>
      <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
        <span className="font-bold text-zinc-300">Thesis:</span> {item.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {item.tech.map(t => (
          <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-500 rounded border border-zinc-800">{t}</span>
        ))}
      </div>
      <div className="flex justify-between items-center text-[10px] font-mono pt-4 border-t border-zinc-900">
        <span className="flex items-center gap-1 font-bold text-foreground"><MapPin className="w-3 h-3 text-zinc-600" /> {item.school}</span>
      </div>
    </motion.div>
  );
}

export function Education() {
  const { education: EDUCATION } = usePortfolio();
  return (
    <Section id="education" fullHeight={false} className="py-12 md:py-20">
      <SectionHeading icon={GraduationCap} title="ls -la ~/education" prefix="$" />
      <div className="grid md:grid-cols-2 gap-6 content-start">
        {EDUCATION.map((item, i) => (
          <EducationItem key={i} item={item} />
        ))}
      </div>
    </Section>
  );
}
