"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Récupérer toutes les données de projets depuis le composant Projects
const getAllProjects = (): Project[] => {
  // Données des projets
  const projectRows = [
    // Première rangée
    [
      {
        id: 1,
        title: "Tolarys",
        description: "Accessibilité numérique",
        image: "/projet/Tolarys.png",
        tags: ["React", "Tailwind", "Framer Motion"],
        link: "#"
      },
      {
        id: 2,
        title: "Tolarys Auto",
        description: "Accessibilité automobile",
        image: "/projet/TolarysAuto.png",
        tags: ["React", "Tailwind", "Next.js"],
        link: "#"
      },
      {
        id: 3,
        title: "Prestigear",
        description: "Location de voitures de luxe",
        image: "/projet/Prestigear.png",
        tags: ["React", "Node.js", "MongoDB"],
        link: "#"
      },
      {
        id: 4,
        title: "Porsche",
        description: "Concession automobile",
        image: "/projet/Porsche.png",
        tags: ["HTML/CSS", "JavaScript", "PHP"],
        link: "#"
      }
    ],
    // Deuxième rangée
    [
      {
        id: 5,
        title: "Afro Burger",
        description: "Commande en ligne",
        image: "/projet/AfroBurger.png",
        tags: ["React", "Firebase", "Stripe"],
        link: "#"
      },
      {
        id: 6,
        title: "Odyssée Sucrée",
        description: "Pâtisserie artisanale",
        image: "/projet/OdysseeSucree.png",
        tags: ["Shopify", "Liquid", "JavaScript"],
        link: "#"
      },
      {
        id: 7,
        title: "RL Auto",
        description: "Garage automobile",
        image: "/projet/Rlauto.png",
        tags: ["WordPress", "PHP", "CSS"],
        link: "#"
      },
      {
        id: 8,
        title: "Auto-école",
        description: "Réservation de cours",
        image: "/projet/autoecole.png",
        tags: ["React", "Node.js", "MySQL"],
        link: "#"
      }
    ],
    // Troisième rangée
    [
      {
        id: 9,
        title: "Portfolio Mattias",
        description: "Portfolio personnel",
        image: "/projet/PortfolioMattias.png",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        link: "#"
      },
      {
        id: 10,
        title: "Portfolio Louis",
        description: "Portfolio créatif",
        image: "/projet/PortfolioLouis.png",
        tags: ["React", "Three.js", "GSAP"],
        link: "#"
      },
      {
        id: 11,
        title: "Gym Club",
        description: "Salle de sport",
        image: "/projet/Gymclub.png",
        tags: ["React", "Tailwind", "Supabase"],
        link: "#"
      },
      {
        id: 12,
        title: "Sport Club",
        description: "Gestion club sportif",
        image: "/projet/Sportclub.png",
        tags: ["Vue.js", "Express", "MongoDB"],
        link: "#"
      }
    ],
    // Quatrième rangée
    [
      {
        id: 13,
        title: "JS Barber",
        description: "Salon de coiffure",
        image: "/projet/JsBarber.png",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "#"
      },
      {
        id: 14,
        title: "Eldon Camp",
        description: "Réservation camping",
        image: "/projet/EldonCamp.png",
        tags: ["Next.js", "Prisma", "Tailwind"],
        link: "#"
      },
      {
        id: 15,
        title: "BDB Buy",
        description: "Articles d'occasion",
        image: "/projet/BBDBuy.png",
        tags: ["React", "Firebase", "Redux"],
        link: "#"
      },
      {
        id: 16,
        title: "AppForge",
        description: "Applications no-code",
        image: "/projet/AppForge.png",
        tags: ["Vue.js", "Node.js", "MongoDB"],
        link: "#"
      }
    ],
    // Cinquième rangée (projets supplémentaires)
    [
      {
        id: 17,
        title: "Adam",
        description: "Site personnel",
        image: "/projet/Adam.png",
        tags: ["React", "Tailwind", "Firebase"],
        link: "#"
      },
      {
        id: 18,
        title: "Etincelle",
        description: "Agence créative",
        image: "/projet/Etincelle.png",
        tags: ["WordPress", "PHP", "JavaScript"],
        link: "#"
      },
      {
        id: 19,
        title: "Laurent",
        description: "Portfolio artiste",
        image: "/projet/Laurent.png",
        tags: ["Next.js", "Three.js", "GSAP"],
        link: "#"
      },
      {
        id: 20,
        title: "PLR",
        description: "Entreprise BTP",
        image: "/projet/Plr.png",
        tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
        link: "#"
      }
    ],
    // Sixième rangée (projets supplémentaires)
    [
      {
        id: 21,
        title: "Sabard",
        description: "Boutique en ligne",
        image: "/projet/Sabard.png",
        tags: ["Shopify", "Liquid", "CSS"],
        link: "#"
      },
      {
        id: 22,
        title: "SmileTex",
        description: "Textiles personnalisés",
        image: "/projet/SmileTex.png",
        tags: ["WooCommerce", "WordPress", "PHP"],
        link: "#"
      }
    ]
  ];

  // Aplatir les rangées en une seule liste
  return projectRows.flat();
};

// Catégories pour le filtrage
const categories = [
  "Tous",
  "Web",
  "Mobile",
  "Design",
  "Automobile",
  "E-commerce",
  "Portfolio"
];

// Technologies pour le filtrage
const allTechnologies = [
  "React", 
  "Next.js", 
  "Vue.js", 
  "Node.js", 
  "MongoDB", 
  "Firebase", 
  "Tailwind", 
  "Three.js", 
  "PHP", 
  "WordPress",
  "Supabase",
  "MySQL",
  "PostgreSQL",
  "Express",
  "Redux",
  "Prisma",
  "GSAP",
  "Liquid",
  "Stripe",
  "HTML/CSS",
  "JavaScript",
  "Bootstrap",
  "WooCommerce"
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "asc" | "desc">("default");

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
      // Logique de filtrage par catégorie
      // Par exemple, si la catégorie est "Web", filtrer les projets web
      switch (selectedCategory) {
        case "Web":
          result = result.filter(p => 
            p.tags.some(tag => ["React", "Next.js", "Vue.js", "HTML/CSS"].includes(tag))
          );
          break;
        case "Mobile":
          result = result.filter(p => 
            p.description.toLowerCase().includes("mobile") || 
            p.tags.some(tag => ["React Native"].includes(tag))
          );
          break;
        case "Design":
          result = result.filter(p => 
            p.tags.some(tag => ["Framer Motion", "Three.js", "GSAP"].includes(tag))
          );
          break;
        case "Automobile":
          result = result.filter(p => 
            p.description.toLowerCase().includes("auto") || 
            p.title.toLowerCase().includes("auto") ||
            ["Porsche", "RL Auto", "Tolarys Auto", "Prestigear"].includes(p.title)
          );
          break;
        case "E-commerce":
          result = result.filter(p => 
            p.tags.some(tag => ["Shopify", "Stripe"].includes(tag)) ||
            ["Afro Burger", "Odyssée Sucrée", "BDB Buy"].includes(p.title)
          );
          break;
        case "Portfolio":
          result = result.filter(p => 
            p.title.toLowerCase().includes("portfolio")
          );
          break;
      }
    }

    // Filtrer par technologies
    if (selectedTech.length > 0) {
      result = result.filter(project => 
        selectedTech.some(tech => project.tags.includes(tech))
      );
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
        // Garder l'ordre par défaut (par ID)
        result.sort((a, b) => a.id - b.id);
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
    <main className="min-h-screen py-20 px-4 md:px-8">
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
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 8) }}
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
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
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
    </main>
  );
}
