import { ArrowUp, ShieldCheck, Linkedin, Github, Mail, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050811] text-white border-t border-blue-900/40 py-12 relative overflow-hidden">
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center font-mono font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  TT
                </div>
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-white block">
                  {profileData.name}
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  {profileData.title}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Based in {profileData.location} • IT Officer & Tech Practitioner
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social / Contact Links */}
          <div className="flex items-center gap-2.5 text-xs">
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-all border border-slate-800 hover:border-cyan-500/40 focus:outline-none"
              title="Send email to Tusael Tusan"
              aria-label="Send email to Tusael Tusan"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-all border border-slate-800 hover:border-cyan-500/40 focus:outline-none"
              title="Connect with Tusael Tusan on LinkedIn (opens in new tab)"
              aria-label="Connect with Tusael Tusan on LinkedIn (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-all border border-slate-800 hover:border-cyan-500/40 focus:outline-none"
              title="View Tusael Tusan on GitHub (opens in new tab)"
              aria-label="View Tusael Tusan on GitHub (opens in new tab)"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 transition-all border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-medium focus:outline-none cursor-pointer"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3 text-cyan-400" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              Professional IT Portfolio • Built for Reliability & Performance
            </span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
