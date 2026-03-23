# ULDA Landing Public Mirror

This folder contains a sanitized public copy of the landing page project for academic use.

## What was removed

- `.git` history from the original private repository
- `.env.local` and any environment-specific secrets
- database access and API routes
- blog pages, authors pages, and post-loading logic
- email sending logic from the licensing flow

## How to run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- This is a standalone Next.js App Router project.
- It keeps only the UI needed to demonstrate the landing page.
- Metadata was rewritten to be generic and non-sensitive.