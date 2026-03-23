"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShieldCheck, Github, Book, Package, Server, FileText, Cloud, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeSnippet } from "@/components/code-snippet"
import { Footer } from "@/components/footer"

const libraries = [
  {
    id: "ulda",
    name: "ulda",
    tagline: "Core encrypted data layer",
    install: "npm i ulda",
    github: "https://github.com/ulda-io/saas",
    docs: "https://doc.ulda.io/ULDA_SaaS_(core_library)/Welcome/What_is_0_am_or_ULDA",
    npm: "https://www.npmjs.com/package/ulda",
    cdn: "https://www.jsdelivr.com/package/npm/ulda",
  },
  {
    id: "ulda-sign",
    name: "ulda-sign",
    tagline: "Lightweight signature utils",
    install: "npm i ulda-sign",
    github: "https://github.com/ulda-io/signature",
    docs: "https://doc.ulda.io/ULDA_Signatures_(ulda_sign)/index",
    npm: "https://www.npmjs.com/package/ulda-sign",
    cdn: "https://www.jsdelivr.com/package/npm/ulda-sign",
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.15, ease: "easeInOut" as const },
}

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20 md:py-32 text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div {...fadeIn}>
              <div className="flex justify-center mb-6">
                <img src="/logomark.png" alt="ULDA logo" className="h-20 w-20 rounded-lg shadow-md" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Zero-config client-side encryption for JS and TS
              </h1>
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl mb-8">
                Secure application data without adding backend complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-md">
                  <Link href="#libraries">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="shadow-md">
                  <Link href="https://github.com/ulda-io" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why ULDA?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-card rounded-lg shadow-md text-center p-6">
                  <Server className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">All in the Browser</h3>
                  <p className="text-muted-foreground">
                    Sensitive data is encrypted and decrypted on the client.
                  </p>
                </Card>
                <Card className="bg-card rounded-lg shadow-md text-center p-6">
                  <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">One-line Install</h3>
                  <p className="text-muted-foreground">
                    Integrate into a JavaScript project with a single npm command.
                  </p>
                </Card>
                <Card className="bg-card rounded-lg shadow-md text-center p-6">
                  <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Battle-tested Crypto</h3>
                  <p className="text-muted-foreground">
                    Built on Web Crypto primitives such as AES-GCM and RSA-OAEP.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="libraries" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Started with the Libraries</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {libraries.map((lib) => (
                  <Card key={lib.id} className="bg-card rounded-lg shadow-md flex flex-col w-full max-w-sm">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                        <CardTitle className="text-2xl font-bold">{lib.name}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{lib.tagline}</p>
                    </CardHeader>

                    <CardContent className="flex-grow flex flex-col justify-between">
                      <CodeSnippet code={lib.install} />

                      <div className="mt-6">
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                          <Link href={lib.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-4 w-4" /> GitHub
                          </Link>
                          <Link href={lib.docs} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <Book className="h-4 w-4" /> Docs
                          </Link>
                          <Link href={lib.npm} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <Package className="h-4 w-4" /> npm
                          </Link>
                          <Link href={lib.cdn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <Cloud className="h-4 w-4" /> CDN
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-card/50 rounded-lg shadow-md flex flex-col border-2 border-dashed border-border items-center justify-center p-8 text-center w-full max-w-sm">
                  <Clock className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold text-muted-foreground">ulda-local</h3>
                  <p className="text-muted-foreground mt-2">Drop-in localStorage backend. Coming soon.</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div {...fadeIn}>
              <div className="bg-card rounded-lg shadow-md p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left flex-1">
                  <h3 className="text-3xl font-bold mb-3">Self-host with Docker</h3>
                  <p className="text-muted-foreground text-lg">
                    This sanitized mirror keeps only the marketing-facing landing page and Docker quick-start example.
                  </p>
                </div>
                <div className="w-full lg:w-auto flex-shrink-0 mt-6 lg:mt-0">
                  <CodeSnippet code="docker pull uldaio/server:1.0" />
                  <Link href="https://hub.docker.com/r/uldaio/server" className="text-sm text-primary hover:underline mt-2 block text-center md:text-right">
                    See Docker Hub &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sanitized Public Mirror</h2>
              <div className="max-w-2xl mx-auto">
                <Card className="bg-card rounded-lg shadow-md text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <FileText className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Prepared for academic submission</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 px-8 pb-8">
                    <p className="text-muted-foreground text-lg">
                      The public version excludes environment files, private integrations, blog pages, database access,
                      and email delivery logic.
                    </p>
                    <Button asChild size="lg" variant="outline">
                      <Link href="https://github.com/ulda-io" target="_blank" rel="noopener noreferrer">
                        Source organization
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}