# TechBag - Premium Intelligent Accessories

A beautifully crafted, responsive e-commerce website showcasing premium tech backpacks and accessories. This is a design demonstration project featuring modern UI/UX patterns, smooth animations, and comprehensive accessibility features.

## 🎨 Design Credits

This exquisite website design is crafted by **Divyanshu Tiwari** using **Claude AI** as part of the **YIIC 5.0** project mentored by **Mohd. Zahur**.

## ⚠️ Important Notice

This is a **design showcase and demonstration project**. The interactive buttons and e-commerce features are not functional for actual transactions. This project demonstrates:
- Modern React architecture and best practices
- Component-based design patterns
- Accessibility-first approach
- Responsive design principles
- Theme management with dark/light modes

## ✨ Features

### Design & UI/UX
- 🌓 **Dark/Light Mode** - Fully functional theme toggle with localStorage persistence
- 📱 **Responsive Design** - Mobile-first approach with hamburger menu
- ✨ **Smooth Animations** - Floating elements, slide-ups, hover effects
- 🎨 **Gradient Aesthetics** - Beautiful color gradients and modern styling
- 🖼️ **Lazy Loading** - Optimized image loading for better performance

### Accessibility
- ♿ **ARIA Labels** - Comprehensive ARIA attributes on all interactive elements
- ⌨️ **Keyboard Navigation** - Full keyboard support with ESC to close modals
- 🔍 **Descriptive Alt Text** - Meaningful alternative text for all images
- 🎯 **Skip to Content** - Skip navigation link for screen readers
- 🎨 **Focus Indicators** - Visible focus states on interactive elements

### Architecture
- 🏗️ **Component-Based** - Well-organized, modular React components
- 🎭 **Context API** - Theme management using React Context
- 🪝 **Custom Hooks** - Reusable `useTheme` hook
- 🛡️ **Error Boundary** - Graceful error handling
- 📋 **PropTypes** - Type checking on all components
- 🎯 **Clean Code** - Main App.jsx reduced to <100 lines

### User Experience
- 📧 **Email Validation** - Client-side validation for newsletter subscription
- 💾 **LocalStorage** - Remembers theme preference and popup dismissal
- 🎪 **Smart Popups** - Non-intrusive popups with keyboard support
- 📊 **Trust Indicators** - Premium quality, warranty, shipping badges
- ⭐ **Product Ratings** - Star ratings and pricing information

## 🛠️ Technology Stack

### Core
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Next-generation frontend build tool
- **Tailwind CSS 4.1.16** - Utility-first CSS framework

### Icons & Fonts
- **Lucide React** - Beautiful, customizable icon library
- **Google Fonts** - Playfair Display, Cormorant Garamond, Inter, Montserrat

### Development
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing with Autoprefixer
- **PropTypes** - Runtime type checking

## 📁 Project Structure

```
techbag-website/
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   ├── Features/
│   │   │   └── Features.jsx
│   │   ├── Products/
│   │   │   ├── Products.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   └── TestimonialCard.jsx
│   │   ├── Newsletter/
│   │   │   └── Newsletter.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Popups/
│   │   │   ├── DesignerCreditPopup.jsx
│   │   │   └── FeatureAlertPopup.jsx
│   │   └── TrustIndicators/
│   │       └── TrustIndicators.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── ThemeProvider.jsx
│   ├── hooks/
│   │   └── useTheme.js
│   ├── utils/
│   │   ├── theme.js
│   │   └── constants.js
│   ├── App.jsx (78 lines)
│   ├── main.jsx
│   ├── index.css
│   └── custom.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/divyanshu-tiwari001/techbag-website.git
cd techbag-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎯 Key Components

### ThemeProvider & useTheme
- Manages global dark/light theme state
- Persists preference to localStorage
- Provides theme configuration to all components

### Header
- Sticky navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Theme toggle button

### Hero
- Eye-catching landing section
- Statistics showcase
- Call-to-action buttons

### Products
- Grid layout of product cards
- Hover effects and animations
- Quick view functionality

### Newsletter
- Email validation
- Contact information display
- Responsive layout

### Popups
- Designer credit (shown once per session)
- Feature alerts for demo buttons
- Keyboard accessible (ESC to close)
- Body scroll locking

## 🎨 Customization

### Theme Colors
Modify `src/utils/theme.js` to customize theme colors and styles.

### Product Data
Update `src/utils/constants.js` to add/modify:
- Products
- Testimonials
- Features
- Contact information
- Navigation links

### Fonts
Edit `index.html` to change Google Fonts imports.

### Animations
Customize animations in `src/custom.css`.

## ⚡ Performance Optimizations

- ✅ Lazy loading for images
- ✅ Non-blocking font loading
- ✅ Optimized bundle size
- ✅ Minimal re-renders with React Context
- ✅ Production build optimizations with Vite

## 🔮 Future Enhancements

- [ ] Backend integration for actual e-commerce functionality
- [ ] Shopping cart implementation
- [ ] User authentication
- [ ] Product search and filtering
- [ ] Checkout process
- [ ] Order management
- [ ] Admin dashboard
- [ ] Payment gateway integration
- [ ] Wishlist functionality
- [ ] Product reviews and ratings

## 📝 Known Limitations

- This is a **design demonstration only**
- No actual e-commerce functionality
- No backend or database integration
- Static product data
- Form submissions do not persist
- Payment processing not implemented

## 🤝 Contributing

This is a demonstration project, but feedback and suggestions are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share your ideas for enhancements

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Divyanshu Tiwari**

Created with passion using Claude AI as part of the YIIC 5.0 project.

---

**Note**: This website serves as a design and architecture showcase. All product images are sourced from Unsplash and are used for demonstration purposes only.
