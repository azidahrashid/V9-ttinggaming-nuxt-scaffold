<script setup lang="ts">
const { open, mode, reason, closeAuth } = useAuthModal()
const assetUrl = useAssetUrl()
const submitted = ref('')
const touched = ref(false)

const loginForm = reactive({ username: '', password: '' })
const registerForm = reactive({ username: '', password: '', confirmPassword: '', phone: '', agree: false })

const title = computed(() => (mode.value === 'login' ? '로그인' : '회원가입'))

const loginErrors = computed(() => {
  const errors: Record<string, string> = {}
  if (!loginForm.username.trim()) errors.username = '아이디를 입력하세요.'
  if (!loginForm.password) errors.password = '비밀번호를 입력하세요.'
  if (loginForm.password && loginForm.password.length < 4) errors.password = '비밀번호는 최소 4자 이상이어야 합니다.'
  return errors
})

const registerErrors = computed(() => {
  const errors: Record<string, string> = {}
  if (!registerForm.username.trim()) errors.username = '아이디를 입력하세요.'
  if (registerForm.username && registerForm.username.trim().length < 3) errors.username = '아이디는 최소 3자 이상이어야 합니다.'
  if (!registerForm.password) errors.password = '비밀번호를 입력하세요.'
  if (registerForm.password && registerForm.password.length < 6) errors.password = '비밀번호는 최소 6자 이상이어야 합니다.'
  if (!registerForm.confirmPassword) errors.confirmPassword = '비밀번호 확인을 입력하세요.'
  if (registerForm.confirmPassword && registerForm.confirmPassword !== registerForm.password) errors.confirmPassword = '비밀번호가 일치하지 않습니다.'
  if (!registerForm.phone.trim()) errors.phone = '연락처를 입력하세요.'
  if (!registerForm.agree) errors.agree = '데모 이용 안내에 동의해야 합니다.'
  return errors
})

const activeErrors = computed(() => (mode.value === 'login' ? loginErrors.value : registerErrors.value))

watch(mode, () => {
  touched.value = false
  submitted.value = ''
})

watch(open, (value) => {
  if (!import.meta.client) return
  document.documentElement.classList.toggle('modal-locked', value)
  if (!value) {
    touched.value = false
    submitted.value = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (import.meta.client) document.documentElement.classList.remove('modal-locked')
})

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) closeAuth()
}

function setMode(nextMode: 'login' | 'register') {
  mode.value = nextMode
  touched.value = false
  submitted.value = ''
}

function submit() {
  touched.value = true
  submitted.value = ''
  if (Object.keys(activeErrors.value).length) return

  submitted.value =
    mode.value === 'login'
      ? '데모 로그인 검증이 완료되었습니다. 실제 세션은 생성되지 않습니다.'
      : '데모 회원가입 검증이 완료되었습니다. 실제 계정은 생성되지 않습니다.'
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" role="presentation" @click.self="closeAuth">
      <section class="auth-modal" role="dialog" aria-modal="true" :aria-label="title">
        <button class="modal-close" type="button" aria-label="Close modal" @click="closeAuth">×</button>

        <div class="auth-modal-brand">
          <img :src="assetUrl('/assets/tting/thingbet-logo.svg')" alt="ThingBet" />
        </div>

        <div class="auth-tabs" role="tablist" aria-label="Authentication mode">
          <button type="button" :class="{ active: mode === 'login' }" @click="setMode('login')">로그인</button>
          <button type="button" :class="{ active: mode === 'register' }" @click="setMode('register')">회원가입</button>
        </div>

        <p v-if="reason" class="auth-reason">{{ reason }}</p>

        <form class="auth-form" novalidate @submit.prevent="submit">
          <template v-if="mode === 'login'">
            <label>
              <span>아이디</span>
              <input v-model.trim="loginForm.username" type="text" autocomplete="username" placeholder="아이디" />
              <small v-if="touched && loginErrors.username">{{ loginErrors.username }}</small>
            </label>
            <label>
              <span>비밀번호</span>
              <input v-model="loginForm.password" type="password" autocomplete="current-password" placeholder="비밀번호" />
              <small v-if="touched && loginErrors.password">{{ loginErrors.password }}</small>
            </label>
          </template>

          <template v-else>
            <label>
              <span>아이디</span>
              <input v-model.trim="registerForm.username" type="text" autocomplete="username" placeholder="아이디" />
              <small v-if="touched && registerErrors.username">{{ registerErrors.username }}</small>
            </label>
            <label>
              <span>비밀번호</span>
              <input v-model="registerForm.password" type="password" autocomplete="new-password" placeholder="비밀번호" />
              <small v-if="touched && registerErrors.password">{{ registerErrors.password }}</small>
            </label>
            <label>
              <span>비밀번호 확인</span>
              <input v-model="registerForm.confirmPassword" type="password" autocomplete="new-password" placeholder="비밀번호 확인" />
              <small v-if="touched && registerErrors.confirmPassword">{{ registerErrors.confirmPassword }}</small>
            </label>
            <label>
              <span>연락처</span>
              <input v-model.trim="registerForm.phone" type="tel" autocomplete="tel" placeholder="010-0000-0000" />
              <small v-if="touched && registerErrors.phone">{{ registerErrors.phone }}</small>
            </label>
            <label class="checkbox-label">
              <input v-model="registerForm.agree" type="checkbox" />
              <span>이 화면은 프론트엔드 데모이며 실제 계정이 생성되지 않는다는 점에 동의합니다.</span>
            </label>
            <small v-if="touched && registerErrors.agree" class="standalone-error">{{ registerErrors.agree }}</small>
          </template>

          <button class="register-button auth-submit" type="submit">
            {{ mode === 'login' ? '로그인' : '회원가입' }}
          </button>
        </form>

        <p v-if="submitted" class="auth-success">{{ submitted }}</p>
        <p class="auth-disclaimer">Demo only. No real account, payment, wallet, betting, or private API connection is included.</p>
      </section>
    </div>
  </Teleport>
</template>
