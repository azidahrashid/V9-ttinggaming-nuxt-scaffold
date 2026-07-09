<script setup lang="ts">
import { getPageByPath, getSectionById } from '~/data/site'

const route = useRoute()
const page = computed(() =>
  getPageByPath(route.path) || {
    title: '페이지',
    eyebrow: 'ROUTE',
    description: '요청한 경로를 위한 기본 프론트엔드 레이아웃입니다. 실제 백엔드는 연결되어 있지 않습니다.'
  }
)
const section = computed(() => getSectionById(page.value.sectionId))

useHead(() => ({ title: `${page.value.title} · TTINGBET Demo Frontend` }))
</script>

<template>
  <div class="page-stack inner-page">
    <PageHero
      :title="page.title"
      :eyebrow="page.eyebrow"
      :description="page.description"
      :cta="page.cta"
    />
    <GameSection v-if="section" :section="section" />
    <PagePlaceholderGrid v-else :title="page.title" />
  </div>
</template>
