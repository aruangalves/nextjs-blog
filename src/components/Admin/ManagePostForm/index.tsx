'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { MessageSquarePlusIcon } from 'lucide-react';
import { PublicPost } from '@/dto/post/dto';

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action='' className='mb-16 flex flex-col gap-4'>
      <InputText
        labelText='ID'
        name='id'
        placeholder='ID gerado automaticamente'
        type='text'
        readOnly
        defaultValue={publicPost?.id || ''}
      />
      <InputText
        labelText='Slug'
        name='slug'
        placeholder='Slug gerado automaticamente'
        type='text'
        readOnly
        defaultValue={publicPost?.slug || ''}
      />
      <InputText
        labelText='Autor'
        name='author'
        placeholder='Digite o nome do autor'
        type='text'
        defaultValue={publicPost?.author || ''}
      />
      <InputText
        labelText='Título'
        name='title'
        placeholder='Digite o título'
        type='text'
        defaultValue={publicPost?.title || ''}
      />
      <InputText
        labelText='Excerto'
        name='excerpt'
        placeholder='Digite o resumo'
        type='text'
        defaultValue={publicPost?.excerpt || ''}
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
        defaultValue={publicPost?.coverImageUrl || ''}
      />
      <InputCheckbox
        labelText='Publicar post?'
        name='published'
        type='checkbox'
        defaultChecked={publicPost?.published || false}
      />
      <Button type='submit'>
        <MessageSquarePlusIcon />
        Criar post
      </Button>
    </form>
  );
}
