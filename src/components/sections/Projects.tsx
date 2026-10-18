import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  ExternalLink,
  Star,
  GitFork,
  Circle,
  Terminal,
  BookOpen,
  CodeXml,
  Pin
} from "lucide-react";
import { usePortfolio } from "@/lib/context";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Projects() {
  const { projects = [] } = usePortfolio();
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);

  return (
    <Section id="projects" fullHeight={false}>
      <SectionHeading 
        icon={CodeXml} 
        title={
          <>
            tree -L 2 ~/projects{" "}
            <span className="text-zinc-500 font-normal text-xs sm:text-sm lg:text-base tracking-normal lowercase block sm:inline mt-1 sm:mt-0">
              (more to come...)
            </span>
          </>
        } 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Sidebar: Repositories (List View) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-2xl"
        >
          <div className="p-4 border-b border-zinc-800 bg-zinc-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground font-mono text-xs uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              Repositories
            </div>
            <div className="flex items-center gap-2">
              {selectedRepo && (
                <button
                  onClick={() => setSelectedRepo(null)}
                  className="text-[10px] font-mono text-blue-400 hover:text-blue-300 underline cursor-pointer"
                >
                  Reset
                </button>
              )}
              <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 font-mono">{projects.length}</span>
            </div>
          </div>
          <div className="divide-y divide-zinc-800/60 max-h-[420px] lg:max-h-[600px] overflow-y-auto custom-scrollbar">
            {projects.map((repo, i) => {
              const isSelected = selectedRepo === repo.name;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedRepo(isSelected ? null : repo.name)}
                  className={cn(
                    "w-full text-left p-4 transition-colors cursor-pointer group block",
                    isSelected ? "bg-blue-500/10 border-l-2 border-l-blue-500" : "hover:bg-blue-500/5"
                  )}
                >
                  <div className="flex justify-between items-start mb-1.5 gap-2">
                    <h4 className={cn(
                      "text-sm font-bold transition-colors font-mono flex items-center gap-1.5",
                      isSelected ? "text-blue-400" : "text-foreground group-hover:text-blue-400"
                    )}>
                      {repo.name}
                      {repo.isPinned && <Pin className="w-3 h-3 text-blue-500/70 rotate-45" />}
                    </h4>
                    <span className="text-[9px] text-zinc-400 border border-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider font-mono shrink-0">
                      {repo.isPublic ? "Public" : "Private"}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mb-2">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Circle className="w-2 h-2 fill-blue-500 text-blue-500" />
                      {repo.language}
                    </div>
                    <span>Updated {repo.updatedAt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Main Area: Projects (Card View) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => (selectedRepo ? p.name === selectedRepo : true))
              .map((project, i) => {
                const isHighlighted = selectedRepo === project.name;
                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "group relative bg-zinc-950 border rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.2)] flex flex-col",
                      isHighlighted
                        ? "border-blue-500/60 md:col-span-2"
                        : "border-zinc-800 hover:border-blue-500/40"
                    )}
                  >
                    <div className="flex justify-between items-start mb-4 gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/30 transition-colors">
                          <Terminal className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-foreground group-hover:text-blue-400 transition-colors tracking-tight font-mono">
                            {project.name}
                          </h3>
                          <span className="text-[10px] font-mono text-zinc-500">{project.updatedAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {project.isPinned && (
                          <span className="text-[9px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded uppercase tracking-wider font-mono">
                            Pinned
                          </span>
                        )}
                        <span className="text-[9px] text-zinc-400 border border-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider font-mono">
                          {project.isPublic ? "Public" : "Private"}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tag, j) => (
                        <span key={j} className="text-[10px] font-mono px-2.5 py-0.5 bg-zinc-900 text-link rounded border border-zinc-800 group-hover:border-blue-500/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/80">
                      <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-400">
                        <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                          <Star className="w-3.5 h-3.5" />
                          {project.stars || 0}
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                          <GitFork className="w-3.5 h-3.5" />
                          {project.forks || 0}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.isPublic && project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-2.5 py-1.5 text-zinc-400 hover:text-foreground transition-colors rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] font-mono uppercase"
                            title="View Source Code"
                          >
                            <Code className="w-3.5 h-3.5" />
                            <span>Source</span>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/15 hover:bg-blue-600 border border-blue-500/30 text-blue-400 hover:text-white rounded-md text-[10px] font-mono font-bold uppercase tracking-wider transition-all group/btn"
                          >
                            Live
                            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </Section>
  );
}
