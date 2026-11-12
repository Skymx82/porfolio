"use client"

import { motion } from 'framer-motion';
import { internship, mailtoHref, profile } from '@/data/profile';
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from './icons';

const socialLinks = [
  { name: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon },
  { name: 'GitHub', href: profile.links.github, Icon: GitHubIcon },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// Pas de formulaire : l'ancien simulait un envoi sans rien transmettre. Un lien mailto fait le travail.
const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black" {...reveal}>
          Contact
        </motion.h2>

        <motion.div className="rounded-2xl border-2 border-gray-900 bg-white p-6 md:p-10 text-center shadow-lg" {...reveal}>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 text-balance">{internship.sentence}</p>
          <a
            href={mailtoHref}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full gradient-bg text-white font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <MailIcon />
            M&apos;écrire un e-mail
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...reveal}>
            <h3 className="text-xl font-semibold mb-4 text-black">Informations de contact</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-3">
                <MailIcon className="flex-none text-purple-800" />
                <a href={`mailto:${profile.email}`} className="break-words hover:underline">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="flex-none text-purple-800" />
                <span>{profile.location}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div {...reveal}>
            <h3 className="text-xl font-semibold mb-4 text-black">Retrouvez-moi sur</h3>
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} (nouvel onglet)`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-gray-900 shadow-md ring-1 ring-gray-200 transition-colors hover:text-purple-800"
                  >
                    <Icon />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
