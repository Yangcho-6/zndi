import './globals.css'
import Link from 'next/link'
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata = {
  title: 'ZANDI BLOG',
  description: '나만의 기록으로 숨 쉬는 공간, 잔디 블로그.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${plusJakartaSans.variable} ${beVietnamPro.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="min-h-screen pb-24 bg-background text-on-surface font-body">
        {/* Top Navigation Shell */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 max-w-5xl mx-auto rounded-full mt-4 mx-4 bg-[#f5faf7]/60 backdrop-blur-3xl shadow-[0px_24px_48px_rgba(21,108,71,0.06)]">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">eco</span>
            <span className="text-xl font-bold text-emerald-900 tracking-tight font-headline">ZANDI BLOG</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-primary hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </nav>

        <main className="pt-28 md:pt-32">
          {children}
        </main>

        {/* Footer Shell */}
        <footer className="w-full mt-20 px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#eef5f2] rounded-t-[3rem]">
          <div className="text-center md:text-left space-y-2">
            <div className="font-bold text-emerald-900 text-lg font-headline">ZANDI BLOG</div>
            <div className="text-sm tracking-wide text-emerald-700/70">© 2024 Digital Greenhouse. Grown with kindness.</div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-sm tracking-wide text-emerald-700/70 hover:text-emerald-600 transition-colors">Journal</Link>
            <Link href="/archive" className="text-sm tracking-wide text-emerald-700/70 hover:text-emerald-600 transition-colors">Archive</Link>
            <Link href="/about" className="text-sm tracking-wide text-emerald-700/70 hover:text-emerald-600 transition-colors">About</Link>
            <Link href="/privacy" className="text-sm tracking-wide text-emerald-700/70 hover:text-emerald-600 transition-colors">Privacy</Link>
          </div>
        </footer>

        {/* Bottom Navigation (Mobile Only) */}
        <nav className="md:hidden fixed bottom-6 left-6 right-6 h-16 glass-card rounded-full flex items-center justify-around px-4 shadow-xl z-50">
          <Link href="/" className="flex flex-col items-center gap-1 text-emerald-700 font-bold border-b-2 border-emerald-500 px-2 transition-all duration-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-[10px] font-bold">Home</span>
          </Link>
          <Link href="/archive" className="flex flex-col items-center gap-1 text-emerald-800/60 hover:scale-105 transition-all duration-300">
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="text-[10px] font-medium">Archive</span>
          </Link>
          <Link href="/tags" className="flex flex-col items-center gap-1 text-emerald-800/60 hover:scale-105 transition-all duration-300">
            <span className="material-symbols-outlined">local_florist</span>
            <span className="text-[10px] font-medium">Tags</span>
          </Link>
          <Link href="/about" className="flex flex-col items-center gap-1 text-emerald-800/60 hover:scale-105 transition-all duration-300">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">About</span>
          </Link>
        </nav>
      </body>
    </html>
  )
}
