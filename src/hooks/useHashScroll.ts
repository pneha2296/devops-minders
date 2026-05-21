import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to the section
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // No hash → scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);
}