import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildFaqJsonLd } from "@/components/ServicePage";

const faqs = [
  {
    q: "What materials do you build retaining walls with?",
    a: "We build with engineered segmental concrete block, natural stone, and poured or stamped concrete depending on height, load, and the look you want. For most residential walls in the Wenatchee Valley, segmental block offers the best balance of durability, drainage, and price.",
  },
  {
    q: "How tall can a retaining wall be without an engineer?",
    a: "In most of Washington, walls up to 4 ft of exposed face (measured from the bottom of the footing) typically don't require stamped engineering. Anything taller, terraced, or carrying a surcharge like a driveway should be engineered — we'll let you know during the site visit.",
  },
  {
    q: "Do you handle drainage behind the wall?",
    a: "Always. Every wall we install includes compacted base rock, drainage gravel behind the wall, and a perforated drain pipe daylighted to a safe outlet. Skipping drainage is the #1 reason walls fail — we won't cut that corner.",
  },
  {
    q: "How long does a retaining wall project take?",
    a: "A typical residential wall (20–40 linear feet, under 4 ft tall) takes 3–7 working days from excavation to backfill, weather permitting. Larger or terraced projects we'll schedule in phases.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. We warranty our workmanship and stand behind the structural integrity of every wall we build. Manufacturer warranties on block and stone are passed through to the homeowner.",
  },
  {
    q: "What does a retaining wall cost in Wenatchee?",
    a: "Pricing depends on height, length, materials, access, and how much excavation is required. We give free on-site estimates with a written scope so there are no surprises — call (509) 699-1913 to schedule.",
  },
];

export const Route = createFileRoute("/services/retaining-walls")({
  head: () => ({
    meta: [
      { title: "Retaining Walls — Wenatchee, WA | The Cousin Landscape" },
      {
        name: "description",
        content:
          "Engineered block, stone, and concrete retaining walls built for the Wenatchee Valley. Proper drainage, clean lines, and a workmanship warranty.",
      },
      { property: "og:title", content: "Retaining Walls — The Cousin Landscape" },
      {
        property: "og:description",
        content:
          "Durable retaining walls with proper drainage and clean finishes — built across Wenatchee and the surrounding valley.",
      },
      { property: "og:url", content: "/services/retaining-walls" },
    ],
    links: [{ rel: "canonical", href: "/services/retaining-walls" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(faqs)),
      },
    ],
  }),
  component: RetainingWallsPage,
});

function RetainingWallsPage() {
  return (
    <ServicePage
      eyebrow="Hardscape · Structural"
      title="RETAINING WALLS BUILT TO"
      accentTitle="LAST."
      lede="From a clean garden border to a structural slope wall under a driveway, we build retaining walls that look sharp and stay put — designed for PNW freeze-thaw cycles and our valley's clay-heavy soils."
      highlights={[
        "Segmental concrete block walls",
        "Natural & dry-stacked stone walls",
        "Poured & stamped concrete walls",
        "Terraced & tiered hillside walls",
        "Garden, planter & seat walls",
        "Driveway & slope-stabilization walls",
        "Engineered base & footings",
        "Drain pipe + gravel backfill",
        "Cap stones & finished edging",
      ]}
      sections={[
        {
          heading: "Built for Wenatchee Soils & Weather",
          body: "Wenatchee Valley soils swing from sandy to dense clay, and our winters cycle hard between freeze and thaw. A retaining wall that ignores either of those facts won't last. We over-excavate, compact a proper crushed-rock base, set leveling pads with care, and use the right block-and-pin system for the height. The finish you see is only the top inch of work that goes into a wall that stays straight a decade later.",
        },
        {
          heading: "Drainage Is Not Optional",
          body: "Most failed retaining walls in the valley fail for the same reason: water sat behind them, froze, and pushed them out of plumb. Every wall we install gets drainage gravel behind the face and a perforated pipe daylighted to a safe outlet. On taller walls we add geogrid reinforcement tied into the backfill so the entire soil mass works as one structure.",
        },
        {
          heading: "Design & Estimate",
          body: "We come out, walk the site, measure, and talk through materials and finish options with you in plain language. You get a written estimate with a clear scope, materials list, and timeline. No high-pressure sales — just an honest plan you can compare.",
        },
      ]}
      faqs={faqs}
    />
  );
}
