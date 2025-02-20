import arrowIcon from '../../assets/images/pattern-arrow.svg';

export function ReadingJourney() {
  return (
    <div className='reading-journey-section'>
      <section className='container reading-journey-container'>
        <h2>Your tech reading journey</h2>
        <ul>
          <li className='journey-step'>
            <div className='icon-wrapper'>
              <span>1</span>
              <img
                src={arrowIcon}
                alt='curved orange arrow facing right side'
              />
            </div>
            <p>Choose your membership tier</p>
          </li>
          <li className='journey-step'>
            <div className='icon-wrapper'>
              <span>2</span>
              <img
                src={arrowIcon}
                alt='curved orange arrow facing right side'
              />
            </div>
            <p>Get your monthly book selection</p>
          </li>
          <li className='journey-step'>
            <div className='icon-wrapper'>
              <span>3</span>
              <img
                src={arrowIcon}
                alt='curved orange arrow facing right side'
              />
            </div>
            <p>Join our discussion forums</p>
          </li>
          <li className='journey-step'>
            <div className='icon-wrapper'>
              <span>4</span>
              <img
                src={arrowIcon}
                alt='curved orange arrow facing right side'
              />
            </div>
            <p>Attend exclusive meetups</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
