'use client';

import { motion } from 'framer-motion';
import { HiX, HiArrowLeft } from 'react-icons/hi';
import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  results: string[];
  stack: string[];
  year: string;
  context: string;
  links: {
    demo?: string;
    github?: string;
  };
  screenshots: string[];
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    // Désactiver le scroll du body
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen px-6 md:px-12 lg:px-24 py-24">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto bg-opacity-95 rounded-3xl p-8 md:p-12"
          style={{
            backgroundColor: 'var(--bg)',
          }}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-8 right-8 p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiX className="w-8 h-8" />
          </motion.button>

          {/* Hero Image */}
          <div className="relative aspect-video bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 rounded-2xl overflow-hidden mb-8 flex items-center justify-center">
            <span className="text-9xl opacity-20">
              {project.title === 'NEXUS' ? '🎬' : '🛫'}
            </span>
            {/* Badge du projet */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm text-white font-medium">{project.category}</span>
            </div>
            {/* Badges technologies principales */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="border-b border-current border-opacity-20 pb-6 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              {project.title}
            </h1>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <p className="text-sm opacity-50 mb-1">CATÉGORIE</p>
              <p className="text-lg">{project.category}</p>
            </div>
            <div>
              <p className="text-sm opacity-50 mb-1">STACK</p>
              <p className="text-lg">{project.stack.join(' • ')}</p>
            </div>
            <div>
              <p className="text-sm opacity-50 mb-1">ANNÉE</p>
              <p className="text-lg">{project.year}</p>
            </div>
            <div>
              <p className="text-sm opacity-50 mb-1">CONTEXTE</p>
              <p className="text-lg">{project.context}</p>
            </div>
            {(project.links.demo || project.links.github) && (
              <div className="md:col-span-2">
                <p className="text-sm opacity-50 mb-1">LIENS</p>
                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-gradient transition-all"
                    >
                      [Voir la démo ↗]
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-gradient transition-all"
                    >
                      [Code source ↗]
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">DESCRIPTION</h2>
            <div className="h-px bg-current opacity-10 mb-4" />
            <p className="text-lg leading-relaxed opacity-80">
              {project.longDescription}
            </p>
          </div>

          {/* Problématique */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">PROBLÉMATIQUE</h2>
            <div className="h-px bg-current opacity-10 mb-4" />
            <p className="text-lg leading-relaxed opacity-80">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">SOLUTION TECHNIQUE</h2>
            <div className="h-px bg-current opacity-10 mb-4" />
            <p className="text-lg leading-relaxed opacity-80">{project.solution}</p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">FONCTIONNALITÉS CLÉS</h2>
            <div className="h-px bg-current opacity-10 mb-4" />
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="text-lg opacity-80 flex items-start gap-3">
                  <span className="text-accent-cyan mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">DÉFIS TECHNIQUES</h2>
              <div className="h-px bg-current opacity-10 mb-4" />
              <p className="text-lg leading-relaxed opacity-80">{project.challenges}</p>
            </div>
          )}

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">RÉSULTATS</h2>
            <div className="h-px bg-current opacity-10 mb-4" />
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="text-lg opacity-80 flex items-start gap-3">
                  <span className="text-accent-green mt-1">•</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back Button */}
          <motion.button
            onClick={onClose}
            className="flex items-center gap-2 text-lg opacity-70 hover:opacity-100 transition-opacity"
            whileHover={{ x: -5 }}
          >
            <HiArrowLeft />
            <span>Retour aux projets</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
