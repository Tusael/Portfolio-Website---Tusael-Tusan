import { SectionHeading } from './SectionHeading';
import { ExperienceCard } from './ExperienceCard';
import { experienceData } from '../data/experience';
import { profileData } from '../data/profile';
import { ShieldCheck, Server } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-[#070c18] border-b border-blue-900/30 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          subtitle="Verified career background spanning public sector governance and private enterprise IT operations."
        />

        {/* Timeline Container */}
        <div className="space-y-8 relative">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/70 border border-blue-900/40 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300 shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-blue-950/80 border border-blue-700/60 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-slate-300">
              Verified employment track record in compliance with professional standards.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-cyan-300 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/50">
            <Server className="w-3 h-3 text-blue-400" />
            <span>{profileData.careerSpan}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
