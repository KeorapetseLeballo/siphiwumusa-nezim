import { useEffect, useState } from 'react'

/**
 * Hook to detect if component is mounted on the client.
 * Useful for components that generate auto-incrementing IDs that differ between SSR and CSR.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
