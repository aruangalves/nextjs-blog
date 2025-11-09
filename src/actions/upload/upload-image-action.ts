'use server';

import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOAD_DIRECTORY,
  IMAGE_UPLOAD_MAX_SIZE,
} from '@/lib/constants';
import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  //TODO: check user login before proceeding
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
      }KB). Por favor, escolha uma imagem menor.`,
    });
  }

  //Note: production validation requires a lib to really assert if the file has a valid type, checking only through mime-types is not recommended!
  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Formato de imagem inválido' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadFullPath = resolve(
    process.cwd(),
    'public',
    IMAGE_UPLOAD_DIRECTORY,
  );

  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${IMAGE_UPLOAD_DIRECTORY}/${uniqueImageName}`;

  return makeResult({ url });
}
