import { Code, Server, Cog, Users2, Layers } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillGroupProps {
  category: SkillCategory;
}

export function SkillGroup({ category }: SkillGroupProps) {
  // Select appropriate Lucide icon by category id
  const getIcon = (id: string) => {
    switch (id) {
      case 'development':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'infrastructure':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'operations':
        return <Cog className="w-5 h-5 text-teal-400" />;
      case 'professional':
        return <Users2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-6 shadow-xl hover:border-blue-500/40 transition-all backdrop-blur-md flex flex-col justify-between hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] group">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center shadow-inner group-hover:border-cyan-400/50 transition-colors">
              {getIcon(category.id)}
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">
              {category.category}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-5 min-h-[40px]">
          {category.description}
        </p>

        {/* Skill badges/tags */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 text-sm font-medium border border-slate-700/70 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-slate-800 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Verified Proficiency
        </span>
        <span className="font-semibold text-cyan-400/90">{category.skills.length} Competencies</span>
      </div>
    </div>
  );
}
