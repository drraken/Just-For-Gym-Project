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
        case 3: overlayLayer.classList.remove('is-open')
            break;
        default:alert('something went wrong');
    }
}