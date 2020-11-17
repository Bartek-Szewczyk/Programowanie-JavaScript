const ball = new Ball();
ball.AddBall(100, 100);
const time = new Time();
const score = new Score();


setInterval(() => {
    score.Win(ball);
    score.Lose(ball);
}, 100);


window.addEventListener('deviceorientation', ball.Sensors)
window.addEventListener('deviceorientation', time.Start())
console.log(time.startczas);
window.requestAnimationFrame(ball.Move);