import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

/**
 * Generates the static sitemap for the public landing page.
 *
 * @returns The sitemap entries exported with the GitHub Pages build.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
