import React from 'react';
// Remove Camera from the import
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary/10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10">
        <Sparkles className="text-accent/30 w-8 h-8" />
      </div>
      <div className="absolute bottom-10 left-10">
        <Sparkles className="text-accent/30 w-8 h-8" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">About Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl">More than a booth, it's a vibe.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/aboutus.jpg" 
                alt="Vintage-style photo booth" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                {/* Replace Camera with logo image */}
                <img src="/camera-icon.svg" alt="Booth Stories Logo" className="w-5 h-5 text-accent" />
                <h3 className="font-playfair text-lg font-bold">Booth Stories</h3>
              </div>
              <p className="text-sm">Est. 2025</p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
              }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Born From Chaos. <br />
              Built For Parties.
            </h3>
            <p className="mb-6">
              It all started when our founder tried printing wedding selfies on a home printer. The photos? Blurry. Faces? Distorted. Ink? Everywhere.
            </p>
            <p className="mb-6">
              So, naturally—he built a booth. One that prints instantly, flatters everyone, and makes people feel famous.
            </p>
            <p className="mb-8">
              Booth Stories is not just a photobooth—it's a memory machine. We bring retro-style charm, modern tech, and pure candid energy to your events. From weddings to festivals, we're here to make sure every moment gets the spotlight it deserves—captured, printed, and remembered.
            </p>
            <div>
              <a href="#services" className="btn-primary">Our Services</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;