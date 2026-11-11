import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHeader from '../components/PageHeader.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

const CATEGORIES = ['marriage', 'career', 'education', 'health', 'money', 'abroad', 'children'];
const MODES = ['chat', 'call2', 'whatsapp'];
// Placeholder astrologer list — replace with API data.
const ASTROLOGERS = [
  { spec: 'jathagamMatching', langs: 'tamilEnglish' },
  { spec: 'vastuNumerology', langs: 'tamilOnly' },
  { spec: 'prasannamRemedies', langs: 'tamilTelugu' },
];

export default function Consult() {
  const { t } = useLang();
  const [cat, setCat] = useState(0);
  const [mode, setMode] = useState(0);
  const [sent, setSent] = useState(false);
  const modeLabel = (m) => (m === 'whatsapp' ? 'WhatsApp' : t(m));

  return (
    <>
      <PageHeader title={t('askAnAstrologer')} subtitle={t('personalAnswersToYour')} />

      <main className="app-main noscroll" style={{ padding: '16px 16px calc(var(--nav-h) + 26px)' }}>
        {!sent ? (
          <form className="card card-pad" aria-labelledby="q-h" onSubmit={(e) => { e.preventDefault(); /* TODO: create question + payment */ setSent(true); }}>
            <h2 id="q-h" className="h2" style={{ fontSize: 17 }}>{t('whatIsYourQuestion')}</h2>
            <div className="chips chips--wrap" role="radiogroup" aria-labelledby="q-h" style={{ marginTop: 12 }}>
              {CATEGORIES.map((k, i) => (
                <button key={k} type="button" role="radio" aria-checked={cat === i} className="chip chip--maroon" style={{ height: 38, padding: '0 14px' }} onClick={() => setCat(i)}>{t(k)}</button>
              ))}
            </div>

            <div className="field" style={{ marginTop: 16 }}>
              <label htmlFor="q-text">{t('describeYourQuestion')}</label>
              <textarea id="q-text" rows={4} className="input" placeholder={t('eGWhenWill')} />
            </div>

            <div className="check-row" style={{ marginTop: 12 }}>
              <input id="q-attach" type="checkbox" defaultChecked />
              <label htmlFor="q-attach">{t('attachMySavedHoroscope')}</label>
            </div>

            <div className="field" style={{ marginTop: 16 }}>
              <span className="label" id="mode-l">{t('howToReceiveThe')}</span>
              <div className="grid-3" role="radiogroup" aria-labelledby="mode-l" style={{ gap: 8 }}>
                {MODES.map((m, i) => (
                  <button key={m} type="button" role="radio" aria-checked={mode === i} className="mode-btn" onClick={() => setMode(i)}>
                    {modeLabel(m)}<small>{t('price')}</small>
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn--cta" style={{ marginTop: 18 }}>{t('sendQuestionPay')}</button>
            <div className="muted" style={{ fontSize: 11, textAlign: 'center', marginTop: 8 }}>{t('answerWithinTimeHours')}</div>
          </form>
        ) : (
          <section className="card success" style={{ padding: '24px 16px' }}>
            <div className="success-ic"><Icon name="check" size={32} stroke={2.2} /></div>
            <h2>{t('questionSent')}</h2>
            <p>{t(CATEGORIES[cat])} · {modeLabel(MODES[mode])} {t('yourAnswerWillArrive')}</p>
            <div className="stack" style={{ marginTop: 18 }}>
              <Link to="/account" className="btn btn--maroon btn--block">{t('viewMyQuestions')}</Link>
              <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>{t('newQuestion')}</button>
            </div>
          </section>
        )}

        <section style={{ marginTop: 22 }} aria-labelledby="as-h">
          <div className="sec-head">
            <h2 id="as-h" className="h2">{t('astrologersNearYou')}</h2>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: 'var(--maroon)' }}>
              <Icon name="pin" size={14} stroke={2} />{t('city')}
            </span>
          </div>
          <div className="stack">
            {ASTROLOGERS.map((a, i) => (
              <div key={i} className="card" style={{ padding: 14, display: 'flex', gap: 12, alignItems: 'center', borderRadius: 18 }}>
                <span className="astro-av">{t('jo')}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{t('astrologerName')}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>{t(a.spec)} {t('xYrsExperience')}</div>
                  <div style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600, marginTop: 2 }}>{t(a.langs)}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <a href="tel:" className="btn btn--maroon btn-sm">{t('call')}</a>
                  <button type="button" className="btn btn--outline btn-sm" style={{ borderColor: 'var(--maroon)', color: 'var(--maroon)', borderWidth: 1 }}>{t('chat')}</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav activeOverride="/services" />
    </>
  );
}
