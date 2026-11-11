import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Mandala from '../components/Mandala.jsx';
import LangSwitcher from '../components/LangSwitcher.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

const NOTIFS = [
  ['todaySRasiPalan2', 'morningAlertTime'],
  ['guruPeyarchi2026Predictions', 'specialOffer'],
  ['eventSpecialPoojaBooking', 'event'],
];

function Login({ onLogin }) {
  const { t } = useLang();
  const [phone, setPhone] = useState('');
  const [otpStep, setOtpStep] = useState(false);
  const [err, setErr] = useState(false);

  const primary = () => {
    if (otpStep) return onLogin(phone); // TODO: verify OTP with backend
    if (phone.length !== 10) return setErr(true);
    // TODO: request OTP via SMS / WhatsApp
    setOtpStep(true);
  };

  return (
    <main className="app-main noscroll">
      <section className="jhero" style={{ padding: '12px 16px 48px', textAlign: 'center' }}>
        <Mandala size={300} opacity={0.6} style={{ position: 'absolute', left: '50%', top: -40, marginLeft: -150 }} />
        <div className="hdr-row">
          <Link to="/" className="icon-btn" aria-label={t('back')} style={{ marginLeft: -8, marginRight: 'auto' }}><Icon name="back" stroke={2} /></Link>
          <LangSwitcher />
        </div>
        <span className="brand-mark" style={{ position: 'relative', width: 72, height: 72, margin: '10px auto 0', borderWidth: 2 }}><Icon name="logo" size={36} stroke={1.5} /></span>
        <h1 style={{ position: 'relative', fontSize: 24, marginTop: 14 }}>{t('welcome')}</h1>
        <p style={{ position: 'relative', margin: '6px 20px 0' }}>{t('logInToSave')}</p>
      </section>

      <section className="card card-pad" style={{ margin: '-28px 16px 0', position: 'relative', boxShadow: '0 10px 24px rgba(28,18,51,.12)', padding: '18px 16px' }}>
        <div className="field">
          <label htmlFor="ph">{t('mobileNumber')}</label>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="input" style={{ width: 'auto', display: 'flex', alignItems: 'center', background: 'var(--sand)', fontWeight: 600, height: 50 }}>+91</span>
            <input
              id="ph" type="tel" inputMode="numeric" autoComplete="tel-national" className={`input ${err ? 'invalid' : ''}`} style={{ height: 50, fontSize: 16, letterSpacing: '0.04em' }}
              placeholder={t('n10DigitNumber')} value={phone}
              onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '').slice(0, 10)); setErr(false); }}
            />
          </div>
          {err && <div className="err">{t('enterAValid10')}</div>}
        </div>

        {otpStep && (
          <div className="field" style={{ marginTop: 14 }}>
            <label htmlFor="otp">OTP (WhatsApp / SMS)</label>
            <input id="otp" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength={6} className="input otp" style={{ height: 50 }} placeholder="• • • • • •" />
            <div className="hint" style={{ fontSize: 12 }}>+91 {phone} {t('otpSentToThis')}</div>
          </div>
        )}

        <button type="button" className="btn btn--maroon btn--block" style={{ marginTop: 16, height: 52, fontFamily: 'var(--font-display)', fontSize: 16 }} onClick={primary}>
          {otpStep ? t('logIn') : t('sendOtp')}
        </button>
        <div className="divider">{t('or')}</div>
        <button type="button" className="btn btn--block" style={{ background: '#fff', border: '1.5px solid var(--green)', color: 'var(--green)' }} onClick={primary}>
          <Icon name="chat" size={20} />{t('logInWithWhatsapp')}
        </button>
        <p className="muted" style={{ margin: '14px 0 0', fontSize: 11, textAlign: 'center', lineHeight: 1.6 }}>
          {t('byContinuingYouAccept')} <a href="#terms">{t('terms')}</a> &amp; <a href="#privacy">{t('privacyPolicy')}</a>{t('x')}
        </p>
      </section>
    </main>
  );
}

