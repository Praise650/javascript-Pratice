import { scenesList, intro } from './data/scene.js';

let selectedIndex = 0;
let buttonList = '';
let actions = null;

// const dynamicD = document.querySelector('.dyna');
const titleElement = document.getElementById('title');
const subTitleElement = document.getElementById('sub-title');
let buttons = document.querySelector('.buttons');

function setTitleAndSubtitle() {
    titleElement.innerText = '';
    subTitleElement.innerText = '';

    titleElement.innerText += "Title:" + scenesList[selectedIndex].sceneTitle;
    const newLine = intro + ' ' + scenesList[selectedIndex].step;
    textTypingEffect(subTitleElement, newLine);
    createButtons();
}

function createButtons() {
    actions = scenesList[selectedIndex].action.split('or');
    for (let i = 0; i < actions.length; i++) {
        buttonList += `<button class='actionButton'>${actions[i]}</button>`;
    }
    buttons.innerHTML = buttonList;
    addButtonListeners();
}

function handleButtonClick(index) {
    let nextLine = scenesList[selectedIndex + 1].step;
    const selectedAction = (index === 0) ?
        scenesList[selectedIndex].actionOne + "  " + nextLine : scenesList[selectedIndex].actionTwo;

    textTypingEffect(subTitleElement, selectedAction);
    selectedIndex + 1;
    reRender(selectedIndex);
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

setTitleAndSubtitle();

// text animation effect 
function textTypingEffect(element, text, index = 0) {
    element.textContent += text[index];
    if (index === text.length - 1) {
        return;
    }
    setTimeout(() => textTypingEffect(element, text, index + 1), 50);
}

// displays story
async function showStory(text) {
    const story = document.getElementById('story');
    const newParagraph = document.createElement('span');
    textTypingEffect(newParagraph, text);
    story.appendChild(newParagraph);
}


function reRender(selectedIndex) {
    actions = null;
    let intro = scenesList[selectedIndex + 1].step
    // titleElement.innerText = '';
    // subTitleElement.innerText = '';

    titleElement.innerText += "Title:" + scenesList[selectedIndex].sceneTitle;
    const newLine = scenesList[selectedIndex].step + ' ' + intro;
    textTypingEffect(subTitleElement, newLine);
    createButtons();
}