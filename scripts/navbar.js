function openMenu() {
    navbar = document.getElementById("topnav")
    if (navbar.className === "topnav") {
        navbar.className += " responsive"
    } else {
        navbar.className = "topnav"
    }
}