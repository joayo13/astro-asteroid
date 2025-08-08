// src/scripts/mobileNavbarScroll.ts

export function initMobileNavScroll() {
    const nav = document.querySelector('.navbar');
    if (!nav || screen.width >= 1028) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.classList.add('translate-y-[-100%]');
        } else {
            nav.classList.remove('translate-y-[-100%]');
        }
        lastScroll = currentScroll;
    });
}
