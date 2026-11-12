"use client";

import { MotionConfig } from "framer-motion";

// Coupe les animations de déplacement framer-motion quand le système demande moins d'animations.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
