import './CTA.css';
import arrowDownIcon from '../../assets/images/icon-arrow-down.svg';

export function CTA({ parentComponent }) {
  if (parentComponent === 'hero') {
    return (
      <button className='btn cta-primary-btn hero-cta-btn '>
        <span>Review membership options</span>
        <img src={arrowDownIcon} alt='dark green arrow facing down' />
      </button>
    );
  } else if (parentComponent === 'membership-enterprise') {
    return (
      <button className='btn cta-primary-btn membership-cta-btn '>
        <span>Talk to us</span>
      </button>
    );
  } else {
    return (
      <button className='btn cta-primary-btn membership-cta-btn '>
        <span>Subscribe now</span>
      </button>
    );
  }
}
