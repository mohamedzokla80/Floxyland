import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
  hover: {
    scale: 1.15,
    transition: { duration: 0.2 },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.footer
      ref={ref}
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div className="col-span-1 lg:col-span-2" variants={itemVariants}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Floxyland
              </span>
            </button>
            <p className="text-gray-700 dark:text-gray-400 mb-6 max-w-md">
              Experience luxury redefined at Floxyland Hotel. Where exceptional service meets
              unparalleled comfort, creating memories that last a lifetime.
            </p>
            <motion.div className="flex space-x-4" variants={containerVariants}>
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-2 rounded-full hover:bg-yellow-500 dark:hover:bg-yellow-600 hover:text-white dark:hover:text-gray-100 transition-colors duration-200"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    {social === 'facebook' && <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />}
                    {social === 'twitter' && <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />}
                    {social === 'instagram' && <path fillRule="evenodd" d="M12.017 0C18.624 0 24.017 5.384 24.017 12.017c0 6.624-5.384 12.017-12.017 12.017S0 18.641.017 12.017C.017 5.384 5.384.017 12.017.017zM8.875 6.108c-2.482 0-4.494 2.012-4.494 4.494 0 2.482 2.012 4.494 4.494 4.494 2.482 0 4.494-2.012 4.494-4.494 0-2.482-2.012-4.494-4.494-4.494zM18.022 6.109h-3.021c-.831 0-1.508.677-1.508 1.508v3.021c0 .831.677 1.508 1.508 1.508h3.021c.831 0 1.508-.677 1.508-1.508V7.617c0-.831-.677-1.508-1.508-1.508z" clipRule="evenodd" />}
                    {social === 'linkedin' && <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h3>
            <motion.ul className="space-y-2" variants={containerVariants}>
              {['About Us', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Events', 'Contact'].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200">{link}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Info</h3>
            <motion.div className="space-y-3" variants={containerVariants}>
              <motion.div className="flex items-start space-x-3" variants={itemVariants}>
                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-400 text-sm">123 Luxury Avenue<br />Downtown District<br />New York, NY 10001</p>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-400 text-sm">+1 (555) 123-4567</p>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-400 text-sm">info@floxyland.com</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Floxyland Hotel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
