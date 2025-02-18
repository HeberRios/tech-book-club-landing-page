import './CTA.css';

export function CTA({ icon, parentComponent }) {
  const buttonClass = `${
    parentComponent === 'footer' ? 'btn cta-btn footer-cta' : 'btn cta-btn'
  }`;

  return (
    <button className={buttonClass}>
      <span>Review membership options</span>
      {icon}
    </button>
  );
}
