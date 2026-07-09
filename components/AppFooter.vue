<script setup lang="ts">
import { footerLinks } from '~/data/site'

const assetUrl = useAssetUrl()
</script>

<template>
  <footer class="site-footer">
    <NuxtLink class="footer-brand" to="/">
      <img :src="assetUrl('/assets/tting/thingbet-logo.svg')" alt="TTINGBET" />
    </NuxtLink>

    <nav class="footer-links" aria-label="Footer navigation">
      <NuxtLink v-for="link in footerLinks" :key="link.label" :to="link.to">{{ link.label }}</NuxtLink>
    </nav>

    <div class="footer-cookie-text">
      <p>이 사이트에 액세스하거나 계속 사용하거나 탐색함으로써 특정 브라우저 쿠키를 사용하여 고객 경험을 개선할 수 있다는 사실을 받아들이게 됩니다.</p>
      <p>TTINGBET 는 귀하의 경험을 향상시키고 개인정보 보호를 방해하지 않는 쿠키만을 사용합니다.</p>
    </div>

    <div class="footer-bottom">
      <small>저작권 © TTINGBET 모든 권리 보유.</small>
      <small>Frontend demo only. No real gambling, wallet, payment, credential storage, or backend integration.</small>
    </div>
  </footer>
</template>
