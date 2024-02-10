"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="template">
      <nav>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
        <Link className={`link ${pathname === '/settings' ? 'active' : ''}`} href="/settings">Settings {process.env.customKey}</Link>
      </nav>
      {children}
    </div>
  )
}