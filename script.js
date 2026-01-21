// Select navbar
const navbar = document.getElementById("navbar");

// Select all sections and nav links
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-links a");

// Scroll event
window.addEventListener("scroll", () => {

    // -----------------------------
    // NAVBAR BACKGROUND CHANGE
    // -----------------------------
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // -----------------------------
    // ACTIVE LINK HIGHLIGHT
    // -----------------------------
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
