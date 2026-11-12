"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { about, profile } from '@/data/profile';

const About = () => {
  // Simplifier les variants pour éviter les erreurs de type
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const sportBackground = "J'ai eu un parcours sportif riche dans le basketball, ayant évolué à haut niveau en National 3 avec JS Cugnaux. Avant cela, j'ai joué en U21 R1 à JS Cugnaux, en U21 R2 au Vazerac Sud Quercy Basket, et en U18 Occitanie au Montauban Basket Club. Aujourd'hui, je pratique la boxe anglaise au Boxing Center, ce qui me permet de maintenir une discipline rigoureuse et de développer ma résistance mentale.";
  
  const futureProjects = "Pour l'avenir, j'ambitionne d'intégrer une école d'ingénieur tout en continuant à développer mon entreprise Tolarys. Je prépare également le lancement de ma deuxième entreprise, AutoSoft, dont la version bêta est prévue pour fin octobre/début novembre. Ces projets entrepreneuriaux me permettent d'appliquer concrètement mes compétences techniques tout en développant mon expérience dans la gestion d'entreprise.";

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          À propos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-lg leading-relaxed text-gray-800"
          >
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </motion.div>
          
          <motion.div
            className="relative mx-auto w-full max-w-xs md:max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-square rounded-full overflow-hidden gradient-border">
              <Image
                src={profile.photo}
                alt={`Portrait de ${profile.name}`}
                width={1024}
                height={1024}
                sizes="(min-width: 768px) 384px, 320px"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 w-32 h-32 rounded-full gradient-bg"
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
              aria-hidden="true"
              className="absolute -top-4 -left-4 -z-10 w-24 h-24 rounded-full gradient-bg opacity-70"
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
      </div>
    </section>
  );
};

export default About;
