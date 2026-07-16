// * src/app/_components/footer.tsx || Footer Layout Component

// Node Module Imports
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineTwitch, AiOutlineX } from 'react-icons/ai';
import { DiFirefox, DiReact } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { PiCassetteTapeFill } from 'react-icons/pi';
import Link from 'next/link';

/**
 * ### Footer Layout Component
 * Renders the site footer. Consists of two sections: on the left, a copyright disclaimer &
 * credits. On the right, self-promotion. Stacked vertically on mobile. Very simple.
 * @component {@linkcode Footer}
 */
export default function Footer(): import('react').JSX.Element {
  /** Return the footer content. */
  return (<footer className='bg-[#40404080] block md:flex font-montserrat justify-around p-[1vw] text-[#e8e6e3]'>
    {/* Credits: Site Technology */}
    <div className='m-auto md:m-0 text-center max-w-[85%] md:max-w-[40%]'>
      <p className='my-[3vw] md:my-[1vw] text-[3vw] md:text-[1vw]'>
        This website has been built by hand, for personal non-profit use. Any presence of
        copyrighted material beyond the WildCharger character is protected under the Copyright
        Disclaimer under Section 107 of the Copyright Act 1976, whereby allowance is made for
        &quot;fair use&quot; for purposes such as criticism, comment, news reporting, teaching,
        scholarship, and research. Fair use is a use permitted by copyright statute that might
        otherwise be infringing.
      </p>
      <p className='flex items-center justify-center my-[3vw] md:my-[1vw] text-[3vw] md:text-[1vw]'>
        <span className='align-middle inline-flex mr-[0.5vw] text-[4.5vw] md:text-[1.5vw]'>
          <DiReact /><SiNextdotjs />
        </span> Powered by ReactJS via Next.js
      </p>
      <p className='flex items-center justify-center my-[3vw] md:my-[1vw] text-[3vw] md:text-[1vw]'>
        <span className='align-middle inline-flex mr-[0.5vw] text-[4.5vw] md:text-[1.5vw]'>
          <PiCassetteTapeFill />
        </span><span>
          Asset Delivery powered by{' '}
          <a href='https://github.com/9001/copyparty' target='_blank' rel='noreferrer'>
            copyparty
          </a>
        </span>
      </p>
      <p className='flex items-center justify-center my-[3vw] md:my-[1vw] text-[3vw] md:text-[1vw]'>
        <span className='align-middle inline-flex mr-[0.5vw] text-[4.5vw] md:text-[1.5vw]'>
          <DiFirefox />
        </span> Tested on Mozilla Firefox
      </p>
    </div>

    {/* Credits: Me. */}
    <div className='flex flex-col items-center m-auto md:m-0 mb-[3vw] max-w-[85%] md:max-w-[40%]'>
      <p className='my-[3vw] md:my-[1vw] text-[3vw] md:text-[1vw]'>
        Created & Maintained by WildCharger
      </p>
      <div className='flex my-[1vw] text-[9vw] md:text-[3vw]'>
        <Link href='https://github.com/WildChargerTV'><AiFillGithub /></Link>
        <Link href='https://www.linkedin.com/in/ethan-guan-ba453a2a0/'><AiFillLinkedin /></Link>
        <Link href='https://x.com/wildchargergame'><AiOutlineX /></Link>
        <Link href='https://www.youtube.com/@WildCharger'><AiFillYoutube /></Link>
        <Link href='https://twitch.tv/wildchargertv'><AiOutlineTwitch /></Link>
      </div>
    </div>
  </footer>);
}
