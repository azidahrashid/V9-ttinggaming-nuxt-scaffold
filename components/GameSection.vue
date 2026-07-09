<script setup lang="ts">
import type { GameSection } from '~/data/site'

const props = defineProps<{ section: GameSection; compact?: boolean }>()
const assetUrl = useAssetUrl()
const activeFilter = ref(props.section.filters[0] || '모두')
</script>

<template>
  <section :id="section.id" class="game-section" :class="[`section-${section.id}`, { compact }]">
    <div class="section-heading">
      <div class="section-title-group">
        <img :src="assetUrl(section.icon)" :alt="section.title" />
        <h2>{{ section.title }}</h2>
      </div>
      <div class="filter-tabs">
        <button
          v-for="filter in section.filters"
          :key="filter"
          type="button"
          :class="{ active: activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
        <NuxtLink :to="section.to" aria-label="View all games in section"><span>모두</span><i aria-hidden="true"></i></NuxtLink>
      </div>
    </div>

    <div class="game-card-grid" :class="`grid-${section.id}`">
      <GameCard v-for="game in section.cards" :key="game.id" :card="game" />
    </div>
  </section>
</template>
