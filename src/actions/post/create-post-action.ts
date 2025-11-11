'use server';

type createPostActionState = {
  num: number;
};

export async function createPostAction(
  prevState: createPostActionState,
): Promise<createPostActionState> {
  console.log({ prevState });

  return { num: prevState.num + 1 };
}
