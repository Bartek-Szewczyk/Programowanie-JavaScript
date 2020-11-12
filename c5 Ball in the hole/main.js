window.addEventListener('deviceorientation', onDeviceMove);

function onDeviceMove(ev) {
    console.log(ev.alpha, ev.beta, ev.gamma);
}