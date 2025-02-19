import { CTA } from '../CTA/CTA';
import { CTAText } from '../CTAText/CTAText';
import { ArrowDown } from '../icons/ArrowDown';
import './Hero.css';
import mobileHeroImg from '../../assets/images/image-hero-mobile.webp';
import tabletHeroImg from '../../assets/images/image-hero-tablet.webp';
import desktopHeroImg from '../../assets/images/image-hero-desktop.webp';

export function Hero() {
  return (
    <div className='container hero-section'>
      <section className='hero-text-container'>
        <h1>Join the ultimate tech book club</h1>
        <p>
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>

        <div className='hero-cta'>
          <CTA icon={<ArrowDown />} parentComponent='hero' />
          <CTAText parentComponent='hero' />
        </div>
      </section>

      <picture>
        {/* first the wider media query, to evaluate the condition and if is not true skip to the
        next source */}
        <source media='(min-width: 90rem )' srcSet={desktopHeroImg} />
        <source media='(min-width: 48rem )' srcSet={tabletHeroImg} />

        <img
          className='hero-img'
          src={mobileHeroImg}
          alt='a group a people discussing the content of a book'
        />
      </picture>
    </div>
  );
}
