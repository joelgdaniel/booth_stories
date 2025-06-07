import React from 'react';
// Remove Camera from the import
import { Image, Printer, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Create a custom component for the logo
const LogoIcon = (props: React.HTMLAttributes<HTMLImageElement>) => (
  <img 
    src="/camera-icon.svg" 
    alt="Booth Stories Logo" 
    width={props.className?.includes('w-8') ? 48 : 12}
    height={props.className?.includes('h-18') ? 48 : 24}
    {...props} 
  />
);

const steps = [
  {
    title: 'Step In',
    description: 'Walk into our retro-style booth and strike a pose',
    icon: LogoIcon // Use the custom component instead of Camera
  },
  {
    title: 'Get Creative',
    description: 'Pick a filter, snap away, make a memory',
    icon: Image
  },
  {
    title: 'Walk Out with Magic',
    description: 'Printed photo in hand, memory sealed',
    icon: Printer
  }
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-primary/20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10">
        <Sparkles className="text-accent/30 w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-10">
        <Sparkles className="text-accent/30 w-8 h-8" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">3 Steps to Eternal Elegance</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl">Creating memories has never been this easy</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-lg mb-6">
                {step.icon === LogoIcon ? (
                  <LogoIcon className="w-12 h-12 text-accent" style={{ width: '48px', height: '48px' }} />
                ) : (
                  <step.icon className="w-12 h-12 text-accent" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/howitworks.jpg" 
              alt="Photo booth experience" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-lg">Creating memories that last a lifetime</p>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-[200px]"
          >
            <p className="font-playfair text-lg font-bold mb-2">Reel-worthy memories</p>
            <p className="text-sm">Every snap is social media ready</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;