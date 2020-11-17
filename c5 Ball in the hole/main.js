const ball = new Ball();
ball.AddBall(100, 100);
const time = new Time();
const score = new Score();
console.log(time.pomiar);

setInterval(() => {
    score.Win(ball);
}, 100);



window.addEventListener('deviceorientation', ball.Sensors)
window.addEventListener('deviceorientation', time.Start())
console.log(time.startczas);
window.requestAnimationFrame(ball.Move);

console.dir(ball);