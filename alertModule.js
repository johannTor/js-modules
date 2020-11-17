export {test, customAlert};

const test = 'hellooo';
const styleRules = `
.template {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 30%;
    background-color: slateblue;
    z-index: 10;
}

.template p {
    padding: 1rem 1rem;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5rem;
    text-align: center;
}

.template button {
    display: block;
    border: none;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 4.5rem;
    height: 2rem;
    color: #fff;
    background-color: steelblue;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
`;

// Pass in an object and use default values somehow
function customAlert(message, customSetting) {
    let styleEl = document.querySelector('style#customAlertStyle');
    if(!styleEl) {
        styleEl = document.createElement('style');
        styleEl.innerHTML = styleRules;
        styleEl.setAttribute('id', 'customAlertStyle');
        document.body.appendChild(styleEl);
    }
    const overLay = document.createElement('div');
    const divEl = document.createElement('div');
    const pEl = document.createElement('p');
    const buttonEl = document.createElement('button');

    // Text and box styles
    pEl.innerHTML = message;
    overLay.classList.add('overlay');
    divEl.classList.add('template');

    divEl.style.width = customSetting.width || '30%';
    divEl.style.minHeight = customSetting.height || '10%';
    divEl.style.color = customSetting.color || '#000000';
    divEl.style.backgroundColor = customSetting.bgColor || '#faebd7';
    divEl.style.border = customSetting.border || 'none';
    divEl.style.borderRadius = customSetting.borderRad || 'none';

    // Button style
    buttonEl.innerHTML = 'Ok!'
    buttonEl.addEventListener('click', function(ev) {
        ev.currentTarget.parentNode.remove();
        document.querySelector('.overlay').remove();
    });
    
    divEl.appendChild(pEl);
    divEl.appendChild(buttonEl);
    document.body.insertBefore(divEl, document.querySelector('demo-btns'));
    document.body.insertBefore(overLay, divEl);
}