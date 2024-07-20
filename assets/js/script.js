document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const photo = document.getElementById("photo");

    const toggleDisplay = display => [navbar, photo].forEach(el => el.style.display = display);

    const adjustMenu = () => {
        if (innerWidth <= 800) {
            document.querySelectorAll(".sidebar__info-list li").forEach(item =>
                item.onclick = () => toggleDisplay("none")
            );
            clickMenu = () => toggleDisplay(navbar.style.display === "flex" ? "none" : "flex");
        } else {
            document.querySelectorAll(".sidebar__info-list li").forEach(item => item.onclick = null);
            delete clickMenu;
            toggleDisplay("flex");
        }
    };

    adjustMenu();
    addEventListener("resize", adjustMenu);
});
