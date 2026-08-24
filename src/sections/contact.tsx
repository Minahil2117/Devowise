import { FormEvent, useState } from "react";
import { Reveal } from "../components/ui";
import { Logo, ArrowUpRight, Check } from "../components/icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="grid-lines-dark relative overflow-hidden border-b border-linedark bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* left: pitch */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-fog">
                <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" aria-hidden />
                Let’s talk business
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-semibold leading-[0.98] tracking-[-0.03em] text-paper [font-size:clamp(2.6rem,6.5vw,5rem)]">
                Let’s build
                <br />
                something{" "}
                <span className="outline-text-paper">exceptional.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-fog md:text-lg">
                Have an idea or a product? We help turn it into a scalable digital system. Tell us what you’re
                building — we’ll reply within one business day.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 space-y-4 font-mono text-[12px] uppercase tracking-[0.16em]">
                <a href="mailto:hello@devowise.com" className="group flex w-fit items-center gap-3 text-paper transition-colors hover:text-accent">
                  <span className="h-px w-8 bg-accent transition-all duration-300 group-hover:w-12" aria-hidden />
                  hello@devowise.com
                </a>
                <p className="flex items-center gap-3 text-fog">
                  <span className="h-px w-8 bg-linedark" aria-hidden />
                  Remote-first · worldwide
                </p>
                <p className="flex items-center gap-3 text-fog">
                  <span className="h-px w-8 bg-linedark" aria-hidden />
                  Proposals within 72 hours
                </p>
              </div>
            </Reveal>
          </div>

          {/* right: form */}
          <div className="lg:col-span-6">
            <Reveal delay={140}>
              <div className="relative border border-linedark bg-ink2/70 p-8 md:p-10">
                <span className="absolute -top-px left-8 h-[3px] w-16 bg-accent" aria-hidden />
                {sent ? (
                  <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                    <span className="flex h-16 w-16 items-center justify-center border border-accent text-accent">
                      <Check className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">Message received.</h3>
                    <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-fog">
                      Thanks — a principal (not a bot) will reply within one business day.
                    </p>
                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                      In a hurry? hello@devowise.com
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-7">
                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Name</span>
                        <input required name="name" placeholder="Ada Lovelace" className="field-dark" />
                      </label>
                      <label className="block">
                        <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Work email</span>
                        <input required type="email" name="email" placeholder="ada@company.com" className="field-dark" />
                      </label>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Company</span>
                        <input name="company" placeholder="Company / startup" className="field-dark" />
                      </label>
                      <label className="block">
                        <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-fog">Engagement</span>
                        <select name="type" className="field-dark appearance-none">
                          <option className="bg-ink">Sprint (2–4 weeks)</option>
                          <option className="bg-ink">Partnership (1–3 months)</option>
                          <option className="bg-ink">Retainer (ongoing)</option>
                          <option className="bg-ink">Not sure yet</option>
                        </select>
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-fog">What are you building?</span>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="The problem, the users, and what success looks like…"
                        className="field-dark resize-none"
                      />
                    </label>
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 bg-accent px-6 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-paper hover:text-ink"
                    >
                      Send — get a reply in 24h
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                      No newsletters. No drip campaigns. Just a reply.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

const FOOT_LINKS = {
  Services: ["Web & SaaS Engineering", "AI Systems & Automation", "Mobile Engineering", "Product Design", "Cloud & DevOps"],
  Company: ["About the studio", "Industries", "Work & case studies", "Careers", "Partnerships"],
  Resources: ["Process", "Tech stack", "Insights & notes", "FAQ", "Get in touch"],
};

const ANCHORS: Record<string, string> = {
  "Web & SaaS Engineering": "#capabilities",
  "AI Systems & Automation": "#capabilities",
  "Mobile Engineering": "#capabilities",
  "Product Design": "#capabilities",
  "Cloud & DevOps": "#capabilities",
  "About the studio": "#studio",
  "Industries": "#industries",
  "Work & case studies": "#work",
  "Careers": "#studio",
  "Partnerships": "#certifications",
  Process: "#process",
  "Tech stack": "#stack",
  "Insights & notes": "#work",
  FAQ: "#faq",
  "Get in touch": "#contact",
};

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" aria-label="Back to top">
              <Logo dark />
            </a>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-fog">
              A product and design studio crafting SaaS, AI systems and high-performance web experiences.
              Because your success is our story.
            </p>
            <p className="mt-7 inline-flex items-center gap-2.5 border border-linedark px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden />
              Booking new projects — Q3 2026
            </p>
          </div>

          {Object.entries(FOOT_LINKS).map(([group, links]) => (
            <nav key={group} aria-label={group} className="lg:col-span-2">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">{group}</p>
              <ul className="mt-5 space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href={ANCHORS[l] ?? "#top"} className="link-sweep text-[14px] text-paper/80 transition-colors hover:text-accent">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-linedark pt-7 font-mono text-[11px] uppercase tracking-[0.16em] text-mute md:flex-row md:items-center">
          <p>© 2026 Devowise Studio · All rights reserved</p>
          <p className="flex items-center gap-2">
            <span className="text-accent">■</span> Concept redesign · built in-house with React + Tailwind
          </p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-accent">Privacy</a>
            <a href="#top" className="transition-colors hover:text-accent">Terms</a>
            <a href="#top" className="transition-colors hover:text-accent">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
