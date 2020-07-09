let mainNav = document.getElementById('js_menu');
let navBarToggle = document.getElementById('js-navigation_bar_toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});