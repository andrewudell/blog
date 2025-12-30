import HyperCardField from './HyperCardField';

export default function PostContent({ content }: { content: string }) {
  return (
    <HyperCardField>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </HyperCardField>
  );
}
