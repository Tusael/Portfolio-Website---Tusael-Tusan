import { SectionHeading } from './SectionHeading';
import { SkillGroup } from './SkillGroup';
import { skillsData } from '../data/skills';
import { CheckCircle2, Cpu } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-[#090e1c] border-b border-blue-900/30 relative">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills & Competencies"
          subtitle="Practical technical abilities acquired through enterprise infrastructure management and system development."
        />

        {/* 2x2 Clean Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </div>

        {/* Realistic summary bar */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/70 border border-blue-900/40 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-300 shadow-md">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All competencies reflect hands-on operational practice across enterprise systems, ministry departments, and manufacturing facilities.
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-300 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/50 shrink-0">
            <Cpu className="w-3 h-3 text-blue-400" />
            <span>Standards-Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
