import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, Reveal, SectionHead } from "../components/ui";
import { Check, QuoteMark, ArrowRight } from "../components/icons";
import { usePrefersReducedMotion } from "../lib/hooks";

const DIFFS = [
  "100% senior talent — no juniors learning on your budget",
  "Every engagement led by a principal, start to finish",
  "Working software demoed to you every single week",
  "All code, designs and IP transfer to you at close",
  "No account managers. No ceremony. Direct line to the builders.",
];

export function Studio() {
  return (
    <section id="studio" className="grid-lines-dark relative border-b border-linedark bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark">About the studio</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-5xl">
                Small team.
                <br />
                Senior only.
                <br />
                <span className="outline-text-paper">No ceremony.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fog md:text-lg">
                Devowise is a small, senior team building AI and product systems for companies that take
                software seriously. We focus on the intersection of engineering, design and AI — shipping
                infrastructure, interfaces and automation that hold up under real load.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-9 space-y-4">
                {DIFFS.map((d) => (
                  <li key={d} className="flex items-start gap-3.5 text-[15px] leading-snug text-paper/90">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-accent/60 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* photo collage */}
          <div className="lg:col-span-7">
            <div className="relative">
              <Reveal>
                <div className="relative overflow-hidden border border-linedark">
                  <img
                    src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="The Devowise team working together in the studio"
                    className="h-[320px] w-full object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.05] md:h-[430px]"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 bg-ink/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                    The studio — remote-first, 5 time zones
                  </span>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="absolute -bottom-10 -left-4 hidden w-[46%] overflow-hidden border-4 border-ink sm:block lg:-left-8">
                  <img
                    src="https://images.pexels.com/photos/12899149/pexels-photo-12899149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="Senior engineer reviewing a production build"
                    className="h-56 w-full object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              {/* rotating badge */}
              <div className="absolute -right-5 -top-8 hidden h-28 w-28 md:block">
                <svg viewBox="0 0 100 100" className="spin-slow h-full w-full text-paper" aria-hidden>
                  <defs>
                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="10.5" fill="currentColor" fontFamily="JetBrains Mono, monospace" letterSpacing="2.5">
                    <textPath href="#circlePath">BUILD · SHIP · SCALE · REPEAT ·</textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 m-auto h-3 w-3 bg-accent" aria-hidden />
              </div>
            </div>
            <p className="mt-16 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-fog sm:text-left lg:mt-10">
              Avg. team tenure: 6+ years · 0 juniors on your build
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const QUOTES = [
  {
    text: "They scoped our rebuild in a week and shipped a better version than the agency that quoted us six months earlier. The weekly demos made the board meetings painless.",
    name: "Maya Lindqvist",
    role: "VP Product, Halcyon Health",
  },
  {
    text: "Our AI intake layer handles 40% of dispatch volume with 99%+ accuracy. Devowise treated our operations like their own product — that's rarer than it should be.",
    name: "Daniel Okafor",
    role: "COO, Brightline Logistics",
  },
  {
    text: "Sprints from $6k, delivered like a $60k engagement. They told us what not to build, which is why we got our funding demo ready on time.",
    name: "Sofia Marchetti",
    role: "Founder, Ledgerly",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 6500);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const q = QUOTES[index];

  return (
    <section className="border-b border-line bg-paper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-28 lg:px-10">
        <SectionHead
          eyebrow="Client words"
          title={
            <>
              Because your success
              <br />
              is our <span className="text-accent">story.</span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.2em] text-mute lg:col-span-3">
            <span>
              {String(index + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setIndex((index - 1 + QUOTES.length) % QUOTES.length)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={() => setIndex((index + 1) % QUOTES.length)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-9">
            <QuoteMark className="h-9 w-9 text-accent" />
            <blockquote key={index} className="quote-in mt-6">
              <p className="max-w-4xl font-display text-2xl font-medium leading-[1.25] tracking-[-0.01em] text-ink md:text-[2rem]">
                “{q.text}”
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-accent" aria-hidden />
                <div>
                  <p className="font-display text-base font-semibold text-ink">{q.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">{q.role}</p>
                </div>
              </footer>
            </blockquote>

            {/* progress dots */}
            <div className="mt-10 flex gap-2">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn("h-1 transition-all duration-500", i === index ? "w-12 bg-accent" : "w-6 bg-line hover:bg-mute")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
