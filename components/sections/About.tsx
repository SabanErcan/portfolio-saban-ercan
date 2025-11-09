'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiWebpack,
  SiQt,
} from 'react-icons/si';
import { FaDatabase, FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default function About() {
  const [tvEffect, setTvEffect] = useState(false);

  useEffect(() => {
    // Effet TV aléatoire
    const interval = setInterval(() => {
      setTvEffect(true);
      setTimeout(() => setTvEffect(false), 200);
    }, 3000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, []);

  const skills = {
    languages: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
    ],
    frontend: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'SCSS', icon: SiSass, color: '#CC6699' },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
      { name: 'Qt', icon: SiQt, color: '#41CD52' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
    ],
  };

  // Effet parallaxe désactivé pour éviter les erreurs d'hydratation
  const getParallaxOffset = () => ({ x: 0, y: 0 });

  const parallax = getParallaxOffset();

  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 md:px-12 lg:px-24 py-24 flex items-center relative overflow-hidden"
    >
      {/* Formes d'arrière-plan statiques */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-20 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1), transparent)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-60 h-60 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.1), transparent)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Photo avec effet TV et texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Photo avec effet TV */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <motion.div
                className="relative w-64 h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Contenu principal */}
                <div className={`relative w-full h-full transition-all duration-200 ${tvEffect ? 'blur-sm' : ''}`}>
                  {/* Photo de profil */}
                  <Image
                    src="/image_saban.jpg"
                    alt="Saban Ercan - Développeur Full Stack"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="256px"
                  />
                  
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Effet de scan TV */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-tv-scan pointer-events-none" />
                </div>

                {/* Effet de gribouillage TV quand tvEffect est actif */}
                {tvEffect && (
                  <motion.div
                    className="absolute inset-0 tv-static"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                {/* Bordure effet CRT */}
                <div className="absolute inset-0 rounded-3xl border-4 border-gray-700/20 shadow-inner pointer-events-none" />
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              À PROPOS
            </h2>
            <div className="h-px bg-current opacity-20 w-full mb-8" />

            <div className="space-y-6 text-lg leading-relaxed opacity-80">
              <p>
                Hey, je suis <strong className="text-accent-cyan">Saban</strong> et je suis étudiant en{' '}
                <strong className="text-accent-cyan">BUT Informatique</strong> à
                l'IUT Aix-Marseille.
              </p>

              <p>
                Passionné par le développement full stack, j'aime créer des{' '}
                <strong className="text-accent-cyan">
                  applications web interactives
                </strong>{' '}
                qui résolvent des problèmes concrets. De la conception à la mise en
                production, je maîtrise l'ensemble du cycle de développement.
              </p>

              <p>
                Actuellement basé à <strong className="text-accent-cyan">Arles</strong>,
                je suis toujours à la recherche de nouveaux défis techniques et de
                projets innovants qui repoussent les limites du possible.
              </p>
            </div>

            {/* Formation */}
            <div className="mt-12">
              <h3 className="text-xl font-display font-bold mb-4 opacity-50">
                FORMATION
              </h3>
              <p className="text-lg">
                <strong>BUT Informatique</strong> - IUT Aix-Marseille
              </p>
              <p className="opacity-70">2023 - 2026 (en cours)</p>
            </div>

            {/* CV Download avec style moderne */}
            <motion.div className="mt-8">
              <motion.a
                href="/cv/CV_SabanERCAN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-black rounded-full font-medium hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📄</span>
                <span>Curriculum Vitae</span>
                <span>↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Compétences */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold mb-8">
              COMPÉTENCES TECHNIQUES
            </h3>
            <div className="h-px bg-current opacity-20 w-full mb-8" />

            <div className="space-y-12">
              {/* Langages */}
              <div>
                <h4 className="text-xl font-display font-semibold mb-6 opacity-70 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-blue/20 rounded-full flex items-center justify-center text-accent-blue text-sm">
                    L
                  </span>
                  Langages
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.languages.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h4 className="text-xl font-display font-semibold mb-6 opacity-70 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-cyan/20 rounded-full flex items-center justify-center text-accent-cyan text-sm">
                    F
                  </span>
                  Frontend
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-xl font-display font-semibold mb-6 opacity-70 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-pink/20 rounded-full flex items-center justify-center text-accent-pink text-sm">
                    B
                  </span>
                  Backend & BDD
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.backend.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xl font-display font-semibold mb-6 opacity-70 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-yellow/20 rounded-full flex items-center justify-center text-accent-yellow text-sm">
                    T
                  </span>
                  Outils & Frameworks
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-accent-cyan/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}