#!/usr/bin/env node
import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const targetUrl = process.argv[2] || process.env.TARGET_URL || 'https://ttinggaming.com'
const outDir = resolve(process.argv[3] || 'output')

async function safeWrite(filePath, content) {
  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, content, 'utf8')
}

function redactSensitiveText(value) {
  return String(value)
    .replace(/(api[_-]?key|token|secret|password|authorization)(["'\s:=]+)[^"'\s,;}]+/gi, '$1$2[REDACTED]')
    .replace(/Bearer\s+[A-Za-z0-9._~+/-]+=*/g, 'Bearer [REDACTED]')
}

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
  locale: 'ko-KR',
  userAgent:
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36 NuxtMigrationBot/1.0'
})

const page = await context.newPage()

const observed = {
  documents: [],
  stylesheets: new Set(),
  scripts: new Set(),
  images: new Set(),
  fonts: new Set(),
  apiLike: new Set()
}

page.on('request', request => {
  const url = request.url()
  const type = request.resourceType()
  if (type === 'document') observed.documents.push(url)
  if (type === 'stylesheet') observed.stylesheets.add(url)
  if (type === 'script') observed.scripts.add(url)
  if (type === 'image') observed.images.add(url)
  if (type === 'font') observed.fonts.add(url)
  if (['xhr', 'fetch', 'websocket', 'eventsource'].includes(type)) observed.apiLike.add(`${type}: ${url}`)
})

try {
  await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {})
  await page.waitForTimeout(3000)

  const capture = await page.evaluate(() => {
    const absolute = url => {
      try {
        return new URL(url, location.href).href
      } catch {
        return url
      }
    }

    const styleTags = Array.from(document.querySelectorAll('style')).map((node, index) => ({
      index,
      text: node.textContent || '',
      attrs: Array.from(node.attributes).map(attr => `${attr.name}=${JSON.stringify(attr.value)}`).join(' ')
    }))

    const linkStyles = Array.from(document.querySelectorAll('link[rel~="stylesheet"], link[as="style"]'))
      .map(node => absolute(node.getAttribute('href') || ''))
      .filter(Boolean)

    const images = Array.from(document.images).map(img => ({
      src: absolute(img.currentSrc || img.src || ''),
      alt: img.alt || '',
      width: img.naturalWidth || img.width || null,
      height: img.naturalHeight || img.height || null
    }))

    const sheetCss = []
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        const rules = Array.from(sheet.cssRules || []).map(rule => rule.cssText).join('\n')
        sheetCss.push({ href: sheet.href || 'inline-style-sheet', css: rules })
      } catch {
        sheetCss.push({ href: sheet.href || 'cross-origin-or-restricted', css: '' })
      }
    }

    return {
      url: location.href,
      title: document.title,
      html: document.documentElement.outerHTML,
      text: document.body?.innerText || '',
      styleTags,
      linkStyles,
      images,
      sheetCss
    }
  })

  const externalCssParts = []
  const cssUrls = new Set([...observed.stylesheets, ...capture.linkStyles])

  for (const cssUrl of cssUrls) {
    try {
      const response = await context.request.get(cssUrl, {
        headers: { referer: targetUrl, accept: 'text/css,*/*;q=0.1' },
        timeout: 30000
      })
      if (response.ok()) {
        externalCssParts.push(`\n/* Source: ${cssUrl} */\n${await response.text()}\n`)
      } else {
        externalCssParts.push(`\n/* Source blocked or unavailable: ${cssUrl} | HTTP ${response.status()} */\n`)
      }
    } catch (error) {
      externalCssParts.push(`\n/* Source failed: ${cssUrl} | ${error.message} */\n`)
    }
  }

  const styleTagCss = capture.styleTags
    .map(item => `\n/* <style> ${item.index} ${item.attrs} */\n${item.text}\n`)
    .join('\n')

  const runtimeSheetCss = capture.sheetCss
    .filter(item => item.css)
    .map(item => `\n/* Runtime stylesheet: ${item.href} */\n${item.css}\n`)
    .join('\n')

  const fullCss = redactSensitiveText([externalCssParts.join('\n'), styleTagCss, runtimeSheetCss].join('\n'))

  await safeWrite(resolve(outDir, 'runtime.html'), redactSensitiveText(capture.html))
  await safeWrite(resolve(outDir, 'runtime-text.txt'), capture.text)
  await safeWrite(resolve(outDir, 'style-tags.css'), redactSensitiveText(styleTagCss))
  await safeWrite(resolve(outDir, 'external.css'), redactSensitiveText(externalCssParts.join('\n')))
  await safeWrite(resolve(outDir, 'runtime-css-rules.css'), redactSensitiveText(runtimeSheetCss))
  await safeWrite(resolve(outDir, 'extracted-full-runtime-css.css'), fullCss)
  await safeWrite(resolve(outDir, 'asset-manifest.json'), JSON.stringify({
    targetUrl,
    finalUrl: capture.url,
    title: capture.title,
    documents: observed.documents,
    stylesheets: [...observed.stylesheets],
    scripts: [...observed.scripts],
    images: [...observed.images],
    fonts: [...observed.fonts],
    apiLikeRequestsNotSaved: [...observed.apiLike],
    domImages: capture.images
  }, null, 2))

  console.log(`Captured runtime DOM and CSS from ${capture.url}`)
  console.log(`Output written to ${outDir}`)
  console.log('Private API/XHR response bodies, cookies, localStorage and credentials were not saved.')
} finally {
  await browser.close()
}
