// * src/app/portfolio/page.tsx || Portfolio Page & Index Tab

/**
 * Renders the Index tab of the Portfolio route.
 * @component {@linkcode Page}
 * @kind Portfolio Page - Index Tab
 */
export default function Page() : import('react').JSX.Element {
  /** Return the page content. */
  return (<>
    <h2 className='text-[10vw] md:text-[3.5vw] mb-[3vw] md:mb-[1.5vw] font-extrabold text-outline-h max-md:text-center'>
      Portfolio
    </h2>
    <p className='mt-0 text-[4vw] md:text-[1.5vw]'>
      Here you can find a rough culmination of my previous, active, & upcoming publicly announced
      projects. Use the tabs shown above to switch between available categories. My focus has
      historically been on video gaming; so I figured it would be easiest to sort the tabs
      themselves by their game of focus, with one tab reserved to describe my journey as a content
      creator.
      <br /><br />
      Note that in all tabs (except this one), <b>bold text indicates a link</b>!
      <br /><br />
      This page will be updated as my projects progress, so feel free to check back every so often!
    </p>
  </>);
}
