import { findPostBySlugCached } from '@/lib/post/queries';
import { formatDate, formatRelativeDate } from '@/utils/format-date';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  let post;

  try {
    post = await findPostBySlugCached(slug);
  } catch {
    post = undefined;
  }

  if (!post) notFound();

  return (
    <article className='pb-16'>
      <h1 className='text-4xl font-extrabold'>{post.title}</h1>
      <time
        dateTime={post.createdAt}
        className='text-slate-600 text-sm/tight block pt-4 pb-8'
        title={formatDate(post.createdAt)}
      >
        {formatRelativeDate(post.createdAt)}
      </time>
      <Image
        src={post.coverImageUrl}
        alt={post.title}
        width={1200}
        height={720}
        className='rounded-xl'
      />

      <p className='py-16'>{post.content}</p>
    </article>
  );
}
