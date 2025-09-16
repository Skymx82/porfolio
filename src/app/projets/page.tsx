"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Types
interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  technologies?: string[];
  category?: string;
  date?: string;
  url?: string;
  link?: string;
}

// Récupérer toutes les données de projets depuis le composant Projects
const getAllProjects = (): Project[] => {
  // Données des projets
  return [
    {
      id: 'projet1',
      title: 'Maquette de site vitrine pour un restaurant de burgers',
      category: 'Design',
      image: '/projet/AfroBurger.png',
      technologies: ['Figma', 'Illustrator', 'After Effects'],
      description: 'Maquette de site vitrine pour un restaurant de burgers montalbanais avec réservation en ligne et présentation des menus.',
      date: '2023-07',
      url: 'https://www.figma.com/design/gWMeOMOPFMmx4sT9KTgVK0/Afro-Burger-EGR?node-id=0-1&t=dBkkxLjciDcV03L5-1',
    },
    {
      id: 'projet2',
      title: 'Maquette de site vitrine pour un Camps de vacances basket-ball',
      category: 'Design',
      image: '/projet/EldonCamp.png',
      technologies: ['Figma', 'Illustrator', 'After Effects'],
      description: 'Maquette de site vitrine pour un Camps de vacances basket-ball avec une présentation des activités et des tarifs.',
      date: '2023-09',
      url: 'https://www.figma.com/design/b9iGim4s66YsylVaf8Y1k0/Untitled?node-id=0-1&t=7seVN7EKzJUvzFKO-1',
    },
    {
      id: 'projet3',
      title: 'Portfolio Professionnel pour développeur web',
      category: 'Sites Web',
      image: '/projet/PortfolioMattias.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      description: 'Portfolio professionnel pour développeur web avec une présentation des projets et des compétences.',
      date: '2024-09',
      url: 'https://mattias.netlify.app/'
    },
    {
      id: 'projet4',
      title: 'Maquette de site vitrine pour une auto-école',
      category: 'Design',
      image: '/projet/Adam.png',
      technologies: ['Figma', 'Illustrator', 'After Effects'],
      description: 'Maquette de site vitrine pour une auto-école avec une présentation des activités et des tarifs.',
      date: '2024-09',
      url: 'https://www.figma.com/design/XBI7Y44Ev9PGD1KThBKLww/Untitled?node-id=0-1&t=Kw4BTr3kDTH8dGFi-1'
    },
    {
      id: 'projet5',
      title: 'Portfolio d\'un étudiant en Graphisme',
      category: 'Sites Web',
      image: '/projet/PortfolioLouis.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      description: 'Portfolio d\'un étudiant en Graphisme avec une présentation des projets et des compétences.',
      date: '2024-11',
      url: 'https://portfoliolouis.netlify.app/'
    },
    {
      id: 'projet6',
      title: 'Application de mise en relation avec les fournisseur chinois',
      category: 'Applications Mobiles',
      image: '/projet/BBDBuy.png',
      technologies: ['ReactNative', 'Firebase', 'Nodejs'],
      description: 'Application de mise en relation avec les fournisseur chinois avec une présentation des produits et des tarifs.',
      date: '2024-12',
      url: 'https://bbdbuy.netlify.app/'
    },
    {
      id: 'projet7',
      title: 'Site e-commerce de personnalidations de vêtements',
      category: 'E-commerce',
      image: '/projet/SmileTex.png',
      technologies: ['Nextjs', 'Supabase', 'Stripe'],
      description: 'Site e-commerce de personnalidations de vêtements avec une présentation des produits et des tarifs ainsi qu\'un module de personnalisation.',
      date: '2025-03',
      url: 'https://smiletx.vercel.app/'
    },
    {
      id: 'projet8',
      title: 'Notre site Tolarys avec une vrai DA',
      category: 'Sites Web',
      image: '/projet/Tolarys.png',
      technologies: ['Nextjs', 'Tailwind CSS', 'Framer Motion'],
      description: 'Notre site web a été réaliser en collaboration avec un artiste afin de faire un site avec une DA tournée autour de toulouse.',
      date: '2025-02',
      url: 'https://www.tolarys-toulouse.fr/'
    },
    {
      id: 'projet9',
      title: 'Notre SaaS de gestion des auto-écoles',
      category: 'SaaS',
      image: '/projet/TolarysAuto.png',
      technologies: ['Nextjs', 'Supabase', 'Framer Motion'],
      description: 'Notre SaaS de gestion des auto-écoles avec une gestion des plainng entre moniteurs, gestion du parc Auto et une gestion des payments.',
      date: '2025-01',
      url: 'https://tolarys-auto.vercel.app/'
    },
    {
      id: 'projet10',
      title: 'Site web pour AppForge',
      category: 'Sites Web',
      image: '/projet/AppForge.png',
      technologies: ['Nextjs', 'Tailwind CSS', 'Framer Motion'],
      description: 'Site web réaliser avec une estimation du prix et un portfolio modulable.',
      date: '2024-10',
      url: 'https://appforge-eight.vercel.app/'
    },
    {
      id: 'projet11',
      title: 'Site E-commerce de vente de véhicules japonais',
      category: 'E-commerce',
      image: '/projet/Prestigear.png',
      technologies: ['Prestashop', 'PHP', 'React', 'Stripe'],
      description: 'Site E-commerce de vente de véhicules japonais avec une présentation des produits et des tarifs ainsi qu\'un module de personnalisation.',
      date: '2025-03',
      url: 'https://prestigear.vercel.app/'
    },
    {
      id: 'projet12',
      title: 'Site vitrine pour Auto-Ecole',
      category: 'Sites Web',
      image: '/projet/autoecole.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour un auto-école avec un espace éléve.',
      date: '2025-03',
      url: 'https://auto-ashen.vercel.app/',
    },
    {
      id: 'projet13',
      title: 'Site vitrine pour JsBarber',
      category: 'Sites Web',
      image: '/projet/JsBarber.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour un barbier avec module de réservation.',
      date: '2025-04',
      url: 'https://jsbarber.vercel.app/',
    },
    {
      id: 'projet14',
      title: 'Site vitrine pour Etincelle Coworking',
      category: 'Sites Web',
      image: '/projet/Etincelle.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour un coworking avec module de réservation.',
      date: '2025-05',
      url: 'https://etincelle-coworking.vercel.app/',
    },
    {
      id: 'projet15',
      title: 'Site vitrine pour Sabard Bâtiment',
      category: 'Sites Web',
      image: '/projet/Sabard.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour un bâtiment avec module de réservation.',
      date: '2025-04',
      url: 'https://sabard.vercel.app/',
    },
    {
      id: 'projet16',
      title: 'Site vitrine pour Laurent SAS MAHIEUX',
      category: 'Sites Web',
      image: '/projet/Laurent.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour une entreprise de paysage avec module de visualisation avant/après.',
      date: '2025-05',
      url: 'https://laurent-sas-mahieux.vercel.app/',
    },
    {
      id: 'projet17',
      title: 'Site vitrine pour une salle de sport',
      category: 'Sites Web',
      image: '/projet/Gymclub.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour une salle de sport avec module de réservation.',
      date: '2025-05',
      url: 'https://gymclub45.vercel.app/',
    },
    {
      id: 'projet18',
      title: 'Site vitrine pour Sport Club à Orléans',
      category: 'Sites Web',
      image: '/projet/Sportclub.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour un club sportif avec module de réservation.',
      date: '2025-05',
      url: 'https://sportclub45.vercel.app/',
    },
    {
      id: 'projet19',
      title: 'Site vitrine pour Porsche Almeras',
      category: 'Sites Web',
      image: '/projet/Porsche.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour un revendeur de porsche et préparation des véhicules.',
      date: '2025-05',
      url: 'https://porschealmeras.vercel.app/',
    },
    {
      id: 'projet20',
      title: 'Site E-commerce pour un concessionnaire de voitures',
      category: 'E-commerce',
      image: '/projet/Rlauto.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site E-commerce pour un concessionnaire de voitures.',
      date: '2025-05',
      url: 'https://rl-auto-maquette.vercel.app/fr',
    },
    {
      id: 'projet21',
      title: 'Site vitrine pour une entreprise de location de Remorque',
      category: 'Sites Web',
      image: '/projet/Plr.png',
      technologies: ['Nextjs', 'Framer', 'Tailwind CSS'],
      description: 'Site vitrine pour une entreprise de location de Remorque.',
      date: '2025-05',
      url: 'https://plr-orleans.vercel.app/',
    },
  ];
};

