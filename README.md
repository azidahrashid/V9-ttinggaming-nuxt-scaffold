# TTINGBET Nuxt High-Fidelity Frontend Demo

A frontend-only Nuxt 3 static recreation based on the visible layout hierarchy of `https://ttinggaming.com/`.

This project is for development/testing purposes only. It does not include real gambling, betting, wallet, payment, game execution, account sessions, private credentials, or backend integrations.

## Run locally

```bash
npm install
npm run dev
```

## Build static output

```bash
npm run build
```

The generated static output will be available in `.output/public`.

## What is included

- Nuxt 3 project structure.
- High-fidelity dark/gold homepage layout based on the live page order.
- Header with game navigation, dropdowns, TV strip, utility links, language buttons, and mobile drawer.
- Homepage category tiles and game sections.
- Mini-game cards based on labels visible in the live page runtime output.
- Login/register modal demo interactions.
- Basic frontend form validation.
- Dynamic route fallback for menu pages.
- Local SVG replacement assets so the frontend does not rely on blocked hotlinked files.

## Important limitation

Some original production assets from `file.ttinggaming.com` returned HTTP 403 during inspection. Therefore this project uses local SVG replacement assets designed to match the visual style direction, not the exact protected artwork.
