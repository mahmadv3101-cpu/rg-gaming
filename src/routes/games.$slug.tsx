import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Download, HardDrive, Layers, Monitor, Star } from "lucide-react";
import { games, getGame } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { GameCard } from "@/components/GameCard";

export const Route = createFileRoute("/games/$slug")({
  loader: ({ params }) => {
    const game = getGame(params.slug);
    if (!game) throw notFound();
    return { game };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.game.title} — GamingHub` },
          { name: "description", content: loaderData.game.description.slice(0, 158) },
          { property: "og:title", content: `${loaderData.game.title} — GamingHub` },
          { property: "og:description", content: loaderData.game.description.slice(0, 158) },
          { property: "og:image", content: loaderData.game.cover },
          { name: "twitter:image", content: loaderData.game.cover },
          { property: "og:type", content: "video.game" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold">Game not found</h1>
      <p className="text-muted-foreground">We couldn't find that title in our library.</p>
      <Link to="/games">
        <Button>Browse all games</Button>
      </Link>
    </div>
  ),
  component: GameDetailPage,
});

function GameDetailPage() {
  const { game } = Route.useLoaderData();
  const similar = games.filter((g) => g.slug !== game.slug && g.genre === game.genre).slice(0, 4);
  const fallback = similar.length ? similar : games.filter((g) => g.slug !== game.slug).slice(0, 4);

  return (
    <div className="relative pt-28">
      {/* Back */}
      <div className="mx-auto max-w-7xl px-4">
        <Link
          to="/games"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to games
        </Link>
      </div>

      {/* Hero */}
      <section className="relative mt-6">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={game.cover}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-30 blur-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[420px_1fr] lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-elevated">
              <img
                src={game.cover}
                alt={`${game.title} cover`}
                width={768}
                height={1024}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <span className="rounded-full glass px-3 py-1">{game.genre}</span>
              {game.platforms.map((p) => (
                <span key={p} className="rounded-full border border-border px-3 py-1">{p}</span>
              ))}
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {game.title}
            </h1>
            <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-[var(--neon-magenta)] text-[var(--neon-magenta)]" />
                <span className="font-semibold text-foreground">{game.rating.toFixed(1)}</span> / 5
              </span>
              <span>•</span>
              <span>Released {new Date(game.releaseDate).getFullYear()}</span>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {game.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] text-white shadow-[0_10px_40px_-10px_var(--neon-violet)] transition-transform duration-300 hover:scale-[1.03]"
              >
                <a href={game.store.url} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  {game.store.label}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={`https://www.youtube.com/watch?v=${game.trailerId}`} target="_blank" rel="noopener noreferrer">
                  Watch Trailer
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat icon={<Calendar className="h-4 w-4" />} label="Released" value={new Date(game.releaseDate).toLocaleDateString(undefined, { month: "short", year: "numeric" })} />
              <Stat icon={<HardDrive className="h-4 w-4" />} label="Size" value={game.size} />
              <Stat icon={<Layers className="h-4 w-4" />} label="Genre" value={game.genre} />
              <Stat icon={<Monitor className="h-4 w-4" />} label="Platforms" value={`${game.platforms.length}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trailer */}
      <section className="mx-auto mt-24 max-w-7xl px-4">
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Official Trailer</h2>
          <div className="overflow-hidden rounded-3xl border border-border shadow-elevated">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${game.trailerId}`}
                title={`${game.title} trailer`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Screenshots */}
      <section className="mx-auto mt-24 max-w-7xl px-4">
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Screenshots</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {game.screenshots.map((src, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <img src={src} alt={`${game.title} screenshot ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section className="mx-auto mt-24 max-w-7xl px-4">
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">System Requirements</h2>
          <div className="grid gap-4 rounded-3xl border border-border bg-[var(--gradient-card)] p-6 md:grid-cols-2 md:p-10">
            {game.systemRequirements.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0">
                <span className="text-sm uppercase tracking-wider text-muted-foreground">{r.label}</span>
                <span className="text-right text-sm font-medium">{r.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Similar */}
      <section className="mx-auto mt-24 max-w-7xl px-4">
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Similar Games</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {fallback.map((g, i) => (
            <Reveal key={g.slug} delay={i * 80}>
              <GameCard game={g} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/30 p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
