import React, { useEffect, useState } from 'react';
import { InstagramIcon, MenuIcon, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <InstagramIcon 
            className="h-8 w-8 text-instagram-purple" 
          />
          <span className="font-bold text-xl md:text-2xl">
            <span className="gradient-text">S FOLLOWER</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium hover:text-primary-600 transition-colors">Features</a>
          <a href="#testimonials" className="font-medium hover:text-primary-600 transition-colors">Testimonials</a>
          <Button 
            variant="instagram" 
            size="lg"
            className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Free Trial
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="font-medium py-2 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="font-medium py-2 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button 
              variant="instagram" 
              className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header