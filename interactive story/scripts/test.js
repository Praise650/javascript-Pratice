import { intro, scene, updateScene } from './object.js';

let buttonList = '';
let actions = null;

const titleElement = document.getElementById('title');
const subTitleElement = document.getElementById('sub-title');
let buttons = document.querySelector('.buttons');

function setTitleAndSubtitle(introText) {
    let intro = introText === undefined ? '':introText;
    titleElement.innerText = '';
    subTitleElement.innerText = '';

    titleElement.innerText += "Title:" + scene.sceneTitle;
    const newLine = intro + ' ' + scene.step;
    textTypingEffect(subTitleElement, newLine);
    createButtons();
}

function createButtons() {
    actions = scene.action.split('or');
    for (let i = 0; i < actions.length; i++) {
        buttonList += `<button class='actionButton'>${actions[i]}</button>`;
    }
    buttons.innerHTML = buttonList;
    addButtonListeners();
}

function handleButtonClick(index) {
    // let nextLine = scenesList[selectedIndex + 1].step;
    const selectedAction = (index === 0) ?
        scene.actionOne + "  " + scene.nextStep : scene.actionTwo;

    textTypingEffect(subTitleElement, selectedAction);
    updateScene()
    setTitleAndSubtitle();
}

function addButtonListeners() {
    const actionButtons = document.querySelectorAll('.actionButton');
    actionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index === 0) {
                console.log("First Index", index);
                handleButtonClick(index);
            } else {
                console.log("Second Index", index);
                handleButtonClick(index);
            }
        });
    });
}

setTitleAndSubtitle(intro);


// text animation effect 
function textTypingEffect(element, text, index = 0) {
    element.textContent += text[index];
    if (index === text.length - 1) {
        return;
    }
    setTimeout(() => textTypingEffect(element, text, index + 1), 50);
}