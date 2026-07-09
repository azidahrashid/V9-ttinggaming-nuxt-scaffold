<script setup lang="ts">
const visible = ref(true)
</script>

<template>
  <aside v-if="visible" class="cookie-notice" aria-label="Cookie notice">
    <p>
      이 사이트에 액세스하거나 계속 사용하거나 탐색함으로써 특정 브라우저 쿠키를 사용하여 고객 경험을 개선할 수 있다는 사실을 받아들이게 됩니다.
      TTINGBET 는 귀하의 경험을 향상시키고 개인정보 보호를 방해하지 않는 쿠키만을 사용합니다.
    </p>
    <button type="button" @click="visible = false">확인</button>
  </aside>
</template>
