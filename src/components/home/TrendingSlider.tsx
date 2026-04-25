import { games } from "@/data/games";
import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

export function TrendingSlider() {
  // Duplicate for seamless marquee
  const items = [...games, ...games];

  return (
    <section id="trending" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Right now</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Trending</span> Games
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden">
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex w-max gap-5">
          {items.map((g, i) => (
            <Link
              key={`${g.slug}-${i}`}
              to="/games/$slug"
              params={{ slug: g.slug }}
              className="group relative block w-[300px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={g.cover}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate text-sm font-semibold">{g.title}</h3>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs text-[var(--neon-magenta)]">
                    <Star className="h-3 w-3 fill-current" />
                    {g.rating.toFixed(1)}
                  </span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{g.genre}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
