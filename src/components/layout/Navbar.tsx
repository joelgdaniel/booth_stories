import React, { useState, useEffect } from 'react';
// Remove the Camera import
// import { Camera } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center gap-2 text-accent"
          >
            {/* Replace Camera component with your logo image */}
            <img src="/camera-icon.svg" alt="Booth Stories Logo" width={28} height={28} />
            <span className="text-xl font-playfair font-bold">Booth Stories</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-accent hover:text-accent/70 transition-colors">About</a>
            <a href="#services" className="text-accent hover:text-accent/70 transition-colors">Services</a>
            <a href="#how-it-works" className="text-accent hover:text-accent/70 transition-colors">How It Works</a>
            <a href="#gallery" className="text-accent hover:text-accent/70 transition-colors">Gallery</a>
            <a href="#contact" className="btn-primary">Book Now</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-accent"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col items-center bg-white">
            <a href="#about" className="text-accent hover:text-accent/70 transition-colors py-2" onClick={toggleMobileMenu}>About</a>
            <a href="#services" className="text-accent hover:text-accent/70 transition-colors py-2" onClick={toggleMobileMenu}>Services</a>
            <a href="#how-it-works" className="text-accent hover:text-accent/70 transition-colors py-2" onClick={toggleMobileMenu}>How It Works</a>
            <a href="#gallery" className="text-accent hover:text-accent/70 transition-colors py-2" onClick={toggleMobileMenu}>Gallery</a>
            <a href="#contact" className="btn-primary w-full text-center" onClick={toggleMobileMenu}>Book Now</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar