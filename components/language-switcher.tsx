"use client"

import type { Language } from "@/lib/thesis-content"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  activeLanguage: Language
  onChange: (language: Language) => void
}

const options: Array<{ value: Language; shortLabel: string; longLabel: string }> = [
  { value: "uk", shortLabel: "UA", longLabel: "Українська" },
  { value: "en", shortLabel: "EN", longLabel: "English" },
]

export function LanguageSwitcher({ activeLanguage, onChange }: LanguageSwitcherProps) {
  return (
    <div
      className="inline-flex w-full items-center rounded-xl border border-border/70 bg-background/70 p-1 sm:w-auto"
      role="group"
      aria-label="Language switcher"
    >
      {options.map((option) => {
        const isActive = option.value === activeLanguage

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            aria-label={option.longLabel}
            className={cn(
              "inline-flex min-w-0 flex-1 items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:flex-none sm:px-4",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <span aria-hidden="true" className="sm:hidden">
              {option.shortLabel}
            </span>
            <span className="hidden sm:inline">{option.longLabel}</span>
          </button>
        )
      })}
    </div>
  )
}
