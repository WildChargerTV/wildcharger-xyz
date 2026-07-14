// * src/app/_components/footer.tsx || Footer Component

// Node Module Imports
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineTwitch, AiOutlineX } from 'react-icons/ai';
import { DiFirefox, DiReact } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { PiCassetteTapeFill } from 'react-icons/pi';
import Link from 'next/link';

/**
 * Renders the site footer. Consists of two sections: on the left, a copyright disclaimer &
 * credits. On the right, self-promotion. Very simple.
 * @component {@linkcode Footer}
 */
export default function Footer(): import('react').JSX.Element {
  return (<footer className='font-montserrat bg-[#40404080] block md:flex justify-around p-[1vw] text-[#e8e6e3]'>
    {/* Credits: Site Technology */}
    <div className='max-w-[85%] md:max-w-[40%] m-auto md:m-0 text-center'>
      <p className='text-[3vw] md:text-[1vw] my-[3vw] md:my-[1vw]'>
        This website has been built by hand, for personal non-profit use. Any presence of
        copyrighted material beyond the WildCharger character is protected under the Copyright
        Disclaimer under Section 107 of the Copyright Act 1976, whereby allowance is made for
        &quot;fair use&quot; for purposes such as criticism, comment, news reporting, teaching,
        scholarship, and research. Fair use is a use permitted by copyright statute that might
        otherwise be infringing.
      </p>
      <p className='text-[3vw] md:text-[1vw] my-[3vw] md:my-[1vw] flex items-center justify-center'>
        <span className='text-[4.5vw] md:text-[1.5vw] inline-flex align-middle mr-[0.5vw]'>
          <DiReact /><SiNextdotjs />
        </span> Powered by ReactJS via Next.js
      </p>
      <p className='text-[3vw] md:text-[1vw] my-[3vw] md:my-[1vw] flex items-center justify-center'>
        <span className='text-[4.5vw] md:text-[1.5vw] inline-flex align-middle mr-[0.5vw]'>
          <PiCassetteTapeFill />
        </span><span>
          Asset Delivery powered by{' '}
          <a href='https://github.com/9001/copyparty' target='_blank' rel='noreferrer'>
            copyparty
          </a>
        </span>
      </p>
      <p className='text-[3vw] md:text-[1vw] my-[3vw] md:my-[1vw] flex items-center justify-center'>
        <span className='text-[4.5vw] md:text-[1.5vw] inline-flex align-middle mr-[0.5vw]'>
          <DiFirefox />
        </span> Tested on Mozilla Firefox
      </p>
    </div>

    {/* Credits: Me. */}
    <div className='max-w-[85%] md:max-w-[40%] m-auto md:m-0 flex flex-col items-center'>
      <p className='text-[3vw] md:text-[1vw] my-[3vw] md:my-[1vw]'>
        Created & Maintained by WildCharger
      </p>
      <div className='text-[9vw] md:text-[3vw] my-[1vw] flex'>
        <Link href='https://github.com/WildChargerTV'><AiFillGithub /></Link>
        <Link href='https://www.linkedin.com/in/ethan-guan-ba453a2a0/'><AiFillLinkedin /></Link>
        <Link href='https://x.com/wildchargergame'><AiOutlineX /></Link>
        <Link href='https://www.youtube.com/@WildCharger'><AiFillYoutube /></Link>
        <Link href='https://twitch.tv/wildchargertv'><AiOutlineTwitch /></Link>
      </div>
    </div>
  </footer>);
}