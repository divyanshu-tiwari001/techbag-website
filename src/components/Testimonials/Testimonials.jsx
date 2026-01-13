import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { TESTIMONIALS } from '../../utils/constants';
import TestimonialCard from './TestimonialCard';

/**
 * Testimonials section component
 */
function Testimonials() {
  const { theme } = useTheme();

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className={`px-4 py-2 rounded-full ${theme.accent} ${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
              Testimonials
            </span>
          </div>
          <h2 className={`text-5xl font-bold ${theme.text} mb-6 font-playfair`}>
            Client Testimonials
          </h2>
          <p className={`text-xl ${theme.textSecondary} font-cormorant`}>
            Authentic experiences from our distinguished clientele
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
