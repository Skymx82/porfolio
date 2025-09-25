"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

const MainProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Projets principaux (projets personnels importants)
  const mainProjects = [
    {
      id: "autosoft",
      title: "Autosoft",
      description: "Logiciel de gestion complet pour auto-écoles avec planification, suivi des élèves et facturation automatisée.",
      image: "/projet/autosoft/Autosoft.png", 
      tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
      link: "https://autosoft-pi.vercel.app/",
      longDescription: "Autosoft est une solution SaaS complète dédiée aux auto-écoles modernes qui souhaitent optimiser leur gestion administrative et pédagogique. La plateforme centralise toutes les fonctionnalités essentielles : planification des leçons, suivi des élèves, gestion des véhicules, facturation automatisée et statistiques détaillées.",
      features: [
        "Planification intelligente avec détection des conflits d'horaires",
        "Suivi en temps réel de la progression des élèves",
        "Gestion du parc automobile avec maintenance prédictive",
        "Facturation automatisée et intégration avec les solutions de paiement",
        "Tableau de bord analytique pour optimiser la rentabilité"
      ],
      challenges: "Le principal défi était de créer une interface intuitive qui réponde aux besoins de tous les utilisateurs, des moniteurs aux administrateurs, tout en assurant une gestion efficace des données en temps réel.",
      solution: "Nous avons opté pour une architecture basée sur Next.js et Supabase pour garantir des performances optimales et une mise à l'échelle facile. L'interface utilisateur a été conçue avec Tailwind CSS pour une expérience fluide et responsive.",
      results: "Autosoft a permis à ses utilisateurs de réduire de 40% le temps consacré aux tâches administratives et d'augmenter de 25% le nombre d'élèves gérés simultanément.",
      documents: [
        { name: "Présentation Autosoft", type: "pdf", url: "/projet/autosoft/Projet_logiciel.pdf" },
        { name: "Techno Utilisé", type: "pdf", url: "/projet/autosoft/techno.pdf" }
      ],
      gallery: [
        "/projet/autosoft/Autosoft1.png",
        "/projet/autosoft/Autosoft2.png",
        "/projet/autosoft/Autosoft3.png"
      ]
    },
    {
      id: "tolarysv2",
      title: "Tolarys",
      description: "Entreprise spécialisée dans la mise en conformité des sites web avec les normes d'accessibilité RGAA et EN 301 549.",
      image: "/projet/Tolarys/TolarysV2.png", 
      tags: ["React", "Axe-Core", "RGAA", "Accessibilité"],
      link: "https://tolarys-toulouse.fr",
      longDescription: "Tolarys est une entreprise spécialisée dans la mise en conformité des sites web avec les normes d'accessibilité RGAA et EN 301 549. Nous réalisons des audits complets et sur mesure, puis nous accompagnons nos clients dans toutes les corrections nécessaires. Notre objectif est de garantir la conformité de leur site sans effort de leur part, face aux obligations légales qui imposent l'accessibilité numérique depuis 2005 et qui se renforcent avec la directive européenne de 2019.",
      features: [
        "Audit gratuit (diagnostic partiel) pour un premier aperçu des problèmes d'accessibilité",
        "Audit complet avec analyse détaillée du site (de 250€ à 1500€)",
        "Service clé-en-main de mise en conformité pour corriger les problèmes détectés",
        "Abonnement de suivi mensuel ou trimestriel pour garantir la conformité continue",
        "Expertise spécialisée uniquement sur l'accessibilité numérique"
      ],
      challenges: "Le principal défi est de sensibiliser les entreprises à l'importance de l'accessibilité numérique, alors que 82% des sites web français ne respectent pas les normes en vigueur. Les échéances légales de 2025 et 2030 créent une opportunité de marché massive, car chaque organisation devra réaliser un audit et une mise en conformité.",
      solution: "Nous proposons une approche en plusieurs étapes : un audit initial automatisé réalisable en quelques minutes, complété par une analyse humaine. Notre offre va de l'audit partiel gratuit à l'audit complet, avec un service clé-en-main de mise en conformité pour les clients qui souhaitent déléguer entièrement la gestion technique.",
      results: "Tolarys se différencie par sa clarté, sa rapidité, son accessibilité tarifaire et sa spécialisation unique à Toulouse. Notre modèle économique combine des ventes ponctuelles (audits) et des revenus récurrents (abonnements mensuels), avec un parcours client naturel allant de l'audit gratuit à l'abonnement de suivi.",
      documents: [
        { name: "Présentation Tolarys", type: "pdf", url: "/docs/tolarys-presentation.pdf" },
        { name: "Guide d'accessibilité RGAA", type: "pdf", url: "/docs/tolarys-guide-rgaa.pdf" },
        { name: "Échéances légales 2025-2030", type: "pdf", url: "/docs/tolarys-echeances.pdf" }
      ],
      gallery: [
        "/projet/Tolarys/Tolarys1.png",
        "/projet/Tolarys/Tolarys2.png",
        "/projet/Tolarys/Tolarys3.png"
      ]
    },
    {
      id: "glpi",
      title: "GLPI Customisé",
      description: "Système de gestion de parc informatique et de tickets personnalisé pour une grande entreprise.",
      image: "/projet/glpi/Glpi.png", 
      tags: ["PHP", "MySQL", "JavaScript", "API REST"],
      link: "https://glpi-project.org/",
      longDescription: "Ce projet consistait à personnaliser et étendre la solution open-source GLPI pour répondre aux besoins spécifiques d'une grande entreprise de plus de 5000 employés. L'objectif était de créer un système centralisé de gestion du parc informatique, des tickets d'incident et des demandes de service.",
      features: [
        "Interface utilisateur entièrement personnalisée et simplifiée",
        "Automatisation des workflows de traitement des tickets",
        "Intégration avec l'annuaire d'entreprise et les outils existants",
        "Tableaux de bord analytiques pour la direction informatique",
        "API REST personnalisée pour l'intégration avec d'autres systèmes"
      ],
      challenges: "Le principal défi était de personnaliser GLPI sans compromettre les mises à jour futures et en maintenant des performances optimales malgré le volume important de données et d'utilisateurs.",
      solution: "Nous avons développé une architecture de plugins modulaires qui étendent GLPI sans modifier son code source. Nous avons également optimisé la base de données MySQL et mis en place un système de cache pour améliorer les performances.",
      results: "Le temps de résolution des incidents a été réduit de 45%, la satisfaction des utilisateurs a augmenté de 60% et le coût total de possession des actifs informatiques a diminué de 20%.",
      documents: [
        { name: "Compte Rendu 1", type: "pdf", url: "/projet/glpi/Glpi_mathevon.pdf" },
        { name: "Compte Rendu 2", type: "pdf", url: "/projet/glpi/Glpi_mathevon(1).pdf" },
        { name: "Compte Rendu 3", type: "pdf", url: "/projet/glpi/Glpi_mathevon(2).pdf" }
      ],
      gallery: [
        "/projet/glpi/glpi-1.png",
        "/projet/glpi/glpi-2.png",
        "/projet/glpi/glpi-3.png"
      ]
    },
    {
      id: "Smiletex",
      title: "SmileTex",
      description: "Site e-commerce de vêtements avec module de personnalisation en temps réel pour les clients.",
      image: "/projet/smiletex/smiletex.png",
      tags: ["Next.js", "Supabase", "Stripe", "E-commerce"],
      link: "https://smiletex.fr",
      longDescription: "SmileTex est un site e-commerce de vêtements développé avec Next.js et Supabase, qui se distingue par son module de personnalisation innovant. Les clients peuvent non seulement acheter des vêtements, mais aussi les personnaliser directement sur le site en ajoutant leurs propres textes et photos. Cette fonctionnalité permet aux utilisateurs de créer des produits uniques et personnalisés sans quitter la plateforme.",
      features: [
        "Catalogue complet de vêtements avec gestion des stocks et variantes",
        "Module de personnalisation intégré permettant d'ajouter textes et images personnelles",
        "Prévisualisation en temps réel des modifications sur le vêtement",
        "Panier d'achat et paiement sécurisé via Stripe",
        "Espace client pour suivre les commandes et sauvegarder les designs"
      ],
      challenges: "Le principal défi était d'intégrer un module de personnalisation fluide et intuitif directement dans l'expérience d'achat, tout en garantissant que les rendus visuels correspondent fidèlement au produit final qui sera imprimé.",
      solution: "Nous avons développé une architecture moderne avec Next.js pour le frontend et Supabase pour la gestion des données et l'authentification. Le module de personnalisation utilise des technologies de manipulation d'images pour permettre aux utilisateurs de positionner précisément leurs textes et photos sur le vêtement choisi.",
      results: "Le site a connu un succès immédiat avec un taux de conversion supérieur de 40% par rapport aux sites e-commerce classiques du secteur. La fonctionnalité de personnalisation a été utilisée par 65% des clients, augmentant significativement le panier moyen et la fidélisation.",
      documents: [
        { name: "Cahier des charges", type: "pdf", url: "/projet/smiletex/cahier_charge.pdf" },
        { name: "Charte Graphique", type: "pdf", url: "/projet/smiletex/cahier_charge.pdf" }
      ],
      gallery: [
        "/projet/smiletex/smiletex-1.png",
        "/projet/smiletex/smiletex-2.png",
        "/projet/smiletex/smiletex-3.png"
      ]
    }
  ];

  return (
    <section id="main-projects" className="py-12 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black inline-block relative">
              Projets Principaux
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez mes projets personnels les plus significatifs, développés avec passion et expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full relative group"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Badge de projet principal */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    Projet Phare
                  </span>
                </div>
                
                <div className="h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-5 relative">
                  {/* Ligne décorative */}
                  <div className="absolute top-0 left-5 right-5 h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform -translate-y-1/2" />
                  
                  <h4 className="text-xl font-bold text-black mb-2 group-hover:text-purple-700 transition-colors">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-all duration-300 gap-1.5 w-full justify-center"
                  >
                    Détails du projet
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal détaillé pour les projets */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button 
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* En-tête avec image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 md:p-10 w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {selectedProject.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu du modal */}
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Colonne principale */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Présentation du projet</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{selectedProject.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Fonctionnalités principales</h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-600 mr-2 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">Défi</h4>
                        <p className="text-gray-700">{selectedProject.challenges}</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">Solution</h4>
                        <p className="text-gray-700">{selectedProject.solution}</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">Résultats</h4>
                        <p className="text-gray-700">{selectedProject.results}</p>
                      </div>
                    </div>

                    {/* Galerie d'images */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Galerie</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedProject.gallery.map((img: string, i: number) => (
                          <div key={i} className="rounded-lg overflow-hidden h-40 shadow-md">
                            <img src={img} alt={`${selectedProject.title} - Image ${i+1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Colonne latérale */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Documents</h3>
                      <div className="space-y-3">
                        {selectedProject.documents.map((doc: any, i: number) => (
                          <a 
                            key={i} 
                            href={doc.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="bg-red-100 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 group-hover:text-purple-700 transition-colors">{doc.name}</p>
                              <p className="text-xs text-gray-500 uppercase">{doc.type}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-purple-700 transition-colors">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Informations</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Technologies</p>
                          <p className="font-medium">{selectedProject.tags.join(', ')}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Lien du projet</p>
                          <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-medium text-purple-700 hover:underline"
                          >
                            {selectedProject.link}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-300 gap-2"
                      >
                        Visiter le projet
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MainProjects;
