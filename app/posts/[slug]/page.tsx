import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import PostContent from '@/components/PostContent';
import HyperCardNav from '@/components/HyperCardNav';
import { format } from 'date-fns';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Andrew Udell`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <>
      <HyperCardNav />
      <article>
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">
            {post.title}
          </h1>
          <div className="inline-block px-3 py-1 border border-gray-400 bg-gray-50 text-xs text-gray-600">
            {formattedDate}
          </div>
        </header>

        <PostContent content={contentHtml} />
      </article>
    </>
  );
}
