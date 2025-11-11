'use server';

import {
  makePartialPublicPost,
  makePublicPostFromDb,
  PublicPost,
} from '@/dto/post/dto';
import { PostUpdateSchema } from '@/lib/post/validations';
import { postRepository } from '@/repositories/post';
import { getZodErrorMessages } from '@/utils/get-zod-error-msgs';
import { revalidateTag } from 'next/cache';

type updatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: true;
};

export async function updatePostAction(
  prevState: updatePostActionState,
  formData: FormData,
): Promise<updatePostActionState> {
  //TODO: Check user login for authorization

  if (!(formData instanceof FormData)) {
    return {
      formState: { ...prevState.formState },
      errors: ['Dados inválidos'],
    };
  }

  const id = formData.get('id')?.toString() || '';

  if (!id || typeof id !== 'string') {
    return {
      formState: prevState.formState,
      errors: ['ID inválido'],
    };
  }

  const objFromFormData = Object.fromEntries(formData.entries());

  const zodParsedObj = PostUpdateSchema.safeParse(objFromFormData);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(zodParsedObj.error.format());
    return { errors, formState: makePartialPublicPost(objFromFormData) };
  }

  const validPostData = zodParsedObj.data;

  const updatedPost = {
    ...validPostData,
  };

  let post;
  try {
    post = await postRepository.update(id, updatedPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(objFromFormData),
        errors: [e.message],
      };
    }

    return {
      formState: makePartialPublicPost(objFromFormData),
      errors: ['Erro desconhecido'],
    };
  }

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: true,
  };
}
