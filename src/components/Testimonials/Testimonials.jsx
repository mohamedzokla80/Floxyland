import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [direction, setDirection] = useState(0);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveTestimonial(prev => (prev + newDirection + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely stunning hotel with impeccable service. The attention to detail in every aspect of our stay was remarkable. From the moment we arrived until checkout, every staff member went above and beyond to ensure our comfort.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      stayType: "Luxury Suite",
      date: "December 2023",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "The perfect blend of luxury and comfort. The spa services were world-class, and the dining experience exceeded all expectations. I've stayed at many high-end hotels, but this one truly stands out.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      stayType: "Presidential Suite",
      date: "November 2023",
      verified: true,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "An unforgettable experience! The room was beautifully appointed, the staff was incredibly friendly, and the location couldn't be better. We'll definitely be returning for our next anniversary.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      stayType: "Ocean View Suite",
      date: "October 2023",
      verified: true,
    },
    {
      id: 4,
      name: "James Wilson",
      location: "London, UK",
      rating: 5,
      text: "Exceptional hospitality and breathtaking views. The concierge service helped us discover hidden gems in the city. Every detail was perfectly executed, making our business trip both productive and enjoyable.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      stayType: "Executive Room",
      date: "September 2023",
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "The most luxurious stay we've ever experienced. From the welcome champagne to the turndown service, every moment felt special. The breakfast was incredible and the fitness center was state-of-the-art.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      stayType: "Penthouse Suite",
      date: "August 2023",
      verified: true,
    },
    {
      id: 6,
      name: "David Kim",
      location: "Seoul, South Korea",
      rating: 5,
      text: "Outstanding service and attention to detail. The room was immaculate, the amenities were top-notch, and the staff anticipated our every need. This hotel sets the gold standard for luxury hospitality.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      stayType: "Garden Villa",
      date: "July 2023",
      verified: true,
    },
  ];

  const trustIndicators = [
    { label: "Guest Rating", value: "4.9/5", icon: "" },
    { label: "Happy Guests", value: "50,000+", icon: "" },
    { label: "Return Rate", value: "89%", icon: "" },
    { label: "Awards Won", value: "25+", icon: "" },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`${index < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"} w-5 h-5`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
        >
          <motion.span 
            className="inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6"
            variants={headerVariants}
            whileHover={{ scale: 1.05 }}
          >
            Guest Testimonials
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8"
            variants={headerVariants}
          >
            What Our{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Guests Say
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Don't just take our word for it. Hear from our valued guests about
            their exceptional experiences at Floxyland Resort.
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="relative bg-white dark:bg-gray-800/50 rounded-3xl shadow-2xl dark:shadow-2xl dark:shadow-black/20 overflow-hidden mb-16">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

          <div className="p-8 md:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
                  />
                  {testimonials[activeTestimonial].verified && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                  {testimonials[activeTestimonial].location}
                </p>
                <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-4 text-lg">
                  {testimonials[activeTestimonial].stayType}
                </p>

                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[activeTestimonial].date}
                </p>
              </div>

              <div className="lg:w-2/3">
                <svg
                  className="w-16 h-16 text-yellow-400 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-light">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={() => paginate(-1)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg z-10"
            initial={{ scale: 1, opacity: 0.8 }}
            whileHover={{ 
              scale: 1.1, 
              opacity: 1,
              backgroundColor: "rgba(255, 255, 255, 1)",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              scale: { type: "spring", stiffness: 400, damping: 10 },
              opacity: { duration: 0.2 }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg z-10"
            initial={{ scale: 1, opacity: 0.8 }}
            whileHover={{ 
              scale: 1.1, 
              opacity: 1,
              backgroundColor: "rgba(255, 255, 255, 1)",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              scale: { type: "spring", stiffness: 400, damping: 10 },
              opacity: { duration: 0.2 }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <motion.div 
          className="flex justify-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  const newDirection = index > activeTestimonial ? 1 : -1;
                  setDirection(newDirection);
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={index === activeTestimonial ? "bg-yellow-600 h-4 rounded-full" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 h-4 rounded-full"}
                initial={{ width: 16, scale: 1 }}
                animate={{
                  width: index === activeTestimonial ? 32 : 16,
                  backgroundColor: index === activeTestimonial ? "#D97706" : "#E5E7EB"
                }}
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: index === activeTestimonial ? "#B45309" : "#9CA3AF"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  scale: { type: "spring", stiffness: 500, damping: 15 },
                  width: { type: "spring", stiffness: 500, damping: 30, duration: 0.2 },
                  backgroundColor: { duration: 0.2 }
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={index === activeTestimonial ? "bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg cursor-pointer border-2 border-yellow-400 shadow-2xl" : "bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg cursor-pointer border-2 border-transparent hover:border-yellow-200 dark:hover:border-yellow-400/30"}
              initial={false}
              animate={{
                scale: index === activeTestimonial ? 1.05 : 1,
                y: index === activeTestimonial ? -5 : 0,
                boxShadow: index === activeTestimonial 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                borderColor: index === activeTestimonial 
                  ? "#F59E0B" 
                  : "transparent",
                zIndex: index === activeTestimonial ? 10 : 1
              }}
              whileHover={{
                y: index === activeTestimonial ? -5 : -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#F59E0B"
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                duration: 0.3
              }}
              onClick={() => {
                const newDirection = index > activeTestimonial ? 1 : -1;
                setDirection(newDirection);
                setActiveTestimonial(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover shadow-lg"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="font-medium">{testimonial.stayType}</span>
                <span>{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 rounded-3xl p-12 shadow-inner overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.4,
                  duration: 0.6
                }
              }}
              viewport={{ once: true }}
            >
              Trusted by{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: 0.6,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                viewport={{ once: true }}
              >
                Thousands
              </motion.span>
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.8,
                  duration: 0.6
                }
              }}
              viewport={{ once: true }}
            >
              Our commitment to excellence speaks for itself
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2 * index,
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {indicator.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {indicator.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">{indicator.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
