//pobiera dane z bazy danych
function CheckTheData(l, p) {
    fetch('https://radiant-brook-14678:3006/tasks')
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
        window.location.replace("index");
    } else {
        alert('Wrong login data!');
    }
}

const button = document.getElementById('submit-login');
//tworzy event na kilkniecie i pobiera wprowadzone dane przez uzytkownika
button.addEventListener('click', (e) => {
    e.preventDefault();
    let login = document.getElementById('login-box').value;
    let password = document.getElementById('password-box').value;

    CheckTheData(login, password);

})