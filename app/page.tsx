import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpenText, FileText, Network, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site"

const goals = [
  "Описати підхід до безстанової автентифікації у вебсервісах з акцентом на мінімальне розкриття метаданих.",
  "Сформувати модель мережевої взаємодії клієнтів у вебдодатках з підвищеними вимогами до приватності.",
  "Підготувати основу для подальшого опису архітектури, протоколів і практичних сценаріїв використання.",
]

const tasks = [
  "Уточнити вимоги до приватності, анонімності та обміну службовими даними.",
  "Описати базові протоколи взаємодії клієнта і вебсервісу без стану сесії на сервері.",
  "Визначити вимоги до мережевої інфраструктури та сценаріїв інтеграції в сучасні вебдодатки.",
]

const expectedResults = [
  "Концептуальна модель інформаційної системи безстанової автентифікації.",
  "Опис протоколів анонімної взаємодії клієнтів у вебсистемах.",
  "Базова структура публічної сторінки проєкту для подальших етапів бакалаврської роботи.",
]

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
                    Бакалаврська робота • Accessibility & SEO
                  </p>
                  <div className="space-y-4">
                    <h1 id="hero-title" className="text-4xl font-semibold tracking-tight md:text-5xl">
                      {siteConfig.titleUk}
                    </h1>
                    <p className="text-lg text-muted-foreground md:text-xl">
                      Мережева інфраструктура та протоколи анонімної взаємодії клієнтів у вебдодатках із застосуванням безстанової автентифікації.
                    </p>
                    <p className="text-base text-muted-foreground md:text-lg">{siteConfig.titleEn}</p>
                  </div>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                    Публічна стартова сторінка академічного проєкту, присвяченого безстановій автентифікації,
                    мінімізації метаданих та анонімній взаємодії клієнтів у вебдодатках. На цьому етапі сторінка
                    формує базову структуру для подальшого розширення змісту бакалаврської роботи.
                  </p>
                  <nav aria-label="Основні дії сторінки" className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild>
                      <Link href="#thesis-overview">Перейти до структури</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link
                        href={siteConfig.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Відкрити публічний репозиторій бакалаврського проєкту"
                      >
                        Репозиторій проєкту <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
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
                      <CardTitle id="project-summary-title" className="text-xl">Базовий профіль етапу</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium text-foreground">Тематичний фокус</p>
                        <p>Stateless authentication, privacy-preserving interaction, metadata minimization.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Статус</p>
                        <p>Початкове налаштування структури, доступності та SEO-основи публічної сторінки.</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Обмеження етапу</p>
                        <p>Без бекенду, секретів, інтеграцій і функцій, залежних від середовища виконання.</p>
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
                  Структура презентації дослідження
                </h2>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  Нижче подано базові тематичні блоки, які описують контекст, предмет дослідження та напрямки
                  подальшого наповнення сторінки.
                </p>
              </header>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <section aria-labelledby="overview-description-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <BookOpenText aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-description-title" className="text-lg">Короткий опис</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      Сторінка описує академічний проєкт, пов'язаний із мережевою інфраструктурою та протоколами
                      анонімної взаємодії клієнтів у вебсервісах.
                    </CardContent>
                  </Card>
                </section>

                <section aria-labelledby="overview-privacy-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <ShieldCheck aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-privacy-title" className="text-lg">Приватність</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      У центрі уваги перебуває зменшення обсягу службової інформації, що розкривається під час
                      автентифікації та мережевої взаємодії.
                    </CardContent>
                  </Card>
                </section>

                <section aria-labelledby="overview-protocols-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Network aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-protocols-title" className="text-lg">Протоколи</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      Наступні етапи сторінки деталізуватимуть мережеві сценарії, обмін повідомленнями та підходи до
                      анонімної взаємодії.
                    </CardContent>
                  </Card>
                </section>

                <section aria-labelledby="overview-extensibility-title">
                  <Card className="h-full border-border/70 bg-card/60">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <FileText aria-hidden="true" className="h-5 w-5 text-primary" />
                        <CardTitle id="overview-extensibility-title" className="text-lg">Розширюваність</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-6 text-muted-foreground">
                      Поточна структура спеціально побудована як базовий каркас для додавання повного змісту
                      бакалаврської роботи без зміни архітектури сторінки.
                    </CardContent>
                  </Card>
                </section>
              </div>
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
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {goals.map((goal) => (
                      <li key={goal} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
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
                        {tasks.map((task) => (
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
                        {expectedResults.map((result) => (
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

          <section aria-labelledby="contacts-title" className="py-8 pb-16 md:py-10 md:pb-20">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <header className="mb-6 max-w-3xl space-y-3">
                <h2 id="contacts-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Контакти та актуалізація вмісту
                </h2>
              </header>
              <Card className="border-border/70 bg-card/60">
                <CardContent className="space-y-4 pt-6 text-sm leading-6 text-muted-foreground">
                  <p>
                    На цьому етапі контактний блок залишається нейтральним і може бути уточнений після затвердження
                    остаточної структури бакалаврської роботи.
                  </p>
                  <p>
                    Для технічної прив'язки публічної сторінки можна використовувати репозиторій проєкту або замінити
                    цей блок на наукового керівника, кафедру чи інші погоджені контактні дані.
                  </p>
                  <Button asChild variant="outline">
                    <Link
                      href={siteConfig.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Відкрити публічний репозиторій для уточнення контактної та проєктної інформації"
                    >
                      Відкрити публічний репозиторій <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
