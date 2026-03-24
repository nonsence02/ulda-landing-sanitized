# ULDA Landing Public Mirror

Публічна санітизована копія академічного лендингу бакалаврської роботи про безстанову автентифікацію, мінімальне розкриття метаданих і протоколи анонімної взаємодії клієнтів у вебзастосунках.

## Призначення репозиторію

Це frontend-орієнтований Next.js + TypeScript проєкт, який збирається як статичний сайт і публікується через GitHub Pages. Репозиторій не містить реального бекенду, production-бази даних, кеш-сервера, message broker або секретозалежної інфраструктури.

## Швидкий старт з чистої машини

### 1. Встанови потрібне ПЗ

- `Git`
- `Node.js 20.x`
- `npm 10+`
- `PowerShell 7+` для helper-скриптів у `docs/scripts/` або звичайний shell для ручного запуску npm-команд
- `Docker` не є обов'язковим; Dockerfile у репозиторії не є основним production-шляхом для поточного GitHub Pages deployment

### 2. Підготуй середовище

Проєкт не потребує секретів для локального запуску. Файл `.env.example` залишено як довідковий шаблон, але для цієї санітизованої версії зазвичай не потрібно створювати `.env.local`.

### 3. Клонуй репозиторій

```bash
git clone https://github.com/nonsence02/ulda-landing-sanitized.git
cd ulda-landing-sanitized
```

### 4. Встанови залежності

```bash
npm install
```

### 5. Запусти локальну розробку

```bash
npm run dev
```

Після запуску сайт буде доступний за адресою `http://localhost:3000`.

## Основні команди

```bash
npm run build
npm run lint
npm run lint:fix
npm run typecheck
npm run check
npm run docs:build
npm run docs:check
```

## Project-specific notes

- primary deployment model: `GitHub Actions -> GitHub Pages`
- `next.config.mjs` використовує `output: "export"` для статичного експорту
- production DB, cache server, app server і message broker для цього проєкту не застосовні
- Dockerfile присутній у репозиторії, але поточний підтримуваний production-потік орієнтований саме на статичний Pages deployment

## Додаткова документація

- `docs/deployment.md` - модель розгортання, архітектура, перевірка healthy state
- `docs/update.md` - процедура оновлення
- `docs/backup.md` - стратегія backup/restore для цього репозиторію
- `docs/generate_docs.md` - генерація TypeDoc документації
- `docs/architecture.md` - архітектурні рішення
- `docs/component-interactions.md` - взаємодія компонентів

## Helper scripts

У `docs/scripts/` зібрано практичні PowerShell-скрипти для типових операцій:

- `dev.ps1` - install + dev startup
- `prod-build.ps1` - повний production-oriented build
- `update.ps1` - update workflow для робочої копії
- `backup.ps1` - створення backup snapshot
- `rollback.ps1` - відновлення з backup snapshot

## GitHub Pages deployment

Основний production deployment виконується через GitHub Actions. Workflow:

1. встановлює залежності;
2. виконує статичну збірку Next.js;
3. генерує TypeDoc;
4. копіює документацію у статичний export;
5. публікує все в GitHub Pages.

Очікувана production URL:

```text
https://nonsence02.github.io/ulda-landing-sanitized/
```

## Ліцензія

Проєкт поширюється за ліцензією MIT. Деталі наведено у файлі `LICENSE`.
