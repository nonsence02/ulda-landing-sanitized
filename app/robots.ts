import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

/**
 * Generates the static `robots.txt` definition for the public site.
 *
 * @returns The robots rules and sitemap location for search crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
