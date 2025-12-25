import Link from 'next/link';
import { PostMetadata } from '@/types/post';
import { format } from 'date-fns';

export default function PostCard({ post }: { post: PostMetadata }) {
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="mb-8 p-6 hover:bg-white hover:bg-opacity-30 rounded-lg transition-all duration-200 cursor-pointer border-l-4 border-transparent hover:border-notebook-margin">
        <h2 className="text-3xl font-bold mb-2 handwriting">
          {post.title}
        </h2>
        <time className="text-sm text-gray-600 block mb-3">
          {formattedDate}
        </time>
        {post.excerpt && (
          <p className="text-gray-700 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </article>
    </Link>
  );
}
