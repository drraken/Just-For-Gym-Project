testFunction("passing param to external file-test");
var loginButton =document.getElementById('login');
var overlayLayer = document.getElementById('overlay');
var submitLogin = document.getElementById('submit');

var state =0;

loginButton.addEventListener('click',(e)=>{
    changeState(1);
});

submitLogin.addEventListener('click',(e)=>{
    changeState(2);
});

