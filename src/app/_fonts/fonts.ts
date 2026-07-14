// * src/app/_fonts/fonts.ts || Font Declaration File
// Next.js font optimization setup. Import at the component level as needed.

// Node Module Imports
import { Lato, Montserrat, Titillium_Web } from "next/font/google";
import localFont from "next/font/local";

// Declare all applicable Google fonts.
export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const titillium_web = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

// Declare the local Jet Bradley font.
export const jet_bradley = localFont({
  src: "./JetBradley.woff",
  variable: "--font-jet-bradley",
});

// Declare the local Xirod font.
export const xirod = localFont({
  src: "./Xirod.woff",
  variable: "--font-xirod",
});
