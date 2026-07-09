#!/usr/bin/env node
import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { constants } from 'node:fs'

async function exists(path) {
  try {
    await access(path, constants.F_OK)
    return true
  } catch {
    return false
  }
}

function parseHeadings(text) {
  const lines = text.split(/\r?\n/).map(line => line.trim()).filter(Boolean)
  const known = ['파칭코', '스포츠', 'e스포츠', '카지노', '슬롯', '미니게임', '브랜드 게임']
  return [...new Set(lines.filter(line => known.includes(line)))]
}

const runtimeTextPath = 'output/runtime-text.txt'
const reportPath = 'MIGRATION_REPORT.md'

const extractedHeadings = (await exists(runtimeTextPath))
  ? parseHeadings(await readFile(runtimeTextPath, 'utf8'))
  : []

await mkdir('output', { recursive: true })

const report = `# Migration Report: ttinggaming.com → Nuxt Scaffold

## Scope

This project is a development scaffold generated from the public landing-page structure. It is not a production clone and does not include private backend, login, payment, betting, session, wallet, account or API logic.

## Runtime extraction workflow

Run:

\`\`\`bash
npm install
npx playwright install chromium
npm run extract:site
npm run clean:css
npm run dev
\`\`\`

The extractor captures:

- rendered DOM after JavaScript execution
- external CSS links where accessible
- inline \`<style>\` tags
- runtime \`document.styleSheets\` rules where browser security permits access
- asset manifest without saving cookies, localStorage, credentials or API response bodies

## Framework-specific CSS cleanup

The cleanup script removes Vue scoped selectors like \`[data-v-xxxxxxx]\`, strips non-license comments, normalizes whitespace and deduplicates exact CSS rules.

## Detected headings from latest local extraction

${extractedHeadings.length ? extractedHeadings.map(item => `- ${item}`).join('\n') : '- No local Playwright extraction has been run yet in this environment.'}

## Manual review required

- Replace placeholder cards/images with assets you own or are licensed to use.
- Wire authentication only to your authorised backend.
- Check gaming/betting legal compliance for your target jurisdiction before public deployment.
- Review generated CSS for over-broad selectors after cleanup.
`

await writeFile(reportPath, report, 'utf8')
console.log(`Nuxt scaffold check complete. Report written to ${reportPath}`)
