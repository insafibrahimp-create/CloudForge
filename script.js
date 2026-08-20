// ============================================
// CloudForge
// Portfolio interactions
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================
       MOBILE NAVIGATION
    ============================================ */

    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("mobile-open");
        });

        // Close mobile menu after clicking a link
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("mobile-open");
            });

        });

    }


    /* ============================================
       SCROLL REVEAL ANIMATIONS
    ============================================ */

    const revealElements = document.querySelectorAll(
        ".about-modern-card, " +
        ".about-intro-card, " +
        ".about-info-card, " +
        ".about-focus-card, " +
        ".skills-modern-card, " +
        ".skill-row, " +
        ".project-card, " +
        ".featured-project, " +
        ".github-activity-card, " +
        ".github-stat-card, " +
        ".github-modern-card, " +
        ".contact-info, " +
        ".contact-terminal, " +
        ".contact-modern-inner, " +
        ".contact-channel-card"
    );


    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        // Fallback for older browsers

        revealElements.forEach(element => {

            element.classList.add("reveal-visible");

        });

    }


    /* ============================================
       STAGGER CARD ANIMATIONS
    ============================================ */

    const cardGroups = [
        ".about-modern-grid",
        ".skills-modern-grid",
        ".projects-grid",
        ".featured-project-list",
        ".github-stats-grid",
        ".github-modern-grid",
        ".contact-grid",
        ".contact-channels"
    ];


    cardGroups.forEach(selector => {

        const group = document.querySelector(selector);

        if (!group) return;

        const cards = group.children;

        Array.from(cards).forEach((card, index) => {

            card.style.setProperty(
                "--reveal-delay",
                `${index * 0.08}s`
            );

        });

    });


    /* ============================================
       CONTACT FORM
    ============================================ */

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.querySelector("#contactName")?.value.trim();
            const email = document.querySelector("#contactEmail")?.value.trim();
            const message = document.querySelector("#contactMessage")?.value.trim();


            if (!name || !email || !message) {

                alert("Please fill in all fields before sending.");

                return;

            }


            /*
                IMPORTANT:
                Replace this with your real email address.
            */

            const recipient = "Insafibrahimp@gmail.com";


            const subject =
                `CloudForge Portfolio Inquiry from ${name}`;


            const body =
                `Name: ${name}\n\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`;


            const mailtoURL =
                `mailto:${recipient}` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;


            window.location.href = mailtoURL;

        });

    }


    /* ============================================
       SMOOTH SCROLL
    ============================================ */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (!targetID || targetID === "#") return;

            const target = document.querySelector(targetID);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ============================================
       CURRENT YEAR
    ============================================ */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(element => {

        element.textContent = new Date().getFullYear();

    });

});
