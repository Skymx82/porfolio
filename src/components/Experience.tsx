"use client"

import { motion } from 'framer-motion';
import { education, experiences } from '@/data/profile';
import { ExternalLinkIcon } from './icons';
import Todo, { SHOW_TODOS } from './Todo';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black" {...reveal}>
          Expériences
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              id={exp.id}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gray-900"
              {...reveal}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                <div className="md:col-span-1 text-gray-600">
                  <p className="font-semibold text-gray-800">{exp.period}</p>
                  {exp.duration && <p>{exp.duration}</p>}
                  <p>{exp.location}</p>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                  <p className="text-lg font-semibold mb-3 gradient-text">{exp.company}</p>

                  <p className="mb-4 text-gray-700 leading-relaxed">{exp.description}</p>

                  {exp.todo && SHOW_TODOS && (
                    <p className="mb-4">
                      <Todo>{exp.todo}</Todo>
                    </p>
                  )}

                  {exp.link && (
                    <p className="mb-4">
                      <a
                        href={exp.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-purple-800 underline underline-offset-4 hover:text-purple-950"
                      >
                        {exp.link.label}
                        <ExternalLinkIcon />
                        <span className="sr-only">(nouvel onglet)</span>
                      </a>
                    </p>
                  )}

                  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.h3 className="mt-16 mb-6 text-2xl md:text-3xl font-bold text-black" {...reveal}>
          Formation
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item) => (
            <motion.div key={item.id} className="bg-white rounded-xl p-6 shadow-lg" {...reveal}>
              <p className="font-semibold text-gray-600">{item.period}</p>
              <h4 className="mt-1 text-lg font-bold text-black">{item.degree}</h4>
              <p className="font-semibold gradient-text">{item.school}</p>
              {item.details && <p className="mt-3 text-gray-700 leading-relaxed">{item.details}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
