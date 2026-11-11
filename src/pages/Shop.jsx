// OPTIONAL SCOPE — Sri Diya-style commerce module. Remove this route if the client excludes e-commerce.
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import LangSwitcher from '../components/LangSwitcher.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

const CATS = ['all', 'malas', 'bracelets', 'yantras', 'poojaSets', 'navaratnam'];
const ARRIVALS = ['karungaliMala108Beads', 'rudrakshaMala5Mukhi', 'panchalohaBracelet'];
const KAPPU = ['aries2', 'taurus2', 'gemini2', 'cancer2', 'leo2', 'virgo'];

export default function Shop() {
  const { t } = useLang();
  const [cart, setCart] = useState(0);
  const [cat, setCat] = useState(0);
  const add = () => setCart((c) => c + 1); // TODO: cart context + product IDs

  return (
    <>
      <header className="hdr hdr--maroon" style={{ padding: '12px 12px 14px 8px' }}>
        <div className="hdr-row">
          <Link to="/" className="icon-btn" aria-label={t('back')} style={{ color: '#fff' }}><Icon name="back" stroke={2} /></Link>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#fff' }}>{t('spiritualStore')}</div>
            <div style={{ fontSize: 11, color: 'var(--tint-maroon)' }}>{t('poojaItemsMalasYantras')}</div>
          </div>
          <LangSwitcher />
          <button type="button" className="icon-btn" aria-label={`${t('cart')}${cart}${t('items')}`} style={{ color: '#fff' }}>
            <Icon name="cart" />
            {cart > 0 && <span className="cart-badge">{cart}</span>}
          </button>
        </div>
        <label htmlFor="shop-q" className="sr-only">{t('searchProducts')}</label>
        <div className="search search--light" style={{ margin: '8px 4px 0 8px', height: 44 }}>
          <Icon name="search" size={20} />
          <input id="shop-q" type="search" placeholder={t('searchProducts2')} />
          <button type="button" aria-label={t('voiceSearch')} className="tint-maroon" style={{ width: 36, height: 36, border: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="mic" size={18} stroke={1.9} />
          </button>
        </div>
      </header>

      <main className="app-main noscroll">
        <div className="chips noscroll" style={{ paddingBottom: 4 }}>
          {CATS.map((k, i) => (
            <button key={k} type="button" aria-pressed={cat === i} className="chip chip--maroon" onClick={() => setCat(i)}>{t(k)}</button>
          ))}
        </div>

        <section style={{ margin: '12px 16px 0', borderRadius: 20, background: 'var(--night)', padding: 18, position: 'relative', overflow: 'hidden', color: 'var(--ivory)' }}>
          <svg width="180" height="180" viewBox="0 0 200 200" fill="none" stroke="#D9A441" aria-hidden="true" style={{ position: 'absolute', right: -36, top: -20 }}>
            <circle cx="100" cy="100" r="90" strokeOpacity=".3" /><path d="M100 30 160 140H40z" strokeOpacity=".5" /><path d="M100 170 40 60h120z" strokeOpacity=".5" /><circle cx="100" cy="100" r="20" strokeOpacity=".6" />
          </svg>
          <div style={{ position: 'relative', maxWidth: 220 }}>
            <span className="tag">{t('xOff')}</span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 800, color: 'var(--gold-light)', lineHeight: 1.35, marginTop: 8 }}>{t('sriChakraToEase')}</div>
            <button type="button" className="btn btn--gold" style={{ marginTop: 12 }} onClick={add}>{t('buyNow')}</button>
          </div>
        </section>

        <section className="sec--bleed" aria-labelledby="na-h">
          <div className="sec-head">
            <h2 id="na-h" className="h2">{t('newArrivals')}</h2>
            <span className="tag tag--green" style={{ fontSize: 11 }}>NEW</span>
          </div>
          <div className="hscroll noscroll">
            {ARRIVALS.map((k) => (
              <div key={k} className="card prod">
                <div className="prod-img tint-gold">
                  <Icon name="mala" size={56} stroke={1.1} />
                  <span className="off-badge">{t('xOff')}</span>
                  <small>{t('productImage')}</small>
                </div>
                <div style={{ padding: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.4, minHeight: 36 }}>{t(k)}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
                    <span className="price">{t('price')}</span><span className="mrp">₹[MRP]</span>
                  </div>
                  <button type="button" className="btn btn--maroon" style={{ width: '100%', marginTop: 8, height: 38, borderRadius: 10, fontSize: 13 }} onClick={add}>{t('addToCart')}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" aria-labelledby="lk-h">
          <h2 id="lk-h" className="h2" style={{ marginBottom: 12 }}>{t('luckyBraceletsForYour')}</h2>
          <div className="grid-3">
            {KAPPU.map((k) => (
              <button key={k} type="button" className="kappu" onClick={add}>
                <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--ivory)', color: 'var(--gold-text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="bangle" size={30} stroke={1.4} /></span>
                <span>{t(k)} {t('bracelet')}</span>
                <span className="price" style={{ fontSize: 12 }}>{t('price')}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="promo">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="promo-title">{t('ayudhaPoojaSaraswathiPooja')}</div>
            <p className="promo-sub">{t('allPoojaEssentialsIn')}</p>
            <button type="button" className="btn btn--maroon" onClick={add}>{t('orderNow')}</button>
          </div>
          <span className="promo-art" style={{ background: 'var(--maroon)', color: 'var(--gold-light)', width: 80, height: 80 }}><Icon name="lamp" size={40} stroke={1.4} /></span>
        </section>
      </main>

      {cart > 0 && (
        <div className="cart-bar">
          <span>{cart} {t('itemSInCart')}</span>
          <Link to="/shop" className="btn btn--gold" style={{ borderRadius: 12 }}>{t('checkout')}</Link>
        </div>
      )}

      <nav className="bnav bnav--4" aria-label={t('storeNavigation')}>
        <NavLink to="/shop"><Icon name="home" /><span>{t('store')}</span></NavLink>
        <NavLink to="/services"><Icon name="grid" /><span>{t('categories')}</span></NavLink>
        <NavLink to="/"><Icon name="doc" /><span>{t('blog')}</span></NavLink>
        <NavLink to="/account"><Icon name="user" /><span>{t('myAccount')}</span></NavLink>
      </nav>
    </>
  );
}
