import React from "react";
import { motion } from "framer-motion";
import BookingForm from "../BookingForm/BookingForm";
export default function Hero() {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="relative min-h-screen w-full bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/20 dark:bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </motion.div>



      {/* Hero Content & Booking Form Container */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 pt-24 md:pt-32">
        
        {/* Content Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto flex flex-col items-center gap-8"
          variants={heroTextVariants}
        >
          {/* Hero Text */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              <span>Experience Luxury</span>
              <br />
              <span className="text-yellow-400">Beyond Imagination</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mt-6 leading-relaxed">
              Discover unparalleled comfort and elegance at Floxyland Hotel. 
              Where every moment becomes a cherished memory.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore Rooms
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 w-full sm:w-auto"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, borderColor: "#facc15" }}
              whileTap={{ scale: 0.95 }}
            >
              View Gallery
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Booking Form Section */}
        <motion.div 
          className="w-full max-w-6xl mx-auto mt-12"
          variants={itemVariants} // Re-using itemVariants for a consistent entrance
        >
          <BookingForm />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
