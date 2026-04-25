import { Link } from "@tanstack/react-router";
import { Gamepad2, Twitter, Github, Youtube, Twitch, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-[color:var(--surface)]">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-60"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-violet)] to-[var(--neon-magenta)]">
                <Gamepad2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">
                Gaming<span className="text-gradient">Hub</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The ultimate destination to discover, follow, and download the world's best games — all in one premium experience.
            </p>

            <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-border bg-secondary/40 px-4 py-2.5 text-sm outline-none focus:border-[var(--neon-violet)]"
              />
              <Button
                type="submit"
                className="rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-foreground">Explore</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/games" className="transition-colors hover:text-foreground">All Games</Link></li>
              <li><Link to="/top-rated" className="transition-colors hover:text-foreground">Top Rated</Link></li>
              <li><Link to="/new-releases" className="transition-colors hover:text-foreground">New Releases</Link></li>
              <li><Link to="/categories" className="transition-colors hover:text-foreground">Categories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="transition-colors hover:text-foreground">About</Link></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Press</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-foreground">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Terms</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Cookies</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">DMCA</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GamingHub. All trademarks belong to their respective owners.
          </p>
          <div className="flex items-center gap-1">
            {[Twitter, Github, Youtube, Twitch, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
