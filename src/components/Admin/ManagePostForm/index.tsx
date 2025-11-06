'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('Este é **um exemplo**.');

  return (
    <form action='' className='mb-16'>
      <InputText />
      <InputCheckbox />
      <MarkdownEditor
        labelText='Conteúdo'
        disabled={false}
        textAreaName='content'
        value={contentValue}
        setValue={setContentValue}
      />
      <Button />
    </form>
  );
}
