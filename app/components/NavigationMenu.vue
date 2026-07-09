<script setup lang="ts">
import { primaryNavigation, utilityNavigation } from '~/data/site-content'
</script>

<template>
  <nav class="navigation-menu" aria-label="Primary navigation">
    <ul class="primary-nav">
      <li v-for="item in primaryNavigation" :key="item.key">
        <a :href="`#${item.key}`">
          <span class="nav-icon" aria-hidden="true"></span>
          <span>{{ item.label }}</span>
          <span class="chevron" aria-hidden="true">⌄</span>
        </a>
      </li>
    </ul>

    <ul class="utility-nav" aria-label="Utility navigation">
      <li v-for="item in utilityNavigation" :key="item">
        <a href="#stubbed">{{ item }}</a>
      </li>
    </ul>
  </nav>
</template>
