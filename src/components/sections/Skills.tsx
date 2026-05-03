import React from "react";
import { Cpu } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillSphere } from "@/components/SkillSphere";

export function Skills() {
  return (
    <Section id="skills" fullHeight={false} className="py-8 md:py-12">
      <SectionHeading icon={Cpu} title="skills.json" />
      <div className="relative">
        <SkillSphere />
      </div>
    </Section>
  );
}
