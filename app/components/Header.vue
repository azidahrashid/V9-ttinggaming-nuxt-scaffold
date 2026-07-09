<script setup lang="ts">
import NavigationMenu from '~/components/NavigationMenu.vue'
import { languageOptions } from '~/data/site-content'

const emit = defineEmits<{
  login: []
  register: []
}>()
</script>

<template>
  <header class="site-header">
    <div class="header-topline">
      <button class="icon-button" type="button" aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <NuxtLink class="brand" to="/" aria-label="TTINGBET home">
        <span class="brand-mark">TT</span>
        <span class="brand-name">ThingBet</span>
      </NuxtLink>

      <div class="auth-actions">
        <button class="link-button" type="button" @click="emit('login')">로그인</button>
        <button class="primary-button small" type="button" @click="emit('register')">회원가입</button>
      </div>
    </div>

    <NavigationMenu />

    <div class="header-meta">
      <div class="live-strip">
        <strong>띵벳 TV</strong>
        <span>중계 TTINGBET TV</span>
        <span>365 일 24시간 실시간 스포츠</span>
      </div>

      <div class="language-switcher" aria-label="Language selector">
        <button v-for="language in languageOptions" :key="language" type="button">
          {{ language }}
        </button>
      </div>
    </div>
  </header>
</template>
