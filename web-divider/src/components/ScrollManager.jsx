import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// When the page changes, start at the top (or at #section if the link has one).
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // in-page links like #contact are handled by the browser
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
