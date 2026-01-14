'use client'

import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * Theme configuration for light and dark modes
 * @param {boolean} darkMode - Whether dark mode is enabled
 * @returns {Object} Theme configuration object with styling classes
 */
const getTheme = (darkMode) => ({
  bg: darkMode 
    ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
    : 'bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100',
  navBg: darkMode 
    ? 'bg-slate-900/95 backdrop-blur-xl' 
    : 'bg-white/95 backdrop-blur-xl',
  cardBg: darkMode 
    ? 'bg-slate-900' 
    : 'bg-white',
  text: darkMode 
    ? 'text-slate-100' 
    : 'text-slate-900',
  textSecondary: darkMode 
    ? 'text-slate-400' 
    : 'text-slate-700',
  border: darkMode 
    ? 'border-slate-800' 
    : 'border-slate-300',
  hover: darkMode 
    ? 'hover:bg-slate-800' 
    : 'hover:bg-slate-100',
  shadow: darkMode 
    ? 'shadow-black/50' 
    : 'shadow-slate-500/30',
  accent: darkMode 
    ? 'bg-violet-500/10' 
    : 'bg-violet-100',
  accentText: darkMode 
    ? 'text-violet-400' 
    : 'text-violet-700',
});

/**
 * ThemeProvider component that manages dark/light mode state
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const theme = getTheme(darkMode);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Store theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('techbag-theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techbag-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const value = {
    darkMode,
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
