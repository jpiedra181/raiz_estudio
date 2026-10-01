import { ScrollTrigger } from './gsap';
import { mountAll } from './lifecycle';

// Global behaviour
import './smooth-scroll';
import './animations';
import './header';
import './menu';
import './cursor';
import './footer';

// Section behaviour — each module is inert on pages without its markup.
// A single bundle means client-side navigations never wait for new scripts.
import './hero';
import './service-preview';
import './carousel';
import './portfolio';
import './lightbox';
import './timeline';
import './contact';

declare global {
    interface Window {
        __raizReady?: boolean;
    }
}

// Tells the inline safety net in <head> that the bundle booted
window.__raizReady = true;

// Anything not owned by a page context must not leak into the next page
document.addEventListener('astro:after-swap', () => ScrollTrigger.killAll());

mountAll();
