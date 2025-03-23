document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle"); // Assuming this is your menu button
    const mobileMenu = document.getElementById("mobile-menu"); // Assuming this is your navigation menu

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active"); // Toggle class to show/hide menu
    });
});
