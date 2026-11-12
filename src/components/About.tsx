"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { about, lookingFor, profile, sport } from '@/data/profile';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tagColors = ['bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800', 'bg-red-100 text-red-800', 'bg-amber-100 text-amber-900'];

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
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-purple-700"
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Ce que je cherche</h3>
            <ul className="space-y-3">
              {lookingFor.map((item) => (
                <li key={item} className="flex gap-3 text-gray-800 leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 flex-none rounded-full gradient-bg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Sport et vie étudiante</h3>
            <p className="text-gray-700 leading-relaxed">{sport.basketball}</p>
            <ul className="mt-4 space-y-2">
              {sport.extras.map((item) => (
                <li key={item} className="flex gap-3 text-gray-800">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {sport.tags.map((tag, i) => (
                <span key={tag} className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors[i % tagColors.length]}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
