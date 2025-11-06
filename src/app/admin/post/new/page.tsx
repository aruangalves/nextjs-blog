import { ManagePostForm } from '@/components/Admin/ManagePostForm';

export const dynamic = 'force-dynamic';

type AdminPostNewPageProps = {
  id?: string;
};

export default async function AdminPostNewPage({
  id = '',
}: AdminPostNewPageProps) {
  return (
    <div>
      <h1 className='text-4xl font-bold pt-4 pb-8'>
        {id && 'Editar Post'}
        {!id && 'Criar Post'}
      </h1>
      <ManagePostForm />
    </div>
  );
}
