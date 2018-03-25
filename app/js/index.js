function testFunction(param){
    console.log(param);
}
function changeState(state){
    switch(state){
        case 1: overlayLayer.classList.add('is-open');
            break;
        case 2: overlayLayer.classList.remove('is-open')
            loginButton.textContent = 'Hi, Arek';
            break;
        default:alert('something went wrong');
    }
}
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

