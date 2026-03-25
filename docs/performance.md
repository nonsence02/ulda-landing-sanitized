# Performance Profiling and Optimization

## 1. Scope and methodology

This laboratory work documents realistic frontend performance profiling for the sanitized academic landing page built with Next.js App Router and TypeScript.

The repository is:

- frontend-oriented;
- static-friendly;
- deployed through GitHub Pages;
- not backed by a production database or API in this public mirror.

Because of that, the profiling scope focuses on:

- initial page delivery;
- client bundle weight;
- rendering cost of bilingual content;
- client interaction timing where a real trace is available.

The following tools and data sources were used:

- Lighthouse for page-level audit metrics;
- Chrome DevTools Performance trace for a measured client click interaction;
- `next build` output for bundle-size observations;
- manual source inspection for identifying render and payload hot spots.

Important constraint:

- only real measurements supplied for this lab are reported as measured values;
- any missing post-optimization metric is marked as `N/A` instead of being estimated or invented.

## 2. Baseline metrics

### Lighthouse baseline

| Metric | Baseline |
| --- | --- |
| Performance | 90 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |
| FCP | 0.4 s |
| LCP | 0.4 s |
| TBT | 260 ms |
| CLS | 0 |
| Speed Index | 0.4 s |

### Build output baseline

| Metric | Baseline |
| --- | --- |
| First load JS | 127 kB |

### Interaction trace baseline

The available interaction trace is a real measured generic client click interaction from DevTools Performance. It is **not** asserted here as a language-switch trace, because that was not explicitly verified in the captured measurement.

| Metric | Baseline |
| --- | --- |
| totalDuration | 77 ms |
| maxDuration | 63 ms |
| representative frame duration | 66.66 ms |

### Non-applicable metric

| Metric | Value |
| --- | --- |
| Code snippet copy interaction | N/A |

## 3. Identified hot spots

At least the following hot spots were identified from the real baseline and source inspection:

1. **Excess bilingual payload in the initial client bundle**  
   The root page is a client component and originally imported the complete Ukrainian and English thesis content model up front. That means the default Ukrainian render still shipped the English content to the browser immediately.

2. **Unused JavaScript pressure reported by Lighthouse**  
   Lighthouse reported estimated unused JavaScript savings of `403 KiB`, which indicates there is room to defer non-essential client code and reduce eager delivery.

3. **Long main-thread work**  
   Lighthouse reported `2` long tasks and baseline `TBT = 260 ms`, so interaction-related work should stay lightweight and avoid unnecessary synchronous processing.

4. **Image delivery opportunity**  
   Lighthouse reported estimated image-delivery savings of `39 KiB`. This was recorded as a valid diagnostic, although it was not chosen as the primary optimization target in this iteration.

5. **Unused CSS / minification opportunities**  
   Lighthouse also reported small savings for CSS and JavaScript minification and unused CSS. These are secondary compared with the bilingual client payload issue.

## 4. Optimization strategy

The optimization work for this repository focuses on changes that are honest, maintainable, and measurable for a public static academic landing page:

1. Move bilingual thesis content into per-language modules.
2. Keep Ukrainian content as the default eager payload.
3. Load English content on demand only when the user switches language.
4. Cache loaded translations client-side after the first switch to avoid repeated imports.
5. Add lightweight client interaction measurement for future profiling of language switching without introducing heavy analytics or monitoring.

## 5. Decisions not taken

The following potential areas were intentionally **not** implemented as part of this lab stage:

- no fake backend/API profiling was added, because no such layer exists in this repository;
- no invented database, cache, or queue measurements were introduced;
- no fabricated Lighthouse re-run metrics were recorded without a real measurement source;
- no copy-to-clipboard benchmark was added, because the currently profiled sanitized route does not provide a usable measured copy interaction for this lab.

## 6. Before / after comparison

Post-optimization values are documented only after re-running the build and validating which metrics were actually re-measured.

| Metric | Baseline | Post-optimization | Improvement |
| --- | --- | --- | --- |
| First load JS | 127 kB | Pending | Pending |
| Performance | 90 | N/A | N/A |
| Accessibility | 95 | N/A | N/A |
| Best Practices | 100 | N/A | N/A |
| SEO | 100 | N/A | N/A |
| FCP | 0.4 s | N/A | N/A |
| LCP | 0.4 s | N/A | N/A |
| TBT | 260 ms | N/A | N/A |
| CLS | 0 | N/A | N/A |
| Speed Index | 0.4 s | N/A | N/A |
| Generic measured client click totalDuration | 77 ms | N/A | N/A |
| Code snippet copy interaction | N/A | N/A | N/A |
