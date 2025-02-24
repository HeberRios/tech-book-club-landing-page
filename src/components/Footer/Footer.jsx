import './Footer.css';
import { CTA } from '../CTA/CTA';
import { CTAText } from '../CTAText/CTAText';

export function Footer() {
  return (
    <footer className='footer-section'>
      <section className='footer-main-content'>
        <h2>Ready to debug your reading list?</h2>
        <div className='cta-container'>
          <CTA parentComponent='footer' />
          <CTAText parentComponent='footer' />
        </div>
      </section>

      <div className='container copy-media-container'>
        <div className='footer-separation-line'></div>
        <small>© 2024 - Tech Book Club</small>
        <ul className='media-links-list'>
          <li>
            <a href='#' className='media-link'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='23'
                fill='none'
                viewBox='0 0 22 23'
              >
                <path
                  fill='#fff'
                  d='M4.804 2.695c2.51 1.877 5.208 5.693 6.196 7.743.988-2.046 3.687-5.861 6.196-7.743 1.81-1.358 4.74-2.407 4.74.936 0 .666-.383 5.608-.606 6.411-.782 2.785-3.627 3.498-6.158 3.064 4.422.752 5.547 3.244 3.116 5.736-4.615 4.735-6.63-1.186-7.146-2.702-.073-.211-.112-.336-.142-.336-.03 0-.069.13-.142.336-.515 1.516-2.535 7.437-7.146 2.702-2.427-2.492-1.306-4.984 3.116-5.736-2.531.434-5.376-.28-6.153-3.068-.228-.804-.61-5.745-.61-6.411 0-3.343 2.93-2.294 4.739-.937v.005Z'
                />
              </svg>
            </a>
          </li>
          <li>
            <a href='#' className='media-link'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                fill='none'
                viewBox='0 0 18 19'
              >
                <path
                  fill='#fff'
                  d='M16.25.772c.664 0 1.25.586 1.25 1.289v14.961c0 .703-.586 1.25-1.25 1.25H1.21c-.663 0-1.21-.547-1.21-1.25V2.061C0 1.358.547.772 1.21.772h15.04Zm-10.977 15v-8.32H2.695v8.32h2.578ZM3.984 6.28c.82 0 1.485-.664 1.485-1.485 0-.82-.664-1.523-1.485-1.523-.859 0-1.523.703-1.523 1.523S3.125 6.28 3.984 6.28ZM15 15.772v-4.57c0-2.227-.508-3.985-3.125-3.985-1.25 0-2.11.703-2.46 1.367h-.04V7.452h-2.46v8.32h2.577V11.67c0-1.093.195-2.148 1.563-2.148 1.328 0 1.328 1.25 1.328 2.188v4.062H15Z'
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
