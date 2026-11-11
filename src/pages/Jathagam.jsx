import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Mandala from '../components/Mandala.jsx';
import LangSwitcher from '../components/LangSwitcher.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

// South-Indian chart: 12 outer houses; the centre 2×2 is the label.
// Sample placements only — real chart comes from the astrology API.
const CHART = ['ju', '', 'ra', '', 'asc', 'CENTER', 'su', '', 'me', 'ke', '', 'mo', 'ma'];

const INCLUDES = ['rasiLagnamNavamsaCharts', 'dasaBhuktiTimeline', 'planetPositionsBhavas', 'sevvaiNagaDoshaCheck', 'educationCareerMarriagePredictions', 'remediesPdfDownload'];

const EMPTY = { name: '', gender: 'm', date: '', time: '', place: '', reportLang: 'ta' };

export default function Jathagam() {
  const { t } = useLang();
  const [form, setForm] = useState(EMPTY);
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const bad = (k) => tried && !String(form[k]).trim();

  const submit = (e) => {
    e.preventDefault();
    const ok = ['name', 'date', 'time', 'place'].every((k) => String(form[k]).trim());
    if (!ok) return setTried(true);
    // TODO: POST birth details to the astrology API (geocode place → lat/long/timezone first).
    setDone(true);
  };

  return (
    <>
      <main className="app-main noscroll">
        <section className="jhero">
          <Mandala size={360} opacity={0.6} className="jhero-mandala" />
          <div className="hdr-row">
            <Link to="/" className="icon-btn" aria-label={t('back')} style={{ marginLeft: -8, marginRight: 'auto' }}><Icon name="back" stroke={2} /></Link>
            <LangSwitcher />
            <Link to="/account" className="pill-link" style={{ marginLeft: 8 }}>{t('myReports')}</Link>
          </div>
          <div style={{ position: 'relative', textAlign: 'center', marginTop: 6 }}>
            <svg width="120" height="110" viewBox="0 0 120 110" fill="none" stroke="#D9A441" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
              <path d="M60 4v8" /><path d="M50 26h20l-3-12H53z" /><path d="M42 40h36l-5-14H47z" /><path d="M34 56h52l-6-16H40z" /><path d="M26 74h68l-7-18H33z" /><path d="M14 106h92" /><path d="M20 106V74h80v32" /><path d="M50 106V88a10 10 0 0 1 20 0v18" /><path d="M32 86h8M80 86h8" />
            </svg>
            <h1>{t('lifeHoroscope')}</h1>
            <p>{t('aCompleteHoroscopeFrom')}</p>
          </div>
        </section>

        <section className="card sample-card">
          <div className="chart" role="img" aria-label={t('sampleRasiChart')}>
            {CHART.map((c, i) => (c === 'CENTER' ? <div key={i} className="chart-c">{t('rasi')}</div> : <div key={i}>{c ? t(c) : ''}</div>))}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="eyebrow">{t('sampleJathagam')}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, lineHeight: 1.4, marginTop: 2 }}>{t('thisIsHowYour')}</div>
            <Link to="/account" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
              <Icon name="download" size={16} stroke={2} />{t('viewSamplePdf')}
            </Link>
          </div>
        </section>

        <section className="sec" aria-labelledby="inc-h">
          <h2 id="inc-h" className="h2" style={{ marginBottom: 12 }}>{t('whatSInsideThis')}</h2>
          <div className="grid-2" style={{ gap: 10 }}>
            {INCLUDES.map((k) => (
              <div key={k} className="incl"><Icon name="check" size={18} stroke={2.2} />{t(k)}</div>
            ))}
          </div>
        </section>

        <section className="card" style={{ margin: '22px 16px 0', padding: '18px 16px' }} aria-labelledby="form-h">
          {!done ? (
            <form onSubmit={submit} noValidate>
              <h2 id="form-h" className="h2">{t('birthDetails')}</h2>
              <p className="muted" style={{ margin: '4px 0 16px', fontSize: 12 }}>{t('yourDetailsAreKept')}</p>

              <div className="stack" style={{ gap: 14 }}>
                <div className="field">
                  <label htmlFor="j-name">{t('name')} <span className="req">*</span></label>
                  <input id="j-name" className={`input ${bad('name') ? 'invalid' : ''}`} value={form.name} onChange={set('name')} placeholder={t('fullName')} autoComplete="name" />
                  {bad('name') && <div className="err">{t('pleaseEnterAName')}</div>}
                </div>

                <div className="field">
                  <span className="label" id="j-gender">{t('gender')}</span>
                  <div className="seg" role="radiogroup" aria-labelledby="j-gender" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
                    {[['m', 'male'], ['f', 'female']].map(([v, k]) => (
                      <button key={v} type="button" role="radio" aria-checked={form.gender === v} onClick={() => setForm({ ...form, gender: v })}>{t(k)}</button>
                    ))}
                  </div>
                </div>

                <div className="grid-2" style={{ gap: 10 }}>
                  <div className="field">
                    <label htmlFor="j-date">{t('dateOfBirth')} <span className="req">*</span></label>
                    <input id="j-date" type="date" className={`input ${bad('date') ? 'invalid' : ''}`} value={form.date} onChange={set('date')} style={{ padding: '0 10px', fontSize: 14 }} />
                  </div>
                  <div className="field">
                    <label htmlFor="j-time">{t('timeOfBirth')} <span className="req">*</span></label>
                    <input id="j-time" type="time" className={`input ${bad('time') ? 'invalid' : ''}`} value={form.time} onChange={set('time')} style={{ padding: '0 10px', fontSize: 14 }} />
                  </div>
                </div>
                {(bad('date') || bad('time')) && <div className="err" style={{ marginTop: -8 }}>{t('pleaseEnterDateAnd')}</div>}

                <div className="field">
                  <label htmlFor="j-place">{t('placeOfBirth')} <span className="req">*</span></label>
                  <div className="input-icon">
                    <Icon name="pin" size={18} stroke={1.9} />
                    <input id="j-place" className={`input ${bad('place') ? 'invalid' : ''}`} value={form.place} onChange={set('place')} placeholder={t('townCityEG')} />
                  </div>
                  <div className="hint">{t('latitudeLongitudeTimeZone')}</div>
                  {bad('place') && <div className="err">{t('pleaseEnterPlaceOf')}</div>}
                </div>

                <div className="field">
                  <label htmlFor="j-lang">{t('horoscopeLanguage')}</label>
                  <select id="j-lang" className="input" value={form.reportLang} onChange={set('reportLang')} style={{ padding: '0 12px' }}>
                    <option value="ta">தமிழ்</option>
                    <option value="en">English</option>
                    <option value="hi">हिन्दी</option>
                  </select>
                </div>

                <button type="submit" className="btn btn--cta">{t('calculateLifeHoroscope')}<Icon name="arrow" size={20} stroke={2} /></button>
                <div className="muted" style={{ textAlign: 'center', fontSize: 12 }}>{t('basicHoroscopeFreeFull')}</div>
              </div>
            </form>
          ) : (
            <div className="success">
              <div className="success-ic"><Icon name="check" size={32} stroke={2.2} /></div>
              <h2>{form.name} {t('horoscopeReady')}</h2>
              <p>{form.date} · {form.time} · {form.place}</p>
              <div className="stack" style={{ marginTop: 18 }}>
                <Link to="/account" className="btn btn--maroon btn--block"><Icon name="download" size={18} stroke={2} />{t('getFullPdfPrice')}</Link>
                <Link to="/porutham" className="btn btn--outline btn--block">{t('checkMarriageMatching')}</Link>
                <button type="button" className="btn btn--ghost" onClick={() => { setForm(EMPTY); setTried(false); setDone(false); }}>{t('calculateAnotherHoroscope')}</button>
              </div>
            </div>
          )}
        </section>
      </main>
      <BottomNav />
    </>
  );
}
