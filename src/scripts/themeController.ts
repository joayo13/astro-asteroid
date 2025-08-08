// src/scripts/themeEnhancements.ts

import { themeChange } from 'theme-change';

export function initThemeEnhancements() {
    themeChange();

    const effectiveTheme =
        localStorage.getItem('theme') ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light');

    const checkboxSetter = () => {
        const themeController = document.getElementById(
            'themeControllerWrapper'
        );
        const checkbox =
            document.querySelector<HTMLInputElement>('.theme-controller');

        if (checkbox) {
            checkbox.checked = effectiveTheme === 'dark';
            setTimeout(() => {
                themeController?.classList.remove('no-anim');
            }, 100);
        } else {
            requestAnimationFrame(checkboxSetter);
        }
    };

    checkboxSetter();
}
