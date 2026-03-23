import Link from "next/link"
import { Github, Linkedin, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ULDA.</p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Sanitized public mirror for academic demonstration.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="https://github.com/ulda-io" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="https://doc.ulda.io" className="hover:text-primary transition-colors">
              Docs
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/company/0am/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.npmjs.com/package/ulda" target="_blank" rel="noopener noreferrer" aria-label="npm">
                <Package className="h-5 w-5 text-muted-foreground" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/ulda-io" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}