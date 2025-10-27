import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

//React cache removes duplicated calls from the same API or repo
//Useful when you need to invoke the same database query more than once
export const findAllPublishedPostsCached = cache(
  async () => await postRepository.findAllPublished(),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
