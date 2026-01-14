/**
 * Application-wide constants and data structures
 */

// Products data
export const PRODUCTS = [
  {
    id: 1,
    name: 'TravelPro Élite',
    rating: 4.9,
    price: '₹8,999',
    originalPrice: '₹12,999',
    description: 'Exquisitely crafted for the global nomad, featuring TSA-compliant compartments and integrated USB charging technology.',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=400&fit=crop',
    alt: 'TravelPro Max Backpack - Premium travel backpack with TSA-compliant compartments',
    badge: 'Trending',
    badgeColor: 'from-violet-600 to-fuchsia-600',
    buttonColor: 'from-violet-600 to-purple-600',
    hoverShadow: 'hover:shadow-violet-500/30',
  },
  {
    id: 2,
    name: 'GameMaster Supreme',
    rating: 5.0,
    price: '₹12,499',
    originalPrice: '₹15,999',
    description: 'Precision-engineered for professional gamers, with cushioned sanctuaries for consoles, peripherals, and premium headsets.',
    image: 'https://images.unsplash.com/photo-1577982787983-e07c6730f2d8?w=500&h=400&fit=crop',
    alt: 'GameMaster Elite Backpack - Professional gaming backpack with cushioned compartments',
    badge: 'Hot Sale',
    badgeColor: 'from-fuchsia-600 to-pink-600',
    buttonColor: 'from-fuchsia-600 to-pink-600',
    hoverShadow: 'hover:shadow-fuchsia-500/30',
  },
  {
    id: 3,
    name: 'Executive ProFlow',
    rating: 4.8,
    price: '₹6,999',
    originalPrice: '₹9,999',
    description: 'Sophistication redefined for the corporate virtuoso, featuring intelligent organization for executive essentials and technology.',
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&h=400&fit=crop',
    alt: 'WorkFlow Pro Backpack - Executive business backpack with smart organization',
    badge: 'Best Value',
    badgeColor: 'from-violet-600 to-indigo-600',
    buttonColor: 'from-violet-600 to-indigo-600',
    hoverShadow: 'hover:shadow-violet-500/30',
  },
];

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Travel Photographer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    alt: 'Portrait of Priya Sharma, professional travel photographer',
    borderColor: 'border-violet-500',
    text: 'The AI personalization is nothing short of extraordinary! It recommended the absolute perfect configuration for my travel photography equipment. Undoubtedly the finest investment of the year.',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'Software Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    alt: 'Portrait of Rahul Mehta, software architect',
    borderColor: 'border-fuchsia-500',
    text: 'As a software architect, organization is paramount. TechBag\'s intelligent compartmentalization has revolutionized my daily commute—absolutely transformative.',
  },
  {
    id: 3,
    name: 'Aarav Singh',
    role: 'Esports Champion',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    alt: 'Portrait of Aarav Singh, professional esports champion',
    borderColor: 'border-violet-500',
    text: 'Finally, a brand that truly comprehends the gaming professional! The cushioned sections protect my equipment flawlessly during tournaments. Exceptional craftsmanship!',
  },
];

// Trust indicators data
export const TRUST_INDICATORS = [
  {
    id: 1,
    icon: 'TrendingUp',
    iconColor: 'text-violet-500',
    title: 'Premium Quality',
    subtitle: 'Certified Materials',
  },
  {
    id: 2,
    icon: 'Shield',
    iconColor: 'text-fuchsia-500',
    title: '2 Year Warranty',
    subtitle: 'Full Protection',
  },
  {
    id: 3,
    icon: 'Zap',
    iconColor: 'text-violet-500',
    title: 'Fast Shipping',
    subtitle: '2-3 Day Delivery',
  },
  {
    id: 4,
    icon: 'Award',
    iconColor: 'text-fuchsia-500',
    title: 'Award Winning',
    subtitle: 'Design Excellence',
  },
];

// Features data
export const FEATURES = [
  {
    id: 1,
    icon: 'Sparkles',
    iconBg: 'bg-gradient-to-br from-violet-600 to-purple-700',
    iconShadow: 'shadow-violet-500/50',
    title: 'AI Personalization',
    description: 'Our sophisticated artificial intelligence meticulously analyzes your unique lifestyle patterns, curating the impeccable configuration exclusively for your distinguished needs.',
    linkColor: 'text-violet-500',
    hoverShadow: 'hover:shadow-violet-500/20',
  },
  {
    id: 2,
    icon: 'Shield',
    iconBg: 'bg-gradient-to-br from-fuchsia-600 to-pink-700',
    iconShadow: 'shadow-fuchsia-500/50',
    title: 'Premium Materials',
    description: 'Crafted with military-specification materials and artisanal attention, ensuring your prized possessions remain impeccably protected in every environment.',
    linkColor: 'text-fuchsia-500',
    hoverShadow: 'hover:shadow-fuchsia-500/20',
  },
  {
    id: 3,
    icon: 'Zap',
    iconBg: 'bg-gradient-to-br from-violet-600 to-indigo-700',
    iconShadow: 'shadow-violet-500/50',
    title: 'Intelligent Design',
    description: 'Revolutionary compartmentalization and seamless technology integration, meticulously engineered for the discerning modern professional.',
    linkColor: 'text-violet-500',
    hoverShadow: 'hover:shadow-violet-500/20',
  },
];

// Stats data
export const STATS = [
  {
    id: 1,
    value: '10K+',
    label: 'Happy Clients',
  },
  {
    id: 2,
    value: '50+',
    label: 'Products',
  },
  {
    id: 3,
    value: '4.9★',
    label: 'Rating',
  },
];

// Contact information
export const CONTACT_INFO = [
  {
    id: 1,
    icon: 'Mail',
    text: 'support@techbag.com',
  },
  {
    id: 2,
    icon: 'Phone',
    text: '+91 xxxxx 43210',
  },
  {
    id: 3,
    icon: 'MapPin',
    text: 'Mumbai, India',
  },
];

// Navigation links
export const NAV_LINKS = [
  { id: 1, label: 'Home', href: 'home' },
  { id: 2, label: 'Products', href: 'products' },
  { id: 3, label: 'About', href: 'about' },
  { id: 4, label: 'Contact', href: 'contact' },
];

// Footer links
export const FOOTER_LINKS = [
  { id: 1, label: 'Privacy Policy', href: '#' },
  { id: 2, label: 'Terms of Service', href: '#' },
  { id: 3, label: 'Shipping Info', href: '#' },
  { id: 4, label: 'Return Policy', href: '#' },
];

// Hero image
export const HERO_IMAGE = {
  src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop',
  alt: 'Premium Tech Backpack - Bestselling intelligent backpack with smart features',
};