// Catégories pour le filtrage
const categories = [
  "Tous",
  "Sites Web",
  "Applications Mobiles",
  "Design",
  "SaaS",
  "E-commerce"
];

// Technologies pour le filtrage
const allTechnologies = [
  "Nextjs",
  "Next.js", 
  "React", 
  "ReactNative",
  "Tailwind CSS", 
  "Framer Motion",
  "Framer",
  "Firebase", 
  "Supabase",
  "Stripe",
  "Nodejs",
  "PHP",
  "Prestashop",
  "Figma", 
  "Illustrator", 
  "After Effects"
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "asc" | "desc">("default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Charger les projets au chargement de la page
  useEffect(() => {
    const allProjects = getAllProjects();
    setProjects(allProjects);
    setFilteredProjects(allProjects);
  }, []);

  // Filtrer les projets en fonction des critères sélectionnés
  useEffect(() => {
    let result = [...projects];

    // Filtrer par catégorie
    if (selectedCategory !== "Tous") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filtrer par technologies
    if (selectedTech.length > 0) {
      result = result.filter(project => {
        // Vérifier si le projet a des technologies
        if (project.technologies) {
          return selectedTech.some(tech => project.technologies!.includes(tech));
        }
        // Sinon vérifier les tags si disponibles
        if (project.tags) {
          return selectedTech.some(tech => project.tags!.includes(tech));
        }
        // Si ni technologies ni tags, ne pas inclure ce projet
        return false;
      });
    }

    // Filtrer par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(query) || 
          project.description.toLowerCase().includes(query)
      );
    }

    // Trier les projets
    switch (sortBy) {
      case "asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // Garder l'ordre par défaut (par id)
        result.sort((a, b) => {
          if (typeof a.id === 'number' && typeof b.id === 'number') {
            return a.id - b.id;
          }
          return String(a.id).localeCompare(String(b.id));
        });
    }

    setFilteredProjects(result);
  }, [projects, selectedCategory, selectedTech, searchQuery, sortBy]);

  // Gérer la sélection/désélection des technologies
  const handleTechToggle = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tous mes projets
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Découvrez l'ensemble de mes réalisations et filtrez-les selon vos centres d'intérêt.
          </motion.p>
        </div>

        {/* Barre de recherche et filtres */}
        <motion.div 
          className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recherche */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Rechercher un projet
              </label>
              <input
                type="text"
                id="search"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Nom ou description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Catégories */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Tri */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trier par
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "default" | "asc" | "desc")}
              >
                <option value="default">Par défaut</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies
            </label>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechToggle(tech)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTech.includes(tech)
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Affichage des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 8) }}
              onClick={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description.substring(0, 100)}...</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies ? project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                    >
                      {tech}
                    </span>
                  )) : project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Voir les détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message si aucun projet ne correspond aux critères */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-600">
              Aucun projet ne correspond à vos critères de recherche.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Tous");
                setSelectedTech([]);
                setSearchQuery("");
                setSortBy("default");
              }}
              className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}

        {/* Bouton retour à l'accueil */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-block px-6 py-3 border border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
      <Footer />

      {/* Modal pour afficher les détails du projet */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                onClick={() => setIsModalOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-black">{selectedProject.title}</h2>
                {selectedProject.category && <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{selectedProject.category}</span>}
              </div>
              
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies ? selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  )) : selectedProject.tags?.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.date && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Date de réalisation</h3>
                  <p className="text-gray-700">{selectedProject.date}</p>
                </div>
              )}
              
              <div className="flex justify-end">
                <a 
                  href={selectedProject.url || selectedProject.link || '#'} 
                  className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter le projet
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
