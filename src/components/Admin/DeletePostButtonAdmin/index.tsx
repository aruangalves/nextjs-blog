'use client';

import { Trash2Icon } from 'lucide-react';

type DeletePostButtonAdminProps = {
  id: string;
  title: string;
};

export function DeletePostButtonAdmin({
  id,
  title,
}: DeletePostButtonAdminProps) {
  return (
    <button
      className='text-red-700 cursor-pointer transition hover:scale-120 hover:text-red-600'
      aria-label={`Delete post: ${title}`}
      title={`Delete post: ${title}`}
    >
      <Trash2Icon />
    </button>
  );
}
