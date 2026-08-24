import { SectionHead, Reveal } from "../components/ui";
import { ArrowUpRight, ArrowRight } from "../components/icons";

/* ------- crafted SVG thumbnails (no stock, fully original) ------- */

function ThumbDashboard() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="640" height="400" fill="#e7e4da" />
      <rect x="40" y="36" width="560" height="328" fill="#f4f3ee" stroke="#d8d5ca" />
      <circle cx="66" cy="62" r="5" fill="#d8d5ca" />
      <circle cx="84" cy="62" r="5" fill="#d8d5ca" />
      <circle cx="102" cy="62" r="5" fill="#ff5a1f" />
      <rect x="40" y="80" width="150" height="284" fill="#0c0e12" />
      <rect x="58" y="104" width="100" height="10" rx="2" fill="#9aa0ab" />
      <rect x="58" y="130" width="80" height="8" rx="2" fill="#262b35" />
      <rect x="58" y="150" width="92" height="8" rx="2" fill="#262b35" />
      <rect x="58" y="170" width="70" height="8" rx="2" fill="#ff5a1f" />
      <rect x="210" y="104" width="180" height="90" fill="#12151c" />
      <rect x="232" y="126" width="90" height="9" rx="2" fill="#9aa0ab" />
      <text x="232" y="172" fontFamily="Space Grotesk" fontWeight="700" fontSize="34" fill="#f4f3ee">+38%</text>
      <rect x="410" y="104" width="170" height="90" fill="#f4f3ee" stroke="#d8d5ca" />
      <rect x="428" y="126" width="80" height="9" rx="2" fill="#d8d5ca" />
      <rect x="428" y="152" width="134" height="6" rx="2" fill="#d8d5ca" />
      <rect x="428" y="168" width="110" height="6" rx="2" fill="#d8d5ca" />
      <rect x="210" y="214" width="370" height="150" fill="#f4f3ee" stroke="#d8d5ca" />
      <polyline
        points="232,336 280,318 328,326 376,286 424,298 472,252 520,262 558,230"
        fill="none"
        stroke="#ff5a1f"
        strokeWidth="4"
      />
      <circle cx="558" cy="230" r="6" fill="#ff5a1f" />
      <polyline points="232,344 280,338 328,340 376,322 424,328 472,308 520,312 558,296" fill="none" stroke="#0c0e12" strokeWidth="2" opacity="0.35" />
    </svg>
  );
}

function ThumbPipeline() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="640" height="400" fill="#0c0e12" />
      <g stroke="#262b35" strokeWidth="1.5">
        <line x1="140" y1="150" x2="320" y2="200" />
        <line x1="320" y1="200" x2="500" y2="140" />
        <line x1="320" y1="200" x2="470" y2="300" />
        <line x1="140" y1="150" x2="180" y2="290" />
        <line x1="180" y1="290" x2="470" y2="300" />
      </g>
      <circle cx="140" cy="150" r="26" fill="#12151c" stroke="#9aa0ab" strokeWidth="2" />
      <circle cx="320" cy="200" r="34" fill="#ff5a1f" />
      <circle cx="500" cy="140" r="26" fill="#12151c" stroke="#9aa0ab" strokeWidth="2" />
      <circle cx="470" cy="300" r="22" fill="#12151c" stroke="#9aa0ab" strokeWidth="2" />
      <circle cx="180" cy="290" r="22" fill="#12151c" stroke="#9aa0ab" strokeWidth="2" />
      <text x="320" y="207" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="600" fontSize="15" fill="#fff">AI</text>
      <g fontFamily="JetBrains Mono" fontSize="11" fill="#9aa0ab">
        <text x="140" y="110" textAnchor="middle">INTAKE</text>
        <text x="500" y="100" textAnchor="middle">ROUTING</text>
        <text x="470" y="345" textAnchor="middle">DRAFT</text>
        <text x="180" y="335" textAnchor="middle">ENRICH</text>
      </g>
      <text x="40" y="370" fontFamily="JetBrains Mono" fontSize="12" fill="#5b6069">12,000 hrs/yr manual work removed</text>
    </svg>
  );
}

