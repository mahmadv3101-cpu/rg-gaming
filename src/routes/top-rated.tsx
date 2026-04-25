import { createFileRoute } from "@tanstack/react-router";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/top-rated")({
  head: () => ({
    meta: [
      { title: "Top Rated Games — GamingHub" },
      { name: "description", content: "The highest-rated games on GamingHub, ranked by community and critic scores." },
      { property: "og:title", content: "Top Rated Games — GamingHub" },
      { property: "og:description", content: "The highest-rated games on GamingHub, ranked by community and critic scores." },
    ],
  }),
  component: TopRated,
});

function TopRated() {
  const sorted = [...games].sort((a, b) => b.rating - a.rating);
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Hall of fame</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Top <span className="text-gradient">Rated</span>
          </h1>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sorted.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 4) * 80}>
              <GameCard game={g} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
