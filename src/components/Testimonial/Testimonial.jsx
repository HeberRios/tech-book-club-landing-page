import { Star } from '../icons/Star';

export function Testimonial() {
  return (
    <div className='testimonial-section'>
      <div className='testimonial-container'>
        <div className='stars-wrapper'>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className='testimonial-text-container'>
          <blockquote>
            &quot;This book club transformed my technical reading from a
            solitary activity into an enriching community experience. The
            discussions are gold!&quot;
            <footer>
              <cite>Sarah Chen, Software Architect</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