function Dashboard({ phone, onLogout }) {
  const { t } = useLang();
  const [tab, setTab] = useState(0);
  const TABS = ['reports', 'notifications', 'questions'];

  return (
    <main className="app-main noscroll">
      <section className="hdr" style={{ padding: '12px 16px 22px' }}>
        <div className="hdr-row">
          <h1 className="hdr-title">{t('myAccount')}</h1>
          <LangSwitcher />
          <button type="button" className="icon-btn" aria-label={t('settings')}><Icon name="settings" /></button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 12 }}>
          <span style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--gold)', color: 'var(--night)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800 }}>{t('u')}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ivory)' }}>{t('userName')}</div>
            <div style={{ fontSize: 13, color: 'var(--on-night-2)' }}>+91 {phone || 'XXXXXXXXXX'}</div>
            <div style={{ fontSize: 12, color: 'var(--gold-light)', marginTop: 2 }}>{t('rasiRasiNakshatraNakshatra')}</div>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 8, marginTop: 16 }}>
          {['horoscopes', 'reports', 'questions'].map((k) => (
            <div key={k} className="stat"><b>0</b><span>{t(k)}</span></div>
          ))}
        </div>
      </section>

      <div className="tabs" role="tablist" aria-label={t('accountSections')}>
        {TABS.map((k, i) => (
          <button key={k} type="button" role="tab" aria-selected={tab === i} onClick={() => setTab(i)}>{t(k)}</button>
        ))}
      </div>

      <div style={{ padding: 16 }}>
        {tab === 0 && (
          <div className="stack">
            <div className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, borderRadius: 16 }}>
              <span className="row-ic tint-maroon" style={{ width: 48, height: 48, borderRadius: 12 }}><Icon name="doc" size={24} stroke={1.6} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{t('sampleLifeHoroscope')}</div>
                <div className="muted" style={{ fontSize: 12 }}>{t('pdfSample')}</div>
              </div>
              <button type="button" className="icon-btn" aria-label={t('download2')} style={{ borderRadius: '50%', border: '1px solid var(--line)', background: 'var(--ivory)', color: 'var(--maroon)' }}>
                <Icon name="download" size={20} stroke={2} />
              </button>
            </div>
            <div className="empty">
              <div style={{ fontSize: 14, fontWeight: 600 }}>{t('noReportsYet')}</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{t('savedHereOnceYou')}</div>
              <Link to="/jathagam" className="btn" style={{ marginTop: 12, background: 'var(--green)', color: '#fff' }}>{t('calculateJathagam')}</Link>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="stack">
            {NOTIFS.map(([title, sub]) => (
              <div key={title} className="card" style={{ padding: 14, display: 'flex', gap: 12, borderRadius: 16 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--orange)', marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.45 }}>{t(title)}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>{t(sub)}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="empty">
            <div style={{ fontSize: 14, fontWeight: 600 }}>{t('noQuestionsYet')}</div>
            <Link to="/consult" className="btn btn--maroon" style={{ marginTop: 12 }}>{t('askAnAstrologer')}</Link>
          </div>
        )}

        <div className="card menu-list">
          <Link to="/shop">{t('myOrders')}<Icon name="chevron" size={18} stroke={2} style={{ color: 'var(--muted-2)' }} /></Link>
          <Link to="/account">{t('languageEnglish')}<Icon name="chevron" size={18} stroke={2} style={{ color: 'var(--muted-2)' }} /></Link>
          <Link to="/consult">{t('helpSupport')}<Icon name="chevron" size={18} stroke={2} style={{ color: 'var(--muted-2)' }} /></Link>
          <button type="button" className="danger" onClick={onLogout}>{t('logOut')}</button>
        </div>
      </div>
    </main>
  );
}

export default function Account() {
  // TODO: replace with real auth state (token in context / secure storage)
  const [user, setUser] = useState(null);
  return (
    <>
      {user ? <Dashboard phone={user.phone} onLogout={() => setUser(null)} /> : <Login onLogin={(phone) => setUser({ phone })} />}
      <BottomNav />
    </>
  );
}
