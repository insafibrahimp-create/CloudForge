// ============================================
// CloudForge
// Portfolio interactions
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

        });

    }

});
