import { PostHeading } from '../PostHeading';
import { PostCoverImage } from '../PostCoverImage';
import { formatDate, formatRelativeDate } from '@/utils/format-date';

export function FeaturedPost() {
  return (
    <article className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: '#',
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_5.png',
          alt: 'Título do post',
          priority: true,
        }}
      />
      <section className='sm:justify-center'>
        <time
          dateTime='2025-04-08T00:24:38.616Z'
          className='text-slate-600 text-sm/tight block mb-0.5'
          title={formatDate('2025-04-08T00:24:38.616Z')}
        >
          {formatRelativeDate('2025-10-24T18:24:38.616Z')}
        </time>
        <PostHeading href='https://google.com'>
          A rather remarkable article title
        </PostHeading>
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
