'use client'

import React from 'react';
import Image from 'next/image';
import { Award, ChevronRight, Star } from 'lucide-react';
import { useTheme } from '../../context/useTheme';
import { STATS, HERO_IMAGE } from '../../lib/constants';

/**
 * Hero section component
 * @param {Object} props - Component props
 * @param {Function} props.onButtonClick - Callback for button clicks
 */
function Hero({ onButtonClick }) {
  const { darkMode, theme } = useTheme();

  return (
    <section id="home" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-float" 
        style={{animationDelay: '3s'}}
        aria-hidden="true"
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30">
              <Award className="w-5 h-5 text-violet-400" aria-hidden="true" />
              <span className={`${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
                Premium Collection 2025
              </span>
            </div>
            
            <h1 className={`text-6xl lg:text-7xl font-bold ${theme.text} leading-tight font-playfair`}>
              Elevate Your
              <span className="block elegant-text mt-2 text-7xl lg:text-8xl">
                Journey
              </span>
            </h1>
            
            <p className={`text-xl ${theme.textSecondary} leading-relaxed font-cormorant`}>
              Experience the pinnacle of intelligent design where{' '}
              <span className="font-semibold text-violet-500">artificial intelligence</span> meets{' '}
              <span className="font-semibold text-fuchsia-500">artisanal craftsmanship</span>. 
              Each piece is meticulously tailored to complement your distinguished lifestyle.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {STATS.map((stat) => (
                <div key={stat.id} className={`${theme.cardBg} p-4 rounded-xl border ${theme.border}`}>
                  <div className="text-3xl font-bold elegant-text font-montserrat">{stat.value}</div>
                  <div className={`text-sm ${theme.textSecondary} font-inter`}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <button 
                onClick={onButtonClick}
                className="group bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transform hover:scale-105 transition-all font-montserrat tracking-wide text-lg flex items-center space-x-2"
                aria-label="Explore our collection"
              >
                <span>Explore Collection</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button 
                onClick={onButtonClick}
                className={`${darkMode ? 'bg-slate-800 text-violet-400 border-violet-500' : 'bg-white text-violet-600 border-violet-400'} px-10 py-5 rounded-full font-semibold border-2 hover:shadow-xl transition-all font-montserrat tracking-wide text-lg`}
                aria-label="Customize your backpack"
              >
                Customize Yours
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-3xl opacity-30 animate-pulse" aria-hidden="true"></div>
            <div className={`rounded-3xl shadow-2xl ${theme.shadow} w-full h-[500px] relative transform hover:scale-105 transition-transform duration-700 border-2 ${theme.border} overflow-hidden z-10`}>
              <Image 
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-8 right-8 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl z-20 animate-float">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
                <span className="font-montserrat">Bestseller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
