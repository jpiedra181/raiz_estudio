import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Utility to wrap GSAP animations with reduced motion check
export function animateWithReducedMotion(animationFn: () => void) {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animationFn();
  }
}

export { gsap, ScrollTrigger };
