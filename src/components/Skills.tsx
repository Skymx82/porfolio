"use client"

import { motion } from 'framer-motion';
import { skills } from '@/data/profile';

const groups = [
  { title: 'En production', items: skills.production, chip: 'bg-gray-900 text-white' },
  { title: 'Utilisé aussi', items: skills.alsoUsed, chip: 'bg-gray-100 text-gray-800 ring-1 ring-gray-200' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-black"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Compétences
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-black">{group.title}</h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li key={item} className={`px-4 py-2 rounded-full font-medium ${group.chip}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
