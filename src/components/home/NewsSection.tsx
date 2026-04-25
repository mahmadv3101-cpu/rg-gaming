import { Reveal } from "@/components/Reveal";
import { Calendar } from "lucide-react";

const news = [
  {
    tag: "Esports",
    title: "World Championship 2025: top 10 storylines to watch",
    date: "Apr 22, 2026",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    tag: "Releases",
    title: "Next-gen open-world reveal stuns at Summer Showcase",
    date: "Apr 18, 2026",
    img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=70",
  },
  {
    tag: "Update",
    title: "Cross-play comes to three more major franchises",
    date: "Apr 12, 2026",
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=70",
  },
];

export function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <Reveal>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Latest</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Gaming <span className="text-gradient">News</span>
            </h2>
          </div>
          <a href="#" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline">
            View all →
          </a>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {news.map((n, i) => (
          <Reveal key={n.title} delay={i * 100}>
            <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_var(--neon-violet)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={n.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] px-2.5 py-1 font-medium text-white">
                    {n.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {n.date}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-gradient">
                  {n.title}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
