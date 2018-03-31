testFunction("passing param to external file-test");
var loginButton =document.getElementById('login');
var overlayLayer = document.getElementById('overlay');
var submitLogin = document.getElementById('submit');
var exitbutton = document.getElementById('exitbutton')
var mainclose = document.getElementById('main-id')

var state =0;

loginButton.addEventListener('click',(e)=>{
    changeState(1);
});

submitLogin.addEventListener('click',(e)=>{
    changeState(2);
});
exitbutton.addEventListener('click',(e)=>{
    changeState(3);
});

