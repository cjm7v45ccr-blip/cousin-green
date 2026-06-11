import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildFaqJsonLd } from "@/components/ServicePage";

const faqs = [
  {
    q: "My sprinkler zone isn't turning on — what could be wrong?",
    a: "Most commonly it's a bad solenoid on the valve, a cut or pinched wire, or a controller programming issue. We diagnose with a multimeter on-site and quote the repair before any work — no guesswork billing.",
  },
  {
    q: "Do you repair broken sprinkler heads and leaking pipes?",
    a: "Yes — pop-up heads, rotors, drip emitters, leaking lateral lines, cracked PVC, broken risers, and seeping valves. We carry common Hunter, Rain Bird, and Toro parts on the truck so most repairs finish in one visit.",
  },
  {
    q: "Can you do spring start-ups and winterization?",
    a: "Yes. Spring start-up includes pressurizing the system, checking each zone, adjusting heads, and reprogramming the controller. Fall winterization includes blowing every line out with compressed air so nothing freezes and cracks underground.",
  },
  {
    q: "How much does an irrigation repair call cost?",
    a: "Our standard service call covers the trip and the first 30 minutes of diagnostic work. Parts and additional labor are quoted before we do the work. Most single-zone repairs are completed within the first visit.",
  },
  {
    q: "Do you work on smart controllers like Rachio or Hydrawise?",
    a: "Yes. We install, replace, and reprogram smart controllers and can wire in flow sensors, rain sensors, and Wi-Fi modules. We can also help you tune watering schedules to your actual plant zones and soil type.",
  },
  {
    q: "Do you install new irrigation systems too?",
    a: "Absolutely — full design, trenching, valve manifolds, mainlines, drip and spray zones, and controller setup. If your old system is past saving, we'll quote a replacement instead of patching it forever.",
  },
];

export const Route = createFileRoute("/services/irrigation-repair")({
  head: () => ({
    meta: [
      { title: "Irrigation Repair & Maintenance — Wenatchee, WA | The Cousin Landscape" },
      {
        name: "description",
        content:
          "Sprinkler repair, leak fixes, valve and controller service, spring start-ups, and fall winterization across the Wenatchee Valley.",
      },
      { property: "og:title", content: "Irrigation Repair — The Cousin Landscape" },
      {
        property: "og:description",
        content:
          "Same-week sprinkler and irrigation repair in Wenatchee — leaks, valves, controllers, start-ups, and blow-outs.",
      },
      { property: "og:url", content: "/services/irrigation-repair" },
    ],
    links: [{ rel: "canonical", href: "/services/irrigation-repair" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(faqs)),
      },
    ],
  }),
  component: IrrigationRepairPage,
});

function IrrigationRepairPage() {
  return (
    <ServicePage
      eyebrow="Irrigation · Maintenance"
      title="IRRIGATION REPAIR,"
      accentTitle="DONE RIGHT."
      lede="From a single broken sprinkler head to a full controller swap, we diagnose, repair, and maintain irrigation systems across the Wenatchee Valley — quickly, cleanly, and with parts that match what's already in the ground."
      highlights={[
        "Sprinkler head replacement",
        "Valve & solenoid repair",
        "Leak detection & line repair",
        "Wire & controller troubleshooting",
        "Smart controller installation",
        "Drip line repair & expansion",
        "Backflow inspection & repair",
        "Spring start-up & system tuning",
        "Fall blow-out & winterization",
      ]}
      sections={[
        {
          heading: "We Find the Real Problem First",
          body: "A zone that won't run could be a $4 solenoid, a chewed wire, or a controller that lost its program after a power blip. We bring a meter and the right tools to figure it out before we start digging up your yard. You get an honest answer and a quoted fix — not an open-ended bill.",
        },
        {
          heading: "Spring Start-Ups & Fall Blow-Outs",
          body: "Wenatchee winters are hard on irrigation. We schedule spring start-ups starting in March — pressurizing, checking every head, and dialing in coverage so nothing burns out in July. In October and November we run high-volume air through every zone to clear water from the lines so freezing temps don't crack your mainline or valves.",
        },
        {
          heading: "Maintenance Plans Available",
          body: "Ask about a seasonal plan that bundles your start-up, mid-summer tune-up, and winterization. Priority scheduling, predictable pricing, and we catch small problems before they flood a corner of the lawn.",
        },
      ]}
      faqs={faqs}
    />
  );
}
