import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Mandala from '../components/Mandala.jsx';
import PageHeader from '../components/PageHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { NAKSHATRAS, PORUTHAMS, RASIS } from '../data/astro.js';

// Placeholder scoring so the UI can be reviewed. Replace with the astrology API response.
function sampleResult(g, b) {
  return PORUTHAMS.map((key, i) => ({ key, ok: (g * 7 + b * 3 + i * 5) % 10 < 7 }));
}

function PersonCard({ id, titleKey, tint, nameKey, star, onStar }) {
  const { t } = useLang();
  return (
    <section className="card card-pad" aria-labelledby={`${id}-h`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <span className={tint} style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="user" size={20} /></span>
        <h2 id={`${id}-h`} className="h2" style={{ fontSize: 16 }}>{t(titleKey)}</h2>
      </div>
      <div className="field">
        <label htmlFor={`${id}-name`}>{t('name')}</label>
        <input id={`${id}-name`} className="input" placeholder={t(nameKey)} style={{ height: 46 }} />
      </div>
      <div className="grid-2" style={{ gap: 10, marginTop: 12 }}>
        <div className="field">
          <label htmlFor={`${id}-star`}>{t('nakshatra')}</label>
          <select id={`${id}-star`} className="input" value={star} onChange={(e) => onStar(Number(e.target.value))} style={{ height: 46, padding: '0 8px', fontSize: 14 }}>
            {NAKSHATRAS.map((k, i) => <option key={k} value={i}>{t(k)}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${id}-rasi`}>{t('rasi')}</label>
          <select id={`${id}-rasi`} className="input" style={{ height: 46, padding: '0 8px', fontSize: 14 }}>
            {RASIS.map((k) => <option key={k}>{t(k)}</option>)}
          </select>
        </div>
      </div>
    </section>
  );
}

export default function Porutham() {
  const { t } = useLang();
  const [g, setG] = useState(0);
  const [b, setB] = useState(3);
  const [show, setShow] = useState(false);

  const results = useMemo(() => sampleResult(g, b), [g, b]);
  const score = results.filter((r) => r.ok).length;
  const verdict = score >= 7 ? 'excellentMatch' : score >= 5 ? 'averageMatch' : 'lowMatch';

  return (
    <>
      <PageHeader variant="maroon" title={t('marriageMatching')} subtitle={t('checkAll10Poruthams')}>
        <Mandala size={200} style={{ position: 'absolute', right: -50, top: -50, pointerEvents: 'none' }} />
      </PageHeader>

      <main className="app-main noscroll" style={{ padding: '16px 16px calc(var(--nav-h) + 26px)' }}>
        {!show ? (
          <div className="stack" style={{ gap: 12 }}>
            <PersonCard id="g" titleKey="groomDetails" tint="tint-indigo" nameKey="groomSName" star={g} onStar={setG} />
            <div className="vs" aria-hidden="true"><span><Icon name="rings" /></span></div>
            <PersonCard id="b" titleKey="brideDetails" tint="tint-maroon" nameKey="brideSName" star={b} onStar={setB} />
            <div className="muted" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, padding: '0 4px' }}>
              <Icon name="info" size={16} />{t('addBirthDateTime')}
            </div>
            <button type="button" className="btn btn--cta" onClick={() => setShow(true)}>{t('checkMatching')}</button>
          </div>
        ) : (
          <div className="stack" style={{ gap: 14 }}>
            <section className="score">
              <div className="score-ring"><b>{score}</b><span>/ 10</span></div>
              <div>
                <span className="tag">{t('sampleResult')}</span>
                <div className="verdict">{t(verdict)}</div>
                <div style={{ fontSize: 12, color: 'var(--on-night-2)', marginTop: 4 }}>{t(NAKSHATRAS[g])} × {t(NAKSHATRAS[b])}</div>
              </div>
            </section>

            <section className="card" style={{ padding: '6px 16px' }} aria-labelledby="ten-h">
              <h2 id="ten-h" className="h2" style={{ fontSize: 16, margin: '12px 0 6px' }}>{t('n10Poruthams')}</h2>
              {results.map((r) => (
                <div key={r.key} className="prow">
                  <span>{t(r.key)}</span>
                  {r.ok ? (
                    <span className="status status--ok"><Icon name="check" size={14} stroke={2.6} />{t('yes')}</span>
                  ) : (
                    <span className="status status--no"><Icon name="x" size={14} stroke={2.6} />{t('no')}</span>
                  )}
                </div>
              ))}
            </section>

            <Link to="/consult" className="btn btn--maroon btn--block">{t('askAnAstrologerIn')}</Link>
            <button type="button" className="btn btn--outline btn--block" style={{ height: 44 }} onClick={() => setShow(false)}>{t('checkAgain')}</button>
            <p className="muted" style={{ margin: 0, fontSize: 11, textAlign: 'center' }}>{t('finalResultsWillBe')}</p>
          </div>
        )}
      </main>
      <BottomNav activeOverride="/services" />
    </>
  );
}
