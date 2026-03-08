import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from "../assets/logo.png";

const GlassNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur-scroll scrolled py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex items-center gap-2"
          >
            <img 
              src={logo} 
              alt="Tamasination3D Logo" 
              className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          </motion.div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/5 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-xs font-black uppercase tracking-widest text-theme-muted hover:text-theme transition-colors hover-underline py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle Desktop */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-dark border border-white/10 text-white hover:border-neon-cyan transition-all shadow-lg"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-neon-cyan" /> : <Moon className="w-5 h-5 text-neon-purple" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#contact'}
              className="bg-neon-blue text-white px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all"
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg glass-dark border border-white/10 text-white"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-neon-cyan" /> : <Moon className="w-5 h-5 text-neon-purple" />}
          </motion.button>
          <button
            className="text-theme hover:text-neon-cyan transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="md:hidden glass-dark border-y border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase tracking-tighter text-theme-muted hover:text-theme transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <div className="w-2 h-2 rounded-full bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-neon-blue text-white py-5 rounded-2xl font-black uppercase tracking-widest mt-4 shadow-xl"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default GlassNavbar;
