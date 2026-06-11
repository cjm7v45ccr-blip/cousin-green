import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-landscape.jpg";
import beforeAfter1 from "@/assets/before-after-1.png.asset.json";
import beforeAfter2 from "@/assets/before-after-2.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Cousin Landscape — Wenatchee, WA Landscaping & Block Walls" },
      {
        name: "description",
        content:
          "Professional yard maintenance, block wall construction, and grass installation in Wenatchee, WA. Call (509) 699-1913 — open 24 hours.",
      },
      { property: "og:title", content: "The Cousin Landscape — Wenatchee, WA" },
      {
        property: "og:description",
        content:
          "Professional landscaping in Wenatchee: yard maintenance, block walls, grass installation. Open 24 hours.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PHONE_DISPLAY = "(509) 699-1913";
const PHONE_HREF = "tel:5096991913";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-mono font-medium tracking-tighter uppercase text-muted-foreground">
              Wenatchee, WA
            </span>
            <span className="font-extrabold tracking-tighter text-lg uppercase">
              The Cousin Landscape
            </span>
          </div>
          <a
            href={PHONE_HREF}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-4 pt-20 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10 mb-6">
              <span className="flex gap-0.5" aria-hidden="true">
                <span className="text-accent text-xs">★</span>
                <span className="text-accent text-xs">★</span>
                <span className="text-accent text-xs">★</span>
                <span className="text-accent text-xs">★</span>
                <span className="text-accent/50 text-xs">★</span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                4.3 Rating · 6 Google Reviews
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              GROUNDED IN THE{" "}
              <span className="text-accent italic">CASCADES.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[45ch] mb-10 text-pretty leading-relaxed">
              Professional yard maintenance, structural block walls, and grass
              installation for Wenatchee homeowners who value detail over gloss.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="bg-foreground text-background px-8 py-4 text-sm font-bold uppercase tracking-widest ring-1 ring-foreground/10 hover:bg-accent hover:text-accent-foreground hover:ring-accent transition-all"
              >
                Call for Quote
              </a>
              <div className="flex items-center gap-3 px-6 py-4 border border-border bg-card/50 text-xs font-mono font-medium uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Status: Open 24 Hours
              </div>
            </div>
          </div>
          <div className="animate-reveal relative" style={{ animationDelay: "150ms" }}>
            <img
              src={heroImage}
              alt="Manicured Pacific Northwest lawn meeting a natural stacked stone block wall with Cascade foothills in the background"
              width={1200}
              height={1400}
              className="w-full aspect-[4/5] object-cover rounded-2xl outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="px-4 py-24 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
                What We Do
              </span>
              <h2 className="text-4xl font-extrabold tracking-tighter">
                SPECIALIZED TRADES
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm font-medium leading-relaxed">
              From structural masonry to seasonal maintenance, we handle the
              heavy lifting to keep your property resilient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              {
                n: "01",
                t: "Yard Maintenance",
                d: "Weekly mowing, pruning, and seasonal cleanups to keep aesthetics sharp.",
              },
              {
                n: "02",
                t: "Block Walls",
                d: "Structural retaining walls designed for the rolling terrain of the Wenatchee Valley.",
              },
              {
                n: "03",
                t: "Grass Installation",
                d: "Fresh sod and seed solutions optimized for the Washington climate.",
              },
              {
                n: "04",
                t: "General Landscaping",
                d: "Custom site planning and terrain shaping for residential properties.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-card p-8 hover:bg-primary/5 transition-colors"
              >
                <span className="text-xs font-mono text-muted-foreground mb-4 block">
                  {s.n}
                </span>
                <h3 className="font-bold mb-3 uppercase tracking-tight">
                  {s.t}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why / Reviews */}
      <section className="px-4 py-24 bg-background border-y border-border">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tighter mb-8 leading-none">
              WHY THE COUSIN LANDSCAPE?
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-accent font-mono text-xs font-bold">/01</span>
                <div>
                  <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter">
                    Unmatched Detail
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Every edge is hand-checked. Every block is perfectly leveled.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-mono text-xs font-bold">/02</span>
                <div>
                  <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter">
                    Local Promptness
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We live where you live. We show up when we say we will.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-mono text-xs font-bold">/03</span>
                <div>
                  <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter">
                    Professional Standard
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Highly recommended across Wenatchee for high-quality service.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Excellent yard maintenance work. Left everything looking clean, organized, and professionally maintained.",
                a: "Eric Bailey",
              },
              {
                q: "Friendly, prompt, and paid great attention to detail on a large block wall and grass installation project.",
                a: "Cameron Bailes",
              },
              {
                q: "Very professional, highly recommended for high-quality service.",
                a: "Erik Escobedo",
              },
              {
                q: "Great service from a team that cares about the work they leave behind.",
                a: "Pedro Farias",
              },
            ].map((r) => (
              <figure
                key={r.a}
                className="bg-card p-8 border border-border/50 shadow-sm"
              >
                <blockquote className="text-sm italic mb-6 leading-relaxed text-foreground/80">
                  “{r.q}”
                </blockquote>
                <figcaption className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {r.a}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    Google Review
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="px-4 py-24 bg-foreground text-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <span className="text-xs font-mono font-medium text-accent uppercase tracking-[0.2em]">
              Visit Our Office
            </span>
            <address className="not-italic text-xl font-semibold tracking-tight leading-snug">
              822 Cashmere St
              <br />
              Wenatchee, WA 98801
            </address>
            <p className="text-sm text-background/60 font-mono">
              Available 24 Hours / 7 Days
            </p>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-mono font-medium text-accent uppercase tracking-[0.2em]">
              Connect
            </span>
            <div className="space-y-2">
              <a
                href={PHONE_HREF}
                className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors block"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-xs text-background/40 uppercase tracking-widest font-mono">
                Call or Text for Estimates
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end">
            <a
              href={PHONE_HREF}
              className="group relative inline-flex items-center gap-4 bg-accent text-accent-foreground px-10 py-6 font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">Get Your Estimate</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] font-mono text-background/40 uppercase tracking-widest">
            © {new Date().getFullYear()} The Cousin Landscape
          </p>
          <p className="text-[10px] font-mono text-background/40 uppercase tracking-widest">
            Wenatchee's Hardworking Choice
          </p>
        </div>
      </footer>
    </div>
  );
}
