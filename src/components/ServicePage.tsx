import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Check, ArrowRight, ArrowLeft } from "lucide-react";

const PHONE_DISPLAY = "(509) 699-1913";
const PHONE_HREF = "tel:5096991913";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  accentTitle?: string;
  lede: string;
  highlights: string[];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export function ServicePage({
  eyebrow,
  title,
  accentTitle,
  lede,
  highlights,
  sections,
  faqs,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="flex flex-col">
            <span className="text-xs font-mono font-medium tracking-tighter uppercase text-muted-foreground">
              Wenatchee, WA
            </span>
            <span className="font-extrabold tracking-tighter text-lg uppercase">
              The Cousin Landscape
            </span>
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-4 pt-16 pb-14 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Services
          </Link>
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
            {eyebrow}
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-6">
            {title}
            {accentTitle && (
              <>
                {" "}
                <span className="text-accent italic">{accentTitle}</span>
              </>
            )}
          </h1>
          <p className="text-lg text-muted-foreground max-w-[55ch] leading-relaxed mb-8">
            {lede}
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            Get a Free Estimate
          </a>
        </div>
      </header>

      {/* Highlights */}
      <section className="px-4 py-16 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
            What's Included
          </span>
          <h2 className="text-3xl font-extrabold tracking-tighter mb-10">
            SCOPE OF WORK
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {highlights.map((h) => (
              <li
                key={h}
                className="bg-card p-5 flex items-start gap-3 text-sm font-medium leading-relaxed"
              >
                <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Detail sections */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((s) => (
            <article key={s.heading}>
              <h2 className="text-2xl font-extrabold tracking-tighter uppercase mb-4">
                {s.heading}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-20 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
            Questions
          </span>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-10">
            FREQUENTLY ASKED
          </h2>
          <dl className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-bold text-base mb-2 tracking-tight">{f.q}</dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6">
            READY TO START? <span className="text-accent italic">CALL US.</span>
          </h2>
          <a
            href={PHONE_HREF}
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>{PHONE_DISPLAY}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 bg-foreground text-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent uppercase tracking-[0.2em]">
              <MapPin className="h-3.5 w-3.5" /> Visit Our Office
            </span>
            <address className="not-italic text-lg font-semibold tracking-tight leading-snug">
              822 Cashmere St, Wenatchee, WA 98801
            </address>
            <p className="inline-flex items-center gap-2 text-sm text-background/60 font-mono">
              <Clock className="h-3.5 w-3.5" /> Mon – Sun · 5 AM – 9 PM
            </p>
          </div>
          <div className="md:text-right">
            <Link
              to="/"
              className="text-xs font-mono font-bold uppercase tracking-widest text-background/60 hover:text-accent transition-colors"
            >
              ← Back to The Cousin Landscape
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
