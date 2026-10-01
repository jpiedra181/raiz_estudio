/**
 * Page lifecycle for Astro's ClientRouter.
 *
 * Astro fires `astro:page-load` on the initial visit only after window `load`
 * (i.e. after every eager image has downloaded). We mount as soon as the DOM is
 * ready instead, then re-mount after each client-side navigation and tear
 * everything down right before the DOM is swapped.
 */

type Teardown = void | (() => void);
type Setup = (signal: AbortSignal) => Teardown;

interface Mounted {
    controller: AbortController;
    teardown: Teardown;
}

const registry = new Set<Setup>();
const active = new Map<Setup, Mounted>();
let isMounted = false;

function mount(setup: Setup) {
    const controller = new AbortController();
    try {
        active.set(setup, { controller, teardown: setup(controller.signal) });
    } catch (error) {
        console.error(error);
    }
}

function unmount(setup: Setup) {
    const entry = active.get(setup);
    if (!entry) return;
    entry.controller.abort();
    try {
        entry.teardown?.();
    } catch (error) {
        console.error(error);
    }
    active.delete(setup);
}

/** Registers page-level behaviour. `setup` runs on every page; return a cleanup. */
export function onPage(setup: Setup) {
    registry.add(setup);
    if (isMounted) mount(setup);
}

export function mountAll() {
    if (isMounted) return;
    isMounted = true;
    registry.forEach(mount);
}

export function unmountAll() {
    if (!isMounted) return;
    isMounted = false;
    [...registry].reverse().forEach(unmount);
}

/** Re-runs every setup (used when the motion preference changes). */
export function remountAll() {
    unmountAll();
    mountAll();
}

document.addEventListener('astro:page-load', mountAll);
document.addEventListener('astro:before-swap', unmountAll);
