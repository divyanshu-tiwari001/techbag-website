'use client'

import React from 'react';
import { TrendingUp, Shield, Zap, Award } from 'lucide-react';
import { useTheme } from '../../context/useTheme';
import { TRUST_INDICATORS } from '../../lib/constants';

// Map icon names to components
const iconMap = {
  TrendingUp,
  Shield,
  Zap,
  Award,
};

/**
 * Trust indicators section component
 */
function TrustIndicators() {
  const { darkMode, theme } = useTheme();

  return (
    <section className={`py-16 px-6 lg:px-8 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50/50'} border-y ${theme.border}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {TRUST_INDICATORS.map((indicator) => {
            const IconComponent = iconMap[indicator.icon];
            return (
              <div key={indicator.id} className="flex items-center justify-center space-x-3">
                <IconComponent className={`w-8 h-8 ${indicator.iconColor}`} aria-hidden="true" />
                <div>
                  <div className={`${theme.text} font-bold font-montserrat`}>
                    {indicator.title}
                  </div>
                  <div className={`${theme.textSecondary} text-sm font-inter`}>
                    {indicator.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;
