import { LANGUAGES, useLang } from '../i18n/LanguageContext.jsx';

export default function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang" role="group" aria-label="Language">
      {LANGUAGES.map((l) => (
        <button key={l.code} type="button" aria-pressed={lang === l.code} aria-label={l.name} onClick={() => setLang(l.code)}>
          {l.short}
        </button>
      ))}
    </div>
  );
}
