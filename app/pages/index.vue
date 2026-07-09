<script setup lang="ts">
import Header from '~/components/Header.vue'
import HeroSection from '~/components/HeroSection.vue'
import CategoryGrid from '~/components/CategoryGrid.vue'
import GameSection from '~/components/GameSection.vue'
import Footer from '~/components/Footer.vue'
import CookieNotice from '~/components/CookieNotice.vue'
import AuthModalPlaceholder from '~/components/AuthModalPlaceholder.vue'
import { gameSections } from '~/data/site-content'

const showAuth = ref(false)
const authMode = ref<'login' | 'register'>('login')

function openAuth(mode: 'login' | 'register') {
  authMode.value = mode
  showAuth.value = true
}
</script>

<template>
  <div class="site-shell">
    <Header @login="openAuth('login')" @register="openAuth('register')" />

    <main>
      <HeroSection />
      <CategoryGrid />

      <section class="content-stack" aria-label="Game sections">
        <GameSection
          v-for="section in gameSections"
          :key="section.id"
          :section="section"
        />
      </section>
    </main>

    <Footer />
    <CookieNotice />

    <AuthModalPlaceholder
      v-if="showAuth"
      :mode="authMode"
      @close="showAuth = false"
    />
  </div>
</template>
