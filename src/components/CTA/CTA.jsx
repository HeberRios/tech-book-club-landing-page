export function CTA({ icon, parentComponent }) {
  return (
    <button className='cta-btn'>
      <span>Review membership options</span>
      {icon}
    </button>
  );
}
