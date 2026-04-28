import type { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
