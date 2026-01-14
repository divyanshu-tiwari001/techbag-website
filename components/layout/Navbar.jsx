'use client'

import React, { useState } from 'react';
import { ShoppingBag, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/useTheme';
import { NAV_LINKS } from '../../lib/constants';

/**
 * Header component with navigation and theme toggle
 */
function Navbar() {
  const { darkMode, theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${theme.navBg} shadow-lg ${theme.shadow} sticky top-0 z-40 border-b ${theme.border}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <ShoppingBag 
                className={`w-9 h-9 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`} 
                aria-hidden="true"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse" aria-hidden="true"></div>
            </div>
            <span className="text-3xl font-bold elegant-text font-playfair tracking-tight">
              TechBag
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className={`${theme.textSecondary} hover:text-violet-500 transition-colors font-semibold font-montserrat text-sm tracking-wider uppercase`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-all ${theme.text} shadow-lg`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-3 rounded-xl ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-all ${theme.text} shadow-lg`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${theme.border}`}>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className={`${theme.textSecondary} hover:text-violet-500 transition-colors font-semibold font-montserrat text-sm tracking-wider uppercase text-left py-2`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
