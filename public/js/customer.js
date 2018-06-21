var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
// prosta karuzela opini klientów z sekcji "Customers"
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
function toggleLogInLogOut() {
    let logIn = document.getElementById('login-header');
    logIn.style.display = logIn.style.display == "none" ? "block" : "none";

    let logOut = document.getElementById('logout-header');
    logOut.style.display = logOut.style.display == "none" ? "block" : "none";
}

let sessionVar = sessionStorage.getItem('login');
if (sessionVar == 'true') {    
    toggleLogInLogOut();
   
}