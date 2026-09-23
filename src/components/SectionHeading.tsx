interface SectionHeadingProps {
  id?: string;
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  id,
  badge,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      id={id}
      className={`mb-10 sm:mb-14 ${
        centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-950/60 text-cyan-300 border border-blue-800/60 shadow-[0_0_12px_rgba(56,189,248,0.1)] mb-3 ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.8)]"></span>
        <span className="tracking-widest">{badge}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-1.5 ${
          centered ? 'justify-center' : ''
        }`}
      >
        <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        <div className="h-0.5 w-2 bg-blue-500/40 rounded-full" />
        <div className="h-0.5 w-1 bg-blue-500/20 rounded-full" />
      </div>
    </div>
  );
}
