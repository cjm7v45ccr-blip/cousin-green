import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Check, ArrowRight, Heart, Users, Leaf, Hammer, Droplets } from "lucide-react";
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
        <div className="max-w-3xl mx-auto">
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
                Mon–Sun · 5AM – 9PM
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About / History */}
      <section className="px-4 py-24 border-y border-border bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Est. 2008 · PNW Family-Owned
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] mb-6">
              DIGGING, BUILDING &amp; GROWING SINCE <span className="text-accent italic">2008.</span>
            </h2>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              "Where Quality is Our Calling… and Cousins Get It Done."
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-sm leading-relaxed text-foreground/80">
            <p>
              The Cousin Landscape is a PNW family-owned business with over
              <strong className="text-foreground"> 10 years of experience </strong>
              delivering reliable, high-quality landscaping services across
              residential and commercial properties. From retaining walls and
              patios to artificial turf, sod, and irrigation systems, we
              create outdoor spaces built to last.
            </p>
            <p>
              We also offer snow removal and ice control, so you can count on
              us year-round for peace of mind. When you work with us, you're
              not just hiring a landscaping crew — you're getting a trusted
              local partner who takes pride in every detail.
            </p>
            <div className="grid grid-cols-3 gap-px bg-border border border-border mt-8">
              {[
                { k: "10+", v: "Years Experience" },
                { k: "2008", v: "Year Established" },
                { k: "4.3★", v: "Google Rating" },
              ].map((s) => (
                <div key={s.v} className="bg-card p-5">
                  <div className="text-2xl font-extrabold tracking-tighter">{s.k}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

          {/* Construction & Installation capabilities */}
          <div className="mt-20 grid lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                t: "Trees & Shrubs",
                items: [
                  "Tree Planting", "Tree Pruning / Trimming", "Tree Removal", "Tree Stump Removal",
                  "Tree Transplanting", "Tree Cabling / Bracing", "Shrub Planting",
                  "Shrub Pruning / Trimming", "Shrub Removal", "Shrub Transplanting",
                  "Disease Management — Shrubs", "Insect Management — Shrubs",
                ],
              },
              {
                t: "Landscape & Hardscape",
                items: [
                  "Landscape Design", "Greenscape Construction", "Landscaping Building Construction",
                  "Earthmoving / Regrading", "Construction & Installation", "Retaining Walls",
                  "Patios, Walkways & Steps", "Driveways", "Gardening", "Lawn Care",
                ],
              },
              {
                t: "Irrigation & Seasonal",
                items: [
                  "Irrigation Design", "Irrigation Construction",
                  "Irrigation Repair & Maintenance", "Sod & Grass Installation",
                  "Artificial Turf", "Snow Removal", "Ice Control",
                ],
              },
            ].map((g) => (
              <div key={g.t} className="bg-card p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="h-1.5 w-1.5 bg-accent rounded-full" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                    Verified by Business
                  </span>
                </div>
                <h3 className="font-bold mb-5 uppercase tracking-tight text-sm">
                  {g.t}
                </h3>
                <ul className="space-y-2">
                  {g.items.map((i) => (
                    <li key={i} className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                      <span className="text-accent">+</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Gallery */}
      <section className="px-4 py-24 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
                Recent Work
              </span>
              <h2 className="text-4xl font-extrabold tracking-tighter">
                BEFORE &amp; AFTER
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm font-medium leading-relaxed">
              Real Wenatchee properties, transformed through detail and grit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: beforeAfter1.url, alt: "Roadside landscape bed transformed from dry mulch into a clean river-rock bed with thriving ornamental grass." },
              { src: beforeAfter2.url, alt: "Backyard transformed from bare dirt and debris into a freshly installed, manicured sod lawn." },
            ].map((img) => (
              <figure key={img.src} className="relative border border-border bg-card overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </figure>
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

      {/* Amenities & Payments */}
      <section className="px-4 py-20 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Amenities &amp; More
            </span>
            <h2 className="text-3xl font-extrabold tracking-tighter mb-6">
              FAIR PRICES. FLEXIBLE PAYMENTS.
            </h2>
            <ul className="grid grid-cols-2 gap-y-3 text-sm font-medium">
              {[
                "Accepts Cash",
                "Accepts Credit Cards",
                "Accepts Venmo",
                "Accepts PayPal",
                "Accepts Cash App",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="text-accent font-bold">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-l md:border-border md:pl-12 flex flex-col justify-center gap-4">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
              Ownership
            </span>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background text-xs font-mono font-bold uppercase tracking-widest">
                <span className="text-accent">♥</span> Latinx-Owned
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background text-xs font-mono font-bold uppercase tracking-widest">
                <span className="text-accent">◐</span> Women-Owned
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mt-2">
              Proudly serving the Wenatchee Valley with respect, fair pricing,
              and craftsmanship you can trust.
            </p>
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
              Mon – Sun · 5:00 AM – 9:00 PM
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
