export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  team: string[];
  tech: string[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  results: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  links: {
    demo?: string;
    github?: string;
    behance?: string;
  };
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  nextProject?: {
    slug: string;
    title: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'nexus',
    title: 'NEXUS',
    subtitle: 'Système de Recommandation Multi-Médias',
    category: 'Développement Web',
    year: '2024',
    duration: '3 mois',
    team: ['Saban Ercan'],
    tech: ['React 18', 'FastAPI', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Framer Motion', 'JWT', 'SQLAlchemy'],
    description: 'NEXUS est une plateforme web moderne qui révolutionne la découverte de contenu en unifiant films, musique et livres dans une seule interface intuitive. Le système propose des recommandations personnalisées basées sur l\'intelligence artificielle.',
    problem: 'Comment créer une expérience unifiée pour découvrir et noter différents types de médias (films, musique, livres) tout en fournissant des recommandations personnalisées intelligentes à partir de 3 APIs différentes ?',
    solution: 'Architecture microservices avec backend FastAPI asynchrone intégrant 3 APIs externes (TMDB, Spotify, Google Books), frontend React moderne avec animations fluides, système d\'authentification JWT sécurisé, et conteneurisation Docker complète.',
    features: [
      'Découverte et notation de films via TMDB API',
      'Recherche musicale avec intégration Spotify',
      'Catalogue de livres Google Books',
      'Système de recommandations personnalisées',
      'Authentification sécurisée avec JWT',
      'Statistiques et analytics détaillées',
      'Interface responsive avec animations',
      'Architecture microservices containerisée'
    ],
    challenges: 'Gérer l\'authentification et la synchronisation de 3 APIs différentes, optimiser les performances avec des pools de connexions PostgreSQL, implémenter un système de recommandation hybride, et assurer une UX fluide avec des animations complexes.',
    results: [
      'Application full-stack complètement fonctionnelle',
      'Intégration réussie de 3 APIs externes',
      'Système de recommandation opérationnel',
      'Temps de chargement < 2 secondes',
      'Score Lighthouse 90+',
      'Architecture scalable prête pour production'
    ],
    images: {
      hero: '/projects/nexus/nexus-hero.jpg',
      gallery: [
        '/projects/nexus/nexus-dashboard.jpg',
        '/projects/nexus/nexus-movies.jpg',
        '/projects/nexus/nexus-music.jpg',
        '/projects/nexus/nexus-books.jpg',
        '/projects/nexus/nexus-mobile.jpg'
      ]
    },
    links: {
      github: 'https://github.com/SabanErcan/Nexus',
      // demo: 'https://nexus-demo.vercel.app'
    },
    testimonial: {
      text: 'Un projet impressionnant qui démontre une maîtrise complète du développement full-stack moderne.',
      author: 'Prof. Martin Dubois',
      role: 'Enseignant BUT Informatique'
    },
    nextProject: {
      slug: 'radar-avions',
      title: 'Radar Avions'
    }
  },
  {
    id: 2,
    slug: 'radar-avions',
    title: 'Radar Avions',
    subtitle: 'Suivi d\'Avions en Temps Réel',
    category: 'Application Web',
    year: '2024',
    duration: '2 mois',
    team: ['Saban Ercan'],
    tech: ['JavaScript ES6+', 'Leaflet', 'Webpack', 'SCSS', 'OpenSky API', 'REST Countries API'],
    description: 'Application web de suivi d\'avions en temps réel par pays. Permet de visualiser tous les avions actuellement en vol sur une carte interactive avec leurs détails techniques complets.',
    problem: 'Comment visualiser en temps réel la position de milliers d\'avions à travers le monde et afficher leurs informations techniques de manière claire et interactive ?',
    solution: 'Architecture orientée objet avec 6 classes, requêtes asynchrones vers OpenSky Network API, carte interactive Leaflet avec marqueurs rotatifs, et build optimisé avec Webpack.',
    features: [
      'Recherche d\'avions par pays avec validation',
      'Affichage temps réel sur carte OpenStreetMap',
      'Détails techniques (altitude, vitesse, cap)',
      'Informations pays (drapeau, capitale)',
      'Marqueurs d\'avions rotatifs selon cap',
      'Interface responsive complète',
      'Optimisations performance'
    ],
    challenges: 'L\'API OpenSky ne permettant pas de filtrer par pays d\'origine, j\'ai dû récupérer tous les avions du monde (~200 KB) puis filtrer côté client tout en maintenant des performances optimales.',
    results: [
      'Support de 195+ pays',
      'Affichage de 7500+ avions simultanés',
      'Temps de recherche < 1 seconde',
      'Compatible tous navigateurs modernes',
      'Interface intuitive et responsive'
    ],
    images: {
      hero: '/projects/avion/avion1.png',
      gallery: [
        '/projects/avion/avion1.png',
        '/projects/avion/avion2.png'
      ]
    },
    links: {
      github: 'https://github.com/SabanErcan/Radar'
      // demo: 'https://radar-avions.vercel.app'
    },
    nextProject: {
      slug: 'portfolio',
      title: 'Portfolio'
    }
  },
  {
    id: 3,
    slug: 'portfolio',
    title: 'Portfolio Personnel',
    subtitle: 'Site Web Interactif',
    category: 'Design UX/UI',
    year: '2024',
    duration: '1 mois',
    team: ['Saban Ercan'],
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Vercel'],
    description: 'Portfolio personnel développé avec Next.js 14 mettant en avant mes compétences et projets. Interface moderne avec animations 3D, interactions souris et design responsive.',
    problem: 'Comment créer un portfolio qui se démarque visuellement tout en restant professionnel, performant et en mettant parfaitement en valeur mes compétences techniques ?',
    solution: 'Développement avec Next.js 14 App Router, animations Framer Motion et Three.js, design system cohérent, optimisations de performance avancées et déploiement sur Vercel.',
    features: [
      'Design moderne inspiré des meilleurs',
      'Animations 3D interactives',
      'Effets de souris dynamiques',
      'Thème sombre adaptatif',
      'Navigation fluide et intuitive',
      'Optimisations SEO complètes',
      'Performance score 95+',
      'Responsive design parfait'
    ],
    challenges: 'Créer des animations Three.js performantes, gérer les interactions souris complexes, optimiser le bundle pour un chargement rapide, et assurer une excellente expérience sur tous les appareils.',
    results: [
      'Score Lighthouse 95+',
      'Temps de chargement < 1.5s',
      'Design responsive parfait',
      'Référencement optimisé',
      'Animations fluides 60 FPS',
      'Interface utilisateur exceptionnelle'
    ],
    images: {
      hero: '/projects/portfolio/prtfolio.png',
      gallery: [
        '/projects/portfolio/prtfolio.png',
        '/projects/portfolio/p2.png',
        '/projects/portfolio/p3.png',
        '/projects/portfolio/p4.png'
      ]
    },
    links: {
      github: 'https://github.com/SabanErcan/portfolio-saban'
    },
    nextProject: {
      slug: 'qt-app',
      title: 'App Qt C++'
    }
  },
  {
    id: 4,
    slug: 'ocean-fft',
    title: 'Ocean FFT Simulator',
    subtitle: 'Simulation Océan Temps Réel',
    category: 'Informatique Graphique',
    year: '2024',
    duration: '3 mois',
    team: ['Saban Ercan'],
    tech: ['C++17', 'OpenGL 4.3', 'FFTW3', 'GLSL', 'ImGui', 'CMake'],
    description: 'Simulateur d\'océan physiquement réaliste en temps réel utilisant la transformée de Fourier rapide (FFT) et le spectre de Phillips. Rendu avancé avec OpenGL 4.3 et shaders GLSL optimisés.',
    problem: 'Comment créer une simulation d\'océan visuellement réaliste et performante (60 FPS) en utilisant des principes physiques avancés et le calcul parallèle GPU ?',
    solution: 'Implémentation du spectre de Phillips avec 5 transformées FFT parallèles (height, choppy X/Z, normals X/Y), pipeline de rendu OpenGL complet avec displacement mapping, Fresnel reflections et génération d\'écume procédurale.',
    features: [
      'FFT temps réel avec FFTW3 (~3400 lignes C++)',
      'Spectre de Phillips physiquement réaliste',
      '5 transformées FFT par frame (height, choppy, normals)',
      'Shaders GLSL avancés (displacement, Fresnel, foam)',
      'Interface Dear ImGui avec 4 presets (Calme/Normal/Tempête/Cyclone)',
      'Caméra FPS libre avec contrôles WASD',
      'Mode wireframe pour visualisation technique',
      'Performances optimisées 60 FPS @ 128×128',
      'Cross-platform (Windows/Linux/macOS)',
      'Architecture C++ moderne (RAII, smart pointers)'
    ],
    challenges: 'Maîtriser les transformées de Fourier et leur application au traitement du signal, optimiser les performances pour maintenir 60 FPS avec calculs FFT intensifs, implémenter des shaders complexes (Fresnel, subsurface scattering), gérer la symétrie hermitienne pour garantir des résultats réels.',
    results: [
      '~3400 lignes de C++17 moderne',
      '60 FPS constant @ résolution 128×128',
      '30-45 FPS @ résolution 256×256',
      'Pipeline complet vertex/fragment shaders',
      'Gestion automatique ressources (RAII)',
      'Documentation technique exhaustive (600+ lignes)',
      'Production-ready avec logs et gestion d\'erreurs'
    ],
    images: {
      hero: '/projects/projet4/image.png',
      gallery: [
        '/projects/projet4/image.png'
      ]
    },
    links: {
      github: 'https://github.com/SabanErcan/OceanFFT-Simulator'
    },
    nextProject: {
      slug: 'nexus',
      title: 'NEXUS'
    }
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}