import { gsap } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';

// Preview image follows the pointer across each service row (desktop only)
onPage((signal) => {
    const rows = document.querySelectorAll<HTMLElement>('[data-service-row]');
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine) and (width >= 1024px)').matches;
    if (!rows.length || !canHover || !motionAllowed()) return;

    rows.forEach((row) => {
        const preview = row.querySelector<HTMLElement>('[data-service-preview]');
        if (!preview) return;
        const xTo = gsap.quickTo(preview, 'x', { duration: 0.8, ease: 'power3' });
        const yTo = gsap.quickTo(preview, 'y', { duration: 0.8, ease: 'power3' });
        const rotateTo = gsap.quickTo(preview, 'rotation', { duration: 1, ease: 'power3' });
        let lastX = 0;

        const move = (event: PointerEvent) => {
            const bounds = row.getBoundingClientRect();
            const x = event.clientX - bounds.left - preview.offsetWidth / 2;
            const y = event.clientY - bounds.top - preview.offsetHeight / 2;
            xTo(x);
            yTo(y);
            rotateTo(gsap.utils.clamp(-6, 6, (event.clientX - lastX) * 0.4));
            lastX = event.clientX;
        };

        row.addEventListener(
            'pointerenter',
            (event) => {
                const bounds = row.getBoundingClientRect();
                gsap.set(preview, {
                    x: event.clientX - bounds.left - preview.offsetWidth / 2,
                    y: event.clientY - bounds.top - preview.offsetHeight / 2,
                });
                lastX = event.clientX;
                gsap.to(preview, { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'expo.out' });
            },
            { signal },
        );
        row.addEventListener('pointermove', move, { passive: true, signal });
        row.addEventListener(
            'pointerleave',
            () => gsap.to(preview, { autoAlpha: 0, scale: 0.85, duration: 0.5, ease: 'power3.out' }),
            { signal },
        );
    });
});
