const button = document.getElementById('submit-login');

//pobiera dane z bazy danych

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

function CheckTheData(l, p) {
    fetch('https://justforgym.herokuapp.com/tasks')
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
        let logOut = document.getElementById('logout-header');
        logOut.addEventListener('click', () => {
            sessionStorage.setItem('login', 'false');
            alert('logout successfull')
            toggleLogInLogOut();
        })
    }



//tworzy event na kilkniecie i pobiera wprowadzone dane przez uzytkownika

    if (document.getElementById('submit-login')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let login = document.getElementById('login-box').value;
            let password = document.getElementById('password-box').value;
            CheckTheData(login, password);
        })
    } 

    

