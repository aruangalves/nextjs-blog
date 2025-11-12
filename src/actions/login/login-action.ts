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

  const errorMsg = 'Dados inválidos, por favor tente novamente.';

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: errorMsg,
    };
  }

  const username = formData.get('username')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  const isUsernameValid = username === process.env.LOGIN_USER;

  if (isUsernameValid) {
  }

  return {
    username: username,
    error: errorMsg,
  };
}
