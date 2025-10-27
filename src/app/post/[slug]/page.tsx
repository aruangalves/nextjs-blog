import { findPostBySlugCached } from '@/lib/post/queries';
import { formatDate, formatRelativeDate } from '@/utils/format-date';
import { Metadata } from 'next';
import Image from 'next/image';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

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
