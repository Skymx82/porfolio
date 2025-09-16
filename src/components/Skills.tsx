"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const skills = [
    {
      category: "Développement Frontend",
      items: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 85 },
        { name: "Html/Css", level: 80 },
        { name: "Typescript", level: 75 }
      ]
    },
    {
      category: "Développement Backend",
      items: [
        { name: "Supabase", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "SQL", level: 70 },
        { name: "PHP", level: 50 }
      ]
    },
    {
      category: "Autres Compétences",
      items: [
        { name: "UI/UX Design", level: 80 },
        { name: "Git", level: 85 },
        { name: "Framer Motion", level: 70 },
        { name: "Tailwind CSS", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };
  
  const itemTransition = {
    duration: 0.6,
    ease: "easeOut"
  };

  return (
    <section id="skills" className="py-20 min-h-screen" ref={sectionRef}>
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
          Mes Compétences
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={groupIndex}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-6 text-black"
                variants={itemVariants}
              >
                {skillGroup.category}
              </motion.h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="space-y-2"
                    variants={itemVariants}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full gradient-bg"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.2 + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="absolute -z-10 inset-0 rounded-xl opacity-0"
                whileHover={{ 
                  opacity: 1,
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1), transparent 70%)",
                    "radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.1), transparent 70%)",
                    "radial-gradient(circle at 80% 50%, rgba(255, 105, 180, 0.1), transparent 70%)",
                    "radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1), transparent 70%)"
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
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Compétences Spéciales</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Créativité", "Résolution de problèmes", "Travail d'équipe", "Communication", "Adaptabilité", "Apprentissage rapide"].map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 rounded-full border-2 border-black relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{skill}</span>
                
                <motion.div 
                  className="absolute -z-10 inset-0 rounded-full opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    background: [
                      "radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.2), transparent 70%)",
                      "radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.2), transparent 70%)",
                      "radial-gradient(circle at 80% 50%, rgba(255, 105, 180, 0.2), transparent 70%)",
                      "radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.2), transparent 70%)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
