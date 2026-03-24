"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpenText, FileText, Network, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { siteConfig } from "@/lib/site"
import { thesisContent, type Language } from "@/lib/thesis-content"

const overviewIcons = [BookOpenText, ShieldCheck, Network, FileText]

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("uk")
  const content = thesisContent[language]
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.title,
    description: content.shortDescription,
    inLanguage: language,
    url: siteConfig.url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.shortName,
      url: siteConfig.url,
    },
    about: siteConfig.topics,
    mainEntity: {
      "@type": "CreativeWork",
      name: content.titleFull,
      alternateName: content.alternateTitle,
      author: {
        "@type": "Person",
        name: siteConfig.authorName,
      },
      educationalLevel: "Bachelor",
      inLanguage: ["uk", "en"],
      keywords: content.keywords.join(", "),
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content" className="flex-grow" lang={language}>
        <article aria-labelledby="hero-title">
          <section
            aria-labelledby="hero-title"
            className="border-b border-border/60 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]"
          >
            <div className="section-shell py-14 md:py-20 xl:py-24">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.9fr)] lg:items-start xl:gap-12">
                <header className="space-y-6 self-center">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90 sm:text-sm">
                      {content.stageLabel}
                    </p>
                    <LanguageSwitcher activeLanguage={language} onChange={setLanguage} />
                  </div>
                  <div className="space-y-5">
                    <h1
                      id="hero-title"
                      className="max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl xl:text-6xl"
                    >
                      {content.title}
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                      {content.heroLead}
                    </p>
                    <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base md:text-lg">
                      {content.alternateTitle}
                    </p>
                  </div>
                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
                    {content.shortDescription}
                  </p>
                  <nav
                    aria-label="Основні дії сторінки"
                    className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap"
                  >
                    <Button asChild size="lg" className="sm:min-w-[200px]">
                      <Link href="#thesis-overview">{content.heroPrimaryAction}</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="sm:min-w-[200px]">
                      <Link href="#project-links">{content.heroSecondaryAction}</Link>
                    </Button>
                  </nav>
                </header>

                <aside aria-labelledby="project-summary-title" className="space-y-5 self-start lg:space-y-6">
                  <figure className="flex min-h-[220px] items-center justify-center rounded-2xl border border-border/70 bg-card/50 p-6 sm:min-h-[260px] md:p-8">
                    <Image
                      src="/logomark.png"
                      alt="Символічний логотип ULDA як візуальний маркер дослідження приватності та безстанової автентифікації"
                      width={160}
                      height={160}
                      priority
                      className="h-24 w-24 rounded-xl shadow-md sm:h-28 sm:w-28 md:h-32 md:w-32"
                    />
                  </figure>

                  <Card className="border-border/70 bg-card/70">
                    <CardHeader>
                      <CardTitle id="project-summary-title" className="text-xl">
                        {content.projectSummaryTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                      {content.projectSummary.map((item) => (
                        <div key={item.label}>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p>{item.value}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </section>

          <section id="thesis-overview" aria-labelledby="overview-title" className="py-12 md:py-16 xl:py-20">
            <div className="section-shell">
              <header className="section-heading md:mb-10">
                <h2 id="overview-title" className="section-title">
                  {content.overviewTitle}
                </h2>
                <p className="section-copy">{content.overviewDescription}</p>
              </header>

              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
                {content.overviewCards.map((card, index) => {
                  const Icon = overviewIcons[index]
                  const titleId = `overview-card-${index}`

                  return (
                    <section key={card.title} aria-labelledby={titleId}>
                      <Card className="h-full border-border/70 bg-card/60">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                            <CardTitle id={titleId} className="text-lg">
                              {card.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="text-sm leading-6 text-muted-foreground">{card.text}</CardContent>
                      </Card>
                    </section>
                  )
                })}
              </div>
            </div>
          </section>

          <section aria-labelledby="keywords-title" className="py-8 md:py-10 xl:py-12">
            <div className="section-shell">
              <header className="section-heading">
                <h2 id="keywords-title" className="section-title">
                  {content.keywordsTitle}
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="pt-6">
                  <ul className="flex flex-wrap gap-2.5 text-sm text-muted-foreground sm:gap-3" aria-label={content.keywordsTitle}>
                    {content.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        className="rounded-full border border-border/80 bg-background/60 px-3 py-2 text-sm sm:px-4"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="relevance-title" className="py-8 md:py-10 xl:py-12">
            <div className="section-shell">
              <header className="section-heading">
                <h2 id="relevance-title" className="section-title">
                  {content.relevanceTitle}
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="flex min-h-[168px] items-center pt-6 text-sm leading-7 text-muted-foreground sm:min-h-[176px]">
                  <p>{content.relevance}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="goals-title" className="py-8 md:py-10 xl:py-12">
            <div className="section-shell">
              <header className="section-heading">
                <h2 id="goals-title" className="section-title">
                  {content.goalTitle}
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="flex min-h-[168px] items-center pt-6 text-sm leading-7 text-muted-foreground sm:min-h-[176px]">
                  <p>{content.goal}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="tasks-title" className="py-8 md:py-10 xl:py-12">
            <div className="section-shell">
              <header className="section-heading">
                <h2 id="tasks-title" className="section-title">
                  {content.tasksTitle}
                </h2>
              </header>
              <div className="grid gap-5 lg:grid-cols-2 xl:gap-6">
                <section aria-labelledby="tasks-list-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <CardTitle id="tasks-list-title">{content.tasksCardTitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                        {content.tasks.map((task) => (
                          <li key={task} className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section aria-labelledby="results-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <CardTitle id="results-title">{content.expectedResultsCardTitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                        {content.expectedResults.map((result) => (
                          <li key={result} className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </section>

          <section aria-labelledby="methodology-title" className="py-8 md:py-10 xl:py-12">
            <div className="section-shell">
              <header className="section-heading">
                <h2 id="methodology-title" className="section-title">
                  {content.methodologyTitle}
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {content.methodology.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="project-links" aria-labelledby="links-title" className="py-8 md:py-10 xl:py-12">
            <div className="section-shell">
              <header className="section-heading">
                <h2 id="links-title" className="section-title">
                  {content.linksTitle}
                </h2>
                <p className="section-copy">{content.linksDescription}</p>
              </header>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
                {content.links.map((item) => (
                  <Card key={item.label} className="border-border/70 bg-card/60">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0 text-sm leading-6 text-muted-foreground">
                      <p>{item.description}</p>
                      <Button asChild variant="outline">
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                          {language === "uk" ? "Відкрити" : "Open"} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="visual-title" className="py-8 md:py-10 xl:py-12">
            <div className="section-shell">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start xl:gap-8">
                <div>
                  <header className="section-heading">
                    <h2 id="visual-title" className="section-title">
                      {content.visualTitle}
                    </h2>
                    <p className="section-copy">{content.visualDescription}</p>
                  </header>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {content.visualFlow.map((item, index) => (
                      <Card key={item.title} className="relative overflow-hidden border-border/70 bg-card/60">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary"
                            >
                              {index + 1}
                            </span>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
                          <p>{item.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <aside aria-labelledby="visual-diagram-title" className="lg:sticky lg:top-6">
                  <Card className="border-border/70 bg-card/70">
                    <CardHeader>
                      <CardTitle id="visual-diagram-title" className="text-xl">
                        {content.visualAsideTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div
                        className="relative rounded-xl border border-border/70 bg-background/60 p-4 sm:p-5 md:p-6"
                        aria-label={content.visualDiagramLabel}
                      >
                        <div className="space-y-4">
                          {content.visualAsideBlocks.map((block, index) => (
                            <div key={block.title}>
                              <div
                                className={
                                  index === 1
                                    ? "rounded-lg border border-primary/40 bg-primary/5 p-4 text-sm text-muted-foreground"
                                    : "rounded-lg border border-border/70 bg-card/80 p-4 text-sm text-muted-foreground"
                                }
                              >
                                <p className="font-medium text-foreground">{block.title}</p>
                                <p>{block.text}</p>
                              </div>
                              {index < content.visualAsideBlocks.length - 1 ? (
                                <div aria-hidden="true" className="mx-auto h-10 w-px bg-border" />
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </section>

          <section aria-labelledby="contacts-title" className="py-8 pb-14 md:py-10 md:pb-16 xl:py-12 xl:pb-20">
            <div className="section-shell">
              <header className="section-heading">
                <h2 id="contacts-title" className="section-title">
                  {content.contactsTitle}
                </h2>
              </header>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
                {content.contacts.map((contact) => (
                  <Card key={contact.label} className="border-border/70 bg-card/60">
                    <CardHeader>
                      <CardTitle className="text-lg">{contact.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
                      {contact.href ? (
                        <Link
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline-offset-4 hover:underline"
                        >
                          {contact.value}
                        </Link>
                      ) : (
                        <p>{contact.value}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer
        description={content.footerDescription}
        topLabel={content.footerTopLabel}
        repositoryLabel={content.footerRepositoryLabel}
        contactsLabel={content.footerContactsLabel}
      />
    </div>
  )
}
