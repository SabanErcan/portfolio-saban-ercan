'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background simple et performant */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 via-violet-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-fuchsia-400/10 via-purple-400/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Disponible pour opportunités</span>
          </motion.div>

          {/* Titre principal avec effet gradient */}
          <h1 className="font-display font-bold leading-[0.9] mb-6">
            <motion.span
              className="block text-xl md:text-2xl lg:text-3xl font-normal mb-4 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Bonjour, je suis
            </motion.span>
            <motion.span
              className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Saban Ercan
            </motion.span>
          </h1>

          {/* Sous-titre avec effet typing */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-light">
              <span className="bg-gradient-to-r from-white via-purple-300 to-fuchsia-400 bg-clip-text text-transparent font-semibold">
                Développeur Full Stack
              </span>
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-400" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Je crée des{' '}
            <span className="text-purple-300 font-semibold">expériences web</span>{' '}
            modernes et performantes qui transforment les idées en{' '}
            <span className="text-fuchsia-300 font-semibold">réalité digitale</span>
          </motion.p>

          {/* CTAs modernes */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-white/90 hover:bg-white rounded-full font-semibold text-black overflow-hidden shadow-lg shadow-white/10"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: '5+', label: 'Projets réalisés' },
              { number: '10+', label: 'Technologies' },
              { number: '1.5', label: 'Ans d\'expérience' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
