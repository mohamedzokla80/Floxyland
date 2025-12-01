import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import luxuryImage from "../../assets/home-1.png";
import propertyImage from "../../assets/Properties-1.png";

export default function Features() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Feature - About Section */}
        <motion.div 
          ref={ref1}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
        >
          <motion.div 
            className="order-2 lg:order-1"
            variants={imageVariants}
          >
            <motion.div 
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={luxuryImage} 
                className="w-full h-full object-cover" 
                alt="Luxury Hotel Interior"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            variants={itemVariants}
          >
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.span 
                className="text-yellow-600 font-semibold text-sm uppercase tracking-wider"
                variants={itemVariants}
              >
                About Floxyland
              </motion.span>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                Redefining 
                <motion.span 
                  className="text-yellow-600"
                  initial={{ opacity: 0 }}
                  animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {" "}Luxury
                </motion.span>
                <br />Hospitality
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              For over two decades, Floxyland has been the epitome of luxury and elegance. 
              Our commitment to exceptional service and attention to detail creates unforgettable 
              experiences for discerning travelers from around the world.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 py-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {[
                { number: "500+", label: "Luxury Rooms" },
                { number: "25+", label: "Years Experience" },
                { number: "50K+", label: "Happy Guests" },
                { number: "15+", label: "Awards Won" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-yellow-600 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button 
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Discover More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Secondary Feature - Property Showcase */}
        <motion.div 
          ref={ref2}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
        >
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.span 
                className="text-yellow-600 font-semibold text-sm uppercase tracking-wider"
                variants={itemVariants}
              >
                Our Property
              </motion.span>
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                World-Class
                <br />
                <motion.span 
                  className="text-yellow-600"
                  initial={{ opacity: 0 }}
                  animate={isInView2 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Amenities
                </motion.span>
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Experience unparalleled comfort with our state-of-the-art facilities, 
              from our award-winning spa to our rooftop infinity pool with panoramic city views.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {[
                {
                  title: "Premium Spa & Wellness Center",
                  description: "Rejuvenate with our world-class treatments"
                },
                {
                  title: "Rooftop Infinity Pool",
                  description: "Stunning panoramic city views"
                },
                {
                  title: "Michelin-Star Restaurants",
                  description: "Exquisite culinary experiences"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  variants={featureItemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-yellow-100 dark:bg-gray-800 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src={propertyImage} 
              className="w-full h-full object-cover" 
              alt="Hotel Property"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Premium Location</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Heart of the city center</p>
                </div>
                <div className="text-right">
                  <motion.div 
                    className="text-yellow-600 font-bold text-lg"
                    initial={{ scale: 0 }}
                    animate={isInView2 ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1, duration: 0.3 }}
                  >
                    5.0
                  </motion.div>
                  <motion.div 
                    className="flex text-yellow-400"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.2
                        }
                      }
                    }}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.svg 
                        key={i} 
                        className="w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
