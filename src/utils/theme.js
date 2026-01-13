/**
 * Theme configuration for light and dark modes
 * @param {boolean} darkMode - Whether dark mode is enabled
 * @returns {Object} Theme configuration object with styling classes
 */
export const getTheme = (darkMode) => ({
  bg: darkMode 
    ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
    : 'bg-gradient-to-br from-slate-50 via-white to-slate-100',
  navBg: darkMode 
    ? 'bg-slate-900/95 backdrop-blur-xl' 
    : 'bg-white/95 backdrop-blur-xl',
  cardBg: darkMode 
    ? 'bg-slate-900/80' 
    : 'bg-white',
  text: darkMode 
    ? 'text-slate-100' 
    : 'text-slate-900',
  textSecondary: darkMode 
    ? 'text-slate-400' 
    : 'text-slate-600',
  border: darkMode 
    ? 'border-slate-800' 
    : 'border-slate-200',
  hover: darkMode 
    ? 'hover:bg-slate-800' 
    : 'hover:bg-slate-50',
  shadow: darkMode 
    ? 'shadow-black/50' 
    : 'shadow-slate-300/50',
  accent: darkMode 
    ? 'bg-violet-500/10' 
    : 'bg-violet-100',
  accentText: darkMode 
    ? 'text-violet-400' 
    : 'text-violet-700',
});
