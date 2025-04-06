// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for nav links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("shadow", "bg-dark");
        } else {
            navbar.classList.remove("shadow", "bg-dark");
        }
    });

    // Button hover animation
    document.querySelectorAll(".btn-primary").forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});
