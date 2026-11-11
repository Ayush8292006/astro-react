import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import LangSwitcher from './LangSwitcher.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

// Sub-page header: back button, title, language switcher, optional subtitle / children.
export default function PageHeader({ title, subtitle, back = '/', variant = 'night', right, children }) {
  const { t } = useLang();
  return (
    <header className={`hdr ${variant === 'maroon' ? 'hdr--maroon' : ''}`}>
      <div className="hdr-row">
        <Link to={back} className="icon-btn" aria-label={t('back')}>
          <Icon name="back" stroke={2} />
        </Link>
        <h1 className="hdr-title">{title}</h1>
        <LangSwitcher />
        {right}
      </div>
      {subtitle && <p className="hdr-sub">{subtitle}</p>}
      {children}
    </header>
  );
}
