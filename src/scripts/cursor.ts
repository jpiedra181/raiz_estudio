// import { gsap } from 'gsap';

// export function initCursor() {
//     const isFinePointer = window.matchMedia('(pointer: fine)').matches;
//     if (!isFinePointer) return;

//     const cursorNode = document.getElementById('custom-cursor');
//     if (!cursorNode) return;

//     const cursorText = cursorNode.querySelector('.cursor-text') as HTMLElement;

    
//     gsap.set(cursorNode, { xPercent: -50, yPercent: -50 });

//     const xTo = gsap.quickTo(cursorNode, "x", { duration: 0.25, ease: "power3" });
//     const yTo = gsap.quickTo(cursorNode, "y", { duration: 0.25, ease: "power3" });

//     window.addEventListener("mousemove", (e) => {
//         xTo(e.clientX);
//         yTo(e.clientY);
//     });

    
//     const addHoverEffects = () => {
        
//         const imageHoverEls = document.querySelectorAll('[data-cursor-image]');
//         imageHoverEls.forEach(el => {
//             el.addEventListener('mouseenter', () => {
//                 gsap.to(cursorNode, {
//                     width: 48,
//                     height: 48,
//                     backgroundColor: 'transparent',
//                     duration: 0.3
//                 });
//                 if (cursorText) {
//                     cursorText.style.opacity = '1';
//                     cursorText.textContent = 'VER';
//                 }
//             });
//             el.addEventListener('mouseleave', () => {
//                 gsap.to(cursorNode, {
//                     width: 8,
//                     height: 8,
//                     duration: 0.3
//                 });
//                 if (cursorText) cursorText.style.opacity = '0';
//             });
//         });

        
//         const ctaHoverEls = document.querySelectorAll('a, button, [role="button"], [data-cursor-solid]');
//         ctaHoverEls.forEach(el => {
            
//             if (el.hasAttribute('data-cursor-image')) return;

//             el.addEventListener('mouseenter', () => {
//                 gsap.to(cursorNode, {
//                     backgroundColor: 'var(--color-accent)',
//                     scale: 1.5,
//                     duration: 0.3
//                 });
//             });
//             el.addEventListener('mouseleave', () => {
//                 gsap.to(cursorNode, {
//                     backgroundColor: 'transparent',
//                     scale: 1,
//                     duration: 0.3
//                 });
//             });
//         });
//     };

//     addHoverEffects();

    
//     document.addEventListener('astro:page-load', () => {
//         initCursor();
//     }, { once: true });
// }
