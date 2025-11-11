'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type ImageUploaderProps = {
  disabled?: boolean;
};

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startUploadTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState('');

  function handleChooseFile() {
    //current guarantees access to its current value, don't miss it!
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleInputFileChange() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgUrl('');
      return;
    }

    const fileInput = fileInputRef.current;

    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      toast.error(
        `O tamanho da imagem excede o limite de upload (${
          IMAGE_UPLOAD_MAX_SIZE / 1024
        }KB). Por favor, escolha uma imagem menor.`,
      );

      fileInput.value = '';
      setImgUrl('');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    //TODO: Criar a action para upload de arquivo
    startUploadTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        setImgUrl('');
        return;
      }

      setImgUrl(result.url);
      toast.success('Imagem enviada com sucesso!');
    });

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-4 py-4'>
      <Button
        type='button'
        className='self-start'
        onClick={handleChooseFile}
        disabled={isUploading || disabled}
      >
        <ImageUpIcon />
        Enviar imagem
      </Button>
      {!!imgUrl && (
        <div className='flex flex-col gap-4'>
          <p>
            <b>Image URL:</b> {imgUrl}
          </p>
          {/* eslint-disable-next-line */}
          <img src={imgUrl} width='25%' height='auto' className='rounded-lg' />
        </div>
      )}
      <input
        name='file'
        type='file'
        className='hidden'
        accept='image/*'
        ref={fileInputRef}
        onChange={handleInputFileChange}
        disabled={isUploading || disabled}
      />
    </div>
  );
}
