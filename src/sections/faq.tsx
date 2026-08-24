import { useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, Reveal } from "../components/ui";
import { Plus, ArrowUpRight } from "../components/icons";

const FAQS = [
  {
    q: "How fast can we ship?",
    a: "Sprints ship in 2–4 weeks. Full product engagements run 4–12 weeks depending on scope. You get a milestone plan signed before kickoff, and working software demoed every week from week two.",
  },
  {
    q: "What does an engagement cost?",
    a: "Sprints start at $6k. Full builds typically range $15k–$60k. Retainers are monthly. We scope pricing after a 30-minute discovery call — no estimates thrown into a vacuum.",
  },
  {
    q: "Do you work with early-stage teams?",
    a: "Yes — a good portion of our work is with pre-seed to Series A teams. We help sharpen scope so you spend the least amount to prove the most. If an MVP needs three features, we'll tell you to build one.",
  },
  {
    q: "What's your default stack?",
    a: "React / Next.js / TanStack, TypeScript, Postgres, edge runtimes, and modern AI infrastructure (OpenAI, Anthropic, vector DBs). Framer & Webflow for marketing sites. We're opinionated, but we match your existing stack when it's sound.",
  },
  {
    q: "Who owns the code?",
    a: "You do. All source code, designs and IP transfer to you at project close. We keep no rights beyond a portfolio credit — and we skip even that if you prefer.",
  },
  {
    q: "How do we get started?",
    a: "Book a 30-minute call. We'll align on the problem, scope and next steps. If there's a fit, you'll have a proposal in your inbox within 72 hours.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>FAQ</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink md:text-5xl">
                  Questions, <br />
                  <span className="outline-text">answered.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-mute">
                  Something else on your mind? The fastest way to a straight answer is the call.
                </p>
                <a
                  href="#contact"
                  className="group mt-6 inline-flex items-center gap-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink"
                >
                  <span className="link-sweep">Ask us directly</span>
                  <span className="flex h-10 w-10 items-center justify-center border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 50}>
                    <div className="border-b border-line">
                      <button
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className={cn("font-mono text-[11px] tracking-[0.14em]", isOpen ? "text-accent" : "text-mute")}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "font-display text-lg font-semibold tracking-tight transition-colors duration-300 md:text-xl",
                              isOpen ? "text-accent" : "text-ink group-hover:text-accent"
                            )}
                          >
                            {f.q}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-500",
                            isOpen ? "rotate-45 border-accent bg-accent text-white" : "border-line text-ink group-hover:border-ink"
                          )}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-2xl pb-7 pl-9 pr-4 text-[15px] leading-relaxed text-mute md:pl-12">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
