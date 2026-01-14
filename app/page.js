'use client'

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeProvider';
import { useTheme } from '../context/useTheme';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import Features from '../components/sections/Features';
import Products from '../components/sections/Products';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import DesignerCreditPopup from '../components/popups/DesignerCreditPopup';
import FeatureAlertPopup from '../components/popups/FeatureAlertPopup';

/**
 * Main application content component
 */
function AppContent() {
  const { theme } = useTheme();
  const [showDesignerPopup, setShowDesignerPopup] = useState(false);
  const [showFeatureAlert, setShowFeatureAlert] = useState(false);

  // Show designer popup on first mount
  // Force popup to show for testing/demonstration
  useEffect(() => {
    // Clear localStorage to ensure popup always shows for demo
    if (typeof window !== 'undefined') {
      localStorage.removeItem('techbag-designer-popup-seen');
    }
    
    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      setShowDesignerPopup(true);
    }, 500);
    
    return () => clearTimeout(timer);
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
      <a href="#main-content" className="skip-to-main">Skip to main content</a>
      <DesignerCreditPopup 
        show={showDesignerPopup} 
        onClose={handleCloseDesignerPopup} 
      />
      <FeatureAlertPopup 
        show={showFeatureAlert} 
        onClose={() => setShowFeatureAlert(false)} 
      />
      
      <Navbar />
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
 * Root page component
 */
export default function Home() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
