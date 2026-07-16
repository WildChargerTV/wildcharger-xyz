// * src/app/_utils/Slideshow.tsx || Slideshow Utility Component
// ? Although only one slideshow is currently in use, this component is meant to serve as the
// ? universal manager of all slideshows going forward.

// Switch to Client Mode (React Hooks in use)
'use client';

// Node Module Imports
import { Carousel } from 'react-responsive-carousel';

/**
 * ### EVERSPACE™ Builder Slideshow Utility Component
 * Client component which renders the slideshow found in the EVERSPACE™ tab of the Portfolio page.
 * @component {@linkcode ESBuilderSlideShow} 
 */
export default function ESBuilderSlideshow() : import('react').JSX.Element {
  /** Declare the names of each image file in a string. */
  const IMAGES = ['esbuilder-slide-1', 'esbuilder-slide-2', 'esbuilder-slide-3'];

  /** Return the component content. */
  return (<div className='w-full'>
    <Carousel showThumbs={false} autoPlay infiniteLoop interval={10000}>
      {IMAGES.map((img) => (<div key={crypto.randomUUID()}>
        <img 
          src={`/img/portfolio/everspace/${img}.png`} 
          alt={`ESBuilder Slideshow Slide ${IMAGES.indexOf(img)}`} 
        />
      </div>))}
    </Carousel>
  </div>);
}
