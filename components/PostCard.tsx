import Link from 'next/link';
import { PostMetadata } from '@/types/post';
import { format } from 'date-fns';

export default function PostCard({ post }: { post: PostMetadata }) {
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article
        className="border-3 border-black bg-white p-5 cursor-pointer"
        style={{
          boxShadow: 'inset 3px 3px 0px #FFFFFF, inset -3px -3px 0px #CCCCCC, 3px 3px 0px #000000, 4px 4px 0px rgba(0, 0, 0, 0.4)'
        }}
      >
        <h2 className="text-xl font-bold mb-2 text-black">
          {post.title}
        </h2>
        <time className="text-xs text-gray-700 block mb-3 font-semibold">
          {formattedDate}
        </time>
        {post.excerpt && (
          <p className="text-black leading-snug text-sm">
            {post.excerpt}
          </p>
        )}
      </article>
    </Link>
  );
}
