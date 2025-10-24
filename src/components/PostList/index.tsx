import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post) => {
        return (
          <article key={post.id} className='flex flex-col gap-4 group'>
            <PostCoverImage
              linkProps={{
                href: `/post/${post.slug}`,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <time
              dateTime={post.createdAt}
              className='text-slate-600 text-sm/tight block mb-0.5'
            >
              {post.createdAt}
            </time>
            <PostHeading href={`/post/${post.slug}`} as='h3'>
              {post.title}
            </PostHeading>

            <p>{post.excerpt}</p>
          </article>
        );
      })}
    </div>
  );
}
