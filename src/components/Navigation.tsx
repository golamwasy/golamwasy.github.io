"use client";
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
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
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 hidden lg:flex">
      {/* Vertical Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800" />
      
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "relative w-3 h-3 rounded-full border-2 border-zinc-900 bg-zinc-800 transition-all duration-300 hover:scale-125 group",
            activeSection === item.id && "bg-blue-500 scale-125 border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          )}
        >
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-mono uppercase tracking-widest text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};
