'use server';

import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { postRepository } from '@/repositories/post';
import { asyncDelay } from '@/utils/async-delay';
import { logColor } from '@/utils/log-color';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {
  //TODO: check user login credentials before proceeding

  //TODO2: remove these lines:
  await asyncDelay(2000);
  logColor('This will delete post: ' + id);
  //TODO2-END

  if (!id || typeof id !== 'string') {
    return {
      error: 'Invalid data.',
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: 'Post not found.',
    };
  }

  //TODO3: invoke deletion query
  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  logColor('This post should be deleted now: ' + id);
  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
