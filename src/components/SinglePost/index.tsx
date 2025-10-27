import { findPostBySlugCached } from '@/lib/post/queries';
import { formatDate, formatRelativeDate } from '@/utils/format-date';
import Image from 'next/image';
import { Suspense } from 'react';
import { SpinLoader } from '../SpinLoader';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
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
    </Suspense>
  );
}
