// * src/app/portfolio/tron-20/page.tsx || Portfolio Page & TRON 2.0 Tab

// Local Module Imports
import FileDownloadLink from '@app/_utils/FileDownloadLink';

/**
 * Renders the TRON 2.0 tab of the Portfolio route.
 * @component {@linkcode Page}
 * @kind Portfolio Page - TRON 2.0 Tab
 * @requires {@linkcode FileDownloadLink}
 */
export default function Page() : import('react').JSX.Element {
  /** Return the page content. */
  return (<>
    {/* Page Header */}
    <h2 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] font-jet-bradley text-outline-h max-md:text-center'>
      TRON 2.0
    </h2>

    {/* Introductory Paragraph */}
    <div className='flex max-md:flex-col md:gap-x-[5vw] justify-between items-center'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw] md:max-w-[65%]'>
        TRON 2.0 is a game I always saw as one of the greatest underappreciated gems from the early
        the early 2000s, and the game that inspired me to explore game development as a medium.
        (Its disc lightlines are used for my site&apos;s favicon!) Although it was built on archaic
        technology using an engine better off forgotten, it really did deserve so much more love
        than it ended up getting, primarily from the dev team. So although I don&apos;t have much
        going on with this game at this exact moment, I&apos;ve made it one of my personal goals to
        give it a chance to continue on.
        <br /><br />
        Of course, I couldn&apos;t have known any of what I currently do about this game were it
        not for the fantastic <a href='https://x.com/_LDSO_' target='_blank' rel='noreferrer' className='font-bold'>TronFAQ</a> of
        the <a href='https://www.ldso.net/' target='_blank' rel='noreferrer' className='font-bold'>LDSO</a> clan - the sole 
        remaining developer of the <a href='https://www.moddb.com/mods/killer-app/downloads/tron-20-killer-app-mod-v11a' target='_blank' rel='noreferrer' className='font-bold'>
        Killer App Mod</a>, which is quite literally the only thing keeping the game alive & fully
        functional to this day (an effort 20+ years strong!). Please send a thanks his way whenever
        you get the chance. He deserves it.
      </p>
      <div>
        <img 
          src='/wcxyz-njs/img/portfolio/tron-20/jet-bradley.png' 
          alt='Jet Bradley, the protagonist of TRON 2.0'
          className='object-contain'
        />
      </div>
    </div>

    {/* TRON 2.0: Security Protocol */}
    <h3 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] mt-[3vw] font-jet-bradley font-extrabold text-outline-h'>
      TRON 2.0: SECURITY PROTOCOL
    </h3>
    <div className='flex flex-row-reverse max-md:flex-col md:gap-x-[5vw] justify-between items-center'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw] md:max-w-[75%]'>
        <a href='https://github.com/WildChargerTV/TRON-2.0-Security-Protocol' target='_blank' rel='noreferrer' className='font-bold'>
        TRON 2.0: Security Protocol</a> is planned to be my custom campaign for TRON 2.0. It sees
        the player thrust into the POV of a newly-rezzed Intrusion Countermeasure Program (ICP),
        tasked with defending the grid against an unknown threat that has recently entered the
        system, infecting everything around it. Is the entire network subject to fall under its
        rule? Or will you be able to put a stop to its terror once and for all?
        <br /><br />
        Right now, this project is far less an exercise in modding, and presently exists as a
        vessel to carry documentation. I explain it more in detail
        in <a href='https://www.youtube.com/watch?v=KrUXMHaThTM' target='_blank' rel='noreferrer' className='font-bold'>
        this video</a>; however, the TL;DR is that as long as there isn&apos;t a way to define
        most, if not all of the game&apos;s aspects in plain English, there will not be any kind of
        future for it&apos;s modding scene. So my goal is to document as much as I can about the
        game&apos;s assets, directories, & editing programs, such as DEdit. It is only after I have
        done as much of this as possible that I will be able to begin modding the game in earnest.
        <br /><br />
        If you want to contribute to this ongoing effort, please feel free to join the
        mod&apos;s <a href='https://discord.gg/7NNeBsE' target='_blank' rel='noreferrer' className='font-bold'>
        Discord server </a>& follow the instructions to download & prepare the game for
        modding! I&apos;d greatly appreciate any assistance!
      </p>
      <div>
        <img 
          src='/wcxyz-njs/img/portfolio/tron-20/icp-regular.png' 
          alt='An ICP Regular, a common enemy type in TRON 2.0'
          className='object-contain'
        />
      </div>
    </div>

    {/* TRON 2.0: Startup Sequence */}
    <h3 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] mt-[3vw] font-extrabold text-outline-h'>
      TRON 2.0: Startup Sequence
    </h3>
    <div className='flex max-md:flex-col md:gap-x-[5vw] justify-between items-center'>
      <p className='mt-0 max-md:mb-[3vw] text-[4vw] md:text-[1.5vw] md:max-w-[50%]'>
        TRON 2.0: Startup Sequence is a simple texture replacement for the opening credits I
        created in 2019. It converts all names to use the Jet Bradley font, and adds credits for
        the <a href='https://www.ldso.net/' target='_blank' rel='noreferrer' className='font-bold'>
        LDSO </a> crew. It&apos;s available to download using the below link, and should play nicely
        with any version of the <a href='https://www.moddb.com/mods/killer-app/downloads/tron-20-killer-app-mod-v11a' target='_blank' rel='noreferrer' className='font-bold'>
        Killer App Mod</a>. A video of the mod&apos;s effect can be seen to the right (or below if
        on mobile).
        <br /><br />
        <FileDownloadLink 
          itemKey='tron-20-startup-sequence.zip' 
          linkText='Download' 
          style='border-2 box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-full'
        />
      </p>
      <iframe 
        src="https://www.youtube-nocookie.com/embed/OX36CGRPngY?si=8vTTjxn0nezz3eCY" 
        title="YouTube video player" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        className='aspect-video border-0 max-md:mb-[25px] h-auto md:h-[33vh] w-full'
      />
    </div>

    {/* TRON 2.0 HQ VGM */}
    <h3 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] mt-[3vw] font-extrabold text-outline-h'>
      TRON 2.0 High Quality Video Game Music
    </h3>
    <p className='mt-0 max-md:mb-[3vw] text-[4vw] md:text-[1.5vw]'>
      TRON 2.0 utilizes a super cool music system (for the time) that allowed Monolith to make
      multiple versions of the same song, and then use a segment system to allow for seamless
      transitioning between low & high music intensities. While impressive, this unfortunately
      meant that the game shipped with all its music broken up into pieces, and giving us no idea
      how exactly to put them back together. I was able to crack the code, though; and I can now
      proudly present to you the ingame music of TRON 2.0 at source quality!
    </p>
    <div className='grid grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(3,15%)] m-auto mt-[3vw] md:mt-[1.5vw]'>
      <div className='flex flex-col items-center'>
        <img 
          src='/wcxyz-njs/img/portfolio/tron-20/hq-music-album.png' 
          alt='TRON 2.0 High Quality Game Music Album Cover'
          className='object-contain'
        />
        <FileDownloadLink 
          itemKey='tron20-hq-game-music.zip' linkText='Download' 
          style='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]'
        />
        <a 
          href='https://www.youtube.com/playlist?list=PLVJSCg8T091e0BNvVSZikF8nzWoeYDxyy' target='_blank' rel='noreferrer'
          className='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]'
          >Playlist</a>
      </div>
    </div>
    
    {/* Footer Meme (Drive C Forever) */}
    <img 
      src='/wcxyz-njs/img/portfolio/tron-20/footer-meme.png' 
      alt='Footer Meme'
      className='mt-[12.5vw] md:mt-[3vw] w-full'
    />
  </>);
}
