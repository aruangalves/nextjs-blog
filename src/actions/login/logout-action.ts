'use server';

import { asyncDelay } from '@/utils/async-delay';

export async function logoutAction() {
  //this response delay is deliberate to mitigate bruteforce attacks
  await asyncDelay(2000);
}
