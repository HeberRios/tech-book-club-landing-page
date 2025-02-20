import './FeatureCard.css';
import readTogetherMobileImg from '../../assets/images/image-read-together-mobile.webp';
import readTogetherTabletImg from '../../assets/images/image-read-together-tablet.webp';
import notAverageMobileImg from '../../assets/images/image-not-average-mobile.webp';
import notAverageTabletImg from '../../assets/images/image-not-average-tablet.webp';
import techsLogosImage from '../../assets/images/logos-tech.svg';
import checkIcon from '../../assets/images/icon-check.svg';
import orangeOvalImage from '../../assets/images/pattern-circle.png';

export function FeatureCard({ cardTopic }) {
  if (cardTopic === 'read-together') {
    return (
      <div
        className={`${
          cardTopic === 'read-together'
            ? 'container product-feature-card read-tgt'
            : 'container product-feature-card'
        }`}
      >
        <article className='feature-text-container'>
          <h2>Read together, grow together</h2>
          <ul>
            <li className='product-feature'>
              <img src={checkIcon} alt='dark green check sign' />
              <p className='feature-text'>
                Monthly curated tech reads selected by industry experts
              </p>
            </li>
            <li className='product-feature'>
              <img src={checkIcon} alt='dark green check sign' />
              <p className='feature-text'>
                Virtual and in-person meetups for deep-dive discussions
              </p>
            </li>
            <li className='product-feature'>
              <img src={checkIcon} alt='dark green check sign' />
              <p className='feature-text'>
                Early access to new tech book releases
              </p>
            </li>
            <li className='product-feature'>
              <img src={checkIcon} alt='dark green check sign' />
              <p className='feature-text'>
                Author Q&A sessions with tech thought leaders
              </p>
            </li>
          </ul>
        </article>

        <picture>
          <source media='(min-width:48rem )' srcSet={readTogetherTabletImg} />
          <img
            className='feature-card-img'
            src={readTogetherMobileImg}
            alt='a group of people reading books'
          />
        </picture>
      </div>
    );
  } else {
    return (
      <div
        className={`${
          cardTopic === 'not-average'
            ? 'container product-feature-card not-avg'
            : 'container product-feature-card'
        }`}
      >
        <article className='feature-text-container'>
          <h2>
            <span className='before-text'>Not your average book</span>
            <span className='highlighted-word'>
              {' '}
              club
              <img
                className='highlight-oval'
                src={orangeOvalImage}
                alt='orange oval'
              />
            </span>
          </h2>
          <p className='feature-text'>
            Connect with a community that speaks your language - from
            <strong> Python </strong>
            to
            <strong> TypeScript </strong>
            and everything in between. Our discussions blend technical depth
            with practical applications.
          </p>
        </article>

        <picture>
          <source media='(min-width:48rem )' srcSet={notAverageTabletImg} />
          <img
            className='feature-card-img'
            src={notAverageMobileImg}
            alt='a group of people discussing a topic from a book'
          />
        </picture>

        <img
          className='tech-logos'
          src={techsLogosImage}
          alt='A blue circle with a white square with the letters TS, a Niels Bhor atomic model inside a cyan circle and a simple black cat figure inside a white circle'
        />
      </div>
    );
  }
}
