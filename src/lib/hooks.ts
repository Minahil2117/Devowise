import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(threshold = 0.15, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return { ref, inView };
}

const GLYPHS = "█▓▒░<>/\\{}[]=+*#";

export function useScramble(text: string, start: boolean, speed = 28) {
  const reduced = usePrefersReducedMotion();
  const [output, setOutput] = useState(reduced ? text : "");
  const done = useRef(false);

  useEffect(() => {
    if (!start || done.current) return;
    if (reduced) {
      setOutput(text);
      done.current = true;
      return;
    }
    done.current = true;
    let frame = 0;
    const total = text.length;
    const id = window.setInterval(() => {
      frame += 1;
      const resolved = Math.floor(frame / 2.2);
      let out = "";
      for (let i = 0; i < total; i++) {
        if (i < resolved) out += text[i];
        else if (text[i] === " " || text[i] === "·" || text[i] === "—") out += text[i];
        else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOutput(out);
      if (resolved >= total) {
        setOutput(text);
        window.clearInterval(id);
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [start, text, speed, reduced]);

  return output;
}
