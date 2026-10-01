import { gsap } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';

/**
 * Full-bleed page openers: the photograph [data-hero-bg] drifts slower than the
 * page and the copy [data-hero-content] lifts away as the section scrolls out.
 */
onPage(() => {
    const backgrounds = gsap.utils.toArray<HTMLElement>('[data-hero-bg]');
    if (!backgrounds.length || !motionAllowed()) return;

    const ctx = gsap.context(() => {
        backgrounds.forEach((bg) => {
            const section = bg.closest('section');
            if (!section) return;
            const scrollTrigger = { trigger: section, start: 'top top', end: 'bottom top', scrub: true };

            gsap.to(bg, { yPercent: 16, ease: 'none', scrollTrigger });

            const content = section.querySelector('[data-hero-content]');
            if (content) gsap.to(content, { yPercent: -12, opacity: 0.2, ease: 'none', scrollTrigger });
        });
    });

    return () => ctx.revert();
});
