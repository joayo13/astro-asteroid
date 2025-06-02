const hamburger = document.querySelector(".hamburger-menu input") as HTMLInputElement;
const mobileNavLinks = document.querySelector("#mobile-nav-links") as HTMLElement;

const toggleMobileNav = () => {
    if (!hamburger.checked) {
        mobileNavLinks.classList.add("pointer-events-none");
        mobileNavLinks.classList.add("opacity-0");
        mobileNavLinks.classList.add("no-doc-scroll");
    }
    else {
        mobileNavLinks.classList.remove("pointer-events-none");
        mobileNavLinks.classList.remove("opacity-0");
        mobileNavLinks.classList.remove("no-doc-scroll");
    }
};

hamburger.addEventListener("click", toggleMobileNav);
const mobileLinks = document.querySelectorAll(".mobile-link");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleMobileNav();
    });
});