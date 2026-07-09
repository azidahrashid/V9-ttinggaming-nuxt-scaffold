export function useAssetUrl() {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL || '/'
  const normalizedBase = baseURL.endsWith('/') ? baseURL : `${baseURL}/`

  return (path: string) => `${normalizedBase}${path.replace(/^\//, '')}`
}
