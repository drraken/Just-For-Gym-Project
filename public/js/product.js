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
        alert('Logout successfull')
        toggleLogInLogOut();
    })
}

function buttonHandler(idButton, idName) {
    let button = document.getElementById(idButton);
    let productName = document.getElementById(idName).innerHTML;    
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (Number(sessionStorage.getItem(productName)) == 0) {
            sessionStorage.setItem(productName, 1);
            alert('Added to cart '+ productName);            
        } else {           
            var data = Number(sessionStorage.getItem(productName));
            sessionStorage.setItem(productName, data + 1);
            alert('Now '+ Number(data + 1) + ' pieces of '+productName +' in your cart');            
        }
    });
};
for (let i = 1; i < 13; i++) {
    buttonHandler('add-product-' + i, 'nameprod' + i, );
};

