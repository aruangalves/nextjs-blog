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
    <form action='' className='mb-16 flex flex-col gap-4'>
      <InputText
        labelText='ID'
        name='id'
        placeholder='ID gerado automaticamente'
        type='text'
        readOnly
        defaultValue={''}
      />
      <InputText
        labelText='Slug'
        name='slug'
        placeholder='Slug gerado automaticamente'
        type='text'
        readOnly
        defaultValue={''}
      />
      <InputText
        labelText='Autor'
        name='author'
        placeholder='Digite o nome do autor'
        type='text'
        defaultValue={''}
      />
      <InputText
        labelText='Título'
        name='title'
        placeholder='Digite o título'
        type='text'
        defaultValue={''}
      />
      <InputText
        labelText='Excerto'
        name='excerpt'
        placeholder='Digite o resumo'
        type='text'
        defaultValue={''}
      />
      <MarkdownEditor
        labelText='Conteúdo'
        disabled={false}
        textAreaName='content'
        value={contentValue}
        setValue={setContentValue}
      />
      <ImageUploader />
      <InputText
        labelText='URL da imagem de capa'
        name='coverImageUrl'
        placeholder='Digite a URL da imagem de capa'
        type='text'
        defaultValue={''}
      />
      <InputCheckbox
        labelText='Publicar post?'
        name='published'
        type='checkbox'
      />
      <Button type='submit'>
        <MessageSquarePlusIcon />
        Criar post
      </Button>
    </form>
  );
}
