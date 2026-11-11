# Jothida Darshan – Tamil Astrology Platform (React + Vite)

Mobile-first prototype built from the client requirement document. The UI works in **Tamil (default), English and Hindi**.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Screens / routes

| Route | Screen |
|---|---|
| `/` | Home – banner carousel, quick services, panchangam, rasi row, featured services, peyarchi, articles |
| `/services` | Category directory with tabs, search and view-all |
| `/jathagam` | Life Horoscope – hero, sample chart, what's included, birth-details form with validation |
| `/porutham` | Marriage matching – groom/bride nakshatra → 10 porutham result |
| `/rasi-palan` | Rasi palan (today / weekly / monthly / yearly) + Peyarchi PDFs; supports `?rasi=0..11` |
| `/consult` | Ask an astrologer – category, question, reply mode, nearby astrologers |
| `/account` | OTP / WhatsApp login → reports, notifications, questions |
| `/shop` | **Optional** Sri Diya-style store – delete the route if e-commerce is out of scope |

## Structure

```
src/
  i18n/translations.js     all copy: { key: { ta, en, hi } }
  i18n/LanguageContext.jsx useLang() → { lang, setLang, t }; choice saved in localStorage
  components/              Icon, Mandala, LangSwitcher, PageHeader, BottomNav, SectionHead
  data/astro.js            rasis, nakshatras, poruthams, service directory
  pages/                   one file per screen
  styles.css               design tokens (CSS variables) + component classes
```

### Adding / changing text
Add a key in `translations.js` with all three languages, then use `t('yourKey')`.

## Placeholders – confirm with client
- Brand name (`jothidaDarshan`), all `₹[Price]`, `[Event date]`, astrologer names, user name
- Panchangam values (`—`), rasi palan text, porutham scoring – currently **sample only**

## Backend hooks (search for `TODO`)
- Astrology API: jathagam calculation, porutham, panchangam
- Geocoding of birth place → latitude / longitude / timezone
- OTP / WhatsApp auth, payments, PDF generation & download
- CMS / admin panel for banners, predictions, articles, prices
- Cart & checkout (only if the shop module stays)
