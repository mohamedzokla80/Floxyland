import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import room1 from "../../assets/reisetopia-pSDe7ePo0Tc-unsplash.jpg";
import room2 from "../../assets/rex_ADL1162_01_AMB.jpg";
import room3 from "../../assets/rune-enstad-ayzkAUNfsDI-unsplash.jpg";
import room4 from "../../assets/غرفة-نوم-باللون-الأسود-1024x650.jpg";

export default function FeatureCard() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const rooms = [
    {
      id: 1,
      title: "Deluxe Ocean View",
      description: "Spacious room with stunning ocean views, marble bathroom, and private balcony overlooking the coastline",
      price: 299,
      originalPrice: 399,
      image: room1,
      size: "45 m²",
      guests: 2,
      bed: "King Bed",
      features: ["Ocean View", "Private Balcony", "Marble Bathroom", "Mini Bar", "Free WiFi"],
      rating: 4.9,
      reviews: 156
    },
    {
      id: 2,
      title: "Executive Suite",
      description: "Luxurious suite with separate living area, work desk, and premium city views perfect for business travelers",
      price: 459,
      originalPrice: 599,
      image: room2,
      size: "65 m²",
      guests: 3,
      bed: "King + Sofa Bed",
      features: ["Living Area", "Work Desk", "City View", "Premium Amenities", "Butler Service"],
      rating: 4.8,
      reviews: 203
    },
    {
      id: 3,
      title: "Premium Double",
      description: "Elegant double room featuring modern design, premium facilities, and contemporary furnishings",
      price: 199,
      originalPrice: 249,
      image: room3,
      size: "35 m²",
      guests: 2,
      bed: "Double Bed",
      features: ["Modern Design", "Premium Bath", "Smart TV", "Air Conditioning", "Room Service"],
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      title: "Presidential Suite",
      description: "Ultimate luxury experience with exclusive amenities, private terrace, and personalized concierge service",
      price: 899,
      originalPrice: 1199,
      image: room4,
      size: "120 m²",
      guests: 4,
      bed: "Master + Guest Room",
      features: ["Private Terrace", "Butler Service", "Spa Access", "Dining Area", "Premium Location"],
      rating: 5.0,
      reviews: 67
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.span 
            className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4 block"
            variants={headerVariants}
          >
            Luxury Accommodations
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={headerVariants}
          >
            Featured <motion.span 
              className="text-yellow-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Rooms & Suites
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Discover our carefully curated selection of premium accommodations, each designed 
            to provide the ultimate comfort and luxury experience for discerning travelers.
          </motion.p>
        </motion.div>

        {/* Room Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
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
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHoveredCard(room.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Room Image */}
              <motion.div 
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                {/* Price Badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-right">
                    <motion.div 
                      className="text-lg font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      ${room.price}
                    </motion.div>
                    <div className="text-xs text-gray-500 line-through">${room.originalPrice}</div>
                  </div>
                </motion.div>

                {/* Rating Badge */}
                <motion.div 
                  className="absolute top-4 left-4 bg-yellow-600 text-white rounded-full px-3 py-1 flex items-center space-x-1"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                  <span className="text-sm font-semibold">{room.rating}</span>
                </motion.div>

                {/* Hover Overlay with Quick Info */}
                <motion.div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === room.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: hoveredCard === room.id ? 'auto' : 'none' }}
                >
                  <motion.button 
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredCard === room.id ? 0 : 20,
                      opacity: hoveredCard === room.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Room Details */}
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
              >
                <motion.div 
                  className="flex items-start justify-between mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    {room.title}
                  </motion.h3>
                  <div className="text-right text-sm text-gray-500">
                    <div>{room.size}</div>
                    <div>{room.guests} guests</div>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  {room.description}
                </motion.p>

                {/* Room Specs */}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{room.reviews} reviews</span>
                  </div>
                </div>
                
                {/* Features */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4 + index * 0.05
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {room.features.slice(0, 3).map((feature, featureIndex) => (
                    <motion.span 
                      key={featureIndex} 
                      className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                  {room.features.length > 3 && (
                    <motion.span 
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      +{room.features.length - 3} more
                    </motion.span>
                  )}
                </motion.div>

                {/* Book Button */}
                <motion.button 
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now - ${room.price}/night
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Rooms Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button 
            className="bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Rooms & Suites
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
