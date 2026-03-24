import Link from "next/link"
import { siteConfig } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {siteConfig.shortName}.</p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Публічна академічна сторінка бакалаврської роботи з безстанової автентифікації.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#main-content" className="hover:text-primary transition-colors">
              На початок
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href={siteConfig.repositoryUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Репозиторій
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="#contacts-title" className="hover:text-primary transition-colors">
              Контакти
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
