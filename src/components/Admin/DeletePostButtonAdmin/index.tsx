'use client';

import { deletePostAction } from '@/actions/post/delete-post-action';
import { Trash2Icon } from 'lucide-react';
import { useTransition } from 'react';

type DeletePostButtonAdminProps = {
  id: string;
  title: string;
};

export function DeletePostButtonAdmin({
  id,
  title,
}: DeletePostButtonAdminProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm('Do you really want to delete this post?')) return;
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`Invoked server action to delete post with id ${result}`);
    });
  }

  return (
    <button
      className='text-red-700 cursor-pointer transition hover:scale-120 hover:text-red-600 disabled:text-gray-800 disabled:cursor-not-allowed'
      aria-label={`Delete post: ${title}`}
      title={`Delete post: ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
