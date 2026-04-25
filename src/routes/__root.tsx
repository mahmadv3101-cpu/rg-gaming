import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GamingHub — Enter The Ultimate Gaming Universe" },
      { name: "description", content: "Discover top games, trailers, reviews and direct official downloads in one premium hub. PC, PlayStation, Xbox and more." },
      { name: "author", content: "GamingHub" },
      { name: "theme-color", content: "#0a0a14" },
      { property: "og:title", content: "GamingHub — Enter The Ultimate Gaming Universe" },
      { property: "og:description", content: "Discover top games, trailers, reviews and direct official downloads in one premium hub. PC, PlayStation, Xbox and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@GamingHub" },
      { name: "twitter:title", content: "GamingHub — Enter The Ultimate Gaming Universe" },
      { name: "twitter:description", content: "Discover top games, trailers, reviews and direct official downloads in one premium hub. PC, PlayStation, Xbox and more." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/se213O2m2HMTEQ5IGzsp3qFhhPA2/social-images/social-1777102139858-gamingfaicon.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/se213O2m2HMTEQ5IGzsp3qFhhPA2/social-images/social-1777102139858-gamingfaicon.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
