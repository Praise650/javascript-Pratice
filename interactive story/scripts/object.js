import { scenesList, intro } from '../data/scenes.js';

let currentIndex = 0;
let scene = {};
let sceneIndex= {
    selectedIndex: currentIndex,
    lastIndex: scenesList.length - 1,
}

function getInitScene() {
    scene = scenesList[currentIndex];
    // Check if currentIndex is not at the last scene to avoid accessing out-of-bounds
    // if (currentIndex < scenesList.length - 1) {
    //     scene.nextStep = scenesList[currentIndex].step;
    // } else {
    //     scene.nextStep = "End of scenes";
    // }
    console.log(scene);
}

getInitScene();

const updateScene = () => {
    if (currentIndex < scenesList.length) {
        currentIndex++;
        getInitScene();
    } else {
        console.log("End of Scene");
    }
    console.log(currentIndex);
};


export { intro, scene, sceneIndex, updateScene }
