const hamburger = document.querySelector(
    '.hamburger-menu input'
) as HTMLInputElement;
const mobileOverlay = document.querySelector(
    '#mobile-nav-wrapper'
) as HTMLElement;

const mobileNavLinksContainer = document.querySelector(
    '#mobile-nav-links-container'
) as HTMLElement;

const toggleMobileOverlay = () => {
    if (!mobileOverlay.classList.contains('opacity-0')) {
        mobileOverlay.classList.add('pointer-events-none');
        mobileOverlay.classList.add('opacity-0');
        mobileOverlay.classList.remove('no-doc-scroll');
        mobileNavLinksContainer.classList.add('translate-x-full');
        mobileNavLinksContainer.classList.remove('translate-x-0');
    } else {
        mobileOverlay.classList.remove('pointer-events-none');
        mobileOverlay.classList.remove('opacity-0');
        mobileOverlay.classList.add('no-doc-scroll');

        mobileNavLinksContainer.classList.remove('translate-x-full');
        mobileNavLinksContainer.classList.add('translate-x-0');
    }
};

hamburger.addEventListener('click', toggleMobileOverlay);
const mobileLinks = document.querySelectorAll('#mobile-link');
mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        toggleMobileOverlay();
    });
});
