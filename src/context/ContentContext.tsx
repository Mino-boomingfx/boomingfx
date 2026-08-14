"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import defaultContent from '@/data/siteContent.json';

export type SiteContentType = typeof defaultContent;

interface ContentContextType {
  content: SiteContentType;
  updateContent: (newContent: SiteContentType) => void;
  saveToCloud: (newContent?: SiteContentType) => Promise<{ success: boolean; message?: string }>;
  resetContent: () => void;
  isCustomized: boolean;
  isSyncing: boolean;
  lastSyncedAt: Date | null;
}

const ContentContext = createContext<ContentContextType>({
  content: defaultContent,
  updateContent: () => {},
  saveToCloud: async () => ({ success: false }),
  resetContent: () => {},
  isCustomized: false,
  isSyncing: false,
  lastSyncedAt: null,
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
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);

  // 1. Initial Load: Check localStorage first for instant display, then sync from Cloud API
  useEffect(() => {
    try {
      const savedV2 = localStorage.getItem(STORAGE_KEY);
      const savedV1 = localStorage.getItem('boomingfx_site_content_v1');
      const saved = savedV2 || savedV1;

      if (saved) {
        const parsed = JSON.parse(saved);
        const migrated = migrateContent(parsed);
        setContent(migrated);
        setIsCustomized(true);
      }
    } catch (e) {
      console.error('Failed to load local site content:', e);
    }

    // Always fetch latest authoritative version from Cloud API (works in incognito, mobile, all devices)
    const fetchCloudContent = async () => {
      try {
        const res = await fetch('/api/content?t=' + Date.now(), { cache: 'no-store' });
        if (res.ok) {
          const cloudData = await res.json();
          if (cloudData && typeof cloudData === 'object') {
            const migrated = migrateContent(cloudData);
            setContent(migrated);
            setIsCustomized(true);
            setLastSyncedAt(new Date());
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
            } catch (err) {}
          }
        }
      } catch (err) {
        console.warn('Cloud content fetch fallback to local:', err);
      }
    };

    fetchCloudContent();
  }, []);

  // 2. Local State Update
  const updateContent = useCallback((newContent: SiteContentType) => {
    const validated = migrateContent(newContent);
    setContent(validated);
    setIsCustomized(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(validated));
    } catch (e) {
      console.error('Failed to save site content locally:', e);
    }
  }, []);

  // 3. Save to Global Cloud (Persists to GitHub repo & in-memory cache for all visitors)
  const saveToCloud = useCallback(async (contentToSave?: SiteContentType) => {
    const payload = contentToSave ? migrateContent(contentToSave) : content;
    setIsSyncing(true);
    try {
      // Save locally first
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setContent(payload);

      // Send to server API
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setIsSyncing(false);
      setLastSyncedAt(new Date());

      if (res.ok && data.success) {
        return { success: true, message: 'Content published globally for all users!' };
      } else {
        return { success: false, message: data.error || 'Sync warning' };
      }
    } catch (err: any) {
      setIsSyncing(false);
      console.error('Failed to sync content to cloud:', err);
      return { success: false, message: err.message || 'Network error' };
    }
  }, [content]);

  const resetContent = useCallback(async () => {
    setContent(defaultContent);
    setIsCustomized(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('boomingfx_site_content_v1');
      await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(defaultContent),
      });
    } catch (e) {
      console.error('Failed to reset content:', e);
    }
  }, []);

  return (
    <ContentContext.Provider value={{ content, updateContent, saveToCloud, resetContent, isCustomized, isSyncing, lastSyncedAt }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(ContentContext);
}
