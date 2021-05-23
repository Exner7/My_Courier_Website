
var navIsHidden = true;

function toggleNav() {

    const nav = document.querySelector("nav");

    const navButtonTopBar = document.querySelector("#nav-button-top-bar");
    const navButtonBottomBar = document.querySelector("#nav-button-bottom-bar");

    if (navIsHidden) {

        nav.style.animationName = "nav-drop";

        navButtonTopBar.style.animationName = "rotate-nav-button-top-bar";
        navButtonBottomBar.style.animationName = "rotate-nav-button-bottom-bar";

        navIsHidden = false;

    } else {

        nav.style.animationName = "nav-hide";

        navButtonTopBar.style.animationName = "unrotate-nav-button-top-bar";
        navButtonBottomBar.style.animationName = "unrotate-nav-button-bottom-bar";

        navIsHidden = true;

    }

}
