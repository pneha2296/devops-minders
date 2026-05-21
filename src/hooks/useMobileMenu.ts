import { useCallback, useState } from 'react'

export function useMobileMenu(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const openMenu = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen((current) => !current)
  }, [])

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    setIsOpen,
  }
}
