'use server';

import { PublicPost } from '@/dto/post/dto';

type createPostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {
  console.log({ prevState });
  console.log(formData);

  return {
    formState: prevState.formState,
    errors: [],
  };
}
