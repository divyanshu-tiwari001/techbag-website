'use client'

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useTheme } from '../../context/useTheme';

/**
 * Product card component
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 * @param {Function} props.onButtonClick - Callback for button clicks
 */
function ProductCard({ product, onButtonClick }) {
  const { darkMode, theme } = useTheme();

  return (
    <div className={`${theme.cardBg} rounded-3xl overflow-hidden shadow-xl ${theme.shadow} hover:shadow-2xl ${darkMode ? product.hoverShadow : product.hoverShadow.replace('/30', '/40')} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}>
      <div className="relative overflow-hidden h-80">
        <Image 
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold font-montserrat`}>
          {product.badge}
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button 
            onClick={onButtonClick} 
            className="w-full bg-white text-slate-900 py-3 rounded-full font-bold hover:bg-violet-600 hover:text-white transition-colors font-montserrat"
            aria-label={`Quick view ${product.name}`}
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-3xl font-bold ${theme.text} font-playfair`}>
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
            <span className={`${theme.text} font-bold font-inter`} aria-label={`Rating: ${product.rating} out of 5 stars`}>
              {product.rating}
            </span>
          </div>
        </div>
        <p className={`${theme.textSecondary} mb-6 font-inter leading-relaxed`}>
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-4xl font-bold elegant-text font-montserrat" aria-label={`Current price ${product.price}`}>
              {product.price}
            </span>
            <span className={`${theme.textSecondary} text-sm line-through ml-2 font-inter`} aria-label={`Original price ${product.originalPrice}`}>
              {product.originalPrice}
            </span>
          </div>
        </div>
        <button 
          onClick={onButtonClick}
          className={`w-full bg-gradient-to-r ${product.buttonColor} text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all font-montserrat font-bold text-lg`}
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
