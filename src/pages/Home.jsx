import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Mandala from '../components/Mandala.jsx';
import LangSwitcher from '../components/LangSwitcher.jsx';
import BottomNav from '../components/BottomNav.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { RASIS } from '../data/astro.js';

const QUICK = [
  ['jathagam', 'chart', '/jathagam', 'tint-gold'],
  ['matching', 'rings', '/porutham', 'tint-maroon'],
  ['rasiPalan', 'sun', '/rasi-palan', 'tint-indigo'],
  ['panchangam', 'cal', '/services', 'tint-green'],
  ['numerology', 'hash', '/services', 'tint-indigo'],
  ['vastu', 'house', '/services', 'tint-green'],
  ['astrologer', 'chat', '/consult', 'tint-gold'],
  ['pdfBooks', 'doc', '/account', 'tint-maroon'],
];

const FEATURES = [
  ['calculateJathagam', 'freeBasicHoroscope', 'chart', '/jathagam', 'fcard--maroon'],
  ['marriageMatching', 'n10PoruthamsOnline', 'rings', '/porutham', 'fcard--night'],
  ['astrologersNearYou', 'findNearbyExperts', 'pin', '/consult', ''],
  ['businessBranding', 'nameLogoAstrology', 'bag', '/services', ''],
  ['localAds', 'offersInYourTown', 'mega', '/services', ''],
  ['lifeHoroscopePdf', 'download', 'download', '/account', ''],
];

const PEYARCHI = [
  ['guruPeyarchi2026', 'predictionsRemediesForEvery', 'planet', 'tint-gold'],
  ['saniPeyarchi', 'ezharaiAshtamaSaniExplained', 'saturn', 'tint-indigo'],
  ['rahuKetuPeyarchi', 'impactOfTheShadow', 'moon', 'tint-maroon'],
];

const PANCHANG = [
  ['thithi', ''], ['nakshatra', ''], ['yogam', ''],
  ['rahuKalam', 'bad'], ['yamagandam', 'bad'], ['goodTime', 'good'],
];

