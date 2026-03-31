import { getPostData, getSortedPostsData } from '@/lib/posts';

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
    <article className="glass" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>{postData.title}</h1>
        <div className="date" style={{ fontSize: '1.2rem' }}>{postData.date}</div>
      </header>
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
      />
    </article>
  );
}
