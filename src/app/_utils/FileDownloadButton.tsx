// * src/app/_utils/FileDownloadButton.tsx || File Download Button Utility Component

// Switch to Client Mode (React Event Handlers in use)
'use client';

// Local Module Imports
import { fileData } from '@app/_data';

/**
 * Client component which renders a button that will invoke a file download without needing to
 * leave the website. The `itemKey` must be the **exact** name of the file to download.
 * @component {@linkcode FileDownloadButton}
 * @requires {@linkcode fileData}
 * @returns `<button className={style}>{linkText}</button>`
 */
export default function FileDownloadButton({ itemKey, linkText, style } : 
  Readonly<{ itemKey: string, linkText: string, style: string }>
) : import('react').JSX.Element {
  /** Invoke the respective direct download link based on the provided itemKey. */
  const onClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    window.location.href = fileData[itemKey];
  };

  /** Return the button. */
  return <button className={style} onClick={onClick}>{linkText}</button>;
}
