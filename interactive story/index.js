import { scenesList, intro } from './data/scene.js';


let selectedIndex = 0;
let actions = null;
let buttonList = '';

const dynamicD = document.querySelector('.dyna');
const titleElement = document.getElementById('title');
const subTitleElement = document.getElementById('sub-title');
let buttons = document.querySelector('.buttons');

titleElement.innerText = '';
subTitleElement.innerText = '';

titleElement.innerText += "Title:" + scenesList[selectedIndex].sceneTitle;
const newParagraph = document.createElement('span');

const newLine = intro +' '+ scenesList[selectedIndex].step;
textTypingEffect(subTitleElement, newLine);
dynamicD.appendChild(newParagraph);

actions = scenesList[selectedIndex].action.split('or');
for (let i = 0; i < actions.length; i++) {
  buttonList += `<button class='actionButton'>${actions[i]}</button>`;
}

buttons.innerHTML = buttonList;

const actionButtons = document.querySelectorAll('.actionButton');

actionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index === 0) {
      console.log("First Index", index);
      const newLine = scenesList[selectedIndex].actionOne;
      textTypingEffect(subTitleElement, newLine);
    } else {
      console.log("Second Index", index);
      const newLine = scenesList[selectedIndex].actionTwo;
      textTypingEffect(subTitleElement, newLine);
    }
    // travaseList();
    // if(actionButtons.keys)
  });
});


function travaseList() {
  selectedIndex += 1;
  console.log(selectedIndex);
  buttonList = '';
}

// the cooking that currently works 
// function main() {
//   // let adventurer = "";
//     // adventurer = prompt("What is your name", adventurer);
// }

// const setPersonal = document.querySelector('.begin');
// const dropdown = document.querySelector('.dropdown');
// const dropdownOption = document.querySelector('.dropdown-option');

// dropdown.style.display = 'none';

// // Function to toggle the dropdown visibility
// function toggleDropdown() {
//     if (dropdown.style.display === 'none') {
//         dropdown.style.display = 'block';
//         setPersonal.style.display = 'none';
//     } else {
//         dropdown.style.display = 'none';
//     }
// }

// // Event listener for the button to toggle the dropdown
// setPersonal.addEventListener('click', toggleDropdown);

// // Event listener for the dropdown options
// dropdownOption.addEventListener('change', function () {
//     const selectedOption = dropdownOption.value;
//     // Do something based on the selected option
//     if (selectedOption === 'hobbyist') {
//         dropdown.style.display = 'none';
//         start();
//     } else {
//         console.log('Selected:', selectedOption);
//     }
// });

function start() {
  const buttonsElement = document.querySelector('.buttons');
  showStory("Deep within the dense forests of Eldoria, Aiden, a passionate archaeologist, uncovers an ancient ruin shrouded in mystery. Amidst the rubble, Aiden discovers an enigmatic artifact emitting a faint, pulsating glow. Aiden faces the choice of delving into the artifact's secrets or selling it to a collector for quick profit.").then(
    () => buttonsElement.innerHTML = `
        <button onclick="decisionPoint('left')">Study</button>
        <button onclick="decisionPoint('right')">Sell</button>
      `,);
}

function decisionPoint(choice) {
  const buttonsElement = document.querySelector('.buttons');

  if (choice === 'left') {
    showStory("Intrigued by its aura, Aiden chooses to research the artifact. Through tireless nights and endless studies, Aiden uncovers that the artifact possesses the ability to manipulate elemental forces. Aiden is torn between experimenting with the artifact's powers or keeping it hidden from prying eyes.");
    buttonsElement.innerHTML = `
        <button onclick="decisionPoint2('left')">Continue</button>
        <button onclick="decisionPoint2('right')">Sell</button>
      `;
  } else if (choice === 'right') {
    showStory("The artifact changes hands and lands in the possession of a wealthy but dubious collector, disappearing into obscurity.");
  }
}

function decisionPoint2(choice) {
  const storyElement = document.getElementById('story');

  if (choice === 'left') {
    showStory("You followed the elder's guidance and found a hidden shortcut to the amulet's location.");
  } else if (choice === 'right') {
    showStory("You disregarded the elder's advice, resulting in a longer journey with unexpected hurdles.");
  }
}


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

// let person = {
//     name: "Praise",
//     age: 23,
// };

// allowAccess(person.age);

// function allowAccess(age) {
//     if (age < 18) {
//         console.log('You are not granted access');
//     } else {
//         console.log('Access granted');
//     }
// }

// const maxLenght = 10;
// let selectedColor = ['red', 'blue'];
// for (let index = 0; index < maxLenght; index++) {
//     console.log(index);
//     selectedColor.push('gre')
//     if (index < 2) {
//         // return;
//     } else {
//         selectedColor[index] = 'green' + index;
//     }
// }
// console.log(selectedColor);

