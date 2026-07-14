// * src/app/portfolio/everspace/page.tsx || Portfolio Page & EVERSPACE™ Tab

// Local Module Imports
import ESBuilderSlideshow from 'app/_utils/Slideshow';

/**
 * Renders the EVERSPACE™ tab of the Portfolio route.
 * @component {@linkcode Page}
 * @kind Portfolio Page - EVERSPACE™ Tab
 */
export default function Page() : import('react').JSX.Element {
  /** Return the page content. */
  return (<>
    {/* Page Header */}
    <div className='h-fit'>
      <img 
        src='/wcxyz-njs/img/portfolio/everspace/es1-logo.png' 
        alt='EVERSPACE™ Logo'
        className='m-[-1%] mb-[2vw] max-w-full md:max-w-[35%]'
      />
    </div>

    {/* Introductory Paragraph */}
    <div className='flex max-md:flex-col md:gap-x-[5vw] justify-between items-center'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw] md:max-w-[67%]'>
        Following the bankruptcy & sale of FISHLABS GmbH to Deep Silver, its co-founders, alongside
        the original dev team of Galaxy on Fire, left the company to 
        form <a href='https://rockfishgames.com/' target='_blank' rel='noreferrer' className='font-bold'>
        ROCKFISH Games</a>. A few years later, they came out
        with <a href='https://classic.everspace-game.com/' target='_blank' rel='noreferrer' className='font-bold'>
        EVERSPACE™</a>, the spiritual successor to the Galaxy on Fire series. I immediately bought
        it, and proceeded to enjoy it very much, just as I had done with the Galaxy on Fire titles
        many years prior. Although I maintain the opinion that the more stylized, less realistic
        artstyle of Galaxy on Fire has its continued merits, when I compare this to the dumpster
        fire that was Galaxy on Fire 3: Manticore, there simply is no competition.
      </p>
      <div>
        <img 
          src='/wcxyz-njs/img/portfolio/everspace/interceptor.png' 
          alt='Colonial Interceptor, one of the ships in EVERSPACE™'
          className='object-contain'
        />
      </div>
    </div>

    {/* EVERSPACE™ Builder */}
    <h3 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] mt-[3vw] font-extrabold text-outline-h'>
      EVERSPACE™ Builder (ESBuilder)
    </h3>
    <div className='flex flex-row-reverse max-md:flex-col md:gap-x-[2vw] justify-between items-center'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw] md:max-w-[62.5%]'>
        <a href='https://esbuilder.wildcharger.xyz/' target='_blank' rel='noreferrer' className='font-bold'>
        EVERSPACE™ Builder</a> (or ESBuilder for short) is a companion tool that allows users to
        create, save, & share in-game EVERSPACE™ loadouts with others. It was originally intended
        to be my final project for a software engineering course; however, following some private
        shared testing, I now consider ESBuilder to stand on its own as a project worthy of 
        continued development. 
        <br /><br />
        I consider myself very lucky to have received the blessing of ROCKFISH Games to continue
        work on this endeavor. Whether you want to record a build you achieved in a run, create a
        build that you&apos;d like to use in a future run, or want to make builds to share with new
        pilots, I invite any and all to give ESBuilder a try.
        <br /><br />
        <a 
          href='https://esbuilder.wildcharger.xyz/' target='_blank' rel='noreferrer' 
          className='font-bold mt-[0.75vw] px-0 py-[0.5vw] text-center  w-full'
        >Click or tap here to participate in the ESBuilder Beta!
        </a>
      </p>
      <ESBuilderSlideshow />
    </div>
  </>);
}
