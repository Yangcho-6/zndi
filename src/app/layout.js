import './globals.css'

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
            <a href="/" className="logo">ZANDI</a>
            <div className="nav-links">
              {/* Optional links like About, etc. */}
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
