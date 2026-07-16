// * src/app/_components/tabbar.tsx || Portfolio Tab Bar Component

// Switch to Client Mode (React Hooks in use)
'use client';

// Node Module Imports
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

/**
 * ### Portfolio Tab Bar Component
 * Client component which renders the tab UI available only on the Portfolio page. Uses `clsx` to
 * highlight the active tab.
 * @component {@linkcode TabBar}
 */
export default function TabBar() : import('react').JSX.Element {
  // React Hooks
  const pathname = usePathname();

  /** Declare all of the available tabs to be displayed on the site. */
  const TABS = [
    { name: 'Index', href: '/portfolio' },
    { name: 'Galaxy on Fire', href: '/portfolio/galaxy-on-fire' },
    { name: 'TRON 2.0', href: '/portfolio/tron-20' },
    { name: 'EVERSPACE™', href: '/portfolio/everspace' },
    { name: 'Content Creation', href: '/portfolio/content-creation' }
  ];

  /** Return the tab bar content. */
  return (<div className='gap-x-7 h-full inline-flex items-center md:justify-center mx-[1vw] w-max md:w-full'>
    {TABS.map((link) => <Link key={link.name} href={link.href}
      className={clsx('text-[#e8e6e3]', { 'text-[#f9e2ad]' : pathname === link.href })}
    >{link.name}</Link>)}
  </div>);
}
