import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function RoomCard({ room, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/20 overflow-hidden hover:shadow-2xl transition-all duration-500"
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Room Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Price Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
        >
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900 dark:text-gray-100">${room.price}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 line-through">${room.originalPrice}</div>
          </div>
        </motion.div>

        {/* Rating Badge */}
        <motion.div
          className="absolute top-4 left-4 bg-yellow-600 text-white rounded-full px-3 py-1 flex items-center space-x-1"
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-semibold">{room.rating}</span>
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        >
          <motion.button
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>

      {/* Room Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">
            {room.title}
          </h3>
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            <div>{room.size}</div>
            <div>{room.guests} guests</div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {room.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.features.slice(0, 3).map((feature) => (
            <span key={feature} className="bg-yellow-50 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
              {feature}
            </span>
          ))}
          {room.features.length > 3 && (
            <span className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs">
              +{room.features.length - 3} more
            </span>
          )}
        </div>

        {/* Book Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now - ${room.price}/night
        </motion.button>
      </div>
    </motion.div>
  );
}
