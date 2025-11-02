import { FileTextIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export function MenuAdmin() {
  const navClasses =
    'bg-slate-900 text-slate-100 rounded-lg flex flex-col overflow-hidden mb-8 sm:flex-row sm:flex-wrap';
  const linkClasses =
    '[&>svg]:w-[18px] [&>svg]:h-[18px] px-4 h-10 flex items-center gap-2 transition hover:bg-slate-700 shrink-0';

  return (
    <nav className={navClasses}>
      <a href='/' target='_blank' className={linkClasses}>
        <HouseIcon />
        Home
      </a>

      <Link href='/admin/post' className={linkClasses}>
        <FileTextIcon />
        Posts
      </Link>
    </nav>
  );
}
