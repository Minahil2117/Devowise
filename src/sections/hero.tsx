import { CSSProperties } from "react";
import {
  Counter,
  Marquee,
  Scramble,
  ButtonPrimary,
  ButtonGhost,
  Reveal,
} from "../components/ui";

const CLIENTS = [
  {
    name: "Halcyon",
    sub: "HEALTH",
    cls: "font-display font-bold tracking-tight",
  },
  {
    name: "ledgerly",
    sub: "FINTECH",
    cls: "font-mono font-medium lowercase",
  },
  {
    name: "BRIGHTLINE",
    sub: "LOGISTICS",
    cls: "font-mono font-semibold tracking-[0.3em]",
  },
  {
    name: "Coreform",
    sub: "SaaS",
    cls: "font-display font-semibold italic",
  },
  {
    name: "NORDWIND",
    sub: "RETAIL",
    cls: "font-display font-bold tracking-[0.18em]",
  },
  {
    name: "quanta_bio",
    sub: "BIOTECH",
    cls: "font-mono font-medium lowercase",
  },
  {
    name: "Vertex Labs",
    sub: "AI",
    cls: "font-display font-semibold",
  },
  {
    name: "PAPERTRAIL",
    sub: "OPS",
    cls: "font-mono font-bold tracking-[0.24em]",
  },
  {
    name: "Mosaic&Co",
    sub: "E-COMMERCE",
    cls: "font-display font-bold",
  },
  {
    name: "Asterline",
    sub: "EDTECH",
    cls: "font-mono font-semibold",
  },
];

const STATS = [
  {
    to: 14,
    suffix: "+",
    label: "Products shipped to production",
  },
  {
    to: 98,
    suffix: "%",
    label: "Clients who return or refer",
  },
  {
    to: 14,
    suffix: "",
    label: "Countries served, 5 time zones",
  },
  {
    to: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "Average partner rating",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      {/* =====================================================
          MAIN HERO — VIDEO BACKGROUND
      ====================================================== */}
      <div className="relative min-h-[700px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Left-to-right gradient overlay
            Darker on the left for text readability,
            transparent toward the right so the video stays visible.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Subtle overall overlay */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-14 pb-20 md:pt-20 lg:px-10">
          {/* Eyebrow Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">
              <Scramble text="PRODUCT · DESIGN · AI — EST. 2019" />
            </p>

            <Reveal delay={300}>
              <span className="inline-flex items-center gap-2.5 border border-white/30 bg-black/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                <span
                  className="pulse-dot h-2 w-2 rounded-full bg-accent"
                  aria-hidden
                />

                Now booking Q3 sprints
              </span>
            </Reveal>
          </div>

          {/* =====================================================
              HEADLINE
          ====================================================== */}
          <h1 className="mt-10 font-display font-semibold leading-[0.94] tracking-[-0.03em] text-white [font-size:clamp(3.2rem,10.5vw,8.25rem)]">
            <span className="mask-line">
              <span
                style={
                  {
                    "--d": "0.05s",
                  } as CSSProperties
                }
              >
                We build
              </span>
            </span>

            <span className="mask-line">
              <span
                style={
                  {
                    "--d": "0.18s",
                  } as CSSProperties
                }
              >
                what others{" "}
                <span className="text-white/70">
                  —
                </span>
              </span>
            </span>

            <span className="mask-line">
              <span
                style={
                  {
                    "--d": "0.31s",
                    WebkitTextStroke: "2px white",
                  } as CSSProperties
                }
                className="inline-block pr-2 text-transparent"
              >
                imagine
                <span
                  className="text-accent"
                  style={{
                    WebkitTextStroke: "0",
                  }}
                >
                  .
                </span>
              </span>
            </span>
          </h1>

          {/* =====================================================
              DESCRIPTION + CTA + SPRINT BOARD
          ====================================================== */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            {/* Description */}
            <Reveal delay={500} className="lg:col-span-6">
              <p className="max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
                Devowise is a product and design studio crafting{" "}
                <span className="font-medium text-white">
                  SaaS, AI systems, and high-performance web experiences
                </span>{" "}
                for companies that take software seriously.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <ButtonPrimary href="#contact">
                  Book a discovery call
                </ButtonPrimary>

                <ButtonGhost href="#capabilities">
                  Explore capabilities
                </ButtonGhost>
              </div>
            </Reveal>

            {/* Sprint Board */}
            <Reveal
              delay={620}
              className="lg:col-span-6 lg:justify-self-end"
            >
              <div className="border border-white/30 bg-white/85 p-5 font-mono text-[12px] leading-loose text-mute shadow-xl backdrop-blur-md lg:w-[380px]">
                <p className="flex items-center justify-between border-b border-line pb-3 text-ink">
                  <span className="uppercase tracking-[0.16em]">
                    Sprint board
                  </span>

                  <span className="text-accent">
                    LIVE
                  </span>
                </p>

                <p className="flex justify-between pt-3">
                  <span>
                    AI intake automation
                  </span>

                  <span className="text-accent">
                    ● in review
                  </span>
                </p>

                <p className="flex justify-between">
                  <span>
                    SaaS billing revamp
                  </span>

                  <span>
                    ● building
                  </span>
                </p>

                <p className="flex justify-between">
                  <span>
                    Design system v2
                  </span>

                  <span className="text-ink">
                    ✓ shipped
                  </span>
                </p>

                <p className="flex justify-between border-t border-line pt-3">
                  <span>
                    Edge caching layer
                  </span>

                  <span>
                    ● queued
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* =====================================================
          STATS — NORMAL BACKGROUND
      ====================================================== */}
      <div className="relative z-10 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="border-r border-line py-7 pr-4 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <p className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                  <Counter
                    to={s.to}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </p>

                <p className="mt-2 max-w-[190px] text-[13px] leading-snug text-mute">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          CLIENT MARQUEE — NORMAL BACKGROUND
      ====================================================== */}
      <div className="relative z-10 border-t border-line bg-paper py-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-5 px-6 lg:flex-row lg:px-10">
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
            Trusted by product teams at
          </p>

          <Marquee
            speed={55}
            className="w-full flex-1"
          >
            {CLIENTS.map((c) => (
              <span
                key={c.name}
                className="mx-7 flex shrink-0 items-baseline gap-2 text-ink/80 transition-colors hover:text-accent"
              >
                <span
                  className={`${c.cls} text-xl md:text-2xl`}
                >
                  {c.name}
                </span>

                <span className="hidden font-mono text-[9px] tracking-[0.2em] text-mute sm:inline">
                  {c.sub}
                </span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}