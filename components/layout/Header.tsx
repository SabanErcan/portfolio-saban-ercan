'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Projets', href: '#projects' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
          <motion.div 
            className={`flex items-center justify-between transition-all duration-700 ${
              scrolled 
                ? 'h-20 mt-5 px-8 py-4 rounded-3xl bg-black/60 backdrop-blur-3xl border border-purple-500/20 shadow-2xl shadow-purple-500/10' 
                : 'h-24 mt-0 px-4 py-0'
            }`}
            initial={false}
            animate={{
              scale: scrolled ? 0.98 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo imposant */}
            <motion.a
              href="#home"
              className="relative z-10 flex items-center gap-4 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-pink-500/20 backdrop-blur-xl flex items-center justify-center border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300">
                  <span className="text-2xl font-black bg-gradient-to-br from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    SE
                  </span>
                </div>
              </div>
              <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Saban Ercan</span>
            </motion.a>

            {/* Navigation avec espacement optimal */}
            <nav className="hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full bg-white/[0.02] backdrop-blur-sm border border-white/10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-1 text-[15px] font-semibold text-gray-300 hover:text-white transition-colors group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button imposant */}
            <motion.a
              href="#contact"
              className="hidden md:flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl text-base font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Me contacter</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>


            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full"
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full"
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu - Style Apple */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col items-center justify-center gap-2 p-8"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-bold text-white/90 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* CTA Mobile */}
              <motion.a
                href="#contact"
                className="mt-8 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Me contacter
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
