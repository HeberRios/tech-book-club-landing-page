import { Hero } from '../Hero/Hero';
import { Logo } from '../icons/Logo';
import './Header.css';

export function Header() {
  return (
    <header className='header-container'>
      <div className='container'>
        <a href='#'>
          <Logo />
        </a>
      </div>

      <Hero />
    </header>
  );
}
