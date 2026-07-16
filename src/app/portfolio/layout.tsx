// * src/app/portfolio/layout.tsx || Portfolio Layout Component

// Local Module Imports
import Navigation from '@app/_components/navigation';
import TabBar from '@app/_components/tabbar';

/**
 * ### Portfolio Layout Component
 * Renders the layout of the site's Portfolio page. This allows for a global style to be applied to
 * all of the tabs within the same route. The {@linkcode TabBar} component is fully integrated into
 * the {@linkcode Navigation} header component.
 * @component {@linkcode Layout}
 * @see {@linkcode Navigation} {@linkcode TabBar}
 */
export default function Layout({ 
  children
 }: Readonly<{ children: React.ReactNode }>) {
  return (<main className='mt-[3vw] mb-[50px] mx-auto font-montserrat text-[#e8e6e3] min-h-[33vw] w-[85%]'>
    {children}
  </main>);
}
