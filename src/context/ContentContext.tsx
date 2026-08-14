"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultContent from '@/data/siteContent.json';

export type SiteContentType = typeof defaultContent;

interface ContentContextType {
  content: SiteContentType;
  updateContent: (newContent: SiteContentType) => void;
  resetContent: () => void;
  isCustomized: boolean;
}

const ContentContext = createContext<ContentContextType>({
  content: defaultContent,
  updateContent: () => {},
  resetContent: () => {},
  isCustomized: false,
});

export const STORAGE_KEY = 'boomingfx_site_content_v2';

function deepMerge(target: any, source: any): any {
  if (!source || typeof source !== 'object') return target;
  if (!target || typeof target !== 'object') return source;

  const result = Array.isArray(target) ? [...target] : { ...target };

  for (const key of Object.keys(source)) {
    if (source[key] === null || source[key] === undefined) continue;

    if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

function migrateContent(raw: any): SiteContentType {
  if (!raw || typeof raw !== 'object') {
    return defaultContent;
  }

  // Deep merge default content with existing saved content
  let merged = deepMerge(defaultContent, raw);

  // If old schema only had root `hero` and no `home.hero`, migrate it
  if (!merged.home || !merged.home.hero) {
    merged.home = {
      hero: raw.hero || defaultContent.home.hero,
      bento: raw.bento || defaultContent.home.bento,
      cta: raw.cta || defaultContent.home.cta
    };
  }

  // Ensure root hero is always synced with home.hero for backward compatibility
  merged.hero = merged.home.hero;

  return merged;
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContentType>(defaultContent);
  const [isCustomized, setIsCustomized] = useState(false);

  useEffect(() => {
    try {
      // Check v2 key first, then fallback to v1 for backward compatibility
      const savedV2 = localStorage.getItem(STORAGE_KEY);
      const savedV1 = localStorage.getItem('boomingfx_site_content_v1');
      const saved = savedV2 || savedV1;

      if (saved) {
        const parsed = JSON.parse(saved);
        const migrated = migrateContent(parsed);
        setContent(migrated);
        setIsCustomized(true);
        // Resave to v2 key
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      }
    } catch (e) {
      console.error('Failed to load local site content:', e);
      setContent(defaultContent);
    }
  }, []);

  const updateContent = (newContent: SiteContentType) => {
    const validated = migrateContent(newContent);
    setContent(validated);
    setIsCustomized(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(validated));
    } catch (e) {
      console.error('Failed to save site content locally:', e);
    }
  };

  const resetContent = () => {
    setContent(defaultContent);
    setIsCustomized(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('boomingfx_site_content_v1');
    } catch (e) {
      console.error('Failed to reset content:', e);
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, isCustomized }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(ContentContext);
}
