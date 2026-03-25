import type { Language } from "@/lib/thesis-content"

type ErrorMessageBundle = {
  title: string
  description: string
  primaryAction: string
  secondaryAction: string
  reportAction: string
  reportHint: string
  errorIdLabel: string
}

type ErrorMessages = {
  notFound: ErrorMessageBundle
  global: ErrorMessageBundle
}

export const errorMessages: Record<Language, ErrorMessages> = {
  uk: {
    notFound: {
      title: "Сторінку не знайдено",
      description:
        "Можливо, посилання застаріло або сторінку було переміщено. Спробуйте повернутися на головну сторінку або повідомити про проблему.",
      primaryAction: "На головну",
      secondaryAction: "Оновити сторінку",
      reportAction: "Повідомити про проблему",
      reportHint: "Якщо проблема повторюється, додайте короткий опис і код помилки у звіті.",
      errorIdLabel: "Ідентифікатор помилки",
    },
    global: {
      title: "Сталася помилка застосунку",
      description:
        "Ми вже зафіксували технічну інформацію для діагностики. Спробуйте повторити дію або поверніться на головну сторінку.",
      primaryAction: "Спробувати ще раз",
      secondaryAction: "На головну",
      reportAction: "Повідомити про проблему",
      reportHint: "Надішліть код помилки разом із коротким описом того, що ви робили перед збоєм.",
      errorIdLabel: "Ідентифікатор помилки",
    },
  },
  en: {
    notFound: {
      title: "Page not found",
      description:
        "The link may be outdated or the page may have been moved. Try returning to the home page or report the issue.",
      primaryAction: "Go home",
      secondaryAction: "Refresh page",
      reportAction: "Report issue",
      reportHint: "If the problem repeats, include a short description and the error identifier in the report.",
      errorIdLabel: "Error identifier",
    },
    global: {
      title: "An application error occurred",
      description:
        "Technical details have been captured for diagnostics. Try the action again or return to the home page.",
      primaryAction: "Try again",
      secondaryAction: "Go home",
      reportAction: "Report issue",
      reportHint: "Include the error identifier and a short description of what you were doing before the failure.",
      errorIdLabel: "Error identifier",
    },
  },
}

export function resolveErrorLanguage(language?: string | null): Language {
  return language?.toLowerCase().startsWith("en") ? "en" : "uk"
}
