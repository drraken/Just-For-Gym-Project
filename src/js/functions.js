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