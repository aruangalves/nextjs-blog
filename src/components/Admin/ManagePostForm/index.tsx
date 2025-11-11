'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useActionState, useEffect, useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { MessageSquarePlusIcon } from 'lucide-react';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { createPostAction } from '@/actions/post/create-post-action';

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [postState, formAction, isPending] = useActionState(
    createPostAction,
    initialState,
  );

  const { formState } = postState;
  const [contentValue, setContentValue] = useState(formState.content);

  useEffect(() => {
    console.log(postState.formState);
  }, [postState]);

  return (
    <form action={formAction} className='mb-16 flex flex-col gap-4'>
      <InputText
        labelText='ID'
        name='id'
        placeholder='ID gerado automaticamente'
        type='text'
        readOnly
        defaultValue={formState.id}
      />
      <InputText
        labelText='Slug'
        name='slug'
        placeholder='Slug gerado automaticamente'
        type='text'
        readOnly
        defaultValue={formState.slug}
      />
      <InputText
        labelText='Autor'
        name='author'
        placeholder='Digite o nome do autor'
        type='text'
        defaultValue={formState.author}
      />
      <InputText
        labelText='Título'
        name='title'
        placeholder='Digite o título'
        type='text'
        defaultValue={formState.title}
      />
      <InputText
        labelText='Excerto'
        name='excerpt'
        placeholder='Digite o resumo'
        type='text'
        defaultValue={formState.excerpt}
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
        defaultValue={formState.coverImageUrl}
      />
      <InputCheckbox
        labelText='Publicar post?'
        name='published'
        type='checkbox'
        defaultChecked={formState.published}
      />
      <Button type='submit'>
        <MessageSquarePlusIcon />
        Criar post
      </Button>
    </form>
  );
}
