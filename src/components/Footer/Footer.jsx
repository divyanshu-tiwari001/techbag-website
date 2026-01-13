import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingBag } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { NAV_LINKS, FOOTER_LINKS } from '../../utils/constants';

/**
 * Footer component
 * @param {Object} props - Component props
 * @param {Function} props.onButtonClick - Callback for button clicks
 */
function Footer({ onButtonClick }) {
  const { darkMode } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${darkMode ? 'bg-slate-950' : 'bg-slate-900'} text-white py-16 px-6 lg:px-8 border-t ${darkMode ? 'border-slate-800' : 'border-slate-700'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <ShoppingBag className="w-10 h-10 text-violet-400" aria-hidden="true" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full" aria-hidden="true"></div>
              </div>
              <span className="text-3xl font-bold elegant-text font-playfair">TechBag</span>
            </div>
            <p className="text-slate-400 font-cormorant text-lg leading-relaxed mb-6">
              Elevating the art of intelligent accessories for the discerning modern individual. Where sophistication meets innovation.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={onButtonClick} 
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group"
                aria-label="Visit our Facebook page"
              >
                <span className="font-inter font-bold group-hover:scale-110 transition-transform">f</span>
              </button>
              <button 
                onClick={onButtonClick} 
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group"
                aria-label="Visit our Twitter page"
              >
                <span className="font-inter font-bold group-hover:scale-110 transition-transform">𝕏</span>
              </button>
              <button 
                onClick={onButtonClick} 
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group"
                aria-label="Visit our LinkedIn page"
              >
                <span className="font-inter font-bold group-hover:scale-110 transition-transform">in</span>
              </button>
              <button 
                onClick={onButtonClick} 
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group"
                aria-label="Visit our Instagram page"
              >
                <span className="font-inter font-bold group-hover:scale-110 transition-transform">📷</span>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">Navigation</h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair">Resources</h3>
            <nav className="space-y-3" aria-label="Footer resources">
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={onButtonClick}
                  className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200"
                  aria-label={link.label}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 font-inter text-sm text-center md:text-left">
              © 2025 TechBag. All rights reserved. Exquisitely designed by{' '}
              <span className="elegant-text font-semibold">Divyanshu Tiwari</span>.
            </p>
            <p className="text-slate-500 font-inter text-xs">
              Crafted with passion and precision using cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Footer;
