// * src/app/page.tsx || Landing Page

// Node Module Imports
import Link from 'next/link';

/**
 * ### Landing Page
 * Renders the site's landing page. Managed automatically by the Next.js directory-based routing
 * system.
 * @component {@linkcode Page} 
 */
export default function Page(): import('react').JSX.Element {
  /** Return the page content. */
  return (<main className='font-montserrat min-h-[33vw] mb-[50px] mt-[2%] mx-auto text-[#e8e6e3] w-[85%]'>
    {/* Page Title (Hidden) - Exists solely for web crawlers */}
    <h1 className='hidden'>WildCharger.xyz</h1>

    {/* Section 1: Intro */}
    <h2 className='font-extrabold mb-[1vw] max-md:mt-[9vw] text-[9.5vw]/[125%] md:text-[3.25vw] text-outline-h'>
      Greetings, traveller!
    </h2>
    <div className='flex max-md:flex-col md:gap-x-[5vw] items-center justify-between'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw] md:max-w-[50%]'>
        Welcome to my website. My name is WildCharger, a software developer for web applications,
        occasional content creator, & enthusiast for various science fiction franchises
        (& Pokémon). Whether you arrived here by chance, or are interested in my endeavors, I hope
        you enjoy your visit.
        <br /><br />
        Take a look at my <b><Link href='/portfolio'>Portfolio</Link></b> to see a list of my
        ongoing & completed projects, and head over to the <b><Link href='/contact'>Contact</Link>
        </b> page if you need to get in touch with me. Thank you!
      </p>
      <div className='max-md:mt-[4vw] md:max-w-[50%]'>
        <img 
          src='/img/landing/characters.png' 
          alt='WildCharger brand featured characters'
          className='object-contain'
        />
      </div>
    </div>

    {/* Section 2: Live Streaming */}
    <h2 className='font-extrabold mb-[1vw] max-md:mt-[9vw] text-[9.5vw]/[125%] md:text-[3.25vw] text-outline-h'>
      Live Streaming
    </h2>
    <div className='flex flex-col-reverse md:flex-row-reverse md:gap-x-[2%] items-center justify-between'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw] md:max-w-[50%]'>
        Although not a common occurrence, I do tend to stream every once in a while. When I do, it
        can be pretty much anything - between games I want to play for the first time, games I 
        simply want to share around, or (very rarely) I stream development of my various projects. 
        Feel free to take a look, if you&apos;re interested!
      </p>
      <iframe
        src='https://player.twitch.tv/?channel=wildchargertv&parent=wildcharger.xyz'
        title='twitchembed'
        className='aspect-video border-0 h-auto md:h-[33vh] max-md:mb-[25px]'
        allowFullScreen
      />
    </div>
  </main>);
}
