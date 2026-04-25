import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Gamepad2, Sparkles, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GamingHub" },
      { name: "description", content: "GamingHub is the premium destination to discover, follow and download the world's best games — all in one place." },
      { property: "og:title", content: "About GamingHub" },
      { property: "og:description", content: "GamingHub is the premium destination to discover, follow and download the world's best games — all in one place." },
    ],
  }),
  component: AboutPage,
});

const features = [
  { icon: Sparkles, title: "Curated library", body: "Hand-picked premium titles across every platform and genre — no clutter, no noise." },
  { icon: Shield, title: "Official sources only", body: "Every download links directly to the official publisher or storefront. Safe, legal, verified." },
  { icon: Zap, title: "Built for speed", body: "Cinematic animations and instant page transitions. The fastest way to discover your next obsession." },
  { icon: Gamepad2, title: "For all platforms", body: "PC, PlayStation, Xbox, Switch and mobile — one hub for your entire gaming life." },
];

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Our mission</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Built for <span className="text-gradient">true gamers</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            GamingHub is a premium gateway into the universe of games. We blend Apple-grade design with esports energy to give you the cleanest, fastest way to discover, follow, and download titles across every platform.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-4 px-4 sm:grid-cols-2">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
            <div className="group h-full rounded-3xl border border-border bg-[var(--gradient-card)] p-8 transition-all duration-500 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-violet)] shadow-[0_0_30px_-8px_var(--neon-violet)]">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-border bg-[var(--gradient-card)] p-10 text-center sm:grid-cols-3">
            {[
              { v: "10M+", l: "Active gamers" },
              { v: "500+", l: "Premium titles" },
              { v: "98%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl font-bold text-gradient md:text-5xl">{s.v}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
