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
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-50 hidden lg:flex">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800/50" />
        
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "relative flex items-center justify-center transition-all duration-300 group",
              activeSection === item.id ? "w-10 h-10" : "w-10 h-3"
            )}
          >
            {activeSection === item.id ? (
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] text-blue-500 animate-in zoom-in duration-300">
                 <item.Icon className="w-5 h-5" />
              </div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-zinc-600 transition-colors" />
            )}
            
            <span className="absolute right-14 top-1/2 -translate-y-1/2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-zinc-800">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[calc(100%-3rem)] max-w-md">
        <div className="glass-panel rounded-2xl border-zinc-800 p-2 flex items-center justify-around shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "p-3 rounded-xl transition-all duration-300 relative",
                activeSection === item.id ? "text-blue-500 bg-blue-500/10 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              <item.Icon className={cn("w-5 h-5 transition-transform", activeSection === item.id && "scale-110")} />
              {activeSection === item.id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
              )}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
