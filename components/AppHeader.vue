<script setup lang="ts">
import { languages, primaryNavigation, utilityNavigation } from '~/data/site'

const isMobileOpen = ref(false)
const activeMobileGroup = ref<string | null>(null)
const { openAuth } = useAuthModal()
const route = useRoute()
const assetUrl = useAssetUrl()

watch(
  () => route.fullPath,
  () => {
    isMobileOpen.value = false
    activeMobileGroup.value = null
  }
)

watch(isMobileOpen, (value) => {
  if (!import.meta.client) return
  document.documentElement.classList.toggle('menu-locked', value)
})

onBeforeUnmount(() => {
  if (import.meta.client) document.documentElement.classList.remove('menu-locked')
})

function toggleGroup(key: string) {
  activeMobileGroup.value = activeMobileGroup.value === key ? null : key
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner header-topline">
      <button
        class="burger-button"
        type="button"
        :aria-expanded="isMobileOpen"
        aria-controls="mobile-menu"
        aria-label="Open navigation menu"
        @click="isMobileOpen = true"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <NuxtLink class="brand" to="/" aria-label="TTINGBET home">
        <img :src="assetUrl('/assets/tting/thingbet-logo.svg')" alt="ThingBet" />
      </NuxtLink>

      <div class="auth-actions desktop-auth">
        <button class="login-button" type="button" @click="openAuth('login')">로그인</button>
        <button class="register-button" type="button" @click="openAuth('register')">회원가입</button>
      </div>
    </div>

    <nav class="desktop-primary-nav" aria-label="Game navigation">
      <div class="header-inner nav-grid">
        <div class="nav-label">게임</div>
        <ul class="game-nav-list">
          <li v-for="item in primaryNavigation" :key="item.key" class="game-nav-item">
            <NuxtLink :to="item.to" class="game-nav-link">
              <img :src="assetUrl(item.icon)" :alt="''" aria-hidden="true" />
              <span>{{ item.label }}</span>
              <span class="chevron" aria-hidden="true"></span>
            </NuxtLink>
            <div v-if="item.children?.length" class="nav-dropdown" role="menu">
              <NuxtLink v-for="child in item.children" :key="child.label" :to="child.to" role="menuitem">
                {{ child.label }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="desktop-secondary-nav">
      <div class="header-inner tv-row">
        <NuxtLink to="/tv" class="tv-title">띵벳 TV</NuxtLink>
        <span>중계 TTINGBET TV</span>
        <span>365 일 24시간 실시간 스포츠</span>
      </div>
      <div class="header-inner utility-row">
        <div class="utility-title">일반적인</div>
        <nav class="utility-links" aria-label="Utility navigation">
          <NuxtLink v-for="item in utilityNavigation" :key="item.label" :to="item.to">
            <img :src="assetUrl(item.icon)" :alt="''" aria-hidden="true" />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </nav>

        <div class="language-switcher" aria-label="Language selector">
          <button v-for="language in languages" :key="language.short" type="button">
            <span>{{ language.short }}</span>
            {{ language.label }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMobileOpen" class="mobile-backdrop" @click="isMobileOpen = false"></div>
    <aside id="mobile-menu" class="mobile-menu" :class="{ 'is-open': isMobileOpen }" aria-label="Mobile navigation">
      <div class="mobile-menu-head">
        <img :src="assetUrl('/assets/tting/thingbet-logo.svg')" alt="ThingBet" />
        <button type="button" aria-label="Close navigation menu" @click="isMobileOpen = false">×</button>
      </div>

      <div class="mobile-auth-actions">
        <button class="login-button" type="button" @click="openAuth('login')">로그인</button>
        <button class="register-button" type="button" @click="openAuth('register')">회원가입</button>
      </div>

      <div class="mobile-section-title">게임</div>
      <ul class="mobile-nav-list">
        <li v-for="item in primaryNavigation" :key="item.key">
          <div class="mobile-nav-row">
            <NuxtLink :to="item.to">
              <img :src="assetUrl(item.icon)" :alt="''" aria-hidden="true" />
              <span>{{ item.label }}</span>
            </NuxtLink>
            <button type="button" :aria-expanded="activeMobileGroup === item.key" @click="toggleGroup(item.key)">
              <span class="mobile-chevron"></span>
            </button>
          </div>
          <div v-if="activeMobileGroup === item.key" class="mobile-subnav">
            <NuxtLink v-for="child in item.children" :key="child.label" :to="child.to">{{ child.label }}</NuxtLink>
          </div>
        </li>
      </ul>

      <div class="mobile-section-title">일반적인</div>
      <div class="mobile-utility-list">
        <NuxtLink v-for="item in utilityNavigation" :key="item.label" :to="item.to">
          <img :src="assetUrl(item.icon)" :alt="''" aria-hidden="true" />
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="mobile-lang-row">
        <button v-for="language in languages" :key="language.short" type="button">{{ language.label }}</button>
      </div>
    </aside>
  </header>
</template>
