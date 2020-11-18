const ball = new Ball();
ball.AddBall(100, 100);
const time = new Time();
const score = new Score();


setInterval(() => {
    if (time.pomiar == undefined) {
        score.Win(ball);
        score.Lose(ball);
    }
}, 100);



window.addEventListener('deviceorientation', ball.Sensors)
window.addEventListener('deviceorientation', time.Start())

window.requestAnimationFrame(ball.Move);