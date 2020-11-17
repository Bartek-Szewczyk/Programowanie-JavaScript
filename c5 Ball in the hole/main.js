const ball = new Ball();
ball.AddBall(100, 100);
const time = new Time();
const score = new Score();
setInterval(() => {
    score.Win(ball);
}, 100);

window.addEventListener('deviceorientation', ball.Sensors)
window.addEventListener('deviceorientation', time.Start)
setTimeout(() => {
    time.Stop();
    const tt = time.Pomiar(time.stopczas, time.startczas)
    console.log(time);
}, 2000)
window.requestAnimationFrame(ball.Move);

console.dir(ball);