let scenes = {
    sceneOne: {
        sceneTitle: 'Act 1: Discovery',
        action: "Study or Sell",
        step: `Aiden faces the choice of delving into the 
        artifact's secrets or selling it to a collector 
        for quick profit.`,
        actionOne: `Intrigued by its aura, Aiden chooses 
    to research the artifact. Through tireless nights 
    and endless studies, Aiden uncovers that the artifact 
    possesses the ability to manipulate elemental forces.`,
        actionTwo: `The artifact changes hands and lands 
    in the possession of a wealthy but dubious collector, 
    disappearing into obscurity.`,
    },
    sceneTwo: {
        sceneTitle: 'Act 2: Unleashing Powers',
        action: "Experiment or Hide",
        step: `Aiden is torn between experimenting with 
        the artifact's powers or keeping it hidden from prying eyes.`,
        actionOne: `Eager to understand its potential, Aiden conducts 
        controlled experiments and gains partial control over elemental 
        forces. However, the displays of power attract the attention of 
        a clandestine society coveting the artifact's power.`,
        actionTwo: `Fearful of the unknown, Aiden hides the artifact, 
        but its untamed energies periodically surge uncontrollably, 
        wreaking havoc and drawing attention.`,
    }
};

let scenesList = Object.values(scenes);

export { scenesList, intro};


let intro = `Deep within the dense forests of Eldoria, 
Aiden, a passionate archaeologist, uncovers an 
ancient ruin shrouded in mystery. Amidst the rubble, 
Aiden discovers an enigmatic artifact emitting a faint, 
pulsating glow.`;