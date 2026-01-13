import React from 'react';
import PropTypes from 'prop-types';

/**
 * Error boundary component to catch and handle errors in child components
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
          <div className="bg-slate-900/80 rounded-3xl p-10 max-w-lg w-full shadow-2xl border-2 border-red-500/30">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 mb-6">
                <span className="text-4xl">⚠️</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-100 mb-4 font-playfair">
                Oops! Something went wrong
              </h1>
              <p className="text-slate-400 mb-6 font-inter">
                We apologize for the inconvenience. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all font-montserrat"
                aria-label="Refresh page"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
