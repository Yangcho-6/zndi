import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <article className="max-w-4xl mx-auto px-6 pb-40">
      <header className="mb-12 pt-8">
        <div className="flex flex-col gap-6">
          <span className="font-bold uppercase tracking-widest text-primary text-xs">Sustainability • {postData.date}</span>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
            {postData.title}
          </h1>
          {postData.excerpt && (
            <p className="text-xl text-on-surface-variant leading-relaxed">
              {postData.excerpt}
            </p>
          )}
        </div>
      </header>

      {/* Content wrapper with typography styles */}
      <div className="prose prose-lg max-w-none prose-emerald
        prose-headings:font-headline prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-on-surface
        prose-p:font-body prose-p:leading-[1.8] prose-p:text-on-surface-variant
        prose-strong:text-primary prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:italic prose-blockquote:text-primary-dim
        prose-img:rounded-xl prose-img:shadow-lg"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />

      <div className="mt-20 pt-8 border-t border-surface-container flex justify-between items-center">
        <Link href="/" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          목록으로 돌아가기
        </Link>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-all">
            <span className="material-symbols-outlined text-lg">share</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-container transition-all">
            <span className="material-symbols-outlined text-lg">bookmark</span>
          </button>
        </div>
      </div>
    </article>
  );
}