function ThumbLedger() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="640" height="400" fill="#e7e4da" />
      <rect x="60" y="40" width="520" height="320" fill="#0c0e12" />
      <g fontFamily="JetBrains Mono" fontSize="12">
        <text x="90" y="86" fill="#9aa0ab">ACCT</text>
        <text x="230" y="86" fill="#9aa0ab">STATUS</text>
        <text x="420" y="86" fill="#9aa0ab">AMOUNT</text>
      </g>
      <line x1="90" y1="100" x2="550" y2="100" stroke="#262b35" />
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i}>
          <line x1="90" y1={148 + i * 24} x2="550" y2={148 + i * 24} stroke="#1c212b" />
          <rect x="90" y={132 + i * 24} width={40 + ((i * 37) % 40)} height="8" rx="2" fill={i === 3 ? "#ff5a1f" : "#262b35"} />
          <rect x="230" y={132 + i * 24} width="54" height="8" rx="2" fill={i % 3 === 0 ? "#ff8a5c" : "#3a4150"} />
          <rect x="420" y={132 + i * 24} width={70 - ((i * 13) % 30)} height="8" rx="2" fill="#3a4150" />
        </g>
      ))}
      <rect x="90" y="330" width="200" height="30" fill="#12151c" stroke="#262b35" />
      <text x="104" y="350" fontFamily="JetBrains Mono" fontSize="12" fill="#f4f3ee">1,048,226 rows · 184ms</text>
    </svg>
  );
}

const CASES = [
  {
    thumb: ThumbDashboard,
    client: "Halcyon Health",
    year: "2025",
    title: "SaaS onboarding & billing revamp that patients and ops both noticed",
    metrics: ["+38% activation", "−42% support load", "6-week sprint"],
    stack: ["Next.js", "Stripe", "Postgres", "shadcn/ui"],
    featured: true,
  },
  {
    thumb: ThumbPipeline,
    client: "Brightline Logistics",
    year: "2025",
    title: "AI intake & routing layer across 9 dispatch hubs",
    metrics: ["12,000 hrs/yr saved", "99.2% routing accuracy"],
    stack: ["FastAPI", "OpenAI", "Pinecone", "Kafka"],
    featured: false,
  },
  {
    thumb: ThumbLedger,
    client: "Ledgerly",
    year: "2024",
    title: "Fintech operations dashboard — a million rows, no spinner",
    metrics: ["1M+ rows @ <200ms", "4.1× faster reconciliation"],
    stack: ["React", "ClickHouse", "Rust", "K8s"],
    featured: false,
  },
];

const INSIGHTS = [
  {
    tag: "Blog",
    date: "Feb 2026",
    read: "8 min",
    title: "RAG is table stakes. Evaluation is the moat.",
    desc: "Why every AI build we ship ships with an eval suite — and what breaks when you skip it.",
  },
  {
    tag: "Case notes",
    date: "Jan 2026",
    read: "11 min",
    title: "A 6-week sprint that replaced a 6-month roadmap",
    desc: "How scoping to the smallest provable build got Halcyon to +38% activation faster.",
  },
];

export function Work() {
  const FeaturedThumb = CASES[0].thumb;
  return (
    <section id="work" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          eyebrow="Featured Work & Insights"
          title={
            <>
              Stories of transformations,
              <br />
              from concept to <span className="outline-text">completion.</span>
            </>
          }
          copy="A cross-section of recent engagements — the problem, the build, and the number that moved."
          right={
            <a href="#contact" className="link-sweep inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
              Request the full deck
            </a>
          }
        />

        {/* featured case */}
        <Reveal>
          <a href="#contact" className="group grid overflow-hidden border border-line bg-paper2/40 transition-colors duration-500 hover:border-ink lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <FeaturedThumb />
              </div>
              <span className="absolute left-5 top-5 bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper">
                Featured case
              </span>
            </div>
            <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-5 lg:p-10">
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                  <span>{CASES[0].client}</span>
                  <span>{CASES[0].year}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                  {CASES[0].title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {CASES[0].metrics.map((m) => (
                    <span key={m} className="border border-accent/50 bg-accent/10 px-3 py-1 font-mono text-[11px] font-medium tracking-[0.06em] text-ink">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-mute">{CASES[0].stack.join(" · ")}</p>
                <span className="flex h-11 w-11 items-center justify-center border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        {/* secondary cases */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {CASES.slice(1).map((c, i) => (
            <Reveal key={c.client} delay={i * 100} className="h-full">
              <a href="#contact" className="group flex h-full flex-col overflow-hidden border border-line bg-paper2/40 transition-colors duration-500 hover:border-ink">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <c.thumb />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                      <span>{c.client}</span>
                      <span>{c.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                      {c.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.metrics.map((m) => (
                      <span key={m} className="border border-line bg-paper px-3 py-1 font-mono text-[11px] tracking-[0.06em] text-ink transition-colors duration-300 group-hover:border-accent/60">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* insights */}
        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {INSIGHTS.map((ins, i) => (
            <Reveal key={ins.title} delay={i * 90} className="h-full">
              <article className="group flex h-full flex-col justify-between gap-8 bg-paper p-8 transition-colors duration-500 hover:bg-paper2/70">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                    <span className="bg-ink px-2.5 py-1 text-paper">{ins.tag}</span>
                    <span>{ins.date}</span>
                    <span>·</span>
                    <span>{ins.read}</span>
                  </div>
                  <h3 className="mt-5 max-w-md font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
                    {ins.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mute">{ins.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                  Read
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
