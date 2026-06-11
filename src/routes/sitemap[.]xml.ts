import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://thecousinlandscape.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { loc: "/", priority: "1.0", changefreq: "weekly" },
          { loc: "/services/retaining-walls", priority: "0.8", changefreq: "monthly" },
          { loc: "/services/irrigation-repair", priority: "0.8", changefreq: "monthly" },
          { loc: "/services/snow-removal", priority: "0.8", changefreq: "monthly" },
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url>\n    <loc>${BASE_URL}${p.loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});