import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main>
      <section className="hero">
        <h1>ZANDI BLOG</h1>
        <p>파릇파릇한 아이디어와 기술적인 여정을 기록하는 개인 블로그입니다.</p>
      </section>

      <section className="post-grid">
        {allPostsData.map(({ slug, date, title, excerpt }) => (
          <Link href={`/posts/${slug}`} key={slug} className="post-card glass">
            <span className="date">{date}</span>
            <h2>{title}</h2>
            <p>{excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
