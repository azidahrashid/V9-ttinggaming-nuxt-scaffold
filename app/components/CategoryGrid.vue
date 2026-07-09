<script setup lang="ts">
import { heroCategories } from '~/data/site-content'
</script>

<template>
  <section class="category-grid" aria-label="Game categories">
    <a
      v-for="category in heroCategories"
      :key="category.key"
      class="category-card"
      :href="`#${category.key}`"
    >
      <span class="category-art" aria-hidden="true"></span>
      <h3>{{ category.title }}</h3>
    </a>
  </section>
</template>
