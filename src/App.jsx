import { Header } from './components/header/Header';
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { ReadingJourney } from './components/ReadingJourney/ReadingJourney';
import './styles/main.css';
import { MembershipOptions } from './components/MembershipOptions/MembershipOptions';
import { Testimonial } from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Header />
      <FeaturesSection />
      <ReadingJourney />
      <MembershipOptions />
      <Testimonial />
    </>
  );
}

export default App;
