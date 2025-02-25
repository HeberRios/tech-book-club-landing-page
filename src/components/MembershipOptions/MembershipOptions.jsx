import { MembershipCard } from '../MembershipCard/MembershipCard';
import './MembershipOptions.css';

export function MembershipOptions() {
  return (
    <section id='memberships' className='memberships-section'>
      <h2>Membership options</h2>
      <div className='membership-options-wrapper'>
        <MembershipCard membershipOption='starter' />
        <MembershipCard membershipOption='pro' />
        <MembershipCard membershipOption='enterprise' />
      </div>
    </section>
  );
}
