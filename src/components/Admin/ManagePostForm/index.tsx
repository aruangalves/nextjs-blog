'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';

export function ManagePostForm() {
  return (
    <form action='' className='mb-16'>
      <InputText />
      <InputCheckbox />
      <Button />
    </form>
  );
}
