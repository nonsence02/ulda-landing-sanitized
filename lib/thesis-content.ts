export type Language = "uk" | "en"

type ThesisContact = {
  label: string
  value: string
  href?: string
}

type ThesisLink = {
  label: string
  href: string
  description: string
}

type VisualFlowItem = {
  title: string
  text: string
}

type OverviewCard = {
  title: string
  text: string
}

type ThesisTranslation = {
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
  projectSummary: Array<{ label: string; value: string }>
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
  visualAsideBlocks: Array<{ title: string; text: string }>
  contactsTitle: string
  contacts: ThesisContact[]
  footerDescription: string
  footerTopLabel: string
  footerRepositoryLabel: string
  footerContactsLabel: string
}

export const thesisContent: Record<Language, ThesisTranslation> = {
  uk: {
    languageLabel: "Українська",
    languageToggleLabel: "Перемкнути мову сторінки на українську",
    stageLabel: "Бакалаврська робота • Multilingual Support",
    heroLead:
      "Мережева інфраструктура та протоколи анонімної взаємодії клієнтів у вебдодатках із застосуванням безстанової автентифікації.",
    title:
      "Інформаційна система безстанової автентифікації для вебсервісів із мінімальним розкриттям метаданих",
    titleFull:
      "Інформаційна система безстанової автентифікації для вебсервісів із мінімальним розкриттям метаданих. Мережева інфраструктура та протоколи анонімної взаємодії клієнтів у вебдодатках із застосуванням безстанової автентифікації.",
    alternateTitle:
      "Information system of stateless authentication for web services with minimal metadata disclosure. Network infrastructure and protocols of anonymous client interaction in web applications using stateless authentication.",
    shortDescription:
      "Бакалаврська робота присвячена побудові інформаційної системи безстанової автентифікації для вебсервісів із мінімальним розкриттям метаданих та опису мережевої інфраструктури анонімної взаємодії клієнтів у сучасних вебдодатках.",
    heroPrimaryAction: "Перейти до змісту",
    heroSecondaryAction: "Корисні матеріали",
    projectSummaryTitle: "Профіль дослідження",
    projectSummary: [
      {
        label: "Тематичний фокус",
        value: "Stateless authentication, privacy-preserving interaction, metadata minimization.",
      },
      {
        label: "Поточний етап",
        value: "Розгортання повного змістового шару публічної академічної сторінки.",
      },
      {
        label: "Предмет дослідження",
        value: "Мережева інфраструктура, приватність та протоколи анонімної взаємодії у вебсервісах.",
      },
    ],
    overviewTitle: "Зміст дослідження",
    overviewDescription:
      "Нижче подано ключові змістові блоки бакалаврської роботи, підготовлені для публічної презентації теми, мети та результатів дослідження.",
    overviewCards: [
      {
        title: "Короткий опис",
        text: "Публічна сторінка презентує тему бакалаврської роботи, присвяченої безстановій автентифікації, мінімізації метаданих і мережевим протоколам приватної взаємодії у вебсервісах.",
      },
      {
        title: "Приватність",
        text: "Дослідження орієнтоване на зменшення службової інформації, що розкривається під час автентифікації, маршрутизації запитів та супроводу клієнтських сесій.",
      },
      {
        title: "Протоколи",
        text: "Окрему увагу приділено моделюванню мережевої інфраструктури, послідовності обміну повідомленнями та правилам анонімної взаємодії клієнтів у вебдодатках.",
      },
      {
        title: "Розширюваність",
        text: "Структура сторінки підготовлена для поступового додавання повного тексту, ілюстративних матеріалів, посилань на документацію та супровідних академічних матеріалів.",
      },
    ],
    keywordsTitle: "Ключові слова",
    keywords: [
      "безстанова автентифікація",
      "мінімізація метаданих",
      "анонімна взаємодія клієнтів",
      "мережева інфраструктура",
      "ULDA протоколи",
    ],
    relevanceTitle: "Актуальність теми",
    relevance:
      "Зростання кількості вебсервісів, що опрацьовують чутливі дані, підвищує вимоги до приватності та захисту службової інформації. Тема є актуальною через необхідність зменшення обсягу метаданих, які супроводжують автентифікацію, сесійні механізми та мережеву взаємодію клієнта з вебсервісом.",
    goalTitle: "Мета дослідження",
    goal:
      "Розробити концептуальні засади інформаційної системи безстанової автентифікації для вебсервісів із мінімальним розкриттям метаданих і сформувати модель мережевої взаємодії клієнтів у вебдодатках із підвищеними вимогами до приватності.",
    tasksTitle: "Завдання та очікувані результати",
    tasksCardTitle: "Завдання",
    tasks: [
      "Проаналізувати сучасні підходи до автентифікації у вебсервісах та визначити їхні обмеження з погляду приватності.",
      "Сформулювати вимоги до мінімізації метаданих під час взаємодії клієнта з вебсервісом.",
      "Описати мережеву інфраструктуру та протоколи анонімної взаємодії клієнтів у вебдодатках.",
      "Визначити роль ULDA-протоколів у побудові безстанової моделі автентифікації.",
      "Систематизувати очікувані практичні результати та напрями подальшого розвитку дослідження.",
    ],
    expectedResultsTitle: "Очікувані результати",
    expectedResultsCardTitle: "Очікувані результати",
    expectedResults: [
      "структурована модель інформаційної системи безстанової автентифікації",
      "опис протоколів анонімної взаємодії клієнтів у вебдодатках",
      "визначення вимог до мережевої інфраструктури для мінімізації метаданих",
      "публічна академічна сторінка проєкту з підготовленим змістовим шаром",
    ],
    methodologyTitle: "Методологія дослідження",
    methodology: [
      "аналіз наукових і прикладних джерел з веббезпеки та приватності",
      "порівняння підходів до session-based і stateless authentication",
      "моделювання мережевої взаємодії клієнтів у вебсистемах",
      "узагальнення архітектурних принципів privacy-preserving вебсервісів",
    ],
    linksTitle: "Корисні матеріали",
    linksDescription:
      "Розділ містить публічні посилання на поточний текстовий опис дослідження, репозиторій і технічну документацію, пов'язану з предметною областю.",
    links: [
      {
        label: "Повний текст",
        href: "https://github.com/nonsence02/ulda-landing-sanitized#readme",
        description: "Поточна публічна версія змісту та структури бакалаврської роботи.",
      },
      {
        label: "Репозиторій",
        href: "https://github.com/nonsence02/ulda-landing-sanitized",
        description: "Вихідний код і матеріали публічної sanitized-версії академічного лендингу.",
      },
      {
        label: "Документація",
        href: "https://doc.ulda.io",
        description: "Відкриті матеріали, пов'язані з протоколами та технічним контекстом ULDA.",
      },
    ],
    visualTitle: "Ілюстративна модель дослідження",
    visualDescription:
      "Схематичне представлення демонструє, як безстанова автентифікація, мережева маршрутизація та мінімізація метаданих поєднуються в єдиній архітектурній моделі вебсервісу.",
    visualFlow: [
      {
        title: "Клієнтський вузол",
        text: "Формує запит без тривалого серверного стану та мінімізує службові сліди взаємодії.",
      },
      {
        title: "Privacy-preserving routing",
        text: "Передбачає контрольовану мережеву маршрутизацію та зменшення обсягу розкритих метаданих.",
      },
      {
        title: "Stateless verification",
        text: "Перевірка автентичності базується на токенах, протоколах і правилах валідації без сесійної залежності.",
      },
    ],
    visualAsideTitle: "Архітектурний акцент",
    visualDiagramLabel: "Схема взаємодії клієнта, мережевого шару та stateless verification",
    visualAsideBlocks: [
      {
        title: "Client request",
        text: "Анонімізований запит із мінімізованими службовими атрибутами.",
      },
      {
        title: "Network mediation layer",
        text: "Контроль розкриття метаданих і керування протоколами взаємодії.",
      },
      {
        title: "Stateless validation",
        text: "Перевірка запиту без серверної сесії як постійного джерела стану.",
      },
    ],
    contactsTitle: "Контактна інформація",
    contacts: [
      {
        label: "Автор дослідження",
        value: "Vitalii Radko",
      },
      {
        label: "Публічний профіль",
        value: "github.com/nonsence02",
        href: "https://github.com/nonsence02",
      },
      {
        label: "Репозиторій проєкту",
        value: "github.com/nonsence02/ulda-landing-sanitized",
        href: "https://github.com/nonsence02/ulda-landing-sanitized",
      },
    ],
    footerDescription: "Публічна академічна сторінка бакалаврської роботи з безстанової автентифікації.",
    footerTopLabel: "На початок",
    footerRepositoryLabel: "Репозиторій",
    footerContactsLabel: "Контакти",
  },
  en: {
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
  },
}
