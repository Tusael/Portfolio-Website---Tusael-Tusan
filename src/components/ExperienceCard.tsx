import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
  isLast?: boolean;
}

export function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 sm:pl-10 group">
      {/* Vertical Timeline connector line */}
      {!isLast && (
        <span
          className="absolute left-3.5 sm:left-4.5 top-8 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 via-blue-900/30 to-slate-800 group-hover:from-cyan-400/50 transition-colors"
          aria-hidden="true"
        />
      )}

      {/* Timeline Node Icon / Dot */}
      <div
        className={`absolute left-0 top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 transition-all ${
          experience.isCurrent
            ? 'bg-[#0a1022] border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]'
            : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-blue-500 group-hover:text-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]'
        }`}
      >
        <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>

      {/* Content Card */}
      <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-5 sm:p-6 shadow-xl hover:border-blue-500/40 transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(37,99,235,0.12)]">
        {/* Header line: Role, Organization, Current badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {experience.role}
              </h3>
              {experience.isCurrent && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-950/80 text-cyan-300 border border-blue-700/60 shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1.5 animate-pulse"></span>
                  Current Role
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 mt-1">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>{experience.organization}</span>
            </div>
          </div>

          <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] bg-slate-800/80 px-2.5 py-1 rounded text-cyan-300 border border-slate-700/60">
              <Calendar className="w-3 h-3 text-cyan-400" />
              {experience.period}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              {experience.sector}
            </span>
          </div>
        </div>

        {/* Responsibilities list */}
        <div>
          <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            Key Responsibilities & Contributions:
          </h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
