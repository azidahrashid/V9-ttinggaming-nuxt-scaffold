<script setup lang="ts">
import type { GameCard } from '~/data/site-content'

defineProps<{
  card: GameCard
}>()
</script>

<template>
  <article class="game-card">
    <button v-if="card.favourite" class="favourite-button" type="button" aria-label="Favourite placeholder">♡</button>
    <div class="game-art" aria-hidden="true">
      <span>{{ card.title.slice(0, 2).toUpperCase() }}</span>
    </div>
    <div class="game-copy">
      <span v-if="card.badge" class="badge">{{ card.badge }}</span>
      <h3>{{ card.title }}</h3>
      <p v-if="card.subtitle">{{ card.subtitle }}</p>
    </div>
  </article>
</template>
