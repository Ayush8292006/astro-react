import { NavLink } from 'react-router-dom';
import Icon from './Icon.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

// `activeOverride` lets a page highlight a tab whose route differs (e.g. Porutham → Services).
export default function BottomNav({ activeOverride }) {
  const { t } = useLang();
  const cls = (path) => ({ isActive }) => (isActive || activeOverride === path ? 'active' : undefined);
  return (
    <nav className="bnav" aria-label={t('mainNavigation')}>
      <NavLink to="/" end className={cls('/')}>
        <Icon name="home" /><span>{t('home')}</span>
      </NavLink>
      <NavLink to="/services" className={cls('/services')}>
        <Icon name="grid" /><span>{t('services')}</span>
      </NavLink>
      <NavLink to="/jathagam" className={cls('/jathagam')}>
        <span className="bnav-center"><Icon name="chart" size={26} stroke={1.7} /></span>
        <span>{t('jathagam')}</span>
      </NavLink>
      <NavLink to="/rasi-palan" className={cls('/rasi-palan')}>
        <Icon name="sun" /><span>{t('rasiPalan')}</span>
      </NavLink>
      <NavLink to="/account" className={cls('/account')}>
        <Icon name="user" /><span>{t('account')}</span>
      </NavLink>
    </nav>
  );
}
