<script setup lang="ts">
import GameCard from '~/components/GameCard.vue'
import type { GameSection } from '~/data/site-content'

defineProps<{
  section: GameSection
}>()
</script>

<template>
  <section :id="section.id" class="game-section">
    <div class="section-heading">
      <div>
        <p v-if="section.eyebrow" class="eyebrow">{{ section.eyebrow }}</p>
        <h2>{{ section.title }}</h2>
      </div>

      <div v-if="section.filters?.length" class="filter-tabs">
        <button v-for="filter in section.filters" :key="filter" type="button">{{ filter }}</button>
        <a href="#stubbed" aria-label="View all">→</a>
      </div>
    </div>

    <div class="game-grid">
      <GameCard v-for="card in section.cards" :key="card.id" :card="card" />
    </div>
  </section>
</template>
