'use server';

import { asyncDelay } from '@/utils/async-delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(
  loginState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  //this response delay is deliberate to mitigate bruteforce attacks
  await asyncDelay(2000);

  const username = String(formData.get('username') || '');

  return {
    username: username,
    error: 'Login is not functional yet, try again later ;^D',
  };
}
