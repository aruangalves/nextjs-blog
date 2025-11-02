import { PostDate } from '../../PostDate';
import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import Link from 'next/link';
import { DeletePostButtonAdmin } from '../DeletePostButtonAdmin';

export async function PostListAdmin() {
  const posts = await findAllPostsAdmin();

  if (posts.length > 0) {
    return (
      <div className='grid grid-cols-1 gap-1'>
        <div className='grid grid-cols-[3fr_1fr_1fr_4rem] font-bold text-[1.05rem] gap-1 [&_p]:bg-slate-600 [&_p]:px-2 [&_p]:py-2 [&_p]:rounded-[0.15rem] [&_p]:text-slate-50'>
          <p>Post title</p>
          <p>Creation date</p>
          <p>Last edit</p>
          <p className='text-center'>Delete</p>
        </div>
        {posts.map((post) => {
          const cssStyling = 'bg-slate-300 py-4 px-2 rounded-[0.15rem]';
          return (
            <article
              key={post.id}
              className='grid grid-cols-[3fr_1fr_1fr_4rem] gap-1'
            >
              <p className={cssStyling}>
                <Link
                  href={`/admin/post/${post.id}`}
                  className='hover:underline'
                >
                  {post.title}
                </Link>{' '}
                {!post.published && (
                  <span className='text-slate-600 italic text-sm'>
                    (Não publicado)
                  </span>
                )}
              </p>

              <PostDate date={post.createdAt} className={cssStyling} />

              <PostDate date={post.updatedAt} className={cssStyling} />

              <div className={`${cssStyling} flex flex-row justify-center`}>
                <DeletePostButtonAdmin id={post.id} title={post.title} />
              </div>
            </article>
          );
        })}
        <div className='fixed z-50 bg-black/50 backdrop-blur-sm inset-0 flex items-center justify-center'>
          <div className='p-8 bg-slate-100 rounded-2xl max-w-2xl mx-6 flex flex-col gap-12 shadow-lg shadow-slate-800'>
            <h2 className='text-3xl'>Delete post</h2>
            <p>
              You are about to delete <b>POST NAME</b>, are you sure?
            </p>
            <div className='flex items-center justify-around gap-4'>
              <button className='rounded-[0.5rem] border-blue-700 border-2 bg-blue-700 px-12 py-4 min-w-40 text-slate-50 font-bold text-[1.15rem] hover:border-blue-800 hover:bg-blue-800 transition hover:cursor-pointer flex items-center justify-center'>
                Yes
              </button>
              <button
                className='rounded-[0.5rem] border-slate-800 border-2 px-12 py-4 min-w-40 font-bold text-[1.15rem] hover:bg-slate-200 transition hover:cursor-pointer flex items-center justify-center'
                autoFocus
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div className='grid grid-cols-1 gap-8'></div>;
  }
}
