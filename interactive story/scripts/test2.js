import { intro, scene, sceneIndex, updateScene } from './object.js';

let buttonList = '';
let actions = null;

const titleElement = document.getElementById('title');
const subTitleElement = document.getElementById('sub-title');
let buttons = document.querySelector('.buttons');

// const titleElement = document.getElementById('p');
// const subTitleElement = document.createElement('');
// let buttons = document.querySelector('.buttons');

function setTitleAndSubtitle() {
    titleElement.innerText = '';
    subTitleElement.innerText = '';
    buttonList = '';

    titleElement.innerText += "Title:" + scene.sceneTitle;
    textTypingEffect(subTitleElement, scene.step).then(() => {
        createButtons();
    }).catch(err => console.log(err));
}

function createButtons() {
    actions = scene.action.split('or');
    for (let i = 0; i < actions.length; i++) {
        buttonList += `<button class='actionButtonconst titleElement = document.getElementById('title');
        const subTitleElement = document.getElementById('sub-title');'>${actions[i]}</button>`;
    }
    buttons.innerHTML = buttonList;
    addButtonListeners();
}

function handleButtonClick(index) {
    buttonList = ``;
    const selectedAction = (index === 0) ?
        scene.actionOne : scene.actionTwo;

    textTypingEffect(subTitleElement, selectedAction)
        .then(() => {
            if (sceneIndex.selectedIndex < sceneIndex.lastIndex) {
                updateScene()
                setTitleAndSubtitle();
            } else {
            }
        })
        .catch(err => console.log(err));
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

setIntro();

function setIntro() {
    // const titleElement = document.getElementById('title');
    // const subTitleElement = document.getElementById('sub-title');
    titleElement.innerHTML = `<p>Title: Introduction</p>`;
    // subTitleElement.innerHTML = `<p>${intro}</p>`;
    // const newParagraph = document.createElement('p');
    textTypingEffect(intro)
        .then()
        .catch(err => console.log(err));
        console.log(subTitleElement);
}

// text animation effect 
function textTypingEffect(text, index = 0) {
    const newElement = document.getElementById('sub-title');
    return new Promise((resolve, reject) => {
        if (index < text.length) {
            newElement.textContent += text[index];
            setTimeout(() => {
                textTypingEffect(text, index + 1)
                    .then(() => resolve())
                    .catch(reject);
            }, 50);
        } else {
            resolve();
        }
    }, 2000);
}