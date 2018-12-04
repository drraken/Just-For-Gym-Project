// toggle przycisku logIn logOut
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
//Pobiera dane z sessionStorage i umiesza je w Arrayu
let dataToSend = [];
for (let i = 1; i < 13; i++) {
    var data = sessionStorage.getItem("product_" + i);

    if (data != undefined) {
        dataToSend.push({
            item: 'product_' + i,
            quantity: data
        });
    }
};

let container = document.getElementById('myCart-container');
let templateString = ``;
//tamplete string który renderuje na stronie pobierane dane z sessionStorage
dataToSend.forEach((e) => {
    templateString += `<ul class="item">
                        <li> <strong>Name</strong>:  ${e.item} </li>
                        <li> <strong>Quantity</strong>:  ${e.quantity} </li>
                        <li> <button id='${e.item}'>Remove</button></li>
                      </ul>`

});



container.innerHTML = templateString;

function RemoveFunction(keyValue) {
    sessionStorage.removeItem("'" + keyValue + "'");
};
//funckja obslugujaca przycisk do usuwania produktów z koszyka
function buttonHandler(dataName, idButton) {
    let button = document.getElementById(idButton);
    if (button != null) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem(dataName);
            location.reload();
        });
    }
}
for (let i = 1; i < 13; i++) {
    buttonHandler('product_' + i, 'product_' + i);
}

const button_buy = document.getElementById('buyButton');
//dodaje event do buttona oraz wywoluje funckje po kliknieciu
button_buy.addEventListener('click', (e) => {
    e.preventDefault();

    let name_buy = document.getElementById('name-buy-box').value;
    let lastname_buy = document.getElementById('lastname-buy-box').value;
    let email_buy = document.getElementById('email-buy-box').value;
    let country_buy = document.getElementById('country-buy-box').value;
    let city_buy = document.getElementById('city-buy-box').value;
    let street_buy = document.getElementById('street-buy-box').value;

    tryToSendInfo(name_buy, lastname_buy, email_buy, country_buy, city_buy, street_buy);
})

//sprawdza czy wszystkie dane podane przez uzytkownika sie zgadzaja jesli tak to wywoluje funckje ktora tworzy nowe "konto"
function tryToSendInfo(name_buy, lastname_buy, email_buy, country_buy, city_buy, street_buy) {

    if (name_buy !== "" && lastname_buy !== "" && email_buy !== "" && country_buy !== "" && city_buy !== "" && street_buy !== "") {
        addSomeNewData(name_buy, lastname_buy, email_buy, country_buy, city_buy, street_buy);
        alert('Order succesffully');        
        sessionStorage.clear();        
        window.location.replace('index');

    } else {
        alert('Please fill all forms');
    }

}
//wysyła dane do bazy 
function addSomeNewData(name_buy, lastname_buy, email_buy, country_buy, city_buy, street_buy) {

    const Buyer = {
        item: dataToSend,
        name: name_buy,
        lastname: lastname_buy,
        email: email_buy,
        country: country_buy,
        city: city_buy,
        street: street_buy,
    }


    fetch('https://justforgym.herokuapp.com/buyer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: JSON_to_URLEncoded(Buyer)
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



