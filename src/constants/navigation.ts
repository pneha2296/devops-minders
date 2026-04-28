import type { NavigationItem } from '../types'

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#brand' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get Quote', href: '/contact', isButton: true },
]
