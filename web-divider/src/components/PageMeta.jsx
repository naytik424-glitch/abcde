import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import meta from '../pageMeta.json';

// Sets each page's <title> and meta description for SEO.
export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = meta[pathname] || meta['/'];
    document.title = page.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', page.description);
  }, [pathname]);

  return null;
}
