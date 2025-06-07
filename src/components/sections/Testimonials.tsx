import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Priya & Rahul",
    event: "Wedding",
    text: "Booth Stories was the highlight of our wedding reception! Guests couldn't stop talking about the amazing quality of photos and how much fun they had. Worth every penny!",
    rating: 5
  },
  {
    name: "Ananya Sharma",
    event: "Birthday Party",
    text: "I hired Booth Stories for my 30th birthday and it was a massive hit! The booth quality is incredible and the attendants were so helpful and fun. Will definitely book again!",
    rating: 5
  },
  {
    name: "Tech Innovations Ltd",
    event: "Corporate Event",
    text: "We've used Booth Stories for multiple company events now. Their professionalism and quality are consistently excellent. Our team loves the customized templates.",
    rating: 5
  }
];

const Testimonials = () => {
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

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white">
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
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl">The reviews speak for themselves</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary/5 rounded-xl p-8 shadow-lg relative"
            >
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-md">
                <Quote className="w-6 h-6 text-accent" />
              </div>
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.event}</p>
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
          <a href="#contact" className="btn-primary">Book Your Booth Today</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;