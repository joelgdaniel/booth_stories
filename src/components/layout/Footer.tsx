import React from 'react';
// Remove Camera from the import
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              {/* Replace Camera with logo image */}
              <img src="/logo-white.svg" alt="Booth Stories Logo" width={24} height={24} />
              <span className="text-xl font-playfair font-bold">Booth Stories</span>
            </div>
            <p className="mb-4 text-sm opacity-80">
              More than a booth, it's a vibe. Capturing memories in style.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://instagram.com/Booth_stories" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:boothstoriesblr@gmail.com" className="hover:opacity-80 transition-opacity" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:opacity-80 transition-opacity">About Us</a></li>
              <li><a href="#services" className="hover:opacity-80 transition-opacity">Services</a></li>
              <li><a href="#how-it-works" className="hover:opacity-80 transition-opacity">How It Works</a></li>
              <li><a href="#gallery" className="hover:opacity-80 transition-opacity">Gallery</a></li>
              <li><a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+917338316667" className="hover:opacity-80 transition-opacity">+91 73383 16667</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+917306045456" className="hover:opacity-80 transition-opacity">+91 73060 45456</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:boothstoriesblr@gmail.com" className="hover:opacity-80 transition-opacity">boothstoriesblr@gmail.com</a>
              </li>
              <li className="mt-4">
                <a href="#contact" className="btn-secondary bg-white text-accent">Book Now</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Booth Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer