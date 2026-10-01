import { onPage } from './lifecycle';

/** Solid background once the page scrolls; hides on the way down, returns on the way up. */
onPage((signal) => {
    const header = document.querySelector<HTMLElement>('[data-header]');
    if (!header) return;

    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
        ticking = false;
        const y = Math.max(window.scrollY, 0);
        const delta = y - lastY;
        header.classList.toggle('is-scrolled', y > 24);

        if (document.documentElement.classList.contains('menu-open')) return;
        if (y < window.innerHeight * 0.4) header.classList.remove('is-hidden');
        else if (delta > 6) header.classList.add('is-hidden');
        else if (delta < -6) header.classList.remove('is-hidden');
        lastY = y;
    };

    window.addEventListener(
        'scroll',
        () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        },
        { passive: true, signal },
    );

    update();
});
