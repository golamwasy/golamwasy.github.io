import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, FileCode, MapPin, Calendar } from "lucide-react";
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
  const cleanDesc = item.desc.replace(/^Thesis:\s*/i, "");

  return (
    <motion.div
      className="bg-zinc-950 border border-zinc-800 hover:border-blue-500/30 rounded-xl p-6 transition-all group flex flex-col justify-between"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
              <FileCode className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="font-bold text-foreground group-hover:text-blue-400 transition-colors leading-snug">
              {item.title}
            </h3>
          </div>
          <span className="text-[10px] shrink-0 border border-zinc-800 bg-zinc-900 px-2 py-0.5 rounded text-zinc-400 font-mono uppercase">
            {item.period}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed border-l-2 border-blue-500/30 pl-3.5">
          <span className="font-mono font-bold text-zinc-300">Thesis:</span> {cleanDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {item.tech.map(t => (
            <span key={t} className="text-[10px] font-mono px-2.5 py-0.5 bg-zinc-900 text-link rounded border border-zinc-800">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-mono pt-4 border-t border-zinc-900">
        <span className="flex items-center gap-1.5 font-semibold text-foreground">
          <MapPin className="w-3.5 h-3.5 text-blue-500" /> {item.school}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-zinc-500 uppercase">
          <Calendar className="w-3 h-3" /> Certified
        </span>
      </div>
    </motion.div>
  );
}

export function Education() {
  const { education: EDUCATION } = usePortfolio();
  return (
    <Section id="education" fullHeight={false}>
      <SectionHeading icon={GraduationCap} title="ls -la ~/education" prefix="$" />
      <div className="grid md:grid-cols-2 gap-6 content-start">
        {EDUCATION.map((item, i) => (
          <EducationItem key={i} item={item} />
        ))}
      </div>
    </Section>
  );
}
