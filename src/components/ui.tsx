import { ReactNode, CSSProperties, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { useInView, usePrefersReducedMotion, useScramble } from "../lib/hooks";
import { ArrowUpRight } from "./icons";

/* ---------------- Reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "in", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em]",
        tone === "light" ? "text-mute" : "text-fog",
        className
      )}
    >
      <span className="inline-block h-px w-8 bg-accent" aria-hidden />
      {children}
    </p>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHead({
  eyebrow,
  title,
  copy,
  tone = "light",
  className,
  right,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  right?: ReactNode;
}) {
  return (
    <div className={cn("mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16", className)}>
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className={cn(
              "mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-5xl lg:text-[3.4rem]",
              tone === "light" ? "text-ink" : "text-paper"
            )}
          >
            {title}
          </h2>
        </Reveal>
        {copy && (
          <Reveal delay={160}>
            <p
              className={cn(
                "mt-5 max-w-xl text-base leading-relaxed md:text-lg",
                tone === "light" ? "text-mute" : "text-fog"
              )}
            >
              {copy}
            </p>
          </Reveal>
        )}
      </div>
      {right && (
        <Reveal delay={200} className="pb-1">
          {right}
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Marquee ---------------- */
export function Marquee({
  children,
  speed = 42,
  reverse = false,
  className,
  pauseOnHover = true,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        reverse && "marquee-rev",
        pauseOnHover && "marquee-hover",
        className
      )}
    >
      <div className="marquee-track" style={{ "--speed": `${speed}s` } as CSSProperties}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Counter ---------------- */
export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1500,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------------- Scramble text ---------------- */
export function Scramble({ text, className }: { text: string; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const output = useScramble(text, inView);
  return (
    <span ref={ref} className={className}>
      {output || "\u00A0"}
    </span>
  );
}

/* ---------------- Buttons ---------------- */
export function ButtonPrimary({
  href,
  children,
  className,
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "accent";
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 px-6 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-300",
        tone === "ink"
          ? "bg-ink text-paper hover:bg-accent"
          : "bg-accent text-white hover:bg-ink hover:text-paper",
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function ButtonGhost({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "link-sweep inline-flex items-center gap-2 px-1 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.14em]",
        tone === "light" ? "text-ink" : "text-paper",
        className
      )}
    >
      {children}
    </a>
  );
}

