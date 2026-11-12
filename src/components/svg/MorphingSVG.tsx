"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

interface MorphingSVGProps {
  className?: string;
  delay?: number;
  duration?: number;
  rotationSpeed?: number;
}

// Valeurs fixes plutôt que Math.random() au rendu : le HTML du serveur et celui du navigateur
// restent identiques (sinon React signale un écart à l'hydratation).
const round = (n: number) => Math.round(n * 100) / 100;
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  cx: round(Math.cos((i / 12) * Math.PI * 2) * 120),
  cy: round(Math.sin((i / 12) * Math.PI * 2) * 120),
  r: 2 + (i % 4),
  opacity: round(0.6 + (i % 3) * 0.15),
}));

// Formes successives du morphing (cercle, octogone, vague), décrites directement en tracés.
const MORPH_TARGETS = [
  "M0,-80 A80,80 0 1,1 0,80 A80,80 0 1,1 0,-80 Z",
  "M0,-90 L60,-60 L90,0 L60,60 L0,90 L-60,60 L-90,0 L-60,-60 Z",
  "M-90,0 C-60,-60 -30,60 0,-60 C30,60 60,-60 90,0 C60,60 30,-60 0,60 C-30,-60 -60,60 -90,0 Z",
];

const MorphingSVG = ({ className = "", delay = 0, duration = 2, rotationSpeed = 30 }: MorphingSVGProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const shapeRef = useRef<SVGPathElement>(null);
  // Identifiants uniques : la forme est affichée plusieurs fois sur la page.
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gradientId = `morph-gradient-${uid}`;
  const glowId = `morph-glow-${uid}`;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    gsap.registerPlugin(MorphSVGPlugin);

    const mm = gsap.matchMedia();
    mm.add(
      { motionOK: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 768px)" },
      (context) => {
        const motionOK = context.conditions?.motionOK;
        const desktop = context.conditions?.desktop;
        // Mouvement réduit : formes figées.
        if (!motionOK) return;

        gsap.to(svg, { rotation: 360, duration: desktop ? rotationSpeed : rotationSpeed * 2, repeat: -1, ease: "none" });
        // Mobile : rotation lente seulement, ni morphing ni halo animé (coûteux à redessiner).
        if (!desktop) return;

        const shape = shapeRef.current;
        if (!shape) return;
        const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.5, delay });
        MORPH_TARGETS.forEach((target) => timeline.to(shape, { morphSVG: target, duration, ease: "power2.inOut" }));

        const blur = svg.querySelector(".glow-filter");
        if (blur) {
          gsap.to(blur, { attr: { stdDeviation: 8 }, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }
      }
    );

    return () => mm.revert();
  }, [delay, duration, rotationSpeed]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 600 600"
      className={`morphing-svg ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -15 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF1493" stopOpacity="0.8" />
        </linearGradient>

        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur className="glow-filter" stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g transform="translate(300, 300)">
        {/* Étoile de départ, transformée ensuite en MORPH_TARGETS */}
        <path
          ref={shapeRef}
          d="M0,-100 L29,-40 L95,-31 L48,15 L58,80 L0,50 L-58,80 L-48,15 L-95,-31 L-29,-40 Z"
          fill={`url(#${gradientId})`}
          filter={`url(#${glowId})`}
        />

        {PARTICLES.map((particle, i) => (
          <circle key={i} cx={particle.cx} cy={particle.cy} r={particle.r} fill="white" opacity={particle.opacity} />
        ))}
      </g>
    </svg>
  );
};

export default MorphingSVG;
