import './styles/main.css';
import { Header } from './components/header/Header';
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { ReadingJourney } from './components/ReadingJourney/ReadingJourney';
import { MembershipOptions } from './components/MembershipOptions/MembershipOptions';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <FeaturesSection />
      <ReadingJourney />
      <MembershipOptions />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
