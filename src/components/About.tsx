import { ShieldCheck, Award, CheckCircle2, Cpu, Globe, GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#090e1c] border-b border-blue-900/30 relative">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="About Me"
          title="Professional Background"
          subtitle="IT Officer with hands-on experience supporting web applications, IT operations, and day-to-day user systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              {profileData.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competencies Checklist */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  Core Professional Competencies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profileData.coreCompetencies.map((comp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-200">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Structured Sidebar / Fast Facts (Col 8-12) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Profile Summary Card */}
            <div className="bg-slate-900/70 border border-blue-900/40 rounded-xl p-6 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Professional Snapshot</span>
                </div>
              </div>

              <div className="space-y-4 text-sm divide-y divide-slate-800/80">
                <div className="pt-1">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Current Role</span>
                  <span className="block font-semibold text-white mt-0.5 text-base">
                    {profileData.title}
                  </span>
                  <span className="block text-xs text-cyan-400 font-medium mt-0.5">
                    {profileData.currentOrganization} ({profileData.currentSector})
                  </span>
                </div>

                <div className="pt-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">Primary Focus</span>
                  <span className="block font-medium text-slate-200 mt-0.5">
                    {profileData.supportingText}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    Operational Environments
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {profileData.operationalEnvironments.map((env, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-blue-950/60 text-cyan-300 border border-blue-800/40 text-xs rounded-md font-medium"
                      >
                        {env}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    Academic Credential
                  </span>
                  <span className="block font-semibold text-white mt-0.5">
                    {profileData.academicSummary.degreeShort}
                  </span>
                  <span className="block text-xs text-slate-400 mt-0.5">
                    {profileData.academicSummary.institution} • CGPA: <span className="text-cyan-300 font-semibold">{profileData.academicSummary.cgpa}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Values / Operational Philosophy Card */}
            <div className="bg-gradient-to-br from-blue-950/70 via-slate-900 to-slate-950 rounded-xl p-5 border border-blue-800/50 shadow-[0_0_20px_rgba(37,99,235,0.12)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-cyan-300">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  Work Philosophy
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{profileData.standardOfService}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
