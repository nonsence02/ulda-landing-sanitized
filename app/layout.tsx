import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { RuntimeMonitor } from "@/components/runtime-monitor"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/site"

/**
 * Shared metadata for the academic landing page, including SEO and social previews.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.shortName,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.authorName }],
  creator: siteConfig.authorName,
  publisher: siteConfig.shortName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.titleUk,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 512,
        height: 512,
        alt: "ULDA thesis landing page visual identifier",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.titleUk,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  robots: {
    index: true,
    follow: true,
  },
}

/**
 * Viewport configuration for the responsive static landing page.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1117",
}

/**
 * Root layout for the App Router tree.
 *
 * @param props - Nested route content rendered inside the global page shell.
 * @returns The top-level HTML structure with skip link and theme provider.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Перейти до основного вмісту
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <RuntimeMonitor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
