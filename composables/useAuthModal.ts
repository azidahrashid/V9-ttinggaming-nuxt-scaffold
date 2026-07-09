type AuthMode = 'login' | 'register'

export function useAuthModal() {
  const open = useState('auth-modal-open', () => false)
  const mode = useState<AuthMode>('auth-modal-mode', () => 'login')
  const reason = useState('auth-modal-reason', () => '')

  function openAuth(nextMode: AuthMode = 'login', nextReason = '') {
    mode.value = nextMode
    reason.value = nextReason
    open.value = true
  }

  function closeAuth() {
    open.value = false
    reason.value = ''
  }

  return { open, mode, reason, openAuth, closeAuth }
}
