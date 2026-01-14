'use client'

import React from 'react';
import { Sparkles, Shield, Zap, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/useTheme';
import { FEATURES } from '../../lib/constants';

// Map icon names to components
const iconMap = {
  Sparkles,
  Shield,
  Zap,
};

/**
 * Features section component
 * @param {Object} props - Component props
 * @param {Function} props.onButtonClick - Callback for button clicks
 */
function Features({ onButtonClick }) {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className={`px-4 py-2 rounded-full ${theme.accent} ${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
              Why Choose Us
            </span>
          </div>
          <h2 className={`text-5xl font-bold ${theme.text} mb-6 font-playfair`}>
            Distinguished Excellence
          </h2>
          <p className={`text-xl ${theme.textSecondary} font-cormorant max-w-3xl mx-auto`}>
            Discover the unparalleled advantages that elevate TechBag beyond ordinary accessories
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id}
                className={`${theme.cardBg} p-10 rounded-3xl hover:shadow-2xl ${feature.hoverShadow} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}
              >
                <div className={`${feature.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${feature.iconShadow} group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-10 h-10 text-white" aria-hidden="true" />
                </div>
                <h3 className={`text-3xl font-bold ${theme.text} mb-5 font-playfair`}>
                  {feature.title}
                </h3>
                <p className={`${theme.textSecondary} leading-relaxed font-inter text-lg mb-6`}>
                  {feature.description}
                </p>
                <button 
                  onClick={onButtonClick} 
                  className={`${feature.linkColor} font-semibold font-inter flex items-center space-x-2 group-hover:translate-x-2 transition-transform`}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
