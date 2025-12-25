export default function PostContent({ content }: { content: string }) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
