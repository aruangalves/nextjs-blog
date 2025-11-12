'use server';

import { verifyPassword } from '@/lib/login/manage-login';
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

  const username = formData.get('username')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim() || '';

  if (!username || !password) {
    return { username: username, error: errorMsg };
  }

  const isUsernameValid = username === process.env.LOGIN_USER;

  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASSWORD || '',
  );

  if (!isUsernameValid || !isPasswordValid) {
    return { username: username, error: errorMsg };
  }

  //Received valid credentials, create cookie and redirect page

  return {
    username: username,
    error: 'Usuário logado com sucesso.',
  };
}
