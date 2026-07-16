// * src/app/_components/navigation.tsx || Navigation Layout Component

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
 * ### Navigation Layout Component
 * Client component which renders the site header & navbar. The only way to navigate between the 
 * site's three pages. The navbar is sticky-positioned at z-index 1, allowing it to remain visible
 * over the other elementson the page.
 * 
 * Waits to render until a catchphrase has been loaded (returns `undefined` until then).
 * @component {@linkcode Navigation}
 * @requires {@linkcode catchphraseData} {@linkcode TabBar}
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

  /** 
   * Pick a random catchphrase from the available dataset. Only invoked once at first load.
   * ? sonarqube(typescript:S2245) can be ignored. No security gaps are presented by this function.
   */
  useEffect(() => {
    const randomInt = Math.floor(Math.random() * catchphraseData.length);
    setCatchphrase(catchphraseData[randomInt]);
  }, []);

  /** 
   * Set the absolute position of the dropdown menu based on the width of the button. Invoked every
   * time the visibility of the dropdown menu is toggled.
   */
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
  if(catchphrase) return (<header className='box-border font-montserrat sticky top-0 right-0 bottom-0 left-0 text-white w-full z-1'>
    <div className='bg-[#40404080] flex gap-x-0 items-center justify-between px-[5vw] md:px-[50px] py-[2vw] md:py-[20px] w-full'>
      {/* Site Title & Catchphrase (Dynamic 'Logo') */}
      <div className='flex flex-col min-h-[75px] justify-center overflow-hidden text-right max-w-[90%] md:max-w-[50%] min-w-fit'>
        <Link href='/'>
          <h2 className='font-extrabold m-0 px-[0.25vw] py-0 text-[9vw]/[95%] md:text-[4.5vw]/[85%] text-outline-title uppercase'>
            WildCharger
          </h2>
          <h4 className='font-bold m-0 px-[0.25vw] py-0 text-[2.2vw] md:text-[1.1vw] text-outline-h'>
            {catchphrase}
          </h4>
        </Link>
      </div>

      {/* Site Nav Links */}
      <div className='font-semibold text-[2vw] min-w-fit md:min-w-[30%]'>
        {/* Desktop Variant */}
        <div className='gap-x-[2.25vw] hidden md:flex justify-center'>
          <Link href='/portfolio' className='active:text-[#f9e2ad] hover:text-[#e8e6e3]'>Portfolio</Link>
          <Link href='/contact' className='active:text-[#f9e2ad] hover:text-[#e8e6e3]'>Contact</Link>
        </div>
        {/* Mobile Variant w/ Dropdown Menu */}
        {/* TODO this is an awful dropdown. make a better one lol */}
        <div className='block md:hidden'>
          <button className='text-[7.5vw]' onClick={toggleDropdown} ref={btnWidthRef}>
            <GiHamburgerMenu />
          </button>
          <div className='h-0 relative w-0'>
            {showDropdown && (
              <div
                className='absolute backdrop-brightness-50 border box-content flex flex-col px-[10px] py-[5px] text-right text-[5vw] z-3'
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
      <div className='bg-[#40404080] border-y-2 border-white font-semibold h-[10vw] md:h-[5vw] overflow-x-scroll scrollbar-none md:scrollbar-auto text-[4vw] md:text-[1.75vw] w-full'>
        <TabBar />
      </div>
    )}
  </header>);
}
