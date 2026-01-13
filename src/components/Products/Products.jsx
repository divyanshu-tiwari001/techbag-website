import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../hooks/useTheme';
import { PRODUCTS } from '../../utils/constants';
import ProductCard from './ProductCard';

/**
 * Products section component
 * @param {Object} props - Component props
 * @param {Function} props.onButtonClick - Callback for button clicks
 */
function Products({ onButtonClick }) {
  const { darkMode, theme } = useTheme();

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
          {PRODUCTS.map((product) => (
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

Products.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Products;
