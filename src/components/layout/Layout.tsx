import type { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-32 md:pt-36">{children}</main>
      <Footer />
    </div>
  )
}
