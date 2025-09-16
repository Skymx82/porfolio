"use client"

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Accueil', href: '/#home' },
    { name: 'À propos', href: '/#about' },
    { name: 'Expériences', href: '/#experience' },
    { name: 'Projets', href: '/projets' },
    { name: 'Compétences', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold gradient-text">Mattias Mathevon</h1>
        </motion.div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={item.href} 
                  className="font-medium hover:gradient-text transition-all duration-300"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MobileMenu navItems={navItems} />
        </motion.div>
      </div>
    </motion.header>
  );
};

const MobileMenu = ({ navItems }: { navItems: { name: string; href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };
  
  return (
    <div>
      <button 
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-5 flex flex-col justify-between"
        >
          <motion.span 
            className="w-full h-0.5 gradient-bg rounded-full"
            variants={{
              closed: { rotate: 0 },
              open: { rotate: 45, y: 8 }
            }}
          />
          <motion.span 
            className="w-full h-0.5 gradient-bg rounded-full"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
          <motion.span 
            className="w-full h-0.5 gradient-bg rounded-full"
            variants={{
              closed: { rotate: 0 },
              open: { rotate: -45, y: -8 }
            }}
          />
        </motion.div>
      </button>
      
      <motion.div
        className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg mt-2 overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <motion.li 
                key={item.name}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={item.href} 
                  className="block py-2 font-medium hover:gradient-text transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
