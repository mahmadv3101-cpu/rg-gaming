import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, games } from "@/data/games";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Game Categories — GamingHub" },
      { name: "description", content: "Discover games by category — RPG, Open World, Shooting, Racing, Sports and more." },
      { property: "og:title", content: "Game Categories — GamingHub" },
      { property: "og:description", content: "Discover games by category — RPG, Open World, Shooting, Racing, Sports and more." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Explore by genre</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Top <span className="text-gradient">Categories</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => {
            const sample = games.find((g) => g.genre === c.name);
            return (
              <Reveal key={c.name} delay={(i % 4) * 80}>
                <Link
                  to="/games"
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-[var(--gradient-card)] p-6 hover-lift"
                >
                  {sample && (
                    <img
                      src={sample.cover}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover opacity-15 transition-opacity duration-500 group-hover:opacity-30"
                    />
                  )}
                  <div className="relative">
                    <div className="text-3xl">{c.icon}</div>
                    <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.count} games available</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
