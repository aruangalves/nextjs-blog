import { PostListAdmin } from '@/components/Admin/PostListAdmin';
import { SpinLoader } from '@/components/SpinLoader';
import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Manage Posts | The Blog',
};

export default async function AdminPostPage() {
  const posts = await findAllPostsAdmin();
  return (
    <div className='py-16'>
      <h1 className='text-4xl'>To do... AdminPostPage</h1>
      <p>It requires some work...</p>
      <h2 className='text-2xl'>Testing database function...</h2>
      <section className='py-4'>
        <Suspense fallback={<SpinLoader />}>
          <PostListAdmin />
        </Suspense>
      </section>
    </div>
  );
}
