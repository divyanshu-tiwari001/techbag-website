'use client'

import React, { useMemo } from 'react';
import { useTheme } from '../../context/useTheme';
import { PRODUCTS } from '../../lib/constants';
import ProductCard from '../ui/ProductCard';

/**
 * Products section component
 * @param {Object} props - Component props
 * @param {Function} props.onButtonClick - Callback for button clicks
 */
function Products({ onButtonClick }) {
  const { darkMode, theme } = useTheme();

  // Runtime patch: replace failing Unsplash image with working one
  const patchedProducts = useMemo(() => {
    return PRODUCTS.map((product) => {
      if (product.image && product.image.includes('photo-1577982787983-e07c6730f2d8')) {
        return {
          ...product,
          image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=400&fit=crop'
        };
      }
      return product;
    });
  }, []);

  return (
    <section id="products" className={`py-24 px-6 lg:px-8 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50/50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className={`px-4 py-2 rounded-full ${theme.accent} ${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
              Our Products
            </span>
          </div>
          <h2 className={`text-5xl font-bold ${theme.text} mb-6 font-playfair`}>
            Curated Collection
          </h2>
          <p className={`text-xl ${theme.textSecondary} font-cormorant`}>
            Discover your quintessential companion
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {patchedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onButtonClick={onButtonClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