function HeroCarousel() {
  const { t } = useLang();
  const [slide, setSlide] = useState(0);
  const slides = [
    { tag: t('specialRelease'), title: [t('guruPeyarchi'), t('predictions2026')], sub: t('completePredictionsForAll'), cta: t('getItNow'), to: '/rasi-palan', price: true },
    { tag: t('asAPdf'), title: [t('your'), t('lifeHoroscope')], sub: t('accurateCalculationFromYour'), cta: t('calculateJathagam'), to: '/jathagam' },
    { tag: t('eventDate'), title: [t('special'), t('pariharaPooja')], sub: t('archanaInYourName'), cta: t('bookNow'), to: '/consult', price: true },
  ];

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const s = slides[slide];
  return (
    <section className="pad" aria-label={t('specialOffers')} aria-roledescription="carousel">
      <div className="hero">
        <Mandala className="hero-mandala" />
        <div className="hero-slide" key={slide}>
          <div>
            <span className="tag">{s.tag}</span>
            <div className="hero-title">{s.title[0]}<br />{s.title[1]}</div>
            <div className="hero-sub">{s.sub}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to={s.to} className="btn btn--gold">{s.cta}</Link>
            {s.price && <span className="hero-price">{t('price')}</span>}
          </div>
        </div>
      </div>
      <div className="dots">
        {slides.map((_, i) => (
          <button key={i} type="button" aria-label={`${t('banner')}${i + 1}`} aria-current={i === slide} onClick={() => setSlide(i)}>
            <span />
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <header className="hdr" style={{ paddingBottom: 0 }}>
        <div className="hdr-row" style={{ gap: 8, paddingLeft: 4 }}>
          <span className="brand-mark"><Icon name="logo" size={24} stroke={1.5} /></span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="brand-name">{t('jothidaDarshan')}</div>
            <div className="brand-tag">{t('astrologyPanchangamSpirituality')}</div>
          </div>
          <LangSwitcher />
          <Link to="/account" className="icon-btn" aria-label={t('notifications')}>
            <Icon name="bell" />
            <span className="dot-badge" />
          </Link>
        </div>
      </header>

      <main className="app-main noscroll">
        <div style={{ background: 'var(--night)', padding: '10px 16px 18px' }}>
          <label htmlFor="home-search" className="sr-only">{t('search')}</label>
          <div className="search">
            <Icon name="search" size={20} />
            <input id="home-search" type="search" placeholder={t('searchJathagamMatchingRasi')} />
            <Icon name="mic" size={20} style={{ color: 'var(--gold)' }} />
          </div>
        </div>

        <HeroCarousel />

        <section className="sec" style={{ paddingTop: 10 }} aria-labelledby="quick-h">
          <SectionHead id="quick-h" title={t('quickServices')} linkTo="/services" linkLabel={t('viewAll')} />
          <div className="grid-4">
            {QUICK.map(([key, icon, to, tint]) => (
              <Link key={key} to={to} className="qtile">
                <span className={`qtile-ic ${tint}`}><Icon name={icon} size={26} stroke={1.6} /></span>
                <span className="qtile-label">{t(key)}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="card panchang" aria-labelledby="pan-h">
          <div className="panchang-head">
            <div>
              <h2 id="pan-h" className="h2">{t('todaySPanchangam')}</h2>
              <div style={{ fontSize: 12, color: 'var(--on-night-2)', marginTop: 2 }}>{t('tamilDateDay')}</div>
            </div>
            <span className="tag" style={{ fontSize: 10 }}>{t('liveApi')}</span>
          </div>
          <div className="grid-3" style={{ gap: 0 }}>
            {PANCHANG.map(([key, tone]) => (
              <div key={key} className="panchang-cell">
                <small className={tone}>{t(key)}</small>
                {/* TODO: bind to panchangam API response */}
                <b>—</b>
              </div>
            ))}
          </div>
        </section>

        <section className="sec--bleed" aria-labelledby="rasi-h">
          <SectionHead id="rasi-h" title={t('todaySRasiPalan')} linkTo="/rasi-palan" linkLabel={t('all')} />
          <div className="hscroll noscroll" style={{ gap: 10 }}>
            {RASIS.map((key, i) => (
              <Link key={key} to={`/rasi-palan?rasi=${i}`} className="rasi-chip">
                <span className="rasi-coin">{String(i + 1).padStart(2, '0')}</span>
                <span>{t(key)}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="sec" aria-labelledby="feat-h">
          <SectionHead id="feat-h" title={t('keyAstrologyServices')} />
          <div className="grid-2">
            {FEATURES.map(([title, sub, icon, to, variant]) => (
              <Link key={title} to={to} className={`fcard ${variant}`}>
                <Icon name={icon} size={28} stroke={1.6} style={{ color: variant ? 'var(--gold-light)' : 'var(--maroon)' }} />
                <span>
                  <span className="fcard-title">{t(title)}</span>
                  <span className="fcard-sub">{t(sub)}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="sec--bleed" aria-labelledby="pey-h">
          <SectionHead id="pey-h" title={t('peyarchiPredictions')} linkTo="/rasi-palan" linkLabel={t('more')} />
          <div className="hscroll noscroll">
            {PEYARCHI.map(([title, sub, icon, tint]) => (
              <Link key={title} to="/rasi-palan" className="pcard">
                <span className={`pcard-ic ${tint}`}><Icon name={icon} size={24} stroke={1.6} /></span>
                <h3>{t(title)}</h3>
                <p>{t(sub)}</p>
                <span className="pcard-more">{t('read')}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="promo">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="promo-title">{t('askAnAstrologer')}</div>
            <p className="promo-sub">{t('marriageCareerEducationDirect')}</p>
            <Link to="/consult" className="btn btn--maroon">{t('askAQuestion')}</Link>
          </div>
          <span className="promo-art"><Icon name="chat" size={40} stroke={1.4} /></span>
        </section>

        <section className="sec" aria-labelledby="art-h">
          <SectionHead id="art-h" title={t('spiritualArticles')} linkTo="/services" linkLabel={t('all')} />
          <div className="stack">
            <Link to="/services" className="row-card">
              <span className="row-ic row-ic--night"><Icon name="lamp" size={26} stroke={1.5} /></span>
              <span className="row-body">
                <span className="row-title">{t('karthigaiDeepamHowTo')}</span>
                <span className="row-sub">{t('vratham4MinRead')}</span>
              </span>
            </Link>
            <Link to="/services" className="row-card">
              <span className="row-ic row-ic--night"><Icon name="temple" size={26} stroke={1.5} /></span>
              <span className="row-body">
                <span className="row-title">{t('navagrahaDoshaPariharaTemples')}</span>
                <span className="row-sub">{t('remedies6MinRead')}</span>
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Link to="/consult" className="fab" aria-label={t('support')}><Icon name="headset" size={24} /></Link>
      <BottomNav />
    </>
  );
}
