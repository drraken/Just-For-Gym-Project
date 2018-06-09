/*var loginButton = document.getElementById('login-header');
var overlayLayer = document.getElementById('overlay');
var exitbutton = document.getElementById('exitbutton')
var mainclose = document.getElementById('main-id')

if (typeof loginButton != "undefined") {
    function changeState(state) {
        switch (state) {
            case 1:
                overlayLayer.classList.add('is-open');
                mainclose.classList.add('is-close');
                break;
            case 2:
                overlayLayer.classList.remove('is-open');
                mainclose.classList.remove('is-close');
                break;
            default:
                alert('something went wrong');
        }
    }

    var state = 0;


    loginButton.addEventListener('click', (e) => {
        changeState(1);
    });

    exitbutton.addEventListener('click', (e) => {
        changeState(2);
    });
} else {
    console.log('Couldn`t find any loginButton')
}
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

function heySiriCheckThePassword(l, p) {
    fetch('http://localhost:3009/tasks')
        .then(response => {
            return response.json()
        })
        .then(data => opierdolDane(data, l, p));
}


function opierdolDane(gruz, l, p) {
    let valid = false;
    gruz.forEach(smietnik => {
        if (smietnik.login == l && smietnik.password == p) {
            valid = true;
        }
    })
    if (valid) {
        console.log('zalogowano')
        window.location.replace("http://localhost:3000/index.html");
    } else {
        alert('Złe dane logowania!');
    }
}

const button = document.getElementById('submit-login');
if (typeof button != "undefined") {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let login = document.getElementById('login-box').value;
        let password = document.getElementById('password-box').value;

        heySiriCheckThePassword(login, password);

    })
}

const button_reg = document.getElementById('submit-reg');
if (typeof  button_reg != "undefined") {
    console.log('checkigntrtesrs');

    function addSomeNewData(login_reg, email_reg, password_reg) {

        const User = {
            login: login_reg,
            email: email_reg,
            password: password_reg,
        }
        
        fetch('http://localhost:3009/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new FormData(User)
            })
            .then(response => {
                return response.json()
            })
            .then(data => console.log(data));
    }    
    button_reg.addEventListener('click', (e) => {
        e.preventDefault();
        let login_reg = document.getElementById('login-reg-box').value;
        let email_reg = document.getElementById('email-reg-box').value;
        let password_reg = document.getElementById('password-reg-box').value;
        console.log('button working fine');
        addSomeNewData(login_reg, email_reg, password_reg);

    })
}*/
