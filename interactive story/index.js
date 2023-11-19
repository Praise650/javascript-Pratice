// document.getElementById('demo').innerHTML="Hello";
// const sayHello = document.querySelector('[onclick="start()"]');

let showNextSection = false;

function showStory(text) {
    const story = document.getElementById('story');
    const newParagraph = document.createElement('span');
    newParagraph.textContent = text;
    story.appendChild(newParagraph);
}

function start() {
    const buttonElement = document.querySelector('.get-started');
    showStory('You choose to explore the misterious forest. ');
    console.log("Say Hello");
    showNextSection = true;
    showStory("You chose to explore the mysterious forest. ");
}

let person = {
    name: "Praise",
    age: 23,
};

allowAccess(person.age);

function allowAccess(age) {
    if (age < 18) {
        console.log('You are not granted access');
    } else {
        console.log('Access granted');
    }
}

const maxLenght = 10;
let selectedColor = ['red', 'blue'];
for (let index = 0; index < maxLenght; index++) {
    console.log(index);
    selectedColor.push('gre')
    if (index < 2) {
        // return;
    } else {
        selectedColor[index] = 'green' + index;
    }
}
console.log(selectedColor);

