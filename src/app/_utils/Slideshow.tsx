// * src/app/_utils/Slideshow.tsx || Slideshow Utility Component

// Switch to Client Mode (React Hooks in use)
'use client';

// Node Module Imports
import { Carousel } from 'react-responsive-carousel';

/**
 * Renders the slideshow component found in the EVERSPACE™ tab of the Portfolio page.
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
          src={`/wcxyz-njs/img/portfolio/everspace/${img}.png`} 
          alt={`ESBuilder Slideshow Slide ${IMAGES.indexOf(img)}`} 
        />
      </div>))}
    </Carousel>
  </div>);
}