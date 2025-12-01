import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants for the main container
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      staggerChildren: 0.1, // Animate children one by one
    },
  },
};

// Animation variants for each form item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BookingForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    rooms: '1',
    adults: '2',
    children: '0',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Booking request sent!');
  };

  return (
    <motion.div
      className="bg-teal-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end text-white">
          
          {/* Check In Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="checkIn" className="block text-sm font-medium mb-1">Check In</label>
            <input
              type="date"
              id="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/20 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-300 text-white"
              required
            />
          </motion.div>

          {/* Check Out Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="checkOut" className="block text-sm font-medium mb-1">Check Out</label>
            <input
              type="date"
              id="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/20 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-300 text-white"
              required
            />
          </motion.div>

          {/* Rooms */}
          <motion.div variants={itemVariants}>
            <label htmlFor="rooms" className="block text-sm font-medium mb-1">Rooms</label>
            <select
              id="rooms"
              value={formData.rooms}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/20 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
            >
              {[...Array(5).keys()].map(i => <option key={i + 1} value={i + 1}>{i + 1} Room{i > 0 ? 's' : ''}</option>)}
            </select>
          </motion.div>

          {/* Adults */}
          <motion.div variants={itemVariants}>
            <label htmlFor="adults" className="block text-sm font-medium mb-1">Adults</label>
            <select
              id="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/20 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
            >
              {[...Array(10).keys()].map(i => <option key={i + 1} value={i + 1}>{i + 1} Adult{i > 0 ? 's' : ''}</option>)}
            </select>
          </motion.div>

          {/* Children */}
          <motion.div variants={itemVariants}>
            <label htmlFor="children" className="block text-sm font-medium mb-1">Children</label>
            <select
              id="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white/20 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
            >
              {[...Array(6).keys()].map(i => <option key={i} value={i}>{i} Child{i !== 1 ? 'ren' : ''}</option>)}
            </select>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-black bg-yellow-500 font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
          >
            Check Now
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}