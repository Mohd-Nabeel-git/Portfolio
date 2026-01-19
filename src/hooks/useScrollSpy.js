'use client';

import { useEffect, useState } from 'react';

/**
 * Hook that tracks which section is currently visible in the viewport.
 * Returns the ID of the active section for scroll-spy navigation highlighting.
 * @param {string[]} sectionIds - Array of section IDs to track
 * @returns {string} - The ID of the currently active section
 */
export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for fixed navbar height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (!element) continue;

        if (scrollPosition >= element.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
