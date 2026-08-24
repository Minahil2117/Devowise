type IconProps = { className?: string };

export function LogoMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="1.5" y="1.5" width="37" height="37" stroke="currentColor" strokeWidth="3" />
      <path d="M13 10h8.2c6.1 0 10 4 10 10s-3.9 10-10 10H13V10z" fill="currentColor" />
      <rect x="17" y="14" width="12" height="12" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${dark ? "text-paper" : "text-ink"}`}>
      <LogoMark className="h-8 w-8" />
      <span className="font-display text-lg font-semibold tracking-tight">
        devowise<span className="text-accent">.</span>
      </span>
    </span>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M2 8h11M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function Plus({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M2.5 8.5l3.6 3.6 7.4-8.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  );
}

export function QuoteMark({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 32" fill="none" className={className} aria-hidden>
      <path d="M0 32V19.2C0 8.5 6.2 1.6 16 0l1.8 4.8c-5.4 1.9-8.2 5.2-8.6 9.2h8.2V32H0zm22 0V19.2C22 8.5 28.2 1.6 38 0l1.8 4.8c-5.4 1.9-8.2 5.2-8.6 9.2H39V32H22z" fill="currentColor" />
    </svg>
  );
}

export function Seal({ letters, className = "h-12 w-12" }: { letters: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3.2 3.2" />
      <circle cx="24" cy="24" r="15.5" stroke="currentColor" strokeWidth="1.2" />
      <text
        x="24"
        y="28.5"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="11"
        fontWeight="600"
        fill="currentColor"
      >
        {letters}
      </text>
    </svg>
  );
}

/* ---------- industry glyphs ---------- */
const stroke = { stroke: "currentColor", strokeWidth: 1.5, fill: "none" } as const;

export function GlyphSaaS({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path {...stroke} d="M16 4l12 6-12 6L4 10l12-6z" />
      <path {...stroke} d="M4 16l12 6 12-6" />
      <path {...stroke} d="M4 22l12 6 12-6" opacity=".45" />
    </svg>
  );
}

export function GlyphFintech({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="12" {...stroke} />
      <path {...stroke} d="M16 8v16M20.5 12.2c-.9-1.5-2.6-2.2-4.5-2.2-2.4 0-4.3 1.3-4.3 3.4 0 4.6 9 2.3 9 6.6 0 2.1-2 3.4-4.6 3.4-2 0-3.8-.8-4.7-2.4" />
    </svg>
  );
}

export function GlyphHealth({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path {...stroke} d="M3 17h7l3-8 5 15 3.5-9.5H29" />
      <circle cx="10" cy="17" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function GlyphLogistics({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="7" cy="25" r="3" {...stroke} />
      <circle cx="25" cy="7" r="3" {...stroke} />
      <path {...stroke} d="M9 23c3-3 4-4 8-4s5-1 8-8" strokeDasharray="3 3" />
      <path {...stroke} d="M13 28h12v-7" />
    </svg>
  );
}

export function GlyphCommerce({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path {...stroke} d="M6 10h20l-1.8 16H7.8L6 10z" />
      <path {...stroke} d="M11 13V8a5 5 0 0110 0v5" />
    </svg>
  );
}

export function GlyphAI({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="8" r="2.6" {...stroke} />
      <circle cx="8" cy="24" r="2.6" {...stroke} />
      <circle cx="24" cy="24" r="2.6" {...stroke} />
      <circle cx="16" cy="17" r="3.4" fill="currentColor" opacity=".9" />
      <path {...stroke} d="M15 10.5l-5.5 10.8M17 10.5l5.5 10.8M10.6 23.6h10.8" />
    </svg>
  );
}
