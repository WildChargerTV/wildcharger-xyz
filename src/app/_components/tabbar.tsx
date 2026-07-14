// * src/app/_components/tabbar.tsx || Portfolio Tab Bar Component

// Switch to Client Mode (React Hooks in use)
'use client';

// Node Module Imports
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

/** List of available tabs to be displayed on the site. */
const tabs = [
  { name: 'Index', href: '/portfolio' },
  { name: 'Galaxy on Fire', href: '/portfolio/galaxy-on-fire' },
  { name: 'TRON 2.0', href: '/portfolio/tron-20' },
  { name: 'EVERSPACE™', href: '/portfolio/everspace' },
  { name: 'Content Creation', href: '/portfolio/content-creation' }
];

/**
 * Renders the tab UI available only on the Portfolio page. Uses CLSX to highlight the active tab.
 * @component `TabBar`
 * @requires `clsx`
 */
export default function TabBar() : import('react').JSX.Element {
  // React Hooks
  const pathname = usePathname();

  /** Return the tab bar content. */
  return (<div className='inline-flex gap-x-7 items-center md:justify-center h-full mx-[1vw] w-max md:w-full'>
    {tabs.map((link) => {
      return (<Link
        key={link.name}
        href={link.href}
        className={clsx(
          'text-[#e8e6e3]',
          { 'text-[#f9e2ad]' : pathname === link.href }
        )}
      >
        {link.name}
      </Link>)
    })}
  </div>);
}