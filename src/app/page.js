import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();
  const featuredPost = allPostsData[0];
  const secondaryPost = allPostsData[1];
  const tertiaryPost = allPostsData[2];

  return (
    <div className="space-y-12 pb-24 px-6 max-w-5xl mx-auto">
      {/* Hero Section: Welcoming & Asymmetric */}
      <section className="relative">
        <div className="flex flex-col gap-6">
          <div className="max-w-[85%]">
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">WELCOME TO THE GREENHOUSE</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.1] tracking-tight font-headline">
              나만의 기록으로 <br/>
              <span className="text-primary italic">숨 쉬는 공간,</span> <br/>
              잔디 블로그.
            </h1>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
              구독하기
            </button>
            <button className="px-6 py-4 bg-surface-container-highest text-primary rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              더 알아보기
            </button>
          </div>
        </div>
        {/* Floating Organic Element */}
        <div className="absolute -top-10 -right-4 w-32 h-32 bg-primary-container/30 blur-3xl rounded-full -z-10"></div>
      </section>

      {/* Featured Section: Bento Style */}
      <section className="space-y-6">
        <div className="flex items-end justify-between px-2">
          <h2 className="text-2xl font-bold text-on-surface font-headline">최근 기록들</h2>
          <Link href="/archive" className="text-sm font-medium text-primary hover:underline cursor-pointer">모두 보기</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Bento Card 1: Main Post */}
          {featuredPost && (
            <Link href={`/posts/${featuredPost.slug}`} className="group relative overflow-hidden bg-surface-container-highest rounded-lg aspect-[4/5] md:aspect-square flex flex-col justify-end p-8 shadow-sm">
              <div className="absolute inset-0 w-full h-full bg-emerald-900/10 z-0">
                {/* Fallback pattern if no image */}
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/20 to-transparent"></div>
              <div className="relative z-10 space-y-3">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full uppercase">NEW</span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight font-headline">{featuredPost.title}</h3>
                <p className="text-emerald-50/80 text-sm line-clamp-2">{featuredPost.excerpt}</p>
              </div>
            </Link>
          )}

          {/* Bento Card 2: Right Column */}
          <div className="grid grid-cols-1 gap-5">
            {secondaryPost ? (
              <Link href={`/posts/${secondaryPost.slug}`} className="group glass-card rounded-lg p-6 flex flex-col justify-between hover:bg-surface-container-lowest transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-primary-container/50 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>brush</span>
                  </div>
                  <span className="text-xs text-on-surface-variant font-medium">{secondaryPost.date}</span>
                </div>
                <div className="mt-8 space-y-2">
                  <h3 className="text-xl font-bold text-on-surface font-headline">{secondaryPost.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">{secondaryPost.excerpt}</p>
                </div>
              </Link>
            ) : (
              <div className="group glass-card rounded-lg p-6 flex flex-col justify-between opacity-50">
                <div className="mt-8 space-y-2">
                  <h3 className="text-xl font-bold text-on-surface font-headline">아직 기록이 없습니다</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">곧 새로운 글이 올라올 예정입니다.</p>
                </div>
              </div>
            )}

            {tertiaryPost ? (
              <Link href={`/posts/${tertiaryPost.slug}`} className="flex gap-4 p-4 bg-surface-container-low rounded-lg group cursor-pointer">
                <div className="w-24 h-24 shrink-0 rounded-md overflow-hidden bg-surface-container-highest">
                  <div className="w-full h-full bg-primary/5 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-[10px] font-bold text-primary tracking-wider uppercase">INSIGHT</span>
                  <h4 className="font-bold text-on-surface line-clamp-1 font-headline">{tertiaryPost.title}</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-1">{tertiaryPost.excerpt}</p>
                </div>
              </Link>
            ) : (
               <div className="flex gap-4 p-4 bg-surface-container-low rounded-lg opacity-50">
                <div className="w-24 h-24 shrink-0 rounded-md bg-surface-container-highest"></div>
                <div className="flex flex-col justify-center gap-1">
                  <h4 className="font-bold text-on-surface line-clamp-1 font-headline">Coming Soon</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-1">더 많은 이야기가 준비 중입니다.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-container/30 rounded-xl p-8 text-center space-y-6 relative overflow-hidden">
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/40 blur-3xl rounded-full"></div>
        <div className="relative z-10 space-y-2">
          <h2 className="text-2xl font-bold text-on-primary-container font-headline">새로운 소식 받기</h2>
          <p className="text-sm text-on-surface-variant max-w-xs mx-auto">잔디 블로그의 유용한 기술 기사와 인사이트를 이메일로 가장 먼저 만나보세요.</p>
        </div>
        <div className="relative z-10 flex flex-col gap-3 max-w-sm mx-auto">
          <input className="w-full px-6 py-4 bg-surface-container-lowest rounded-full border-none focus:ring-2 focus:ring-primary-container text-sm" placeholder="이메일 주소를 입력하세요" type="email"/>
            <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-full hover:scale-105 transition-transform">구독 시작</button>
        </div>
      </section>
    </div>
  );
}
