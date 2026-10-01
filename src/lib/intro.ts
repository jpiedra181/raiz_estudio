/**
 * Builds the markup for an above-the-fold title whose lines rise from a mask.
 * Lines are separated with "|". The animation is pure CSS (see `.intro-line`),
 * so it starts on first paint without waiting for JavaScript or web fonts.
 */
export function introLines(title: string, startIndex = 0) {
    return title
        .split('|')
        .map(
            (line, i) =>
                `<span class="intro-mask"><span class="intro-line" style="--i:${startIndex + i}">${line.trim()}</span></span>`,
        )
        .join(' ');
}
