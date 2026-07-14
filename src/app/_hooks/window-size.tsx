// * src/app/_hooks/window-size.tsx
// ! Currently unused. Try to use Tailwind CSS breakpoints instead

// Node Module Imports
import { useLayoutEffect, useState } from 'react';

/**
 * Portable React hook that returns the current screen size.
 * @returns {{screenX: number, screenY: number}}
 */
export default function useWindowSize() {
  // Local State Values
  const [size, setSize] = useState({
    windowX: 0,
    windowY: 0,
  });

  /** Change the state value depending on the current DOM size. */
  useLayoutEffect(() => {
    const updateSize = () =>
      setSize({
        windowX: window.innerWidth,
        windowY: window.innerHeight,
      });
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  /** Return the current window size. */
  return size;
}
