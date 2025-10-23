import { Header } from '@/components/Header';
import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post';
import Image from 'next/image';

//this page represents the main route of the application
//every route is represented by its folder name and accessed from the page.tsx file within
//examples:
// app/page.tsx --> / root route
// app/about/page.tsx --> /about route

export default async function Home() {
  console.log('Message from the Home server component');
  const posts = await postRepository.findAll();

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <header>
        <h1 className='text-6x1 font-bold text-center py-8'>Your page title</h1>
      </header>

      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        {posts.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </main>

      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <p>Here is your footer</p>
      </footer>
    </div>
  );
}
