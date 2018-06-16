let email_reg, login_reg, password_reg;
const button_reg = document.getElementById('submit-reg');
//dodaje event do buttona oraz wywoluje funckje po kliknieciu
button_reg.addEventListener('click', (e) => {
    e.preventDefault();

    login_reg = document.getElementById('login-reg-box').value;
    password_reg = document.getElementById('password-reg-box').value;
    email_reg = document.getElementById('email-reg-box').value;

    tryToCreateAccount(login_reg, password_reg, email_reg); 
})

//sprawdza czy wszystkie dane podane przez uzytkownika sie zgadzaja jesli tak to wywoluje funckje ktora tworzy nowe "konto"
function tryToCreateAccount(login_reg, password_reg, email_reg) {
    fetch('http://localhost:3009/tasks')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let vE = validateEmail(email_reg);
            let iLE = isLoginExist(data, login_reg);
        
            if (vE && !iLE) {
                console.log('create');
                addSomeNewData(login_reg,email_reg,password_reg);
                alert('Account successfully created');
                window.location.replace('index');
            } else if (!vE && iLE) {
               alert('Wrong email adress and this login is taken');
            }
            else if (vE && iLE) {
               alert('This login is already taken');
            }
          else if (!vE && !iLE) {
               alert('Wrong email address');
            }
        })
}
//sprawdza czy dany login juz istnieje w bazie danych
function isLoginExist(data, login) {
    let exist = false;
    data.forEach(element => {
        if (element.login == login) {
            exist = true;
        }
    });

    return exist;
}
//validuje email
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
}
//pobiera dane wprowadzone przez uzytkownika i wysyla je do bazy danych
function addSomeNewData(login_reg, email_reg, password_reg) {

    const User = {
        login: login_reg,
        email: email_reg,
        password: password_reg,
    }

    console.log(User);

    fetch('http://localhost:3009/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: JSON_to_URLEncoded(User)
        })
        .then(response => {
            return response.json()
        })
        .then(data => console.log(data));
}

function JSON_to_URLEncoded(element, key, list) {
    var list = list || [];
    if (typeof (element) == 'object') {
        for (var idx in element)
            JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
    } else {
        list.push(key + '=' + encodeURIComponent(element));
    }
    return list.join('&');
}
