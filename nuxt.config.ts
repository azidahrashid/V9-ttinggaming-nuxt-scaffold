export default defineNuxtConfig({
  compatibilityDate: '2026-07-09',
  srcDir: 'app/',
  devtools: { enabled: true },
  css: ['~/assets/css/extracted.css'],
  app: {
    head: {
      title: 'TTINGBET Development Scaffold',
      htmlAttrs: { lang: 'ko' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Nuxt development scaffold reconstructed from public TTINGBET landing-page structure. Backend, login, payment and betting logic are intentionally stubbed.'
        },
        { name: 'robots', content: 'noindex,nofollow' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      assetBaseUrl: process.env.NUXT_PUBLIC_ASSET_BASE_URL || ''
    }
  }
})
