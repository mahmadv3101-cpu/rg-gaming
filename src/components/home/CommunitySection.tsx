import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Crown, MessageCircle, Star, Trophy } from "lucide-react";

const players = [
  { rank: 1, name: "ShadowAce", score: 18420, change: "+412" },
  { rank: 2, name: "NeonViper", score: 17985, change: "+208" },
  { rank: 3, name: "CrimsonFox", score: 17240, change: "+155" },
  { rank: 4, name: "VoidStrider", score: 16880, change: "+92" },
  { rank: 5, name: "PixelMage", score: 16410, change: "+44" },
];

const reviews = [
  {
    name: "Alex M.",
    handle: "@alexplays",
    stars: 5,
    text: "GamingHub completely changed how I find new games. The design is unreal — feels like browsing on a console UI.",
  },
  {
    name: "Sara K.",
    handle: "@saralvl99",
    stars: 5,
    text: "Direct official store links and zero clutter. Finally a gaming site that respects players and looks premium.",
  },
];

export function CommunitySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Community</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Join the <span className="text-gradient">elite</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        {/* Leaderboard */}
        <Reveal>
          <div className="rounded-3xl border border-border bg-[var(--gradient-card)] p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-[var(--neon-magenta)]" />
              <h3 className="text-lg font-semibold">Top Players · This Week</h3>
            </div>
            <ul className="divide-y divide-border">
              {players.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-3 py-3">
                  <div className="flex items-center gap-4">
                    <div
                      className={
                        "flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold " +
                        (p.rank === 1
                          ? "bg-gradient-to-br from-yellow-400 to-amber-600 text-black"
                          : p.rank === 2
                            ? "bg-gradient-to-br from-slate-300 to-slate-500 text-black"
                            : p.rank === 3
                              ? "bg-gradient-to-br from-amber-700 to-amber-900 text-white"
                              : "bg-secondary text-muted-foreground")
                      }
                    >
                      {p.rank === 1 ? <Crown className="h-4 w-4" /> : p.rank}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.score.toLocaleString()} XP</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-[var(--neon-blue)]">{p.change}</div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.handle} delay={i * 100}>
              <div className="rounded-3xl border border-border bg-[var(--gradient-card)] p-6">
                <div className="flex items-center gap-1 text-[var(--neon-magenta)]">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <div className="mt-4 text-sm">
                  <span className="font-semibold">{r.name}</span>{" "}
                  <span className="text-muted-foreground">{r.handle}</span>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div
              className="relative overflow-hidden rounded-3xl border border-border p-6"
              style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--neon-blue) 25%, var(--surface)) 0%, color-mix(in oklab, var(--neon-violet) 25%, var(--surface)) 100%)" }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm uppercase tracking-wider">
                    <MessageCircle className="h-4 w-4" /> Discord
                  </div>
                  <h3 className="mt-2 text-2xl font-bold">Join 250K gamers</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Daily LFG, tournaments, and giveaways.</p>
                </div>
                <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Join</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
