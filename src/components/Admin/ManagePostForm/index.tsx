'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { MessageSquarePlusIcon } from 'lucide-react';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('Este é **um exemplo**.');

  return (
    <form action='' className='mb-16 flex flex-col gap-8'>
      <InputText />
      <InputCheckbox />
      <ImageUploader />
      <MarkdownEditor
        labelText='Conteúdo'
        disabled={false}
        textAreaName='content'
        value={contentValue}
        setValue={setContentValue}
      />
      <Button type='submit'>
        <MessageSquarePlusIcon />
        Criar post
      </Button>
    </form>
  );
}
