import { LoginForm } from '@/components/Admin/LoginForm';

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  return (
    <div className='flex items-center justify-center max-w-md mt-16 mb-32 px-8 pb-16 pt-8 mx-auto rounded-2xl bg-slate-200'>
      <LoginForm />
    </div>
  );
}
