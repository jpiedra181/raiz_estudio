import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';

let lenis: Lenis | null = null;

export const getLenis = () => lenis;

/** Pauses page scrolling (menus, dialogs) with or without Lenis. */
export function lockScroll(locked: boolean) {
    if (lenis) {
        if (locked) lenis.stop();
        else lenis.start();
    }
    document.documentElement.style.overflow = locked ? 'hidden' : '';
}

/** Smooth-scrolls to a target, falling back to native behaviour. */
export function scrollToTarget(target: HTMLElement | number, offset = 0) {
    if (lenis) {
        lenis.scrollTo(target, { offset, duration: 1.4 });
        return;
    }
    const top = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: motionAllowed() ? 'smooth' : 'auto' });
}

const raf = (time: number) => lenis?.raf(time * 1000);

onPage(() => {
    if (!motionAllowed()) return;

    lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        anchors: { offset: -80 },
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
        gsap.ticker.remove(raf);
        lenis?.destroy();
        lenis = null;
        document.documentElement.style.overflow = '';
    };
});
