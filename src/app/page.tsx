"use client";
import React, { useState, useEffect } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { Navigation } from "@/components/Navigation";
import { StatusBadge } from "@/components/StatusBadge";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#18181b]" />;

  return (
    <main className="relative min-h-screen bg-[#18181b] selection:bg-blue-500/30 overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <StatusBadge />
      <CursorGlow />
      <Navigation />
      
      <div className="fixed inset-0 grid-background pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 pb-24 lg:pb-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
