"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MorphingSVG from './svg/MorphingSVG';
import { hero, profile } from '@/data/profile';
import { DownloadIcon, GitHubIcon, LinkedInIcon } from './icons';

const PARTICLE_COLORS = ['bg-purple-500/30', 'bg-pink-500/30', 'bg-blue-500/30', 'bg-indigo-500/30', 'bg-cyan-500/30'];

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.matchMedia annule tout seul ces animations si la préférence ou la largeur change.
    const mm = gsap.matchMedia();

    // Anneau : rotation lente, seulement si le système accepte les animations.
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (ringRef.current) {
        gsap.to(ringRef.current, { rotation: 360, duration: 40, repeat: -1, ease: 'none' });
      }
    });

    // Particules : grands écrans uniquement, jamais en mouvement réduit.
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const container = particlesRef.current;
      if (!container) return;
      const particles = Array.from({ length: 24 }, () => {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        particle.className = `absolute rounded-full ${PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]}`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        container.appendChild(particle);
        gsap.to(particle, {
          xPercent: Math.random() * 200 - 100,
          yPercent: Math.random() * 200 - 100,
          opacity: Math.random() * 0.5 + 0.3,
          duration: Math.random() * 10 + 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 5,
        });
        return particle;
      });
      return () => particles.forEach((particle) => particle.remove());
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Décor : discret sur mobile, figé quand le système demande moins d'animations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-8 -left-12 h-44 w-44 opacity-25 md:top-10 md:left-10 md:h-[300px] md:w-[300px] md:opacity-70">
          <MorphingSVG className="scale-75" delay={0} duration={2.5} rotationSpeed={35} />
        </div>
        <div className="absolute -bottom-8 -right-12 h-52 w-52 opacity-20 md:bottom-20 md:right-10 md:h-[350px] md:w-[350px] md:opacity-60">
          <MorphingSVG className="scale-90" delay={1.2} duration={3} rotationSpeed={40} />
        </div>
        <div className="absolute top-1/3 right-1/4 hidden h-[250px] w-[250px] opacity-50 md:block">
          <MorphingSVG className="scale-50" delay={0.5} duration={2.2} rotationSpeed={25} />
        </div>
        <div className="absolute bottom-1/4 left-1/4 hidden h-[200px] w-[200px] opacity-40 md:block">
          <MorphingSVG className="scale-[0.6]" delay={0.8} duration={1.8} rotationSpeed={30} />
        </div>
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />
        <div
          ref={ringRef}
          className="absolute left-1/2 top-1/2 -ml-[300px] -mt-[300px] hidden h-[600px] w-[600px] rounded-full border-[8px] border-dashed border-gray-200/20 opacity-30 md:block"
        />
      </div>

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
