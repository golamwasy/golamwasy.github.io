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
   Search, Heart, Briefcase, GraduationCap, User, Cpu, CodeXml
} from "lucide-react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { TypingCode } from "@/components/TypingCode";
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
      <main className="relative min-h-screen bg-[#18181b] selection:bg-blue-500/30 overflow-x-hidden snap-y snap-mandatory scroll-smooth">
         {/* Top Center Fancy Badge */}
         <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] pointer-events-none">
            <div className="glass-panel px-4 py-1.5 rounded-full border-zinc-800 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
               <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping absolute" />
                  <div className="w-2 h-2 rounded-full bg-red-600 relative" />
               </div>
               <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-300">
                     Development in progress
                  </span>
               </div>
            </div>
         </div>

         <CursorGlow />
         <Navigation />
         <div className="fixed inset-0 grid-background pointer-events-none z-0" />

         {/* Main Container */}
         <div className="relative z-10 pb-24 lg:pb-0">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-6 md:pb-12">

               {/* 1. Hero Section */}
               <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden snap-start snap-always">
                  <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-[-12vh]">
                     <motion.div className="flex-1 space-y-6" initial="initial" animate="animate" variants={fadeInUp}>
                        <div className="absolute -top-12 -right-4 hidden lg:block opacity-20 font-mono text-[10px] text-zinc-400">
                           {"<System.Init />"}
                        </div>

                        <div className="inline-flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-4 py-1.5 rounded-md">
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                           <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">System.Kernel :: v2.5.0 Online</span>
                        </div>

                        <div className="space-y-2 text-center lg:text-left">
                           <h2 className="text-2xl lg:text-5xl font-bold text-white tracking-tight">Hello, I'm</h2>
                           <h1 className="text-5xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 tracking-tighter leading-none">
                              Golam Wasy
                           </h1>
                        </div>

                        <p className="text-lg text-zinc-400 font-mono leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                           <span className="text-blue-500">{"<Full Stack Engineer />"}</span> Engineering Beyond Boundaries. Specializing in scalable backend architectures and distributed systems.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                           {/* OS Init Progress */}
                           <div className="flex-1 min-w-[280px] glass-panel rounded-xl p-3 border-blue-500/20 flex items-center gap-4">
                              <TerminalIcon className="w-5 h-5 text-blue-500" />
                              <div className="flex-1 space-y-1.5">
                                 <div className="flex justify-between text-[8px] font-mono uppercase text-zinc-500">
                                    <span>Initialize OS</span>
                                    <span>loading...</span>
                                 </div>
                                 <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 animate-progress" />
                                 </div>
                                 <div className="text-[8px] font-mono text-zinc-600 truncate">
                                    {">"} sudo boot_gui --user arn0b
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                           <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Loaded_Modules:</span>
                           {['React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Spring'].map(mod => (
                              <span key={mod} className="text-[8px] font-mono px-2 py-0.5 bg-zinc-900/50 border border-zinc-800 text-blue-500/70 rounded uppercase">{mod}</span>
                           ))}
                        </div>
                     </motion.div>

                     <motion.div className="flex-1 w-full max-w-lg lg:max-w-xl" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <TerminalWindow title="portfolio.tsx" className="terminal-shadow border-blue-500/20 scale-90 lg:scale-95 origin-center lg:origin-right">
                           <TypingCode />
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
               <section id="about" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative snap-start snap-always">
                  <div className="max-w-6xl mx-auto w-full">
                     <motion.div
                        className="flex items-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                     >
                        <TerminalIcon className="w-6 h-6 text-blue-500" />
                        <h2 className="font-mono text-2xl lg:text-3xl font-bold">
                           <span className="text-zinc-500">#</span> About.system
                        </h2>
                     </motion.div>

                     <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                           className="relative group"
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                        >
                           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                           <div className="relative bg-[#1e1e1e] border border-blue-500/30 rounded-2xl p-6 lg:p-10 overflow-hidden">
                              <div className="relative w-48 h-48 mx-auto mb-8">
                                 <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-rotate-slow" />
                                 <div className="absolute -inset-2 rounded-full border border-blue-500/10" />
                                 <div className="absolute inset-4 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 shadow-inner">
                                    <img
                                       src="/myself.jpg"
                                       alt="System Avatar"
                                       className="w-full h-full object-cover"
                                    />
                                 </div>
                                 <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1e1e1e] animate-pulse" />
                              </div>

                              <div className="font-mono text-sm space-y-3">
                                 <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-zinc-500">OPERATOR</span>
                                    <span className="text-blue-500 font-bold tracking-widest uppercase">Golam Wasy</span>
                                 </div>
                                 <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-zinc-500">ROLE</span>
                                    <span className="text-blue-400 uppercase">Full_Stack_Engineer</span>
                                 </div>
                                 <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-zinc-500">LOCATION</span>
                                    <span className="text-white uppercase">Helsinki, Finland</span>
                                 </div>
                                 <div className="flex justify-between items-center pb-2">
                                    <span className="text-zinc-500">STATUS</span>
                                    <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded text-xs border border-green-500/20">ACTIVE</span>
                                 </div>
                              </div>
                           </div>
                        </motion.div>

                        <div className="space-y-8">
                           <motion.div
                              className="bg-[#1e1e1e] rounded-lg border border-zinc-800 font-mono text-sm shadow-xl overflow-hidden group hover:border-blue-500/30 transition-colors"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                           >
                              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
                                 <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
                                 <span className="text-zinc-400 text-xs">user_profile.log</span>
                              </div>
                              <div className="p-6 text-zinc-300 leading-relaxed space-y-4">
                                 <p><span className="text-blue-400">➜</span> <span className="text-purple-400">whoami</span></p>
                                 <p className="pl-4 border-l-2 border-white/10">
                                    Software Engineer with a mix of deep-dive research and hands-on building. From analyzing telecom data at the University of Helsinki to architecting enterprise-grade APIs, I focus on building robust features and modernizing high-availability systems with a focus on customer needs.
                                 </p>
                                 <p><span className="text-blue-400">➜</span> <span className="text-purple-400">cat</span> mission.txt</p>
                                 <p className="pl-4 border-l-2 border-white/10 text-zinc-400">
                                    Translating complex business requirements into robust technical solutions. Experienced in <span className="text-white">AWS</span>, <span className="text-white">Docker</span>, <span className="text-white">Kubernetes</span>, and full-stack development using <span className="text-white">Spring Boot</span> and <span className="text-white">React/Angular</span>.
                                 </p>
                              </div>
                           </motion.div>

                           <motion.div
                              className="grid grid-cols-3 gap-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 }}
                           >
                              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-zinc-800 hover:border-blue-500/30 transition-all group">
                                 <div className="flex items-center gap-2 mb-2">
                                    <Cpu className="w-4 h-4 text-blue-500" />
                                    <span className="text-[10px] text-zinc-500 font-mono">EXPERIENCE</span>
                                 </div>
                                 <div className="text-xl font-bold text-white font-mono group-hover:text-blue-500 transition-colors">4+ <span className="text-[10px] text-zinc-600">YRS</span></div>
                              </div>
                              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-zinc-800 hover:border-blue-500/30 transition-all group">
                                 <div className="flex items-center gap-2 mb-2">
                                    <CodeXml className="w-4 h-4 text-blue-400" />
                                    <span className="text-[10px] text-zinc-500 font-mono">PROJECTS</span>
                                 </div>
                                 <div className="text-xl font-bold text-white font-mono group-hover:text-blue-400 transition-colors">15+ <span className="text-[10px] text-zinc-600">PRJ</span></div>
                              </div>
                              <div className="bg-[#1e1e1e] p-4 rounded-lg border border-zinc-800 hover:border-blue-500/30 transition-all group">
                                 <div className="flex items-center gap-2 mb-2">
                                    <Coffee className="w-4 h-4 text-blue-500" />
                                    <span className="text-[10px] text-zinc-500 font-mono">HACKATHONS</span>
                                 </div>
                                 <div className="text-xl font-bold text-white font-mono group-hover:text-blue-500 transition-colors">1 <span className="text-[10px] text-zinc-600">WIN</span></div>
                              </div>
                           </motion.div>
                        </div>
                     </div>
                  </div>
               </section>

               {/* 3. Skills Section */}
               <section id="skills" className="min-h-fit flex flex-col justify-center py-8 md:py-12 relative snap-start snap-always">
                  <h2 className="text-2xl font-mono mb-8 flex items-center gap-4 text-white">
                     <Cpu className="text-blue-500 w-8 h-8" /> # skills.json
                  </h2>
                  <div className="relative">
                     <SkillSphere />
                  </div>
               </section>

               {/* 4. Experience Section */}
               <section id="experience" className="min-h-fit flex flex-col justify-center py-12 md:py-20 snap-start snap-always">
                  <h2 className="text-3xl font-mono mb-12 flex items-center gap-4 text-white">
                     <Briefcase className="text-blue-500 w-8 h-8" /> $ cat ~/career/experience.log
                  </h2>

                  <div className="relative space-y-8 md:space-y-6">
                     <div className="exp-line hidden md:block" />

                     {[
                        {
                           company: 'Ritchie Bros.',
                           role: 'Associate Software Engineer',
                           period: '2025-06 - Present',
                           hash: 'rb_0625',
                           branch: 'payments',
                           desc: 'Architecting backend systems and features for a digital payments platform. Migrating legacy internal tools to React, handling multi-payment workflows, and resolving security vulnerabilities.',
                           tech: ['Java', 'Spring Boot', 'React', 'Snyk', 'CircleCI', 'LaunchDarkly']
                        },
                        {
                           company: 'University of Helsinki',
                           role: 'Research Assistant (Thesis)',
                           period: '2025-01 - 2025-04',
                           hash: 'uh_0125',
                           branch: 'thesis',
                           desc: 'Focused on adaptive data normalization for telecommunications and IoT datasets to improve anomaly detection performance.',
                           tech: ['Python', 'IoT', 'Anomaly Detection', 'Data Modeling']
                        },
                        {
                           company: 'University of Helsinki & Nokia Bell Labs',
                           role: 'Research Assistant (Intern)',
                           period: '2024-05 - 2024-08',
                           hash: 'nokia_0524',
                           branch: 'intern',
                           desc: 'Collaborated on data efficiency techniques for mobile networks research, evaluating normalization methods for 6G research.',
                           tech: ['Data Efficiency', 'Mobile Networks', 'Research']
                        },
                        {
                           company: 'Wavelet Solutions Sdn. Bhd.',
                           role: 'Software Developer (Freelance)',
                           period: '2022-03 - 2023-02',
                           hash: 'wav_0322',
                           branch: 'freelance',
                           desc: 'Developed mobile apps and web consoles using Ionic/Angular. Built RESTful APIs and managed PostgreSQL databases on AWS.',
                           tech: ['Angular', 'Ionic', 'Java', 'Spring Boot', 'AWS']
                        },
                        {
                           company: 'BigLedger Sdn. Bhd.',
                           role: 'Software Developer (Intern)',
                           period: '2021-08 - 2022-02',
                           hash: 'big_0821',
                           branch: 'backend',
                           desc: 'Specialized in Java Spring Boot for backend development and database migration scripts. Deployed applications on AWS.',
                           tech: ['Java', 'Spring Boot', 'Database Migration', 'AWS', 'Git']
                        }
                     ].map((exp, i) => (
                        <motion.div key={i} className={cn("flex w-full items-center gap-12", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", "flex-col")} initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                           <div className="flex-1 w-full">
                              <TerminalWindow title={`${exp.hash} HEAD -> ${exp.branch}`} className="bg-[#0b0b0d] border-zinc-800">
                                 <div className="flex justify-between items-start mb-6">
                                    <div>
                                       <h3 className="text-xl font-bold text-white">{exp.role} <span className="text-zinc-600 font-normal">@ {exp.company}</span></h3>
                                    </div>
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

                           <div className="relative z-10 hidden md:block">
                              <div className="w-4 h-4 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_15px_#3b82f6]" />
                              <div className={cn("absolute top-1/2 -translate-y-1/2 glass-panel px-3 py-1 rounded-full border-zinc-800 text-[10px] font-mono text-zinc-400 whitespace-nowrap flex items-center gap-2", i % 2 === 0 ? "left-8" : "right-8")}>
                                 <Search className="w-3 h-3" />
                                 {exp.period}
                              </div>
                           </div>

                           <div className="flex-1 hidden md:block" />
                        </motion.div>
                     ))}
                  </div>

                  {/* Initial Commit Milestone */}
                  <motion.div className="flex flex-col items-center pt-8 relative mt-8 md:mt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                     <div className="absolute top-0 h-8 left-1/2 w-px bg-zinc-800 hidden md:block" />

                     <div className="relative z-10 flex items-center justify-center gap-4 bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full terminal-shadow">
                        <GitBranch className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-mono text-zinc-400 tracking-wider">Initial Commit (Hello World)</span>
                     </div>
                  </motion.div>
               </section>

               {/* 5. Education Section */}
               <section id="education" className="min-h-fit flex flex-col justify-center py-12 md:py-20 snap-start snap-always">
                  <h2 className="text-2xl font-mono mb-8 flex items-center gap-4 text-white">
                     <GraduationCap className="text-blue-500 w-8 h-8" /> $ ls -la ~/education
                  </h2>

                  <div className="w-full">

                     <div className="grid md:grid-cols-2 gap-6 content-start">
                        {[
                           {
                              title: "M.Sc. Computer Science",
                              school: "University of Helsinki",
                              period: "2023 - 2025",
                              desc: "Focusing on adaptive data normalization techniques to improve anomaly detection performance on telecommunication and IoT datasets.",
                              tech: ["Data Normalization", "Anomaly Detection"]
                           },
                           {
                              title: "B.Sc. Software Engineering",
                              school: "Universiti Teknologi Malaysia",
                              period: "2018 - 2022",
                              desc: "Bachelor of Computer Science (Software Engineering). Graduated with Dean's List honors. Thesis: Data Analytics for COVID-19 Prediction.",
                              tech: ["Software Engineering", "Data Analytics"]
                           }
                        ].map((proj, i) => (
                           <motion.div key={i} className="glass-panel border-zinc-800 hover:border-blue-500/30 rounded-xl p-6 transition-all group" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                              <div className="flex items-center gap-3 mb-4">
                                 <FileCode className="w-5 h-5 text-blue-500" />
                                 <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{proj.title}</h3>
                                 <span className="text-[10px] ml-auto border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-500 font-mono uppercase">Certified</span>
                              </div>
                              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                                 {proj.desc}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-6">
                                 {proj.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-500 rounded border border-zinc-800">{t}</span>
                                 ))}
                              </div>
                              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 pt-4 border-t border-zinc-900">
                                 <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {proj.school}</span>
                                 <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">Verify <ExternalLink className="w-3 h-3" /></span>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* 6. Contact Section */}
               <section id="contact" className="py-12 md:py-20 snap-start snap-always">
                  <h2 className="text-2xl font-mono mb-8 flex items-center gap-4 text-white">
                     <Mail className="text-blue-500 w-8 h-8" /> ./contact.exe
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                     <TerminalWindow title="contact_info.json" className="bg-[#0b0b0d] border-zinc-800 shadow-2xl shadow-blue-500/5">
                        <div className="flex font-mono text-sm leading-relaxed min-h-[320px]">
                           {/* Line Numbers */}
                           <div className="flex flex-col text-zinc-700 pr-4 text-right select-none border-r border-zinc-800/50 mr-4">
                              {Array.from({ length: 14 }).map((_, i) => (
                                 <span key={i}>{i + 1}</span>
                              ))}
                           </div>

                           {/* Content */}
                           <div className="flex-1">
                              <div className="space-y-0.5">
                                 <div><span className="text-orange-300">{"{"}</span></div>
                                 <div className="pl-4">
                                    <span className="text-red-400">"status"</span><span className="text-orange-300">:</span> <span className="text-green-400">"available_for_opportunities"</span><span className="text-orange-300">,</span>
                                 </div>
                                 <div className="pl-4">
                                    <span className="text-red-400">"email"</span><span className="text-orange-300">:</span> <span className="text-green-400">"golamwasy@gmail.com"</span><span className="text-orange-300">,</span>
                                 </div>
                                 <div className="pl-4">
                                    <span className="text-red-400">"socials"</span><span className="text-orange-300">:</span> <span className="text-orange-300">{"{"}</span>
                                 </div>
                                 <div className="pl-8">
                                    <span className="text-red-400">"github"</span><span className="text-orange-300">:</span> <span className="text-green-400">"@golamwasy"</span><span className="text-orange-300">,</span>
                                 </div>
                                 <div className="pl-8">
                                    <span className="text-red-400">"linkedin"</span><span className="text-orange-300">:</span> <span className="text-green-400">"@golamwasy"</span>
                                 </div>
                                 <div className="pl-4"><span className="text-orange-300">{"}"}</span><span className="text-orange-300">,</span></div>
                                 <div className="pl-4">
                                    <span className="text-red-400">"location"</span><span className="text-orange-300">:</span> <span className="text-green-400">"Helsinki, Finland"</span>
                                 </div>
                                 <div><span className="text-orange-300">{"}"}</span></div>

                                 <div className="pt-8 text-zinc-600 italic">// Waiting for connection...</div>
                                 <div className="flex items-center gap-2 mt-2">
                                    <span className="text-blue-500">➜</span>
                                    <span className="w-2 h-4 bg-blue-500/50 animate-pulse" />
                                 </div>
                              </div>
                           </div>
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
                        <h4 className="font-bold text-zinc-300 text-lg">Golam Wasy | <span className="text-blue-500 font-mono text-sm">Full Stack Engineer</span></h4>
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
