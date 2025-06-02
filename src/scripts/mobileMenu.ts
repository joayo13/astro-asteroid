const hamburger = document.querySelector("#hamburger") as HTMLButtonElement;
const hamburgerExit = document.querySelector("#hamburger-exit") as HTMLButtonElement;
const mobileLink = document.querySelector("#mobile-link") as HTMLAnchorElement;
const mobileNavLinks = document.querySelector("#mobile-nav-links") as HTMLElement;

const toggleMobileNav = () => {
    mobileNavLinks.classList.toggle("pointer-events-none");
    mobileNavLinks.classList.toggle("opacity-0");
    mobileNavLinks.classList.toggle("no-doc-scroll");
};

hamburger.addEventListener("click", toggleMobileNav);
hamburgerExit.addEventListener("click", toggleMobileNav);
mobileLink.addEventListener("click", () => {
    toggleMobileNav();
});