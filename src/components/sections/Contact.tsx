import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Form submitted! We will contact you soon.');
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-primary/20">
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
          <h2 className="section-title">Let's Make Magic</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl">Book your photo booth experience today</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p><a href="tel:+917338316667" className="hover:underline">+91 73383 16667</a></p>
                    <p><a href="tel:+917306045456" className="hover:underline">+91 73060 45456</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p><a href="mailto:photoboothblr@gmail.com" className="hover:underline">boothstoriesblr@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Social Media</p>
                    <p><a href="https://instagram.com/Booth_stories" className="hover:underline">@Booth_stories</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-medium">Website</p>
                    <p><a href="https://www.boothstories.in" className="hover:underline">www.boothstories.in</a></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Book Your Booth</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Party">Party</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us more about your event..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;