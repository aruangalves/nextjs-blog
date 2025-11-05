import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className='py-16'>
      <h1 className='text-4xl mb-4'>To do... AdminPostNewPage</h1>
      <p className='mb-4'>It requires some work...</p>
      <div className='py-16 flex gap-4 flex-wrap'>
        <Button variant='default'>Some action</Button>
        <Button variant='ghost'>Some action</Button>
        <Button variant='danger'>Some action</Button>

        <Button variant='default' disabled>
          Some action
        </Button>
        <Button variant='ghost' disabled>
          Some action
        </Button>
        <Button variant='danger' disabled>
          Some action
        </Button>
      </div>
      <div>
        <InputText labelText='Name' placeholder='Type your name' />
        <InputText labelText='Name' placeholder='Type your name' disabled />
        <InputText labelText='Name' value='Type your name' disabled />
        <InputText labelText='Name' value='Type your name' readOnly />
        <InputCheckbox labelText='Is this checkbox cool?' />
      </div>
    </div>
  );
}
