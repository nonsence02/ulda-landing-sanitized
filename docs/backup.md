# Backup Strategy

## 1. Scope and project reality

Це статичний frontend-орієнтований проєкт без production database. Тому backup strategy зосереджена не на даних БД, а на:

- вихідному коді;
- конфігурації;
- workflow-файлах;
- документації;
- generated artifacts, якщо вони потрібні для відтворення або аудиту.

Production DB backup для цього репозиторію не застосовується.

## 2. What should be backed up

Рекомендовано включати:

- `app/`
- `components/`
- `lib/`
- `docs/`
- `public/`
- `.github/workflows/`
- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `tsconfig.json`
- `typedoc.json`
- `eslint.config.mjs`
- `tailwind.config.ts`
- `Dockerfile`
- `README.md`

Зазвичай не потрібно архівувати:

- `node_modules/`
- `.next/`
- `typedoc-site/`
- інші легко відтворювані build-артефакти, якщо немає окремої вимоги зберегти їх для аудиту

## 3. Backup frequency

Практична схема:

- перед релізом або merge у `main`
- перед значними змінами workflow/deployment logic
- перед update або rollback-операціями
- додатково за потреби перед експериментами з конфігурацією Pages чи Docker

## 4. Storage and retention ideas

Можливі варіанти:

- локальна папка `backups/`
- окремий захищений network share або cloud storage
- release attachments або artifact storage, якщо це дозволяє політика проєкту

Рекомендований мінімум:

- зберігати останні 5–10 snapshot-архівів
- зберігати хоча б один snapshot перед кожним production-oriented update

## 5. Integrity verification

Після створення backup треба:

- переконатися, що архів успішно створено;
- перевірити, що всередині є ключові директорії та файли;
- за можливості протестувати відновлення в окремій робочій копії.

## 6. Restoration procedure

1. Вибери потрібний backup snapshot.
2. Розпакуй його в тимчасову директорію або використай `docs/scripts/rollback.ps1`.
3. Віднови ключові файли в робочу копію.
4. Перевстанови залежності:

```bash
npm install
```

5. Перевір проєкт:

```bash
npm run check
npm run docs:build
npm run build
```

6. Якщо потрібно, повторно задеплой стабільний стан через GitHub Actions.
