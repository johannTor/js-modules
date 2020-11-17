import { test, customAlert } from "./alertModule.js";
const succesBtn = document.getElementById('successBtn');
const warningBtn = document.getElementById('warningBtn');
const errorBtn = document.getElementById('errorBtn');

const btnArr = [succesBtn, warningBtn, errorBtn];
const customSetting = {width: '30%', height: '10%', color: '#000', bgColor: '#90ee90', border: 'none', borderRad: '20px'};

document.addEventListener('DOMContentLoaded', () => {
    succesBtn.addEventListener('click', showSuccessAlert);
    warningBtn.addEventListener('click', showWarningAlert);
    errorBtn.addEventListener('click', showErrorAlert);
});

function showSuccessAlert(ev) {
    customSetting.color = '#000000';
    customSetting.bgColor = '#90ee90';
    customAlert('This operation was successful!', customSetting);
}

function showWarningAlert(ev) {
    customSetting.color = '#000000';
    customSetting.bgColor = '#faebd7';
    customAlert('This operation has some issues!', customSetting);
}

function showErrorAlert(ev) {
    customSetting.color = '#ffffff';
    customSetting.bgColor = '#b22222';
    customAlert('This operation has failed completely!', customSetting);
}