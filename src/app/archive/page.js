import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Archive - ZANDI BLOG',
  description: '모든 기록을 한눈에 살펴보세요.',
}

export default function Archive() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface font-headline tracking-tight mb-4">
          전체 기록 <span className="text-primary-dim text-2xl font-normal ml-2">({allPostsData.length})</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Visual Studio Code 시리즈를 포함한 모든 강의와 생각들을 이곳에서 한눈에 모아볼 수 있습니다.
        </p>
      </header>

      <div className="space-y-12">
        {/* Group by Month/Year could be added here, but for now a simple list */}
        <div className="grid grid-cols-1 gap-8">
          {allPostsData.map((post) => (
            <article key={post.slug} className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 pb-8 border-b border-surface-container-low last:border-none">
              <time className="text-sm font-bold text-primary tracking-widest uppercase md:w-32 shrink-0">
                {post.date}
              </time>
              <div className="space-y-3">
                <Link href={`/posts/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors font-headline">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-on-surface-variant leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <Link href={`/posts/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  Read More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
