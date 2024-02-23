function toggleMobileMenu() {
    var x = document.getElementById("nav-menu");
    var sidebar = document.getElementById("sidebar");
    if (x.style.display === "block") {
        x.style.display = "none";
        sidebar.style.display = "none";

    } else {
        x.style.display = "block";
        sidebar.style.display = "flex";
    }
    var icon = document.getElementById("toggle-icon");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}

//Refered https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element

var topNav = document.getElementById("nav-menu");
var links = topNav.getElementsByClassName("u-no-style-link");
console.log(links);

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (index) {
        return function () {
            // Remove the "active" class from all elements
            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }

            // Add the "active" class to the clicked element
            links[index].classList.add("active");
        };
    }(i));
}

var sideNav = document.getElementById("side-menu");
var sideLinks = sideNav.getElementsByClassName("u-no-style-link");

for (var i = 0; i < sideLinks.length; i++) {
    sideLinks[i].addEventListener("click", function (index) {
        return function () {
            // Remove the "active" class from all elements
            for (var j = 0; j < sideLinks.length; j++) {
                sideLinks[j].classList.remove("active");
            }

            // Add the "active" class to the clicked element
            sideLinks[index].classList.add("active");
        };
    }(i));
}