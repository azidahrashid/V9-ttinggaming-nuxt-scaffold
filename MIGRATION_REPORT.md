# TTINGBET Nuxt High-Fidelity Frontend Rebuild Report

## Scope

This project is a frontend-only Nuxt recreation for development and testing. It does not implement real gambling, betting, wallet, payment, game execution, account sessions, private APIs, or backend integrations.

## Live-site observations used

The live page content order was inspected from `https://ttinggaming.com/`. The visible runtime output exposes this hierarchy:

1. Menu icon and ThingBet logo.
2. Login and register actions.
3. Game navigation with these categories: 파칭코, 카지노, 슬롯, 스포츠, 스포츠북, 미니게임, 브랜드 게임.
4. Dropdown-like child labels including 이벤트, 프라그마틱, 슬롯 토너먼트, 마블, 이벤트.
5. TTINGBET TV row with `중계 TTINGBET TV` and `365 일 24시간 실시간 스포츠`.
6. Utility navigation labelled 일반적인 with 마이페이지, 이벤트, 고객센터, 자주 물어보는 질문, 이용규정, 도메인, 텔레그램.
7. Language buttons: 한국어, English, 中文.
8. Homepage title: 띵벳 - 온라인 카지노 & 스포츠베팅.
9. Category tiles: 파칭코, 스포츠, e스포츠, 카지노, 슬롯, 미니게임, 브랜드 게임.
10. Game sections in this order: 파칭코, 브랜드 게임, 카지노, 슬롯, 미니게임.
11. Mini-game cards visible in the runtime output: 보글보글 1/2/3, 슈퍼 마리오 1/2/3, 룰렛 1/2.
12. Footer text, footer navigation, cookie notice, and copyright.

## Asset limitation

Several production assets on `file.ttinggaming.com` returned HTTP 403 when directly requested, including the logo and card art. Because of this, the project does not hotlink broken protected assets. It uses local SVG replacement assets styled to match the same dark/gold casino interface direction.

## Changes made in this version

- Removed the invented large marketing hero banner that did not match the live page order.
- Rebuilt the homepage around the live order: title, category tiles, game sections, info text, footer.
- Reworked header spacing and structure to match the live page hierarchy more closely.
- Added a dedicated TV strip and utility row matching the live labels.
- Simplified section headers to show icon, Korean title, filter pills, and “모두” arrow link.
- Reduced large card-panel styling so sections look more like content rows rather than oversized dashboard panels.
- Rebuilt footer to follow the live footer order: logo, nav links, cookie text, copyright.
- Preserved working login/register modals with frontend-only validation.
- Preserved mobile drawer behavior.
- Preserved Nuxt dynamic route fallback so clicked routes do not become broken pages.
- Kept local assets and static-generation compatibility for GitHub Pages.

## Validation

The following commands were run successfully:

```bash
npm install
npm run build
```

`npm run build` completed Nuxt static generation and produced `.output/public`.

## Remaining limitations

- This is not a guaranteed pixel-perfect duplicate because protected original assets, private runtime scripts, and exact production CSS cannot be fully extracted from the blocked asset server.
- The project intentionally does not copy backend, real authentication, wallet, payment, betting, or game-launch features.
- Form validation is demo-only and does not create real sessions or accounts.
