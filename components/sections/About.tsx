'use client';

import { motion } from 'framer-motion';
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
  SiNextdotjs,
  SiTypescript,
  SiDocker,
} from 'react-icons/si';
import { FaDatabase, FaJava } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
  ];

  const experiences = [
    {
      year: '2024',
      title: 'Projets Full Stack',
      description: 'Développement d\'applications web modernes avec React, Next.js et FastAPI',
    },
    {
      year: '2023',
      title: 'Début du parcours',
      description: 'Passion pour le code et apprentissage autodidacte',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-pink-500/12 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
            À propos de <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">moi</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Développeur passionné créant des <span className="text-purple-400 font-semibold">expériences web modernes</span>
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left: Photo + Intro */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Photo avec effet moderne */}
            <div className="relative mb-8">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Background gradient animé */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-3xl blur-2xl opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10">
                  <Image
                    src="/image_saban.jpg"
                    alt="Saban Ercan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Salut ! Je suis <span className="text-cyan-400 font-semibold">Saban</span>, 
                étudiant en <span className="text-cyan-400 font-semibold">BUT Informatique</span> à 
                l'IUT Aix-Marseille.
              </p>
              <p className="leading-relaxed">
                Passionné par le <span className="text-purple-400">développement web</span> et 
                les <span className="text-purple-400">nouvelles technologies</span>, je crée des 
                applications modernes qui allient performance et esthétique.
              </p>
              <p className="leading-relaxed">
                Mon terrain de jeu favori ? Le <span className="text-blue-400">Full Stack</span> — 
                de React à Node.js, en passant par PostgreSQL et Docker.
              </p>
            </div>

            {/* CV Download */}
            <motion.a
              href="/cv/CV_SabanERCAN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Télécharger mon CV</span>
            </motion.a>
          </motion.div>

          {/* Right: Skills + Timeline */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Skills Grid Modern */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-display font-bold flex items-center gap-3">
                  <span className="w-1.5 h-10 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 rounded-full" />
                  Stack Technique
                </h3>
                <motion.div 
                  className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20"
                  animate={{
                    borderColor: ['rgba(168, 85, 247, 0.2)', 'rgba(236, 72, 153, 0.2)', 'rgba(168, 85, 247, 0.2)'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-sm font-semibold text-purple-300">10+ Technologies</span>
                </motion.div>
              </div>
              
              {/* Catégories de compétences */}
              <div className="space-y-8">
                {/* Frontend */}
                <div>
                  <h4 className="text-sm font-semibold text-purple-300 mb-4 uppercase tracking-wider">Frontend</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {skills.filter(s => ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind'].includes(s.name)).map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="group relative aspect-square rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-purple-400/40 transition-all duration-300 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ y: -8, scale: 1.05 }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                          <skill.icon 
                            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-125 transition-transform duration-300" 
                            style={{ color: skill.color }} 
                          />
                          <div className="text-xs font-semibold text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity">{skill.name}</div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Backend & Database */}
                <div>
                  <h4 className="text-sm font-semibold text-pink-300 mb-4 uppercase tracking-wider">Backend & Database</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {skills.filter(s => ['Node.js', 'PostgreSQL', 'Docker', 'C++', 'Git'].includes(s.name)).map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="group relative aspect-square rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-pink-400/40 transition-all duration-300 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ y: -8, scale: 1.05 }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                          <skill.icon 
                            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-125 transition-transform duration-300" 
                            style={{ color: skill.color }} 
                          />
                          <div className="text-xs font-semibold text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity">{skill.name}</div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 blur-xl" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
                Parcours
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-purple-300">{exp.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: '5+', label: 'Projets', icon: '🚀' },
            { number: '10+', label: 'Technologies', icon: '⚡' },
            { number: '1.5', label: 'Ans d\'expérience', icon: '📅' },
            { number: '100%', label: 'Motivation', icon: '💪' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
