import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Zandi | Personal Blog',
  description: 'A modern personal blog with a premium organic aesthetic.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav className="glass">
            <Link href="/" className="logo">ZANDI</Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="glass">
          <p>© 2026 ZANDI. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
