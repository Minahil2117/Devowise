import { SectionHead, Reveal } from "../components/ui";
import {
  GlyphSaaS,
  GlyphFintech,
  GlyphHealth,
  GlyphLogistics,
  GlyphCommerce,
  GlyphAI,
  Seal,
  ArrowUpRight,
} from "../components/icons";

const INDUSTRIES = [
  {
    glyph: GlyphSaaS,
    name: "SaaS & Software",
    desc: "Onboarding, billing, dashboards and platforms that need to feel effortless at 10x users.",
  },
  {
    glyph: GlyphFintech,
    name: "Fintech & Payments",
    desc: "Compliance-aware products: ledgers, lending ops, KYC flows and sub-second dashboards.",
  },
  {
    glyph: GlyphHealth,
    name: "Health & Life Sciences",
    desc: "Clinician tools, patient portals and data platforms built to clinical-grade review.",
  },
  {
    glyph: GlyphLogistics,
    name: "Logistics & Mobility",
    desc: "Dispatch, routing and tracking systems that keep moving when the network doesn’t.",
  },
  {
    glyph: GlyphCommerce,
    name: "E-commerce & Retail",
    desc: "Shopify Plus and headless storefronts engineered for conversion and speed.",
  },
  {
    glyph: GlyphAI,
    name: "AI-Native Startups",
    desc: "From zero to production: the product, the model layer and the infra — one team.",
  },
];

const PARTNERS = [
  { letters: "AWS", name: "Amazon Web Services", sub: "Certified · Professional" },
  { letters: "GC", name: "Google Cloud", sub: "Technology Partner" },
  { letters: "MS", name: "Microsoft", sub: "Solutions Partner" },
  { letters: "SH", name: "Shopify", sub: "Plus Partner" },
  { letters: "ST", name: "Stripe", sub: "Technology Provider" },
  { letters: "VC", name: "Vercel", sub: "Certified Expert" },
];

export function Industries() {
  return (
    <section id="industries" className="grid-lines-dark relative border-b border-linedark bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          tone="dark"
          eyebrow="Industries"
          title={
            <>
              Impact across the industries
              <br className="hidden md:block" /> we <span className="text-accent">actually serve.</span>
            </>
          }
          copy="We go narrow on purpose. Deep context in each vertical means fewer meetings, better questions and software that speaks your domain."
        />

        <div className="grid gap-px border border-linedark bg-linedark sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 70} className="h-full">
              <a
                href="#contact"
                className="group flex h-full flex-col justify-between gap-10 bg-ink p-7 transition-colors duration-500 hover:bg-ink2 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <ind.glyph className="h-8 w-8 text-fog transition-all duration-500 group-hover:text-accent" />
                  <ArrowUpRight className="h-5 w-5 text-fog/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent2">
                    {ind.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fog">{ind.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-mute">
                <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" aria-hidden />
                Partnerships &amp; Certifications
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-4xl">
                Officially certified across the tools we ship with.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-sm text-[15px] leading-relaxed text-mute">
              Recognized partners and experts across the leading product, design, cloud and AI platforms.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 60} className="h-full">
              <div className="group flex h-full flex-col items-center gap-3 bg-paper px-4 py-8 text-center transition-colors duration-500 hover:bg-ink hover:text-paper">
                <Seal letters={p.letters} className="h-12 w-12 text-mute transition-colors duration-500 group-hover:text-accent" />
                <div>
                  <p className="font-display text-[15px] font-semibold tracking-tight">{p.name}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mute group-hover:text-fog">{p.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
