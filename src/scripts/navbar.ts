import { gsap } from 'gsap';

export function initNavbar() {
    const header = document.querySelector('header') as HTMLElement;
    const menuBtn = document.querySelector('[aria-controls="mobile-menu"]') as HTMLButtonElement;
    const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
    const menuOverlay = mobileMenu?.querySelector('.mobile-overlay') as HTMLElement;
    const menuLinks = mobileMenu?.querySelectorAll('.mobile-link');
    const closeBtn = mobileMenu?.querySelector('.mobile-close-btn') as HTMLButtonElement;

    if (!header) return;

    // Scroll logic
    const onScroll = () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
            header.style.backdropFilter = 'blur(14px)';
            header.style.backgroundColor = 'rgba(245,240,232,0.88)';
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
        } else {
            header.classList.remove('scrolled');
            header.style.backdropFilter = 'none';
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu logic
    if (menuBtn && mobileMenu && menuOverlay && menuLinks) {
        let isOpen = false;

        const openMenu = () => {
            isOpen = true;
            menuBtn.setAttribute('aria-expanded', 'true');
            mobileMenu.style.display = 'block';

            gsap.to(menuOverlay, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });

            gsap.fromTo(menuLinks,
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
            );

            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            isOpen = false;
            menuBtn.setAttribute('aria-expanded', 'false');

            gsap.to(menuOverlay, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            });

            gsap.to(menuLinks, {
                y: -20,
                opacity: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: "power2.in",
                onComplete: () => {
                    mobileMenu.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        };

        const toggleMenu = () => isOpen ? closeMenu() : openMenu();

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn?.addEventListener('click', closeMenu);

        document.addEventListener('astro:before-preparation', () => {
            window.removeEventListener('scroll', onScroll);
            menuBtn.removeEventListener('click', toggleMenu);
            closeBtn?.removeEventListener('click', closeMenu);
            document.body.style.overflow = '';
        }, { once: true });
    }
}