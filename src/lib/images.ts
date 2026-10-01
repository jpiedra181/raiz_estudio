import type { ImageMetadata } from 'astro';

// Every local image under src/assets/images, keyed by its path relative to that folder.
const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
});

const localImages = new Map(
    Object.entries(modules).map(([path, mod]) => [path.replace('/src/assets/images', ''), mod.default]),
);

/**
 * Resolves an image reference from the data files.
 * Local references ("/projects/...") become optimisable ImageMetadata;
 * remote URLs are returned as-is (Astro downloads and optimises them at build).
 */
export function resolveImage(src: string): ImageMetadata | string {
    if (/^https?:\/\//.test(src)) return src;
    const image = localImages.get(src);
    if (!image) throw new Error(`Image not found in src/assets/images: ${src}`);
    return image;
}

export const isRemote = (src: string) => /^https?:\/\//.test(src);
