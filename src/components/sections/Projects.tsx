import React from "react";
import { motion } from "framer-motion";
import {
  Folder,
  Code,
  ExternalLink,
  Star,
  GitFork,
  Circle,
  Terminal,
  BookOpen,
  CodeXml
} from "lucide-react";
import { usePortfolio } from "@/lib/context";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const { projects = [] } = usePortfolio();

  return (
    <Section id="projects" fullHeight={false}>
      <SectionHeading 
        icon={CodeXml} 
        title={
          <>
            tree -L 2 ~/projects{" "}
            <span className="text-zinc-500 font-normal text-sm lg:text-base tracking-normal lowercase">
              (more to come...)
            </span>
          </>
        } 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar: Repositories (List View) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 bg-[#1e1e1e] rounded-xl border border-zinc-800/50 overflow-hidden shadow-2xl"
        >
          <div className="p-4 border-b border-zinc-800/50 bg-zinc-800/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              Repositories
            </div>
            <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-500 font-mono">{projects.length}</span>
          </div>
          <div className="divide-y divide-zinc-800/50 max-h-[500px] lg:max-h-[600px] overflow-y-auto custom-scrollbar">
            {projects.map((repo, i) => (
              <div key={i} className="p-4 hover:bg-blue-500/5 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-blue-400/90 group-hover:text-blue-400 transition-colors font-mono">{repo.name}</h4>
                  <span className="text-[9px] text-zinc-600 border border-zinc-800/50 px-1.5 py-0.5 rounded uppercase tracking-wider font-mono">
                    {repo.isPublic ? "Public" : "Private"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-mono">
                  <div className="flex items-center gap-1">
                    <Circle className="w-1.5 h-1.5 fill-blue-500 text-blue-500" />
                    {repo.language}
                  </div>
                  <span>{repo.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Area: Projects (Card View) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => p.isPinned).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#1e1e1e] border border-zinc-800/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 group-hover:border-blue-500/30 transition-colors">
                      <Terminal className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-zinc-100 group-hover:text-blue-400 transition-colors tracking-tight">{project.name}</h3>
                  </div>
                  <span className="text-[9px] text-zinc-600 border border-zinc-800/50 px-1.5 py-0.5 rounded uppercase tracking-wider font-mono">
                    {project.isPublic ? "Public" : "Private"}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tag, j) => (
                    <span key={j} className="text-[9px] font-mono px-2 py-0.5 bg-zinc-800/30 text-zinc-500 rounded border border-zinc-800/50 group-hover:border-blue-500/10 group-hover:text-blue-400/70 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                      <Star className="w-3 h-3" />
                      {project.stars || 0}
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                      <GitFork className="w-3 h-3" />
                      {project.forks || 0}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.isPublic && project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-500 hover:text-white transition-colors rounded-md hover:bg-zinc-800"
                        title="View Repository"
                      >
                        <Code className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-blue-600 text-zinc-300 hover:text-white rounded-md text-[10px] font-bold uppercase tracking-wider transition-all group/btn"
                      >
                        Demo
                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
