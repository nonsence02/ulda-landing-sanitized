# Update Procedure

## 1. Preparation for update

Перед оновленням:

- перевір актуальний стан робочої копії: `git status`
- переконайся, що локальні незакомічені зміни або зафіксовані, або тимчасово відкладені
- ознайомся зі змінами в цільовій гілці або релізному PR

## 2. Compatibility checks

Перевір:

- сумісність версії Node.js з проєктом (`Node.js 20.x`)
- цілісність `package-lock.json`
- актуальність GitHub Actions workflow-ів
- сумісність `next.config.mjs`, `typedoc.json`, `tsconfig.json` та `eslint.config.mjs` зі змінами

Оскільки проєкт не має production DB або API layer, перевірки сумісності зводяться до frontend build/tooling і static hosting behavior.

## 3. Backup preparation

Перед update рекомендовано створити backup snapshot:

- поточного стану репозиторію;
- ключових конфігурацій;
- workflow-файлів;
- `out/` або інших згенерованих артефактів, якщо вони потрібні для порівняння.

Детальніше дивись `docs/backup.md`.

## 4. Maintenance window / downtime

Для GitHub Pages зазвичай не потрібне формальне downtime window. Однак треба враховувати:

- під час повторного деплою контент може короткочасно оновлюватися;
- зміни URL, metadata або docs path краще вносити в період низької активності;
- при self-hosted експериментах downtime залежить від середовища, але це не primary path для цього репозиторію.

## 5. Update process

1. Створи backup snapshot.
2. Переключись на потрібну гілку або `main`.
3. Онови локальний код:

```bash
git pull --ff-only
```

4. Встанови або онови залежності:

```bash
npm install
```

5. Запусти перевірки:

```bash
npm run check
npm run docs:build
npm run build
```

6. Якщо update виконується через GitHub Flow, відкрий PR і дочекайся CI.
7. Після merge у `main` дочекайся завершення Pages deployment workflow.

## 6. Post-update verification

Після update перевір:

- головну сторінку;
- мовний перемикач;
- `robots.txt` і `sitemap.xml`;
- docs path `/docs/api/`;
- відсутність broken links і помилок статичних assets;
- успішний статус workflow-ів у GitHub Actions.

## 7. Rollback procedure

Якщо update виявився проблемним:

1. Визнач останній стабільний коміт або backup snapshot.
2. Для Git-based rollback:

```bash
git checkout <stable-commit-or-tag>
npm install
npm run check
npm run build
```

3. Для file-based rollback віднови snapshot через helper script `docs/scripts/rollback.ps1`.
4. Повтори деплой стабільної версії через GitHub Actions.
