import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Gamepad2, Loader2, Mail, Lock, User as UserIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In — GamingHub" },
      { name: "description", content: "Sign in or create your GamingHub account to track your favorite games and join the community." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate({ to: "/" });
    });
  }, [navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { username, full_name: fullName },
          },
        });
        if (error) throw error;
        toast.success("Account created! You're signed in.");
        navigate({ to: "/" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate({ to: "/" });
      }
    } catch (err: any) {
      toast.error(err?.message ?? "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-violet)] to-[var(--neon-magenta)] shadow-[0_0_30px_-4px_var(--neon-violet)]">
            <Gamepad2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold">
            Gaming<span className="text-gradient">Hub</span>
          </span>
        </Link>

        <div className="rounded-3xl border border-border glass-strong p-8 shadow-elevated">
          <div className="mb-6 flex rounded-full border border-border bg-secondary/40 p-1">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  mode === m
                    ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] text-white shadow-[0_6px_20px_-6px_var(--neon-violet)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "signin" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            {mode === "signin" ? "Welcome back, Player" : "Join the universe"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to continue your journey."
              : "Create an account to save favorites and unlock the experience."}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {mode === "signup" && (
              <>
                <Field icon={<UserIcon className="h-4 w-4" />} placeholder="Username" value={username} onChange={setUsername} required minLength={2} />
                <Field icon={<UserIcon className="h-4 w-4" />} placeholder="Full name" value={fullName} onChange={setFullName} />
              </>
            )}
            <Field
              icon={<Mail className="h-4 w-4" />}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={setEmail}
              required
            />
            <Field
              icon={<Lock className="h-4 w-4" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
              required
              minLength={6}
            />

            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] py-6 text-base font-semibold text-white shadow-[0_12px_40px_-10px_var(--neon-violet)] transition-transform hover:scale-[1.01]"
            >
              {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : mode === "signin" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  minLength,
}: {
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className="w-full rounded-full border border-border bg-secondary/40 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-[var(--neon-violet)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--neon-violet)_18%,transparent)]"
      />
    </div>
  );
}
