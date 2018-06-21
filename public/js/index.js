const button = document.getElementById('submit-login');

//pobiera dane z bazy danych

function toggleLogInLogOut() {
    let logIn = document.getElementById('login-header');
    console.log(logIn);
    logIn.style.display = logIn.style.display == "none" ? "block" : "none";

    let logOut = document.getElementById('logout-header');
    logOut.style.display = logOut.style.display == "none" ? "block" : "none";
}
console.log(sessionStorage.getItem('login'));
if (sessionStorage.getItem('login') == true) {
    console.log('sesionsstorageworking');
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
        
        //toggleLogInLogOut();
        window.location.replace("index");
        

    } else {
        alert('Wrong login data!');
    }
}


    if (document.getElementById('logout-header')) {
         console.log('logout button is working fine');
        let logOut = document.getElementById('logout-header');
        logOut.addEventListener('click', () => {
            sessionStorage.setItem('login', 'false');
            toggleLogInLogOut();
        })
    }



//tworzy event na kilkniecie i pobiera wprowadzone dane przez uzytkownika

    if (document.getElementById('submit-login')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let login = document.getElementById('login-box').value;
            let password = document.getElementById('password-box').value;
            console.log('button is working fine');
            CheckTheData(login, password);
        })
    } 

    

