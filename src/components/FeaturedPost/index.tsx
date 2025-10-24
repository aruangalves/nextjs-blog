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
          className='group-hover:scale-105 transition'
        ></Image>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        necessitatibus pariatur blanditiis fugit quae labore commodi temporibus
        corrupti saepe, modi accusamus, consectetur cum vel neque ut mollitia
        odio fuga laborum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rerum sapiente provident, numquam ratione quaerat ipsam sint
        eveniet. Nisi magnam repellat numquam laborum? Sit, animi nemo culpa eos
        ullam at accusamus?
      </p>
    </article>
  );
}
