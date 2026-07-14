// * src/app/layout.tsx || Root Layout File

// Node Module Imports
import { Metadata } from 'next';
// Local Module Imports
import { lato, montserrat, titillium_web, jet_bradley, xirod } from './_fonts/fonts';
import Footer from '@app/_components/footer';
import Navigation from '@app/_components/navigation';
// Stylesheets
import '@app/global.css'; 

/**
 * Export the default, site-wide metadata set. Includes OpenGraph information for external embeds.
 * Dedicated generation files exist for the site's manifest.json, sitemap.xml, and robots.txt.
 * Automatically used at build time.
 */
export const metadata: Metadata = {
  creator: 'Ethan Guan',
  description:
    'Only the most inconsistent content on the internet. But now it has a central hub.',
  keywords: ['WildCharger', 'WildChargerTV'],
  metadataBase: new URL('https://wildcharger.xyz'),
  openGraph: {
    description:
      'Only the most inconsistent content on the internet. But now it has a central hub.',
    locale: 'en_US',
    siteName: 'WildCharger.xyz',
    title: 'WildCharger.xyz',
    type: 'website',
    url: 'https://wildcharger.xyz',
  },
  title: {
    template: '%s | WildCharger.xyz',
    default: 'WildCharger.xyz',
  },
};

/**
 * Renders the root layout of the website. This is the highest-level component responsible for
 * the website's visible output to the end user.
 * 
 * Things to note:
 *  1. Adding the `Readonly<>` tag to the `children` parameter type is a SonarQube recommendation.
 *     Thus far, this has had no impact on functionality, but if needed, can be removed.
 *  2. Fonts declared using Next.js optimization & added to an `@theme` block in `@app/globals.css`
 *     must be passed into the `<body>` element. This marks them as 'in use' and allows Tailwind to
 *     invoke them on any child element.
 *  3. This website uses a custom gradient background declared in an `@layer components` block in
 *     `@app/globals.css`. This is also passed into the `<body>` element, and necessitates that the
 *     body's height must always match the screen & have zero margins. Changing this is discouraged
 *     and will likely lead to the gradient looking misplaced.
 * @component {@linkcode RootLayout}
 * @requires {@linkcode lato} {@linkcode montserrat} {@linkcode titillium_web} 
 * @requires {@linkcode jet_bradley} {@linkcode xirod}
 * @requires {@linkcode Navigation} {@linkcode Footer}
 * @param {`Readonly<{ children: React.ReactNode }>} children Child nodes provided by the Next.js
 * Router. This parameter is automatically fulfilled at build time.
 * 
 */
export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) : import('react').JSX.Element {
  /** Return the root layout content. */
  return (<html lang='en'>
    <body
      className={`
        ${lato.variable} ${montserrat.variable} ${titillium_web.variable} ${jet_bradley.variable} ${xirod.variable} 
        antialiased site-bg min-h-screen m-0
      `}
    >
      <Navigation />
      {children}
      <Footer />
    </body>
  </html>);
}
