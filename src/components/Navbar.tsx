import { useState, useEffect } from 'react';
import { Menu, X, Mail, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070c18]/90 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-blue-900/40 py-3'
          : 'bg-[#070c18]/70 backdrop-blur-md border-b border-slate-800/80 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => scrollToSection('home')}
            aria-label={`${profileData.name} - Home`}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 -ml-1 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 border border-blue-500/40 flex items-center justify-center font-bold tracking-wider text-sm transition-all group-hover:border-cyan-400 group-hover:shadow-[0_0_14px_rgba(34,211,238,0.35)]">
              <span className="text-white">T</span>
              <span className="text-cyan-400">T</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="block text-sm font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {profileData.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/50">
                  IT OFFICER
                </span>
              </div>
              <span className="block text-xs text-slate-400 font-medium">
                {profileData.currentOrganization}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-lg border border-slate-800/80 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all relative ${
                    isActive
                      ? 'text-cyan-300 bg-blue-950/80 border border-blue-700/50 shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-[#0a0f1e]/98 backdrop-blur-xl border-b border-blue-900/40 px-4 pt-3 pb-5 space-y-1 shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-cyan-300/80 border-b border-slate-800/80 mb-2 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>IT OFFICER PORTFOLIO • TUSAEL TUSAN</span>
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-blue-950/80 border border-blue-700/50 text-cyan-300 font-semibold shadow-[0_0_10px_rgba(56,189,248,0.15)]'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]"></span>}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              id="mobile-contact-cta"
              onClick={() => scrollToSection('contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Tusael</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
