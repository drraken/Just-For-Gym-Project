function testFunction(param){
    console.log(param);
}
function changeState(state){
    switch(state){
        case 1: overlayLayer.classList.add('is-open');
                mainclose.classList.add('is-close');
            break;
        case 2: overlayLayer.classList.remove('is-open');
                mainclose.classList.remove('is-close');
            loginButton.textContent = 'Hi, Arek';
            break;
        case 3: overlayLayer.classList.remove('is-open');
                mainclose.classList.remove('is-close');
            break;
        default:alert('something went wrong');
    }
}
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

