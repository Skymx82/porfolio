"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MorphingSVG from './svg/MorphingSVG';
import { hero, profile } from '@/data/profile';
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './icons';

// Enregistrer les plugins GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  // Références pour les animations GSAP
  const heroSectionRef = useRef<HTMLElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  
  // Références pour les blobs
  const blobRefs = Array.from({ length: 6 }).map(() => useRef<HTMLDivElement>(null));
  
  // Références pour les particules
  const particlesRef = useRef<HTMLDivElement>(null);
  const particleElements = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    // Animation de l'élément décoratif
    if (decorationRef.current) {
      gsap.fromTo(
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
        }
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
      <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-gray-700">{profile.name}</p>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 text-balance">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 text-balance">{hero.subtitle.join(" · ")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#autosoft"
              className="px-7 py-3 rounded-full gradient-bg text-white font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              Voir AutoSoft
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-white border-2 border-gray-900 text-gray-900 font-semibold transition-transform hover:scale-105 active:scale-95"
            >
              Me contacter
            </a>
            <a
              href={profile.cvUrl}
              download
              className="px-7 py-3 rounded-full bg-white border-2 border-gray-300 text-gray-800 font-semibold transition-transform hover:scale-105 active:scale-95 hover:border-purple-600 flex items-center gap-2"
            >
              <DownloadIcon />
              Télécharger mon CV
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (nouvel onglet)"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-800 shadow-md ring-1 ring-gray-200 transition-colors hover:text-purple-700"
            >
              <LinkedInIcon />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (nouvel onglet)"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-800 shadow-md ring-1 ring-gray-200 transition-colors hover:text-purple-700"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
