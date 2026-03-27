import "@/App.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Instagram, 
  MessageCircle,
  Sparkles,
  Heart,
  Leaf
} from "lucide-react";

// Constants - Fixed WhatsApp with country code
const WHATSAPP_NUMBER = "918789028909";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in your products");
const INSTAGRAM_URL = "https://instagram.com/soilandscent";

// Images
const IMAGES = {
  hero: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/nagpei0h_ChatGPT%20Image%20Mar%2025%2C%202026%2C%2010_18_55%20PM.png",
  about: "https://images.pexels.com/photos/7234515/pexels-photo-7234515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

// Candle Products
const CANDLES = [
  {
    id: 1,
    name: "Rose Teddy Bear",
    description: "Handcrafted teddy with heart - Perfect gift",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/ff2rxjz2_Screenshot%202026-03-27%20090556.png",
    featured: true
  },
  {
    id: 2,
    name: "Golden Rose",
    description: "Elegant yellow rose candle",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/entbdhw8_Screenshot%202026-03-27%20090356.png"
  },
  {
    id: 3,
    name: "Crimson Rose",
    description: "Classic red rose candle",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/qhlmtnko_Screenshot%202026-03-27%20090850.png"
  },
  {
    id: 4,
    name: "Ruby Teddy",
    description: "Adorable red teddy candle",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/th52zdv0_Screenshot%202026-03-27%20090759.png"
  },
  {
    id: 5,
    name: "Bubble Cube",
    description: "Modern sculptural candle",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/462ytt2x_Screenshot%202026-03-27%20090156.png"
  },
  {
    id: 6,
    name: "Daisy Dream",
    description: "Delicate daisy flower candle",
    image: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/7885wsac_WhatsApp%20Image%202026-03-25%20at%2022.15.14.jpeg"
  },
  {
    id: 7,
    name: "Orange Blossom",
    description: "Vibrant citrus floral candle",
    image: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/c9fcaasz_WhatsApp%20Image%202026-03-25%20at%2022.15.17%20%281%29.jpeg"
  },
  {
    id: 8,
    name: "Pure Petal",
    description: "Elegant daisy on rustic wood",
    image: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/4haijl25_WhatsApp%20Image%202026-03-25%20at%2022.15.17.jpeg"
  }
];

// Architectural Candle Holders
const HOLDERS = [
  {
    id: 1,
    name: "Dome Collection",
    description: "Architectural dome & fluted holders set",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/5kqlmcxb_WhatsApp%20Image%202026-03-22%20at%2017.09.36.jpeg",
    featured: true
  },
  {
    id: 2,
    name: "Mughal Dome",
    description: "Heritage-inspired architecture",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/fjrmynsg_WhatsApp%20Image%202026-03-22%20at%2017.09.36%20%281%29.jpeg"
  },
  {
    id: 3,
    name: "Blush Bubble Set",
    description: "Modern pink bubble tray & holder",
    image: "https://customer-assets.emergentagent.com/job_candle-landing/artifacts/z965yeez_WhatsApp%20Image%202026-03-22%20at%2017.09.35.jpeg"
  }
];

// Header Component
const Header = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'header-glass border-b border-[#E6E2D6]/50' : 'bg-transparent'
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2" data-testid="logo">
            <Leaf className="w-6 h-6 text-[#C05C3D]" />
            <span className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[#2B2B2B]">
              Soil & Scent
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
            <a href="#candles" className="text-[#5C5C5C] hover:text-[#C05C3D] transition-colors text-sm font-medium tracking-wide">
              Candles
            </a>
            <a href="#holders" className="text-[#5C5C5C] hover:text-[#C05C3D] transition-colors text-sm font-medium tracking-wide">
              Holders
            </a>
            <a href="#story" className="text-[#5C5C5C] hover:text-[#C05C3D] transition-colors text-sm font-medium tracking-wide">
              Our Story
            </a>
            <a href="#contact" className="text-[#5C5C5C] hover:text-[#C05C3D] transition-colors text-sm font-medium tracking-wide">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon text-[#5C5C5C] hover:text-[#C05C3D]"
              aria-label="Instagram"
              data-testid="header-instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#candles"
              className="btn-primary bg-[#C05C3D] text-[#FDFBF7] px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#A84C30] transition-colors"
              data-testid="header-shop-btn"
            >
              Shop Now
            </a>
          </div>

          <button 
            className="md:hidden text-[#2B2B2B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFBF7] border-t border-[#E6E2D6]"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <a href="#candles" onClick={() => setMobileMenuOpen(false)} className="text-[#2B2B2B] text-lg font-medium">Candles</a>
              <a href="#holders" onClick={() => setMobileMenuOpen(false)} className="text-[#2B2B2B] text-lg font-medium">Holders</a>
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-[#2B2B2B] text-lg font-medium">Our Story</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#2B2B2B] text-lg font-medium">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-[#FDFBF7]" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C05C3D] mb-6 block">
              Handcrafted with Love
            </span>
            <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#2B2B2B] leading-[1.1] mb-8">
              Artisan Candles
              <br />
              <span className="italic">& Architectural</span>
              <br />
              Holders
            </h1>
            <p className="text-base md:text-lg font-light leading-relaxed text-[#5C5C5C] mb-10 max-w-lg">
              Transform your space with our collection of unique, hand-crafted candles 
              and stunning architectural holders. Each piece tells a story of nature, warmth, and artisanal beauty.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#candles"
                className="btn-primary bg-[#C05C3D] text-[#FDFBF7] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#A84C30] transition-colors inline-flex items-center gap-2"
                data-testid="hero-cta-button"
              >
                <Sparkles className="w-4 h-4" />
                Explore Collection
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-[#2B2B2B] px-8 py-4 border border-[#2B2B2B] text-sm font-semibold uppercase tracking-widest hover:bg-[#2B2B2B] hover:text-[#FDFBF7] transition-colors inline-flex items-center gap-2"
                data-testid="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C05C3D]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#8B9A8B]/10 rounded-full blur-2xl" />
              <img 
                src={IMAGES.hero}
                alt="Soil and Scent artisan candles collection"
                className="hero-image w-full h-[400px] md:h-[550px] object-cover shadow-2xl"
                data-testid="hero-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product, index, featured }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`product-card bg-[#FDFBF7] border border-[#E6E2D6] group cursor-pointer ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      data-testid={`product-card-${product.id}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-full' : ''}`}>
        <img 
          src={product.image}
          alt={product.name}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            featured ? 'h-full min-h-[400px] md:min-h-[624px]' : 'h-[300px]'
          }`}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#2B2B2B]/70 to-transparent">
          <h3 className={`font-['Cormorant_Garamond'] font-medium text-[#FDFBF7] ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}>
            {product.name}
          </h3>
          <p className="text-[#FDFBF7]/80 text-sm mt-2">{product.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Candles Section
const CandlesSection = () => {
  return (
    <section id="candles" className="py-24 md:py-32 bg-[#F4F1EA]" data-testid="candles-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C05C3D] mb-4 block">
            Our Collection
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light tracking-tight text-[#2B2B2B]">
            Handcrafted Candles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CANDLES.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              featured={product.featured}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in your handcrafted candles")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#C05C3D] text-[#FDFBF7] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#A84C30] transition-colors inline-flex items-center gap-2"
            data-testid="candles-cta-btn"
          >
            <Heart className="w-4 h-4" />
            Order via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Holders Section
const HoldersSection = () => {
  return (
    <section id="holders" className="py-24 md:py-32 bg-[#FDFBF7]" data-testid="holders-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C05C3D] mb-4 block">
            Elegant Decor
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light tracking-tight text-[#2B2B2B]">
            Architectural Candle Holders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {HOLDERS.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              featured={product.featured}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in your architectural candle holders")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#C05C3D] text-[#FDFBF7] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#A84C30] transition-colors inline-flex items-center gap-2"
            data-testid="holders-cta-btn"
          >
            <Heart className="w-4 h-4" />
            Order via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Story Section
const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-[#F4F1EA]" data-testid="story-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#C05C3D]/5 -z-10" />
            <img 
              src={IMAGES.about}
              alt="Artisan hand-pouring candles in workshop"
              className="w-full h-[400px] md:h-[550px] object-cover"
              data-testid="story-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pl-8"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C05C3D] mb-6 block">
              Our Story
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light tracking-tight text-[#2B2B2B] mb-8 leading-tight">
              Where Nature Meets
              <br />
              <span className="italic">Artisan Craft</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-[#5C5C5C]">
              <p>
                Born from a deep love for nature and the art of candle-making, Soil & Scent 
                brings you handcrafted pieces that transform ordinary moments into extraordinary 
                experiences.
              </p>
              <p>
                Each candle is carefully hand-poured with premium, eco-friendly ingredients. 
                Our signature designs — from delicate flower petals to charming teddy bears and 
                stunning architectural holders — are created to bring warmth, beauty, and a touch 
                of nature into your home.
              </p>
              <p>
                We believe in the power of small moments. A flickering flame, a gentle fragrance, 
                a beautiful design — these simple pleasures make life richer.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-['Cormorant_Garamond'] font-semibold text-[#C05C3D]">100%</div>
                <div className="text-sm text-[#5C5C5C]">Handcrafted</div>
              </div>
              <div className="w-px h-12 bg-[#E6E2D6]" />
              <div>
                <div className="text-3xl font-['Cormorant_Garamond'] font-semibold text-[#C05C3D]">Eco</div>
                <div className="text-sm text-[#5C5C5C]">Friendly</div>
              </div>
              <div className="w-px h-12 bg-[#E6E2D6]" />
              <div>
                <div className="text-3xl font-['Cormorant_Garamond'] font-semibold text-[#C05C3D]">Love</div>
                <div className="text-sm text-[#5C5C5C]">In Every Pour</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const FooterSection = () => {
  return (
    <footer id="contact" className="bg-[#2B2B2B] py-20 md:py-28" data-testid="footer-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-[#C05C3D]" />
              <span className="font-['Cormorant_Garamond'] text-3xl font-medium text-[#FDFBF7]">
                Soil & Scent
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[#FDFBF7] mb-6 leading-tight">
              Let's Connect
            </h2>
            <p className="text-[#FDFBF7]/70 text-base leading-relaxed mb-8 max-w-md">
              Have questions or want to place a custom order? We'd love to hear from you.
              Reach out and let's create something beautiful together.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#C05C3D] text-[#FDFBF7] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#A84C30] transition-colors inline-flex items-center gap-2"
              data-testid="footer-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4" />
              Start a Conversation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C05C3D] mb-4">
                Follow Us
              </h4>
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-[#FDFBF7] text-lg hover:text-[#C05C3D] transition-colors inline-flex items-center gap-2 md:flex-row-reverse"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
                @soilandscent
              </a>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C05C3D] mb-4">
                WhatsApp
              </h4>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-[#FDFBF7] text-lg hover:text-[#C05C3D] transition-colors inline-flex items-center gap-2 md:flex-row-reverse"
                data-testid="footer-phone"
              >
                <MessageCircle className="w-5 h-5" />
                +91 8789028909
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-[#FDFBF7]/10 flex justify-center">
          <p className="text-[#FDFBF7]/50 text-sm">
            Handcrafted with <Heart className="w-3 h-3 inline text-[#C05C3D]" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Floating Button
const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50" data-testid="whatsapp-float-container">
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us on WhatsApp"
        data-testid="whatsapp-float-button"
      >
        <MessageCircle className="w-7 h-7" fill="white" />
      </motion.a>
      
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2B2B2B] text-[#FDFBF7] px-4 py-2 rounded text-sm whitespace-nowrap"
          >
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main App Component
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" data-testid="app-root">
      <Header 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <HeroSection />
        <CandlesSection />
        <HoldersSection />
        <StorySection />
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
