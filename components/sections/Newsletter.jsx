'use client'

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../lib/constants';

// Map icon names to components
const iconMap = {
  Mail,
  Phone,
  MapPin,
};

/**
 * Newsletter/Contact section component
 * @param {Object} props - Component props
 * @param {Function} props.onButtonClick - Callback for button clicks
 */
function Newsletter({ onButtonClick }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setEmail('');
    onButtonClick();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6">
          <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full">
            <span className="text-white text-sm font-bold font-montserrat tracking-wider uppercase">
              Stay Connected
            </span>
          </div>
        </div>
        
        <h2 className="text-5xl font-bold text-white mb-6 font-playfair">
          Join Our Elite Circle
        </h2>
        <p className="text-xl text-violet-100 mb-12 font-cormorant max-w-2xl mx-auto">
          Receive exclusive offerings, early access to new collections, and personalization insights delivered to your inbox
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 max-w-2xl mx-auto mb-4">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your distinguished email"
              className="w-full px-8 py-5 rounded-full focus:outline-none focus:ring-4 focus:ring-white/50 bg-white/95 text-slate-900 font-inter shadow-xl placeholder:text-slate-400"
              aria-label="Email address for newsletter"
              aria-invalid={!!emailError}
              aria-describedby={emailError ? 'email-error' : undefined}
            />
          </div>
          <button 
            onClick={handleSubscribe}
            className="bg-white text-violet-600 px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:shadow-white/40 transform hover:scale-105 transition-all font-montserrat tracking-wide whitespace-nowrap"
            aria-label="Subscribe to newsletter"
          >
            Subscribe Now
          </button>
        </div>
        
        {emailError && (
          <p id="email-error" className="text-red-200 mb-8 font-inter text-sm" role="alert">
            {emailError}
          </p>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white mt-12">
          {CONTACT_INFO.map((contact) => {
            const IconComponent = iconMap[contact.icon];
            return (
              <div 
                key={contact.id}
                className="flex items-center justify-center space-x-4 font-inter backdrop-blur-sm bg-white/10 py-4 rounded-xl"
              >
                <IconComponent className="w-7 h-7" aria-hidden="true" />
                <span className="text-lg">{contact.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
