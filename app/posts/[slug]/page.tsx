import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import PostContent from '@/components/PostContent';
import Navigation from '@/components/Navigation';
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
    title: `${post.title} | My Notebook Blog`,
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
      <Navigation />
      <article className="max-w-4xl mx-auto py-12">
        <header className="mb-12">
          <h1 className="text-6xl font-bold mb-4 handwriting">
            {post.title}
          </h1>
          <time className="text-gray-600 text-lg block">
            {formattedDate}
          </time>
        </header>

        <PostContent content={contentHtml} />
      </article>
    </>
  );
}
