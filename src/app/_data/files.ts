// * src/data/files.ts || Files Datafile

// Local Module Imports
import FileDownloadButton from '@app/_utils/FileDownloadButton';

/**
 * Object of filenames & their direct download links. Files are all taken from the WildCharger CDN
 * and served directly in the page without the user ever needing to leave the site.
 * @example {"[file.zip]": "https://cdn.wildcharger.xyz/[file-path]"}
 * @see {@linkcode FileDownloadButton}
 */
const fileData : {[index: string]:string} = {
  "gof3d-official-soundtrack.zip":
    "https://cdn.wildcharger.xyz/wildcharger-xyz/gof/gof3d-official-soundtrack.zip",
  "gof2-official-soundtrack.zip":
    "https://cdn.wildcharger.xyz/wildcharger-xyz/gof/gof2-official-soundtrack.zip",
  "gof2-game-music.zip":
    "https://cdn.wildcharger.xyz/wildcharger-xyz/gof/gof2-game-music.zip",
  "tron-20-startup-sequence.zip":
    "https://cdn.wildcharger.xyz/wildcharger-xyz/tron-20/tron-20-startup-sequence.zip",
  "tron20-hq-game-music.zip":
    "https://cdn.wildcharger.xyz/wildcharger-xyz/tron-20/tron20-hq-game-music.zip",
};

/** Export the file data. */
export default fileData;
