import { Eyebrow, Reveal } from "../components/ui";
import { ArrowUpRight } from "../components/icons";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    copy: "Product strategy, technical scoping, and success metrics. We interview your users and your data before we touch a framework. If the cheap answer is a spreadsheet, we tell you.",
    meta: ["Days 0–7", "Scope + milestone plan"],
  },
  {
    n: "02",
    title: "Design",
    copy: "Design systems and interfaces engineered for scale — tokens, states, motion specs, and flows your team can actually maintain after we leave.",
    meta: ["Weeks 1–3", "UI kit + interactive flows"],
  },
  {
    n: "03",
    title: "Build",
    copy: "Production software on modern, tested foundations. Weekly demos, a shared board, and code you can read — no black boxes, no held-back repositories.",
    meta: ["Weeks 2–8", "Weekly demos + shared board"],
  },
  {
    n: "04",
    title: "Scale",
    copy: "We iterate on data, not opinions. Performance budgets, observability, and growth experiments that compound revenue after launch day.",
    meta: ["Ongoing", "CRO + observability"],
  },
];

export function Process() {
  return (
    <section id="process" className="grid-lines relative border-b border-line bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* sticky left */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Process</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink md:text-5xl">
                  A structured pipeline, <br className="hidden md:block" />
                  not a <span className="outline-text">pitch deck.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-mute md:text-lg">
                  Four phases, one shared board, zero ceremony. You see working software every week from day
                  eight — not a status PDF at the end of month two.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-col gap-3 border-l-2 border-accent pl-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">The Devowise standard</p>
                  <p className="text-[15px] leading-relaxed text-ink/85">
                    Principal-led engagement · weekly demo · milestone plan signed before kickoff.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <a
                  href="#contact"
                  className="group mt-9 inline-flex items-center gap-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink"
                >
                  <span className="link-sweep">Start with discovery</span>
                  <span className="flex h-10 w-10 items-center justify-center border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          {/* steps */}
          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 90}>
                  <div className="group grid gap-6 border-b border-line py-10 transition-colors duration-500 hover:bg-paper2/50 md:grid-cols-[130px_1fr] md:gap-10 md:py-12">
                    <span className="outline-text font-display text-6xl font-bold leading-none transition-all duration-500 group-hover:text-accent md:text-7xl">
                      {step.n}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                          {step.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {step.meta.map((m) => (
                            <span key={m} className="border border-line bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mute transition-colors duration-300 group-hover:border-accent/50">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mute md:text-base">{step.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
