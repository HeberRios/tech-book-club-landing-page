import avatars from '../../assets/images/image-avatars.webp';
import { Star } from '../icons/Star';
import './CTAText.css';

export function CTAText({ parentComponent }) {
  const paragraphTextColor = {
    color: parentComponent === 'footer' ? '#faf5f3' : '#385159',
  };

  return (
    <div className='cta-text-container'>
      <img src={avatars} alt='3 small profile pictures aligned horizontally' />

      <div className='cta-testimonials-text'>
        <div className='rating-stars-wrapper'>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p style={paragraphTextColor}>200+ developers joined already</p>
      </div>
    </div>
  );
}
