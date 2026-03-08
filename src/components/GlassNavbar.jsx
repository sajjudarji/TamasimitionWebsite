import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, Menu, X } from 'lucide-react';
import { Button } from "@material-tailwind/react";
import logo from "../assets/logo.png";

const GlassNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#services' },
    { name: 'Materials', path: '#materials' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'About', path: '#about' },
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
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          </motion.div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors hover-underline py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Login
          </button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 rounded-full px-6"
          >
            Get Quote
          </Button>
        </div>
        
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-neon-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-y border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <button className="text-gray-300 hover:text-white transition-colors text-left font-medium">
                  Login
                </button>
                <Button
                  variant="gradient"
                  color="blue"
                  fullWidth
                  className="bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default GlassNavbar;
