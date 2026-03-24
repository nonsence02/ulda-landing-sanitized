# Linting Setup

## Мета

У репозиторії налаштовано перевірку якості коду для Next.js App Router + TypeScript проєкту з акцентом на:

- сучасний `ESLint` flat config;
- правила для Next.js, React та TypeScript;
- окрему статичну перевірку типів через `tsc`;
- автоматичну перевірку змінених файлів перед комітом через `Husky` і `lint-staged`.

## Основні файли

- `eslint.config.mjs` - основна flat-конфігурація ESLint;
- `package.json` - npm-скрипти та `lint-staged` конфігурація;
- `.husky/pre-commit` - pre-commit hook для перевірки staged-файлів;
- `tsconfig.json` - TypeScript-конфіг для статичної перевірки типів.

## Доступні команди

```bash
npm run lint
npm run lint:fix
npm run typecheck
npm run check
```

## Що перевіряється

- семантичні й стилістичні проблеми в коді React/Next.js;
- базові TypeScript linting rules;
- невикористані змінні та неохайні імпорти;
- типова сумісність коду через `tsc --noEmit`.

## Pre-commit workflow

Перед комітом виконується `lint-staged`, який запускає ESLint лише для staged-файлів з автоматичним виправленням підтримуваних проблем.

Якщо потрібно вручну перевірити весь проєкт перед push:

```bash
npm run check
```

## Примітка для лабораторної

Цей setup орієнтований на публічний санітизований академічний лендинг без бекенду, секретів та серверної логіки, тому конфігурація навмисно лишається компактною й практичною.
