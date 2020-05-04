$("nav a[href^='#']").on('click', function(e) {
    e.preventDefault();

    var hash = this.hash;

    /* 600 == speed*/
    $('body, html').animate({
        scrollTop: $(hash).offset().top
    }, 600, function() {
        window.location.hash = hash;
    });
});