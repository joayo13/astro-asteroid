const hamburger = document.querySelector(
    '.hamburger-menu input'
) as HTMLInputElement
const mobileOverlay = document.querySelector('#mobile-nav-links') as HTMLElement

const toggleMobileOverlay = () => {
    if (!hamburger.checked) {
        mobileOverlay.classList.add('pointer-events-none')
        mobileOverlay.classList.add('opacity-0')
        mobileOverlay.classList.remove('no-doc-scroll')
    } else {
        mobileOverlay.classList.remove('pointer-events-none')
        mobileOverlay.classList.remove('opacity-0')
        mobileOverlay.classList.add('no-doc-scroll')
    }
}

hamburger.addEventListener('click', toggleMobileOverlay)
const mobileLinks = document.querySelectorAll('.mobile-link')
mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        toggleMobileOverlay()
    })
})
