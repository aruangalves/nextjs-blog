import { Container } from '@/components/Container';
import { FeaturedPost } from '@/components/FeaturedPost';
import { Header } from '@/components/Header';
import { PostList } from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

//this page represents the main route of the application
//every route is represented by its folder name and accessed from the page.tsx file within
//examples:
// app/page.tsx --> / root route
// app/about/page.tsx --> /about route

export default function Home() {
  console.log('Message from the Home server component');

  return (
    <Container>
      <Header />

      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Suspense fallback={<SpinLoader />}>
          <FeaturedPost />
        </Suspense>
        <Suspense fallback={<SpinLoader />}>
          <PostList />
        </Suspense>
      </main>

      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <p>Here is your footer</p>
      </footer>
    </Container>
  );
}
