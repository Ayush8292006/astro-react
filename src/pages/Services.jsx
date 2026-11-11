import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Mandala from '../components/Mandala.jsx';
import PageHeader from '../components/PageHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { SERVICE_SECTIONS } from '../data/astro.js';

const TABS = [['all', 'all'], ['astro', 'astrology'], ['cal', 'calendar'], ['palan', 'predictions'], ['spirit', 'spiritual'], ['biz', 'business']];
const PREVIEW = 8;

export default function Services() {
  const { t } = useLang();
  const [tab, setTab] = useState('all');
  const [open, setOpen] = useState({});
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICE_SECTIONS
      .filter((s) => tab === 'all' || tab === s.id)
      .map((s) => ({ ...s, items: q ? s.items.filter(([k]) => t(k).toLowerCase().includes(q)) : s.items }))
      .filter((s) => s.items.length > 0);
  }, [tab, query, t]);

  return (
    <>
      <PageHeader title={t('allServices')}>
        <label htmlFor="svc-search" className="sr-only">{t('searchServices')}</label>
        <div className="search" style={{ margin: '6px 4px 0', height: 44 }}>
          <Icon name="search" size={20} />
          <input id="svc-search" type="search" placeholder={t('searchServices2')} value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </PageHeader>

      <div className="chips noscroll" role="tablist" aria-label={t('categories')} style={{ borderBottom: '1px solid var(--line)', flexShrink: 0 }}>
        {TABS.map(([id, key]) => (
          <button key={id} type="button" role="tab" className="chip" aria-selected={tab === id} onClick={() => setTab(id)}>
            {t(key)}
          </button>
        ))}
      </div>

      <main className="app-main noscroll" style={{ padding: '16px 16px calc(var(--nav-h) + 26px)' }}>
        <Link to="/jathagam" className="fcard--maroon" style={{ display: 'flex', alignItems: 'center', gap: 14, borderRadius: 20, padding: '16px 18px', textDecoration: 'none', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <Mandala size={150} style={{ position: 'absolute', right: -40, top: -30 }} />
          <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
            <div className="eyebrow" style={{ color: 'var(--gold-light)' }}>{t('thisWeekSOffer')}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, lineHeight: 1.35, marginTop: 4 }}>{t('lifeHoroscopeMarriageMatching')}</div>
            <div style={{ fontSize: 13, color: 'var(--tint-maroon)', marginTop: 4 }}>{t('bothTogetherForJust')}</div>
          </div>
          <span className="btn" style={{ position: 'relative', background: 'var(--gold-light)', color: 'var(--maroon-dark)', height: 38 }}>{t('getIt')}</span>
        </Link>

        {sections.map((s) => {
          const expanded = open[s.id] || tab === s.id || query;
          const list = expanded ? s.items : s.items.slice(0, PREVIEW);
          const hasMore = s.items.length > PREVIEW && tab === 'all' && !query;
          return (
            <section key={s.id} style={{ marginTop: 22 }} aria-labelledby={`sec-${s.id}`}>
              <div className="sec-head">
                <h2 id={`sec-${s.id}`} className="h2 bar-title">{t(s.title)}</h2>
                {hasMore && (
                  <button type="button" className="sec-link" onClick={() => setOpen({ ...open, [s.id]: !open[s.id] })}>
                    {open[s.id] ? t('showLess') : `${t('viewAll2')}${s.items.length})`}
                  </button>
                )}
              </div>
              <div className="grid-4" style={{ gap: 10 }}>
                {list.map(([key, icon, to]) => (
                  <Link key={key} to={to} className="stile">
                    <span className={`stile-ic tint-${s.tone}`}><Icon name={icon} size={22} stroke={1.7} /></span>
                    <span className="stile-label">{t(key)}</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <BottomNav />
    </>
  );
}
