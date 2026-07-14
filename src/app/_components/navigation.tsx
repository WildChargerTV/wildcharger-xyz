// * src/app/_components/navigation.tsx || Navigation Component

// Switch to Client Mode (React Hooks in use)
'use client';

// Node Module Imports
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// Local Module Imports
import { catchphraseData } from '@app/_data';
import TabBar from '@app/_components/tabbar';

/**
 * Renders the site header & navbar. The only way to navigate between the site's three pages. The
 * navbar is sticky-positioned at z-index 1, allowing it to remain visible over the other elements
 * on the page.
 * 
 * Waits to render until a catchphrase has been loaded.
 * @component {@linkcode Navigation}
 */
export default function Navigation(): import('react').JSX.Element {
  // React Hooks
  const btnWidthRef = useRef(null);
  const menuWidthRef = useRef(null);
  const pathname = usePathname();
  // Local State Values
  const [catchphrase, setCatchphrase] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownLeft, setDropdownLeft] = useState(0);

  /** Pick a random catchphrase from the available dataset. */
  useEffect(() => {
    const randomInt = Math.floor(Math.random() * catchphraseData.length);
    setCatchphrase(catchphraseData[randomInt]);
  }, []);

  /** Set the absolute position of the dropdown menu based on the width of the button. */
  useEffect(() => {
    if (btnWidthRef.current && menuWidthRef.current)
      setDropdownLeft(
        btnWidthRef.current.getBoundingClientRect().width -
          menuWidthRef.current.getBoundingClientRect().width,
      );
  }, [showDropdown]);

  /** Event handler to toggle the visibility of the dropdown menu. */
  const toggleDropdown = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  /** Return the header once the catchphrase is loaded. */
  return catchphrase && (<header className='font-montserrat sticky top-0 right-0 bottom-0 left-0 z-1 box-border w-full'>
    <div className='flex w-full items-center justify-between gap-x-0 bg-[#40404080] px-[5vw] py-[2vw] text-[#ffffff] md:px-[50px] md:py-[20px]'>
      {/* Site Title & Catchphrase (Dynamic 'Logo') */}
      <div className='flex min-h-[75px] max-w-[90%] min-w-fit flex-col justify-center overflow-hidden text-right hover:text-[#e8e6e3] md:max-w-[50%]'>
        <Link href='/'>
          <h2 className='text-outline-title m-0 px-[0.25vw] py-0 text-[9vw]/[95%] font-extrabold uppercase md:text-[4.5vw]'>
            WildCharger
          </h2>
          <h4 className='text-outline-h m-0 px-[0.25vw] py-0 text-[2.2vw] font-bold md:text-[1.1vw]'>
            {catchphrase}
          </h4>
        </Link>
      </div>

      {/* Site Nav Links */}
      <div className='min-w-fit flex-wrap gap-y-[10px] text-[2vw] font-semibold md:min-w-[30%]'>
        {/* Desktop Variant */}
        <div className='hidden justify-center gap-x-[2.25vw] md:flex'>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        {/* Mobile Variant w/ Dropdown Menu */}
        {/* TODO this is an awful dropdown. make a better one lol */}
        <div className='block md:hidden'>
          <button className='text-[7.5vw]' onClick={toggleDropdown} ref={btnWidthRef}>
            <GiHamburgerMenu />
          </button>
          <div className='relative h-0 w-0'>
            {showDropdown && (
              <div
                className='absolute z-3 box-content flex flex-col border px-[10px] py-[5px] text-right text-[5vw] backdrop-brightness-50'
                ref={menuWidthRef}
                style={{ left: dropdownLeft }}
              >
                <Link href='/portfolio' onClick={() => setShowDropdown(false)}>Portfolio</Link>
                <Link href='/contact' onClick={() => setShowDropdown(false)}>Contact</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
    {/* Portfolio Tab Bar (visible only in the /portfolio route) */}
    {pathname.includes('/portfolio') && (
      <div className='font-semibold text-[4vw] md:text-[1.75vw] bg-[#40404080] border-y-2 border-white h-[10vw] md:h-[5vw] w-full overflow-x-scroll scrollbar-none md:scrollbar-auto'>
        <TabBar />
      </div>
    )}
  </header>);
}
