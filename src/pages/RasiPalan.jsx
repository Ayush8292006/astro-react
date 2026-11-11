import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHeader from '../components/PageHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { RASIS } from '../data/astro.js';

// [tab label, heading prefix]
const PERIODS = [['today', 'todayS'], ['weekly', 'weekly2'], ['monthly', 'monthly2'], ['yearly', 'yearly']];
const AREAS = ['career', 'money', 'health', 'family'];
const LUCKY = ['luckyNumber', 'luckyColour', 'remedy'];

export default function RasiPalan() {
  const { t } = useLang();
  const [params, setParams] = useSearchParams();
  const initial = Math.min(11, Math.max(0, Number(params.get('rasi')) || 0));
  const [rasi, setRasi] = useState(initial);
  const [period, setPeriod] = useState(0);

  const pickRasi = (i) => {
    setRasi(i);
    setParams({ rasi: String(i) }, { replace: true });
  };

  const rasiName = t(RASIS[rasi]);

  return (
    <>
      <PageHeader title={t('rasiPalan')}>
        <div className="seg seg--night" role="tablist" aria-label={t('period')} style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', margin: '8px 4px 0' }}>
          {PERIODS.map(([k], i) => (
            <button key={k} type="button" role="tab" aria-selected={period === i} onClick={() => setPeriod(i)}>{t(k)}</button>
          ))}
        </div>
      </PageHeader>

      <main className="app-main noscroll" style={{ padding: '16px 16px calc(var(--nav-h) + 26px)' }}>
        <div className="grid-4" role="radiogroup" aria-label={t('selectRasi')} style={{ gap: 8 }}>
          {RASIS.map((k, i) => (
            <button key={k} type="button" role="radio" aria-checked={rasi === i} className="rasi-btn" onClick={() => pickRasi(i)}>
              <b>{String(i + 1).padStart(2, '0')}</b>
              <span>{t(k)}</span>
            </button>
          ))}
        </div>

        <section className="card" style={{ marginTop: 16, overflow: 'hidden' }} aria-labelledby="pal-h">
          <div className="tint-gold" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--ink)' }}>
            <div>
              <h2 id="pal-h" className="h2">{rasiName} – {t(PERIODS[period][1])} {t('predictions2')}</h2>
              <div style={{ fontSize: 12, color: '#4a3f55', marginTop: 2 }}>{t('dateRange')}</div>
            </div>
            <button type="button" className="icon-btn" aria-label={t('share')} style={{ borderRadius: '50%', background: '#fff', color: 'var(--maroon)' }}>
              <Icon name="share" size={20} />
            </button>
          </div>
          <div className="card-pad">
            <div className="eyebrow">{t('sampleText')}</div>
            {/* TODO: load prediction text per rasi + period from the CMS / admin panel */}
            <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.75, color: '#33293f' }}>{t('yourEffortsWillBring')}</p>
            <div className="grid-2" style={{ gap: 8, marginTop: 14 }}>
              {AREAS.map((k) => (
                <div key={k} className="mini"><small>{t(k)}</small><b>{t('prediction')}</b></div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              {LUCKY.map((k) => (
                <div key={k} className="mini mini--dash"><small>{t(k)}</small><b>—</b></div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginTop: 22 }} aria-labelledby="pe-h">
          <h2 id="pe-h" className="h2" style={{ marginBottom: 12 }}>{t('peyarchiPredictionsPdf')}</h2>
          <div className="stack">
            <div className="row-card" style={{ background: 'var(--night)', borderColor: 'var(--night)', color: 'var(--ivory)', padding: 14 }}>
              <span className="row-ic" style={{ border: '1.5px solid var(--gold)', color: 'var(--gold)' }}><Icon name="planet" size={26} stroke={1.6} /></span>
              <div className="row-body">
                <span className="row-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gold-light)' }}>{t('guruPeyarchi2026')}</span>
                <span className="row-sub" style={{ color: 'var(--on-night-2)' }}>{rasiName} {t('completePredictions')}</span>
              </div>
              <Link to="/account" className="btn btn--gold" style={{ height: 38, padding: '0 14px', fontSize: 13 }}>{t('price')}</Link>
            </div>
            {[['saniPeyarchi', 'ezharaiSaniRemedies', 'saturn', 'tint-indigo'], ['rahuKetuPeyarchi', 'forAll12Rasis', 'moon', 'tint-maroon']].map(([title, sub, icon, tint]) => (
              <div key={title} className="row-card" style={{ padding: 14 }}>
                <span className={`row-ic ${tint}`}><Icon name={icon} size={26} stroke={1.6} /></span>
                <div className="row-body">
                  <span className="row-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{t(title)}</span>
                  <span className="row-sub">{t(sub)}</span>
                </div>
                <Link to="/account" className="btn btn--maroon" style={{ height: 38, padding: '0 14px', fontSize: 13 }}>{t('price')}</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </>
  );
}
