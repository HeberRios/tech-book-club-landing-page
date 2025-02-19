import { CheckIcon } from '../icons/CheckIcon';
import readTogetherMobileImg from '../../assets/images/image-read-together-mobile.webp';
import notAverageMobileImg from '../../assets/images/image-not-average-mobile.webp';

export function FeatureCard({ cardTopic }) {
  if (cardTopic === 'read-together') {
    return (
      <div className='product-feature-card'>
        <article className='feature-text-container'>
          <h2>Read together, grow together</h2>
          <ul>
            <li className='product-feature'>
              <CheckIcon />
              <p>Monthly curated tech reads selected by industry experts</p>
            </li>
            <li className='product-feature'>
              <CheckIcon />
              <p>Virtual and in-person meetups for deep-dive discussions</p>
            </li>
            <li className='product-feature'>
              <CheckIcon />
              <p>Early access to new tech book releases</p>
            </li>
            <li className='product-feature'>
              <CheckIcon />
              <p>Author Q&A sessions with tech thought leaders</p>
            </li>
          </ul>
        </article>

        <picture>
          <source media='(min-width: )' srcSet='' />
          <img
            src={readTogetherMobileImg}
            alt='a group of people reading books'
          />
        </picture>
      </div>
    );
  } else {
    return (
      <div className='product-feature-card'>
        <article className='feature-text-container'>
          <h2>Not your average book club</h2>
          <p>
            Connect with a community that speaks your language - from Python to
            TypeScript and everything in between. Our discussions blend
            technical depth with practical applications.
          </p>
        </article>

        <picture>
          <source media='(min-width: )' srcSet='' />
          <img
            src={notAverageMobileImg}
            alt='a group of people discussing a topic from a book'
          />
        </picture>
      </div>
    );
  }
}
