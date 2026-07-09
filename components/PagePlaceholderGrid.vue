<script setup lang="ts">
defineProps<{ title: string }>()
const { openAuth } = useAuthModal()

const cards = [
  { title: '공지사항', body: '정적 안내 카드입니다. 실제 공지 API는 연결하지 않았습니다.' },
  { title: '서비스 안내', body: '메뉴 클릭 시 빈 페이지가 보이지 않도록 구성했습니다.' },
  { title: '데모 동작', body: '주요 CTA는 로그인 또는 회원가입 모달을 표시합니다.' }
]
</script>

<template>
  <section class="placeholder-panel">
    <div class="section-heading simple">
      <div class="section-title-group">
        <div>
          <h2>{{ title }} 안내</h2>
          <p>Static route layout for GitHub Pages deployment.</p>
        </div>
      </div>
    </div>
    <div class="placeholder-grid">
      <article v-for="card in cards" :key="card.title">
        <h3>{{ card.title }}</h3>
        <p>{{ card.body }}</p>
        <button class="outline-button" type="button" @click="openAuth('login', `${title} 메뉴는 데모에서 로그인 모달만 표시합니다.`)">
          데모 확인
        </button>
      </article>
    </div>
  </section>
</template>
