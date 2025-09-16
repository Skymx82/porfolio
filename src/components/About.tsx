"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  // Simplifier les variants pour éviter les erreurs de type
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const activities = [
    {
      title: "Autosoft",
      description: "Développement d'une plateforme de gestion pour les auto-écoles permettant de digitaliser l'ensemble des processus administratifs, la planification des leçons et le suivi des élèves. Solution complète avec interface responsive et application mobile."
    },
    {
      title: "Tolarys V2",
      description: "Conception d'une solution d'audit d'accessibilité numérique permettant d'évaluer la conformité des sites web aux normes RGAA et WCAG. Implémentation d'outils automatiques de détection des problèmes d'accessibilité et génération de rapports détaillés."
    },
    {
      title: "Sports",
      description: "Pratique régulière du basketball en club depuis 8 ans et de la boxe depuis 3 ans. Ces activités m'ont permis de développer mon esprit d'équipe, ma discipline personnelle et ma capacité à gérer le stress dans des situations exigeantes."
    }
  ];

  return (
    <section id="about" className="py-20 min-h-screen flex items-center" ref={sectionRef}>
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, scale, y }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          À Propos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Qui suis-je ?</h3>
            <p className="text-lg mb-6">
              Je suis Mattias Mathevon, passionné par le développement web et l'accessibilité numérique. Je me spécialise dans la création d'applications web modernes et performantes, avec une attention particulière pour l'expérience utilisateur.
            </p>
            <p className="text-lg">
              Mon objectif est de concevoir des solutions numériques qui allient esthétique et fonctionnalité, tout en étant accessibles au plus grand nombre. Je suis constamment à la recherche de nouvelles technologies et méthodologies pour améliorer mes compétences et contribuer à des projets innovants.
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-square rounded-full overflow-hidden gradient-border">
              <img 
                src="/image/pp1.PNG" 
                alt="Mattias Mathevon" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full gradient-bg"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                ease: "easeInOut", 
                repeat: Infinity 
              }}
            />
            
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full gradient-bg opacity-70"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0, 5, 0]
              }}
              transition={{ 
                duration: 5, 
                ease: "easeInOut", 
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
        
        <motion.h3 
          className="text-2xl font-semibold mt-16 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Mes Activités En Dehors Des Cours
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold mb-3 text-black">{activity.title}</h4>
              <p>{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
