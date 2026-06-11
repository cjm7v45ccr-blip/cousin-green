import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildFaqJsonLd } from "@/components/ServicePage";

const faqs = [
  {
    q: "What areas do you cover for snow removal?",
    a: "We service residential and commercial properties throughout the Wenatchee Valley — Wenatchee, East Wenatchee, Cashmere, Monitor, and nearby areas. Call to confirm your address is on our route.",
  },
  {
    q: "Do you offer per-storm service or a seasonal contract?",
    a: "Both. Per-storm pricing is straightforward for one-off calls. Seasonal contracts lock in priority service, predictable monthly pricing, and automatic dispatch once snowfall hits the trigger depth.",
  },
  {
    q: "What is the trigger depth?",
    a: "Standard residential trigger is 2 inches; commercial sites are typically 1 inch. We can set a custom trigger in your contract so we show up exactly when you want us to — not before, not after.",
  },
  {
    q: "Do you handle ice control and salting?",
    a: "Yes. We apply ice melt and traction grit on walkways, entries, stairs, parking lots, and ADA ramps. For commercial sites we can pre-treat before a storm to prevent bonding to the pavement.",
  },
  {
    q: "How quickly do you respond after a storm?",
    a: "Contract customers are typically cleared within 4–8 hours of the trigger depth being reached, with commercial accounts prioritized for opening hours. Heavy back-to-back storms may extend that window — we'll communicate.",
  },
  {
    q: "Do you clear sidewalks and entries, or just driveways?",
    a: "Both. We can quote driveway-only, walkway-only, or a full property scope including stairs, entries, and ADA paths. Be specific about what you need clear and by when, and we'll build the route around it.",
  },
];

export const Route = createFileRoute("/services/snow-removal")({
  head: () => ({
    meta: [
      { title: "Snow Removal & Ice Control — Wenatchee, WA | The Cousin Landscape" },
      {
        name: "description",
        content:
          "Residential and commercial snow removal, plowing, shoveling, and ice control across the Wenatchee Valley. Per-storm and seasonal contracts.",
      },
      { property: "og:title", content: "Snow Removal — The Cousin Landscape" },
      {
        property: "og:description",
        content:
          "Reliable snow plowing, shoveling, and ice control in Wenatchee. Per-storm or seasonal — we're on call all winter.",
      },
      { property: "og:url", content: "/services/snow-removal" },
    ],
    links: [{ rel: "canonical", href: "/services/snow-removal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(faqs)),
      },
    ],
  }),
  component: SnowRemovalPage,
});

function SnowRemovalPage() {
  return (
    <ServicePage
      eyebrow="Seasonal · 24/7 On Call"
      title="SNOW REMOVAL &"
      accentTitle="ICE CONTROL."
      lede="When the valley gets hit, we're already moving. Residential driveways, commercial lots, walkways, stairs, and ADA paths — plowed, shoveled, and treated so your morning isn't on hold."
      highlights={[
        "Residential driveway plowing",
        "Commercial lot plowing",
        "Sidewalk & entry shoveling",
        "Stair & ADA path clearing",
        "Ice melt application",
        "Pre-storm pavement treatment",
        "Traction grit for slick surfaces",
        "Per-storm service",
        "Seasonal & monthly contracts",
      ]}
      sections={[
        {
          heading: "Reliable Routes, Predictable Service",
          body: "Winter service only works if it's actually there when you wake up. We build routes around our contract customers so commercial sites are open for business and homeowners can get out of the driveway on time. When snow keeps falling, we keep coming back — that's the whole point of a plan.",
        },
        {
          heading: "Ice Control That Protects Your Property",
          body: "We choose ice-melt products based on temperature and surface — straight rock salt isn't always the right call. On concrete, pavers, and stamped surfaces we use blends that melt effectively without spalling your hardscape or burning out adjacent turf and beds.",
        },
        {
          heading: "Lock In Service Before the First Storm",
          body: "Seasonal contracts fill up fast in October and November. Lock yours in early to guarantee priority dispatch, a fixed trigger depth, and predictable monthly pricing for the season. Call (509) 699-1913 to get on the route.",
        },
      ]}
      faqs={faqs}
    />
  );
}
