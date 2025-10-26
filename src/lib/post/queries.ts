import { postRepository } from '@/repositories/post';
import { cache } from 'react';

//React cache removes duplicated calls from the same API or repo
//Useful when you need to invoke the same database query more than once
export const findAllPublishedPosts = cache(
  async () => await postRepository.findAllPublished(),
);
