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
  
  const sportBackground = "J'ai eu un parcours sportif riche dans le basketball, ayant évolué à haut niveau en National 3 avec JS Cugnaux. Avant cela, j'ai joué en U21 R1 à JS Cugnaux, en U21 R2 au Vazerac Sud Quercy Basket, et en U18 Occitanie au Montauban Basket Club. Aujourd'hui, je pratique la boxe anglaise au Boxing Center, ce qui me permet de maintenir une discipline rigoureuse et de développer ma résistance mentale.";
  
  const futureProjects = "Pour l'avenir, j'ambitionne d'intégrer une école d'ingénieur tout en continuant à développer mon entreprise Tolarys. Je prépare également le lancement de ma deuxième entreprise, AutoSoft, dont la version bêta est prévue pour fin octobre/début novembre. Ces projets entrepreneuriaux me permettent d'appliquer concrètement mes compétences techniques tout en développant mon expérience dans la gestion d'entreprise.";

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
          Parcours Sportif et Projets Futurs
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold mb-3 text-black">Mon Parcours Sportif</h4>
            <p className="text-gray-700 leading-relaxed">{sportBackground}</p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Basketball</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Boxe Anglaise</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">National 3</span>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold mb-3 text-black">Mes Projets Futurs</h4>
            <p className="text-gray-700 leading-relaxed">{futureProjects}</p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Tolarys</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">AutoSoft</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">École d'Ingénieur</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
