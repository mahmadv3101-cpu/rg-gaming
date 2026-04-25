import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Download, Menu, X, Gamepad2, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/top-rated", label: "Top Rated" },
  { to: "/new-releases", label: "New Releases" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

// Smart link to Play Store on mobile / Microsoft Store on desktop
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.epicgames.fortnite";
const MS_STORE_URL = "https://apps.microsoft.com/detail/9NBLGGH4TVD0";

function getDownloadAppUrl() {
  if (typeof navigator === "undefined") return MS_STORE_URL;
  const ua = navigator.userAgent.toLowerCase();
  const isMobile = /android|iphone|ipad|ipod|mobile/.test(ua);
  return isMobile ? PLAY_STORE_URL : MS_STORE_URL;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  const handleDownloadApp = () => {
    window.open(getDownloadAppUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500",
            scrolled ? "glass-strong shadow-elevated" : "glass"
          )}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-violet)] to-[var(--neon-magenta)] shadow-[0_0_20px_-2px_var(--neon-violet)] transition-transform duration-500 group-hover:rotate-[18deg]">
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Gaming<span className="text-gradient">Hub</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                activeProps={{
                  className:
                    "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[var(--neon-blue)] after:to-[var(--neon-magenta)]",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search games..."
                className="w-44 rounded-full border border-border bg-secondary/40 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:w-60 focus:border-[var(--neon-violet)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--neon-violet)_18%,transparent)]"
              />
            </div>
            {user ? (
              <>
                <span className="hidden items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground xl:inline-flex">
                  <UserIcon className="h-3.5 w-3.5" />
                  {user.email?.split("@")[0]}
                </span>
                <Button variant="ghost" size="sm" className="rounded-full" onClick={handleLogout}>
                  <LogOut className="mr-1.5 h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm" className="rounded-full">
                  Login
                </Button>
              </Link>
            )}
            <Button
              size="sm"
              onClick={handleDownloadApp}
              className="rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] text-white shadow-[0_8px_30px_-8px_var(--neon-violet)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_-8px_var(--neon-violet)]"
            >
              <Download className="mr-1.5 h-4 w-4" />
              Download App
            </Button>
          </div>

          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                  activeProps={{ className: "bg-secondary/50 text-foreground" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
                {user ? (
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="mr-1.5 h-4 w-4" /> Logout
                  </Button>
                ) : (
                  <Link to="/auth" onClick={() => setOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full">Login</Button>
                  </Link>
                )}
                <Button
                  size="sm"
                  onClick={handleDownloadApp}
                  className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] text-white"
                >
                  <Download className="mr-1.5 h-4 w-4" /> Download App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
