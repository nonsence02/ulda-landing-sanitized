import Link from "next/link"
import { siteConfig } from "@/lib/site"

type FooterProps = {
  description: string
  topLabel: string
  repositoryLabel: string
  contactsLabel: string
}

export function Footer({ description, topLabel, repositoryLabel, contactsLabel }: FooterProps) {
  return (
    <footer className="border-t border-border/50 bg-card/40">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.shortName}.
            </p>
            <p className="mt-1 max-w-md text-xs leading-5 text-muted-foreground/70">{description}</p>
          </div>
          <nav
            aria-label="Навігація нижнього колонтитула"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground md:justify-end"
          >
            <Link href="#main-content" className="hover:text-primary transition-colors">
              {topLabel}
            </Link>
            <span aria-hidden="true" className="text-muted-foreground/50">
              |
            </span>
            <Link
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the public bachelor thesis repository"
              className="hover:text-primary transition-colors"
            >
              {repositoryLabel}
            </Link>
            <span aria-hidden="true" className="text-muted-foreground/50">
              |
            </span>
            <Link href="#contacts-title" className="hover:text-primary transition-colors">
              {contactsLabel}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
