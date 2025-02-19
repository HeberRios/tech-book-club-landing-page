import { FeatureCard } from './components/FeatureCard/FeatureCard';
import { Header } from './components/header/Header';
import './styles/main.css';

function App() {
  return (
    <>
      <Header />
      {/* TODO: change the source in the picture element inside the hero */}
      <div className='features-section'>
        <FeatureCard cardTopic='read-together' />
        <FeatureCard cardTopic='not-average' />
      </div>
    </>
  );
}

export default App;
