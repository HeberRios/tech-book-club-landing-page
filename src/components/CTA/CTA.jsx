import './CTA.css';
import arrowDownIcon from '../../assets/images/icon-arrow-down.svg';
import arrowUpIcon from '../../assets/images/icon-arrow-up.svg';

export function CTA({ parentComponent }) {
  if (parentComponent === 'hero') {
    return (
      <button className='btn cta-primary-btn hero-cta-btn '>
        <span>Review membership options</span>
        <img src={arrowDownIcon} alt='dark green arrow facing down' />
      </button>
    );
  } else if (parentComponent === 'footer') {
    return (
      <button className='btn cta-primary-btn footer-cta-btn '>
        <span>Review membership options</span>
        <img src={arrowUpIcon} alt='dark green arrow facing upwards' />
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
