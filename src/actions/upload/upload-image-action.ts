'use server';

import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = '', error = '' }) => {
    return { url, error };
  };
  const genericError = 'Dados inválidos';

  if (!(formData instanceof FormData)) {
    return makeResult({ error: genericError });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: genericError });
  }

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({
      error: `O tamanho da imagem excede o limite de upload (${
        IMAGE_UPLOAD_MAX_SIZE / 1024
      }KB), por favor escolha uma imagem menor.`,
    });
  }

  //Note: production validation requires a lib to really assert if the file has a valid type, checking only through mime-types is not enough!
  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Formato de imagem inválido' });
  }

  return makeResult({ url: 'URL' });
}
