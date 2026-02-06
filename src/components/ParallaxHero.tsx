"use client";

interface ParallaxHeroProps {
  children: React.ReactNode;
}

export default function ParallaxHero({ children }: ParallaxHeroProps) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-[#0d1f0d] overflow-hidden pt-16">
      <div className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat" aria-hidden />
      <div className="absolute inset-0 bg-[#0d1f0d]/60" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        {children}
      </div>
    </section>
  );
}
