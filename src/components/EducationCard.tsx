import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { EducationItem } from '../types';

interface EducationCardProps {
  education: EducationItem;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto backdrop-blur-md hover:border-blue-500/40 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.12)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-950/80 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-700/60 shadow-inner">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-950/80 text-cyan-300 border border-blue-800/60 mb-1.5">
              Undergraduate Degree
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {education.degree}
            </h3>
            <p className="text-sm font-medium text-slate-300 mt-0.5">
              {education.institution}
            </p>
          </div>
        </div>

        <div className="flex sm:flex-col items-start sm:items-end justify-between text-xs text-slate-400 shrink-0 gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] bg-slate-800/80 px-2.5 py-1 rounded text-slate-300 border border-slate-700/60">
            <Calendar className="w-3 h-3 text-cyan-400" />
            {education.period}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono font-bold text-cyan-300 text-sm bg-blue-950/60 border border-blue-800/50 px-2.5 py-0.5 rounded">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            CGPA: {education.cgpa}
          </span>
        </div>
      </div>

      <div>
        <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Academic Highlights & Foundations:
        </h4>
        <ul className="space-y-2.5">
          {education.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
