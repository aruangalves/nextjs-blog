import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <section className='post-body py-12 prose prose-slate w-full max-w-none overflow-hidden prose-a:transition prose-a:text-blue-700 prose-a:hover:text-blue-500 prose-a:no-underline prose-a:hover:underline prose-img:mx-auto prose-img:rounded-xl prose-img:shadow'>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </section>
  );
}
