// * src/app/_utils/FileDownloadLink.tsx || File Download Link Utility Component

// Switch to Client Mode (React Hooks in use)
'use client';

// Node Module Imports
import { useParams } from 'next/navigation';
// Local Module Imports
import { fileData } from '@app/_data';

/**
 * Renders a link that will invoke a file download without needing to leave the website.
 * TODO complete documentation in this file, i'm kinda just assuming it works rn
 * @component {@linkcode FileDownloadLink}
 * @requires {@linkcode fileData}
 * @param {string} itemKey Name of the file to download.
 * @param {string} linkText Text that the link will display on return.
 * @param {CSSProperties} style Tailwind-formatted `className` string to pass into the link.
 */
export default function FileDownloadLink({ itemKey, linkText, style }) : import('react').JSX.Element {
  // React Hooks
  const params = useParams<{ tag: string; item: string }>();

  /** If no itemKey was specified, pull it from the URL parameters. */
  if(!itemKey) itemKey = params.item;

  /**  */
  const onClick = (event) => {
    event.stopPropagation();
    window.open(`/files/${itemKey}`);
  };

  if(linkText)
    return <button className={style} onClick={onClick}>{linkText}</button>;
  else
    window.location.href = fileData[itemKey];
}