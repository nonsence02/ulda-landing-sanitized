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

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <main id="main-content" className="flex-grow">
        <section className="border-b border-border/60">
          <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)] lg:items-start">
              <header className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  Бакалаврська робота • Initial Setup
                </p>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
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
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="#thesis-overview">Перейти до структури</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={siteConfig.repositoryUrl} target="_blank" rel="noopener noreferrer">
                      Репозиторій проєкту <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </header>

              <aside aria-label="Коротка інформація про проєкт">
                <Card className="h-full border-border/70 bg-card/70">
                  <CardHeader>
                    <CardTitle className="text-xl">Базовий профіль етапу</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Тематичний фокус</p>
                      <p>Stateless authentication, privacy-preserving interaction, metadata minimization.</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Статус</p>
                      <p>Початкове налаштування структури та SEO-основи публічної сторінки.</p>
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

        <section id="thesis-overview" className="py-14 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <Card className="border-border/70 bg-card/60">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpenText className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Короткий опис</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Сторінка описує академічний проєкт, пов'язаний із мережевою інфраструктурою та протоколами
                  анонімної взаємодії клієнтів у вебсервісах.
                </CardContent>
              </Card>

              <Card className="border-border/70 bg-card/60">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Приватність</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  У центрі уваги перебуває зменшення обсягу службової інформації, що розкривається під час
                  автентифікації та мережевої взаємодії.
                </CardContent>
              </Card>

              <Card className="border-border/70 bg-card/60">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Network className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Протоколи</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Наступні етапи сторінки деталізуватимуть мережеві сценарії, обмін повідомленнями та підходи до
                  анонімної взаємодії.
                </CardContent>
              </Card>

              <Card className="border-border/70 bg-card/60">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Розширюваність</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Поточна структура спеціально побудована як базовий каркас для додавання повного змісту
                  бакалаврської роботи без зміни архітектури сторінки.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section aria-labelledby="goals-title" className="py-8 md:py-10">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <Card className="border-border/70 bg-card/60">
              <CardHeader>
                <CardTitle id="goals-title">Мета дослідження</CardTitle>
              </CardHeader>
              <CardContent>
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
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-border/70 bg-card/60">
                <CardHeader>
                  <CardTitle id="tasks-title">Завдання</CardTitle>
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

              <Card className="border-border/70 bg-card/60">
                <CardHeader>
                  <CardTitle>Очікувані результати</CardTitle>
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
            </div>
          </div>
        </section>

        <section aria-labelledby="contacts-title" className="py-8 pb-16 md:py-10 md:pb-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <Card className="border-border/70 bg-card/60">
              <CardHeader>
                <CardTitle id="contacts-title">Контакти та актуалізація вмісту</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  На цьому етапі контактний блок залишається нейтральним і може бути уточнений після затвердження
                  остаточної структури бакалаврської роботи.
                </p>
                <p>
                  Для технічної прив'язки публічної сторінки можна використовувати репозиторій проєкту або замінити
                  цей блок на наукового керівника, кафедру чи інші погоджені контактні дані.
                </p>
                <Button asChild variant="outline">
                  <Link href={siteConfig.repositoryUrl} target="_blank" rel="noopener noreferrer">
                    Відкрити публічний репозиторій <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
