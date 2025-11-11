'use server';

import { PublicPost } from '@/dto/post/dto';

type createPostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {
  //TODO: Check user login for authorization

  if (!(formData instanceof FormData)) {
    return {
      formState: { ...prevState.formState },
      errors: ['Dados inválidos'],
    };
  }

  const objFromFormData = Object.fromEntries(formData.entries());

  console.log(objFromFormData);

  return {
    formState: { ...prevState.formState },
    errors: [],
  };
}

//Post model - objFromFormData
/**
{
  id: '3993fcf7-2490-48ed-be2e-58c2030ee764',
  slug: 'organizacao-pessoal-por-onde-comecar',
  author: 'Bianca Rocha',
  title: 'Organização pessoal: por onde começar',
  excerpt: 'Por exemplo, ele pode dividir o código em partes menores para que o navegador só carregue o que for necessário.',
  content: 'Por exemplo, ele pode dividir o código em partes menores para que o navegador só carregue o que for necessário.',
  file: File {
    size: 0,
    type: 'application/octet-stream',
    name: 'undefined',
    lastModified: 1762864515339
  },
  coverImageUrl: '/images/bryen_4.png',
  published: 'on'
}
 */
