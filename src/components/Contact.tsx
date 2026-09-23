import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ExternalLink, MapPin, ShieldCheck, ArrowRight, Send } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [launchedMailClient, setLaunchedMailClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.subject.trim() || 'Professional Inquiry - IT Officer'
    );
    const bodyContent = [
      formData.name.trim() ? `From: ${formData.name.trim()}` : '',
      '',
      formData.message.trim(),
    ]
      .filter((line, i) => i !== 0 || line !== '')
      .join('\n');

    const body = encodeURIComponent(bodyContent);
    return `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  const handleComposeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;
    const mailtoUrl = constructMailtoUrl();
    window.location.href = mailtoUrl;
    setLaunchedMailClient(true);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#070c18] border-b border-blue-900/30 relative">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Always open to learning, discussing IT topics, collaborating on projects, or exploring new opportunities. Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Channels (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-6 shadow-xl backdrop-blur-md space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {profileData.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-cyan-400 mt-0.5">
                  {profileData.title}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Based in {profileData.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                {/* Email Direct Action Card */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-blue-900/40 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      Email
                    </span>
                    <button
                      id="contact-copy-email-btn"
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none rounded px-2 py-0.5 bg-blue-950/70 border border-blue-800/60"
                      title="Copy email address"
                      aria-label="Copy email address to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-cyan-400" />
                          <span className="text-cyan-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-cyan-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    id="contact-mailto-link"
                    href={`mailto:${profileData.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors block break-all font-mono"
                  >
                    {profileData.email}
                  </a>

                  <div className="pt-1.5">
                    <a
                      id="contact-direct-email-btn"
                      href={`mailto:${profileData.email}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send an Email</span>
                    </a>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    id="contact-linkedin-link"
                    href={profileData.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-slate-950/70 border border-blue-900/40 hover:border-blue-500/50 transition-all"
                    aria-label="Connect on LinkedIn (opens in new tab)"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                        LinkedIn
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <span className="mt-2 inline-block text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Connect on LinkedIn
                    </span>
                    <p className="text-xs text-slate-400 mt-1">Professional profile & career updates.</p>
                  </a>

                  <a
                    id="contact-github-link"
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-slate-950/70 border border-blue-900/40 hover:border-blue-500/50 transition-all"
                    aria-label="View GitHub profile (opens in new tab)"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Github className="w-3.5 h-3.5 text-slate-300" />
                        GitHub
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <span className="mt-2 inline-block text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      github.com/Tusael
                    </span>
                    <p className="text-xs text-slate-400 mt-1">Projects, code & development work.</p>
                  </a>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-900/40 text-[11px] text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Happy to share my detailed CV or additional professional information upon request.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-800/90 rounded-xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
              <div className="border-b border-slate-800/80 pb-4 mb-5">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Have a question, advice, or an opportunity to discuss? Drop a note below and it will open in your email client ready to send.
                </p>
              </div>

              {launchedMailClient && (
                <div className="mb-5 p-4 rounded-xl bg-blue-950/80 border border-cyan-500/50 text-xs text-cyan-200 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-cyan-300">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Email application opened</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    If your email application did not launch automatically, you can use the direct link below:
                  </p>
                  <a
                    href={constructMailtoUrl()}
                    className="inline-flex items-center gap-1.5 font-semibold text-cyan-300 underline hover:text-cyan-200"
                  >
                    <span>Click here to launch email client again</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              )}

              <form onSubmit={handleComposeSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="composer-name"
                      className="block text-xs font-mono font-semibold text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="composer-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Ahmad Razif"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="composer-subject"
                      className="block text-xs font-mono font-semibold text-slate-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="composer-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Hello / Job Opportunity / Networking"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="composer-message"
                    className="block text-xs font-mono font-semibold text-slate-300 mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="composer-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hi Tusael, I'd like to connect regarding..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] font-mono text-slate-400">
                    Sends to: <span className="text-cyan-300 font-semibold">{profileData.email}</span>
                  </span>

                  <button
                    id="composer-submit-btn"
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
