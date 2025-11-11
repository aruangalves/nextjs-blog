'use server';

import { postRepository } from '@/repositories/post';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  //TODO: check user login credentials before proceeding

  if (!id || typeof id !== 'string') {
    return {
      error: 'Invalid data.',
    };
  }

  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e;
    }
    return 'Erro desconhecido';
  }

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
