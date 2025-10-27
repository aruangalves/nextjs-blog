type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  return (
    <article>
      <h1 className='text-7xl font-extrabold py-16'>{slug}</h1>
    </article>
  );
}
