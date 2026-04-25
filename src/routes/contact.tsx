import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";

export const CONTACT_PHONE = "+923415765097";
export const CONTACT_EMAIL = "mahmadv3101@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GamingHub" },
      { name: "description", content: "Get in touch with the GamingHub team. Reach us by phone, email, or send a message." },
      { property: "og:title", content: "Contact — GamingHub" },
      { property: "og:description", content: "Get in touch with the GamingHub team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim() || null,
        message: message.trim(),
      });
      if (error) throw error;
      toast.success("Message sent! We'll get back to you soon.");
      setName(""); setEmail(""); setSubject(""); setMessage("");
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative pt-32 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center">
            <span className="rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Let's <span className="text-gradient">connect</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Have a question, partnership idea, or feedback? Drop us a line — we read every message.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Call us"
                value={CONTACT_PHONE}
                href={`tel:${CONTACT_PHONE}`}
                hint="Available 9 AM – 11 PM PKT"
              />
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                title="Email us"
                value={CONTACT_EMAIL}
                href={`mailto:${CONTACT_EMAIL}`}
                hint="We reply within 24 hours"
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Headquarters"
                value="Pakistan"
                hint="Serving players worldwide"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border glass-strong p-6 shadow-elevated md:p-10"
            >
              <h2 className="text-xl font-semibold">Send a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">All messages are stored securely on our servers.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Your name" value={name} onChange={setName} required />
                <Field label="Email address" type="email" value={email} onChange={setEmail} required />
              </div>
              <div className="mt-4">
                <Field label="Subject" value={subject} onChange={setSubject} />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  required
                  minLength={1}
                  maxLength={5000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none focus:border-[var(--neon-violet)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--neon-violet)_18%,transparent)]"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] py-6 text-base font-semibold text-white shadow-[0_12px_40px_-10px_var(--neon-violet)] transition-transform hover:scale-[1.01]"
              >
                {submitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  hint,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  hint?: string;
}) {
  const content = (
    <div className="group flex items-start gap-4 rounded-2xl border border-border bg-[var(--gradient-card)] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[color:color-mix(in_oklab,var(--neon-violet)_60%,transparent)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-violet)] text-white shadow-[0_8px_24px_-8px_var(--neon-violet)]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 truncate text-base font-semibold text-foreground transition-colors group-hover:text-gradient">
          {value}
        </div>
        {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-full border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none focus:border-[var(--neon-violet)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--neon-violet)_18%,transparent)]"
      />
    </div>
  );
}
