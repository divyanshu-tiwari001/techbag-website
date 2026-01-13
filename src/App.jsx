import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { useTheme } from './hooks/useTheme';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TrustIndicators from './components/TrustIndicators/TrustIndicators';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import DesignerCreditPopup from './components/Popups/DesignerCreditPopup';
import FeatureAlertPopup from './components/Popups/FeatureAlertPopup';
import './custom.css';

/**
 * Main application content component
 */
function AppContent() {
  const { theme } = useTheme();
  const [showDesignerPopup, setShowDesignerPopup] = useState(false);
  const [showFeatureAlert, setShowFeatureAlert] = useState(false);

  // Show designer popup on first mount (check localStorage for preference)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('techbag-designer-popup-seen');
    if (!hasSeenPopup) {
      setShowDesignerPopup(true);
    }
  }, []);

  const handleCloseDesignerPopup = () => {
    setShowDesignerPopup(false);
    localStorage.setItem('techbag-designer-popup-seen', 'true');
  };

  const handleButtonClick = () => {
    setShowFeatureAlert(true);
  };

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-500`}>
      <DesignerCreditPopup 
        show={showDesignerPopup} 
        onClose={handleCloseDesignerPopup} 
      />
      <FeatureAlertPopup 
        show={showFeatureAlert} 
        onClose={() => setShowFeatureAlert(false)} 
      />
      
      <Header />
      <main id="main-content">
        <Hero onButtonClick={handleButtonClick} />
        <TrustIndicators />
        <Features onButtonClick={handleButtonClick} />
        <Products onButtonClick={handleButtonClick} />
        <Testimonials />
        <Newsletter onButtonClick={handleButtonClick} />
      </main>
      <Footer onButtonClick={handleButtonClick} />
    </div>
  );
}

/**
 * Root application component
 */
export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
