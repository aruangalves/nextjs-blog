'use client';

import {
  CircleXIcon,
  FilePlusCornerIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = `bg-slate-900 text-slate-100 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap sm:h-auto ${
    !isOpen && 'overflow-hidden h-10'
  } `;
  const linkClasses =
    '[&>svg]:w-[18px] [&>svg]:h-[18px] px-4 h-10 flex items-center gap-2 transition hover:bg-slate-700 shrink-0 cursor-pointer rounded-xl';
  const btnClasses = linkClasses + ' text-blue-200 italic sm:hidden';

  return (
    <nav className={navClasses}>
      <button className={btnClasses} onClick={() => setIsOpen((s) => !s)}>
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Menu
          </>
        )}
      </button>
      <a href='/' target='_blank' className={linkClasses}>
        <HouseIcon />
        Home
      </a>

      <Link href='/admin/post' className={linkClasses}>
        <FileTextIcon />
        Posts
      </Link>

      <Link href='/admin/post/new' className={linkClasses}>
        <FilePlusCornerIcon />
        New Post
      </Link>
    </nav>
  );
}
