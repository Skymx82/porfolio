"use client"

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold gradient-text">Mattias Mathevon</h3>
            <p className="text-sm text-gray-600 mt-1">Portfolio personnel</p>
          </motion.div>
          
          <motion.div
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-gray-600">
              &copy; {currentYear} Tous droits réservés
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
