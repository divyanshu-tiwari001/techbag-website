import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Testimonial card component
 * @param {Object} props - Component props
 * @param {Object} props.testimonial - Testimonial data
 */
function TestimonialCard({ testimonial }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme.cardBg} p-10 rounded-3xl border-2 ${theme.border} hover:shadow-xl transition-all group`}>
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image}
          alt={testimonial.alt}
          loading="lazy"
          className={`w-20 h-20 rounded-full mr-5 object-cover border-4 ${testimonial.borderColor} group-hover:scale-110 transition-transform`}
        />
        <div>
          <div className={`font-bold ${theme.text} text-lg font-montserrat`}>
            {testimonial.name}
          </div>
          <div className={`${theme.textSecondary} text-sm font-inter`}>
            {testimonial.role}
          </div>
          <div className="flex items-center mt-1" role="img" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
      <p className={`${theme.textSecondary} leading-relaxed italic font-cormorant text-lg`}>
        &quot;{testimonial.text}&quot;
      </p>
    </div>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialCard;
