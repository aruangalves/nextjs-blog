export const dynamic = 'force-dynamic';

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  return (
    <div className='py-16'>
      <h1 className='text-4xl'>To do blog post for ID: {id}</h1>
      <p>It requires some work...</p>
    </div>
  );
}
