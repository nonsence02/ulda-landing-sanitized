export type Language = "uk" | "en"

export type ThesisContact = {
  label: string
  value: string
  href?: string
}

export type ThesisLink = {
  label: string
  href: string
  description: string
}

export type VisualFlowItem = {
  title: string
  text: string
}

export type OverviewCard = {
  title: string
  text: string
}

export type ThesisSummaryItem = {
  label: string
  value: string
}

export type ThesisVisualAsideBlock = {
  title: string
  text: string
}

export type ThesisTranslation = {
  languageLabel: string
  languageToggleLabel: string
  stageLabel: string
  heroLead: string
  title: string
  titleFull: string
  alternateTitle: string
  shortDescription: string
  heroPrimaryAction: string
  heroSecondaryAction: string
  projectSummaryTitle: string
  projectSummary: ThesisSummaryItem[]
  overviewTitle: string
  overviewDescription: string
  overviewCards: OverviewCard[]
  keywordsTitle: string
  keywords: string[]
  relevanceTitle: string
  relevance: string
  goalTitle: string
  goal: string
  tasksTitle: string
  tasksCardTitle: string
  tasks: string[]
  expectedResultsTitle: string
  expectedResultsCardTitle: string
  expectedResults: string[]
  methodologyTitle: string
  methodology: string[]
  linksTitle: string
  linksDescription: string
  links: ThesisLink[]
  visualTitle: string
  visualDescription: string
  visualFlow: VisualFlowItem[]
  visualAsideTitle: string
  visualDiagramLabel: string
  visualAsideBlocks: ThesisVisualAsideBlock[]
  contactsTitle: string
  contacts: ThesisContact[]
  footerDescription: string
  footerTopLabel: string
  footerRepositoryLabel: string
  footerContactsLabel: string
}

/**
 * Loads thesis translation content on demand so that the non-default language
 * does not inflate the initial client bundle.
 *
 * @param language - Translation code requested by the UI.
 * @returns The content payload for the requested language.
 */
export async function loadThesisTranslation(language: Language): Promise<ThesisTranslation> {
  if (language === "uk") {
    const translationModule = await import("@/lib/thesis-content.uk")
    return translationModule.ukThesisContent
  }

  const translationModule = await import("@/lib/thesis-content.en")
  return translationModule.enThesisContent
}
