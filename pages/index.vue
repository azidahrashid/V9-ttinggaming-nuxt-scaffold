<script setup lang="ts">
import { gameSections } from '~/data/site'

useHead({ title: '띵벳 - 온라인 카지노 & 스포츠베팅' })
</script>

<template>
  <div class="home-page page-stack">
    <section class="home-title-wrap" aria-labelledby="home-title">
      <h1 id="home-title">띵벳 - 온라인 카지노 &amp; 스포츠베팅</h1>
    </section>

    <CategoryGrid />

    <div class="content-stack">
      <GameSection v-for="section in gameSections" :key="section.id" :section="section" />
    </div>

    <InfoPanel />
  </div>
</template>
