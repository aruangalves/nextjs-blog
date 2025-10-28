import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';
import {
  //findAllPublishedPostsCached,
  findPostBySlugCached,
} from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

//Needed for Static Site Generation
/*export async function generateStaticParams() {
  const posts = await findAllPublishedPostsCached();

  const params = posts.map((post) => {
    return {
      slug: post.slug,
    };
  });

  return params;
}*/

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
