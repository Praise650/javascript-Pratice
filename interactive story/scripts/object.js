import { scenesList, intro } from '../data/scenes.js';

let currentIndex = 0;
let scene = {};

const nextScene = document.getElementById('nextScene');

function getInitScene() {
    scene = scenesList[currentIndex];
    // Check if currentIndex is not at the last scene to avoid accessing out-of-bounds
    if (currentIndex < scenesList.length - 1) {
        scene.nextStep = scenesList[currentIndex + 1].step;
    } else {
        scene.nextStep = "End of scenes";
    }
    console.log(scene);
}

getInitScene();

const updateScene = () => {
    currentIndex++;
    if (currentIndex < scenesList.length) {
        getInitScene();
    } else {
        console.log("End of scenes");
    }
    console.log(currentIndex);
};

// let getNextScene = updateScene();


export { intro, scene, updateScene }
