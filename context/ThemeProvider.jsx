'use client'

import React from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * Theme configuration with deep navy blue color palette
 * @returns {Object} Theme configuration object with styling classes
 */
const getTheme = () => ({
  bg: 'bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419]',
  navBg: 'bg-[#1a1f2e]/95 backdrop-blur-xl',
  cardBg: 'bg-[#1e2530]',
  text: 'text-slate-100',
  textSecondary: 'text-slate-400',
  border: 'border-[#2a3142]',
  hover: 'hover:bg-[#252b3a]',
  shadow: 'shadow-black/50',
  accent: 'bg-violet-500/10',
  accentText: 'text-violet-400',
});

/**
 * ThemeProvider component that provides deep navy theme
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export function ThemeProvider({ children }) {
  const theme = getTheme();

  const value = {
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
