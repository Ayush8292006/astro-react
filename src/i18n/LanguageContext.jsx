import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations.js';

export const LANGUAGES = [
  { code: 'ta', short: 'த', name: 'தமிழ்' },
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'hi', short: 'हि', name: 'हिन्दी' },
];

const STORAGE_KEY = 'astro-lang';
const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.some((l) => l.code === v) ? v : 'ta';
  } catch {
    return 'ta';
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((code) => {
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => {
      const entry = translations[key];
      if (!entry) {
        if (import.meta.env.DEV) console.warn(`[i18n] missing key: ${key}`);
        return key;
      }
      return entry[lang] ?? entry.ta;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
