// add class navbarDark on navbar scroll
const navBarHeader = document.querySelector('.navbar');

// Called whenever user repositions scroll bar
window.onscroll = function() {
    //scrollY returns number of pixels currently scrolled vertically
    var top = window.scrollY;
    if(top >=100) {
        navBarHeader.classList.add('navbarDark');
    }
    else {
        navBarHeader.classList.remove('navbarDark');
    }
}