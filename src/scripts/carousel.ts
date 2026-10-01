import { onPage } from './lifecycle';

// Progressive enhancement: without JS every testimonial is listed.
onPage((signal) => {
    const root = document.querySelector<HTMLElement>('[data-carousel]');
    if (!root) return;

    const slides = [...root.querySelectorAll<HTMLElement>('[data-carousel-slide]')];
    const controls = root.querySelector<HTMLElement>('[data-carousel-controls]');
    const current = root.querySelector<HTMLElement>('[data-carousel-current]');
    const track = root.querySelector<HTMLElement>('[data-carousel-track]');
    if (slides.length < 2 || !controls || !track) return;

    let index = 0;
    track.classList.add('is-carousel');
    controls.hidden = false;

    const show = (next: number) => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const active = i === index;
            slide.classList.toggle('is-active', active);
            slide.inert = !active;
            slide.setAttribute('aria-hidden', String(!active));
        });
        if (current) current.textContent = String(index + 1).padStart(2, '0');
    };

    // Announce changes only after user interaction, not on load
    track.setAttribute('aria-live', 'off');
    show(0);
    track.setAttribute('aria-live', 'polite');

    root.querySelector('[data-carousel-prev]')?.addEventListener('click', () => show(index - 1), { signal });
    root.querySelector('[data-carousel-next]')?.addEventListener('click', () => show(index + 1), { signal });
    root.addEventListener(
        'keydown',
        (event) => {
            if (event.key === 'ArrowLeft') show(index - 1);
            if (event.key === 'ArrowRight') show(index + 1);
        },
        { signal },
    );

    // Swipe on touch screens
    let startX = 0;
    track.addEventListener('pointerdown', (event) => (startX = event.clientX), { passive: true, signal });
    track.addEventListener(
        'pointerup',
        (event) => {
            const delta = event.clientX - startX;
            if (Math.abs(delta) > 50) show(index + (delta < 0 ? 1 : -1));
        },
        { passive: true, signal },
    );
});
