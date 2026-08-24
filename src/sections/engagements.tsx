import { cn } from "../utils/cn";
import { SectionHead, Reveal } from "../components/ui";
import { Check, ArrowUpRight } from "../components/icons";

const MODELS = [
  {
    name: "Sprint",
    duration: "2–4 weeks",
    price: "From $6k",
    copy: "Focused build for a landing page, MVP feature, or AI prototype. Fixed scope, fast turnaround, shipped to production.",
    includes: ["Fixed scope & fixed price", "One principal + one senior builder", "Shipped + documented", "30-day support window"],
    featured: false,
  },
  {
    name: "Partnership",
    duration: "1–3 months",
    price: "Project-based",
    copy: "Full product engagements: discovery, design system, app build, launch. Weekly demos, shared Linear, principal-led throughout.",
    includes: ["Discovery sprint included", "Design + build in parallel", "Weekly demo + shared board", "Launch & handoff playbook", "90-day iteration window"],
    featured: true,
  },
  {
    name: "Retainer",
    duration: "Ongoing",
    price: "Monthly",
    copy: "Embedded senior capacity for iteration, growth and scaling. Your product team, minus the hiring quarter.",
    includes: ["Dedicated senior capacity", "Roadmap co-ownership", "On-call for production issues", "Quarterly strategy reviews"],
    featured: false,
  },
];

export function Engagements() {
  return (
    <section id="engagements" className="border-b border-line bg-paper2">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          eyebrow="Engagements"
          title={
            <>
              Three ways to engage.
              <br />
              All senior, all <span className="text-accent">shipping.</span>
            </>
          }
          copy="Pick the shape that matches your stage. Every engagement is principal-led with weekly demos and a shared board."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {MODELS.map((m, i) => (
            <Reveal key={m.name} delay={i * 110} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col gap-6 border p-8 transition-all duration-500 hover:-translate-y-2",
                  m.featured
                    ? "border-ink bg-ink text-paper shadow-[10px_10px_0_0_rgba(255,90,31,1)]"
                    : "border-line bg-paper hover:border-ink hover:shadow-[10px_10px_0_0_rgba(12,14,18,0.12)]"
                )}
              >
                {m.featured && (
                  <span className="absolute -top-3.5 left-8 bg-accent px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    Most teams start here
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-3xl font-semibold tracking-tight">{m.name}</h3>
                  <span className={cn("font-mono text-[11px] uppercase tracking-[0.16em]", m.featured ? "text-fog" : "text-mute")}>
                    {m.duration}
                  </span>
                </div>
                <p className={cn("text-[15px] leading-relaxed", m.featured ? "text-fog" : "text-mute")}>{m.copy}</p>
                <ul className={cn("space-y-3 border-t pt-6", m.featured ? "border-linedark" : "border-line")}>
                  {m.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-[14px] leading-snug">
                      <Check className={cn("mt-0.5 h-4 w-4 shrink-0", m.featured ? "text-accent" : "text-ink")} />
                      <span className={m.featured ? "text-paper/90" : "text-ink/85"}>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between border-t pt-6" style={{ borderColor: m.featured ? "var(--color-linedark)" : "var(--color-line)" }}>
                  <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em]">{m.price}</span>
                  <a
                    href="#contact"
                    className={cn(
                      "group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]",
                      m.featured ? "text-accent" : "text-ink"
                    )}
                  >
                    <span className="link-sweep">Scope this</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center font-mono text-[12px] uppercase tracking-[0.18em] text-mute">
            Sprints start at <span className="text-ink">$6k</span> · full builds typically <span className="text-ink">$15k–$60k</span> · scoped after a discovery call
          </p>
        </Reveal>
      </div>
    </section>
  );
}
