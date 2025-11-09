'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useParams } from 'next/navigation';
import { getProjectBySlug } from '@/data/projects';
import { useState } from 'react';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Link href="/#projects" className="btn btn-primary">
            ← Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  // Galerie d'images spécifique pour NEXUS
  const nexusImages = [
    {
      src: '/images/profil.png',
      title: 'Profil Utilisateur',
      description: 'Écran profil / compte utilisateur'
    },
    {
      src: '/projects/nexus/movies-discover.png',
      title: 'Découverte de Films',
      description: 'Interface de découverte avec intégration TMDB API'
    },
    {
      src: '/projects/nexus/movies-ratings.png',
      title: 'Évaluations Films',
      description: 'Système de notation et recommandations personnalisées'
    },
    {
      src: '/projects/nexus/music-search.png',
      title: 'Recherche Musicale',
      description: 'Integration Spotify API pour la découverte musicale'
    },
    {
      src: '/projects/nexus/music-ratings.png',
      title: 'Évaluations Musique',
      description: 'Notation et recommandations musicales'
    },
    {
      src: '/projects/nexus/books.png',
      title: 'Catalogue Livres',
      description: 'Interface Google Books API intégrée'
    },
    {
      src: '/projects/nexus/recommendationsFilm.png',
      title: 'Recommandations Films',
      description: 'Algorithme de recommandation basé sur les goûts'
    },
    {
      src: '/projects/nexus/recommendationsbook.png',
      title: 'Recommandations Livres',
      description: 'Suggestions personnalisées de lectures'
    },
    {
      src: '/projects/nexus/recommendationsmusic.png',
      title: 'Recommandations Musique',
      description: 'Découverte musicale intelligente'
    }
  ];

  return (
    <>
      {/* Effet de bruit */}
      <div className="noise" />
      
      {/* Navigation fixe */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 backdrop-blur-md bg-black/20"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link 
            href="/#projects"
            className="flex items-center gap-2 text-sm hover:text-accent-cyan transition-colors"
          >
            <ArrowLeft size={16} />
            Retour aux projets
          </Link>
          
          <div className="flex items-center gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent-cyan transition-colors"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent-cyan transition-colors"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </motion.nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Formes animées en arrière-plan - Static */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15), transparent)',
                filter: 'blur(60px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-72 h-72 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.15), transparent)',
                filter: 'blur(40px)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Catégorie et année */}
              <div className="flex items-center justify-center gap-8 mb-6 text-sm opacity-70">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.duration}</span>
              </div>

              {/* Titre principal */}
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.title}
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                className="text-2xl md:text-3xl mb-8 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl max-w-4xl mx-auto mb-12 opacity-70 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-gray-800/30 border border-gray-700/50 text-sm backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-sm opacity-50">↓ Découvrir le projet</div>
            </motion.div>
          </div>
        </section>

        {/* Image Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-24">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden relative">
              {project.slug === 'nexus' ? (
                <Image
                  src="/projects/nexus/nexus-hero.png"
                  alt="NEXUS Platform Hero"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              ) : project.slug === 'portfolio' ? (
                <Image
                  src="/projects/portfolio/prtfolio.png"
                  alt="Portfolio Personnel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              ) : project.slug === 'radar-avions' ? (
                <Image
                  src="/projects/avion/avion1.png"
                  alt="Radar Avions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              ) : project.slug === 'ocean-fft' ? (
                <Image
                  src="/projects/projet4/image.png"
                  alt="Ocean FFT Simulator"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl opacity-20 mb-4">
                      {project.title === 'Application Qt C++' && '⚡'}
                    </div>
                    <p className="text-lg opacity-50">Image principale du projet</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* Contenu principal */}
        <section className="px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
              {/* Contenu principal */}
              <div className="lg:col-span-2 space-y-16">
                {/* Problématique */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6">Problématique</h2>
                  <div className="h-px bg-current opacity-10 mb-6" />
                  <p className="text-lg leading-relaxed opacity-80">{project.problem}</p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6">Solution Technique</h2>
                  <div className="h-px bg-current opacity-10 mb-6" />
                  <p className="text-lg leading-relaxed opacity-80">{project.solution}</p>
                </motion.div>

                {/* Fonctionnalités */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6">Fonctionnalités Principales</h2>
                  <div className="h-px bg-current opacity-10 mb-6" />
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg opacity-80">
                        <span className="text-accent-cyan mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Défis */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6">Défis Techniques</h2>
                  <div className="h-px bg-current opacity-10 mb-6" />
                  <p className="text-lg leading-relaxed opacity-80">{project.challenges}</p>
                </motion.div>

                {/* Résultats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-6">Résultats</h2>
                  <div className="h-px bg-current opacity-10 mb-6" />
                  <ul className="space-y-4">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg opacity-80">
                        <span className="text-accent-green mt-1 flex-shrink-0">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-12">
                {/* Informations du projet */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-800/20 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-display font-bold mb-6">Informations</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-50 mb-1">Durée</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm opacity-50 mb-1">Équipe</p>
                      <div className="space-y-1">
                        {project.team.map((member, index) => (
                          <p key={index} className="font-medium">{member}</p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm opacity-50 mb-1">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Liens */}
                {(project.links.demo || project.links.github) && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                  >
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full btn btn-primary text-center"
                      >
                        Voir la démo ↗
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full btn border-2 border-current text-center hover:bg-opacity-10 hover:bg-gray-500"
                      >
                        Voir le code ↗
                      </a>
                    )}
                  </motion.div>
                )}

                {/* Témoignage */}
                {project.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-accent-cyan/10 rounded-2xl p-6 border border-accent-cyan/20"
                  >
                    <blockquote className="text-sm italic mb-4 opacity-80">
                      "{project.testimonial.text}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-sm">{project.testimonial.author}</p>
                      <p className="text-xs opacity-60">{project.testimonial.role}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Galerie d'images spécialisée pour NEXUS */}
        {project.slug === 'nexus' && (
          <section className="px-6 md:px-12 lg:px-24 py-24">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-4 text-center">Galerie du Projet</h2>
              <p className="text-lg opacity-70 text-center mb-16">
                Découvrez les différentes fonctionnalités de la plateforme NEXUS
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {nexusImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden relative mb-4 transition-all duration-200">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Voir en grand</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-display font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-70">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Modal pour affichage en grand */}
              {selectedImage !== null && (
                <motion.div
                  className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div
                    className="relative w-[95vw] h-[90vh]"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src={nexusImages[selectedImage].src}
                        alt={nexusImages[selectedImage].title}
                        fill
                        className="object-contain"
                        sizes="95vw"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {nexusImages[selectedImage].title}
                      </h3>
                      <p className="opacity-70">{nexusImages[selectedImage].description}</p>
                    </div>
                    <button
                      className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
                      onClick={() => setSelectedImage(null)}
                    >
                      ×
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </section>
        )}

        {/* Galerie d'images pour autres projets */}
        {project.slug !== 'nexus' && (
          <section className="px-6 md:px-12 lg:px-24 py-24">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-12 text-center">Aperçu du Projet</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.gallery.map((imagePath, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={imagePath}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Voir en grand</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Modal pour affichage en grand - autres projets */}
              {selectedImage !== null && (
                <motion.div
                  className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div
                    className="relative w-[95vw] h-[90vh]"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src={project.images.gallery[selectedImage]}
                        alt={`${project.title} - Image ${selectedImage + 1}`}
                        fill
                        className="object-contain"
                        sizes="95vw"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {project.title} - Image {selectedImage + 1}
                      </h3>
                    </div>
                    <button
                      className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
                      onClick={() => setSelectedImage(null)}
                    >
                      ×
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </section>
        )}

        {/* Navigation vers projet suivant */}
        {project.nextProject && (
          <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-current border-opacity-10">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <p className="text-lg opacity-70 mb-8">Projet suivant</p>
                <Link
                  href={`/project/${project.nextProject.slug}`}
                  className="inline-block group"
                >
                  <div className="text-4xl md:text-6xl font-display font-bold group-hover:text-accent-cyan transition-colors">
                    {project.nextProject.title} →
                  </div>
                </Link>
              </div>
            </motion.div>
          </section>
        )}
      </main>
    </>
  );
}