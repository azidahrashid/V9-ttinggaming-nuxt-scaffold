<script setup lang="ts">
const footerLinks = [
  '홈',
  '스포츠 배팅',
  '라이브 카지노',
  '슬롯',
  'E스포츠',
  '미니게임',
  '파칭코',
  '브랜드 게임',
  'BJ크리에이터',
  '스포츠북',
  '슬롯 토너먼트',
  '이벤트',
  'FAQ',
  '이용규정'
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-brand">
      <span class="brand-mark">TT</span>
      <strong>TTINGBET</strong>
    </div>

    <p>
      띵벳(TTINGBET)은 스포츠베팅, 라이브 카지노, 슬롯, E스포츠, 미니게임, 빠칭코를 제공하는 대한민국 대표 온라인 베팅 플랫폼입니다.
    </p>

    <nav aria-label="Footer navigation">
      <a v-for="link in footerLinks" :key="link" href="#stubbed">{{ link }}</a>
    </nav>

    <small>저작권 © TTINGBET 모든 권리 보유. Development scaffold only.</small>
  </footer>
</template>
