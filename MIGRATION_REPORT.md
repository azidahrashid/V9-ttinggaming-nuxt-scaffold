# Migration Report: ttinggaming.com → Nuxt Scaffold

## Scope

This project is a development scaffold generated from the public landing-page structure. It is not a production clone and does not include private backend, login, payment, betting, session, wallet, account or API logic.

## Runtime extraction workflow

Run:

```bash
npm install
npx playwright install chromium
npm run extract:site
npm run clean:css
npm run dev
```

The extractor captures:

- rendered DOM after JavaScript execution
- external CSS links where accessible
- inline `<style>` tags
- runtime `document.styleSheets` rules where browser security permits access
- asset manifest without saving cookies, localStorage, credentials or API response bodies

## Framework-specific CSS cleanup

The cleanup script removes Vue scoped selectors like `[data-v-xxxxxxx]`, strips non-license comments, normalizes whitespace and deduplicates exact CSS rules.

## Detected headings from latest local extraction

- No local Playwright extraction has been run yet in this environment.

## Manual review required

- Replace placeholder cards/images with assets you own or are licensed to use.
- Wire authentication only to your authorised backend.
- Check gaming/betting legal compliance for your target jurisdiction before public deployment.
- Review generated CSS for over-broad selectors after cleanup.
