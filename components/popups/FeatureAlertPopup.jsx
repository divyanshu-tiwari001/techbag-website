'use client'

import React, { useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { useTheme } from '../../context/useTheme';

/**
 * Feature alert popup component to inform users about demo functionality
 * @param {Object} props - Component props
 * @param {boolean} props.show - Whether to show the popup
 * @param {Function} props.onClose - Callback to close the popup
 */
function FeatureAlertPopup({ show, onClose }) {
  const { darkMode, theme } = useTheme();

  // Handle ESC key to close popup
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && show) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [show, onClose]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feature-alert-title"
    >
      <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-3xl p-10 max-w-lg w-full shadow-2xl transform transition-all border-2 ${darkMode ? 'border-amber-500/30' : 'border-amber-300'}`}>
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
              <AlertCircle className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <h3 id="feature-alert-title" className={`text-2xl font-bold ${theme.text} font-playfair`}>
              Feature Unavailable
            </h3>
          </div>
          <button 
            onClick={onClose}
            className={`${theme.textSecondary} hover:${theme.text} transition-colors p-2 hover:bg-slate-800 rounded-lg`}
            aria-label="Close feature alert popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className={`${theme.text} text-lg leading-relaxed mb-4 font-cormorant`}>
          This feature is currently not operational. The website is in demonstration mode.
        </p>
        <p className={`${theme.textSecondary} text-sm leading-relaxed mb-8 font-inter`}>
          This is a meticulously crafted design showcase presenting the visual layout and user interface. Complete functionality will be implemented in the production release.
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all font-montserrat tracking-wide"
          aria-label="Acknowledge feature limitation"
        >
          Acknowledged
        </button>
      </div>
    </div>
  );
}

export default FeatureAlertPopup;
