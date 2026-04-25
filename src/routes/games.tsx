import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "All Games — GamingHub" },
      { name: "description", content: "Browse the complete library of premium PC and console games on GamingHub." },
      { property: "og:title", content: "All Games — GamingHub" },
      { property: "og:description", content: "Browse the complete library of premium PC and console games on GamingHub." },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  const allGenres = useMemo(() => Array.from(new Set(games.map((g) => g.genre))), []);
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? games : games.filter((g) => g.genre === active);

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Library</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            All <span className="text-gradient">Games</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Browse our hand-picked collection of premium titles across every genre. Click any game for trailers, screenshots, and direct official store links.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {["All", ...allGenres].map((g) => (
            <button
              key={g}
              onClick={() => setActive(g)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                active === g
                  ? "border-transparent bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] text-white shadow-[0_8px_30px_-10px_var(--neon-violet)]"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
              )}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((g, i) => (
            <Reveal key={g.slug} delay={(i % 4) * 80}>
              <GameCard game={g} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
