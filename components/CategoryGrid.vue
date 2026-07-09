<script setup lang="ts">
import { heroCategories } from '~/data/site'

const assetUrl = useAssetUrl()
</script>

<template>
  <section class="category-section" aria-label="Game categories">
    <NuxtLink v-for="category in heroCategories" :key="category.key" :to="category.to" class="category-card">
      <span class="category-art" aria-hidden="true">
        <img :src="assetUrl(category.icon)" :alt="''" />
      </span>
      <h3>{{ category.title }}</h3>
    </NuxtLink>
  </section>
</template>
