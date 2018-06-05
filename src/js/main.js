testFunction("passing param to external file-test");
var loginButton = document.getElementById('login');
var overlayLayer = document.getElementById('overlay');
var submitLogin = document.getElementById('submit');
var exitbutton = document.getElementById('exitbutton')
var mainclose = document.getElementById('main-id')

var state = 0;

loginButton.addEventListener('click', (e) => {
    changeState(1);
});

submitLogin.addEventListener('click', (e) => {
    changeState(2);
});
exitbutton.addEventListener('click', (e) => {
    changeState(3);
});

var el = document.querySelectorAll(".mySlides");
if (el.length > 0) {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

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
}

function heySiriCheckThePassword (l,p){
    fetch('http://localhost:3009/tasks')
    .then(response => {
        return response.json()
    })
    .then(data => opierdolDane(data,l,p));
}


function opierdolDane(gruz,l,p){
    let valid = false;
    gruz.forEach(smietnik => {
        if(smietnik.login == l && smietnik.password == p){
            valid = true;
        }
    })
    
    console.log( valid ? "zalogoano": "raczej nie");
}

const button = document.getElementById('dajID');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    let login = 'adminss';
    let password = '789'; //document.getElementById('..').value();
    
    heySiriCheckThePassword(login,password);
})