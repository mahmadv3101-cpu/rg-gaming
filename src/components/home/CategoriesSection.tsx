import { categories } from "@/data/games";
import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Discover</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Top <span className="text-gradient">Categories</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal key={c.name} delay={(i % 4) * 80}>
            <Link
              to="/categories"
              className="group relative block overflow-hidden rounded-2xl border border-border bg-[var(--gradient-card)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:color-mix(in_oklab,var(--neon-violet)_40%,transparent)]"
            >
              <div className="text-3xl transition-transform duration-500 group-hover:scale-110">{c.icon}</div>
              <div className="mt-4 text-base font-semibold">{c.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.count} titles</div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-violet)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
