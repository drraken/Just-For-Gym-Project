const button = document.getElementById('submit-login');

//pobiera dane z bazy danych

function toggleLoginLogOut() {
    let logIn = document.getElementById('login-header');
    logIn.style.display = lI.style.display == "none" ? "block" : "none";

    let logOut = document.getElementById('logout-header');
    logOut.style.display = lO.style.display == "none" ? "block" : "none";
}
if (sessionStorage.getItem('login') == true) {
    toggleLogInLogOut();

}

function CheckTheData(l, p) {
    fetch('https://radiant-brook-14678.herokuapp.com/tasks')
        .then(response => {
            return response.json()
        })
        .then(data => sendData(data, l, p));
}

//funckja sprawdzajaca czy dane zgadzaja sie ze soba
function sendData(thing1, l, p) {
    let valid = false;
    thing1.forEach(element => {
        if (element.login == l && element.password == p) {
            valid = true;
        }
    })
    if (valid) {
        alert('Hello ' + l)
        sessionStorage.setItem('login', 'true');
        toggleLogInLogOut();
        window.location.replace("index");

    } else {
        alert('Wrong login data!');
    }
}

function CheckIfLogOutExist() {
    if (logOut.lenght > 0) {
         console.log('logout button is working fine');
        let logOut = document.getElementById('logout-header');
        logOut.addEventListener('click', () => {
            sessionStorage.setItem('login', 'false');
            toggleLogInLogOut();
        })
    } else {

    }
}
//tworzy event na kilkniecie i pobiera wprowadzone dane przez uzytkownika
function CheckIfButtonExist() {
    if (button.lenght > 0) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let login = document.getElementById('login-box').value;
            let password = document.getElementById('password-box').value;
            console.log('button is working fine');
            CheckTheData(login, password);
        })
    } else {

    }
}
