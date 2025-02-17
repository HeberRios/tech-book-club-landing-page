import { CTA } from '../CTA/CTA';
import { CTAText } from '../CTAText/CTAText';

export function Hero() {
  return (
    <div className='hero-section'>
      <section className='hero-text-container'>
        <h1>Join the ultimate tech book club</h1>
        <p>
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>
      </section>

      <div className='hero-cta'>
        <CTA />
        <CTAText />
      </div>
    </div>
  );
}
