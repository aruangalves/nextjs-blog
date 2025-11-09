'use client';

import { Button } from '@/components/Button';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    //current guarantees access to its current value, don't miss it!
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
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
      />
    </div>
  );
}
