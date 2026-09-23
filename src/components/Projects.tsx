import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projectsData, projectsNote } from '../data/projects';
import { ShieldCheck, Info } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-[#070c18] border-b border-blue-900/30 relative">
      {/* Background ambient accents */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Portfolio"
          title="Selected Projects"
          subtitle={projectsNote}
        />

        {/* Security & Data Governance Policy Banner */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/80 border border-blue-900/50 shadow-lg backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
          <div className="w-8 h-8 rounded-lg bg-blue-950/90 border border-blue-700/60 flex items-center justify-center shrink-0 text-cyan-400 shadow-inner">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-cyan-300 block sm:inline mr-1 font-mono uppercase tracking-wider text-[11px]">
              Note on Confidentiality:
            </span>
            To protect company and agency privacy, live URLs, internal logins, and proprietary code are not shown. The cards below give a high-level overview of the work done.
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Friendly conversation footer */}
        <div className="mt-10 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>
            Happy to chat more about any of these projects or what I learned along the way!
          </span>
        </div>
      </div>
    </section>
  );
}
