# Logging and Error Handling

## 1. Chosen approach

Для цього репозиторію обрано lightweight structured logging wrapper поверх стандартного `console`, а не повноцінний server-oriented logger на кшталт Pino.

Причини:

- проєкт є frontend-oriented і static-friendly;
- primary deployment path — GitHub Pages;
- у репозиторії немає реального backend API або long-running application server, для якого було б виправдано важчий Node logging stack;
- потрібне мінімальне, підтримуване й чесне рішення без вигадування інфраструктури, якої тут немає.

## 2. Log levels

Підтримуються рівні:

- `DEBUG`
- `INFO`
- `WARNING`
- `ERROR`
- `CRITICAL`

## 3. Log format

Кожен запис формується у вигляді:

```text
[timestamp] [LEVEL] [module] message
```

Опціонально другим аргументом виводиться context object, наприклад:

```ts
{
  errorId: "ERR-...",
  path: "/",
  language: "uk"
}
```

## 4. How to configure LOG_LEVEL

### Environment variables

```bash
LOG_LEVEL=INFO
NEXT_PUBLIC_LOG_LEVEL=INFO
```

- `LOG_LEVEL` корисний для Node-based tooling, CI або self-hosted runtime experiments;
- `NEXT_PUBLIC_LOG_LEVEL` є fallback для клієнтської частини під час static build.

### Runtime override without recompilation

Для вже зібраного статичного клієнта рівень логування можна перевизначити без перекомпіляції:

```js
localStorage.setItem("ulda.logLevel", "DEBUG")
```

Після перезавантаження сторінки logger використає це значення як runtime override.

## 5. Where logs go

### Local development

- browser-side logs потрапляють у DevTools console;
- Node-side logs потрапляють у stdout/stderr термінала.

### CI / GitHub Actions

- логи потрапляють у stdout/stderr workflow steps.

### GitHub Pages production-like scenario

- клієнтські логи доступні лише в браузерній консолі користувача;
- окремий централізований log collector не підключено.

## 6. What is logged

Реалізовано логування для:

- client runtime initialization;
- змін мови на головній сторінці;
- clipboard copy operation в `CodeSnippet`;
- handled errors;
- unhandled browser errors;
- unhandled promise rejections;
- render of custom not-found page;
- global application errors з унікальним error ID.

## 7. Error handling strategy

### Technical strategy

- будь-яке practical exception handling проходить через `lib/errors.ts`;
- для помилок створюється унікальний `errorId`;
- до логів додається context object;
- для global UI failure використовується `app/global-error.tsx`;
- для missing routes використовується `app/not-found.tsx`.

### User-facing strategy

- користувач бачить локалізовані дружні повідомлення без технічного stack trace;
- на сторінках помилок є suggested actions;
- є простий report path через GitHub issue link;
- error identifier показується користувачу для діагностики.

## 8. Log rotation for self-hosted runtime

У GitHub Pages сценарії rotation не застосовується, бо немає власного процесу з файловими логами.

Якщо проєкт тимчасово запускається у self-hosted Node/container середовищі, rotation треба організовувати не в коді цього репозиторію, а на рівні runtime:

- Docker log driver;
- systemd/journald;
- reverse proxy / platform logs;
- зовнішній log collector.

## 9. Optional future integrations

За потреби пізніше можна інтегрувати:

- Sentry для client-side error monitoring;
- centralized log shipping для self-hosted variant;
- structured event forwarding у CI artifacts.

Ці інтеграції в поточному репозиторії не реалізовані навмисно, щоб лишатися чесними до фактичної архітектури проєкту.
