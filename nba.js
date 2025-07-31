document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("mobile-menu-icon");
    const mobileLinks = document.getElementById("mobile-nav-links");
    const navLinks = mobileLinks.querySelectorAll("a"); // get all links inside mobile nav

    menuIcon.addEventListener("click", () => {
        mobileLinks.classList.toggle("clicked");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileLinks.classList.remove("clicked");
        });
    });
});
 