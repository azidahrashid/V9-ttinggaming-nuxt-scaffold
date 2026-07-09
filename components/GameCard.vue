<script setup lang="ts">
import type { GameCard } from '~/data/site'

const props = defineProps<{ card: GameCard }>()
const assetUrl = useAssetUrl()
const { openAuth } = useAuthModal()

function handleOpen() {
  openAuth('login', `${props.card.title} 항목은 데모에서 로그인 모달만 표시합니다.`)
}
</script>

<template>
  <article class="game-card">
    <button class="game-card-hit" type="button" @click="handleOpen">
      <span v-if="card.badge" class="game-badge">{{ card.badge }}</span>
      <span class="favourite" aria-hidden="true">♡</span>
      <img :src="assetUrl(card.image)" :alt="card.title" loading="lazy" />
      <span class="game-card-overlay">
        <span class="play-chip">로그인 필요</span>
      </span>
    </button>
    <div class="game-card-copy">
      <h3>{{ card.title }}</h3>
      <p>{{ card.subtitle }}</p>
    </div>
  </article>
</template>
