import type { ThesisTranslation } from "@/lib/thesis-content"

export const enThesisContent: ThesisTranslation = {
    languageLabel: "English",
    languageToggleLabel: "Switch page language to English",
    stageLabel: "Bachelor Thesis • Multilingual Support",
    heroLead:
      "Network infrastructure and protocols of anonymous client interaction in web applications using stateless authentication.",
    title:
      "Information system of stateless authentication for web services with minimal metadata disclosure",
    titleFull:
      "Information system of stateless authentication for web services with minimal metadata disclosure. Network infrastructure and protocols of anonymous client interaction in web applications using stateless authentication.",
    alternateTitle:
      "Інформаційна система безстанової автентифікації для вебсервісів із мінімальним розкриттям метаданих. Мережева інфраструктура та протоколи анонімної взаємодії клієнтів у вебдодатках із застосуванням безстанової автентифікації.",
    shortDescription:
      "This bachelor thesis explores an information system of stateless authentication for web services with minimal metadata disclosure and describes the network infrastructure required for anonymous client interaction in modern web applications.",
    heroPrimaryAction: "Go to content",
    heroSecondaryAction: "Research materials",
    projectSummaryTitle: "Research profile",
    projectSummary: [
      {
        label: "Topical focus",
        value: "Stateless authentication, privacy-preserving interaction, metadata minimization.",
      },
      {
        label: "Current stage",
        value: "Implementation of the complete content layer for the public academic presentation page.",
      },
      {
        label: "Research subject",
        value: "Network infrastructure, privacy, and anonymous interaction protocols in web services.",
      },
    ],
    overviewTitle: "Research content overview",
    overviewDescription:
      "The sections below present the main content blocks of the bachelor thesis prepared for a public academic presentation of the topic, goal, and expected outcomes.",
    overviewCards: [
      {
        title: "Short overview",
        text: "The public page presents a bachelor thesis focused on stateless authentication, metadata minimization, and network protocols for privacy-preserving interaction in web services.",
      },
      {
        title: "Privacy",
        text: "The research emphasizes reducing the amount of service information exposed during authentication, request routing, and client session handling.",
      },
      {
        title: "Protocols",
        text: "Special attention is given to modelling network infrastructure, message exchange sequences, and anonymous client interaction rules in web applications.",
      },
      {
        title: "Extensibility",
        text: "The page structure is prepared for gradual expansion with full thesis text, illustrative materials, documentation links, and related academic resources.",
      },
    ],
    keywordsTitle: "Keywords",
    keywords: [
      "stateless authentication",
      "metadata minimization",
      "anonymous client interaction",
      "network infrastructure",
      "ULDA protocols",
    ],
    relevanceTitle: "Research relevance",
    relevance:
      "The growing number of web services processing sensitive data increases the demand for privacy and protection of operational information. The topic is relevant because it addresses the need to reduce metadata disclosed during authentication, session handling, and client interaction with web services.",
    goalTitle: "Research goal",
    goal:
      "To define the conceptual foundations of an information system of stateless authentication for web services with minimal metadata disclosure and to formulate a model of client interaction in privacy-sensitive web applications.",
    tasksTitle: "Research tasks and expected results",
    tasksCardTitle: "Research tasks",
    tasks: [
      "Analyse current authentication approaches in web services and determine their privacy-related limitations.",
      "Formulate requirements for metadata minimization during client interaction with web services.",
      "Describe the network infrastructure and protocols of anonymous client interaction in web applications.",
      "Identify the role of ULDA protocols in building a stateless authentication model.",
      "Systematize the expected practical outcomes and further development directions of the research.",
    ],
    expectedResultsTitle: "Expected results",
    expectedResultsCardTitle: "Expected results",
    expectedResults: [
      "a structured model of a stateless authentication information system",
      "a description of anonymous client interaction protocols in web applications",
      "defined infrastructure requirements for metadata minimization",
      "a public academic project page with a complete content layer",
    ],
    methodologyTitle: "Research methodology",
    methodology: [
      "analysis of scientific and applied sources on web security and privacy",
      "comparison of session-based and stateless authentication approaches",
      "modelling of client interaction within web systems",
      "generalization of architectural principles for privacy-preserving web services",
    ],
    linksTitle: "Research materials",
    linksDescription:
      "This section contains public links to the current thesis text outline, repository, and technical documentation related to the subject area.",
    links: [
      {
        label: "Full text",
        href: "https://github.com/nonsence02/ulda-landing-sanitized#readme",
        description: "Current public version of the thesis structure and descriptive materials.",
      },
      {
        label: "Repository",
        href: "https://github.com/nonsence02/ulda-landing-sanitized",
        description: "Source code and materials of the public sanitized academic landing page.",
      },
      {
        label: "Documentation",
        href: "https://doc.ulda.io",
        description: "Open materials related to ULDA protocols and the technical context of the research topic.",
      },
    ],
    visualTitle: "Illustrative research model",
    visualDescription:
      "The schematic block demonstrates how stateless authentication, network mediation, and metadata minimization are combined into a single architectural model for a web service.",
    visualFlow: [
      {
        title: "Client node",
        text: "Builds a request without long-lived server state and minimizes operational interaction traces.",
      },
      {
        title: "Privacy-preserving routing",
        text: "Assumes controlled routing logic and reduction of exposed metadata.",
      },
      {
        title: "Stateless verification",
        text: "Authenticity is validated through tokens, protocols, and rules without session-bound dependence.",
      },
    ],
    visualAsideTitle: "Architectural emphasis",
    visualDiagramLabel: "Diagram of client interaction, network mediation, and stateless verification",
    visualAsideBlocks: [
      {
        title: "Client request",
        text: "An anonymized request with minimized service attributes.",
      },
      {
        title: "Network mediation layer",
        text: "Controls metadata disclosure and governs interaction protocols.",
      },
      {
        title: "Stateless validation",
        text: "Validates requests without relying on server sessions as a persistent source of state.",
      },
    ],
    contactsTitle: "Contact information",
    contacts: [
      {
        label: "Research author",
        value: "Vitalii Radko",
      },
      {
        label: "Public profile",
        value: "github.com/nonsence02",
        href: "https://github.com/nonsence02",
      },
      {
        label: "Project repository",
        value: "github.com/nonsence02/ulda-landing-sanitized",
        href: "https://github.com/nonsence02/ulda-landing-sanitized",
      },
    ],
    footerDescription: "Public academic landing page for a bachelor thesis on stateless authentication.",
    footerTopLabel: "Back to top",
    footerRepositoryLabel: "Repository",
    footerContactsLabel: "Contacts",
  }
