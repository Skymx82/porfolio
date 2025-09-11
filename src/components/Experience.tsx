"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const experiences = [
    {
      id: 1,
      role: "Développeur Web",
      company: "Odyssée Sucrée",
      period: "2025 (6 semaines)",
      location: "Montauban, France",
      description: "Développement d'une application web avec Next.js, Supabase et Tailwind CSS pour la gestion de stock et la comptabilité des marchés. Permet de simplifier l'enregistrement des ventes pour chaque marché.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Gestion de stock"]
    },
    {
      id: 2,
      role: "Développeur",
      company: "Voltier Electronics",
      period: "2024 (6 semaines)",
      location: "Saint-Jacques-de-Compostelle, Espagne",
      description: "Création d'un script Autoit afin d'automatiser la mise en ligne d'article sur leur site internet WordPress. Correction de code en SQL. Avancement d'un projet de plugin WordPress.",
      technologies: ["AutoIt", "WordPress", "SQL", "PHP"]
    },
    {
      id: 3,
      role: "Développeur",
      company: "3R R&D",
      period: "2023 (8 semaines)",
      location: "Montauban, France",
      description: "Développement de script sur C#. Développement d'un script de vérification d'état sur un serveur. Câblage de sonde.",
      technologies: ["C#", "Scripting", "Administration serveur"]
    },
    {
      id: 4,
      role: "Technicien",
      company: "Maf Agrorobotic",
      period: "2022 (8 semaines)",
      location: "Montauban, France",
      description: "Monter et câbler des unités centrales. Configurer des serveurs et des PCs. Faire des connexions inter-serveur. Soudure sur carte mère.",
      technologies: ["Assemblage PC", "Configuration serveur", "Soudure", "Réseaux"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };
  
  // Définir la transition sans la propriété ease pour éviter les erreurs de type
  const itemTransition = {
    duration: 0.6
  };

  return (
    <section id="experience" className="py-20 min-h-screen" ref={sectionRef}>
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mes Expériences
        </motion.h2>
        
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-black relative overflow-hidden"
              variants={itemVariants}
              transition={itemTransition}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <p className="text-gray-500 font-medium">{exp.period}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                  <h4 className="text-lg font-semibold mb-3 gradient-text">{exp.company}</h4>
                  
                  <p className="mb-4 text-gray-700">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
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
      </motion.div>
    </section>
  );
};

export default Experience;
