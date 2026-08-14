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

export const STORAGE_KEY = 'boomingfx_site_content_v1';

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContentType>(defaultContent);
  const [isCustomized, setIsCustomized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setContent(parsed);
        setIsCustomized(true);
      }
    } catch (e) {
      console.error('Failed to load local site content:', e);
    }
  }, []);

  const updateContent = (newContent: SiteContentType) => {
    setContent(newContent);
    setIsCustomized(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    } catch (e) {
      console.error('Failed to save site content locally:', e);
    }
  };

  const resetContent = () => {
    setContent(defaultContent);
    setIsCustomized(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
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
