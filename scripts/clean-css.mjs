#!/usr/bin/env node
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const inputPath = resolve(process.argv[2] || 'output/extracted-full-runtime-css.css')
const outputPath = resolve(process.argv[3] || 'app/assets/css/extracted.css')

function normalizeCss(css) {
  let output = css
    .replace(/\[data-v-[a-f0-9]+\]/gi, '')
    .replace(/data-v-[a-f0-9]+/gi, '')
    .replace(/\/\*(?!\!)[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim()

  const seen = new Set()
  const uniqueRules = []

  for (const rawRule of output.split('}')) {
    const rule = rawRule.trim()
    if (!rule || !rule.includes('{')) continue

    const normalizedRule = `${rule}}`
    if (seen.has(normalizedRule)) continue
    seen.add(normalizedRule)
    uniqueRules.push(normalizedRule)
  }

  return uniqueRules.join('\n') + '\n'
}

try {
  const raw = await readFile(inputPath, 'utf8')
  const cleaned = normalizeCss(raw)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, cleaned, 'utf8')
  await mkdir('output', { recursive: true })
  await writeFile('output/cleaned-extracted.css', cleaned, 'utf8')
  console.log(`Cleaned CSS written to ${outputPath}`)
} catch (error) {
  console.error(`Unable to clean CSS from ${inputPath}`)
  console.error(error.message)
  process.exitCode = 1
}
