import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Sparkles, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Designer credit popup component
 * @param {Object} props - Component props
 * @param {boolean} props.show - Whether to show the popup
 * @param {Function} props.onClose - Callback to close the popup
 */
function DesignerCreditPopup({ show, onClose }) {
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
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-slide-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="designer-credit-title"
    >
      <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-3xl p-10 max-w-lg w-full shadow-2xl transform transition-all border-2 ${darkMode ? 'border-violet-500/30' : 'border-violet-300'}`}>
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600">
              <Sparkles className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <h3 id="designer-credit-title" className={`text-2xl font-bold ${theme.text} font-playfair`}>
              Designer Credit
            </h3>
          </div>
          <button 
            onClick={onClose}
            className={`${theme.textSecondary} hover:${theme.text} transition-colors p-2 hover:bg-slate-800 rounded-lg`}
            aria-label="Close designer credit popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <p className={`${theme.text} text-lg leading-relaxed font-cormorant`}>
            This exquisite website design is crafted by{' '}
            <span className="font-bold elegant-text text-xl">Divyanshu Tiwari</span>{' '}
            using the remarkable{' '}
            <span className="font-bold elegant-text text-xl">CLAUDE AI</span>.
          </p>
          <div className={`p-4 rounded-xl ${theme.accent} border ${theme.border}`}>
            <p className={`${theme.text} text-base leading-relaxed font-inter`}>
              📚 This website is part of a project given in{' '}
              <span className="font-bold text-violet-500">YIIC 5.0</span> by mentor{' '}
              <span className="font-bold text-violet-500">Mohd. Zahur</span>.
            </p>
          </div>
          <p className={`${theme.textSecondary} text-sm leading-relaxed font-inter`}>
            ⚠️ Note: This is an artistic website design demonstration. The interactive buttons and features are not functional for actual e-commerce transactions.
          </p>
        </div>
        <button 
          onClick={onClose}
          className="mt-8 w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all font-montserrat tracking-wide"
          aria-label="Acknowledge and close popup"
        >
          Understood, Let&apos;s Explore
        </button>
      </div>
    </div>
  );
}

DesignerCreditPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DesignerCreditPopup;
