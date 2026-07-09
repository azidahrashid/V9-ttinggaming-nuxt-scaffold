const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const normalizedBaseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'ko' },
      title: 'TTINGBET Demo Frontend',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Frontend-only Nuxt recreation for development and testing. No gambling, wallet, payment, betting, or private backend functions are implemented.'
        },
        { name: 'robots', content: 'noindex,nofollow' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${normalizedBaseURL}assets/tting/thingbet-logo-mark.svg` }]
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/games/pachinko',
        '/games/sports',
        '/games/esports',
        '/games/casino',
        '/games/slots',
        '/games/minigame',
        '/games/brand-games',
        '/sportsbook',
        '/tournament',
        '/events',
        '/tv',
        '/mypage',
        '/support',
        '/faq',
        '/rules',
        '/domain',
        '/telegram'
      ]
    }
  }
})
