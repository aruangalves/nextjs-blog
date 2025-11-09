'use client';

import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    //current guarantees access to its current value, don't miss it!
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleInputFileChange() {
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;

    const file = fileInput?.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      toast.error(
        `O tamanho da imagem excede o limite de upload (${
          IMAGE_UPLOAD_MAX_SIZE / 1024
        }KB), por favor escolha uma imagem menor.`,
      );

      fileInput.value = '';

      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    //TODO: Criar a action para upload de arquivo
    console.log(formData.get('file'));

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-4 py-4'>
      <Button type='button' className='self-start' onClick={handleChooseFile}>
        <ImageUpIcon />
        Enviar imagem
      </Button>
      <input
        name='file'
        type='file'
        className='hidden'
        accept='image/*'
        ref={fileInputRef}
        onChange={handleInputFileChange}
      />
    </div>
  );
}
