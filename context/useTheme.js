'use client'

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * Custom hook to access theme context
 * @returns {Object} Theme context value containing theme
 * @throws {Error} If used outside of ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
