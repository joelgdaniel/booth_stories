import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  {
    src: "/public/1.jpg",
    alt: "Friends taking photos in photobooth"
  },
  {
    src: "/public/5.jpg",//images.pexels.com/photos/3972135/pexels-photo-3972135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Couple taking selfie in photobooth"
  },
  {
    src: "/public/3.jpg",//images.pexels.com/photos/10990069/pexels-photo-10990069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Wedding photobooth strip"
  },
  {
    src: "/public/4.jpg",
    alt: "Corporate event photobooth"
  },
  {
    src: "/public/2.jpg",
    alt: "Birthday photobooth"
  },
  {
    src: "/public/6.jpg",
    alt: "Party photobooth setup"
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10">
        <Sparkles className="text-primary w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-10">
        <Sparkles className="text-primary w-8 h-8" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">Memories Made Here</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl">Glimpses of joy captured at our booths</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="polaroid transform"
              style={{ 
                rotate: `${Math.random() * 6 - 3}deg`,
                transition: 'transform 0.3s ease'
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="font-playfair text-sm">Booth Stories</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary">Book Your Booth</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;