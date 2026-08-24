import { cn } from "../utils/cn";
import { SectionHead, Reveal, Marquee } from "../components/ui";

const ROWS: { label: string; items: string[]; reverse?: boolean; speed: number }[] = [
  {
    label: "Frontend",
    speed: 46,
    items: ["React", "Next.js", "TypeScript", "Vue", "Svelte", "Astro", "Tailwind", "GSAP", "Three.js", "Storybook"],
  },
  {
    label: "Backend & APIs",
    speed: 54,
    reverse: true,
    items: ["Node.js", "NestJS", "Python", "Django", "FastAPI", "Rust", "Go", "GraphQL", "Prisma", "Redis"],
  },
  {
    label: "Mobile",
    speed: 42,
    items: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "App Store", "Play Store"],
  },
  {
    label: "Data & AI",
    speed: 50,
    reverse: true,
    items: ["OpenAI", "Anthropic", "LangChain", "Hugging Face", "Pinecone", "Postgres", "MongoDB", "ClickHouse", "Airflow"],
  },
  {
    label: "Platform & Ops",
    speed: 58,
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel", "Cloudflare", "Sentry", "PostHog"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="grid-lines-dark relative overflow-hidden border-b border-linedark bg-ink2 text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-28 lg:px-10">
        <SectionHead
          tone="dark"
          eyebrow="Technology Stack"
          title={
            <>
              Modern tools we ship with,
              <br />
              <span className="outline-text-paper">every day.</span>
            </>
          }
          copy="A cross-section of the frameworks, platforms and services powering our web, mobile and AI builds. Boring where it should be, sharp where it counts."
        />
      </div>

      <div className="space-y-0">
        {ROWS.map((row, i) => (
          <Reveal key={row.label} delay={i * 60}>
            <div className={cn("group flex flex-col md:flex-row md:items-center", i !== ROWS.length - 1 && "border-b border-linedark")}>
              <div className="flex shrink-0 items-center gap-3 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.22em] text-fog md:w-52 md:py-6 lg:px-10">
                <span className="text-accent">0{i + 1}</span>
                {row.label}
              </div>
              <div className="flex-1 border-t border-linedark py-4 md:border-t-0">
                <Marquee speed={row.speed} reverse={row.reverse}>
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="mx-2.5 inline-flex shrink-0 items-center gap-2 border border-linedark px-4 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-paper/80 transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      <span className="h-1 w-1 bg-accent" aria-hidden />
                      {item}
                    </span>
                  ))}
                </Marquee>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
          60+ tools · opinionated about fewer
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
          Default: <span className="text-paper">TypeScript · Postgres · Edge</span>
        </p>
      </div>
    </section>
  );
}
