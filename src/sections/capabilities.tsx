import { useState } from "react";
import { cn } from "../utils/cn";
import { SectionHead, Reveal } from "../components/ui";
import { Plus } from "../components/icons";

const CAPABILITIES = [
  {
    title: "Web & SaaS Engineering",
    tagline: "Design-led engineering for platforms that hold up in production.",
    bullets: [
      "Web applications, portals & customer dashboards",
      "Design systems & component libraries",
      "E-commerce builds on Shopify Plus & headless stacks",
      "Performance engineering — Core Web Vitals in the green",
      "Third-party integrations: Stripe, Auth0, Algolia, Twilio",
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Postgres"],
  },
  {
    title: "AI Systems & Automation",
    tagline: "Practical AI infrastructure — not demos. Piped, evaluated, monitored.",
    bullets: [
      "LLM apps & copilots on OpenAI, Anthropic & open models",
      "RAG pipelines with Pinecone & vector search",
      "Agentic workflows that route, draft and reconcile",
      "Evaluation suites, guardrails & observability",
      "Internal automation: intake, ops, support deflection",
    ],
    tags: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "FastAPI"],
  },
  {
    title: "Mobile Engineering",
    tagline: "Native-feel apps from a single senior codebase.",
    bullets: [
      "Cross-platform builds with React Native & Expo",
      "Flutter & native Swift / Kotlin when it earns its cost",
      "Offline-first sync & push infrastructure",
      "Store launch, release trains & crash monitoring",
    ],
    tags: ["React Native", "Expo", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Product Design & Design Systems",
    tagline: "Interfaces engineered for scale, documented for handoff.",
    bullets: [
      "UX research, flows & rapid prototyping in Figma",
      "Token-based design systems with motion specs",
      "Design-to-code parity audits with shadcn & Radix",
      "Conversion-focused onboarding & marketing sites",
    ],
    tags: ["Figma", "shadcn/ui", "Radix", "GSAP", "Lottie"],
  },
  {
    title: "Cloud & DevOps",
    tagline: "Infrastructure that ships with the product, not after it.",
    bullets: [
      "AWS & GCP architecture, IAM & cost guardrails",
      "Docker, Kubernetes & CI/CD pipelines",
      "Edge delivery with Vercel & Cloudflare",
      "Observability: Sentry, PostHog, structured logs",
    ],
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "Cloudflare"],
  },
  {
    title: "Strategy & Discovery",
    tagline: "Sharp scope before a line of code is written.",
    bullets: [
      "Product strategy & technical scoping sprints",
      "Success metrics & milestone planning",
      "Legacy audits & migration roadmaps",
      "Team augmentation & engineering hiring input",
    ],
    tags: ["Discovery", "Roadmaps", "Audits", "Scoping"],
  },
];

export function Capabilities() {
  const [open, setOpen] = useState(0);

  return (
    <section id="capabilities" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          eyebrow="Capabilities"
          title={
            <>
              Everything needed to <span className="outline-text">ship a serious product.</span>
            </>
          }
          copy="Six practices, one senior team. Most engagements combine them — discovery in week one, design and build running in parallel, ops wired from day one."
          right={
            <a href="#contact" className="link-sweep inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">
              Scope a build with us
            </a>
          }
        />

        <div className="border-t border-line">
          {CAPABILITIES.map((cap, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:gap-8 md:py-7"
                  >
                    <span
                      className={cn(
                        "font-mono text-[12px] tracking-[0.16em] transition-colors duration-300",
                        isOpen ? "text-accent" : "text-mute group-hover:text-accent"
                      )}
                    >
                      0{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block font-display text-2xl font-semibold tracking-tight transition-all duration-300 md:text-[2rem]",
                          isOpen ? "text-accent" : "text-ink group-hover:translate-x-2"
                        )}
                      >
                        {cap.title}
                      </span>
                      <span className="mt-1 hidden text-[15px] text-mute md:block">{cap.tagline}</span>
                    </span>
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-500",
                        isOpen
                          ? "rotate-45 border-accent bg-accent text-white"
                          : "border-line text-ink group-hover:border-ink"
                      )}
                    >
                      <Plus />
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-8 pl-[calc(2rem+1rem)] pr-2 md:grid-cols-2 md:pl-[calc(2rem+2rem)]">
                        <ul className="space-y-3">
                          {cap.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-[15px] leading-snug text-ink/85">
                              <span className="mt-[9px] h-1 w-4 shrink-0 bg-accent" aria-hidden />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap content-start items-start gap-2">
                          {cap.tags.map((t) => (
                            <span
                              key={t}
                              className="border border-line bg-paper2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-mute transition-colors duration-300 hover:border-accent hover:text-accent"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
