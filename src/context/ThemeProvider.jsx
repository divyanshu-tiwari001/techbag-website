import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';
import { getTheme } from '../utils/theme';

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

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
