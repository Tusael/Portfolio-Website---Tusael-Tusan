import { ArrowDown, Mail, Briefcase, MapPin, Shield, Terminal, Server, FolderGit2, Cpu, Activity } from 'lucide-react';
import { profileData } from '../data/profile';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#070c18] text-white overflow-hidden border-b border-blue-900/30"
    >
      {/* Subtle futuristic atmosphere: radial ambient glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Fine technical grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Subtle animated vector circuitry / data nodes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 50 120 L 220 120 L 320 220 L 550 220"
          fill="none"
          stroke="url(#hero-line-grad)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M 800 100 L 950 250 L 1200 250"
          fill="none"
          stroke="url(#hero-line-grad)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <circle cx="220" cy="120" r="2.5" fill="#38bdf8" />
        <circle cx="320" cy="220" r="2.5" fill="#60a5fa" />
        <circle cx="950" cy="250" r="2.5" fill="#38bdf8" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Information (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* System Status & Location Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-xs font-medium text-slate-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-300 font-semibold tracking-wide font-mono text-[11px]">
                Active IT Officer
              </span>
              <span className="text-slate-600">|</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {profileData.location}
              </span>
            </div>

            {/* Name, Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {profileData.name}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  {profileData.title}
                </p>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-blue-300 bg-blue-950/80 border border-blue-800/60">
                  {profileData.careerSpan}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-slate-400 uppercase pt-1">
                <span className="text-cyan-400 font-bold">{'>'}</span>
                <span>{profileData.supportingText}</span>
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profileData.heroIntro}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-view-experience-btn"
                onClick={() => scrollTo('experience')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-cyan-200" />
                <span>View Experience</span>
              </button>

              <button
                id="hero-explore-projects-btn"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700/80 hover:border-blue-500/60 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-blue-400" />
                <span>Explore Projects</span>
              </button>

              <button
                id="hero-contact-me-btn"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-slate-900/50 hover:bg-slate-800/80 text-cyan-300 hover:text-white border border-blue-900/50 hover:border-cyan-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Key domain tags */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors whitespace-nowrap">
                  <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Public & Private Sector</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors whitespace-nowrap">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>PHP & MySQL</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors whitespace-nowrap">
                  <Server className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Active Directory & M365</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors whitespace-nowrap">
                  <Activity className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Apps & Testing (SIT/UAT)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Profile Image Column (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80">
              {/* Subtle outer tech glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-indigo-600/30 rounded-2xl blur-md opacity-70"></div>

              {/* Decorative HUD Corner Accents */}
              <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl z-20 pointer-events-none" />
              <div className="absolute -top-2.5 -right-2.5 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -left-2.5 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl z-20 pointer-events-none" />
              <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br z-20 pointer-events-none" />

              {/* Floating micro-badge: Top-Right */}
              <div className="absolute -top-3.5 right-4 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0a1020] border border-cyan-500/50 text-[10px] font-mono text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                <Cpu className="w-3 h-3 text-cyan-400" />
                <span>IT Operations</span>
              </div>

              {/* Main Photo Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-blue-500/40 shadow-2xl backdrop-blur-sm">
                <div className="relative group">
                  <img
                    id="profile-image"
                    src={profileData.profileImagePath}
                    alt={`${profileData.name} - ${profileData.title}`}
                    referrerPolicy="no-referrer"
                    width={320}
                    height={400}
                    className="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="eager"
                  />
                  {/* Subtle tech scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Enterprise Telemetry bar */}
                <div className="p-3.5 bg-slate-950/95 border-t border-blue-900/40 flex items-center justify-between text-xs backdrop-blur-md">
                  <div>
                    <span className="block font-bold text-white tracking-wide">
                      {profileData.name}
                    </span>
                    <span className="block text-[11px] text-slate-400 font-medium">
                      {profileData.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-800/60 font-mono text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-14 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Official Technical Portfolio & Professional Credentials</span>
          </div>
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded px-2 py-1 cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span>Learn more about Tusael</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
