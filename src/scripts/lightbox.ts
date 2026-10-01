import { gsap } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';
import { lockScroll } from './smooth-scroll';

onPage((signal) => {
    const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
    if (!dialog) return;

    const data = dialog.querySelector('[data-lightbox-images]')?.textContent ?? '[]';
    const images: { src: string; alt: string }[] = JSON.parse(data);
    const img = dialog.querySelector<HTMLImageElement>('[data-lightbox-img]')!;
    const current = dialog.querySelector<HTMLElement>('[data-lightbox-current]')!;
    let index = 0;

    const show = (next: number, direction = 0) => {
        index = (next + images.length) % images.length;
        const { src, alt } = images[index];
        current.textContent = String(index + 1).padStart(2, '0');
        if (motionAllowed() && dialog.open && direction) {
            gsap.timeline()
                .to(img, { opacity: 0, x: -40 * direction, duration: 0.25, ease: 'power2.in' })
                .add(() => {
                    img.src = src;
                    img.alt = alt;
                })
                .fromTo(img, { x: 40 * direction }, { opacity: 1, x: 0, duration: 0.6, ease: 'expo.out' });
        } else {
            img.src = src;
            img.alt = alt;
        }
        // Warm up the neighbours
        [index + 1, index - 1].forEach((i) => {
            const preload = new Image();
            preload.src = images[(i + images.length) % images.length].src;
        });
    };

    const open = (start: number) => {
        show(start);
        dialog.showModal();
        lockScroll(true);
        if (motionAllowed()) {
            gsap.fromTo(dialog, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
            gsap.fromTo(img, { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'expo.out' });
        }
    };

    const close = () => {
        if (!dialog.open) return;
        const finish = () => {
            dialog.close();
            lockScroll(false);
            gsap.set([dialog, img], { clearProps: 'all' });
        };
        if (motionAllowed()) gsap.to(dialog, { opacity: 0, duration: 0.35, ease: 'power2.in', onComplete: finish });
        else finish();
    };

    document.querySelectorAll<HTMLElement>('[data-lightbox-open]').forEach((trigger) => {
        trigger.addEventListener('click', () => open(Number(trigger.dataset.lightboxOpen)), { signal });
    });

    dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', close, { signal });
    dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => show(index - 1, -1), { signal });
    dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => show(index + 1, 1), { signal });

    dialog.addEventListener(
        'cancel',
        (event) => {
            event.preventDefault();
            close();
        },
        { signal },
    );

    dialog.addEventListener(
        'keydown',
        (event) => {
            if (event.key === 'ArrowRight') show(index + 1, 1);
            if (event.key === 'ArrowLeft') show(index - 1, -1);
        },
        { signal },
    );

    // Click on the backdrop area (outside the photo) closes
    dialog.addEventListener(
        'click',
        (event) => {
            if (event.target === dialog || (event.target as HTMLElement).classList.contains('lightbox__stage')) {
                close();
            }
        },
        { signal },
    );

    let startX = 0;
    dialog.addEventListener('pointerdown', (event) => (startX = event.clientX), { passive: true, signal });
    dialog.addEventListener(
        'pointerup',
        (event) => {
            const delta = event.clientX - startX;
            if (event.pointerType !== 'mouse' && Math.abs(delta) > 50) {
                if (delta < 0) show(index + 1, 1);
                else show(index - 1, -1);
            }
        },
        { passive: true, signal },
    );

    return () => {
        if (dialog.open) dialog.close();
        lockScroll(false);
    };
});
