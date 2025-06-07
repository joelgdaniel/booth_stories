import React from 'react';
import { Camera, Heart, Building, PartyPopper, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const serviceItems = [
  {
    title: 'Weddings',
    description: 'Capture the love and joy of your special day with our premium photo booth services.',
    icon: Heart,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Birthdays',
    description: 'Make your celebration extra special with fun photo memories that last a lifetime.',
    icon: PartyPopper,
    image: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Corporate Events',
    description: 'Add a touch of fun to your corporate events and team building activities.',
    icon: Building,
    image: 'https://images.pexels.com/photos/7648040/pexels-photo-7648040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Private Parties',
    description: 'Elevate your private gatherings with premium photo experiences for you and your guests.',
    icon: Users,
    image: 'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="services" className="py-20 relative overflow-hidden bg-white">
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
          <h2 className="section-title">Perfect For</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl">Creating magical memories at any occasion</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceItems.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="service-card bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
          <a href="#packages" className="btn-primary">View Our Packages</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;