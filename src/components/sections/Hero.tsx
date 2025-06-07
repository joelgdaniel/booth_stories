import React from 'react';
// Remove Camera from the import
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-24 pb-16 flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/40 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="sparkle left-[15%] top-[20%]"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        >
          <Sparkles />
        </motion.div>
        <motion.div 
          className="sparkle right-[20%] top-[30%]"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        >
          <Sparkles />
        </motion.div>
        <motion.div 
          className="sparkle left-[25%] bottom-[25%]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        >
          <Sparkles />
        </motion.div>
        <motion.div 
          className="sparkle right-[10%] bottom-[20%]"
          animate={{ scale: [0.7, 1.1, 0.7], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 1.5 }}
        >
          <Sparkles />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Capture</span>
              <span className="block">Memories</span>
              <span className="block">In Style</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Premium photo booth rentals for weddings, birthdays, corporate events, and more. Create unforgettable moments with Booth Stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary">Book Now</a>
              <a href="#services" className="btn-secondary">Our Services</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/heroimage.jpg" 
                alt="Photo booth experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {/* Replace Camera with logo image */}
                  <img src="/logo-white.svg" alt="Booth Stories Logo" className="w-5 h-6" />
                  <h3 className="font-playfair text-2xl font-bold text-white">Booth Stories</h3>
                </div>
                <p className="font-medium text-lg">Click. Capture. Keep.</p>
              </div>
            </div>

            <motion.div 
              className="absolute -top-8 -right-8 bg-white rounded-lg shadow-lg p-6 max-w-[200px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <p className="font-playfair text-lg font-bold mb-2">Born from chaos</p>
              <p className="text-sm">Built for parties. Designed to make memories.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero