import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useTheme } from "../../context/ThemeContext";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: {
    scale: 0.95,
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Rooms", id: "featured-rooms" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "footer" },
  ];

  const activeId = useIntersectionObserver(
    navItems.map((item) => item.id),
    { rootMargin: "-40% 0px -60% 0px" }
  );

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const renderNavItem = (item, isMobile = false) => {
    const isActive = activeId === item.id;
    const baseClasses = isMobile
      ? "block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200"
      : "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative";

    const activeClasses = isScrolled
      ? "text-yellow-600"
      : "text-yellow-300";
    const inactiveClasses = isScrolled
      ? "text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400"
      : "text-white hover:text-yellow-300";

    const mobileActiveClasses = "text-yellow-600 bg-yellow-100/50 dark:text-yellow-400 dark:bg-yellow-500/20";
    const mobileInactiveClasses = "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700";

    let finalClasses;
    if (isMobile) {
      finalClasses = `${baseClasses} ${isActive ? mobileActiveClasses : mobileInactiveClasses}`;
    } else {
      finalClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    }

    return (
      <motion.button
        key={item.name}
        onClick={() => handleScrollTo(item.id)}
        className={finalClasses}
        variants={itemVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {item.name}
        {isActive && !isMobile && (
          <motion.div
            className={`absolute bottom-[-8px] left-0 right-0 h-1 ${isScrolled ? 'bg-yellow-500' : 'bg-yellow-300'}`}
            layoutId="underline"
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/90 dark:border-b dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button onClick={() => handleScrollTo('hero')} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900 dark:text-gray-100" : "text-white"}`}>
                Floxyland
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:block"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => renderNavItem(item))}
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-pressed={theme === 'dark'}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? 'bg-gray-200/80 hover:bg-gray-300/80 dark:bg-gray-700/80 dark:hover:bg-gray-600/80'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.1, rotate: theme === 'light' ? 15 : -15 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, y: -10, rotate: -30 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: 10, rotate: 30 }}
                  transition={{ duration: 0.2 }}
                  className={isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}
                >
                  {theme === 'light' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{
                scale: 0.98,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              variants={itemVariants}
            >
              Book Your Stay
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  : "text-white hover:text-yellow-300"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 dark:bg-gray-800/95 dark:border-gray-700"
              variants={containerVariants}
            >
              {navItems.map((item) => renderNavItem(item, true))}
              <motion.div
                className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <motion.button
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{
                    scale: 0.98,
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  Book Your Stay
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

