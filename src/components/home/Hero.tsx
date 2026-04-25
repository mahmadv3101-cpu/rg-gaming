import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import controller from "@/assets/floating-controller.png";
import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const y = window.scrollY;
      el.style.setProperty("--py", `${y * 0.25}px`);
      el.style.setProperty("--py-fast", `${y * 0.45}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-24">
      {/* Parallax background */}
      <div className="absolute inset-0 -z-20" style={{ transform: "translateY(var(--py, 0))" }}>
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="h-[120%] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0 -z-10" />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute left-[-10%] top-20 -z-10 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl pulse-glow"
        style={{ background: "radial-gradient(circle, var(--neon-blue), transparent 60%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-40 -z-10 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl pulse-glow"
        style={{ background: "radial-gradient(circle, var(--neon-magenta), transparent 60%)", animationDelay: "1.5s" }}
        aria-hidden
      />

      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 pb-24 pt-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--neon-magenta)]" />
            Welcome to the next-gen gaming hub
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Enter The Ultimate{" "}
            <span className="text-gradient">Gaming Universe</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Discover top games, trailers, reviews and direct official downloads — all in one cinematic, beautifully crafted hub.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="group rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] px-7 text-white shadow-[0_15px_50px_-15px_var(--neon-violet)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_60px_-15px_var(--neon-violet)]"
              asChild
            >
              <a href="#featured">
                Explore Games
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group rounded-full px-7" asChild>
              <a href="#trending">
                <Flame className="mr-1.5 h-4 w-4 text-[var(--neon-magenta)]" />
                Trending Now
              </a>
            </Button>
          </div>

          {/* Stat strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            {[
              { v: "500+", l: "Games" },
              { v: "10M+", l: "Players" },
              { v: "98%", l: "Loved" },
              { v: "24/7", l: "Updates" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating controller */}
        <div className="relative hidden lg:block" style={{ transform: "translateY(calc(var(--py-fast, 0) * -0.4))" }}>
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--neon-violet) 50%, transparent), transparent 65%)" }}
          />
          <img
            src={controller}
            alt="Floating gaming controller"
            width={1024}
            height={1024}
            className="float-anim mx-auto w-full max-w-[560px] drop-shadow-[0_30px_60px_rgba(120,80,255,0.4)]"
          />
          {/* Orbit ring */}
          <div className="pointer-events-none absolute inset-0 spin-slow" aria-hidden>
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:color-mix(in_oklab,var(--neon-violet)_40%,transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
