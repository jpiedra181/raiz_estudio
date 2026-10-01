import { gsap } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';

/**
 * Decorative follower for fine pointers. The native cursor is never hidden;
 * elements with [data-cursor="Label"] grow it into a labelled disc.
 */
onPage((signal) => {
    const cursor = document.querySelector<HTMLElement>('[data-cursor-follower]');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!cursor || !finePointer || !motionAllowed()) return;

    const label = cursor.querySelector<HTMLElement>('[data-cursor-label]');
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3' });
    let visible = false;

    window.addEventListener(
        'pointermove',
        (event) => {
            if (event.pointerType !== 'mouse') return;
            if (!visible) {
                visible = true;
                gsap.set(cursor, { x: event.clientX, y: event.clientY });
                cursor.classList.add('is-visible');
            }
            xTo(event.clientX);
            yTo(event.clientY);
        },
        { passive: true, signal },
    );

    document.documentElement.addEventListener(
        'pointerleave',
        () => {
            visible = false;
            cursor.classList.remove('is-visible');
        },
        { signal },
    );

    document.addEventListener(
        'pointerover',
        (event) => {
            const target = (event.target as Element).closest<HTMLElement>('[data-cursor], a, button, summary, label');
            const text = target?.dataset.cursor;
            cursor.classList.toggle('is-label', Boolean(text));
            cursor.classList.toggle('is-link', Boolean(target) && !text);
            if (label && text) label.textContent = text;
        },
        { passive: true, signal },
    );

    return () => {
        cursor.classList.remove('is-visible', 'is-label', 'is-link');
    };
});
