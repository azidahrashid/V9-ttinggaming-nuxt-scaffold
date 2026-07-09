<script setup lang="ts">
defineProps<{
  title: string
  eyebrow: string
  description: string
  cta?: string
}>()

const { openAuth } = useAuthModal()
</script>

<template>
  <section class="page-hero">
    <div>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <button v-if="cta" class="register-button large" type="button" @click="openAuth('login')">{{ cta }}</button>
  </section>
</template>
