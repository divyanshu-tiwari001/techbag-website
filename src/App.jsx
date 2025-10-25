import React, { useState, useEffect } from "react";
import {
  ShoppingBag, Zap, Shield, Sparkles, X, Mail, Phone, MapPin, AlertCircle,
  Sun, Moon, ChevronRight, Star, Award, TrendingUp
} from "lucide-react";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => { setShowPopup(true); }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const handleButtonClick = () => setShowAlert(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = {
    bg: darkMode
      ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      : "bg-gradient-to-br from-slate-50 via-white to-slate-100",
    navBg: darkMode
      ? "bg-slate-900/95 backdrop-blur-xl"
      : "bg-white/95 backdrop-blur-xl",
    cardBg: darkMode ? "bg-slate-900/80" : "bg-white",
    text: darkMode ? "text-slate-100" : "text-slate-900",
    textSecondary: darkMode ? "text-slate-400" : "text-slate-600",
    border: darkMode ? "border-slate-800" : "border-slate-200",
    hover: darkMode ? "hover:bg-slate-800" : "hover:bg-slate-50",
    shadow: darkMode ? "shadow-black/50" : "shadow-slate-300/50",
    accent: darkMode ? "bg-violet-500/10" : "bg-violet-100",
    accentText: darkMode ? "text-violet-400" : "text-violet-700",
  };

  return (
    <div className={`min-h-screen ${theme.bg} font-sans transition-colors duration-500`}>
      {/* Custom Font Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .elegant-text {
          background: linear-gradient(135deg,#667eea 0%,#764ba2 50%,#f093fb 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .animate-float { animation: float 6s ease-in-out infinite;}
        @keyframes float {0%,100%{transform:translateY(0px);}50%{transform:translateY(-20px);} }
        .animate-slide-up {animation: slideUp 0.6s ease-out;}
        @keyframes slideUp {from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);} }
      `}
      </style>

      {/* Designer Credit Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-slide-up">
          <div className={`${darkMode ? "bg-slate-900" : "bg-white"} rounded-3xl p-10 max-w-lg w-full shadow-2xl transition-all border-2 ${darkMode ? "border-violet-500/30" : "border-violet-300"}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${theme.text} font-playfair`}>Designer Credit</h3>
              </div>
              <button onClick={() => setShowPopup(false)} className={`${theme.textSecondary} hover:${theme.text} transition-colors p-2 hover:bg-slate-800 rounded-lg`}><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-4">
              <p className={`${theme.text} text-lg leading-relaxed font-cormorant`}>
                This exquisite website design is crafted by <span className="font-bold elegant-text text-xl">Divyanshu Tiwari</span> using the remarkable <span className="font-bold elegant-text text-xl">CLAUDE AI</span>.
              </p>
              <div className={`p-4 rounded-xl ${theme.accent} border ${theme.border}`}>
                <p className={`${theme.text} text-base leading-relaxed font-inter`}>
                  📚 This website is part of a project given in <span className="font-bold text-violet-500">YIIC 5.0</span> by mentor <span className="font-bold text-violet-500">Mohd. Zahur</span>.
                </p>
              </div>
              <p className={`${theme.textSecondary} text-sm leading-relaxed font-inter`}>
                ⚠️ Note: This is an artistic website design demonstration. The interactive buttons and features are not functional for actual e-commerce transactions.
              </p>
            </div>
            <button onClick={() => setShowPopup(false)} className="mt-8 w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all font-montserrat tracking-wide">
              Understood, Let's Explore
            </button>
          </div>
        </div>
      )}

      {/* Under Development Alert */}
      {showAlert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? "bg-slate-900" : "bg-white"} rounded-3xl p-10 max-w-lg w-full shadow-2xl border-2 ${darkMode ? "border-amber-500/30" : "border-amber-300"}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500">
                  <AlertCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${theme.text} font-playfair`}>Feature Unavailable</h3>
              </div>
              <button onClick={() => setShowAlert(false)} className={`${theme.textSecondary} hover:${theme.text} transition-colors p-2 hover:bg-slate-800 rounded-lg`}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className={`${theme.text} text-lg leading-relaxed mb-4 font-cormorant`}>This feature is currently not operational. The website is in demonstration mode.</p>
            <p className={`${theme.textSecondary} text-sm leading-relaxed mb-8 font-inter`}>This is a meticulously crafted design showcase presenting the visual layout and user interface. Complete functionality will be implemented in the production release.</p>
            <button onClick={() => setShowAlert(false)} className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all font-montserrat tracking-wide">Acknowledged</button>
          </div>
        </div>
      )}

      
      {/* Navbar */}
      <nav className={`${theme.navBg} shadow-lg ${theme.shadow} sticky top-0 z-40 border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <ShoppingBag className={`w-9 h-9 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-3xl font-bold elegant-text font-playfair tracking-tight">
                TechBag
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className={`${theme.textSecondary} hover:text-violet-500 transition-colors font-semibold font-montserrat text-sm tracking-wider uppercase`}>
                  Home
                </button>
                <button onClick={() => scrollToSection('products')} className={`${theme.textSecondary} hover:text-violet-500 transition-colors font-semibold font-montserrat text-sm tracking-wider uppercase`}>
                  Products
                </button>
                <button onClick={() => scrollToSection('about')} className={`${theme.textSecondary} hover:text-violet-500 transition-colors font-semibold font-montserrat text-sm tracking-wider uppercase`}>
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className={`${theme.textSecondary} hover:text-violet-500 transition-colors font-semibold font-montserrat text-sm tracking-wider uppercase`}>
                  Contact
                </button>
              </div>
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-xl ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-all ${theme.text} shadow-lg`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30">
                <Award className="w-5 h-5 text-violet-400" />
                <span className={`${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
                  Premium Collection 2025
                </span>
              </div>
              
              <h1 className={`text-6xl lg:text-7xl font-bold ${theme.text} leading-tight font-playfair`}>
                Elevate Your
                <span className="block elegant-text mt-2 text-7xl lg:text-8xl">
                  Journey
                </span>
              </h1>
              
              <p className={`text-xl ${theme.textSecondary} leading-relaxed font-cormorant`}>
                Experience the pinnacle of intelligent design where <span className="font-semibold text-violet-500">artificial intelligence</span> meets <span className="font-semibold text-fuchsia-500">artisanal craftsmanship</span>. Each piece is meticulously tailored to complement your distinguished lifestyle.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className={`${theme.cardBg} p-4 rounded-xl border ${theme.border}`}>
                  <div className="text-3xl font-bold elegant-text font-montserrat">10K+</div>
                  <div className={`text-sm ${theme.textSecondary} font-inter`}>Happy Clients</div>
                </div>
                <div className={`${theme.cardBg} p-4 rounded-xl border ${theme.border}`}>
                  <div className="text-3xl font-bold elegant-text font-montserrat">50+</div>
                  <div className={`text-sm ${theme.textSecondary} font-inter`}>Products</div>
                </div>
                <div className={`${theme.cardBg} p-4 rounded-xl border ${theme.border}`}>
                  <div className="text-3xl font-bold elegant-text font-montserrat">4.9★</div>
                  <div className={`text-sm ${theme.textSecondary} font-inter`}>Rating</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-5 pt-4">
                <button 
                  onClick={handleButtonClick}
                  className="group bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white px-10 py-5 rounded-full font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transform hover:scale-105 transition-all font-montserrat tracking-wide text-lg flex items-center space-x-2"
                >
                  <span>Explore Collection</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleButtonClick}
                  className={`${darkMode ? 'bg-slate-800 text-violet-400 border-violet-500' : 'bg-white text-violet-600 border-violet-400'} px-10 py-5 rounded-full font-semibold border-2 hover:shadow-xl transition-all font-montserrat tracking-wide text-lg`}
                >
                  Customize Yours
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop" 
                alt="Premium Tech Backpack"
                className={`rounded-3xl shadow-2xl ${theme.shadow} w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700 border-2 ${theme.border} relative z-10`}
              />
              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl z-20 animate-float">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-montserrat">Bestseller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className={`py-16 px-6 lg:px-8 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50/50'} border-y ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="w-8 h-8 text-violet-500" />
              <div>
                <div className={`${theme.text} font-bold font-montserrat`}>Premium Quality</div>
                <div className={`${theme.textSecondary} text-sm font-inter`}>Certified Materials</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-fuchsia-500" />
              <div>
                <div className={`${theme.text} font-bold font-montserrat`}>2 Year Warranty</div>
                <div className={`${theme.textSecondary} text-sm font-inter`}>Full Protection</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-violet-500" />
              <div>
                <div className={`${theme.text} font-bold font-montserrat`}>Fast Shipping</div>
                <div className={`${theme.textSecondary} text-sm font-inter`}>2-3 Day Delivery</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-fuchsia-500" />
              <div>
                <div className={`${theme.text} font-bold font-montserrat`}>Award Winning</div>
                <div className={`${theme.textSecondary} text-sm font-inter`}>Design Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className={`py-24 px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className={`px-4 py-2 rounded-full ${theme.accent} ${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
                Why Choose Us
              </span>
            </div>
            <h2 className={`text-5xl font-bold ${theme.text} mb-6 font-playfair`}>Distinguished Excellence</h2>
            <p className={`text-xl ${theme.textSecondary} font-cormorant max-w-3xl mx-auto`}>Discover the unparalleled advantages that elevate TechBag beyond ordinary accessories</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className={`${theme.cardBg} p-10 rounded-3xl hover:shadow-2xl ${darkMode ? 'hover:shadow-violet-500/20' : 'hover:shadow-violet-300/30'} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}>
              <div className="bg-gradient-to-br from-violet-600 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-violet-500/50 group-hover:scale-110 transition-transform">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-3xl font-bold ${theme.text} mb-5 font-playfair`}>AI Personalization</h3>
              <p className={`${theme.textSecondary} leading-relaxed font-inter text-lg mb-6`}>
                Our sophisticated artificial intelligence meticulously analyzes your unique lifestyle patterns, curating the impeccable configuration exclusively for your distinguished needs.
              </p>
              <button onClick={handleButtonClick} className="text-violet-500 font-semibold font-inter flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className={`${theme.cardBg} p-10 rounded-3xl hover:shadow-2xl ${darkMode ? 'hover:shadow-fuchsia-500/20' : 'hover:shadow-fuchsia-300/30'} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}>
              <div className="bg-gradient-to-br from-fuchsia-600 to-pink-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-fuchsia-500/50 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-3xl font-bold ${theme.text} mb-5 font-playfair`}>Premium Materials</h3>
              <p className={`${theme.textSecondary} leading-relaxed font-inter text-lg mb-6`}>
                Crafted with military-specification materials and artisanal attention, ensuring your prized possessions remain impeccably protected in every environment.
              </p>
              <button onClick={handleButtonClick} className="text-fuchsia-500 font-semibold font-inter flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className={`${theme.cardBg} p-10 rounded-3xl hover:shadow-2xl ${darkMode ? 'hover:shadow-violet-500/20' : 'hover:shadow-violet-300/30'} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}>
              <div className="bg-gradient-to-br from-violet-600 to-indigo-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-violet-500/50 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-3xl font-bold ${theme.text} mb-5 font-playfair`}>Intelligent Design</h3>
              <p className={`${theme.textSecondary} leading-relaxed font-inter text-lg mb-6`}>
                Revolutionary compartmentalization and seamless technology integration, meticulously engineered for the discerning modern professional.
              </p>
              <button onClick={handleButtonClick} className="text-violet-500 font-semibold font-inter flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`py-24 px-6 lg:px-8 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className={`px-4 py-2 rounded-full ${theme.accent} ${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
                Our Products
              </span>
            </div>
            <h2 className={`text-5xl font-bold ${theme.text} mb-6 font-playfair`}>Curated Collection</h2>
            <p className={`text-xl ${theme.textSecondary} font-cormorant`}>Discover your quintessential companion</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className={`${theme.cardBg} rounded-3xl overflow-hidden shadow-xl ${theme.shadow} hover:shadow-2xl ${darkMode ? 'hover:shadow-violet-500/30' : 'hover:shadow-violet-300/40'} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=400&fit=crop" 
                  alt="TravelPro Max Backpack"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-full text-sm font-bold font-montserrat">
                  Trending
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button onClick={handleButtonClick} className="w-full bg-white text-slate-900 py-3 rounded-full font-bold hover:bg-violet-600 hover:text-white transition-colors font-montserrat">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-3xl font-bold ${theme.text} font-playfair`}>TravelPro Élite</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className={`${theme.text} font-bold font-inter`}>4.9</span>
                  </div>
                </div>
                <p className={`${theme.textSecondary} mb-6 font-inter leading-relaxed`}>Exquisitely crafted for the global nomad, featuring TSA-compliant compartments and integrated USB charging technology.</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-4xl font-bold elegant-text font-montserrat">₹8,999</span>
                    <span className={`${theme.textSecondary} text-sm line-through ml-2 font-inter`}>₹12,999</span>
                  </div>
                </div>
                <button 
                  onClick={handleButtonClick}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all font-montserrat font-bold text-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className={`${theme.cardBg} rounded-3xl overflow-hidden shadow-xl ${theme.shadow} hover:shadow-2xl ${darkMode ? 'hover:shadow-fuchsia-500/30' : 'hover:shadow-fuchsia-300/40'} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d8?w=500&h=400&fit=crop" 
                  alt="GameMaster Elite Backpack"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold font-montserrat">
                  Hot Sale
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button onClick={handleButtonClick} className="w-full bg-white text-slate-900 py-3 rounded-full font-bold hover:bg-fuchsia-600 hover:text-white transition-colors font-montserrat">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-3xl font-bold ${theme.text} font-playfair`}>GameMaster Supreme</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className={`${theme.text} font-bold font-inter`}>5.0</span>
                  </div>
                </div>
                <p className={`${theme.textSecondary} mb-6 font-inter leading-relaxed`}>Precision-engineered for professional gamers, with cushioned sanctuaries for consoles, peripherals, and premium headsets.</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-4xl font-bold elegant-text font-montserrat">₹12,499</span>
                    <span className={`${theme.textSecondary} text-sm line-through ml-2 font-inter`}>₹15,999</span>
                  </div>
                </div>
                <button 
                  onClick={handleButtonClick}
                  className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all font-montserrat font-bold text-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className={`${theme.cardBg} rounded-3xl overflow-hidden shadow-xl ${theme.shadow} hover:shadow-2xl ${darkMode ? 'hover:shadow-violet-500/30' : 'hover:shadow-violet-300/40'} transition-all transform hover:-translate-y-3 border-2 ${theme.border} group`}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&h=400&fit=crop" 
                  alt="WorkFlow Pro Backpack"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold font-montserrat">
                  Best Value
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button onClick={handleButtonClick} className="w-full bg-white text-slate-900 py-3 rounded-full font-bold hover:bg-violet-600 hover:text-white transition-colors font-montserrat">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-3xl font-bold ${theme.text} font-playfair`}>Executive ProFlow</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className={`${theme.text} font-bold font-inter`}>4.8</span>
                  </div>
                </div>
                <p className={`${theme.textSecondary} mb-6 font-inter leading-relaxed`}>Sophistication redefined for the corporate virtuoso, featuring intelligent organization for executive essentials and technology.</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-4xl font-bold elegant-text font-montserrat">₹6,999</span>
                    <span className={`${theme.textSecondary} text-sm line-through ml-2 font-inter`}>₹9,999</span>
                  </div>
                </div>
                <button 
                  onClick={handleButtonClick}
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all font-montserrat font-bold text-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-24 px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className={`px-4 py-2 rounded-full ${theme.accent} ${theme.accentText} text-sm font-bold font-montserrat tracking-wider uppercase`}>
                Testimonials
              </span>
            </div>
            <h2 className={`text-5xl font-bold ${theme.text} mb-6 font-playfair`}>Client Testimonials</h2>
            <p className={`text-xl ${theme.textSecondary} font-cormorant`}>Authentic experiences from our distinguished clientele</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className={`${theme.cardBg} p-10 rounded-3xl border-2 ${theme.border} hover:shadow-xl transition-all group`}>
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                  alt="Priya Sharma"
                  className="w-20 h-20 rounded-full mr-5 object-cover border-4 border-violet-500 group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className={`font-bold ${theme.text} text-lg font-montserrat`}>Priya Sharma</div>
                  <div className={`${theme.textSecondary} text-sm font-inter`}>Travel Photographer</div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className={`${theme.textSecondary} leading-relaxed italic font-cormorant text-lg`}>
                "The AI personalization is nothing short of extraordinary! It recommended the absolute perfect configuration for my travel photography equipment. Undoubtedly the finest investment of the year."
              </p>
            </div>

            <div className={`${theme.cardBg} p-10 rounded-3xl border-2 ${theme.border} hover:shadow-xl transition-all group`}>
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                  alt="Rahul Mehta"
                  className="w-20 h-20 rounded-full mr-5 object-cover border-4 border-fuchsia-500 group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className={`font-bold ${theme.text} text-lg font-montserrat`}>Rahul Mehta</div>
                  <div className={`${theme.textSecondary} text-sm font-inter`}>Software Architect</div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className={`${theme.textSecondary} leading-relaxed italic font-cormorant text-lg`}>
                "As a software architect, organization is paramount. TechBag's intelligent compartmentalization has revolutionized my daily commute—absolutely transformative."
              </p>
            </div>

            <div className={`${theme.cardBg} p-10 rounded-3xl border-2 ${theme.border} hover:shadow-xl transition-all group`}>
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
                  alt="Aarav Singh"
                  className="w-20 h-20 rounded-full mr-5 object-cover border-4 border-violet-500 group-hover:scale-110 transition-transform"
                />
                <div>
                  <div className={`font-bold ${theme.text} text-lg font-montserrat`}>Aarav Singh</div>
                  <div className={`${theme.textSecondary} text-sm font-inter`}>Esports Champion</div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className={`${theme.textSecondary} leading-relaxed italic font-cormorant text-lg`}>
                "Finally, a brand that truly comprehends the gaming professional! The cushioned sections protect my equipment flawlessly during tournaments. Exceptional craftsmanship!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
          
          <h2 className="text-5xl font-bold text-white mb-6 font-playfair">Join Our Elite Circle</h2>
          <p className="text-xl text-violet-100 mb-12 font-cormorant max-w-2xl mx-auto">Receive exclusive offerings, early access to new collections, and personalization insights delivered to your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-5 max-w-2xl mx-auto mb-16">
            <input
              type="email"
              placeholder="Enter your distinguished email"
              className="flex-1 px-8 py-5 rounded-full focus:outline-none focus:ring-4 focus:ring-white/50 bg-white/95 text-slate-900 font-inter shadow-xl placeholder:text-slate-400"
            />
            <button 
              onClick={handleButtonClick}
              className="bg-white text-violet-600 px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:shadow-white/40 transform hover:scale-105 transition-all font-montserrat tracking-wide whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center space-x-4 font-inter backdrop-blur-sm bg-white/10 py-4 rounded-xl">
              <Mail className="w-7 h-7" />
              <span className="text-lg">support@techbag.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4 font-inter backdrop-blur-sm bg-white/10 py-4 rounded-xl">
              <Phone className="w-7 h-7" />
              <span className="text-lg">+91 xxxxx 43210</span>
            </div>
            <div className="flex items-center justify-center space-x-4 font-inter backdrop-blur-sm bg-white/10 py-4 rounded-xl">
              <MapPin className="w-7 h-7" />
              <span className="text-lg">Mumbai, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-slate-950' : 'bg-slate-900'} text-white py-16 px-6 lg:px-8 border-t ${darkMode ? 'border-slate-800' : 'border-slate-700'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <ShoppingBag className="w-10 h-10 text-violet-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-500 rounded-full"></div>
                </div>
                <span className="text-3xl font-bold elegant-text font-playfair">TechBag</span>
              </div>
              <p className="text-slate-400 font-cormorant text-lg leading-relaxed mb-6">
                Elevating the art of intelligent accessories for the discerning modern individual. Where sophistication meets innovation.
              </p>
              <div className="flex space-x-4">
                <button onClick={handleButtonClick} className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group">
                  <span className="font-inter font-bold group-hover:scale-110 transition-transform">f</span>
                </button>
                <button onClick={handleButtonClick} className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group">
                  <span className="font-inter font-bold group-hover:scale-110 transition-transform">𝕏</span>
                </button>
                <button onClick={handleButtonClick} className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group">
                  <span className="font-inter font-bold group-hover:scale-110 transition-transform">in</span>
                </button>
                <button onClick={handleButtonClick} className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 transition-all flex items-center justify-center group">
                  <span className="font-inter font-bold group-hover:scale-110 transition-transform">📷</span>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 font-playfair">Navigation</h3>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">Home</button>
                <button onClick={() => scrollToSection('products')} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">Products</button>
                <button onClick={() => scrollToSection('about')} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">About Us</button>
                <button onClick={() => scrollToSection('contact')} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">Contact</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 font-playfair">Resources</h3>
              <div className="space-y-3">
                <button onClick={handleButtonClick} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">Privacy Policy</button>
                <button onClick={handleButtonClick} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">Terms of Service</button>
                <button onClick={handleButtonClick} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">Shipping Info</button>
                <button onClick={handleButtonClick} className="block text-slate-400 hover:text-violet-400 transition-colors font-inter hover:translate-x-2 transform duration-200">Return Policy</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 font-inter text-sm text-center md:text-left">
                © 2025 TechBag. All rights reserved. Exquisitely designed by <span className="elegant-text font-semibold">Divyanshu Tiwari</span>.
              </p>
              <p className="text-slate-500 font-inter text-xs">
                Crafted with passion and precision using cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
