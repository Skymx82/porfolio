"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import MorphingSVG from './svg/MorphingSVG';

// Enregistrer les plugins GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const Hero = () => {
  // Références pour les animations GSAP
  const heroSectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  
  // Références pour les blobs
  const blobRefs = Array.from({ length: 6 }).map(() => useRef<HTMLDivElement>(null));
  
  // Références pour les particules
  const particlesRef = useRef<HTMLDivElement>(null);
  const particleElements = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    // Créer une timeline principale
    const mainTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animation simple du titre pour éviter les problèmes d'affichage
    if (nameRef.current) {
      // Animation plus simple et fiable
      gsap.fromTo(
        nameRef.current,
        { 
          opacity: 0, 
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );
    }
    
    // Animation du sous-titre avec effet de machine à écrire
    if (subtitleRef.current) {
      const originalText = subtitleRef.current.textContent || "Développeur passionné & créatif";
      subtitleRef.current.textContent = "";
      
      mainTl.to(subtitleRef.current, {
        text: {
          value: originalText,
          delimiter: ""
        },
        duration: 1.5,
        delay: 1.2,
        ease: "none"
      });
    }
    
    // Animation du bouton
    mainTl.fromTo(
      buttonRef.current,
      { 
        scale: 0,
        opacity: 0,
        rotation: -15
      },
      { 
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      },
      "-=0.5"
    );
    
    // Animation de l'élément décoratif
    if (decorationRef.current) {
      mainTl.fromTo(
        decorationRef.current,
        {
          scale: 0,
          opacity: 0,
          rotation: -45
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.3)"
        },
        "-=0.7"
      );
      
      // Animation continue de l'élément décoratif
      gsap.to(decorationRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
    
    // Création et animation des particules
    if (particlesRef.current) {
      // Supprimer les particules existantes
      while (particlesRef.current.firstChild) {
        particlesRef.current.removeChild(particlesRef.current.firstChild);
      }
      
      // Créer de nouvelles particules
      particleElements.current = [];
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        
        // Taille aléatoire
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Position initiale aléatoire
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Couleur aléatoire
        const colors = [
          'bg-purple-500/30', 'bg-pink-500/30', 'bg-blue-500/30', 
          'bg-indigo-500/30', 'bg-cyan-500/30'
        ];
        particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
        
        particlesRef.current.appendChild(particle);
        particleElements.current.push(particle);
      }
      
      // Animer chaque particule
      particleElements.current.forEach((particle) => {
        const duration = Math.random() * 10 + 10;
        const xPercent = Math.random() * 200 - 100;
        const yPercent = Math.random() * 200 - 100;
        
        gsap.to(particle, {
          xPercent,
          yPercent,
          opacity: Math.random() * 0.5 + 0.3,
          duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5
        });
      });
    }
    
    // Animation des blobs
    blobRefs.forEach((blobRef, index) => {
      if (!blobRef.current) return;
      
      // Animation d'apparition
      gsap.fromTo(
        blobRef.current,
        { 
          scale: 0,
          opacity: 0,
          x: (index % 2 === 0) ? -100 : 100,
          y: (index % 3 === 0) ? -50 : 50
        },
        { 
          scale: 1,
          opacity: 0.8,
          x: 0,
          y: 0,
          duration: 1.5,
          delay: 0.2 * index,
          ease: "elastic.out(1, 0.5)"
        }
      );
      
      // Animation continue
      gsap.to(blobRef.current, {
        x: `random(-100, 100)`,
        y: `random(-80, 80)`,
        scale: `random(0.8, 1.3)`,
        opacity: `random(0.5, 0.9)`,
        duration: 10 + index * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.8
      });
    });
    
    // Animation au scroll
    ScrollTrigger.create({
      trigger: heroSectionRef.current,
      start: "top top",
      end: "bottom top",
      onLeave: () => {
        gsap.to(heroSectionRef.current, { opacity: 0, y: -100, duration: 0.5 });
      },
      onEnterBack: () => {
        gsap.to(heroSectionRef.current, { opacity: 1, y: 0, duration: 0.5 });
      }
    });
    
    // Nettoyage
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroSectionRef} 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* SVG Morphing Animations à différents endroits */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] opacity-70">
        <MorphingSVG className="scale-75" delay={0} duration={2.5} rotationSpeed={35} />
      </div>
      
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] opacity-60">
        <MorphingSVG className="scale-90" delay={1.2} duration={3} rotationSpeed={40} />
      </div>
      
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] opacity-50">
        <MorphingSVG className="scale-50" delay={0.5} duration={2.2} rotationSpeed={25} />
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] opacity-40">
        <MorphingSVG className="scale-[0.6]" delay={0.8} duration={1.8} rotationSpeed={30} />
      </div>
      
      {/* Particules animées */}
      <div ref={particlesRef} className="absolute inset-0 -z-5 overflow-hidden"></div>
      
      {/* Élément décoratif */}
      <div 
        ref={decorationRef}
        className="absolute z-0 w-[600px] h-[600px] border-[8px] border-dashed border-gray-200/20 rounded-full opacity-30"
      ></div>
      
      {/* Contenu principal */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 
            ref={nameRef}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Mattias Mathevon
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            Développeur passionné & créatif
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              ref={buttonRef}
              href="#projects" 
              className="px-8 py-3 rounded-full gradient-bg text-white font-medium transition-transform hover:scale-105 active:scale-95"
            >
              Voir mes projets
            </a>
            <a 
              href="/CV.pdf" 
              download
              className="px-8 py-3 rounded-full bg-white border-2 border-gray-300 text-gray-800 font-medium transition-transform hover:scale-105 active:scale-95 hover:border-purple-500 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
