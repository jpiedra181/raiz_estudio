import { gsap } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';
import { lockScroll } from './smooth-scroll';

onPage((signal) => {
    const dialog = document.querySelector<HTMLDialogElement>('[data-menu]');
    const openButton = document.querySelector<HTMLButtonElement>('[data-menu-open]');
    if (!dialog || !openButton) return;

    const closeButton = dialog.querySelector<HTMLButtonElement>('[data-menu-close]');
    const labels = dialog.querySelectorAll('.menu__label, .menu__num');
    const footer = dialog.querySelector('[data-menu-footer]');
    const root = document.documentElement;
    let timeline: gsap.core.Timeline | null = null;

    const setOpenState = (open: boolean) => {
        openButton.setAttribute('aria-expanded', String(open));
        root.classList.toggle('menu-open', open);
        lockScroll(open);
    };

    const open = () => {
        if (dialog.open) return;
        dialog.showModal();
        setOpenState(true);
        if (!motionAllowed()) return;

        timeline?.kill();
        timeline = gsap
            .timeline({ defaults: { ease: 'expo.out' } })
            .fromTo(
                dialog,
                { clipPath: 'inset(0% 0% 100% 0%)' },
                { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'expo.inOut' },
            )
            .fromTo(labels, { yPercent: 110 }, { yPercent: 0, duration: 1.2, stagger: 0.05 }, 0.45)
            .fromTo(footer, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 1 }, 0.7);
    };

    const finishClose = () => {
        dialog.close();
        gsap.set([dialog, labels, footer], { clearProps: 'all' });
        setOpenState(false);
    };

    const close = () => {
        if (!dialog.open) return;
        if (!motionAllowed()) return finishClose();

        timeline?.kill();
        timeline = gsap
            .timeline({ onComplete: finishClose })
            .to(labels, { yPercent: -110, duration: 0.5, stagger: 0.02, ease: 'power3.in' })
            .to(footer, { autoAlpha: 0, duration: 0.3 }, 0)
            .to(dialog, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.8, ease: 'expo.inOut' }, 0.25);
    };

    openButton.addEventListener('click', open, { signal });
    closeButton?.addEventListener('click', close, { signal });

    // Esc: animate out instead of the instant native close
    dialog.addEventListener(
        'cancel',
        (event) => {
            event.preventDefault();
            close();
        },
        { signal },
    );

    // Links to the current page just close the menu
    dialog.querySelectorAll<HTMLAnchorElement>('[data-menu-link]').forEach((link) => {
        link.addEventListener(
            'click',
            (event) => {
                if (link.getAttribute('aria-current') === 'page') {
                    event.preventDefault();
                    close();
                }
            },
            { signal },
        );
    });

    // Close if the viewport grows into the desktop layout
    const desktop = window.matchMedia('(width >= 1200px)');
    desktop.addEventListener('change', (e) => e.matches && dialog.open && finishClose(), { signal });

    return () => {
        timeline?.kill();
        if (dialog.open) dialog.close();
        root.classList.remove('menu-open');
        lockScroll(false);
    };
});
