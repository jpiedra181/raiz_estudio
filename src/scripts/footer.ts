import { onPage, remountAll } from './lifecycle';
import { motionAllowed, setMotion } from './motion';
import { scrollToTarget } from './smooth-scroll';

onPage((signal) => {
    const toggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
    const backToTop = document.querySelector<HTMLAnchorElement>('[data-back-to-top]');

    if (toggle) {
        toggle.setAttribute('aria-pressed', String(motionAllowed()));
        toggle.addEventListener(
            'click',
            () => {
                setMotion(!motionAllowed());
                remountAll();
            },
            { signal },
        );
    }

    backToTop?.addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            scrollToTarget(0);
            document.getElementById('main')?.focus({ preventScroll: true });
        },
        { signal },
    );
});
