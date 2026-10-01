import { gsap } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';

onPage(() => {
    const progress = document.querySelector('[data-timeline-progress]');
    if (!progress || !motionAllowed()) return;
    const ctx = gsap.context(() => {
        gsap.fromTo(
            progress,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: { trigger: '.timeline__body', start: 'top 60%', end: 'bottom 60%', scrub: 0.5 },
            },
        );
    });
    return () => ctx.revert();
});
