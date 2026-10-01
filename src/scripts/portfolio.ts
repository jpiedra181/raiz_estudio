import { gsap, ScrollTrigger } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';

onPage((signal) => {
    const root = document.querySelector<HTMLElement>('[data-portfolio]');
    if (!root) return;

    const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-filter]')];
    const items = [...root.querySelectorAll<HTMLElement>('.portfolio__item')];
    const status = root.querySelector<HTMLElement>('[data-portfolio-status]');

    const apply = (filter: string) => {
        buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
        const visible = items.filter((item) => filter === 'all' || item.dataset.style === filter);

        const swap = () => {
            items.forEach((item) => (item.hidden = !visible.includes(item)));
            visible.forEach((item, i) => item.classList.toggle('is-shifted', i % 2 === 1));
            ScrollTrigger.refresh();
            if (status) {
                status.textContent = `${visible.length} ${visible.length === 1 ? 'proyecto' : 'proyectos'}`;
            }
        };

        if (!motionAllowed()) return swap();
        gsap.to(items, {
            opacity: 0,
            y: 20,
            duration: 0.35,
            ease: 'power2.in',
            onComplete: () => {
                swap();
                gsap.fromTo(
                    visible,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'expo.out' },
                );
            },
        });
    };

    buttons.forEach((button) =>
        button.addEventListener('click', () => apply(button.dataset.filter ?? 'all'), { signal }),
    );
});
