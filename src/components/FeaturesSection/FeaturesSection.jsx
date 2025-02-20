import { FeatureCard } from '../FeatureCard/FeatureCard';
import './FeaturesSection.css';

export function FeaturesSection() {
  return (
    <div className='features-section'>
      <FeatureCard cardTopic='read-together' />
      <FeatureCard cardTopic='not-average' />
    </div>
  );
}
