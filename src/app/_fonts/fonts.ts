// * src/app/_fonts/fonts.ts || Font Declaration File
// ? Next.js font optimization setup. All fonts are invoked in the <body>.
// ? Default font is Montserrat. Apply at the component level as needed.

// Node Module Imports
import { Lato, Montserrat, Titillium_Web } from 'next/font/google';
import localFont from 'next/font/local';

/**
 * ### Lato: Google Font
 * - Available Weights: `thin`, `light`, `normal`, `bold`, `black`
 * - Command: `font-lato`
 */
export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

/**
 * ### Montserrat: Google Font
 * - **Default Site Font**
 * - Available Weights: All
 * - Command: `font-montserrat`
 */
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

/**
 * ### Titillium Web: Google Font
 * !! **Currently Unused - Intended for EVERSPACE™ Tab on the Portfolio Page** !!
 * - Available Weights: `extralight`, `light`, `normal`, `semibold`, `bold`, `black`
 * - Command: `font-titillium-web`
 */
export const titillium_web = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  variable: '--font-titillium-web',
});

/**
 * ### Jet Bradley: Local Font
 * - Available Weights: `normal`
 * - Command: `font-jet-bradley`
 */
export const jet_bradley = localFont({
  src: './JetBradley.woff',
  variable: '--font-jet-bradley',
});

/**
 * ### Xirod: Local Font
 * - Available Weights: `normal`
 * - Command: `font-xirod`
 */
export const xirod = localFont({
  src: './Xirod.woff',
  variable: '--font-xirod',
});
