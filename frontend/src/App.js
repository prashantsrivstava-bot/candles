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

// Constants
const WHATSAPP_NUMBER = "8789028909";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in your candles");
const INSTAGRAM_URL = "https://instagram.com/soilandscent";

// Images from user assets
const IMAGES = {
  hero: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/nagpei0h_ChatGPT%20Image%20Mar%2025%2C%202026%2C%2010_18_55%20PM.png",
  product1: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/7885wsac_WhatsApp%20Image%202026-03-25%20at%2022.15.14.jpeg",
  product2: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/c9fcaasz_WhatsApp%20Image%202026-03-25%20at%2022.15.17%20%281%29.jpeg",
  product3: "https://customer-assets.emergentagent.com/job_b856dba4-22db-4c0d-a671-54195104353a/artifacts/4haijl25_WhatsApp%20Image%202026-03-25%20at%2022.15.17.jpeg",
  about: "https://images.pexels.com/photos/7234515/pexels-photo-7234515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

// Products data
const PRODUCTS = [
  {
    id: 1,
    name: "Daisy Dream",
    description: "Hand-poured daisy flower candle",
    image: IMAGES.product1
  },
  {
    id: 2,
    name: "Orange Blossom",
    description: "Vibrant citrus floral candle",
    image: IMAGES.product2
  },
  {
    id: 3,
    name: "Pure Petal",
    description: "Elegant daisy on rustic wood",
    image: IMAGES.product3
  }
];

// Testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    text: "These candles transformed my home into a sanctuary. The attention to detail is remarkable!",
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Ananya Patel",
    text: "Gifted the teddy bear candle to my mom. She absolutely loved it! Such unique designs.",
    location: "Bangalore"
  },
  {
    id: 3,
    name: "Riya Gupta",
    text: "The quality and fragrance are unmatched. These are now my go-to gifts for every occasion.",
    location: "Delhi"
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
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" data-testid="logo">
            <Leaf className="w-6 h-6 text-[#C05C3D]" />
            <span className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[#2B2B2B]">
              Soil & Scent
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
            <a href="#products" className="text-[#5C5C5C] hover:text-[#C05C3D] transition-colors text-sm font-medium tracking-wide">
              Shop
            </a>
            <a href="#story" className="text-[#5C5C5C] hover:text-[#C05C3D] transition-colors text-sm font-medium tracking-wide">
              Our Story
            </a>
            <a href="#contact" className="text-[#5C5C5C] hover:text-[#C05C3D] transition-colors text-sm font-medium tracking-wide">
              Contact
            </a>
          </nav>

          {/* Right Side */}
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
              href="#products"
              className="btn-primary bg-[#C05C3D] text-[#FDFBF7] px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#A84C30] transition-colors"
              data-testid="header-shop-btn"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-[#2B2B2B] text-lg font-medium">Shop</a>
              <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-[#2B2B2B] text-lg font-medium">Our Story</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#2B2B2B] text-lg font-medium">Contact</a>
              <div className="flex items-center gap-4 pt-4 border-t border-[#E6E2D6]">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#5C5C5C]">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
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
          {/* Text Content */}
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
              Artisan Candles,
              <br />
              <span className="italic">Hand-Poured</span>
              <br />
              with Love
            </h1>
            <p className="text-base md:text-lg font-light leading-relaxed text-[#5C5C5C] mb-10 max-w-lg">
              Transform your space with our collection of unique, hand-crafted candles. 
              Each piece tells a story of nature, warmth, and artisanal beauty.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#products"
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

          {/* Hero Image */}
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
                alt="Soil and Scent artisan candles collection featuring teddy bear and flower designs"
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

// Products Section
const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#F4F1EA]" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
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
            Crafted for Your Sanctuary
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Large Product - spans 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 product-card bg-[#FDFBF7] border border-[#E6E2D6] group cursor-pointer"
            data-testid="product-card-1"
          >
            <div className="relative overflow-hidden">
              <img 
                src={PRODUCTS[0].image}
                alt={PRODUCTS[0].name}
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#2B2B2B]/70 to-transparent">
                <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[#FDFBF7]">
                  {PRODUCTS[0].name}
                </h3>
                <p className="text-[#FDFBF7]/80 text-sm mt-2">{PRODUCTS[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Tall Product - spans 4 columns, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 md:row-span-2 product-card bg-[#FDFBF7] border border-[#E6E2D6] group cursor-pointer"
            data-testid="product-card-2"
          >
            <div className="relative overflow-hidden h-full">
              <img 
                src={PRODUCTS[1].image}
                alt={PRODUCTS[1].name}
                className="w-full h-[300px] md:h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#2B2B2B]/70 to-transparent">
                <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[#FDFBF7]">
                  {PRODUCTS[1].name}
                </h3>
                <p className="text-[#FDFBF7]/80 text-sm mt-2">{PRODUCTS[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Third Product - spans 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-8 product-card bg-[#FDFBF7] border border-[#E6E2D6] group cursor-pointer"
            data-testid="product-card-3"
          >
            <div className="relative overflow-hidden">
              <img 
                src={PRODUCTS[2].image}
                alt={PRODUCTS[2].name}
                className="w-full h-[300px] md:h-[350px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#2B2B2B]/70 to-transparent">
                <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[#FDFBF7]">
                  {PRODUCTS[2].name}
                </h3>
                <p className="text-[#FDFBF7]/80 text-sm mt-2">{PRODUCTS[2].description}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#C05C3D] text-[#FDFBF7] px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#A84C30] transition-colors inline-flex items-center gap-2"
            data-testid="products-cta-btn"
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
    <section id="story" className="py-24 md:py-32 bg-[#FDFBF7]" data-testid="story-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
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

          {/* Content */}
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
                Our signature designs — from delicate flower petals to charming teddy bears — 
                are created to bring warmth, beauty, and a touch of nature into your home.
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
          {/* Left - Brand & CTA */}
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

          {/* Right - Links & Social */}
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
                +91 {WHATSAPP_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
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
        <ProductsSection />
        <StorySection />
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
