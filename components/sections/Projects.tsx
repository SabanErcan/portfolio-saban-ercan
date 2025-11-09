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
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number>(1);

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
    },
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject) || projects[0];
  const fullProjectData = projectsData.find(p => p.id === selectedProject);

  return (
    <section
      id="projects"
      className="min-h-screen w-full px-6 md:px-12 lg:px-24 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
                PROJETS
              </h2>
              <span className="text-2xl opacity-50">{projects.length}</span>
            </div>
          </div>
          <div className="h-px bg-current opacity-20 w-full mt-4" />
        </motion.div>

        {/* Layout 50/50 avec hauteurs parfaitement équilibrées */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Colonne gauche - Liste des projets */}
          <div className="flex flex-col">
            <div className="space-y-2 h-[480px] flex flex-col justify-between">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`project-card p-4 rounded-xl cursor-pointer transition-all duration-300 border flex-1 relative ${
                    selectedProject === project.id 
                      ? 'bg-white/5 border-cyan-400/50 shadow-lg shadow-cyan-400/10' 
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-4">
                      <div className="text-sm opacity-40 font-mono min-w-[32px]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-display font-bold">
                            {project.title}
                          </h3>
                          {project.isNew && (
                            <span className="text-xs px-2 py-1 bg-cyan-400 text-black rounded-full">
                              NEW
                            </span>
                          )}
                        </div>
                        <div className="text-xs opacity-50 mt-1">{project.year}</div>
                      </div>
                    </div>
                    <div className="text-xs opacity-40">
                      {project.category.split(' ')[0]}
                    </div>
                  </div>

                  {/* Indicateur de sélection */}
                  <div className={`absolute left-0 top-0 w-1 h-full bg-cyan-400 rounded-r transition-opacity duration-300 ${
                    selectedProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </motion.div>
              ))}
            </div>
          </div>          {/* Colonne droite - Détails du projet sélectionné */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[480px] flex flex-col"
          >
            {/* Image du projet */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex-shrink-0">
              {/* Image réelle du projet */}
              <Image
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Badge nouveau */}
              {selectedProjectData.isNew && (
                <div className="absolute top-4 left-4 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Nouveau
                </div>
              )}
            </div>

            {/* Informations détaillées */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {selectedProjectData.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm opacity-70">
                    <span>{selectedProjectData.category}</span>
                    <span>•</span>
                    <span>{selectedProjectData.year}</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed opacity-80">
                  {selectedProjectData.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-medium mb-2 opacity-70">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-lg bg-white/10 text-xs border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-3">
                <Link 
                  href={`/project/${selectedProjectData.slug}`}
                  className="btn btn-primary flex-1 text-center text-sm py-2"
                >
                  Voir le projet
                </Link>
                {fullProjectData?.links?.github && (
                  <a 
                    href={fullProjectData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border-2 border-current hover:bg-white/10 px-4 text-sm py-2"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action - Séparé visuellement */}
        <div className="w-full">
          <div className="h-px bg-current opacity-10 w-full my-16" />
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg opacity-70 mb-8">
              Découvrez plus de projets sur mon profil GitHub
            </p>
            <a
              href="https://github.com/SabanErcan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-cyan-300 transition-all duration-300"
            >
              Voir tous mes projets →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
