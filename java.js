
window.onscroll = function() {
    if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        var navLinks = document.querySelectorAll('.navbar-link');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'black'
        }
    }
    else if(document.body.scrollTop < 650 || document.documentElement.scrollTop < 650) {
        var navLinks = document.querySelectorAll('.navbar-link');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'white'
        }
    }
}