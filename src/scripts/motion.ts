const STORAGE_KEY = 'raiz-motion';
const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function storedPreference(): string | null {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

/** True when neither the OS nor the on-site toggle asked for reduced motion. */
export function motionAllowed() {
    return !reducedQuery.matches && document.documentElement.dataset.motion !== 'off';
}

/** Mirrors the current preference onto <html> (also re-applied after each swap). */
export function applyMotionPreference(root = document.documentElement) {
    const off = storedPreference() === 'off';
    if (off) root.dataset.motion = 'off';
    else delete root.dataset.motion;
    root.classList.toggle('motion', !off && !reducedQuery.matches);
}

export function setMotion(enabled: boolean) {
    try {
        localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off');
    } catch {
        /* storage unavailable: preference lasts for this page only */
    }
    const root = document.documentElement;
    if (enabled) delete root.dataset.motion;
    else root.dataset.motion = 'off';
    root.classList.toggle('motion', enabled && !reducedQuery.matches);
}

export function onReducedMotionChange(callback: () => void) {
    reducedQuery.addEventListener('change', callback);
}
