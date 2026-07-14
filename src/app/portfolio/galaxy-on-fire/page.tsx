// * src/app/portfolio/galaxy-on-fire/page.tsx || Portfolio Page & Galaxy on Fire Tab

// Local Module Imports
import FileDownloadLink from '@app/_utils/FileDownloadLink';

/**
 * Renders the Galaxy on Fire tab of the Portfolio route.
 * @component {@linkcode Page}
 * @kind Portfolio Page - Galaxy on Fire Tab
 * @requires {@linkcode FileDownloadLink}
 */
export default function Page() : import('react').JSX.Element {
  /** Return the page content. */
  return (<>
    {/* Page Header */}
    <h2 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] font-xirod text-outline-h max-md:text-center'>
      GALAXY ON FIRE
    </h2>

    {/* Introductory Paragraph */}
    <div className='flex max-md:flex-col md:gap-x-[5vw] justify-between max-md:items-center'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw] md:max-w-[50%]'>
        I could not name one single franchise that has had a bigger impact on my life than the
        Galaxy on Fire series. I wasn&apos;t around for its Java phases, but ever since the first
        time I played the iOS release of Galaxy on Fire 3D on my parents&apos; first-generation
        iPad, I gained way more interest in space & science fiction as a whole.
      </p>
      <div>
        <img 
          src='/wcxyz-njs/img/portfolio/galaxy-on-fire/nemesis.png' 
          alt='Nemesis, a Deep Science ship featured in the Valkyrie DLC of Galaxy on Fire 2'
          className='object-contain'
        />
      </div>
    </div>

    {/* The Galaxy on Fire Wiki & Kaamo Club */}
    <h3 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] mt-[3vw] font-extrabold text-outline-h'>
      The Galaxy on Fire Wiki & Kaamo Club
    </h3>
    <div className='flex flex-row-reverse max-md:flex-col md:gap-x-[5vw] justify-between max-md:items-center'>
      <p className='mt-0 text-[4vw] md:text-[1.5vw]'>
        My largest contribution to this community would be my time as the administrator of
        the <a href='https://galaxyonfire.wiki.gg/' target='_blank' rel='noreferrer' className='font-bold'>Galaxy on Fire
        Wiki</a>. I joined the community in November of 2013 under the username
        of <a href='https://galaxyonfire.wiki.gg/wiki/User:NiveliKing' target='_blank' rel='noreferrer' className='font-bold'>
        NiveliKing</a>, and was nominated for the position mere months later in February of 2014.
        Since then, I&apos;ve completed major undertakings, including the documentation of every
        planet in the GoF3D galaxy & porting the entirety of the Codex from GoF3: Manticore,
        alongside over 4,500+ other edits & contributions.
        <br /><br />
        When we announced the Wiki had entered end-of-support in July of 2020, I, as well as what
        little was left of the Galaxy on Fire community at the time, moved over to
        the <a href='https://kaamo.club/' target='_blank' rel='noreferrer' className='font-bold'>Kaamo Club</a>, which
        now serves as a hub for all things Galaxy on Fire outside of the wiki. Since then,
        we&apos;ve grown to become over 3,000 members strong. Please feel free to join us by
        clicking on the bold link above or joining via the widget to the left (or below on mobile).
        We&apos;d love your patronage!
      </p>
      <div className='grid min-w-[15vw] grid-rows-[25%_75%] max-md:mt-[3vw]'>
        <img 
          src='/wcxyz-njs/img/portfolio/galaxy-on-fire/wiki-logo.png' 
          alt='Logo of the Galaxy on Fire Wiki'
          className='object-contain w-full h-full'
        />
        <iframe
          title='kaamo-club-embed'
          src='https://discord.com/widget?id=226528541368385536&theme=dark'  
          sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          className='w-full h-full'
        />
      </div>
    </div>

    {/* Galaxy on Fire Soundtracks */}
    <h3 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] mt-[3vw] font-extrabold text-outline-h'>
      Galaxy on Fire Soundtracks
    </h3>
    <p className='mt-0 text-[4vw] md:text-[1.5vw]'>
      A long time ago, the website of FISHLABS (the developers behind Galaxy on Fire) hosted direct
      downloads of album releases for the first two Galaxy on Fire games. I was able to snag these
      files before they were removed from the site, and now host them here on my own, with an
      additional third album featuring loopable versions of the tracks from Galaxy on Fire 2! Feel
      free to use the below links to download them. (Just don&apos;t let Mkkt Bkkt know
      they&apos;re here... got it?)
    </p>
    <div className='grid grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(3,15%)] m-auto mt-[3vw] md:mt-[1.5vw]'>
      {/* GoF3D Album */}
      <div className='flex flex-col items-center'>
        <img 
          src='/wcxyz-njs/img/portfolio/galaxy-on-fire/gof3d-album.png' 
          alt='Galaxy on Fire 3D Soundtrack Album Cover'
          className='object-contain w-[90%]'
        />
        <FileDownloadLink 
          itemKey='gof3d-official-soundtrack.zip' linkText='Download' 
          style='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]' 
        />
        <a 
          href='https://www.youtube.com/watch?v=eneWtnXU_Rg' target='_blank' rel='noreferrer'
          className='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]'
        >Video</a>
        <a 
          href='https://www.youtube.com/playlist?list=PLVJSCg8T091cLDPH7o7AHK5HYIvqtc6Qr' target='_blank' rel='noreferrer'
          className='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]'
        >Playlist</a>
      </div>

      {/* GoF2 Soundtrack Album */}
      <div className='flex flex-col items-center'>
        <img 
          src='/wcxyz-njs/img/portfolio/galaxy-on-fire/gof2-album-1.png' 
          alt='Galaxy on Fire 2 Soundtrack Album Cover'
          className='object-contain w-[90%]'
        />
        <FileDownloadLink 
          itemKey='gof2-official-soundtrack.zip' linkText='Download' 
          style='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]' 
        />
        <a 
          href='https://www.youtube.com/watch?v=joiw2CTcZQQ' target='_blank' rel='noreferrer'
          className='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]'
        >Video</a>
        <a 
          href='https://www.youtube.com/playlist?list=PLVJSCg8T091cgzTeEzK6INit2AkDImksP' target='_blank' rel='noreferrer'
          className='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]'
        >Playlist</a>
      </div>

      {/* GoF2 Game Music Album */}
      <div className='flex flex-col items-center'>
        <img 
          src='/wcxyz-njs/img/portfolio/galaxy-on-fire/gof2-album-2.png' 
          alt='Galaxy on Fire 2 Game Music Album Cover'
          className='object-contain w-[90%]'
        />
        <FileDownloadLink
          itemKey='gof2-game-music.zip' linkText='Download' 
          style='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]' 
        />
        <a 
          href='https://www.youtube.com/watch?v=pK-CrpAc5Wo' target='_blank' rel='noreferrer'
          className='border box-border text-[3.25vw] md:text-[1.25vw] font-semibold mt-[0.75vw] px-0 py-[0.5vw] text-center uppercase w-[90%]'
        >Video</a>
      </div>
    </div>
  </>);
}
