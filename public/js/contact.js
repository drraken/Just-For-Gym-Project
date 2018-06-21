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
  if (document.getElementById('logout-header')) {         
        let logOut = document.getElementById('logout-header');
        logOut.addEventListener('click', () => {
            sessionStorage.setItem('login', 'false');
            alert('Logout successfull');
            toggleLogInLogOut();
        })
    }