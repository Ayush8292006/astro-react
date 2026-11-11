import { Link } from 'react-router-dom';

export default function SectionHead({ id, title, linkTo, linkLabel, bar = false }) {
  return (
    <div className="sec-head">
      <h2 id={id} className={`h2 ${bar ? 'bar-title' : ''}`}>{title}</h2>
      {linkTo && <Link to={linkTo} className="sec-link">{linkLabel}</Link>}
    </div>
  );
}
