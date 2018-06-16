function CheckTheData(l, p) {
    fetch('mongodb://<drraken1>:<4zuiui5y>@ds161740.mlab.com:61740/justforgym')
        .then(response => {
            return response.json()
        })
        .then(data => sendData(data, l, p));
}


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
        alert('Złe dane logowania!');
    }
}

const button = document.getElementById('submit-login');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let login = document.getElementById('login-box').value;
    let password = document.getElementById('password-box').value;

    CheckTheData(login, password);

})