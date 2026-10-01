import { gsap, ScrollTrigger, SplitText } from './gsap';
import { onPage } from './lifecycle';
import { motionAllowed } from './motion';

const fontsReady = () =>
    Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((resolve) => setTimeout(resolve, 1200))]);

/**
 * Declarative scroll animations driven by data attributes:
 *  [data-reveal]        fade + rise (stagger for siblings entering together)
 *  [data-split]         line-by-line masked reveal
 *  [data-words]         words darken into place as the paragraph scrolls through
 *                       (starts at the 3:1 UI-line colour: AA for large text)
 *  [data-media-reveal]  image frame unveils from the bottom
 *  [data-parallax]      inner image drifts against the scroll
 *  [data-draw]          hairline draws from the left
 *  [data-delay]         optional delay (s) for reveals
 */
onPage(() => {
    if (!motionAllowed()) return;

    const splits: SplitText[] = [];
    let disposed = false;

    const ctx = gsap.context(() => {
        ScrollTrigger.batch('[data-reveal]', {
            start: 'top 90%',
            once: true,
            onEnter: (batch) =>
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    stagger: 0.09,
                    delay: (_, el: HTMLElement) => Number(el.dataset.delay ?? 0),
                }),
        });

        ScrollTrigger.batch('[data-draw]', {
            start: 'top 92%',
            once: true,
            onEnter: (batch) => gsap.to(batch, { scaleX: 1, duration: 1.8, ease: 'expo.inOut', stagger: 0.1 }),
        });

        ScrollTrigger.batch('[data-media-reveal]', {
            start: 'top 92%',
            once: true,
            onEnter: (batch) =>
                batch.forEach((frame, i) => {
                    const img = frame.querySelector('img');
                    const delay = i * 0.12 + Number((frame as HTMLElement).dataset.delay ?? 0);
                    gsap.fromTo(
                        frame,
                        { clipPath: 'inset(100% 0% 0% 0%)' },
                        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut', delay },
                    );
                    if (img) gsap.from(img, { scale: 1.3, duration: 2.2, ease: 'expo.out', delay: delay + 0.1 });
                }),
        });

        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((frame) => {
            const img = frame.querySelector('img');
            if (!img) return;
            const amount = Math.min(Number(frame.dataset.parallax) || 0.12, 0.15) * 50;
            gsap.fromTo(
                img,
                { yPercent: -amount },
                {
                    yPercent: amount,
                    ease: 'none',
                    scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
                },
            );
        });
    });

    // Text splitting waits for the web fonts so line breaks are final
    fontsReady().then(() => {
        if (disposed) return;
        ctx.add(() => {
            gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
                splits.push(
                    SplitText.create(el, {
                        type: 'lines',
                        mask: 'lines',
                        linesClass: 'split-line',
                        aria: 'none',
                        autoSplit: true,
                        onSplit(self) {
                            gsap.set(el, { opacity: 1 });
                            return gsap.from(self.lines, {
                                yPercent: 115,
                                duration: 1.5,
                                stagger: 0.11,
                                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
                            });
                        },
                    }),
                );
            });

            gsap.utils.toArray<HTMLElement>('[data-words]').forEach((el) => {
                const style = getComputedStyle(el);
                const from = style.getPropertyValue('--line-strong').trim() || style.color;
                splits.push(
                    SplitText.create(el, {
                        type: 'words',
                        aria: 'none',
                        autoSplit: true,
                        onSplit(self) {
                            return gsap.fromTo(
                                self.words,
                                { color: from },
                                {
                                    color: style.color,
                                    ease: 'none',
                                    stagger: 0.1,
                                    scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 50%', scrub: 0.6 },
                                },
                            );
                        },
                    }),
                );
            });
        });
        ScrollTrigger.refresh();
    });

    return () => {
        disposed = true;
        ctx.revert();
        splits.forEach((split) => split.revert());
    };
});
