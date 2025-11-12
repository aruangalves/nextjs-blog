import bcrypt from 'bcryptjs';
import { hash } from 'crypto';

export async function hashPassword(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, 10);
  //Encoded in base64 to avoid issues with environment env, this is not necessary if the hash is stored on a database
  const base64 = Buffer.from(hash).toString('base64');
  return base64;
  //End encode base64
}

export async function verifyPasswordProduction(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

export async function verifyPassword(
  password: string,
  base64Password: string,
): Promise<boolean> {
  const hashedPassword = Buffer.from(base64Password, 'base64').toString(
    'utf-8',
  );
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

//For generating and testing password
/*
(async () => {
  const envPass = await hashPassword('your_password_here');
  console.log(envPass);
  const testPass = await verifyPassword(
    '',
    '',
  );
  console.log(testPass);
})();
*/
