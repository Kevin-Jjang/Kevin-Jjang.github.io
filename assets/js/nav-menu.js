/**
 * Displays the mobile navigation menu.
 */
function displayMenu(e) {
    let navBtn = document.getElementById('nav-menu-btn');
    let navMenu = document.getElementById('navbar-mobile');

    if(navMenu.className == 'visible') {
        navMenu.className = 'hidden';
        navBtn.ariaLabel = 'Open Menu';
    } else {
        navMenu.className = 'visible';
        navBtn.ariaLabel = 'Close Menu';
    }
}

document.addEventListener('click', function(e) {
    let isBtn = document.getElementById('nav-menu-btn').contains(e.target);
    let isNav = document.getElementById('navbar-mobile').contains(e.target);

    if(!isBtn && !isNav) {
        document.getElementById('navbar-mobile').className = 'hidden';
        document.getElementById('nav-menu-btn').ariaLabel = 'Open Menu';
    }
});