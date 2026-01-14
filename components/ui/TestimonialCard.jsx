'use client'

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useTheme } from '../../context/useTheme';

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
        <div className={`relative w-20 h-20 rounded-full mr-5 border-4 ${testimonial.borderColor} group-hover:scale-110 transition-transform overflow-hidden`}>
          <Image 
            src={testimonial.image}
            alt={testimonial.alt}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
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

export default TestimonialCard;
