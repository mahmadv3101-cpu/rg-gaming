import { createFileRoute } from "@tanstack/react-router";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/new-releases")({
  head: () => ({
    meta: [
      { title: "New Releases — GamingHub" },
      { name: "description", content: "Freshly launched games — discover the latest releases on GamingHub." },
      { property: "og:title", content: "New Releases — GamingHub" },
      { property: "og:description", content: "Freshly launched games — discover the latest releases on GamingHub." },
    ],
  }),
  component: NewReleases,
});

function NewReleases() {
  const sorted = [...games].sort((a, b) => +new Date(b.releaseDate) - +new Date(a.releaseDate));
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Just launched</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            New <span className="text-gradient">Releases</span>
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
