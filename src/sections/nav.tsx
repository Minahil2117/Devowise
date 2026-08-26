import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { Logo, ArrowUpRight } from "../components/icons";

const LINKS = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Stack", href: "/stack" },
  { label: "Process", href: "/process" },
  { label: "Studio", href: "/studio" },
];

export function TopBar() {
  return (
    <div className="hidden border-b border-linedark bg-ink text-paper/80 md:block">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
          Senior product &amp; AI studio <span className="mx-2 text-fog/50">/</span> remote-first, worldwide
        </p>
        <div className="flex items-center gap-6 font-mono text-[11px] lowercase tracking-[0.18em]">
          <a href="mailto:hello@devowise.com" className="link-sweep transition-colors hover:text-accent">
            contact@devowise.com
          </a>
          <span className="text-fog/40">·</span>
          <Link to="/contact" className="group inline-flex items-center gap-1.5 text-accent">
            Let’s talk business
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        open
          ? "border-transparent bg-transparent"
          : scrolled
            ? "border-line bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-paper"
      )}
    >
      {/* scroll progress */}
      <div
        className="absolute left-0 top-0 h-[2.5px] bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" aria-label="Devowise home" className={cn("transition-colors", open && "text-paper")}>
          <Logo dark={open} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="link-sweep font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-mute transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center gap-2.5 bg-ink px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-accent sm:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-1.5 border transition-colors lg:hidden",
              open ? "border-paper/40 text-paper" : "border-line text-ink"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={cn("h-px w-5 bg-current transition-transform duration-300", open && "translate-y-[3.5px] rotate-45")} />
            <span className={cn("h-px w-5 bg-current transition-transform duration-300", open && "-translate-y-[3.5px] -rotate-45")} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[5] flex flex-col bg-ink text-paper transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex flex-1 flex-col justify-center gap-2 px-8">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "group flex items-baseline gap-4 border-b border-linedark py-4 transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
              <span className="font-display text-3xl font-semibold tracking-tight group-hover:text-accent">
                {l.label}
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="group mt-8 inline-flex w-fit items-center gap-3 bg-accent px-6 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex items-center justify-between px-8 pb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
          <span>hello@devowise.com</span>
          <span>Remote-first</span>
        </div>
      </div>
    </header>
  );
}