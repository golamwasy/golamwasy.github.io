"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
   Mail,
   Phone,
   MapPin,
   Download,
   FolderOpen,
   Send,
   Terminal as TerminalIcon,
   Code2,
   ChevronRight,
   FileCode,
   FileJson,
   FileText,
   FileSearch,
   Play,
   Layout,
   Coffee,
   GitBranch,
   ExternalLink,
   Monitor,
   Search, Heart
} from "lucide-react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { SkillSphere } from "@/components/SkillSphere";
import { CursorGlow } from "@/components/CursorGlow";
import { Navigation } from "@/components/Navigation";
import { cn } from "@/lib/utils";

// SVGs for exact matches
const GithubLogo = ({ className }: { className?: string }) => (
   <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
   </svg>
);

const LinkedinLogo = ({ className }: { className?: string }) => (
   <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
   </svg>
);

const fadeInUp = {
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.6 }
};

export default function Home() {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   const scrollTo = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
   };

   if (!mounted) return <div className="min-h-screen bg-[#18181b]" />;

   return (
      <main className="relative min-h-screen bg-[#18181b] selection:bg-blue-500/30 overflow-x-hidden">
         <CursorGlow />
         <Navigation />
         <div className="fixed inset-0 grid-background pointer-events-none z-0" />

         {/* Main Container */}
         <div className="relative z-10">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">

               {/* 1. Hero Section */}
               <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                  <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-[-5vh]">
                     <motion.div className="flex-1 space-y-6" initial="initial" animate="animate" variants={fadeInUp}>
                        <div className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-4 py-1.5 rounded-md">
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                           <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">System.Kernel :: v2.5.0 Online</span>
                        </div>

                        <div className="space-y-1 text-center lg:text-left">
                           <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Hello, I'm</h2>
                           <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 tracking-tighter leading-none">
                              Golam Wasy
                           </h1>
                        </div>

                        <p className="text-lg text-zinc-400 font-mono leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                           <span className="text-blue-500">{"<Architect />"}</span> Engineering Beyond Boundaries. Specializing in distributed systems and high-performance applications.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                           {/* OS Init Progress */}
                           <div className="flex-1 min-w-[280px] glass-panel rounded-lg p-3 border-blue-500/20 flex items-center gap-4">
                              <TerminalIcon className="w-5 h-5 text-blue-500" />
                              <div className="flex-1 space-y-2">
                                 <div className="flex justify-between text-[9px] font-mono uppercase text-zinc-500">
                                    <span>Initialize OS</span>
                                    <span>loading...</span>
                                 </div>
                                 <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 animate-progress" />
                                 </div>
                                 <div className="text-[9px] font-mono text-zinc-600 truncate">
                                    {">"} sudo boot_gui --user arn0b
                                 </div>
                              </div>
                           </div>
                           <a href="https://github.com/golamwasy" target="_blank" className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg flex flex-col items-center justify-center gap-1 group hover:border-blue-500/50 transition-all">
                              <GithubLogo className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                              <span className="text-[9px] font-mono uppercase text-zinc-500">Github</span>
                           </a>
                        </div>
                     </motion.div>

                     <motion.div className="flex-1 w-full max-w-lg lg:max-w-xl" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <TerminalWindow title="portfolio.tsx" className="terminal-shadow border-blue-500/20 scale-90 lg:scale-100 origin-center lg:origin-right">
                           <div className="flex gap-4">
                              <div className="text-zinc-700 select-none text-right w-4 font-mono text-xs">
                                 1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10
                              </div>
                              <div className="flex-1 space-y-0.5 font-mono text-xs">
                                 <div className="text-zinc-600">{"// My workspace"}</div>
                                 <div><span className="text-purple-400">import</span> {"{"} <span className="text-blue-300">Developer</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">'./universe'</span>;</div>
                                 <br />
                                 <div><span className="text-purple-400">const</span> <span className="text-yellow-200">Portfolio</span> = () {"=>"} {"{"}</div>
                                 <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                                 <div className="pl-8 text-blue-300">{"<Developer"}</div>
                                 <div className="pl-12 text-zinc-400">name=<span className="text-green-400">"Golam Wasy"</span></div>
                                 <div className="pl-12 text-zinc-400">role=<span className="text-green-400">"Backend Architect"</span></div>
                                 <div className="pl-8 text-blue-300">{"/>"}</div>
                                 <div className="pl-4">);</div>
                                 <div>{"};"}</div>
                              </div>
                           </div>
                        </TerminalWindow>
                     </motion.div>
                  </div>

                  {/* Floating Scroll Indicator */}
                  <motion.div
                     animate={{ y: [0, 12, 0] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="absolute bottom-12 left-1/2 -translate-x-1/2 text-blue-500 cursor-pointer z-50 flex flex-col items-center gap-2"
                     onClick={() => scrollTo('about')}
                  >
                     <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">Scroll</span>
                     <ChevronRight className="rotate-90 w-10 h-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  </motion.div>
               </section>

               {/* 2. About Section */}
               <section id="about" className="min-h-screen flex flex-col justify-center py-24">
                  <h2 className="text-2xl font-mono mb-16 flex items-center gap-4 text-white">
                     <span className="text-blue-500">{">_"}</span> # About.system
                  </h2>
                  <div className="grid lg:grid-cols-[450px_1fr] gap-12 items-start">
                     <motion.div className="glass-panel border-blue-500/20 rounded-2xl p-8 space-y-8 terminal-shadow" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                        <div className="relative w-48 h-48 mx-auto">
                           <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-rotate-slow" />
                           <div className="absolute -inset-2 rounded-full border border-blue-500/10" />
                           <img src="/myself.jpg" className="w-full h-full rounded-full object-cover p-2 border border-zinc-800 transition-all duration-500" />
                           <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-4 border-black" />
                        </div>

                        <div className="space-y-4 font-mono text-[11px] uppercase tracking-wider">
                           <div className="flex justify-between border-b border-zinc-900 pb-2">
                              <span className="text-zinc-500">Operator</span>
                              <span className="text-blue-500 font-bold">Golam Wasy Arnob</span>
                           </div>
                           <div className="flex justify-between border-b border-zinc-900 pb-2">
                              <span className="text-zinc-500">Role</span>
                              <span className="text-blue-300">Software_Engineer</span>
                           </div>
                           <div className="flex justify-between border-b border-zinc-900 pb-2">
                              <span className="text-zinc-500">Location</span>
                              <span className="text-zinc-300">Helsinki, Finland</span>
                           </div>
                           <div className="flex justify-between">
                              <span className="text-zinc-500">Status</span>
                              <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded border border-green-500/20">Open</span>
                           </div>
                        </div>
                     </motion.div>

                     <div className="space-y-8">
                        <TerminalWindow title="user_profile.log" className="bg-[#0b0b0d]">
                           <div className="space-y-4 font-mono text-sm leading-relaxed">
                              <div className="flex gap-2 text-purple-400">
                                 <span>{"->"}</span>
                                 <span>whoami</span>
                              </div>
                              <p className="text-zinc-400 pl-6">
                                 Software Engineer specializing in end-to-end web applications and high-availability systems. Currently engineering scalable, production-grade solutions at Ritchie Bros.
                              </p>
                              <div className="flex gap-2 text-purple-400">
                                 <span>{"->"}</span>
                                 <span>cat mission.txt</span>
                              </div>
                              <p className="text-zinc-400 pl-6">
                                 Translating complex business requirements into robust technical solutions. Focused on <span className="text-white">Microservices</span>, <span className="text-white">Real-time Systems</span>, and <span className="text-white">AI Integration</span>.
                              </p>
                           </div>
                        </TerminalWindow>

                        <div className="grid grid-cols-3 gap-4">
                           {[
                              { label: 'Experience', val: '4+', unit: 'YRS', icon: Layout },
                              { label: 'Projects', val: '20+', unit: 'DEP', icon: Code2 },
                              { label: 'Caffeine', val: '∞', unit: 'ML', icon: Coffee },
                           ].map((stat) => (
                              <div key={stat.label} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl flex flex-col gap-2">
                                 <div className="flex items-center gap-2 text-blue-500">
                                    <stat.icon className="w-4 h-4" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{stat.label}</span>
                                 </div>
                                 <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-white">{stat.val}</span>
                                    <span className="text-[10px] font-mono text-zinc-600">{stat.unit}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               {/* 3. Skills Section */}
               <section id="skills" className="min-h-screen flex flex-col justify-center py-24 relative">
                  <h2 className="text-2xl font-mono mb-16 flex items-center gap-4 text-white">
                     <span className="text-blue-500">{">_"}</span> # Skills.json
                  </h2>
                  <div className="relative">
                     <SkillSphere />
                  </div>
               </section>

               {/* 4. Experience Section */}
               <section id="experience" className="min-h-screen flex flex-col justify-center py-24">
                  <h2 className="text-3xl font-mono mb-20 flex items-center gap-4 text-white">
                     <GitBranch className="text-blue-500 w-8 h-8" /> $ git log --stat --oneline
                  </h2>

                  <div className="relative space-y-24">
                     <div className="exp-line" />

                     {[
                        {
                           company: 'Ritchie Bros.',
                           role: 'Associate Software Engineer',
                           period: '2025-06 - Present',
                           hash: 'a1b2ca2',
                           branch: 'engineer',
                           desc: 'Leading development of scalable web applications and POS systems using Java and Spring Boot. Architecting cloud infrastructure on AWS.',
                           tech: ['React', 'Next.js', 'Spring Boot', 'AWS', 'Docker']
                        },
                        {
                           company: 'Wavelet Solutions',
                           role: 'Software Developer',
                           period: '2022-03 - 2023-02',
                           hash: 'c3d4eb1',
                           branch: 'developer',
                           desc: 'Developed mobile apps and web consoles using Ionic/Angular and Java Spring Boot. Managed PostgreSQL databases.',
                           tech: ['Angular', 'Ionic', 'Java', 'Spring Boot', 'Postgres']
                        }
                     ].map((exp, i) => (
                        <motion.div key={i} className={cn("flex w-full items-center gap-12", i % 2 === 0 ? "flex-row" : "flex-row-reverse")} initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                           <div className="flex-1">
                              <TerminalWindow title={`${exp.hash} HEAD -> ${exp.branch}`} className="bg-[#0b0b0d] border-zinc-800">
                                 <div className="flex justify-between items-start mb-6">
                                    <div>
                                       <h3 className="text-xl font-bold text-white">{exp.role} <span className="text-zinc-600 font-normal">@ {exp.company}</span></h3>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-600 uppercase">{exp.company}</span>
                                 </div>
                                 <p className="text-sm text-zinc-400 mb-6 border-l-2 border-zinc-800 pl-4 py-2 italic leading-relaxed">
                                    {exp.desc}
                                 </p>
                                 <div className="flex flex-wrap gap-2 mb-8">
                                    {exp.tech.map(t => (
                                       <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 text-blue-400 rounded">{t}</span>
                                    ))}
                                 </div>
                                 <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase">
                                    <div className="flex gap-4">
                                       <span>11 files changed</span>
                                       <span className="text-green-500">+100 insertions</span>
                                       <span className="text-red-500">-10 deletions</span>
                                    </div>
                                 </div>
                              </TerminalWindow>
                           </div>

                           <div className="relative z-10">
                              <div className="w-4 h-4 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_15px_#3b82f6]" />
                              <div className={cn("absolute top-1/2 -translate-y-1/2 glass-panel px-3 py-1 rounded-full border-zinc-800 text-[10px] font-mono text-zinc-400 whitespace-nowrap flex items-center gap-2", i % 2 === 0 ? "left-8" : "right-8")}>
                                 <Search className="w-3 h-3" />
                                 {exp.period}
                              </div>
                           </div>

                           <div className="flex-1" />
                        </motion.div>
                     ))}
                  </div>
               </section>

               {/* 5. Projects Section */}
               <section id="education" className="min-h-screen flex flex-col justify-center py-24">
                  <h2 className="text-2xl font-mono mb-16 flex items-center gap-4 text-white">
                     <FolderOpen className="text-blue-500 w-8 h-8" /> $ ls -la ~/education
                  </h2>

                  <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                     <div className="glass-panel border-zinc-800 rounded-xl overflow-hidden flex flex-col h-[600px] shadow-2xl">
                        <div className="bg-zinc-900/80 p-4 border-b border-zinc-800 flex items-center justify-between">
                           <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                              <Monitor className="w-3 h-3" /> Repositories
                           </div>
                           <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500">2</span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-2 space-y-2">
                           {[
                              { name: 'M.Sc. Computer Science', type: 'Public', lang: 'Data_Normalizer', date: '2025' },
                              { name: 'B.Sc. Computer Science', type: 'Public', lang: 'UTM_Software', date: '2022' },
                           ].map(repo => (
                              <div key={repo.name} className="p-3 rounded-lg border border-transparent hover:border-zinc-800 hover:bg-zinc-900/50 transition-all cursor-pointer group">
                                 <div className="flex justify-between items-start mb-1">
                                    <span className="text-sm font-bold text-zinc-300 group-hover:text-blue-400">{repo.name}</span>
                                    <span className="text-[9px] border border-zinc-800 px-1 rounded text-zinc-600 font-mono uppercase">{repo.type}</span>
                                 </div>
                                 <div className="flex gap-3 text-[10px] font-mono text-zinc-600">
                                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500" /> {repo.lang}</span>
                                    <span>{repo.date}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-6 content-start">
                        {[
                           {
                              title: "M.Sc. Computer Science",
                              school: "University of Helsinki",
                              period: "2023 - 2025",
                              desc: "Focusing on adaptive data normalization and anomaly detection for IoT sensors.",
                              tech: ["Data Normalization", "Anomaly Detection"]
                           },
                           {
                              title: "B.Sc. Computer Science",
                              school: "UTM Malaysia",
                              period: "2018 - 2022",
                              desc: "Studied core software engineering principles and data analytics.",
                              tech: ["Software Design", "Data Analytics"]
                           }
                        ].map((proj, i) => (
                           <motion.div key={i} className="glass-panel border-zinc-800 hover:border-blue-500/30 rounded-xl p-6 transition-all group" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                              <div className="flex items-center gap-3 mb-4">
                                 <FileCode className="w-5 h-5 text-blue-500" />
                                 <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                                 <span className="text-[10px] ml-auto border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-500 font-mono uppercase">Completed</span>
                              </div>
                              <p className="text-sm text-zinc-400 mb-6 leading-relaxed h-12 overflow-hidden">
                                 {proj.desc}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-6">
                                 {proj.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-500 rounded border border-zinc-800">{t}</span>
                                 ))}
                              </div>
                              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 pt-4 border-t border-zinc-900">
                                 <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {proj.school}</span>
                                 <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">Certificate <ExternalLink className="w-3 h-3" /></span>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* 6. Contact Section */}
               <section id="contact" className="pt-16 pb-8">
                  <h2 className="text-2xl font-mono mb-16 flex items-center gap-4 text-white">
                     <Send className="text-blue-500 w-8 h-8" /> ./contact.exe
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                     <TerminalWindow title="contact.json" className="bg-[#0b0b0d] border-zinc-800">
                        <div className="space-y-1 font-mono text-sm">
                           <div>{"{"}</div>
                           <div className="pl-4"><span className="text-red-400">"email"</span>: <span className="text-green-400">"golamwasy@gmail.com"</span>,</div>
                           <div className="pl-4"><span className="text-red-400">"phone"</span>: <span className="text-green-400">"+358 44 246 1728"</span>,</div>
                           <div className="pl-4"><span className="text-red-400">"linkedin"</span>: <span className="text-green-400">"linkedin.com/in/golamwasy"</span>,</div>
                           <div className="pl-4"><span className="text-red-400">"location"</span>: <span className="text-green-400">"Helsinki, Finland"</span></div>
                           <div>{"}"}</div>
                        </div>
                     </TerminalWindow>
                     <TerminalWindow title="send_message.sh" className="bg-[#0b0b0d] border-zinc-800">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                           <div className="space-y-1">
                              <label className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">_subject</label>
                              <input type="text" placeholder="Project Inquiry" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 focus:border-blue-500/50 outline-none text-xs font-mono text-zinc-300" />
                           </div>
                           <div className="space-y-1">
                              <label className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">_body</label>
                              <textarea placeholder="Write your message here..." className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 h-32 focus:border-blue-500/50 outline-none text-xs font-mono text-zinc-300 resize-none" />
                           </div>
                           <button className="w-full bg-blue-500/10 border border-blue-500/30 text-blue-500 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-mono text-xs flex items-center justify-center gap-2">
                              <Send className="w-4 h-4" /> sudo_send --message
                           </button>
                        </form>
                     </TerminalWindow>
                  </div>
               </section>

               <footer className="py-12 border-t border-zinc-900 text-center space-y-6">
                  <div className="flex items-center justify-center gap-4">
                     <div className="h-px w-12 bg-zinc-800" />
                     <TerminalIcon className="w-6 h-6 text-blue-500" />
                     <div className="h-px w-12 bg-zinc-800" />
                  </div>
                  <div className="space-y-4">
                     <div className="flex flex-col items-center gap-1">
                        <h4 className="font-bold text-zinc-300 text-lg">Golam Wasy | <span className="text-blue-500 font-mono text-sm">Software Engineer</span></h4>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center justify-center gap-2">
                           Built with <Heart className="w-3 h-3 text-red-500/60" /> using Next.js, TypeScript {"&"} Tailwind
                        </p>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
                           © 2026 <span className="text-zinc-300">Golam Wasy</span>. All rights reserved. // System.Exit(0)
                        </p>
                     </div>
                  </div>
               </footer>
            </div>
         </div>
      </main>
   );
}
