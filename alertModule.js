export { customAlert};

// Content for the style tag that gets appended to the body
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
    word-wrap: break-word;
}

.template button {
    display: block;
    border: 2px solid black;
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
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
}
`;

// Displays an alert style window with a few customizable settings that get passed in as an object
function customAlert(message, customSetting) {
    // Check if the body already contains a style tag that the alert element uses. If not then create it.
    let styleEl = document.querySelector('style#customAlertStyle');
    if(!styleEl) {
        styleEl = document.createElement('style');
        styleEl.innerHTML = styleRules;
        styleEl.setAttribute('id', 'customAlertStyle');
        document.body.appendChild(styleEl);
    }
    // Creating the dom elements needed for the alert window
    const overLay = document.createElement('div');
    const divEl = document.createElement('div');
    const pEl = document.createElement('p');
    const buttonEl = document.createElement('button');

    pEl.innerHTML = message;

    // The alert uses classes from the styleRules variable for it's base styling
    overLay.classList.add('overlay');
    divEl.classList.add('template');

    // Certain style properties are sent in with an object containing width, height, color, background color, border and border radius values.
    divEl.style.width = customSetting.width || '30%';
    divEl.style.minHeight = customSetting.height || '10%';
    divEl.style.color = customSetting.color || '#000000';
    divEl.style.backgroundColor = customSetting.bgColor || '#faebd7';
    divEl.style.border = customSetting.border || 'none';
    divEl.style.borderRadius = customSetting.borderRad || 'none';

    // Button
    buttonEl.innerHTML = 'Ok!'
    buttonEl.addEventListener('click', function(ev) {
        ev.currentTarget.parentNode.remove();
        document.querySelector('.overlay').remove();
    });
    
    divEl.appendChild(pEl);
    divEl.appendChild(buttonEl);
    document.body.insertBefore(divEl, document.querySelector('demo-btns'));
    // The overlay will block the demo buttons and provide a shade for the background
    document.body.insertBefore(overLay, divEl);
}