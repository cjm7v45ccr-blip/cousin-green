import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Check, ArrowRight, Heart, Users, Leaf, Hammer, Droplets } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.png.asset.json";
import beforeAfter2 from "@/assets/before-after-2.png.asset.json";

const FEATURED_SERVICES = [
  {
    to: "/services/retaining-walls" as const,
    title: "Retaining Walls",
    desc: "Engineered block, stone & concrete walls with proper drainage.",
  },
  {
    to: "/services/irrigation-repair" as const,
    title: "Irrigation Repair",
    desc: "Sprinkler fixes, valve & controller service, start-ups & blow-outs.",
  },
  {
    to: "/services/snow-removal" as const,
    title: "Snow Removal",
    desc: "Plowing, shoveling & ice control — per-storm or seasonal contracts.",
  },
];

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
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-4 pt-20 pb-16 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/10 mb-6">
              <span className="flex gap-0.5" aria-hidden="true">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent text-accent" />
                <Star className="h-3 w-3 fill-accent/30 text-accent/30" />
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
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call for Quote
              </a>
              <div className="inline-flex items-center gap-2.5 px-5 py-4 border border-border bg-card/50 text-xs font-mono font-medium uppercase">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
                FULL-SERVICE LANDSCAPING
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm font-medium leading-relaxed">
              From design and earthmoving to irrigation, turf, and year-round
              snow &amp; ice control — handled in-house by our crew.
            </p>
          </div>

          {/* Featured service pages */}
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-12">
            {FEATURED_SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group bg-card p-7 flex flex-col justify-between hover:bg-background transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                    Service Page
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tighter uppercase mt-3 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 mt-6 text-xs font-mono font-bold uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                  Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* Verified service capabilities */}
          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
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
            ].map((g, idx) => {
              const Icon = [Leaf, Hammer, Droplets][idx];
              return (
                <div key={g.t} className="bg-card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
                      Verified
                    </span>
                  </div>
                  <h3 className="font-bold mb-5 uppercase tracking-tight text-sm">
                    {g.t}
                  </h3>
                  <ul className="space-y-2.5">
                    {g.items.map((i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
            ].map((img, i) => (
              <figure key={img.src} className="group relative border border-border bg-card overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-[10px] font-mono font-bold uppercase tracking-widest">
                  Project · 0{i + 1}
                </figcaption>
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

          <div className="lg:col-span-8 grid md:grid-cols-3 gap-px bg-border border border-border">
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
            ].map((r) => (
              <figure
                key={r.a}
                className="bg-card p-7 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-sm mb-6 leading-relaxed text-foreground/80 flex-1">
                  “{r.q}”
                </blockquote>
                <figcaption className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {r.a}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    Google
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
                  <Check className="h-4 w-4 text-accent shrink-0" strokeWidth={2.5} /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-l md:border-border md:pl-12 flex flex-col justify-center gap-4">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
              Ownership
            </span>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-background text-xs font-mono font-bold uppercase tracking-widest">
                <Heart className="h-3.5 w-3.5 text-accent fill-accent" /> Latinx-Owned
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-background text-xs font-mono font-bold uppercase tracking-widest">
                <Users className="h-3.5 w-3.5 text-accent" /> Women-Owned
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
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent uppercase tracking-[0.2em]">
              <MapPin className="h-3.5 w-3.5" /> Visit Our Office
            </span>
            <address className="not-italic text-xl font-semibold tracking-tight leading-snug">
              822 Cashmere St
              <br />
              Wenatchee, WA 98801
            </address>
            <p className="inline-flex items-center gap-2 text-sm text-background/60 font-mono">
              <Clock className="h-3.5 w-3.5" /> Mon – Sun · 5 AM – 9 PM
            </p>
          </div>

          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent uppercase tracking-[0.2em]">
              <Phone className="h-3.5 w-3.5" /> Connect
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
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
            >
              <span>Get Your Estimate</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
