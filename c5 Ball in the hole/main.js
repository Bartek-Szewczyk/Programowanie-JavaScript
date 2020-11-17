;

function onDeviceMove(ev) {
    console.log(ev.alpha, ev.beta, ev.gamma);
}

const ball = new Ball();
const hole = new Hole();

ball.AddBall(100, 100);
hole.AddHoles()

window.addEventListener('deviceorientation', ball.Sensors)

window.requestAnimationFrame(ball.Move);
console.dir(ball);