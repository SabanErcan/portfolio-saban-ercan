'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import MenuBurger from './MenuBurger';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
        {/* Logo - Bien à gauche */}
        <motion.a
          href="#home"
          className="text-2xl font-display font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SE
        </motion.a>

        {/* Right side: Theme toggle + Menu burger - Plus espacés */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <HiOutlineMoon className="w-6 h-6" />
            ) : (
              <HiOutlineSun className="w-6 h-6" />
            )}
          </motion.button>

          {/* Menu Burger */}
          <MenuBurger theme={theme} />
        </div>
      </div>
    </motion.header>
  );
}
