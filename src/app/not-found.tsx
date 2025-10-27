import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <title>Page not found | The Blog</title>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start pb-16 min-h-dvh'>
        <h1 className='text-9xl'>404</h1>
        <p className='text-3xl font-bold'>Error: page not found</p>
        <p className='pt-4'>
          The page you were looking for could not be found. You can return{' '}
          <Link href='/' className='underline hover:no-underline'>
            home
          </Link>
          .
        </p>
      </main>
    </>
  );
}
