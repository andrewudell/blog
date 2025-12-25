import { getSortedPostsMetadata } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getSortedPostsMetadata();

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-6xl font-bold mb-2 handwriting">
            Table of Contents
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to my notebook of thoughts and ideas
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 handwriting">
              No posts yet. Start writing to fill your notebook!
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
