// Hamburger Menu Functionality

// assign variable to hamburger icon
let hamburgerIcon = document.querySelector('.hamburgerIconContainer');

// create array of items to be toggled
let arrayOfToggleLinks = Array.from(document.querySelectorAll('.hideNavLink'));

// when hamburger is clicked, run function
hamburgerIcon.addEventListener('click', function(click) {
    // for each item in array, toggle visibility: hidden, and display: none
    arrayOfToggleLinks.forEach(function(link) {
        link.classList.toggle('hideNavLink');
    })
});