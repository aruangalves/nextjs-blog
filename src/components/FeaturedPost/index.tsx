import Image from 'next/image';
import Link from 'next/link';

export function FeaturedPost() {
  return (
    <article className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
        <Image
          src='/images/bryen_0.png'
          width={1200}
          height={720}
          alt='Título do post'
          className='group-hover:scale-105 transition w-full h-full object-cover object-center'
          priority
        ></Image>
      </Link>
      <section className='sm:justify-center'>
        <time
          dateTime='2025-04-20'
          className='text-slate-600 text-sm/tight block mb-0.5'
        >
          20/04/2025 10:00
        </time>
        <h1 className='text-2xl/tight mb-4 font-extrabold sm:text-4xl'>
          <Link href='#'>A rather remarkable article title</Link>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          necessitatibus pariatur blanditiis fugit quae labore commodi
          temporibus corrupti saepe, modi accusamus, consectetur cum vel neque
          ut mollitia odio fuga laborum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum sapiente provident, numquam ratione quaerat
          ipsam sint eveniet. Nisi magnam repellat numquam laborum? Sit, animi
          nemo culpa eos ullam at accusamus?
        </p>
      </section>
    </article>
  );
}
