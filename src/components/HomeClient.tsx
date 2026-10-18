"use client";

import React from "react";
import { PortfolioProvider } from "@/lib/context";
import { PortfolioData } from "@/lib/data";
import { CursorGlow } from "@/components/CursorGlow";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export function HomeClient({ data }: { data: PortfolioData }) {
  return (
    <PortfolioProvider data={data}>
      <main className="relative min-h-screen bg-background selection:bg-blue-500/30 overflow-x-hidden">
        <CursorGlow />
        <Navigation />

        <div className="fixed inset-0 grid-background pointer-events-none z-0" />

        {/* Main Container */}
        <div className="relative z-10 pb-24 lg:pb-0">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
    </PortfolioProvider>
  );
}
