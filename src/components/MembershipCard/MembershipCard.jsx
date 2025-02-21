import { CTA } from '../CTA/CTA';
import checkBoxIcon from '../../assets/images/icon-check.svg';
import './MembershipCard.css';

export function MembershipCard({ membershipOption }) {
  if (membershipOption === 'starter') {
    return (
      <div className='membership-card'>
        <div className='membership-text-container'>
          <h3>Starter</h3>
          <p>
            <span>$19</span>
            /month
          </p>
          <div className='separation-line'></div>
          <div className='membership-feature-wrapper'>
            <ul>
              <li className='membership-feature'>
                <img src={checkBoxIcon} alt='dark green check box' />
                <p>1 book/month</p>
              </li>
              <li className='membership-feature'>
                <img src={checkBoxIcon} alt='dark green check box' />
                <p>Online forums</p>
              </li>
            </ul>
          </div>
        </div>

        <CTA parentComponent='membership-starter' />
      </div>
    );
  } else if (membershipOption === 'pro') {
    return (
      <div className='membership-card highlighted-opt'>
        <div className='membership-text-container'>
          <h3>Pro</h3>
          <p>
            <span>$29</span>
            /month
          </p>
          <div className='separation-line'></div>
          <div className='membership-feature-wrapper'>
            <ul>
              <li className='membership-feature'>
                <img src={checkBoxIcon} alt='dark green check box' />
                <p>2 books/month</p>
              </li>
              <li className='membership-feature'>
                <img src={checkBoxIcon} alt='dark green check box' />
                <p>Virtual meetups</p>
              </li>
            </ul>
          </div>
        </div>

        <CTA parentComponent='membership-pro' />
      </div>
    );
  } else {
    return (
      <div className='membership-card'>
        <div className='membership-text-container'>
          <h3>Enterprise</h3>
          <p>
            <span>Custom</span>
          </p>
          <div className='separation-line'></div>
          <div className='membership-feature-wrapper'>
            <ul>
              <li className='membership-feature'>
                <img src={checkBoxIcon} alt='dark green check box' />
                <p>Team access</p>
              </li>
              <li className='membership-feature'>
                <img src={checkBoxIcon} alt='dark green check box' />
                <p>Private sessions</p>
              </li>
            </ul>
          </div>
        </div>

        <CTA parentComponent='membership-enterprise' />
      </div>
    );
  }
}
