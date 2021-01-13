document.body.addEventListener('keypress', onKeyPress)
const channel = [];
const channel2 = [];
const channel3 = [];
const channel4 = [];
let rec;
document.querySelector('#playbtn').addEventListener('click', () => {
    playChannel(channel)
});
document.querySelector('#playbtn2').addEventListener('click', () => {
    playChannel(channel2)
});
document.querySelector('#playbtn3').addEventListener('click', () => {
    playChannel(channel3)
});
document.querySelector('#playbtn4').addEventListener('click', () => {
    playChannel(channel4)
});
document.querySelector('#playAllbtn').addEventListener('click', () => {

    console.log(channel);
    console.log(channel2);
    console.log(channel3);
    console.log(channel4);
    const allChannel = channel.concat(channel2, channel3, channel4);
    console.log(allChannel);
    playChannel(allChannel);
})
let recordStart;
let recordStart2;
console.log(recordStart);
document.querySelector('#recordbtn').addEventListener('click', () => {
    recordStart = Date.now();
    rec = 1;
})
document.querySelector('#recordbtn2').addEventListener('click', () => {
    recordStart2 = Date.now();
    rec = 2;
})
document.querySelector('#recordbtn3').addEventListener('click', () => {
    recordStart3 = Date.now();
    rec = 3;
})
document.querySelector('#recordbtn4').addEventListener('click', () => {
    recordStart4 = Date.now();
    rec = 4;
})





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

    if (sound && rec == 1) {
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime,
        }
        channel.push(recordedSound);

        sound.play();
        drum(soundName)
    }
    if (sound && rec == 2) {
        const keyPressTime = Date.now() - recordStart2;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime,
        }
        channel2.push(recordedSound);
        sound.play();
        drum(soundName)
    }
    if (sound && rec == 3) {
        const keyPressTime = Date.now() - recordStart3;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime,
        }
        channel3.push(recordedSound);
        sound.play();
        drum(soundName)
    }
    if (sound && rec == 4) {
        const keyPressTime = Date.now() - recordStart4;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime,
        }
        channel4.push(recordedSound);
        sound.play();
        drum(soundName)
    } else if (sound) {
        sound.play();
        drum(soundName)
    }
}

function playChannel(channel) {
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