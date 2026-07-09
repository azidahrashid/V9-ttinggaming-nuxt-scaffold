<script setup lang="ts">
const props = defineProps<{
  mode: 'login' | 'register'
}>()

const emit = defineEmits<{
  close: []
}>()

const title = computed(() => (props.mode === 'login' ? '로그인' : '회원가입'))
</script>

<template>
  <div class="modal-backdrop" role="presentation" @click.self="emit('close')">
    <section class="auth-modal" role="dialog" aria-modal="true" :aria-label="title">
      <button class="modal-close" type="button" aria-label="Close" @click="emit('close')">×</button>
      <h2>{{ title }}</h2>
      <p>
        Login, registration, account, payment, session, betting and private API flows are intentionally not copied. Connect this placeholder to your authorised backend during development.
      </p>
      <form class="stub-form" @submit.prevent>
        <label>
          Username
          <input type="text" autocomplete="username" disabled placeholder="Backend stub" />
        </label>
        <label>
          Password
          <input type="password" autocomplete="current-password" disabled placeholder="Backend stub" />
        </label>
        <button class="primary-button" type="submit" disabled>Stub only</button>
      </form>
    </section>
  </div>
</template>
