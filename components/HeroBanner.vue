<script setup lang="ts">
const { openAuth } = useAuthModal()
const assetUrl = useAssetUrl()
</script>

<template>
  <section class="hero-banner">
    <div class="hero-copy">
      <p class="eyebrow">대한민국 No.1 온라인 카지노 & 스포츠베팅</p>
      <h1>띵벳 - 온라인 카지노 & 스포츠베팅</h1>
      <p>
        스포츠, 라이브 카지노, 슬롯, E스포츠, 미니게임, 빠칭코, 브랜드 게임을 한 화면에서 탐색할 수 있는 프론트엔드 데모입니다.
      </p>
      <div class="hero-actions">
        <button class="register-button large" type="button" @click="openAuth('register')">회원가입</button>
        <button class="outline-button large" type="button" @click="openAuth('login')">로그인</button>
      </div>
    </div>

    <div class="hero-visual" aria-label="TTINGBET TV visual preview">
      <img :src="assetUrl('/assets/tting/banners/hero-tv.svg')" alt="TTINGBET TV preview" />
      <div class="hero-glass-card glass-card-one">
        <span>LIVE</span>
        <strong>TTINGBET TV</strong>
      </div>
      <div class="hero-glass-card glass-card-two">
        <span>24H</span>
        <strong>SPORTS</strong>
      </div>
    </div>
  </section>
</template>
