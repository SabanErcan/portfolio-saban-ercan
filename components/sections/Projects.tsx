'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  slug: string;
  tech: string[];
  isNew?: boolean;
  featured?: boolean;
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'NEXUS',
      category: 'Développement Web',
      year: '2024',
      image: '/projects/nexus/nexus-hero.png',
      description: 'Plateforme unifiée de recommandations multi-médias avec algorithmes d\'IA personnalisés et interface moderne. Intégration complète des APIs de streaming populaires.',
      slug: 'nexus',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
      isNew: true,
      featured: true,
    },
    {
      id: 2,
      title: 'Radar Avions',
      category: 'Application Web',
      year: '2024',
      image: '/projects/avion/avion1.png',
      description: 'Application de suivi d\'avions en temps réel avec carte interactive et données de vol détaillées. Interface responsive et performante.',
      slug: 'radar-avions',
      tech: ['JavaScript', 'Leaflet', 'API'],
    },
    {
      id: 3,
      title: 'Portfolio Personnel',
      category: 'Design UX/UI',
      year: '2024',
      image: '/projects/portfolio/prtfolio.png',
      description: 'Portfolio interactif avec animations fluides et design moderne. Optimisé pour les performances et l\'expérience utilisateur.',
      slug: 'portfolio',
      tech: ['Next.js', 'Three.js', 'Framer Motion'],
    },
    {
      id: 4,
      title: 'Ocean FFT Simulator',
      category: 'Informatique Graphique',
      year: '2024',
      image: '/projects/projet4/image.png',
      description: 'Simulation océan temps réel avec FFT et spectre de Phillips. Rendu OpenGL avancé avec shaders GLSL optimisés.',
      slug: 'ocean-fft',
      tech: ['C++17', 'OpenGL', 'FFTW3'],
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full px-6 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header moderne */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projets <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">récents</span>
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus <span className="text-purple-400 font-semibold">innovantes</span>
          </p>
        </motion.div>

        {/* Grille de projets moderne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const fullProjectData = projectsData.find(p => p.id === project.id);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative rounded-3xl overflow-hidden ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Image avec overlay gradient */}
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={project.featured ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={hoveredProject === project.id ? { x: '100%' } : { x: '-100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Contenu */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    {project.isNew && (
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-purple-500/30">
                        NEW
                      </span>
                    )}
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-500/30">
                        FEATURED
                      </span>
                    )}
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Titre et catégorie */}
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{project.category}</p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/project/${project.slug}`}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      Voir le projet
                    </Link>
                    {fullProjectData?.links?.github && (
                      <a
                        href={fullProjectData.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA GitHub */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-400 mb-6">
            Envie d'en voir plus ?
          </p>
          <motion.a
            href="https://github.com/SabanErcan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-full font-semibold hover:bg-white/10 hover:border-purple-400/50 transition-all group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Découvrir tous mes projets sur GitHub</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
