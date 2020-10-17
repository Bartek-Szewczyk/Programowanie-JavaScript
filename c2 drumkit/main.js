document.body.addEventListener('keypress', onKeyPress)
document.querySelector('#playbtn').addEventListener('click', playChannel);
const channel = [];
const recordStart = Date.now();


function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
        case "KeyA":
            soundName = "boom";
            sound = document.querySelector("#boom");

            break;
        case "KeyS":
            soundName = "clap";
            sound = document.querySelector("#clap");
            break;
        case "KeyD":
            soundName = "hihat";
            sound = document.querySelector("#hihat");
            break;
        case "KeyF":
            soundName = "kick";
            sound = document.querySelector("#kick");
            break;
        case "KeyG":
            soundName = "openhat";
            sound = document.querySelector("#openhat");
            break;
        case "KeyH":
            soundName = "ride";
            sound = document.querySelector("#ride");
            break;
        case "KeyJ":
            soundName = "snare";
            sound = document.querySelector("#snare");
            break;
        case "KeyK":
            soundName = "tink";
            sound = document.querySelector("#tink");
            break;
        case "KeyL":
            soundName = "tom";
            sound = document.querySelector("#tom");
            break;
    }

    if (sound) {
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime,
        }
        channel.push(recordedSound);
        sound.play();
        drum(soundName)
    }
}

function playChannel() {
    for (let index = 0; index < channel.length; index++) {
        const soundObject = channel[index];


        setTimeout(() => {
            playSound(soundObject.sound)
        }, soundObject.time)
    }
}

function playSound(soundName) {
    const sound = document.querySelector('#' + soundName)
    sound.play();
}

function drum(soundName) {
    const img = document.querySelector('.' + soundName)
    img.classList.add('animation-scale')
    setTimeout(() => {
        img.classList.remove('animation-scale')
    }, 1000)
}