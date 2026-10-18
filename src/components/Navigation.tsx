"use client";
import React, { useState, useEffect } from 'react';
import { Monitor, User, Cpu, Briefcase, CodeXml, GraduationCap, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'hero', label: 'Home', Icon: Monitor },
  { id: 'about', label: 'About', Icon: User },
  { id: 'skills', label: 'Skills', Icon: Cpu },
  { id: 'experience', label: 'Experience', Icon: Briefcase },
  { id: 'projects', label: 'Projects', Icon: CodeXml },
  { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav aria-label="Section navigation" className="fixed right-6 xl:right-8 top-1/2 -translate-y-1/2 flex-col gap-7 z-50 hidden lg:flex">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-zinc-800/70" />
        
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            className={cn(
              "relative flex items-center justify-center transition-all duration-300 group",
              activeSection === item.id ? "w-10 h-10" : "w-10 h-4"
            )}
          >
            {activeSection === item.id ? (
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/15 border border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.35)] text-blue-500 animate-in zoom-in duration-300">
                 <item.Icon className="w-4 h-4" />
              </div>
            ) : (
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-blue-500/50 group-hover:border-blue-400 transition-colors" />
            )}
            
            <span className="absolute right-13 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-zinc-900/95 backdrop-blur-md px-3 py-1.5 rounded-md border border-zinc-800 shadow-lg">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav aria-label="Mobile navigation" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-2rem)] max-w-md">
        <div className="glass-panel rounded-2xl border-zinc-800/90 px-2 py-1.5 flex items-center justify-between shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              className={cn(
                "p-2.5 sm:p-3 rounded-xl transition-all duration-200 relative flex flex-col items-center",
                activeSection === item.id ? "text-blue-500 bg-blue-500/15 shadow-[inset_0_0_10px_rgba(59,130,246,0.15)]" : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              <item.Icon className={cn("w-4 h-4 sm:w-5 sm:h-5 transition-transform", activeSection === item.id && "scale-110")} />
              {activeSection === item.id && (
                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
              )}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};
