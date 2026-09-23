import { FolderGit2, Calendar, UserCheck, ExternalLink, Lock, Terminal } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-6 shadow-xl hover:border-blue-500/40 transition-all backdrop-blur-md flex flex-col justify-between hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] group relative overflow-hidden">
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/50 transition-colors" />

      <div>
        {/* Top Header: Badge, Year, Role */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-950/80 text-cyan-300 border border-blue-800/60">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            {project.statusBadge || 'Technical Project'}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-400">
            <Calendar className="w-3 h-3 text-cyan-400" />
            {project.year}
          </span>
        </div>

        {/* Project Name */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-200 transition-colors">
          {project.name}
        </h3>

        {/* Role */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 mb-3.5">
          <UserCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Role: {project.role}</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Confidentiality Notice */}
        {project.confidentialityNote && (
          <div className="mb-4 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/90 flex items-start gap-2 text-[11px] text-slate-400">
            <Lock className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
            <span>{project.confidentialityNote}</span>
          </div>
        )}
      </div>

      {/* Footer: Technologies & Links */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-800/90 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.externalLink && (
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View Public Reference</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
