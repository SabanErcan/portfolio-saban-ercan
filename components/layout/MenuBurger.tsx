'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

interface MenuBurgerProps {
  theme: string;
}

export default function MenuBurger({ theme }: MenuBurgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { number: '01', label: 'ACCUEIL', href: '#home' },
    { number: '02', label: 'PROJETS', href: '#projects' },
    { number: '03', label: 'À PROPOS', href: '#about' },
    { number: '04', label: 'CONTACT', href: '#contact' },
  ];

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleMenuClick = useCallback((href: string) => {
    closeMenu();
    // Smooth scroll vers la section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [closeMenu]);

  return (
    <>
      {/* Burger Icon - Optimisé */}
      <motion.button
        onClick={toggleMenu}
        className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        {/* Burger lines */}
        <motion.div
          className="w-6 h-0.5 rounded-full"
          style={{
            backgroundColor: theme === 'dark' ? '#edf2f4' : '#2b2d42',
          }}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 rounded-full"
          style={{
            backgroundColor: theme === 'dark' ? '#edf2f4' : '#2b2d42',
          }}
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 rounded-full"
          style={{
            backgroundColor: theme === 'dark' ? '#edf2f4' : '#2b2d42',
          }}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Fullscreen Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 backdrop-blur-custom"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(43, 45, 66, 0.95)' : 'rgba(237, 242, 244, 0.95)',
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeMenu}
              className="absolute top-8 right-6 md:right-12 lg:right-24 text-4xl font-light"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              ✕
            </motion.button>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center h-full gap-8 md:gap-12">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-medium hover:text-gradient transition-all text-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-sm md:text-base opacity-50 mr-4">{item.number}</span>
                  {item.label}
                </motion.button>
              ))}

              {/* Social Links */}
              <motion.div
                className="flex gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://github.com/SabanErcan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:text-gradient transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiGithub />
                  github
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/saban-ercan-5223b538b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:text-gradient transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiLinkedin />
                  linkedin
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
