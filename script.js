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
        ".about-intro-card, " +
        ".about-info-card, " +
        ".about-focus-card, " +
        ".skills-modern-card, " +
        ".project-card, " +
        ".github-activity-card, " +
        ".github-stat-card, " +
        ".contact-info, " +
        ".contact-terminal"
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
        ".github-stats-grid",
        ".contact-grid"
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
       ACTIVE NAVIGATION
    ============================================ */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");


    const updateActiveNav = () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 140;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    updateActiveNav();

});
