import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { Reveal } from "@/components/Reveal";

export function FeaturedGames() {
  return (
    <section id="featured" className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Featured</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Premium <span className="text-gradient">Game Library</span>
            </h2>
          </div>
          <p className="hidden max-w-md text-sm text-muted-foreground md:block">
            Hand-picked, critically acclaimed titles. Click any card for trailers, screenshots and direct official downloads.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {games.map((g, i) => (
          <Reveal key={g.slug} delay={(i % 5) * 80}>
            <GameCard game={g} priority={i < 5} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
