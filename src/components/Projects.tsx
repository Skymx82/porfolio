"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  // Données des projets organisées en rangées pour le défilement
  const projectRows = [
    // Première rangée
    [
      {
        id: 1,
        title: "Tolarys",
        description: "Accessibilité numérique",
        image: "/projet/Tolarys.png",
        tags: ["React", "Tailwind", "Framer Motion"], // À personnaliser
        link: "#"
      },
      {
        id: 2,
        title: "Tolarys Auto",
        description: "Accessibilité automobile",
        image: "/projet/TolarysAuto.png",
        tags: ["React", "Tailwind", "Next.js"], // À personnaliser
        link: "#"
      },
      {
        id: 3,
        title: "Prestigear",
        description: "Location de voitures de luxe",
        image: "/projet/Prestigear.png",
        tags: ["React", "Node.js", "MongoDB"], // À personnaliser
        link: "#"
      },
      {
        id: 4,
        title: "Porsche",
        description: "Concession automobile",
        image: "/projet/Porsche.png",
        tags: ["HTML/CSS", "JavaScript", "PHP"], // À personnaliser
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
        tags: ["React", "Firebase", "Stripe"], // À personnaliser
        link: "#"
      },
      {
        id: 6,
        title: "Odyssée Sucrée",
        description: "Pâtisserie artisanale",
        image: "/projet/OdysseeSucree.png",
        tags: ["Shopify", "Liquid", "JavaScript"], // À personnaliser
        link: "#"
      },
      {
        id: 7,
        title: "RL Auto",
        description: "Garage automobile",
        image: "/projet/Rlauto.png",
        tags: ["WordPress", "PHP", "CSS"], // À personnaliser
        link: "#"
      },
      {
        id: 8,
        title: "Auto-école",
        description: "Réservation de cours",
        image: "/projet/autoecole.png",
        tags: ["React", "Node.js", "MySQL"], // À personnaliser
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
        tags: ["Next.js", "Framer Motion", "Tailwind"], // À personnaliser
        link: "#"
      },
      {
        id: 10,
        title: "Portfolio Louis",
        description: "Portfolio créatif",
        image: "/projet/PortfolioLouis.png",
        tags: ["React", "Three.js", "GSAP"], // À personnaliser
        link: "#"
      },
      {
        id: 11,
        title: "Gym Club",
        description: "Salle de sport",
        image: "/projet/Gymclub.png",
        tags: ["React", "Tailwind", "Supabase"], // À personnaliser
        link: "#"
      },
      {
        id: 12,
        title: "Sport Club",
        description: "Gestion club sportif",
        image: "/projet/Sportclub.png",
        tags: ["Vue.js", "Express", "MongoDB"], // À personnaliser
        link: "#"
      }
    ],
    // Quatrième rangée (ajoutée pour inclure plus de projets)
    [
      {
        id: 13,
        title: "JS Barber",
        description: "Salon de coiffure",
        image: "/projet/JsBarber.png",
        tags: ["React", "Node.js", "PostgreSQL"], // À personnaliser
        link: "#"
      },
      {
        id: 14,
        title: "Eldon Camp",
        description: "Réservation camping",
        image: "/projet/EldonCamp.png",
        tags: ["Next.js", "Prisma", "Tailwind"], // À personnaliser
        link: "#"
      },
      {
        id: 15,
        title: "BDB Buy",
        description: "Articles d'occasion",
        image: "/projet/BBDBuy.png",
        tags: ["React", "Firebase", "Redux"], // À personnaliser
        link: "#"
      },
      {
        id: 16,
        title: "AppForge",
        description: "Applications no-code",
        image: "/projet/AppForge.png",
        tags: ["Vue.js", "Node.js", "MongoDB"], // À personnaliser
        link: "#"
      }
    ]
  ];

  return (
    <section id="projects" className="py-12 overflow-hidden" ref={sectionRef}>
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </motion.h2>
        
        {/* Carrousel de projets - 3 lignes avec défilement automatique */}
        <div className="relative -mx-4 overflow-hidden">
          {projectRows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              className="mb-3 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * rowIndex }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex overflow-hidden">
                <motion.div 
                  className="flex"
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30 + rowIndex * 8,
                      ease: "linear"
                    }
                  }}
                >
                  {/* Dupliquer les projets pour créer un effet infini parfait */}
                  {[...row, ...row].map((project, index) => (
                    <motion.div 
                      key={`${project.id}-${index}`}
                      className="flex-shrink-0 w-72 mx-2 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 relative"
                      whileHover={{ 
                        y: -3,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                      }}
                    >
                      <div className="flex">
                        {/* Image à gauche */}
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Contenu à droite */}
                        <div className="p-3 flex-1">
                          <h3 className="text-sm font-bold text-black mb-1 truncate">{project.title}</h3>
                          <p className="text-xs text-gray-600 line-clamp-2 mb-1.5">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 2).map((tag, i) => (
                              <span
                                key={i}
                                className="px-1.5 py-0.5 bg-gray-100 rounded-sm text-xs text-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 2 && (
                              <span className="text-xs text-gray-400">+{project.tags.length - 2}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Animation d'arrière-plan au survol */}
                      <motion.div 
                        className="absolute -z-10 inset-0 rounded-xl opacity-0"
                        whileHover={{ 
                          opacity: 1,
                          background: [
                            "radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.05), transparent 70%)",
                            "radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.05), transparent 70%)",
                            "radial-gradient(circle at 80% 50%, rgba(255, 105, 180, 0.05), transparent 70%)",
                            "radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.05), transparent 70%)"
                          ]
                        }}
                        transition={{ 
                          duration: 5, 
                          ease: "linear", 
                          repeat: Infinity 
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="/projets"
            className="inline-block px-5 py-2 rounded-full border border-black text-black text-sm font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Voir tous les projets
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
