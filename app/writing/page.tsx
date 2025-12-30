import { getSortedPostsMetadata } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import HyperCardNav from '@/components/HyperCardNav';

export const metadata = {
  title: 'Writing | Andrew Udell',
  description: 'Articles and blog posts',
};

export default function WritingPage() {
  const posts = getSortedPostsMetadata();

  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-2">Writing</h1>
        <hr className="border-t-2 border-black mb-6" />

        {posts.length === 0 ? (
          <div className="py-8">
            <p className="text-gray-600">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
