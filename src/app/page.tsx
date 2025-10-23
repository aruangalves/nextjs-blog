import { Container } from '@/components/Container';
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
      <header>
        <h1 className='text-6x1 font-bold text-center py-8'>Your page title</h1>

        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          maxime. At, veritatis omnis debitis voluptatem soluta asperiores iure
          illum cumque, magni nulla itaque culpa aliquam voluptate natus beatae
          nihil in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          magni iste explicabo, optio eum ducimus magnam quaerat sint velit eius
          neque ad officia est voluptatem cumque odit natus alias repudiandae!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iure
          doloribus sapiente veritatis consectetur qui neque eius est, animi
          mollitia quis, blanditiis tempora esse? Iusto at necessitatibus
          expedita optio beatae! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ullam quod cumque dicta recusandae praesentium
          provident dignissimos quo doloribus sint. Esse ad aperiam molestias
          illum quam quis debitis eveniet magni placeat?
        </p>
      </header>

      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
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
