import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Game } from "@/data/games";
import { useRef, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  game: Game;
  className?: string;
  priority?: boolean;
};

export function GameCard({ game, className, priority }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 12;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <Link
      to="/games/$slug"
      params={{ slug: game.slug }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("group block focus:outline-none", className)}
    >
      <div
        ref={cardRef}
        className="tilt-card relative overflow-hidden rounded-2xl border border-border bg-[var(--gradient-card)] shadow-elevated"
      >
        {/* Cover */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={game.cover}
            alt={`${game.title} cover art`}
            loading={priority ? "eager" : "lazy"}
            width={768}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          {/* Mouse follow glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--neon-violet) 30%, transparent), transparent 60%)",
            }}
          />
          {/* Rating badge */}
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-xs font-medium">
            <Star className="h-3 w-3 fill-[var(--neon-magenta)] text-[var(--neon-magenta)]" />
            {game.rating.toFixed(1)}
          </div>
          <div className="absolute right-3 top-3 rounded-full glass-strong px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {game.genre}
          </div>
        </div>

        {/* Info */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-base font-semibold leading-tight tracking-tight text-foreground">
            {game.title}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
            {game.platforms.slice(0, 3).map((p) => (
              <span
                key={p}
                className="rounded-md border border-border bg-secondary/60 px-1.5 py-0.5"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Border glow on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[color:color-mix(in_oklab,var(--neon-violet)_60%,transparent)]"
          style={{
            boxShadow: "0 0 0 transparent",
          }}
        />
      </div>
    </Link>
  );
}
