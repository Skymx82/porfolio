"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Réinitialiser le message de succès après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      borderColor: "var(--primary-purple)"
    }
  };
  
  const socialLinks = [
    { name: "LinkedIn", icon: "🔗", url: "#" },
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Instagram", icon: "📸", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 min-h-screen" ref={sectionRef}>
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
          Contactez-moi
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-medium">Message envoyé avec succès !</p>
                <p className="text-sm mt-1">Je vous répondrai dès que possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none resize-none"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="px-6 py-3 rounded-full gradient-bg text-white font-medium w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : "Envoyer le message"}
                </motion.button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              
              <div className="space-y-4 mb-8">
                <p className="flex items-center">
                  <span className="mr-3 text-xl">📧</span>
                  <a href="mailto:votre.email@example.com" className="hover:underline">votre.email@example.com</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-xl">📱</span>
                  <span>+33 6 XX XX XX XX</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-xl">📍</span>
                  <span>Paris, France</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Retrouvez-moi sur</h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.3 + (index * 0.1)
                    }}
                  >
                    <span className="text-xl">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div
              className="mt-8 p-6 rounded-lg border-2 border-black relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-medium mb-2">Disponible pour des opportunités</h4>
              <p className="text-gray-600">
                Je suis actuellement à la recherche de nouvelles opportunités et collaborations. 
                N'hésitez pas à me contacter !
              </p>
              
              <motion.div 
                className="absolute -z-10 inset-0"
                animate={{ 
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.08), transparent 70%)",
                    "radial-gradient(circle at 50% 20%, rgba(138, 43, 226, 0.08), transparent 70%)",
                    "radial-gradient(circle at 80% 50%, rgba(255, 105, 180, 0.08), transparent 70%)",
                    "radial-gradient(circle at 50% 80%, rgba(255, 105, 180, 0.08), transparent 70%)",
                    "radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.08), transparent 70%)"
                  ]
                }}
                transition={{ 
                  duration: 10, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
