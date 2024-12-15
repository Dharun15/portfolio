document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll("#nav-links a");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", function() {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
});
