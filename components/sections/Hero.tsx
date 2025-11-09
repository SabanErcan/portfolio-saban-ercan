'use client';

import { motion } from 'framer-motion';
import ElegantBackground from '@/components/ui/ElegantBackground';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Fond élégant et minimaliste */}
      <ElegantBackground className="z-0" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Titre principal simple et élégant */}
          <h1 className="font-display font-bold leading-tight mb-6">
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light mb-2 opacity-80">
              HEY, JE SUIS
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl hover-elegant-text">
              SABAN
              <br />
              ERCAN
            </span>
          </h1>

          {/* Sous-titre */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-display mb-6 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Développeur Full Stack
          </motion.p>

          {/* Phrase d'accroche */}
          <motion.p
            className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Étudiant passionné qui transforme des idées en applications web interactives
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              → voir mes projets
            </a>
            <a href="#about" className="btn border-2 border-current hover:bg-opacity-10 hover:bg-gray-500">
              → en savoir plus
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-sm opacity-50">↓</div>
        </motion.div>
      </div>
    </section>
  );
}
