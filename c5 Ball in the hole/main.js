;

function onDeviceMove(ev) {
    console.log(ev.alpha, ev.beta, ev.gamma);
}

const ball = new Ball();
const sens = new Sensor()
const hole = new Hole();
ball.Position(500, 300)
ball.AddBall();
hole.AddHoles()

window.requestAnimationFrame(sens.Move)
console.dir(ball);