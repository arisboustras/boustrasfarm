"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
}

const variants: Record<Variant, { from: string; to: string }> = {
  "fade-up": { from: "opacity-0 translate-y-12", to: "opacity-100 translate-y-0" },
  "fade-in": { from: "opacity-0", to: "opacity-100" },
  "slide-left": { from: "opacity-0 translate-x-12", to: "opacity-100 translate-x-0" },
  "slide-right": { from: "opacity-0 -translate-x-12", to: "opacity-100 translate-x-0" },
  scale: { from: "opacity-0 scale-95", to: "opacity-100 scale-100" },
  blur: { from: "opacity-0 blur-sm", to: "opacity-100 blur-0" },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { from, to } = variants[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${from} ${visible ? to : ""} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
