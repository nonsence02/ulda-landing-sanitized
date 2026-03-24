import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpenText, FileText, Network, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site"
import { thesisContent } from "@/lib/thesis-content"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteConfig.titleUk,
  description: siteConfig.description,
  inLanguage: "uk",
  url: siteConfig.url,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.shortName,
    url: siteConfig.url,
  },
  about: siteConfig.topics,
  mainEntity: {
    "@type": "CreativeWork",
    name: siteConfig.titleUkFull,
    alternateName: siteConfig.titleEnFull,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
    educationalLevel: "Bachelor",
    inLanguage: ["uk", "en"],
    keywords: siteConfig.keywords.join(", "),
  },
}

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content" className="flex-grow">
        <article aria-labelledby="hero-title">
          <section aria-labelledby="hero-title" className="border-b border-border/60">
            <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)] lg:items-start">
                <header className="space-y-6">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    Бакалаврська робота • Content Implementation
                  </p>
                  <div className="space-y-4">
                    <h1 id="hero-title" className="text-4xl font-semibold tracking-tight md:text-5xl">
                      {siteConfig.titleUk}
                    </h1>
                    <p className="text-lg text-muted-foreground md:text-xl">
                      Мережева інфраструктура та протоколи анонімної взаємодії клієнтів у вебдодатках із застосуванням
                      безстанової автентифікації.
                    </p>
                    <p className="text-base text-muted-foreground md:text-lg">{siteConfig.titleEn}</p>
                  </div>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                    {thesisContent.shortDescription}
                  </p>
                  <nav aria-label="Основні дії сторінки" className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <Link href="#thesis-overview">Перейти до змісту</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="#project-links">Корисні матеріали</Link>
                    </Button>
                  </nav>
                </header>

                <aside aria-labelledby="project-summary-title" className="space-y-6">
                  <figure className="flex items-center justify-center rounded-lg border border-border/70 bg-card/50 p-6">
                    <Image
                      src="/logomark.png"
                      alt="Символічний логотип ULDA як візуальний маркер дослідження приватності та безстанової автентифікації"
                      width={160}
                      height={160}
                      priority
                      className="h-24 w-24 rounded-lg shadow-md md:h-32 md:w-32"
                    />
                  </figure>

                  <Card className="h-full border-border/70 bg-card/70">
                    <CardHeader>
                      <CardTitle id="project-summary-title" className="text-xl">
                        Профіль дослідження
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">Тематичний фокус</p>
                        <p>Stateless authentication, privacy-preserving interaction, metadata minimization.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Поточний етап</p>
                        <p>Розгортання повного змістового шару публічної академічної сторінки.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Предмет дослідження</p>
                        <p>Мережева інфраструктура, приватність та протоколи анонімної взаємодії у вебсервісах.</p>
                      </div>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </section>

          <section id="thesis-overview" aria-labelledby="overview-title" className="py-14 md:py-20">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-8 max-w-3xl space-y-3">
                <h2 id="overview-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Зміст дослідження
                </h2>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  Нижче подано ключові змістові блоки бакалаврської роботи, підготовлені для публічної презентації
                  теми, мети та результатів дослідження.
                </p>
              </header>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <section aria-labelledby="overview-description-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <BookOpenText aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-description-title" className="text-lg">
                          Короткий опис
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      Публічна сторінка презентує тему бакалаврської роботи, присвяченої безстановій автентифікації,
                      мінімізації метаданих і мережевим протоколам приватної взаємодії у вебсервісах.
                    </CardContent>
                  </Card>
                </section>

                <section aria-labelledby="overview-privacy-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <ShieldCheck aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-privacy-title" className="text-lg">
                          Приватність
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      Дослідження орієнтоване на зменшення службової інформації, що розкривається під час
                      автентифікації, маршрутизації запитів та супроводу клієнтських сесій.
                    </CardContent>
                  </Card>
                </section>

                <section aria-labelledby="overview-protocols-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Network aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-protocols-title" className="text-lg">
                          Протоколи
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      Окрему увагу приділено моделюванню мережевої інфраструктури, послідовності обміну повідомленнями
                      та правилам анонімної взаємодії клієнтів у вебдодатках.
                    </CardContent>
                  </Card>
                </section>

                <section aria-labelledby="overview-extensibility-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <FileText aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-extensibility-title" className="text-lg">
                          Розширюваність
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      Структура сторінки підготовлена для поступового додавання повного тексту, ілюстративних
                      матеріалів, посилань на документацію та супровідних академічних матеріалів.
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </section>

          <section aria-labelledby="keywords-title" className="py-8 md:py-10">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="keywords-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Ключові слова
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="pt-6">
                  <ul className="flex flex-wrap gap-3 text-sm text-muted-foreground" aria-label="Ключові слова дослідження">
                    {thesisContent.keywords.map((keyword) => (
                      <li key={keyword} className="rounded-full border border-border/80 bg-background/60 px-4 py-2">
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="relevance-title" className="py-8 md:py-10">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="relevance-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Актуальність теми
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="pt-6 text-sm leading-7 text-muted-foreground">
                  <p>{thesisContent.relevance}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="goals-title" className="py-8 md:py-10">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="goals-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Мета дослідження
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="pt-6 text-sm leading-7 text-muted-foreground">
                  <p>{thesisContent.goal}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section aria-labelledby="tasks-title" className="py-8 md:py-10">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="tasks-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Завдання та очікувані результати
                </h2>
              </header>
              <div className="grid gap-6 lg:grid-cols-2">
                <section aria-labelledby="tasks-list-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <CardTitle id="tasks-list-title">Завдання</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                        {thesisContent.tasks.map((task) => (
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
                      <CardTitle id="results-title">Очікувані результати</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                        {thesisContent.expectedResults.map((result) => (
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

          <section aria-labelledby="methodology-title" className="py-8 md:py-10">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="methodology-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Методологія дослідження
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {thesisContent.methodology.map((item) => (
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

          <section id="project-links" aria-labelledby="links-title" className="py-8 md:py-10">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="links-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Корисні матеріали
                </h2>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  Розділ містить публічні посилання на поточний текстовий опис дослідження, репозиторій і технічну
                  документацію, пов'язану з предметною областю.
                </p>
              </header>
              <div className="grid gap-6 lg:grid-cols-3">
                {thesisContent.links.map((item) => (
                  <Card key={item.label} className="border-border/70 bg-card/60">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0 text-sm leading-6 text-muted-foreground">
                      <p>{item.description}</p>
                      <Button asChild variant="outline">
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                          Відкрити <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="visual-title" className="py-8 md:py-10">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
                <div>
                  <header className="mb-6 max-w-3xl space-y-3">
                    <h2 id="visual-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                      Ілюстративна модель дослідження
                    </h2>
                    <p className="text-sm leading-6 text-muted-foreground md:text-base">
                      Схематичне представлення демонструє, як безстанова автентифікація, мережева маршрутизація та
                      мінімізація метаданих поєднуються в єдиній архітектурній моделі вебсервісу.
                    </p>
                  </header>

                  <div className="grid gap-4 md:grid-cols-3">
                    {thesisContent.visualFlow.map((item, index) => (
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

                <aside aria-labelledby="visual-diagram-title">
                  <Card className="border-border/70 bg-card/70">
                    <CardHeader>
                      <CardTitle id="visual-diagram-title" className="text-xl">
                        Архітектурний акцент
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div
                        className="relative rounded-xl border border-border/70 bg-background/60 p-6"
                        aria-label="Схема взаємодії клієнта, мережевого шару та stateless verification"
                      >
                        <div className="space-y-4">
                          <div className="rounded-lg border border-border/70 bg-card/80 p-4 text-sm text-muted-foreground">
                            <p className="font-medium text-foreground">Client request</p>
                            <p>Анонімізований запит із мінімізованими службовими атрибутами.</p>
                          </div>
                          <div aria-hidden="true" className="mx-auto h-10 w-px bg-border" />
                          <div className="rounded-lg border border-primary/40 bg-primary/5 p-4 text-sm text-muted-foreground">
                            <p className="font-medium text-foreground">Network mediation layer</p>
                            <p>Контроль розкриття метаданих і керування протоколами взаємодії.</p>
                          </div>
                          <div aria-hidden="true" className="mx-auto h-10 w-px bg-border" />
                          <div className="rounded-lg border border-border/70 bg-card/80 p-4 text-sm text-muted-foreground">
                            <p className="font-medium text-foreground">Stateless validation</p>
                            <p>Перевірка запиту без серверної сесії як постійного джерела стану.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </section>

          <section aria-labelledby="contacts-title" className="py-8 pb-16 md:py-10 md:pb-20">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="contacts-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Контактна інформація
                </h2>
              </header>
              <div className="grid gap-6 lg:grid-cols-3">
                {thesisContent.contacts.map((contact) => (
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
      <Footer />
    </div>
  )
}
