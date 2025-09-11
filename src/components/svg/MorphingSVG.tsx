"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

interface MorphingSVGProps {
  className?: string;
  delay?: number;
  duration?: number;
  rotationSpeed?: number;
}

const MorphingSVG = ({ className = '', delay = 0, duration = 2, rotationSpeed = 30 }: MorphingSVGProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Enregistrer le plugin MorphSVG
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(MorphSVGPlugin);
    }

    const shapes = svgRef.current?.querySelectorAll('.morph-shape');
    if (!shapes || shapes.length === 0) return;

    // Créer une timeline pour l'animation de morphing
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5
    });

    // Convertir les éléments NodeList en tableau et s'assurer qu'ils sont des SVGPathElement
    const shapesArray = Array.from(shapes) as SVGPathElement[];
    
    // Animation de morphing entre les différentes formes
    // Utiliser les attributs 'd' des éléments path pour le morphing
    tl.to(shapesArray[0], {
      morphSVG: shapesArray[1],
      duration: duration,
      ease: "power2.inOut",
      delay: delay
    })
    .to(shapesArray[0], {
      morphSVG: shapesArray[2],
      duration: duration,
      ease: "power2.inOut"
    })
    .to(shapesArray[0], {
      morphSVG: shapesArray[3],
      duration: duration,
      ease: "power2.inOut"
    })
    .to(shapesArray[0], {
      morphSVG: shapesArray[0],
      duration: duration,
      ease: "power2.inOut"
    });

    // Animation de rotation et d'échelle
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        rotation: 360,
        duration: rotationSpeed,
        repeat: -1,
        ease: "none"
      });
    }

    // Animation de pulsation
    const glowFilter = svgRef.current?.querySelector('.glow-filter');
    if (glowFilter) {
      gsap.to(glowFilter, {
        attr: { stdDeviation: 8 },
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 600 600"
      className={`morphing-svg ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -15 }}
    >
      <defs>
        <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.8">
            <animate attributeName="stopColor" 
              values="#8A2BE2; #FF1493; #00BFFF; #8A2BE2" 
              dur="10s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FF1493" stopOpacity="0.8">
            <animate attributeName="stopColor" 
              values="#FF1493; #00BFFF; #8A2BE2; #FF1493" 
              dur="10s" 
              repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur className="glow-filter" stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g transform="translate(300, 300)">
        {/* Forme 1: Étoile */}
        <path
          className="morph-shape"
          d="M0,-100 L29,-40 L95,-31 L48,15 L58,80 L0,50 L-58,80 L-48,15 L-95,-31 L-29,-40 Z"
          fill="url(#morphGradient)"
          filter="url(#glow-effect)"
          style={{ visibility: 'visible' }}
        />
        
        {/* Forme 2: Cercle (invisible, utilisé pour le morphing) */}
        <circle
          className="morph-shape"
          cx="0"
          cy="0"
          r="80"
          fill="url(#morphGradient)"
          style={{ visibility: 'hidden' }}
        />
        
        {/* Forme 3: Polygone (invisible, utilisé pour le morphing) */}
        <polygon
          className="morph-shape"
          points="0,-90 60,-60 90,0 60,60 0,90 -60,60 -90,0 -60,-60"
          fill="url(#morphGradient)"
          style={{ visibility: 'hidden' }}
        />
        
        {/* Forme 4: Vague (invisible, utilisé pour le morphing) */}
        <path
          className="morph-shape"
          d="M-90,0 C-60,-60 -30,60 0,-60 C30,60 60,-60 90,0 C60,60 30,-60 0,60 C-30,-60 -60,60 -90,0 Z"
          fill="url(#morphGradient)"
          style={{ visibility: 'hidden' }}
        />
        
        {/* Particules animées */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            className="particle"
            cx={Math.cos(i / 12 * Math.PI * 2) * 120}
            cy={Math.sin(i / 12 * Math.PI * 2) * 120}
            r={2 + Math.random() * 4}
            fill="white"
            opacity={0.6 + Math.random() * 0.4}
          >
            <animate
              attributeName="r"
              values={`${2 + Math.random() * 4};${4 + Math.random() * 6};${2 + Math.random() * 4}`}
              dur={`${2 + Math.random() * 3}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values={`${0.6 + Math.random() * 0.4};${0.2 + Math.random() * 0.3};${0.6 + Math.random() * 0.4}`}
              dur={`${2 + Math.random() * 3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );
};

export default MorphingSVG;
