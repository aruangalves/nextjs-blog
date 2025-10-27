import { PostHeading } from '../PostHeading';
import { PostCoverImage } from '../PostCoverImage';
import { formatDate, formatRelativeDate } from '@/utils/format-date';
import { findAllPublishedPostsCached } from '@/lib/post/queries';

export async function FeaturedPost() {
  const posts = await findAllPublishedPostsCached();
  const post = posts.shift();

  if (typeof post === 'undefined') {
    return (
      <article className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'></article>
    );
  } else {
    const postUrl = `/post/${post.slug}`;
    return (
      <article className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: postUrl,
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: post.coverImageUrl,
            alt: post.title,
            priority: true,
          }}
        />
        <section className='sm:justify-center'>
          <time
            dateTime={post.createdAt}
            className='text-slate-600 text-sm/tight block mb-0.5'
            title={formatDate(post.createdAt)}
          >
            {formatRelativeDate(post.createdAt)}
          </time>
          <PostHeading href={postUrl}>{post.title}</PostHeading>
          <p>{post.excerpt}</p>
        </section>
      </article>
    );
  }
}
