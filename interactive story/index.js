// document.getElementById('demo').innerHTML="Hello";

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
let selectedColor = ['red','blue'];
for(let index = 0; index<maxLenght; index++){
    console.log(index);
    selectedColor.push('gre')
    if(index < 2){
        // return;
    } else{
        selectedColor[index ] = 'green' + index;
    }
}
console.log(selectedColor);

